---
footer: false
---

# Hasura API Explorer

The Hasura GraphQL API provides direct database access with real-time subscriptions for reporting and dashboards.

<div class="access-card">
  <div class="access-content">
    <h2>Request API Access</h2>
    <p>Access to our development Hasura environment is available upon request. Get your own API key to explore the complete schema with 800+ tables, queries, mutations, and subscriptions.</p>
    <ul>
      <li>Real-time subscriptions to data changes</li>
      <li>Complex filtering and aggregations</li>
      <li>Row and column-level permissions</li>
      <li>Full GraphQL introspection access</li>
    </ul>
    <a href="mailto:devs@agiodigital.com?subject=Hasura%20API%20Access%20Request" class="access-button">
      Contact Us for Access →
    </a>
    <p class="contact-email">devs@agiodigital.com</p>
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
.access-card {
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  border-radius: 12px;
  color: white;
}

.access-content h2 {
  margin: 0 0 1rem 0;
  color: white;
  border: none;
}

.access-content p {
  color: #e2e8f0;
  margin-bottom: 1rem;
}

.access-content ul {
  color: #cbd5e0;
  margin-bottom: 1.5rem;
}

.access-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #4299e1;
  color: white !important;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.access-button:hover {
  background: #3182ce;
  text-decoration: none;
}

.contact-email {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #a0aec0 !important;
}
</style>
