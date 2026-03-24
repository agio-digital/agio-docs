---
footer: false
---

# Hasura API Overview

The Hasura GraphQL API provides direct database access with real-time subscriptions and fine-grained permissions. This is powered by Hasura GraphQL Engine connected to a PostgreSQL database.

## Endpoints

| Environment | GraphQL | WebSocket |
| --- | --- | --- |
| Production | `https://hasura.agiodigital.com/v1/graphql` | `wss://hasura.agiodigital.com/v1/graphql` |
| Development | `https://develop-agiodigital.hasura.app/v1/graphql` | `wss://develop-agiodigital.hasura.app/v1/graphql` |

## Authentication

Hasura API requests require the admin secret and optional role headers:

```bash
curl -X POST https://hasura.agiodigital.com/v1/graphql \
  -H "Content-Type: application/json" \
  -H "X-Hasura-Admin-Secret: your-api-key" \
  -H "X-Hasura-Role: organization_admin" \
  -H "X-Hasura-Organization-Id: your-org-id" \
  -d '{"query": "{ AgioAuth_organization { organization_name } }"}'
```

See [Authentication](/api/authentication) for details on obtaining API keys.

## Key Features

### Direct Database Access

Query over 800+ tables across all business domains without going through application logic:

- **Flexible queries** - Select exactly the fields you need
- **Relationships** - Navigate related data in a single query
- **Aggregations** - Perform SUM, COUNT, AVG directly in queries
- **Filtering** - Use complex WHERE clauses with AND/OR logic

### Real-time Subscriptions

Subscribe to data changes and receive updates instantly:

```graphql
subscription WatchWalletBalance($walletId: Int!) {
  AgioCrypto_digital_wallet_by_pk(id: $walletId) {
    id
    nickname
    wallet_address
    updated_at
  }
}
```

### Permission System

Role-based access control ensures users only see authorized data:

- **Row-level security** - Filter rows based on user/organization
- **Column-level permissions** - Hide sensitive columns per role
- **Aggregation controls** - Enable/disable aggregations per role

## Database Schemas

The database is organized into logical schemas. All Hasura table names are prefixed with their schema (e.g., `AgioAuth_user`).

| Schema | Description |
| --- | --- |
| **AgioAuth** | Users, organizations, roles, permissions, addresses |
| **AgioCrypto** | Digital wallets, transactions, coins, networks, smart wallets |
| **AgioFunds** | Fund management, NAV, subscriptions, redemptions |
| **AgioCard** | Rain corporate cards, card transactions, applications |
| **KycData** | KYC/KYB profiles, verification levels, Sumsub data |
| **AgioOnboarding** | Onboarding flows, cases, form submissions |
| **AgioBilling** | Invoices, quotes, payments, billing |
| **AgioBanking** | Bank accounts, wire transfers, deposits |
| **AgioMessaging** | Notifications, email queues |
| **AgioAccounting** | Accounting records, journal entries |
| **AgioActivity** | Activity logs, audit trails |
| **AgioData** | Reference data, countries, currencies |
| **AgioProduct** | Products, pricing, service conditions |
| **AgioAI** | AI/ML data, embeddings |

## Query Examples

### Basic Query

```graphql
query GetOrganizations {
  AgioAuth_organization(limit: 10, order_by: { created_at: desc }) {
    id
    organization_name
    created_at
    user_organizations {
      user {
        email
        given_name
      }
    }
  }
}
```

### Query with Filters

```graphql
query GetActiveWallets($orgId: uuid!) {
  AgioCrypto_digital_wallet(
    where: {
      organization_id: { _eq: $orgId }
      deleted: { _neq: true }
    }
    order_by: { updated_at: desc }
  ) {
    id
    nickname
    wallet_address
    wallet_type_id
    network {
      symbol
      name
    }
  }
}
```

### Query with Relationships

```graphql
query GetFundWithSubscriptions($fundId: Int!) {
  AgioFunds_fund_by_pk(id: $fundId) {
    id
    name
    currency
    organization {
      organization_name
    }
    fund_subscriptions(where: { status: { _eq: "pending" } }) {
      id
      user {
        email
      }
    }
  }
}
```

### Aggregation Query

```graphql
query GetWalletCount($userId: String!) {
  AgioCrypto_digital_wallet_aggregate(
    where: { user_id: { _eq: $userId }, deleted: { _neq: true } }
  ) {
    aggregate {
      count
    }
  }
}
```

## Subscriptions

### Watch Single Record

```graphql
subscription WatchTransaction($txId: Int!) {
  AgioCrypto_bitgo_transaction_by_pk(id: $txId) {
    status
    confirmations
    updated_at
  }
}
```

### Watch Collection

```graphql
subscription WatchNotifications($userId: String!) {
  AgioMessaging_user_notifications(
    where: { user_id: { _eq: $userId }, read: { _eq: false } }
    order_by: { created_at: desc }
  ) {
    id
    title
    message
    created_at
  }
}
```

## JavaScript Client Setup

```typescript
import { createClient } from "graphql-ws";
import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";

// HTTP link for queries and mutations
const httpLink = new HttpLink({
  uri: "https://hasura.agiodigital.com/v1/graphql",
  headers: {
    "X-Hasura-Admin-Secret": process.env.HASURA_API_KEY,
    "X-Hasura-Role": "organization_admin"
  }
});

// WebSocket link for subscriptions
const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://hasura.agiodigital.com/v1/graphql",
    connectionParams: {
      headers: {
        "X-Hasura-Admin-Secret": process.env.HASURA_API_KEY,
        "X-Hasura-Role": "organization_admin"
      }
    }
  })
);

// Split based on operation type
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});
```

## Comparison: Platform API vs Hasura API

| Feature | Platform API | Hasura API |
| --- | --- | --- |
| **Use Case** | Business operations | Data queries |
| **Operations** | Application logic | Direct database |
| **Mutations** | With validation | Raw database writes |
| **Subscriptions** | Limited | Full support |
| **Aggregations** | Limited | Full SQL support |
| **Permissions** | API-level | Row/column level |
| **Best For** | Transactions, trading | Reporting, dashboards |

## Next Steps

- [Tables Reference](/api/hasura/tables) - Key database tables
- [Permissions](/api/hasura/permissions) - Role-based access control
- [GraphQL API](/api/graphql-overview) - Platform API for business operations
