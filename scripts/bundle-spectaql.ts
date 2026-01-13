/**
 * Bundle SpectaQL Output
 *
 * This script takes the SpectaQL output and creates a single self-contained
 * HTML file with all CSS and JS inlined. This bundled file is then exported
 * as a TypeScript module that can be imported by Vue components.
 *
 * The bundled content is only rendered after authentication, ensuring the
 * API documentation is never publicly accessible.
 *
 * Usage:
 *   yarn bundle:spectaql
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");

const SPECTAQL_OUTPUT = path.join(ROOT_DIR, "spectaql/output");
const BUNDLE_OUTPUT = path.join(ROOT_DIR, "docs/.vitepress/theme/data/spectaql-bundle.ts");

function bundleSpectaQL(): void {
  console.log("=== Bundling SpectaQL Documentation ===\n");

  const indexPath = path.join(SPECTAQL_OUTPUT, "index.html");
  const cssPath = path.join(SPECTAQL_OUTPUT, "stylesheets/spectaql.min.css");
  const jsPath = path.join(SPECTAQL_OUTPUT, "javascripts/spectaql.min.js");

  // Check if files exist
  if (!fs.existsSync(indexPath)) {
    console.error("Error: SpectaQL output not found. Run 'yarn generate:spectaql' first.");
    process.exit(1);
  }

  // Read all files
  let html = fs.readFileSync(indexPath, "utf-8");
  const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf-8") : "";
  const js = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, "utf-8") : "";

  // Inline CSS - replace link tag with style tag
  html = html.replace(/<link\s+rel="stylesheet"\s+href="stylesheets\/spectaql\.min\.css"\s*\/?>/gi, `<style>${css}</style>`);

  // Inline JS - replace script src with inline script
  html = html.replace(/<script\s+src="javascripts\/spectaql\.min\.js"\s*><\/script>/gi, `<script>${js}</script>`);

  // Add security headers via meta tags
  const securityMeta = `
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline'; script-src 'unsafe-inline'; style-src 'unsafe-inline';">
    <meta name="referrer" content="no-referrer">
  `;
  html = html.replace("<head>", `<head>${securityMeta}`);

  // Ensure output directory exists
  const outputDir = path.dirname(BUNDLE_OUTPUT);
  fs.mkdirSync(outputDir, { recursive: true });

  // Write as TypeScript module
  const tsContent = `/**
 * Auto-generated SpectaQL bundle - DO NOT EDIT
 * Generated at: ${new Date().toISOString()}
 *
 * This file contains the complete SpectaQL documentation as a base64-encoded
 * HTML blob. It is only loaded after user authentication is verified.
 */

// Base64 encoded self-contained HTML
export const SPECTAQL_HTML_BASE64 = "${Buffer.from(html).toString("base64")}";

// Helper to create a blob URL from the encoded content
export function createSpectaQLBlobURL(): string {
  const html = atob(SPECTAQL_HTML_BASE64);
  const blob = new Blob([html], { type: "text/html" });
  return URL.createObjectURL(blob);
}

// Helper to revoke a blob URL when done
export function revokeSpectaQLBlobURL(url: string): void {
  URL.revokeObjectURL(url);
}
`;

  fs.writeFileSync(BUNDLE_OUTPUT, tsContent);

  console.log(`Bundled SpectaQL documentation to: ${BUNDLE_OUTPUT}`);
  console.log(`Original size: ${(fs.statSync(indexPath).size / 1024).toFixed(1)} KB`);
  console.log(`Bundle size: ${(Buffer.from(html).length / 1024).toFixed(1)} KB (before base64)`);
  console.log("\n=== Bundle Complete ===\n");
}

bundleSpectaQL();
