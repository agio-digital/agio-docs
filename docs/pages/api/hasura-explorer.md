---
footer: false
---

# Hasura API Explorer

Interactive documentation for the Hasura GraphQL API. Direct database access with real-time subscriptions for reporting and dashboards.

<div class="explorer-card">
  <div class="explorer-content">
    <h2>Hasura GraphQL API</h2>
    <p>Browse the complete schema with 800+ tables, queries, mutations, and subscriptions.</p>
    <ul>
      <li>Real-time subscriptions to data changes</li>
      <li>Complex filtering and aggregations</li>
      <li>Row and column-level permissions</li>
    </ul>
    <a href="/spectaql/hasura/" class="explorer-button" target="_blank">
      Open API Explorer →
    </a>
  </div>
</div>

## Quick Links

| Resource                                | Description                        |
| --------------------------------------- | ---------------------------------- |
| [Hasura Overview](/api/hasura/overview) | Authentication and getting started |
| [Tables Reference](/api/hasura/tables)  | Database schema documentation      |
| [Permissions](/api/hasura/permissions)  | Role-based access control          |

## Endpoint

```
https://develop-agiodigital.hasura.app/v1/graphql
```

See [Hasura Overview](/api/hasura/overview) for authentication details.

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
