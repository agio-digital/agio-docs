---
footer: false
---

# Hasura API Overview

The Hasura GraphQL API provides direct database access with real-time subscriptions and fine-grained permissions. This is powered by Hasura GraphQL Engine connected to a PostgreSQL database.

## Endpoint

```
POST https://hasura.agiodigital.com/v1/graphql
```

## Authentication

Hasura API requests require the admin secret and optional role headers:

```bash
curl -X POST https://hasura.agiodigital.com/v1/graphql \
  -H "Content-Type: application/json" \
  -H "X-Hasura-Admin-Secret: your-api-key" \
  -H "X-Hasura-Role: organization_admin" \
  -H "X-Hasura-Organization-Id: your-org-id" \
  -d '{"query": "{ organization { name } }"}'
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
  digital_wallet_by_pk(id: $walletId) {
    id
    label
    usd_value
    updated_at
  }
}
```

### Permission System

Role-based access control ensures users only see authorized data:

- **Row-level security** - Filter rows based on user/organization
- **Column-level permissions** - Hide sensitive columns per role
- **Aggregation controls** - Enable/disable aggregations per role

## Database Domains

The database is organized into logical domains:

| Domain             | Tables | Description                                        |
| ------------------ | ------ | -------------------------------------------------- |
| **AgioAuth**       | 48+    | Users, organizations, roles, permissions           |
| **AgioCrypto**     | 140+   | Wallets, transactions, token prices, smart wallets |
| **AgioFunds**      | 120+   | Fund management, NAV, subscriptions, redemptions   |
| **AgioOnboarding** | 70+    | KYC cases, documents, compliance workflows         |
| **AgioBilling**    | 40+    | Invoices, quotes, payments, billing                |
| **AgioBanking**    | 25+    | Bank transactions, deposits, withdrawals           |
| **AgioProduct**    | 25+    | Products, pricing, conditions                      |
| **AgioMessaging**  | 15+    | Chat, notifications, email queues                  |

## Query Examples

### Basic Query

```graphql
query GetOrganizations {
  organization(limit: 10, order_by: { created_at: desc }) {
    id
    name
    created_at
    users {
      id
      email
    }
  }
}
```

### Query with Filters

```graphql
query GetActiveWallets($orgId: uuid!) {
  digital_wallet(where: { organization_id: { _eq: $orgId }, status: { _eq: "active" }, usd_value: { _gt: 1000 } }, order_by: { usd_value: desc }) {
    id
    label
    coin
    usd_value
    created_at
  }
}
```

### Query with Relationships

```graphql
query GetFundWithSubscriptions($fundId: Int!) {
  fund_by_pk(id: $fundId) {
    id
    name
    nav
    nav_date
    fund_subscriptions(where: { status: { _eq: "pending" } }) {
      id
      subscription_amount
      user {
        id
        email
      }
    }
  }
}
```

### Aggregation Query

```graphql
query GetPortfolioStats($userId: String!) {
  digital_wallet_aggregate(where: { user_id: { _eq: $userId } }) {
    aggregate {
      count
      sum {
        usd_value
      }
      avg {
        usd_value
      }
    }
  }
}
```

## Mutations

### Insert Data

```graphql
mutation CreateNote($input: note_insert_input!) {
  insert_note_one(object: $input) {
    id
    content
    created_at
  }
}
```

### Update Data

```graphql
mutation UpdateWalletLabel($walletId: Int!, $label: String!) {
  update_digital_wallet_by_pk(pk_columns: { id: $walletId }, _set: { label: $label }) {
    id
    label
    updated_at
  }
}
```

### Delete Data

```graphql
mutation DeleteNote($noteId: Int!) {
  delete_note_by_pk(id: $noteId) {
    id
  }
}
```

## Subscriptions

### Watch Single Record

```graphql
subscription WatchTransaction($txId: String!) {
  digital_wallet_transaction_by_pk(transaction_id: $txId) {
    status
    confirmations
    updated_at
  }
}
```

### Watch Collection

```graphql
subscription WatchPendingApprovals($orgId: uuid!) {
  pending_approval(where: { organization_id: { _eq: $orgId }, status: { _eq: "pending" } }, order_by: { created_at: desc }) {
    id
    type
    amount
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

| Feature           | Platform API          | Hasura API            |
| ----------------- | --------------------- | --------------------- |
| **Use Case**      | Business operations   | Data queries          |
| **Operations**    | Application logic     | Direct database       |
| **Mutations**     | With validation       | Raw database writes   |
| **Subscriptions** | Limited               | Full support          |
| **Aggregations**  | Limited               | Full SQL support      |
| **Permissions**   | API-level             | Row/column level      |
| **Best For**      | Transactions, trading | Reporting, dashboards |

## Next Steps

- [Tables Reference](/api/hasura/tables) - Key database tables
- [Permissions](/api/hasura/permissions) - Role-based access control
- [GraphQL API](/api/graphql-overview) - Platform API for business operations
