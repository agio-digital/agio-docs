---
footer: false
---

# Hasura Tables Reference

Reference for key database tables accessible via the Hasura GraphQL API.

## Core Tables

### organization

Organization/company records.

```graphql
type organization {
  id: uuid!
  name: String!
  type: String
  status: String!
  auth0_organization_id: String
  created_at: timestamptz!
  updated_at: timestamptz!

  # Relationships
  users: [user!]!
  digital_wallets: [digital_wallet!]!
  funds: [fund!]!
}
```

**Common Queries:**

```graphql
# Get organization with members
query GetOrganization($id: uuid!) {
  organization_by_pk(id: $id) {
    id
    name
    users {
      id
      email
      role
    }
  }
}
```

---

### user

Platform user accounts.

```graphql
type user {
  id: Int!
  user_id: String! # Auth0 user_id
  email: String
  first_name: String
  last_name: String
  phone: String
  status: String!
  created_at: timestamptz!

  # Relationships
  organization: organization
  digital_wallets: [digital_wallet!]!
  kyc_profiles: [kyc_profile!]!
}
```

**Common Queries:**

```graphql
# Get user by Auth0 ID
query GetUser($userId: String!) {
  user(where: { user_id: { _eq: $userId } }) {
    id
    email
    first_name
    last_name
    organization {
      name
    }
  }
}
```

---

## Crypto & Wallets

### digital_wallet

Digital wallet records for cryptocurrency storage.

```graphql
type digital_wallet {
  id: Int!
  label: String!
  coin: String!
  wallet_type: String! # hot, cold, trading, evm, sol
  status: String!
  usd_value: numeric
  native_coin_balance: numeric
  user_id: String
  organization_id: uuid
  bitgo_wallet_id: String
  created_at: timestamptz!
  updated_at: timestamptz!

  # Relationships
  user: user
  organization: organization
  transactions: [digital_wallet_transaction!]!
  assets: [digital_wallet_asset!]!
  whitelist_entries: [digital_wallet_whitelist_entry!]!
}
```

**Common Queries:**

```graphql
# Get wallets by organization with balances
query GetOrgWallets($orgId: uuid!) {
  digital_wallet(where: { organization_id: { _eq: $orgId } }, order_by: { usd_value: desc_nulls_last }) {
    id
    label
    coin
    wallet_type
    usd_value
    native_coin_balance
  }
}

# Aggregate wallet value
query GetTotalValue($orgId: uuid!) {
  digital_wallet_aggregate(where: { organization_id: { _eq: $orgId } }) {
    aggregate {
      sum {
        usd_value
      }
    }
  }
}
```

---

### digital_wallet_transaction

Transaction records for digital wallets.

```graphql
type digital_wallet_transaction {
  id: Int!
  digital_wallet_id: Int!
  transaction_id: String!
  tx_hash: String
  type: String! # send, receive, trade
  status: String! # pending, confirmed, failed
  amount: numeric!
  fee: numeric
  from_address: String
  to_address: String
  confirmations: Int
  created_at: timestamptz!
  confirmed_at: timestamptz

  # Relationships
  digital_wallet: digital_wallet!
}
```

**Common Queries:**

```graphql
# Get recent transactions
query GetRecentTransactions($walletId: Int!, $limit: Int = 20) {
  digital_wallet_transaction(where: { digital_wallet_id: { _eq: $walletId } }, order_by: { created_at: desc }, limit: $limit) {
    id
    type
    status
    amount
    tx_hash
    created_at
  }
}
```

---

### digital_wallet_asset

Asset holdings within a wallet.

```graphql
type digital_wallet_asset {
  id: Int!
  digital_wallet_id: Int!
  coin_id: String!
  symbol: String!
  name: String!
  balance: numeric!
  usd_value: numeric
  unit_price_usd: numeric
  updated_at: timestamptz!

  # Relationships
  digital_wallet: digital_wallet!
  coin: coin!
}
```

---

### coin

Cryptocurrency metadata and pricing.

```graphql
type coin {
  id: String!
  symbol: String!
  name: String!
  price_usd: numeric
  market_cap: numeric
  market_cap_rank: Int
  price_updated_at: timestamptz
  logo_url: String
}
```

**Common Queries:**

```graphql
# Get top coins by market cap
query GetTopCoins($limit: Int = 100) {
  coin(where: { market_cap_rank: { _is_null: false } }, order_by: { market_cap_rank: asc }, limit: $limit) {
    id
    symbol
    name
    price_usd
    market_cap
    market_cap_rank
  }
}
```

---

## Fund Management

### fund

Investment fund records.

```graphql
type fund {
  id: Int!
  name: String!
  description: String
  currency: String!
  status: String! # active, closed, pending
  nav: numeric
  nav_date: date
  total_assets: numeric
  management_fee_rate: numeric
  performance_fee_rate: numeric
  organization_id: uuid
  created_at: timestamptz!

  # Relationships
  organization: organization
  fund_subscriptions: [fund_subscription!]!
  fund_redemptions: [fund_redemption!]!
  fund_nav_history: [fund_nav_history!]!
}
```

**Common Queries:**

```graphql
# Get fund with NAV history
query GetFundWithHistory($fundId: Int!) {
  fund_by_pk(id: $fundId) {
    id
    name
    nav
    nav_date
    fund_nav_history(order_by: { nav_date: desc }, limit: 30) {
      nav_date
      nav
      total_assets
    }
  }
}
```

---

### fund_subscription

Fund subscription requests.

```graphql
type fund_subscription {
  id: Int!
  fund_id: Int!
  user_id: String!
  subscription_amount: numeric!
  subscription_shares: numeric
  nav: numeric
  status: String! # pending, approved, rejected, processed
  created_at: timestamptz!
  processed_at: timestamptz

  # Relationships
  fund: fund!
  user: user!
}
```

---

### fund_redemption

Fund redemption requests.

```graphql
type fund_redemption {
  id: Int!
  fund_id: Int!
  user_id: String!
  redemption_shares: numeric!
  redemption_amount: numeric
  nav: numeric
  status: String!
  created_at: timestamptz!
  processed_at: timestamptz

  # Relationships
  fund: fund!
  user: user!
}
```

---

## KYC & Compliance

### kyc_profile

KYC verification profiles.

```graphql
type kyc_profile {
  id: Int!
  user_id: String!
  applicant_id: String # SumSub applicant ID
  sumsub_email: String
  sumsub_first_name: String
  sumsub_last_name: String
  sumsub_phone: String
  most_recent_review_status: String
  last_approved_date: timestamptz
  last_approved_level_name: String
  risk_score: numeric
  created_at: timestamptz!

  # Relationships
  user: user!
  kyc_documents: [kyc_document!]!
}
```

**Common Queries:**

```graphql
# Get users pending KYC review
query GetPendingKyc {
  kyc_profile(where: { most_recent_review_status: { _eq: "pending" } }) {
    id
    sumsub_email
    sumsub_first_name
    sumsub_last_name
    user {
      organization {
        name
      }
    }
  }
}
```

---

### kyc_document

KYC verification documents.

```graphql
type kyc_document {
  id: Int!
  kyc_profile_id: Int!
  document_type: String! # passport, id_card, drivers_license
  country: String
  status: String!
  review_result: String # GREEN, RED, YELLOW
  created_at: timestamptz!

  # Relationships
  kyc_profile: kyc_profile!
}
```

---

## Billing

### invoice

Invoice records.

```graphql
type invoice {
  id: Int!
  invoice_number: String!
  organization_id: uuid
  user_id: String
  status: String! # draft, sent, paid, overdue, cancelled
  subtotal: numeric!
  tax: numeric
  total: numeric!
  currency: String!
  due_date: date
  paid_at: timestamptz
  created_at: timestamptz!

  # Relationships
  organization: organization
  user: user
  invoice_line_items: [invoice_line_item!]!
}
```

**Common Queries:**

```graphql
# Get overdue invoices
query GetOverdueInvoices {
  invoice(where: { status: { _eq: "sent" }, due_date: { _lt: "now()" } }, order_by: { due_date: asc }) {
    id
    invoice_number
    total
    due_date
    organization {
      name
    }
  }
}
```

---

### quote

Quote/proposal records.

```graphql
type quote {
  id: Int!
  quote_number: String!
  case_id: Int
  status: String! # draft, sent, accepted, rejected, expired
  subtotal: numeric!
  total: numeric!
  currency: String!
  valid_until: date
  created_at: timestamptz!

  # Relationships
  case: case
  quote_line_items: [quote_line_item!]!
}
```

---

## Trading

### otc_quote

OTC trade quotes.

```graphql
type otc_quote {
  id: uuid!
  organization_id: uuid
  from_currency: String!
  to_currency: String!
  quote_size: numeric!
  side: String! # BUY, SELL
  quote_price: numeric
  quote_fee_perc: numeric
  status: String! # pending, accepted, expired, cancelled
  expires_at: timestamptz!
  created_at: timestamptz!

  # Relationships
  organization: organization
  otc_trade: otc_trade
}
```

---

### otc_trade

Executed OTC trades.

```graphql
type otc_trade {
  id: uuid!
  quote_id: uuid!
  status: String! # pending, completed, failed
  executed_price: numeric
  executed_size: numeric
  fee: numeric
  executed_at: timestamptz

  # Relationships
  otc_quote: otc_quote!
}
```

---

## Messaging

### notification

User notifications.

```graphql
type notification {
  id: Int!
  user_id: String!
  type: String!
  title: String!
  message: String!
  read: Boolean!
  created_at: timestamptz!

  # Relationships
  user: user!
}
```

**Common Queries:**

```graphql
# Get unread notifications
query GetUnreadNotifications($userId: String!) {
  notification(where: { user_id: { _eq: $userId }, read: { _eq: false } }, order_by: { created_at: desc }) {
    id
    type
    title
    message
    created_at
  }
}

# Mark notification as read
mutation MarkAsRead($notificationId: Int!) {
  update_notification_by_pk(pk_columns: { id: $notificationId }, _set: { read: true }) {
    id
    read
  }
}
```

---

## Useful Aggregate Queries

### Portfolio Summary

```graphql
query GetPortfolioSummary($orgId: uuid!) {
  # Total wallet count and value
  digital_wallet_aggregate(where: { organization_id: { _eq: $orgId } }) {
    aggregate {
      count
      sum {
        usd_value
      }
    }
  }

  # Wallets by type
  digital_wallet(where: { organization_id: { _eq: $orgId } }) {
    wallet_type
  }

  # Recent transactions
  digital_wallet_transaction(where: { digital_wallet: { organization_id: { _eq: $orgId } } }, order_by: { created_at: desc }, limit: 10) {
    type
    amount
    status
    created_at
  }
}
```

### Fund Performance

```graphql
query GetFundPerformance($fundId: Int!) {
  fund_by_pk(id: $fundId) {
    name
    nav
    total_assets

    # Subscription volume
    fund_subscriptions_aggregate {
      aggregate {
        count
        sum {
          subscription_amount
        }
      }
    }

    # Redemption volume
    fund_redemptions_aggregate {
      aggregate {
        count
        sum {
          redemption_amount
        }
      }
    }

    # NAV history
    fund_nav_history(order_by: { nav_date: desc }, limit: 90) {
      nav_date
      nav
    }
  }
}
```

## Next Steps

- [Permissions](/api/hasura/permissions) - Role-based access control
- [Hasura Overview](/api/hasura/overview) - API fundamentals
- [GraphQL API](/api/graphql-overview) - Platform API for business operations
