---
footer: false
aside: false
---

<script setup>
import { ref, onMounted } from 'vue'

const iframeHeight = ref('80vh')

onMounted(() => {
  // Adjust height based on window size
  const updateHeight = () => {
    iframeHeight.value = `${window.innerHeight - 120}px`
  }
  updateHeight()
  window.addEventListener('resize', updateHeight)
})
</script>

# Platform API Explorer

Interactive documentation for the Agio Platform GraphQL API. Browse queries, mutations, and types with examples.

<div class="spectaql-container">
  <iframe
    src="/spectaql/platform-api/"
    :style="{ width: '100%', height: iframeHeight, border: 'none', borderRadius: '8px' }"
    title="Platform API Documentation"
    loading="lazy"
  ></iframe>
</div>

::: tip Need the endpoint?
**URL:** `https://api-develop.agiodigital.com/graphql`

See [Authentication](/api/authentication) for API key setup.
:::

<style scoped>
.spectaql-container {
  margin: 1rem -24px;
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
}

@media (min-width: 960px) {
  .spectaql-container {
    margin: 1rem -48px;
  }
}
</style>
