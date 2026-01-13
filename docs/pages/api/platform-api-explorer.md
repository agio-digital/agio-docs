---
footer: false
---

# Platform API Explorer

Interactive documentation for the Agio Platform GraphQL API. Browse queries, mutations, and types with examples.

<div class="explorer-card">
  <div class="explorer-content">
    <h2>Agio Platform API</h2>
    <p>GraphQL API for portfolio management, trading, KYC, and fund administration.</p>
    <ul>
      <li>Portfolio & wallet management</li>
      <li>OTC trading and quotes</li>
      <li>KYC/AML compliance data</li>
      <li>Fund subscriptions and redemptions</li>
    </ul>
    <a href="/api/platform-api-docs" class="explorer-button">
      Open API Explorer →
    </a>
  </div>
</div>

## Quick Links

| Resource                              | Description                   |
| ------------------------------------- | ----------------------------- |
| [Authentication](/api/authentication) | API key setup and auth flows  |
| [Queries](/api/queries)               | Available query operations    |
| [Mutations](/api/mutations)           | Available mutation operations |
| [Types](/api/types)                   | GraphQL type definitions      |

## Endpoint

```
https://dev.api.agiodigital.com/graphql
```

See [Authentication](/api/authentication) for API key setup.

<style scoped>
.explorer-card {
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  border-radius: 12px;
  color: white;
}

.explorer-content h2 {
  margin: 0 0 1rem 0;
  color: white;
  border: none;
}

.explorer-content p {
  color: #e2e8f0;
  margin-bottom: 1rem;
}

.explorer-content ul {
  color: #cbd5e0;
  margin-bottom: 1.5rem;
}

.explorer-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #4299e1;
  color: white !important;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.explorer-button:hover {
  background: #3182ce;
  text-decoration: none;
}
</style>
