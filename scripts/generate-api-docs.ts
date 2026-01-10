/**
 * Generate API Documentation from GraphQL Schema
 *
 * This script fetches the GraphQL schema from the agio-monorepo repository
 * and generates markdown documentation for the VitePress site.
 *
 * Usage:
 *   yarn generate:api-docs
 *
 * Environment variables:
 *   GITHUB_TOKEN - Optional GitHub token for higher rate limits
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLField, GraphQLType, GraphQLInputObjectType } from "graphql";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_OWNER = "agio-digital";
const REPO_NAME = "agio-monorepo";
const SCHEMA_PATH = "services/agio-platform-api/src/graphql/type-defs";
const OUTPUT_DIR = path.join(__dirname, "../docs/pages/api/generated");

interface SchemaFile {
  name: string;
  content: string;
}

function fetchFileFromGitHub(filePath: string): string | null {
  try {
    const result = execSync(`gh api repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath} --jq '.content' | base64 -d`, { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"] });
    return result;
  } catch (error) {
    console.warn(`Could not fetch ${filePath}`);
    return null;
  }
}

function listDirectoryFiles(dirPath: string): string[] {
  try {
    const result = execSync(`gh api repos/${REPO_OWNER}/${REPO_NAME}/contents/${dirPath} --jq '.[].name'`, { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"] });
    return result
      .trim()
      .split("\n")
      .filter((f) => f.endsWith(".graphql"));
  } catch (error) {
    console.error(`Could not list directory ${dirPath}`);
    return [];
  }
}

async function fetchSchemaFiles(): Promise<SchemaFile[]> {
  console.log("Fetching schema files from GitHub...");

  const files = listDirectoryFiles(SCHEMA_PATH);
  console.log(`Found ${files.length} schema files`);

  const schemaFiles: SchemaFile[] = [];

  for (const file of files) {
    const content = fetchFileFromGitHub(`${SCHEMA_PATH}/${file}`);
    if (content) {
      schemaFiles.push({ name: file, content });
      console.log(`  Fetched: ${file}`);
    }
  }

  return schemaFiles;
}

function getTypeName(type: GraphQLType): string {
  if ("ofType" in type && type.ofType) {
    const inner = getTypeName(type.ofType);
    if ("kind" in type) {
      if ((type as any).kind === "NON_NULL") return `${inner}!`;
      if ((type as any).kind === "LIST") return `[${inner}]`;
    }
    const typeName = (type as any).constructor?.name || "";
    if (typeName.includes("NonNull")) return `${inner}!`;
    if (typeName.includes("List")) return `[${inner}]`;
    return inner;
  }
  return (type as any).name || "Unknown";
}

function generateFieldMarkdown(field: GraphQLField<any, any>): string {
  const args = field.args.map((arg) => `${arg.name}: ${getTypeName(arg.type)}`).join(", ");
  const argsStr = args ? `(${args})` : "";
  const returnType = getTypeName(field.type);

  return `| \`${field.name}\` | \`${returnType}\` | ${field.description || "-"} |`;
}

function generateQueriesMarkdown(schema: GraphQLSchema): string {
  const queryType = schema.getQueryType();
  if (!queryType) return "";

  const fields = queryType.getFields();
  let markdown = `---
footer: false
---

# Generated Queries Reference

> This file is auto-generated from the GraphQL schema. Do not edit directly.

## Available Queries

| Query | Return Type | Description |
|-------|-------------|-------------|
`;

  for (const [name, field] of Object.entries(fields)) {
    markdown += generateFieldMarkdown(field) + "\n";
  }

  return markdown;
}

function generateMutationsMarkdown(schema: GraphQLSchema): string {
  const mutationType = schema.getMutationType();
  if (!mutationType) return "";

  const fields = mutationType.getFields();
  let markdown = `---
footer: false
---

# Generated Mutations Reference

> This file is auto-generated from the GraphQL schema. Do not edit directly.

## Available Mutations

| Mutation | Return Type | Description |
|----------|-------------|-------------|
`;

  for (const [name, field] of Object.entries(fields)) {
    markdown += generateFieldMarkdown(field) + "\n";
  }

  return markdown;
}

function generateTypesMarkdown(schema: GraphQLSchema): string {
  const typeMap = schema.getTypeMap();

  let markdown = `---
footer: false
---

# Generated Types Reference

> This file is auto-generated from the GraphQL schema. Do not edit directly.

`;

  // Filter to user-defined types (not built-in or introspection)
  const userTypes = Object.entries(typeMap)
    .filter(
      ([name, type]) =>
        !name.startsWith("__") && !["String", "Int", "Float", "Boolean", "ID"].includes(name) && (type instanceof GraphQLObjectType || type instanceof GraphQLInputObjectType)
    )
    .sort(([a], [b]) => a.localeCompare(b));

  for (const [name, type] of userTypes) {
    if (type instanceof GraphQLObjectType) {
      const fields = type.getFields();
      markdown += `## ${name}\n\n`;
      markdown += `${type.description || ""}\n\n`;
      markdown += `| Field | Type | Description |\n`;
      markdown += `|-------|------|-------------|\n`;

      for (const [fieldName, field] of Object.entries(fields)) {
        const fieldType = getTypeName(field.type);
        markdown += `| \`${fieldName}\` | \`${fieldType}\` | ${field.description || "-"} |\n`;
      }
      markdown += "\n---\n\n";
    } else if (type instanceof GraphQLInputObjectType) {
      const fields = type.getFields();
      markdown += `## ${name} (Input)\n\n`;
      markdown += `${type.description || ""}\n\n`;
      markdown += `| Field | Type | Description |\n`;
      markdown += `|-------|------|-------------|\n`;

      for (const [fieldName, field] of Object.entries(fields)) {
        const fieldType = getTypeName(field.type);
        markdown += `| \`${fieldName}\` | \`${fieldType}\` | ${field.description || "-"} |\n`;
      }
      markdown += "\n---\n\n";
    }
  }

  return markdown;
}

async function main() {
  console.log("=== API Documentation Generator ===\n");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}\n`);
  }

  // Fetch schema files
  const schemaFiles = await fetchSchemaFiles();

  if (schemaFiles.length === 0) {
    console.log("\nNo schema files found. Creating placeholder files...");

    // Create placeholder files
    const placeholderContent = `---
footer: false
---

# Generated Documentation

> Schema files could not be fetched. This is a placeholder.

To generate documentation, ensure you have:
1. The \`gh\` CLI installed and authenticated
2. Access to the agio-digital/agio-monorepo repository

Run \`yarn generate:api-docs\` to regenerate.
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, "queries.md"), placeholderContent);
    fs.writeFileSync(path.join(OUTPUT_DIR, "mutations.md"), placeholderContent);
    fs.writeFileSync(path.join(OUTPUT_DIR, "types.md"), placeholderContent);

    console.log("Placeholder files created.");
    return;
  }

  // Combine all schema files
  console.log("\nBuilding schema...");
  const combinedSchema = schemaFiles.map((f) => f.content).join("\n\n");

  try {
    const schema = buildSchema(combinedSchema);

    // Generate documentation
    console.log("Generating documentation...\n");

    const queriesDoc = generateQueriesMarkdown(schema);
    const mutationsDoc = generateMutationsMarkdown(schema);
    const typesDoc = generateTypesMarkdown(schema);

    // Write files
    fs.writeFileSync(path.join(OUTPUT_DIR, "queries.md"), queriesDoc);
    console.log("  Written: queries.md");

    fs.writeFileSync(path.join(OUTPUT_DIR, "mutations.md"), mutationsDoc);
    console.log("  Written: mutations.md");

    fs.writeFileSync(path.join(OUTPUT_DIR, "types.md"), typesDoc);
    console.log("  Written: types.md");

    console.log("\n=== Documentation generated successfully! ===");
  } catch (error) {
    console.error("\nError building schema:", error);
    console.log("\nCreating placeholder files instead...");

    const errorContent = `---
footer: false
---

# Generated Documentation

> Schema parsing encountered an error. Manual documentation is available in the main API reference pages.

See:
- [Queries Reference](/api/queries)
- [Mutations Reference](/api/mutations)
- [Types Reference](/api/types)
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, "queries.md"), errorContent);
    fs.writeFileSync(path.join(OUTPUT_DIR, "mutations.md"), errorContent);
    fs.writeFileSync(path.join(OUTPUT_DIR, "types.md"), errorContent);
  }
}

main().catch(console.error);
