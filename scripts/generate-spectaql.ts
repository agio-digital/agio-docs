/**
 * Generate SpectaQL API Documentation
 *
 * This script generates interactive GraphQL documentation using SpectaQL
 * for both the Platform API and Hasura API endpoints.
 *
 * Usage:
 *   yarn generate:spectaql
 *
 * Environment variables (can be set in .env file):
 *   AGIO_API_KEY - API key for Platform API introspection
 *   HASURA_ADMIN_SECRET - Admin secret for Hasura introspection
 */

import "dotenv/config";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");

interface SpectaQLConfig {
  name: string;
  configFile: string;
  outputDir: string;
  requiredEnvVar: string;
}

const configs: SpectaQLConfig[] = [
  {
    name: "Platform API",
    configFile: path.join(ROOT_DIR, "spectaql/platform-api.yml"),
    outputDir: path.join(ROOT_DIR, "docs/public/spectaql/platform-api"),
    requiredEnvVar: "AGIO_API_KEY"
  },
  {
    name: "Hasura API",
    configFile: path.join(ROOT_DIR, "spectaql/hasura.yml"),
    outputDir: path.join(ROOT_DIR, "docs/public/spectaql/hasura"),
    requiredEnvVar: "HASURA_ADMIN_SECRET"
  }
];

function createPlaceholderPage(outputDir: string, name: string, error: string): void {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} Documentation</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #f8fafc;
      color: #334155;
    }
    .container {
      text-align: center;
      max-width: 500px;
      padding: 2rem;
    }
    h1 { color: #193f66; margin-bottom: 1rem; }
    p { line-height: 1.6; }
    .error {
      background: #fee2e2;
      color: #991b1b;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      font-family: monospace;
      font-size: 0.875rem;
      text-align: left;
      overflow-x: auto;
    }
    a { color: #2563eb; }
  </style>
</head>
<body>
  <div class="container">
    <h1>${name}</h1>
    <p>API documentation could not be generated at build time.</p>
    <p>This may be due to missing credentials or network issues.</p>
    <p>See the <a href="/api/graphql-overview">manual documentation</a> for API reference.</p>
    <div class="error">${error}</div>
  </div>
</body>
</html>`;

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html);
}

function generateDocs(config: SpectaQLConfig): boolean {
  console.log(`\n=== Generating ${config.name} documentation ===\n`);

  // Check for required environment variable
  const envValue = process.env[config.requiredEnvVar];
  if (!envValue) {
    console.warn(`Warning: ${config.requiredEnvVar} not set, creating placeholder...`);
    createPlaceholderPage(config.outputDir, config.name, `Missing environment variable: ${config.requiredEnvVar}`);
    return false;
  }

  // Create output directory
  fs.mkdirSync(config.outputDir, { recursive: true });

  try {
    // Run SpectaQL
    execSync(`npx spectaql "${config.configFile}" -t "${config.outputDir}"`, {
      cwd: ROOT_DIR,
      stdio: "inherit",
      env: {
        ...process.env
        // Ensure env vars are available for config interpolation
      }
    });

    console.log(`\nSuccessfully generated ${config.name} docs at ${config.outputDir}`);
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`\nFailed to generate ${config.name} docs:`, errorMessage);
    createPlaceholderPage(config.outputDir, config.name, errorMessage);
    return false;
  }
}

async function main(): Promise<void> {
  console.log("===========================================");
  console.log("    SpectaQL API Documentation Generator   ");
  console.log("===========================================");

  // Ensure output parent directory exists
  const spectaqlOutputDir = path.join(ROOT_DIR, "docs/public/spectaql");
  fs.mkdirSync(spectaqlOutputDir, { recursive: true });

  let successCount = 0;
  const totalCount = configs.length;

  for (const config of configs) {
    if (generateDocs(config)) {
      successCount++;
    }
  }

  console.log("\n===========================================");
  console.log(`    Results: ${successCount}/${totalCount} generated successfully`);
  console.log("===========================================\n");

  // Don't fail the build if docs couldn't be generated
  // This allows the main docs site to still build
  if (successCount === 0) {
    console.log("Note: No API docs were generated, but build will continue.");
    console.log("Set AGIO_API_KEY and HASURA_ADMIN_SECRET to enable generation.");
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
