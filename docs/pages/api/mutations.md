---
footer: false
---

# GraphQL Mutations Reference

Complete reference for all available GraphQL mutations in the Agio Platform API.

## Session Management

### startSession

Start a new user session.

```graphql
mutation StartSession {
  startSession {
    id
    userId
    active
    allowedFunds
    allowedOrganizations
  }
}
```

**Returns:** `SessionResponse`

---

### endSession

End the current session.

```graphql
mutation EndSession {
  endSession
}
```

**Returns:** `Boolean!`

---

## Wallet Operations

### createDigitalWallet

Create a new digital wallet.

```graphql
mutation CreateWallet($input: CreateDigitalWalletInput!) {
  createDigitalWallet(input: $input) {
    success
    wallet {
      id
      label
      walletType
      coin
    }
    error
  }
}
```

**Input:**

```typescript
interface CreateDigitalWalletInput {
  label: string;
  walletType: WalletType; // "hot" | "cold" | "trading" | "evm" | "sol"
  coin: string;
  organizationId?: string;
  userId?: string;
}
```

**Returns:** `CreateDigitalWalletResponse`

---

### createDigitalWalletAddress

Generate a new address for an existing wallet.

```graphql
mutation CreateAddress($digitalWalletId: Int!, $label: String) {
  createDigitalWalletAddress(digitalWalletId: $digitalWalletId, label: $label) {
    success
    address
    error
  }
}
```

**Arguments:**

| Argument          | Type     | Required | Description           |
| ----------------- | -------- | -------- | --------------------- |
| `digitalWalletId` | `Int!`   | Yes      | Wallet database ID    |
| `label`           | `String` | No       | Label for the address |

**Returns:** `CreateDigitalWalletAddressResponse`

---

### addDigitalWalletWhitelistEntry

Add an address to the wallet's whitelist.

```graphql
mutation AddWhitelistEntry($digitalWalletId: Int!, $label: String!, $address: String!) {
  addDigitalWalletWhitelistEntry(digitalWalletId: $digitalWalletId, label: $label, address: $address) {
    id
    address
    label
    status
  }
}
```

**Arguments:**

| Argument          | Type      | Required | Description         |
| ----------------- | --------- | -------- | ------------------- |
| `digitalWalletId` | `Int!`    | Yes      | Wallet database ID  |
| `label`           | `String!` | Yes      | Label for the entry |
| `address`         | `String!` | Yes      | Blockchain address  |

**Returns:** `DigitalWalletWhitelistEntry`

---

### removeDigitalWalletWhitelistEntry

Remove an address from the whitelist.

```graphql
mutation RemoveWhitelistEntry($digitalWalletId: Int!, $id: Int!) {
  removeDigitalWalletWhitelistEntry(digitalWalletId: $digitalWalletId, id: $id)
}
```

**Arguments:**

| Argument          | Type   | Required | Description        |
| ----------------- | ------ | -------- | ------------------ |
| `digitalWalletId` | `Int!` | Yes      | Wallet database ID |
| `id`              | `Int!` | Yes      | Whitelist entry ID |

**Returns:** `Boolean`

---

### runDigitalWalletAmlReport

Run an AML (Anti-Money Laundering) report on a wallet.

```graphql
mutation RunAmlReport($digitalWalletId: Int!) {
  runDigitalWalletAmlReport(digitalWalletId: $digitalWalletId) {
    id
    amlScore
    riskLevel
    reportUrl
  }
}
```

**Arguments:**

| Argument          | Type   | Required | Description        |
| ----------------- | ------ | -------- | ------------------ |
| `digitalWalletId` | `Int!` | Yes      | Wallet database ID |

**Returns:** `DigitalWalletResponse`

---

## Trading Operations

### requestOtcQuote

Request an OTC (Over-The-Counter) quote.

```graphql
mutation RequestOtcQuote($input: RequestOtcQuoteInput!) {
  requestOtcQuote(input: $input) {
    id
    from_currency
    to_currency
    quote_size
    side
    quote_fee_perc
    expires_at
    status
  }
}
```

**Input:**

```typescript
interface RequestOtcQuoteInput {
  fromCurrency: string;
  toCurrency: string;
  size: number;
  side: "BUY" | "SELL";
  organizationId?: string;
}
```

**Returns:** `RequestQuoteTradeResponse`

---

### calculateOtcQuote

Calculate a quote without committing (preview only).

```graphql
mutation CalculateOtcQuote($input: CalculateOtcQuoteInput!) {
  calculateOtcQuote(input: $input) {
    fromCurrency
    toCurrency
    size
    price
    fee
    proceeds
    expiresAt
  }
}
```

**Returns:** `CalculateOtcQuoteResponse`

---

### refreshOtcQuote

Refresh an existing quote before it expires.

```graphql
mutation RefreshOtcQuote($quoteId: uuid!) {
  refreshOtcQuote(quoteId: $quoteId) {
    id
    expires_at
    status
  }
}
```

**Arguments:**

| Argument  | Type    | Required | Description       |
| --------- | ------- | -------- | ----------------- |
| `quoteId` | `uuid!` | Yes      | Existing quote ID |

**Returns:** `RefreshOtcQuoteResponse`

---

### requestOtcTrade

Execute an OTC trade based on a quote.

```graphql
mutation RequestOtcTrade($input: RequestOtcTradeInput!) {
  requestOtcTrade(input: $input) {
    success
    tradeId
    message
  }
}
```

**Input:**

```typescript
interface RequestOtcTradeInput {
  quoteId: string;
  walletId: number;
}
```

**Returns:** `ChatMessageResponse`

---

### requestQuotes

Get quotes from multiple exchanges.

```graphql
mutation RequestQuotes($fromCoin: String!, $toCoin: String!, $size: Float!, $side: String!) {
  requestQuotes(fromCoin: $fromCoin, toCoin: $toCoin, size: $size, side: $side) {
    exchange
    fromCoin
    toCoin
    side
    size
    price
    fee
    proceeds
    expiresAt
  }
}
```

**Arguments:**

| Argument   | Type      | Required | Description     |
| ---------- | --------- | -------- | --------------- |
| `fromCoin` | `String!` | Yes      | Source currency |
| `toCoin`   | `String!` | Yes      | Target currency |
| `size`     | `Float!`  | Yes      | Trade size      |
| `side`     | `String!` | Yes      | "BUY" or "SELL" |

**Returns:** `[ExchangeQuoteResponse]`

---

## Fund Operations

### cancelFundSubscription

Cancel a pending fund subscription.

```graphql
mutation CancelSubscription($fundSubscriptionId: Int!) {
  cancelFundSubscription(fundSubscriptionId: $fundSubscriptionId)
}
```

**Arguments:**

| Argument             | Type   | Required | Description     |
| -------------------- | ------ | -------- | --------------- |
| `fundSubscriptionId` | `Int!` | Yes      | Subscription ID |

**Returns:** `Boolean!`

---

### cancelFundRedemption

Cancel a pending fund redemption.

```graphql
mutation CancelRedemption($fundRedemptionId: Int!) {
  cancelFundRedemption(fundRedemptionId: $fundRedemptionId)
}
```

**Arguments:**

| Argument           | Type   | Required | Description   |
| ------------------ | ------ | -------- | ------------- |
| `fundRedemptionId` | `Int!` | Yes      | Redemption ID |

**Returns:** `Boolean!`

---

### synchronizeEnzymeVaults

Synchronize fund data with Enzyme Finance vaults.

```graphql
mutation SyncEnzymeVaults($input: SynchronizeEnzymeVaultsInput!) {
  synchronizeEnzymeVaults(input: $input) {
    success
    syncedVaults
    errors
  }
}
```

**Returns:** `SynchronizeEnzymeVaultsResponse`

---

## Document Generation

### downloadPdf

Generate a PDF from HTML content.

```graphql
mutation DownloadPdf($html: String!, $landscape: Boolean) {
  downloadPdf(html: $html, landscape: $landscape)
}
```

**Arguments:**

| Argument    | Type      | Required | Default | Description           |
| ----------- | --------- | -------- | ------- | --------------------- |
| `html`      | `String!` | Yes      | -       | HTML content          |
| `landscape` | `Boolean` | No       | `false` | Landscape orientation |

**Returns:** `String` - Base64-encoded PDF

---

### downloadInvoicePdf

Generate an invoice PDF.

```graphql
mutation DownloadInvoice($invoiceId: Int!) {
  downloadInvoicePdf(invoiceId: $invoiceId)
}
```

**Arguments:**

| Argument    | Type   | Required | Description |
| ----------- | ------ | -------- | ----------- |
| `invoiceId` | `Int!` | Yes      | Invoice ID  |

**Returns:** `String` - Base64-encoded PDF

---

### downloadFundInvestorCapitalStatementPdf

Generate a capital statement for a fund investor.

```graphql
mutation DownloadCapitalStatement($userId: String!, $fundId: Int!, $startDate: String!, $endDate: String!) {
  downloadFundInvestorCapitalStatementPdf(userId: $userId, fundId: $fundId, startDate: $startDate, endDate: $endDate)
}
```

**Arguments:**

| Argument    | Type      | Required | Description             |
| ----------- | --------- | -------- | ----------------------- |
| `userId`    | `String!` | Yes      | User ID                 |
| `fundId`    | `Int!`    | Yes      | Fund ID                 |
| `startDate` | `String!` | Yes      | Period start (ISO date) |
| `endDate`   | `String!` | Yes      | Period end (ISO date)   |

**Returns:** `String` - Base64-encoded PDF

---

## BitGo Operations

### bitgoSendTransaction

Send a transaction via BitGo.

```graphql
mutation SendBitgoTransaction($input: BitgoSendTransactionInput!) {
  bitgoSendTransaction(input: $input) {
    success
    txHash
    status
    error
  }
}
```

**Input:**

```typescript
interface BitgoSendTransactionInput {
  walletId: string;
  address: string;
  amount: string;
  coin: string;
  passphrase?: string;
}
```

**Returns:** `BitgoSendTransactionResponse`

---

### bitgoResolveApproval

Approve or reject a pending BitGo transaction.

```graphql
mutation ResolveApproval($input: BitgoResolveApprovalInput!) {
  bitgoResolveApproval(input: $input) {
    success
    status
    error
  }
}
```

**Input:**

```typescript
interface BitgoResolveApprovalInput {
  pendingApprovalId: string;
  state: "approved" | "rejected";
  otp?: string;
}
```

**Returns:** `BitgoApprovalResponse`

---

### bitgoSyncWalletTransactions

Synchronize transactions for a BitGo wallet.

```graphql
mutation SyncWalletTransactions($input: BitgoSyncWalletTransactionsInput!) {
  bitgoSyncWalletTransactions(input: $input) {
    success
    syncedCount
    error
  }
}
```

**Returns:** `BitgoSyncWalletTransactionsResponse`

---

## User Management

### createUserAccountInvite

Invite a new user to the platform.

```graphql
mutation InviteUser($input: CreateUserAccountInviteInput!) {
  createUserAccountInvite(input: $input) {
    success
    inviteId
    error
  }
}
```

**Input:**

```typescript
interface CreateUserAccountInviteInput {
  email: string;
  organizationId?: string;
  role?: string;
  expiresInDays?: number;
}
```

**Returns:** `CreateUserAccountInviteResponse`

---

### patchAuth0User

Update Auth0 user profile.

```graphql
mutation UpdateUser($input: PatchAuth0UserInput!) {
  patchAuth0User(input: $input) {
    success
    user {
      user_id
      email
      name
    }
    error
  }
}
```

**Returns:** `PatchAuth0UserResponse`

---

### updateUserPhoneNumber

Update a user's phone number.

```graphql
mutation UpdatePhone($userId: String!, $phoneNumber: String!) {
  updateUserPhoneNumber(userId: $userId, phoneNumber: $phoneNumber)
}
```

**Arguments:**

| Argument      | Type      | Required | Description      |
| ------------- | --------- | -------- | ---------------- |
| `userId`      | `String!` | Yes      | User ID          |
| `phoneNumber` | `String!` | Yes      | New phone number |

**Returns:** `Boolean!`

---

## Encryption Operations

### encryptPassphrase

Encrypt a passphrase for secure storage.

```graphql
mutation EncryptPassphrase($passphrase: String!, $sessionId: String!) {
  encryptPassphrase(passphrase: $passphrase, sessionId: $sessionId)
}
```

**Arguments:**

| Argument     | Type      | Required | Description           |
| ------------ | --------- | -------- | --------------------- |
| `passphrase` | `String!` | Yes      | Passphrase to encrypt |
| `sessionId`  | `String!` | Yes      | Current session ID    |

**Returns:** `String` - Encrypted passphrase

---

### decryptPassphrase

Decrypt a previously encrypted passphrase.

```graphql
mutation DecryptPassphrase($encryptedPassphrase: String!, $sessionId: String!) {
  decryptPassphrase(encryptedPassphrase: $encryptedPassphrase, sessionId: $sessionId)
}
```

**Arguments:**

| Argument              | Type      | Required | Description          |
| --------------------- | --------- | -------- | -------------------- |
| `encryptedPassphrase` | `String!` | Yes      | Encrypted passphrase |
| `sessionId`           | `String!` | Yes      | Current session ID   |

**Returns:** `String` - Decrypted passphrase
