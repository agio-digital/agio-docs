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

# Hasura API Explorer

Interactive documentation for the Hasura GraphQL API. Direct database access with real-time subscriptions.

<div class="spectaql-container">
  <iframe
    src="/spectaql/hasura/"
    :style="{ width: '100%', height: iframeHeight, border: 'none', borderRadius: '8px' }"
    title="Hasura API Documentation"
    loading="lazy"
  ></iframe>
</div>

::: tip Need the endpoint?
**URL:** `https://develop-agiodigital.hasura.app/v1/graphql`

See [Hasura Overview](/api/hasura/overview) for authentication details.
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
