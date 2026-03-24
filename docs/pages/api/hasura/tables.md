---
footer: false
---

# Hasura Tables Reference

Reference for key database tables accessible via the Hasura GraphQL API. All table names in Hasura are prefixed with their schema name (e.g., `AgioAuth_user`).

## Database Schemas

| Schema | Description |
| --- | --- |
| **AgioAuth** | Users, organizations, roles, permissions, addresses |
| **AgioCrypto** | Digital wallets, transactions, coins, networks |
| **AgioFunds** | Funds, subscriptions, redemptions, NAV history |
| **AgioBilling** | Invoices, quotes, line items, payments |
| **AgioCard** | Rain corporate cards, card transactions, applications |
| **KycData** | KYC/KYB profiles, verification levels, Sumsub data |
| **AgioOnboarding** | Onboarding flows, cases, form submissions |
| **AgioMessaging** | Notifications, user messaging |
| **AgioBanking** | Bank accounts, wire transfers |
| **AgioAccounting** | Accounting records, journal entries |
| **AgioActivity** | Activity logs, audit trails |
| **AgioData** | Reference data, country lists, currencies |

---

## Core Tables (AgioAuth)

### AgioAuth_user

Platform user accounts.

```graphql
type AgioAuth_user {
  user_id: String!          # Auth0 user_id (e.g., "auth0|abc123")
  email: String
  given_name: String
  family_name: String
  phone_number: String
  name: String
  nickname: String
  address: String
  city: String
  postal_code: String
  country_code: String
  state_or_province: String
  user_role_id: Int
  client_type_id: Int
  disabled: Boolean
  created_at: timestamptz!
  updated_at: timestamptz!

  # Relationships
  user_role: AgioAuth_user_role
  user_organizations: [AgioAuth_user_organization!]!
  digital_wallets: [AgioCrypto_digital_wallet!]!
  permissions: AgioAuth_vw_active_user_permissions
}
```

**Common Queries:**

```graphql
# Get user by Auth0 ID
query GetUser($userId: String!) {
  AgioAuth_user(where: { user_id: { _eq: $userId } }) {
    user_id
    email
    given_name
    family_name
    user_organizations {
      organization {
        organization_name
      }
    }
  }
}
```

---

### AgioAuth_organization

Organization/company records.

```graphql
type AgioAuth_organization {
  id: uuid!
  organization_name: String!
  organization_type_id: Int
  logo_url: String
  kyc_profile_id: uuid
  parent_organization_id: uuid
  tin: String
  lei: String
  created_at: timestamptz!
  updated_at: timestamptz!

  # Relationships
  user_organizations: [AgioAuth_user_organization!]!
  digital_wallets: [AgioCrypto_digital_wallet!]!
  kyc_profile: KycData_kyc_profile
}
```

**Common Queries:**

```graphql
# Get organization with members
query GetOrganization($id: uuid!) {
  AgioAuth_organization_by_pk(id: $id) {
    id
    organization_name
    user_organizations {
      user {
        email
        given_name
        family_name
      }
      role {
        role_name
      }
    }
  }
}
```

---

## Crypto & Wallets (AgioCrypto)

### AgioCrypto_digital_wallet

Digital wallet records for cryptocurrency storage.

```graphql
type AgioCrypto_digital_wallet {
  id: Int!
  nickname: String
  network_id: Int
  wallet_address: String
  wallet_type_id: Int
  status_id: Int
  user_id: String
  organization_id: uuid
  fund_id: Int
  external_id: String
  is_whitelisted: Boolean
  is_starred: Boolean
  deleted: Boolean
  readonly: Boolean
  created_at: timestamptz!
  updated_at: timestamptz!

  # Relationships
  user: AgioAuth_user
  organization: AgioAuth_organization
  network: AgioCrypto_bip0044_network
  transactions: [AgioCrypto_bitgo_transaction!]!
}
```

**Common Queries:**

```graphql
# Get wallets by organization
query GetOrgWallets($orgId: uuid!) {
  AgioCrypto_digital_wallet(
    where: { organization_id: { _eq: $orgId }, deleted: { _neq: true } }
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

# Aggregate wallet count
query GetWalletCount($orgId: uuid!) {
  AgioCrypto_digital_wallet_aggregate(
    where: { organization_id: { _eq: $orgId }, deleted: { _neq: true } }
  ) {
    aggregate {
      count
    }
  }
}
```

---

### AgioCrypto_coins

Cryptocurrency metadata and pricing.

```graphql
type AgioCrypto_coins {
  id: String!
  symbol: String!
  name: String!
  network_id: Int
  logo_url: String

  # Relationships
  network: AgioCrypto_bip0044_network
}
```

**Common Queries:**

```graphql
# Get coins for a network
query GetCoins($networkId: Int!) {
  AgioCrypto_coins(where: { network_id: { _eq: $networkId } }) {
    id
    symbol
    name
    logo_url
  }
}
```

---

## Fund Management (AgioFunds)

### AgioFunds_fund

Investment fund records.

```graphql
type AgioFunds_fund {
  id: Int!
  name: String!
  description: String
  currency: String!
  organization_id: uuid
  created_at: timestamptz!

  # Relationships
  organization: AgioAuth_organization
  fund_subscriptions: [AgioFunds_fund_subscription!]!
}
```

**Common Queries:**

```graphql
# Get fund with subscriptions
query GetFund($fundId: Int!) {
  AgioFunds_fund_by_pk(id: $fundId) {
    id
    name
    currency
    organization {
      organization_name
    }
    fund_subscriptions(order_by: { created_at: desc }) {
      id
      status
      created_at
    }
  }
}
```

---

## KYC & Compliance (KycData)

### KycData_kyc_profile

KYC/KYB verification profiles. Stored in the `KycData` schema (not AgioAuth).

```graphql
type KycData_kyc_profile {
  id: uuid!
  user_id: String
  organization_id: uuid
  sumsub_applicant_id: String
  external_user_id: String
  most_recent_review_status: String
  created_at: timestamptz!
  updated_at: timestamptz!

  # Relationships
  user: AgioAuth_user
  organization: AgioAuth_organization
  last_approved_level: KycData_kyc_level
  most_recent_level: KycData_kyc_level
}
```

**Common Queries:**

```graphql
# Get KYC profiles pending review
query GetPendingKyc {
  KycData_kyc_profile(
    where: { most_recent_review_status: { _eq: "pending" } }
  ) {
    id
    sumsub_applicant_id
    user {
      email
      given_name
      family_name
    }
  }
}
```

---

## Cards & Payments (AgioCard)

### AgioCard_card

Corporate crypto cards via Rain integration.

```graphql
type AgioCard_card {
  id: uuid!
  user_id: String
  organization_id: uuid
  rain_card_id: String
  status: String
  last_four: String
  created_at: timestamptz!

  # Relationships
  user: AgioAuth_user
  organization: AgioAuth_organization
  balance: AgioCard_card_balance
  transactions: [AgioCard_card_transaction!]!
}
```

---

## Billing (AgioBilling)

### AgioBilling_invoice

Invoice records.

```graphql
type AgioBilling_invoice {
  id: Int!
  invoice_number: String!
  organization_id: uuid
  user_id: String
  status: String!
  total: numeric!
  currency: String!
  due_date: date
  created_at: timestamptz!

  # Relationships
  organization: AgioAuth_organization
  user: AgioAuth_user
  case: AgioOnboarding_case
  invoice_line_items: [AgioBilling_invoice_line_item!]!
}
```

---

## Messaging (AgioMessaging)

### AgioMessaging_user_notifications

User notifications.

```graphql
type AgioMessaging_user_notifications {
  id: Int!
  user_id: String!
  type: String!
  title: String!
  message: String!
  read: Boolean!
  created_at: timestamptz!

  # Relationships
  user: AgioAuth_user!
}
```

**Common Queries:**

```graphql
# Get unread notifications
query GetUnreadNotifications($userId: String!) {
  AgioMessaging_user_notifications(
    where: { user_id: { _eq: $userId }, read: { _eq: false } }
    order_by: { created_at: desc }
  ) {
    id
    type
    title
    message
    created_at
  }
}
```

---

## Next Steps

- [Permissions](/api/hasura/permissions) - Role-based access control
- [Hasura Overview](/api/hasura/overview) - API fundamentals
- [GraphQL API](/api/graphql-overview) - Platform API for business operations
