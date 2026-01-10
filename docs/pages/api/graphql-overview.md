---
footer: false
---

# GraphQL API Overview

The Agio Platform API is a GraphQL API built with Apollo Server that provides access to all platform operations including portfolio management, trading, KYC, and fund administration.

## Endpoint

```
POST https://api.agiodigital.com/graphql
```

All requests must include the `X-API-Key` header. See [Authentication](/api/authentication) for details.

## Schema Overview

The API is organized into the following domains:

### Portfolio & Wallets

Query portfolio data, wallet balances, and asset allocations.

| Operation                       | Type  | Description                                     |
| ------------------------------- | ----- | ----------------------------------------------- |
| `digitalWalletSummaryById`      | Query | Get wallet summary with balance and assets      |
| `digitalWalletDetailById`       | Query | Get detailed wallet info including transactions |
| `netWorthUsdByUserId`           | Query | Calculate total net worth for a user            |
| `netWorthUsdByOrganizationId`   | Query | Calculate total net worth for an organization   |
| `digitalAssetsByUserId`         | Query | List all digital assets for a user              |
| `digitalAssetsByOrganizationId` | Query | List all digital assets for an organization     |
| `coinPrice`                     | Query | Get current price for a coin symbol             |

### Wallet Management

Create and manage digital wallets.

| Operation                           | Type     | Description                         |
| ----------------------------------- | -------- | ----------------------------------- |
| `createDigitalWallet`               | Mutation | Create a new digital wallet         |
| `createDigitalWalletAddress`        | Mutation | Generate a new address for a wallet |
| `addDigitalWalletWhitelistEntry`    | Mutation | Add address to wallet whitelist     |
| `removeDigitalWalletWhitelistEntry` | Mutation | Remove address from whitelist       |
| `runDigitalWalletAmlReport`         | Mutation | Run AML report on wallet            |

### Trading & OTC

Request quotes and execute trades.

| Operation           | Type     | Description                        |
| ------------------- | -------- | ---------------------------------- |
| `requestOtcQuote`   | Mutation | Request an OTC quote               |
| `calculateOtcQuote` | Mutation | Calculate quote without committing |
| `refreshOtcQuote`   | Mutation | Refresh an existing quote          |
| `requestOtcTrade`   | Mutation | Execute an OTC trade               |
| `requestQuotes`     | Mutation | Get quotes from multiple exchanges |

### KYC & Compliance

Access KYC profiles and compliance data.

| Operation                          | Type  | Description                      |
| ---------------------------------- | ----- | -------------------------------- |
| `getPotentialKycProfiles`          | Query | Get KYC profiles for a user      |
| `sumsubQuestionnaireDataDecrypted` | Query | Get decrypted questionnaire data |

### Fund Administration

Manage fund subscriptions and redemptions.

| Operation                 | Type     | Description                   |
| ------------------------- | -------- | ----------------------------- |
| `cancelFundSubscription`  | Mutation | Cancel a fund subscription    |
| `cancelFundRedemption`    | Mutation | Cancel a fund redemption      |
| `synchronizeEnzymeVaults` | Mutation | Sync data with Enzyme Finance |

### Documents & PDFs

Generate documents and reports.

| Operation                                 | Type     | Description                 |
| ----------------------------------------- | -------- | --------------------------- |
| `generateFundUserAgreementPdf`            | Mutation | Generate fund agreement PDF |
| `downloadFundInvestorCapitalStatementPdf` | Mutation | Generate capital statement  |
| `downloadInvoicePdf`                      | Mutation | Generate invoice PDF        |
| `downloadQuotePdf`                        | Mutation | Generate quote PDF          |

### BitGo Integration

Manage BitGo wallet operations.

| Operation                     | Type     | Description                        |
| ----------------------------- | -------- | ---------------------------------- |
| `bitgoSendTransaction`        | Mutation | Send a BitGo transaction           |
| `bitgoResolveApproval`        | Mutation | Approve/reject pending transaction |
| `bitgoSyncWalletTransactions` | Mutation | Sync wallet transactions           |

## Quick Start Example

Here's a simple query to test your connection:

```graphql
query Ping {
  ping
}
```

Expected response:

```json
{
  "data": {
    "ping": "pong"
  }
}
```

## Query Example: Portfolio Summary

```graphql
query GetPortfolioSummary($userId: String!) {
  netWorthUsdByUserId(userId: $userId)
  digitalAssetsByUserId(userId: $userId, limit: 10) {
    name
    symbol
    usdValue
    unitPriceUsd
  }
}
```

Variables:

```json
{
  "userId": "auth0|abc123"
}
```

## Mutation Example: Request OTC Quote

```graphql
mutation RequestQuote($input: RequestOtcQuoteInput!) {
  requestOtcQuote(input: $input) {
    id
    fromCurrency
    toCurrency
    quoteSize
    quoteFeePerc
    expiresAt
  }
}
```

Variables:

```json
{
  "input": {
    "fromCurrency": "BTC",
    "toCurrency": "USD",
    "size": 1.5,
    "side": "SELL"
  }
}
```

## Caching

Many queries support a `refresh` parameter to bypass caching:

```graphql
query GetWallet($id: Int!) {
  digitalWalletSummaryById(id: $id, refresh: true) {
    label
    usdValue
    assets {
      symbol
      value
    }
  }
}
```

Cache control directives:

- Most queries cache for 30 seconds by default
- Use `refresh: true` for real-time data
- Some aggregations cache for 2 minutes

## Pagination

List queries support `limit` and `offset` parameters:

```graphql
query GetAssets($userId: String!, $limit: Int, $offset: Int) {
  digitalAssetsByUserId(userId: $userId, limit: $limit, offset: $offset) {
    name
    symbol
    usdValue
  }
}
```

## Subscriptions

Real-time data is available via GraphQL subscriptions:

```graphql
subscription OrderBookUpdates($productIds: [String!]) {
  orderBookUpdates(productIds: $productIds) {
    productId
    bids {
      price
      size
    }
    asks {
      price
      size
    }
  }
}
```

## Next Steps

- [Queries Reference](/api/queries) - Complete list of available queries
- [Mutations Reference](/api/mutations) - Complete list of available mutations
- [Types Reference](/api/types) - GraphQL type definitions
- [Examples](/api/examples) - Full code examples
