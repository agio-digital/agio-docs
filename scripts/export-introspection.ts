/**
 * Export GraphQL Introspection JSON
 *
 * Exports introspection results from GraphQL APIs to JSON files.
 * These files are used by SpectaQL for faster documentation generation.
 *
 * Usage:
 *   yarn export:introspection
 *
 * Environment variables (from .env):
 *   AGIO_API_KEY - API key for Platform API
 *   HASURA_ADMIN_SECRET - Admin secret for Hasura
 */

import "dotenv/config";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");

const INTROSPECTION_QUERY = `
  query IntrospectionQuery {
    __schema {
      queryType { name }
      mutationType { name }
      subscriptionType { name }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface ApiConfig {
  name: string;
  url: string;
  headers: Record<string, string>;
  outputFile: string;
}

const apis: ApiConfig[] = [
  {
    name: "Platform API",
    url: "https://dev.api.agiodigital.com/graphql",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.AGIO_API_KEY || ""
    },
    outputFile: path.join(ROOT_DIR, "spectaql/introspection/platform-api.json")
  },
  {
    name: "Hasura API",
    url: "https://develop-agiodigital.hasura.app/v1/graphql",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET || ""
    },
    outputFile: path.join(ROOT_DIR, "spectaql/introspection/hasura.json")
  }
];

async function exportIntrospection(api: ApiConfig): Promise<boolean> {
  console.log(`\n=== Exporting ${api.name} introspection ===\n`);

  // Check for required credentials
  const hasCredentials = Object.values(api.headers).every((v) => v && v !== "");
  if (!hasCredentials) {
    console.warn(`Warning: Missing credentials for ${api.name}, skipping...`);
    return false;
  }

  try {
    console.log(`Fetching from ${api.url}...`);

    const response = await fetch(api.url, {
      method: "POST",
      headers: api.headers,
      body: JSON.stringify({ query: INTROSPECTION_QUERY })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    // Ensure output directory exists
    const outputDir = path.dirname(api.outputFile);
    fs.mkdirSync(outputDir, { recursive: true });

    // Write introspection result
    fs.writeFileSync(api.outputFile, JSON.stringify(result, null, 2));

    const stats = fs.statSync(api.outputFile);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`Wrote ${api.outputFile} (${sizeMB} MB)`);

    return true;
  } catch (error) {
    console.error(`Failed to export ${api.name}:`, error);
    return false;
  }
}

async function main(): Promise<void> {
  console.log("=============================================");
  console.log("    GraphQL Introspection Export             ");
  console.log("=============================================");

  let successCount = 0;

  for (const api of apis) {
    if (await exportIntrospection(api)) {
      successCount++;
    }
  }

  console.log("\n=============================================");
  console.log(`    Results: ${successCount}/${apis.length} exported successfully`);
  console.log("=============================================\n");

  if (successCount === 0) {
    console.log("No introspection files exported.");
    console.log("Ensure AGIO_API_KEY and HASURA_ADMIN_SECRET are set in .env");
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
