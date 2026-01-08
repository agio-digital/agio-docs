import { describe, it, expect } from "vitest";

// Test that agio-sdk package is importable and has expected exports
describe("Agio SDK Package", () => {
  it("should be importable", async () => {
    const sdk = await import("agio-sdk");
    expect(sdk).toBeDefined();
  });

  it("should export createAgioSdk function", async () => {
    const sdk = await import("agio-sdk");
    expect(typeof sdk.createAgioSdk).toBe("function");
  });
});

// Test SDK configuration types match documentation
describe("SDK Configuration Examples", () => {
  it("should accept basic configuration", async () => {
    const { createAgioSdk } = await import("agio-sdk");

    // Basic config from quick-start.md
    const config = {
      element: "#iframe",
      apiToken: "00000000-0000-0000-0000-000000000000",
      externalUserId: "example-9ebc4a1a"
    };

    // Should not throw when creating SDK instance
    expect(() => createAgioSdk(config)).not.toThrow();
  });

  it("should accept advanced configuration with callbacks", async () => {
    const { createAgioSdk } = await import("agio-sdk");

    // Advanced config from configuration.md
    const config = {
      element: "#iframe",
      apiToken: "00000000-0000-0000-0000-000000000000",
      externalUserId: "example-9ebc4a1a",
      walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
      cleanWallet: true,
      environment: "development" as const,
      on: {
        userLoad: (data: unknown) => console.log("userLoad", data),
        userData: (data: unknown) => console.log("userData", data),
        error: (error: unknown) => console.error("error", error),
        load: (iframe: unknown) => console.log("load", iframe),
        mount: (state: unknown) => console.log("mount", state),
        unmount: (state: unknown) => console.log("unmount", state)
      }
    };

    expect(() => createAgioSdk(config)).not.toThrow();
  });

  it("should create SDK with KYB options", async () => {
    const { createAgioSdk } = await import("agio-sdk");

    const config = {
      element: "#iframe",
      apiToken: "00000000-0000-0000-0000-000000000000",
      externalUserId: "business-user-001",
      kyb: true,
      useAlternativeKycLevel: false
    };

    expect(() => createAgioSdk(config)).not.toThrow();
  });
});

// Test SDK state and methods
describe("SDK State and Methods", () => {
  it("should return SDK state with expected properties", async () => {
    const { createAgioSdk } = await import("agio-sdk");

    const sdk = createAgioSdk({
      element: "#iframe",
      apiToken: "00000000-0000-0000-0000-000000000000",
      externalUserId: "test-user"
    });

    expect(sdk).toHaveProperty("config");
    expect(sdk).toHaveProperty("mounted");
    expect(typeof sdk.mount).toBe("function");
    expect(typeof sdk.unmount).toBe("function");
  });

  it("should have correct state after creation", async () => {
    const { createAgioSdk } = await import("agio-sdk");

    const sdk = createAgioSdk({
      element: "#iframe",
      apiToken: "00000000-0000-0000-0000-000000000000",
      externalUserId: "test-user"
    });

    // SDK auto-mounts on creation
    expect(sdk.mounted).toBe(true);
    // Config should be set
    expect(sdk.config.externalUserId).toBe("test-user");
  });
});
