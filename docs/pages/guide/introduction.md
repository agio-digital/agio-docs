---
footer: false
---

<script setup>
  import useNpmVersion from '@theme/hooks/useNpmVersion';
  import { onMounted } from 'vue';

  const { load: loadVersion, version } = useNpmVersion();

  onMounted(() => {
    loadVersion();
  });
</script>

# Introduction {#introduction}

:::info You are reading the documentation for Agio SDK version {{version}}
:::

## What is Agio SDK? {#what-is-agio-sdk}

The **Agio SDK** enables you to integrate KYC (Know Your Customer) and KYB (Know Your Business) verification flows into your website or application. Users are guided through identity verification and blockchain wallet connection with real-time status updates.

## Integration Options {#integration-options}

Choose the integration method that best fits your needs:

### TypeScript SDK (npm package)

Install via npm/yarn for full programmatic control. Ideal for applications that need:

- Real-time GraphQL subscriptions for user status updates
- Event callbacks for verification milestones
- React component support

### Direct Widget (iframe)

Embed the verification widget directly using an iframe with URL parameters. Best for:

- Lightweight integrations with no dependencies
- Server-side token generation via GraphQL API
- Quick implementation without package installation

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/guide/quick-start">
    <p class="next-steps-link">TypeScript SDK</p>
    <p class="next-steps-caption">Install the npm package and integrate with event callbacks.</p>
  </a>
  <a class="vt-box" href="/guide/direct-widget">
    <p class="next-steps-link">Direct Widget</p>
    <p class="next-steps-caption">Embed the widget via iframe with URL query parameters.</p>
  </a>
  <a class="vt-box" href="/examples/javascript">
    <p class="next-steps-link">Examples</p>
    <p class="next-steps-caption">Explore implementation examples in JavaScript, TypeScript, and React.</p>
  </a>
</div>
