---
footer: false
---

# GraphQL Queries Reference

Complete reference for all available GraphQL queries in the Agio Platform API.

## System Queries

### ping

Health check query to verify API connectivity.

```graphql
query Ping {
  ping
}
```

**Returns:** `Ping` - Server status message

---

### session

Get the current user session information.

```graphql
query GetSession {
  session {
    id
    userId
    active
    allowedFunds
    allowedOrganizations
  }
}
```

**Returns:** `SessionResponse`

| Field                  | Type       | Description                         |
| ---------------------- | ---------- | ----------------------------------- |
| `id`                   | `String`   | Session ID                          |
| `userId`               | `String`   | Current user ID                     |
| `active`               | `Boolean`  | Session active status               |
| `allowedFunds`         | `[String]` | List of accessible fund IDs         |
| `allowedOrganizations` | `[String]` | List of accessible organization IDs |

---

### user

Get the current authenticated user.

```graphql
query GetCurrentUser {
  user {
    id
    user_id
    portfolioDashboard {
      usdValue
      wallets {
        label
        usdValue
      }
    }
  }
}
```

**Returns:** `User`

---

### userById

Get a specific user by their ID.

```graphql
query GetUser($userId: String!) {
  userById(userId: $userId) {
    id
    user_id
  }
}
```

**Arguments:**

| Argument | Type      | Required | Description         |
| -------- | --------- | -------- | ------------------- |
| `userId` | `String!` | Yes      | The user's Auth0 ID |

**Returns:** `User`

---

## Portfolio Queries

### netWorthUsdByUserId

Calculate the total net worth in USD for a user.

```graphql
query GetNetWorth($userId: String!, $refresh: Boolean) {
  netWorthUsdByUserId(userId: $userId, refresh: $refresh)
}
```

**Arguments:**

| Argument  | Type      | Required | Default | Description   |
| --------- | --------- | -------- | ------- | ------------- |
| `userId`  | `String!` | Yes      | -       | The user's ID |
| `refresh` | `Boolean` | No       | `false` | Bypass cache  |

**Returns:** `Float` - Total net worth in USD

---

### netWorthUsdByOrganizationId

Calculate the total net worth in USD for an organization.

```graphql
query GetOrgNetWorth($organizationId: String!, $refresh: Boolean) {
  netWorthUsdByOrganizationId(organizationId: $organizationId, refresh: $refresh)
}
```

**Arguments:**

| Argument         | Type      | Required | Default | Description           |
| ---------------- | --------- | -------- | ------- | --------------------- |
| `organizationId` | `String!` | Yes      | -       | The organization's ID |
| `refresh`        | `Boolean` | No       | `false` | Bypass cache          |

**Returns:** `Float` - Total net worth in USD

---

### digitalAssetsByUserId

List all digital assets owned by a user.

```graphql
query GetUserAssets($userId: String!, $refresh: Boolean, $limit: Int, $offset: Int) {
  digitalAssetsByUserId(userId: $userId, refresh: $refresh, limit: $limit, offset: $offset) {
    name
    symbol
    value
    usdValue
    unitPriceUsd
    walletId
  }
}
```

**Arguments:**

| Argument  | Type      | Required | Default | Description          |
| --------- | --------- | -------- | ------- | -------------------- |
| `userId`  | `String!` | Yes      | -       | The user's ID        |
| `refresh` | `Boolean` | No       | `false` | Bypass cache         |
| `limit`   | `Int`     | No       | -       | Maximum results      |
| `offset`  | `Int`     | No       | `0`     | Skip first N results |

**Returns:** `[DigitalAssetSummary]`

---

### digitalAssetsByOrganizationId

List all digital assets owned by an organization.

```graphql
query GetOrgAssets($organizationId: String!, $refresh: Boolean, $limit: Int, $offset: Int) {
  digitalAssetsByOrganizationId(organizationId: $organizationId, refresh: $refresh, limit: $limit, offset: $offset) {
    name
    symbol
    value
    usdValue
    unitPriceUsd
    walletId
  }
}
```

**Arguments:**

| Argument         | Type      | Required | Default | Description           |
| ---------------- | --------- | -------- | ------- | --------------------- |
| `organizationId` | `String!` | Yes      | -       | The organization's ID |
| `refresh`        | `Boolean` | No       | `false` | Bypass cache          |
| `limit`          | `Int`     | No       | -       | Maximum results       |
| `offset`         | `Int`     | No       | `0`     | Skip first N results  |

**Returns:** `[DigitalAssetSummary]`

---

## Wallet Queries

### digitalWalletSummaryById

Get a summary of a digital wallet including balance and assets.

```graphql
query GetWalletSummary($id: Int!, $refresh: Boolean) {
  digitalWalletSummaryById(id: $id, refresh: $refresh) {
    id
    label
    usdValue
    nativeCoinBalance
    assets {
      name
      symbol
      value
      usdValue
    }
  }
}
```

**Arguments:**

| Argument  | Type      | Required | Default | Description              |
| --------- | --------- | -------- | ------- | ------------------------ |
| `id`      | `Int!`    | Yes      | -       | The wallet's database ID |
| `refresh` | `Boolean` | No       | `false` | Bypass cache             |

**Returns:** `DigitalWalletSummary`

---

### digitalWalletDetailById

Get detailed wallet information including transactions, deposits, and withdrawals.

```graphql
query GetWalletDetail($id: Int!, $refresh: Boolean) {
  digitalWalletDetailById(id: $id, refresh: $refresh) {
    id
    label
    usdValue
    assets {
      symbol
      value
    }
    transactions(limit: 50) {
      transactionId
      type
      status
      amount
      createdAt
    }
    deposits(limit: 20) {
      txHash
      amount
      confirmedAt
    }
    withdrawals(limit: 20) {
      txHash
      amount
      status
    }
    whitelist {
      id
      address
      label
      status
    }
  }
}
```

**Arguments:**

| Argument  | Type      | Required | Default | Description              |
| --------- | --------- | -------- | ------- | ------------------------ |
| `id`      | `Int!`    | Yes      | -       | The wallet's database ID |
| `refresh` | `Boolean` | No       | `false` | Bypass cache             |

**Returns:** `DigitalWalletDetail`

---

## Market Data Queries

### coinPrice

Get the current price for a cryptocurrency.

```graphql
query GetCoinPrice($symbol: String!) {
  coinPrice(symbol: $symbol) {
    id
    symbol
    price_usd
    market_cap
    market_cap_rank
    price_updated_at
  }
}
```

**Arguments:**

| Argument | Type      | Required | Description                      |
| -------- | --------- | -------- | -------------------------------- |
| `symbol` | `String!` | Yes      | Coin symbol (e.g., "BTC", "ETH") |

**Returns:** `CoinPrice`

---

## KYC Queries

### getPotentialKycProfiles

Get KYC profiles for a user.

```graphql
query GetKycProfiles($userId: String!) {
  getPotentialKycProfiles(userId: $userId) {
    id
    sumsub_email
    sumsub_first_name
    sumsub_last_name
    most_recent_review_status
    last_approved_date
    last_approved_level_name
  }
}
```

**Arguments:**

| Argument | Type      | Required | Description   |
| -------- | --------- | -------- | ------------- |
| `userId` | `String!` | Yes      | The user's ID |

**Returns:** `[KycProfile!]!`

---

### sumsubQuestionnaireDataDecrypted

Get decrypted questionnaire data from SumSub.

```graphql
query GetQuestionnaireData($applicantId: String!) {
  sumsubQuestionnaireDataDecrypted(applicantId: $applicantId)
}
```

**Arguments:**

| Argument      | Type      | Required | Description         |
| ------------- | --------- | -------- | ------------------- |
| `applicantId` | `String!` | Yes      | SumSub applicant ID |

**Returns:** `jsonb` - Decrypted questionnaire data

---

## Utility Queries

### userExistsByEmail

Check if a user exists by email address.

```graphql
query CheckUserExists($email: String!) {
  userExistsByEmail(email: $email)
}
```

**Arguments:**

| Argument | Type      | Required | Description            |
| -------- | --------- | -------- | ---------------------- |
| `email`  | `String!` | Yes      | Email address to check |

**Returns:** `Boolean!`

---

### queueJobById

Get the status of a background job.

```graphql
query GetJobStatus($queueName: String!, $jobId: String!) {
  queueJobById(queueName: $queueName, jobId: $jobId) {
    id
    name
    status
    progress
    result
    failedReason
    createdAt
    finishedAt
  }
}
```

**Arguments:**

| Argument    | Type      | Required | Description           |
| ----------- | --------- | -------- | --------------------- |
| `queueName` | `String!` | Yes      | Name of the job queue |
| `jobId`     | `String!` | Yes      | The job ID            |

**Returns:** `BullJobResponse`

---

## Admin Queries

### admin

Access admin-level operations (requires admin permissions).

```graphql
query AdminAccess {
  admin {
    healthCheck {
      service
      status
      lastCheck
    }
  }
}
```

**Returns:** `Admin` - Admin access point with nested queries

---

### auth0

Access Auth0 profile information.

```graphql
query GetAuth0Profile {
  auth0 {
    user_id
    email
    name
    phone
    metadata {
      city
      country
      company
    }
  }
}
```

**Returns:** `Auth0` - Auth0 profile data
