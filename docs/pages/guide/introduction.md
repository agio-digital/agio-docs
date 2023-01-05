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

The **Agio SDK** is a JavaScript and TypeScript library that enables you to integrate the Agio user verification process into your website or app. It provides a simple way to embed an iframe that guides users through the process of verifying their identity and connecting a blockchain wallet. The Agio SDK also allows you to receive updates on the user's verification status and data.

To use the Agio SDK, you will need to install it using npm or yarn and then create an instance of the SDK by passing in a configuration object. This configuration object should include your Agio API token, the element that you want to mount the iframe to, and any callbacks that you want to register for handling events such as user data changes and errors.

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/guide/quick-start">
    <p class="next-steps-link">Installation</p>
    <p class="next-steps-caption">Learn how to install the Agio SDK and get started.</p>
  </a>
  <a class="vt-box" href="/guide/configuration">
    <p class="next-steps-link">Configuration</p>
    <p class="next-steps-caption">The section walks you through the process of creating a simple Agio SDK app.</p>
  </a>
  <a class="vt-box" href="/examples/javascript">
    <p class="next-steps-link">Check out the Examples</p>
    <p class="next-steps-caption">Explore examples of implementing the Agio SDK in different frameworks.</p>
  </a>
</div>
