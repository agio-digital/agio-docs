<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import AuthGuard from "./AuthGuard.vue";
import { createSpectaQLBlobURL, revokeSpectaQLBlobURL } from "../data/spectaql-bundle";

const blobUrl = ref<string | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);

onMounted(() => {
  try {
    // Create blob URL only after component mounts (client-side only)
    // This ensures the content is never exposed without authentication
    blobUrl.value = createSpectaQLBlobURL();
    isLoading.value = false;
  } catch (e) {
    error.value = "Failed to load API documentation";
    isLoading.value = false;
    console.error("[SpectaQLViewer] Error creating blob URL:", e);
  }
});

onUnmounted(() => {
  // Clean up blob URL to free memory
  if (blobUrl.value) {
    revokeSpectaQLBlobURL(blobUrl.value);
    blobUrl.value = null;
  }
});

// Handle hash navigation
const handleHashChange = () => {
  const hash = window.location.hash;
  if (hash && blobUrl.value) {
    const iframe = document.querySelector(".spectaql-iframe") as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      try {
        // Navigate iframe to the hash
        iframe.contentWindow.location.hash = hash;
      } catch (e) {
        // Ignore cross-origin errors
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("hashchange", handleHashChange);
  // Handle initial hash
  setTimeout(handleHashChange, 500);
});

onUnmounted(() => {
  window.removeEventListener("hashchange", handleHashChange);
});
</script>

<template>
  <AuthGuard>
    <div class="spectaql-container">
      <!-- Loading state -->
      <div v-if="isLoading" class="spectaql-loading">
        <div class="spectaql-spinner"></div>
        <p>Loading API documentation...</p>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="spectaql-error">
        <p>{{ error }}</p>
        <a href="/api/platform-api-explorer">Return to API Explorer</a>
      </div>

      <!-- Documentation iframe -->
      <iframe
        v-else-if="blobUrl"
        class="spectaql-iframe"
        :src="blobUrl"
        sandbox="allow-scripts allow-same-origin"
        referrerpolicy="no-referrer"
        title="Agio Platform API Documentation"
      ></iframe>
    </div>
  </AuthGuard>
</template>

<style scoped>
.spectaql-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: white;
}

.spectaql-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.spectaql-loading,
.spectaql-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #334155;
}

.spectaql-loading p,
.spectaql-error p {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #64748b;
}

.spectaql-error a {
  margin-top: 1rem;
  color: #2563eb;
  text-decoration: underline;
}

.spectaql-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e2e8f0;
  border-top-color: #193f66;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
