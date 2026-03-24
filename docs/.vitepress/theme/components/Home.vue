<script setup lang="ts">
import SdkVersion from "./SdkVersion.vue";

const categories = [
  {
    icon: "🔐",
    title: "Wallets & Custody",
    description: "Create and manage multi-chain digital wallets, query balances, and handle whitelist entries.",
    links: [
      { text: "Wallet Guide", href: "/guides/wallets/" },
      { text: "API Reference", href: "/api/graphql-overview" }
    ]
  },
  {
    icon: "💳",
    title: "Cards & Payments",
    description: "Issue prepaid crypto cards, manage funding, and track transactions via the Agio Card API.",
    links: [
      { text: "Card Guide", href: "/guides/cards/" },
      { text: "Agio Card SDK", href: "/sdks/card/" }
    ]
  },
  {
    icon: "📊",
    title: "Trading & OTC",
    description: "Request OTC quotes, execute trades, and access real-time order books.",
    links: [
      { text: "API Reference", href: "/api/graphql-overview" },
      { text: "Examples", href: "/api/examples" }
    ]
  },
  {
    icon: "🏦",
    title: "Fund Administration",
    description: "Manage fund subscriptions, redemptions, NAV calculations, and investor reporting.",
    links: [
      { text: "API Reference", href: "/api/" },
      { text: "Hasura API", href: "/api/hasura/overview" }
    ]
  },
  {
    icon: "✅",
    title: "KYC & Compliance",
    description: "Integrate identity verification, KYB flows, and AML screening via Sumsub.",
    links: [
      { text: "Sumsub SDK", href: "/sdks/sumsub/" },
      { text: "KYC Data", href: "/data/kyc" }
    ]
  },
  {
    icon: "⚡",
    title: "Agio SDK",
    description: "Embed onboarding and verification flows into your app with the TypeScript SDK or direct widget.",
    links: [
      { text: "Quick Start", href: "/guide/quick-start" },
      { text: "Direct Widget", href: "/guide/direct-widget" }
    ]
  }
];
</script>

<template>
  <section id="hero">
    <h1 class="tagline">
      <span class="accent">Agio</span> Developer Docs
    </h1>
    <p class="description">
      APIs, SDKs, and guides for building on the Agio platform.
    </p>
    <p class="actions">
      <a class="get-started" href="/guide/quick-start.html">
        Quick Start
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
        </svg>
      </a>
      <a class="setup" href="/api/">API Reference</a>
    </p>
  </section>

  <section id="categories">
    <div class="category-grid">
      <a v-for="cat in categories" :key="cat.title" class="category-card" :href="cat.links[0].href">
        <span class="category-icon">{{ cat.icon }}</span>
        <h3>{{ cat.title }}</h3>
        <p>{{ cat.description }}</p>
        <div class="category-links">
          <a v-for="link in cat.links" :key="link.href" :href="link.href" class="category-link" @click.stop>
            {{ link.text }} →
          </a>
        </div>
      </a>
    </div>
  </section>

  <section id="quick-links">
    <div class="quick-links-grid">
      <div class="quick-link-group">
        <h4>APIs</h4>
        <a href="/api/authentication">Authentication</a>
        <a href="/api/graphql-overview">GraphQL API</a>
        <a href="/api/hasura/overview">Hasura API</a>
        <a href="/api/rest/">REST API</a>
      </div>
      <div class="quick-link-group">
        <h4>SDKs</h4>
        <a href="/guide/quick-start">TypeScript SDK</a>
        <a href="/guide/direct-widget">Direct Widget</a>
        <a href="/sdks/card/">Agio Card SDK</a>
        <a href="/sdks/sumsub/">Sumsub SDK</a>
      </div>
      <div class="quick-link-group">
        <h4>Resources</h4>
        <a href="/examples/typescript">Examples</a>
        <a href="/data/webhooks">Webhooks</a>
        <a href="/typescript/types">TypeScript Types</a>
        <a href="/changelog/">Changelog</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 80px 32px 48px;
  text-align: center;
}

.tagline {
  font-size: 64px;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, var(--color-brand) 25%, var(--color-brand-light));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 20px;
  margin: 16px auto 32px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
  background-color: var(--vt-c-brand);
  color: var(--vt-c-text-inverse-1);
}

.actions .get-started:hover {
  opacity: 0.9;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .setup {
  color: var(--vt-c-text-code);
  background-color: var(--vt-c-bg-mute);
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

/* Category Grid */
#categories {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 32px 48px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.category-card {
  display: block;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--vt-c-divider-light);
  background: var(--vt-c-bg-soft);
  transition: border-color 0.25s, box-shadow 0.25s;
  text-decoration: none;
  color: inherit;
}

.category-card:hover {
  border-color: var(--vt-c-brand);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.dark .category-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.category-icon {
  font-size: 28px;
  display: block;
  margin-bottom: 12px;
}

.category-card h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--vt-c-text-1);
  margin: 0 0 8px;
}

.category-card p {
  font-size: 14px;
  color: var(--vt-c-text-2);
  line-height: 1.5;
  margin: 0 0 12px;
}

.category-links {
  display: flex;
  gap: 16px;
}

.category-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-brand);
  text-decoration: none;
}

.category-link:hover {
  text-decoration: underline;
}

/* Quick Links */
#quick-links {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 32px 64px;
  border-top: 1px solid var(--vt-c-divider-light);
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.quick-link-group h4 {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--vt-c-text-2);
  margin: 0 0 12px;
}

.quick-link-group a {
  display: block;
  font-size: 14px;
  color: var(--vt-c-text-1);
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.15s;
}

.quick-link-group a:hover {
  color: var(--vt-c-brand);
}

@media (max-width: 960px) {
  .tagline {
    font-size: 48px;
  }
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 24px 32px;
  }
  .tagline {
    font-size: 36px;
  }
  .description {
    font-size: 16px;
    margin: 12px 0 24px;
  }
  .category-grid {
    grid-template-columns: 1fr;
  }
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
  .actions a {
    margin: 0.5em 0;
  }
}
</style>
