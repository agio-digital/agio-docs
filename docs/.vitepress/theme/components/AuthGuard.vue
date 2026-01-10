<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

const auth0 = useAuth0();
const isLoading = computed(() => auth0.isLoading.value);
const isAuthenticated = computed(() => auth0.isAuthenticated.value);
const authChecked = ref(false);

console.log("[AuthGuard] Mounted, isLoading:", auth0.isLoading.value, "isAuthenticated:", auth0.isAuthenticated.value);

// Check auth status once loading completes
watch(isLoading, (loading) => {
  console.log("[AuthGuard] Loading changed:", loading, "isAuthenticated:", auth0.isAuthenticated.value);
  if (!loading) {
    authChecked.value = true;

    // If not authenticated, redirect to login
    if (!auth0.isAuthenticated.value) {
      console.log("[AuthGuard] Not authenticated, redirecting to login...");
      auth0.loginWithRedirect({
        appState: {
          targetUrl: window.location.pathname,
        },
      });
    }
  }
});

onMounted(async () => {
  // Handle OAuth callback
  const hasCallback = window.location.search.includes("code=") && window.location.search.includes("state=");
  if (hasCallback) {
    try {
      await auth0.handleRedirectCallback();
      // Clean up URL
      window.history.replaceState({}, "", window.location.pathname);
    } catch (error) {
      console.error("Auth callback error:", error);
    }
  }

  // If already loaded, check auth
  if (!auth0.isLoading.value) {
    authChecked.value = true;
    if (!auth0.isAuthenticated.value) {
      auth0.loginWithRedirect({
        appState: {
          targetUrl: window.location.pathname,
        },
      });
    }
  }
});
</script>

<template>
  <!-- Loading state -->
  <div v-if="isLoading || !authChecked" class="auth-loading">
    <div class="auth-loading-content">
      <div class="auth-spinner"></div>
      <p>Authenticating...</p>
    </div>
  </div>

  <!-- Authenticated content -->
  <slot v-else-if="isAuthenticated" />

  <!-- Redirecting to login (brief flash) -->
  <div v-else class="auth-loading">
    <div class="auth-loading-content">
      <div class="auth-spinner"></div>
      <p>Redirecting to login...</p>
    </div>
  </div>
</template>

<style scoped>
.auth-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--vp-c-bg);
}

.auth-loading-content {
  text-align: center;
  color: var(--vp-c-text-1);
}

.auth-loading-content p {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.auth-spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 3px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
