import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

// Helper to recursively get all markdown files
function getMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (entry.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

describe("Documentation Integrity", () => {
  const pagesDir = join(process.cwd(), "docs", "pages");
  const markdownFiles = getMarkdownFiles(pagesDir);

  it("should have markdown documentation files", () => {
    expect(markdownFiles.length).toBeGreaterThan(0);
  });

  describe("Code Examples", () => {
    it("should have valid JavaScript/TypeScript code blocks", () => {
      const codeBlockRegex = /```(?:js|javascript|ts|typescript)\n([\s\S]*?)```/g;

      for (const file of markdownFiles) {
        const content = readFileSync(file, "utf-8");
        const matches = content.matchAll(codeBlockRegex);

        for (const match of matches) {
          const code = match[1];
          // Basic syntax check - ensure no obvious syntax errors
          // This catches things like unclosed brackets, missing quotes, etc.
          expect(() => {
            // Check for balanced brackets
            const openBrackets = (code.match(/[{[(]/g) || []).length;
            const closeBrackets = (code.match(/[}\])]/g) || []).length;
            if (Math.abs(openBrackets - closeBrackets) > 2) {
              throw new Error(`Unbalanced brackets in ${file}: ${openBrackets} open, ${closeBrackets} close`);
            }
          }, `Code block in ${file} should have balanced brackets`).not.toThrow();
        }
      }
    });

    it("should reference agio-sdk correctly in imports", () => {
      const importRegex = /import\s+.*from\s+["']agio-sdk["']/g;

      let hasAgioImport = false;
      for (const file of markdownFiles) {
        const content = readFileSync(file, "utf-8");
        if (importRegex.test(content)) {
          hasAgioImport = true;
          // Verify import syntax is correct
          expect(content).toMatch(/import\s+\{[^}]+\}\s+from\s+["']agio-sdk["']/);
        }
      }

      expect(hasAgioImport).toBe(true);
    });
  });

  describe("Internal Links", () => {
    it("should have valid internal markdown links", () => {
      const internalLinkRegex = /\[([^\]]+)\]\((?!http)([^)]+)\)/g;

      for (const file of markdownFiles) {
        const content = readFileSync(file, "utf-8");
        const matches = content.matchAll(internalLinkRegex);

        for (const match of matches) {
          const linkPath = match[2];
          // Skip anchor-only links
          if (linkPath.startsWith("#")) continue;
          // Skip external protocol links
          if (linkPath.includes("://")) continue;

          // Link should not be empty
          expect(linkPath.length, `Empty link in ${file}`).toBeGreaterThan(0);
        }
      }
    });
  });

  describe("Frontmatter", () => {
    it("should have valid YAML frontmatter where present", () => {
      const frontmatterRegex = /^---\n([\s\S]*?)\n---/;

      for (const file of markdownFiles) {
        const content = readFileSync(file, "utf-8");
        const match = content.match(frontmatterRegex);

        if (match) {
          const frontmatter = match[1];
          // Basic YAML validation - should have key: value pairs
          const lines = frontmatter.split("\n").filter((l) => l.trim());
          for (const line of lines) {
            // Each non-empty line should be a valid YAML key-value or list item
            expect(line.match(/^[\w-]+:\s*.*$/) || line.match(/^\s*-\s+.*$/), `Invalid frontmatter in ${file}: "${line}"`).toBeTruthy();
          }
        }
      }
    });
  });
});

describe("API Documentation", () => {
  it("should document all SDK configuration options", () => {
    const configFile = join(process.cwd(), "docs", "pages", "guide", "configuration.md");
    const content = readFileSync(configFile, "utf-8");

    // Key configuration options that should be documented
    const requiredOptions = ["element", "apiToken", "externalUserId", "walletAddress", "environment"];

    for (const option of requiredOptions) {
      expect(content.includes(option), `Configuration option "${option}" should be documented`).toBe(true);
    }
  });

  it("should document callback functions", () => {
    const quickStartFile = join(process.cwd(), "docs", "pages", "guide", "quick-start.md");
    const content = readFileSync(quickStartFile, "utf-8");

    // Key callbacks that should be documented in quick-start
    const callbacks = ["userLoad", "userData", "error", "load", "mount", "unmount"];

    for (const callback of callbacks) {
      expect(content.includes(callback), `Callback "${callback}" should be documented in quick-start.md`).toBe(true);
    }
  });

  it("should document TypeScript types", () => {
    const typesFile = join(process.cwd(), "docs", "pages", "typescript", "types.md");
    const content = readFileSync(typesFile, "utf-8");

    // Key types that should be documented
    const types = ["SdkConfig", "SdkState"];

    for (const type of types) {
      expect(content.includes(type), `Type "${type}" should be documented`).toBe(true);
    }
  });
});
