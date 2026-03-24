---
footer: false
---

# Generated Queries Reference

> This file is auto-generated from the GraphQL schema. Do not edit directly.

## Available Queries

| Query                                   | Return Type                            | Description                  |
| --------------------------------------- | -------------------------------------- | ---------------------------- |
| `api_version`                           | `String`                               | -                            |
| `ping`                                  | `Ping`                                 | -                            |
| `auth0`                                 | `Auth0`                                | -                            |
| `context`                               | `jsonb`                                | -                            |
| `documentTemplateDictionary`            | `DocumentTemplateDictionaryResponse`   | -                            |
| `coinPrice`                             | `CoinPrice`                            | -                            |
| `activeSession`                         | `SessionResponse`                      | -                            |
| `session`                               | `SessionResponse`                      | -                            |
| `queueJobById`                          | `BullJobResponse`                      | -                            |
| `getPotentialKycProfiles`               | `[KycProfile!]!`                       | -                            |
| `userExistsByEmail`                     | `Boolean!`                             | -                            |
| `sumsubQuestionnaireDataDecrypted`      | `SumsubQuestionnaire`                  | -                            |
| `sumsubQuestionnaireDataDecryptedJsonb` | `jsonb`                                | -                            |
| `AgioOnboardingDocumentSearch`          | `AgioOnboardingDocumentSearchResponse` | -                            |
| `balancerPools`                         | `[BalancerPool!]!`                     | -                            |
| `balancerPool`                          | `BalancerPool`                         | -                            |
| `balancerLPPrice`                       | `BalancerLPPrice`                      | -                            |
| `balancerLPPriceHistory`                | `[BalancerLPPriceHistoryItem!]!`       | -                            |
| `coinMarketCap`                         | `QueryCoinMarketCapToken`              | -                            |
| `crsDataQuality`                        | `CrsDataQualitySummary`                | -                            |
| `crsReceivingCountries`                 | `[CrsReceivingCountry!]!`              | -                            |
| `crsReportableFunds`                    | `[CrsDataQualitySummary!]!`            | -                            |
| `smartWalletSessionKeys`                | `SmartWalletSessionKeysResponse`       | -                            |
| `kms`                                   | `KMSQuery!`                            | -                            |
| `rainCardBalance`                       | `AgioCardBalanceResponse!`             | Get balance for a Agio Card. |

Returns credit limit, pending charges, posted charges, balance due, and spending power.
Requires the user to own the card. |
| `rainCardBalanceByAgioCardUserId` | `AgioCardBalanceResponse!` | Admin-only: Get Agio Card balance by Agio user ID. Bypasses ownership checks. |
| `rainCorporateApplicationPrefill` | `RainCorporateApplicationPrefill!` | Prefill data for the corporate Agio card application form from the org's Sumsub KYB.
Returns verified UBO and representative data from nested sub-applicants.
Empty lists are returned if no Sumsub KYB applicant exists for the org. |
| `redis` | `RedisQuery!` | - |
| `sumsub` | `Sumsub` | - |
| `validateTaskAction` | `TaskValidationResult!` | - |
| `tokenSparkline` | `TokenSparkline` | Get sparkline data for a single token.
Identifier can be: numeric token ID, CoinGecko slug, or symbol (case-insensitive). |
| `tokenSparklines` | `[TokenSparkline!]!` | Get sparkline data for multiple tokens in a single request. |
| `tokenSparklineUrl` | `String` | Get sparkline rendered as a base64 SVG data URI.
Identifier can be: numeric token ID, CoinGecko slug, or symbol (case-insensitive). |
| `tradeSettlement` | `TradeSettlement` | - |
| `tradeSettlementsByRequest` | `[TradeSettlement!]!` | - |
| `tradingProducts` | `[TradingProduct!]` | - |
| `user` | `User` | - |
| `userById` | `User` | - |
| `checkEmailVerificationStatus` | `Boolean!` | - |
| `admin` | `Admin` | - |
| `digitalWalletSummaryById` | `DigitalWalletSummary` | - |
| `digitalWalletDetailById` | `DigitalWalletDetail` | - |
| `netWorthUsdByUserId` | `String` | - |
| `netWorthUsdByOrganizationId` | `String` | - |
| `digitalAssetsByUserId` | `[DigitalAssetSummary]` | - |
| `digitalAssetsByOrganizationId` | `[DigitalAssetSummary]` | - |
| `digitalAssetsByUserIdAggregate` | `DigitalAssetsAggregate` | - |
| `digitalAssetsByOrganizationIdAggregate` | `DigitalAssetsAggregate` | - |
| `myWhitelistRequests` | `[WhitelistRequest!]!` | - |
| `bitgo` | `QueryBitgo` | - |
| `financeQuotes` | `FinanceResultMany` | - |
| `financeQuote` | `FinanceResultOne` | - |
| `financeQuotesCrypto` | `FinanceResultMany` | - |
| `chartData` | `FinanceChartResult` | - |
| `chartDataBatch` | `[FinanceChartResult]` | - |
| `financeNews` | `[FinanceNewsArticle]` | - |
