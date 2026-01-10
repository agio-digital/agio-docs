---
footer: false
---

# GraphQL Types Reference

Complete reference for GraphQL types used in the Agio Platform API.

## Scalar Types

The API uses the following custom scalar types in addition to standard GraphQL scalars:

| Scalar        | Description             | Example                                  |
| ------------- | ----------------------- | ---------------------------------------- |
| `uuid`        | UUID string             | `"550e8400-e29b-41d4-a716-446655440000"` |
| `timestamptz` | Timestamp with timezone | `"2024-01-15T10:30:00Z"`                 |
| `date`        | Date string             | `"2024-01-15"`                           |
| `jsonb`       | JSON object             | `{"key": "value"}`                       |
| `bigint`      | Large integer           | `"9007199254740993"`                     |
| `numeric`     | Decimal number          | `"123.456789"`                           |

## Session Types

### SessionResponse

User session information.

```graphql
type SessionResponse {
  id: String
  userId: String
  active: Boolean
  allowedFunds: [String]
  allowedOrganizations: [String]
}
```

## Portfolio Types

### DigitalAssetSummary

Summary of a digital asset holding.

```graphql
type DigitalAssetSummary {
  name: String!
  symbol: String!
  value: Float!
  usdValue: Float!
  unitPriceUsd: Float!
  walletId: Int!
}
```

### DigitalWalletSummary

Summary of a digital wallet.

```graphql
type DigitalWalletSummary {
  id: Int!
  label: String!
  usdValue: Float!
  nativeCoinBalance: Float
  assets: [DigitalAssetSummary!]!
}
```

### DigitalWalletDetail

Detailed wallet information including transactions.

```graphql
type DigitalWalletDetail {
  id: Int!
  label: String!
  usdValue: Float!
  walletType: WalletType!
  coin: String!
  assets: [DigitalAssetSummary!]!
  transactions(limit: Int, offset: Int): [DigitalWalletTransactionSummary!]!
  deposits(limit: Int, offset: Int): [DigitalWalletDeposit!]!
  withdrawals(limit: Int, offset: Int): [DigitalWalletWithdrawal!]!
  trades(limit: Int, offset: Int): [DigitalWalletTrade!]!
  whitelist: [DigitalWalletWhitelistEntry!]!
  addresses: [DigitalWalletAddress!]!
}
```

### DigitalWalletTransactionSummary

Summary of a wallet transaction.

```graphql
type DigitalWalletTransactionSummary {
  walletId: Int!
  transactionId: String!
  from: String
  to: String
  type: TransactionType!
  status: TransactionStatus!
  amount: Float!
  fee: Float
  createdAt: timestamptz!
}
```

### DigitalWalletWhitelistEntry

Whitelist entry for approved addresses.

```graphql
type DigitalWalletWhitelistEntry {
  id: Int!
  address: String!
  label: String!
  status: WhitelistStatus!
  createdAt: timestamptz!
  approvedAt: timestamptz
}
```

## Trading Types

### OtcQuote

OTC trade quote.

```graphql
type OtcQuote {
  id: uuid!
  from_currency: String!
  to_currency: String!
  quote_size: numeric!
  side: TradeSide!
  quote_fee_perc: numeric!
  expires_at: timestamptz!
  status: QuoteStatus!
  created_at: timestamptz!
}
```

### ExchangeQuoteResponse

Quote response from an exchange.

```graphql
type ExchangeQuoteResponse {
  exchange: String!
  fromCoin: String!
  toCoin: String!
  side: TradeSide!
  size: Float!
  price: Float!
  fee: Float!
  proceeds: Float!
  filled: Boolean!
  expired: Boolean!
  expiresAt: timestamptz
}
```

### DigitalWalletTrade

Record of a completed trade.

```graphql
type DigitalWalletTrade {
  id: Int!
  baseCurrency: String!
  quoteCurrency: String!
  size: Float!
  price: Float!
  fee: Float!
  proceeds: Float!
  side: TradeSide!
  status: TradeStatus!
  executedAt: timestamptz!
}
```

## Market Data Types

### CoinPrice

Cryptocurrency price information.

```graphql
type CoinPrice {
  id: String!
  symbol: String!
  price_usd: Float!
  market_cap: Float
  market_cap_rank: Int
  price_updated_at: timestamptz!
}
```

## KYC Types

### KycProfile

KYC profile information.

```graphql
type KycProfile {
  id: Int!
  sumsub_email: String
  sumsub_first_name: String
  sumsub_last_name: String
  sumsub_phone: String
  most_recent_review_status: ReviewStatus
  last_approved_date: timestamptz
  last_approved_level_name: String
  applicant_id: String
  created_at: timestamptz!
}
```

### SumsubIdDoc

Identity document from SumSub verification.

```graphql
type SumsubIdDoc {
  idDocType: IdDocType!
  country: String!
  firstName: String!
  lastName: String!
  dob: date
  issueDate: date
  expiryDate: date
  number: String
}
```

## Fund Types

### Fund

Investment fund information.

```graphql
type Fund {
  id: Int!
  name: String!
  description: String
  nav: numeric
  navDate: date
  totalAssets: numeric
  currency: String!
  status: FundStatus!
  created_at: timestamptz!
}
```

### FundSubscription

Fund subscription request.

```graphql
type FundSubscription {
  id: Int!
  fund_id: Int!
  user_id: String!
  subscription_amount: numeric!
  nav: numeric
  status: SubscriptionStatus!
  created_at: timestamptz!
  processed_at: timestamptz
}
```

### FundRedemption

Fund redemption request.

```graphql
type FundRedemption {
  id: Int!
  fund_id: Int!
  user_id: String!
  redemption_shares: numeric!
  proceeds: numeric
  status: RedemptionStatus!
  created_at: timestamptz!
  processed_at: timestamptz
}
```

## BitGo Types

### BitgoWallet

BitGo custody wallet.

```graphql
type BitgoWallet {
  id: String!
  label: String!
  coin: String!
  balance: bigint!
  confirmedBalance: bigint!
  spendableBalance: bigint!
  m: Int!
  n: Int!
  addresses: [BitgoAddress!]!
  transfers(limit: Int): [BitgoTransfer!]!
}
```

### BitgoTransfer

BitGo wallet transfer.

```graphql
type BitgoTransfer {
  id: String!
  coin: String!
  wallet: String!
  txid: String!
  value: bigint!
  valueString: String!
  state: TransferState!
  type: TransferType!
  createdDate: timestamptz!
  confirmedAt: timestamptz
}
```

### BitgoApprovalResponse

Response for BitGo approval operations.

```graphql
type BitgoApprovalResponse {
  success: Boolean!
  pendingApprovalId: String
  status: ApprovalStatus
  error: String
}
```

## User Types

### User

Platform user.

```graphql
type User {
  id: Int!
  user_id: String!
  portfolioDashboard: PortfolioDashboard
  preferences: jsonb
  created_at: timestamptz!
}
```

### Auth0Profile

Auth0 user profile.

```graphql
type Auth0Profile {
  user_id: String!
  email: String!
  email_verified: Boolean!
  name: String
  phone: String
  picture: String
  metadata: Auth0Metadata
}
```

### Auth0Metadata

Custom metadata from Auth0.

```graphql
type Auth0Metadata {
  city: String
  country: String
  company: String
  title: String
  address: String
  postal_code: String
}
```

## Response Types

### CreateDigitalWalletResponse

```graphql
type CreateDigitalWalletResponse {
  success: Boolean!
  wallet: DigitalWallet
  error: String
}
```

### BitgoSendTransactionResponse

```graphql
type BitgoSendTransactionResponse {
  success: Boolean!
  txHash: String
  status: TransactionStatus
  pendingApprovalId: String
  error: String
}
```

### BullJobResponse

Background job status response.

```graphql
type BullJobResponse {
  id: String!
  name: String!
  status: JobStatus!
  progress: Int
  result: jsonb
  failedReason: String
  createdAt: timestamptz!
  processedAt: timestamptz
  finishedAt: timestamptz
}
```

## Enum Types

### WalletType

```graphql
enum WalletType {
  hot
  cold
  trading
  evm
  sol
  custodial
}
```

### TransactionType

```graphql
enum TransactionType {
  send
  receive
  trade
  fee
}
```

### TransactionStatus

```graphql
enum TransactionStatus {
  pending
  confirmed
  failed
  cancelled
}
```

### TradeSide

```graphql
enum TradeSide {
  BUY
  SELL
}
```

### QuoteStatus

```graphql
enum QuoteStatus {
  pending
  accepted
  expired
  cancelled
}
```

### WhitelistStatus

```graphql
enum WhitelistStatus {
  pending
  approved
  rejected
}
```

### ReviewStatus

```graphql
enum ReviewStatus {
  init
  pending
  queued
  completed
  onHold
}
```

### FundStatus

```graphql
enum FundStatus {
  active
  closed
  pending
}
```

### SubscriptionStatus

```graphql
enum SubscriptionStatus {
  pending
  approved
  rejected
  cancelled
  processed
}
```

### JobStatus

```graphql
enum JobStatus {
  waiting
  active
  completed
  failed
  delayed
}
```

## Input Types

### CreateDigitalWalletInput

```graphql
input CreateDigitalWalletInput {
  label: String!
  walletType: WalletType!
  coin: String!
  organizationId: String
  userId: String
}
```

### RequestOtcQuoteInput

```graphql
input RequestOtcQuoteInput {
  fromCurrency: String!
  toCurrency: String!
  size: Float!
  side: TradeSide!
  organizationId: String
}
```

### BitgoSendTransactionInput

```graphql
input BitgoSendTransactionInput {
  walletId: String!
  address: String!
  amount: String!
  coin: String!
  passphrase: String
  otp: String
}
```

### PatchAuth0UserInput

```graphql
input PatchAuth0UserInput {
  name: String
  phone: String
  metadata: Auth0MetadataInput
}
```
