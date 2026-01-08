import { describe, it, expect } from "vitest";
import { execSync } from "child_process";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

describe("VitePress Build", () => {
  it("should have required source files", () => {
    const docsDir = join(process.cwd(), "docs");
    const pagesDir = join(docsDir, "pages");

    expect(existsSync(docsDir)).toBe(true);
    expect(existsSync(pagesDir)).toBe(true);
    expect(existsSync(join(docsDir, ".vitepress", "config.ts"))).toBe(true);
  });

  it("should have all required documentation sections", () => {
    const pagesDir = join(process.cwd(), "docs", "pages");
    const sections = readdirSync(pagesDir);

    expect(sections).toContain("guide");
    expect(sections).toContain("examples");
    expect(sections).toContain("typescript");
    expect(sections).toContain("data");
  });

  it("should have guide documentation files", () => {
    const guideDir = join(process.cwd(), "docs", "pages", "guide");
    const files = readdirSync(guideDir);

    expect(files).toContain("introduction.md");
    expect(files).toContain("quick-start.md");
    expect(files).toContain("configuration.md");
  });

  it("should build successfully", () => {
    // This test runs the actual build - may be slow
    // Skip in watch mode, run in CI
    const result = execSync("yarn build", {
      encoding: "utf-8",
      timeout: 120000
    });

    expect(result).toContain("build complete");
  });

  it("should generate output files after build", () => {
    const distDir = join(process.cwd(), "docs", ".vitepress", "dist");

    expect(existsSync(distDir)).toBe(true);
    expect(existsSync(join(distDir, "index.html"))).toBe(true);
  });
});
