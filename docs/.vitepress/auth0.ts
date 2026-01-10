import { createAuth0 } from "@auth0/auth0-vue";

// Only create Auth0 instance on client-side
const isClient = typeof window !== "undefined";

export const auth0 = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN || "",
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || "",
  cacheLocation: "localstorage",
  useRefreshTokens: true,
  useRefreshTokensFallback: true,
  authorizationParams: {
    redirect_uri: isClient ? window.location.origin : "",
  },
});

/**
 * Wait for Auth0 to finish loading
 */
export async function untilAuth0Loaded(timeoutMs = 10000): Promise<boolean> {
  if (!auth0.isLoading.value) return true;

  return new Promise((resolve) => {
    const startTime = Date.now();
    const check = () => {
      if (!auth0.isLoading.value) {
        resolve(true);
      } else if (Date.now() - startTime > timeoutMs) {
        console.warn("[auth0] Loading timed out");
        resolve(false);
      } else {
        setTimeout(check, 50);
      }
    };
    check();
  });
}
