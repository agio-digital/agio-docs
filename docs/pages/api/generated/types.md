---
footer: false
---

# Generated Types Reference

> This file is auto-generated from the GraphQL schema. Do not edit directly.

## AcceptGoNetworkConnectionInput (Input)

| Field          | Type   | Description |
| -------------- | ------ | ----------- |
| `connectionId` | `Int!` | -           |

---

## AcceptQuoteInput (Input)

| Field       | Type     | Description |
| ----------- | -------- | ----------- |
| `quoteId`   | `Int!`   | -           |
| `signature` | `String` | -           |

---

## AcceptQuoteResponse

| Field       | Type       | Description |
| ----------- | ---------- | ----------- |
| `success`   | `Boolean!` | -           |
| `error`     | `String`   | -           |
| `quoteId`   | `Int`      | -           |
| `invoiceId` | `Int`      | -           |
| `caseId`    | `Int`      | -           |

---

## AcceptUserOrganizationInviteResponse

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `redirectUrl` | `String`  | -           |
| `message`     | `String!` | -           |

---

## AddGetTrackedTokensInput (Input)

| Field       | Type          | Description |
| ----------- | ------------- | ----------- |
| `timestamp` | `timestamptz` | -           |
| `limit`     | `Int`         | -           |
| `allTokens` | `Boolean`     | -           |

---

## AddPolicyResponse

| Field      | Type       | Description |
| ---------- | ---------- | ----------- |
| `success`  | `Boolean!` | -           |
| `policyId` | `String`   | -           |
| `dbId`     | `Int`      | -           |
| `error`    | `String`   | -           |

---

## AddressSuggestion

Autocomplete suggestion from Google Places API

| Field           | Type         | Description                                       |
| --------------- | ------------ | ------------------------------------------------- |
| `text`          | `String!`    | Display text for the suggestion                   |
| `placeId`       | `String!`    | Google Place ID (can be used for further lookups) |
| `mainText`      | `String!`    | Main text (primary part of address)               |
| `secondaryText` | `String!`    | Secondary text (locality, region, country)        |
| `types`         | `[String!]!` | Place types (e.g., "street_address", "locality")  |

---

## AddressValidationResponse

Response from address validation API.
Uses Google Address Validation API to verify addresses.

| Field              | Type                          | Description                                       |
| ------------------ | ----------------------------- | ------------------------------------------------- |
| `success`          | `Boolean!`                    | Whether the address is valid                      |
| `isValid`          | `Boolean`                     | Whether the address passed validation             |
| `confidence`       | `AddressValidationConfidence` | Confidence level of the validation (if available) |
| `formattedAddress` | `String`                      | Formatted address returned by Google              |
| `location`         | `GeocodeLocation`             | Geocode location (latitude/longitude)             |
| `error`            | `String`                      | Error message if validation failed                |

---

## AddSmartWalletSessionKeyInput (Input)

| Field                 | Type      | Description |
| --------------------- | --------- | ----------- |
| `digitalWalletId`     | `Int!`    | -           |
| `encryptedSessionKey` | `String!` | -           |
| `encryptionSessionId` | `String!` | -           |
| `sessionKeyAddress`   | `String!` | -           |
| `permissionsContext`  | `String!` | -           |
| `signature`           | `String!` | -           |
| `permissions`         | `jsonb`   | -           |
| `expiresAt`           | `bigint`  | -           |

---

## AddSmartWalletSessionKeyResponse

| Field       | Type       | Description |
| ----------- | ---------- | ----------- |
| `success`   | `Boolean!` | -           |
| `sessionId` | `String`   | -           |
| `error`     | `String`   | -           |

---

## AddSpendingLimitInput (Input)

| Field             | Type     | Description |
| ----------------- | -------- | ----------- |
| `digitalWalletId` | `Int!`   | -           |
| `amount`          | `Float!` | -           |
| `coin`            | `String` | -           |

---

## AddVelocityLimitInput (Input)

| Field             | Type     | Description |
| ----------------- | -------- | ----------- |
| `digitalWalletId` | `Int!`   | -           |
| `amount`          | `Float!` | -           |
| `timeWindow`      | `Int!`   | -           |
| `coin`            | `String` | -           |

---

## Admin

| Field                   | Type                           | Description |
| ----------------------- | ------------------------------ | ----------- |
| `id`                    | `ID`                           | -           |
| `user_id`               | `String`                       | -           |
| `servicesStatuses`      | `[ServicesStatus]`             | -           |
| `servicesStatus`        | `ServicesStatus`               | -           |
| `childEnterprises`      | `[ChildEnterprise!]!`          | -           |
| `childEnterprise`       | `ChildEnterprise`              | -           |
| `goAccounts`            | `[GoAccount!]!`                | -           |
| `goAccount`             | `GoAccount`                    | -           |
| `goAccountBalances`     | `[GoAccountBalance!]!`         | -           |
| `goTradeHistory`        | `[GoTrade!]!`                  | -           |
| `goFiatOperations`      | `[GoFiatOperation!]!`          | -           |
| `tradingPairs`          | `[TradingPair!]!`              | -           |
| `marketData`            | `MarketData`                   | -           |
| `organizationStatus`    | `OrganizationStatus!`          | -           |
| `enterpriseUsers`       | `[jsonb!]!`                    | -           |
| `enterpriseDetails`     | `jsonb`                        | -           |
| `goNetworkConnections`  | `[GoNetworkConnection!]!`      | -           |
| `goNetworkDirectory`    | `[GoNetworkDirectoryEntry!]!`  | -           |
| `walletPolicies`        | `[WalletPolicy!]!`             | -           |
| `walletPolicyAudit`     | `[WalletPolicyAuditEntry!]!`   | -           |
| `whitelistSyncLogs`     | `[WhitelistSyncLog!]!`         | -           |
| `whitelistDiff`         | `WhitelistDiff!`               | -           |
| `whitelistRequests`     | `[WhitelistRequest!]!`         | -           |
| `whitelistRequest`      | `WhitelistRequest`             | -           |
| `webhooksForWallet`     | `[BitgoWebhookRegistration!]!` | -           |
| `webhookPayloadHistory` | `WebhookPayloadPage!`          | -           |
| `webhookStats`          | `WebhookStats!`                | -           |

---

## AgioOnboardingDocumentGenerateInput (Input)

| Field                        | Type      | Description |
| ---------------------------- | --------- | ----------- |
| `documentTypeName`           | `String!` | -           |
| `fileName`                   | `String`  | -           |
| `originalFileName`           | `String`  | -           |
| `identifier`                 | `String`  | -           |
| `caseId`                     | `Int`     | -           |
| `metadata`                   | `jsonb`   | -           |
| `waitUntilFinished`          | `Boolean` | -           |
| `waitUntilFinishedTimeoutMs` | `Int`     | -           |

---

## AgioOnboardingDocumentGenerateResponse

| Field         | Type              | Description |
| ------------- | ----------------- | ----------- |
| `jobId`       | `uuid!`           | -           |
| `queueName`   | `String!`         | -           |
| `documentId`  | `uuid`            | -           |
| `documentUrl` | `String`          | -           |
| `job`         | `BullJobResponse` | -           |

---

## AgioOnboardingDocumentSearchInput (Input)

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `query`            | `String!` | -           |
| `parentDocumentId` | `uuid`    | -           |
| `matchCount`       | `Int`     | -           |
| `filter`           | `jsonb`   | -           |
| `distinctOn`       | `String`  | -           |

---

## AgioOnboardingDocumentSearchItem

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `id`         | `uuid!`   | -           |
| `similarity` | `Float!`  | -           |
| `content`    | `String!` | -           |
| `metadata`   | `jsonb!`  | -           |
| `documentId` | `uuid`    | -           |

---

## AgioOnboardingDocumentSearchResponse

| Field   | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| `count` | `Int!`                               | -           |
| `items` | `[AgioOnboardingDocumentSearchItem]` | -           |

---

## ApproveWhitelistRequestInput (Input)

| Field       | Type   | Description |
| ----------- | ------ | ----------- |
| `requestId` | `Int!` | -           |

---

## AttachKybBeneficiaryInput (Input)

| Field                    | Type                     | Description                                                     |
| ------------------------ | ------------------------ | --------------------------------------------------------------- |
| `organizationId`         | `ID!`                    | -                                                               |
| `beneficiaryApplicantId` | `String!`                | Sumsub applicant ID of the individual to link                   |
| `types`                  | `[KybBeneficiaryType!]!` | Roles this person holds — at least one required                 |
| `shareSize`              | `Float`                  | Ownership percentage (0–100) — required for UBOs / shareholders |

---

## AttachKybBeneficiaryResult

| Field           | Type         | Description                                            |
| --------------- | ------------ | ------------------------------------------------------ |
| `beneficiaryId` | `String!`    | Junction record ID — use this for detachKybBeneficiary |
| `applicantId`   | `String!`    | The individual's Sumsub applicant ID                   |
| `types`         | `[String!]!` | -                                                      |

---

## Auth0

| Field         | Type           | Description |
| ------------- | -------------- | ----------- |
| `profile`     | `Auth0Profile` | -           |
| `profileById` | `Auth0Profile` | -           |

---

## Auth0Identity

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `connection` | `String`  | -           |
| `user_id`    | `String`  | -           |
| `provider`   | `String`  | -           |
| `isSocial`   | `Boolean` | -           |

---

## Auth0Profile

| Field                       | Type      | Description |
| --------------------------- | --------- | ----------- |
| `user_id`                   | `String`  | -           |
| `email`                     | `String`  | -           |
| `email_verified`            | `Boolean` | -           |
| `picture`                   | `String`  | -           |
| `created_at`                | `String`  | -           |
| `updated_at`                | `String`  | -           |
| `name`                      | `String`  | -           |
| `given_name`                | `String`  | -           |
| `family_name`               | `String`  | -           |
| `nickname`                  | `String`  | -           |
| `multifactor_last_modified` | `String`  | -           |
| `last_ip`                   | `String`  | -           |
| `last_login`                | `String`  | -           |
| `logins_count`              | `String`  | -           |
| `city`                      | `String`  | -           |
| `country_code`              | `String`  | -           |
| `address`                   | `String`  | -           |
| `address2`                  | `String`  | -           |
| `company_name`              | `String`  | -           |
| `mobile_phone`              | `String`  | -           |
| `postal_code`               | `String`  | -           |
| `state_or_province`         | `String`  | -           |
| `preferred_location_code`   | `String`  | -           |
| `preferred_currency_code`   | `String`  | -           |
| `preferred_language_code`   | `String`  | -           |
| `color_scheme`              | `String`  | -           |
| `signature`                 | `String`  | -           |

---

## Auth0ProfileMetadata

| Field                     | Type     | Description |
| ------------------------- | -------- | ----------- |
| `city`                    | `String` | -           |
| `address`                 | `String` | -           |
| `address2`                | `String` | -           |
| `mobile_phone`            | `String` | -           |
| `country_code`            | `String` | -           |
| `postal_code`             | `String` | -           |
| `state_or_province`       | `String` | -           |
| `company_name`            | `String` | -           |
| `preferred_location_code` | `String` | -           |
| `preferred_currency_code` | `String` | -           |
| `preferred_language_code` | `String` | -           |
| `color_scheme`            | `String` | -           |
| `signature`               | `String` | -           |

---

## Auth0ProfileMetadataInput (Input)

| Field                     | Type     | Description |
| ------------------------- | -------- | ----------- |
| `city`                    | `String` | -           |
| `address`                 | `String` | -           |
| `address2`                | `String` | -           |
| `mobile_phone`            | `String` | -           |
| `country_code`            | `String` | -           |
| `postal_code`             | `String` | -           |
| `state_or_province`       | `String` | -           |
| `company_name`            | `String` | -           |
| `preferred_location_code` | `String` | -           |
| `preferred_currency_code` | `String` | -           |
| `preferred_language_code` | `String` | -           |
| `color_scheme`            | `String` | -           |
| `signature`               | `String` | -           |

---

## AutocompleteAddressInput (Input)

Input for autocomplete address search

| Field                 | Type        | Description                                                  |
| --------------------- | ----------- | ------------------------------------------------------------ |
| `input`               | `String!`   | Search query (partial address or place name)                 |
| `includedRegionCodes` | `[String!]` | Limit results to specific country codes (e.g., ["US", "ID"]) |

---

## AutocompleteAddressResponse

Response from address autocomplete API

| Field         | Type                   | Description                        |
| ------------- | ---------------------- | ---------------------------------- |
| `success`     | `Boolean!`             | Whether the request was successful |
| `suggestions` | `[AddressSuggestion!]` | List of address suggestions        |
| `error`       | `String`               | Error message if request failed    |

---

## BackfillAlchemyTransactionsInput (Input)

| Field             | Type     | Description |
| ----------------- | -------- | ----------- |
| `digitalWalletId` | `Int`    | -           |
| `cutoffDate`      | `String` | -           |

---

## BackfillAlchemyTransactionsResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## BackfillDigitalWalletAssetsInput (Input)

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `fundId`          | `Int!`    | -           |
| `digitalWalletId` | `Int`     | -           |
| `startDate`       | `String!` | -           |
| `endDate`         | `String!` | -           |
| `skipDelay`       | `Boolean` | -           |

---

## BackfillDigitalWalletAssetsResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## BackfillTokenPricesInput (Input)

| Field            | Type                     | Description |
| ---------------- | ------------------------ | ----------- |
| `startTimestamp` | `timestamptz!`           | -           |
| `endTimestamp`   | `timestamptz`            | -           |
| `tokenId`        | `Int!`                   | -           |
| `priceSourceIds` | `[Int!]`                 | -           |
| `unit`           | `TokenPriceIntervalUnit` | -           |
| `interval`       | `Int`                    | -           |

---

## BackfillTokenPricesManyInput (Input)

| Field            | Type                     | Description |
| ---------------- | ------------------------ | ----------- |
| `startTimestamp` | `timestamptz!`           | -           |
| `endTimestamp`   | `timestamptz`            | -           |
| `tokenIds`       | `[Int!]!`                | -           |
| `priceSourceIds` | `[Int!]`                 | -           |
| `unit`           | `TokenPriceIntervalUnit` | -           |
| `interval`       | `Int`                    | -           |

---

## BackfillTopTokenPricesInput (Input)

| Field           | Type       | Description |
| --------------- | ---------- | ----------- |
| `clearExisting` | `Boolean!` | -           |
| `count`         | `Int`      | -           |

---

## BalancerLPPrice

| Field               | Type               | Description |
| ------------------- | ------------------ | ----------- |
| `priceUsd`          | `Float!`           | -           |
| `totalShares`       | `Float!`           | -           |
| `totalLiquidityUsd` | `Float!`           | -           |
| `priceTimestamp`    | `String!`          | -           |
| `balancerVersion`   | `BalancerVersion!` | -           |
| `underlyingPrices`  | `JSON`             | -           |

---

## BalancerLPPriceHistoryItem

| Field               | Type      | Description |
| ------------------- | --------- | ----------- |
| `priceUsd`          | `Float!`  | -           |
| `priceDate`         | `String!` | -           |
| `priceTimestamp`    | `String!` | -           |
| `totalLiquidityUsd` | `Float`   | -           |

---

## BalancerPool

| Field                 | Type                    | Description |
| --------------------- | ----------------------- | ----------- |
| `id`                  | `Int!`                  | -           |
| `poolId`              | `String!`               | -           |
| `poolAddress`         | `String!`               | -           |
| `poolType`            | `String!`               | -           |
| `balancerVersion`     | `BalancerVersion!`      | -           |
| `network`             | `BalancerNetwork!`      | -           |
| `name`                | `String`                | -           |
| `symbol`              | `String`                | -           |
| `isTracked`           | `Boolean!`              | -           |
| `isActive`            | `Boolean!`              | -           |
| `backfillStatus`      | `String`                | -           |
| `backfillStartedAt`   | `String`                | -           |
| `backfillCompletedAt` | `String`                | -           |
| `backfillError`       | `String`                | -           |
| `tokens`              | `[BalancerPoolToken!]!` | -           |

---

## BalancerPoolToken

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `id`            | `Int!`    | -           |
| `tokenAddress`  | `String!` | -           |
| `tokenSymbol`   | `String!` | -           |
| `tokenDecimals` | `Int!`    | -           |
| `weight`        | `Float`   | -           |
| `tokenId`       | `Int`     | -           |

---

## BitgoAddress

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `id`      | `String!` | -           |
| `address` | `String!` | -           |
| `chain`   | `Int!`    | -           |
| `index`   | `Int!`    | -           |
| `coin`    | `String!` | -           |
| `wallet`  | `String!` | -           |

---

## BitgoAddressBalance

| Field                    | Type     | Description |
| ------------------------ | -------- | ----------- |
| `balance`                | `bigint` | -           |
| `balanceString`          | `String` | -           |
| `totalReceived`          | `bigint` | -           |
| `totalSent`              | `bigint` | -           |
| `confirmedBalanceString` | `String` | -           |
| `spendableBalanceString` | `String` | -           |

---

## BitgoApprovalResolveInput (Input)

| Field             | Type                             | Description |
| ----------------- | -------------------------------- | ----------- |
| `state`           | `BitgoApprovalStateResolveType!` | -           |
| `digitalWalletId` | `ID!`                            | -           |
| `approvalId`      | `String!`                        | -           |
| `password`        | `String`                         | -           |
| `otp`             | `String`                         | -           |
| `xprv`            | `String`                         | -           |

---

## BitgoApprovalResponse

| Field               | Type                        | Description |
| ------------------- | --------------------------- | ----------- |
| `id`                | `String`                    | -           |
| `wallet`            | `String`                    | -           |
| `coin`              | `String`                    | -           |
| `creator`           | `String`                    | -           |
| `createDate`        | `timestamptz`               | -           |
| `state`             | `BitgoApprovalState`        | -           |
| `approvalsRequired` | `Int`                       | -           |
| `scope`             | `BitgoScope`                | -           |
| `userIds`           | `[String]`                  | -           |
| `enterprise`        | `String`                    | -           |
| `walletLabel`       | `String`                    | -           |
| `info`              | `BitgoApprovalResponseInfo` | -           |

---

## BitgoApprovalResponseInfo

| Field                            | Type                         | Description |
| -------------------------------- | ---------------------------- | ----------- |
| `type`                           | `BitgoApprovalResponseType!` | -           |
| `transactionRequest`             | `jsonb`                      | -           |
| `transactionRequestFull`         | `jsonb`                      | -           |
| `userChangeRequest`              | `jsonb`                      | -           |
| `policyRuleRequest`              | `jsonb`                      | -           |
| `updateApprovalsRequiredRequest` | `jsonb`                      | -           |

---

## BitgoBuildDefaults

| Field        | Type  | Description |
| ------------ | ----- | ----------- |
| `minFeeRate` | `Int` | -           |

---

## BitgoCoinData

| Field                          | Type                        | Description |
| ------------------------------ | --------------------------- | ----------- |
| `id`                           | `String`                    | -           |
| `baseFactor`                   | `bigint`                    | -           |
| `decimalPlaces`                | `Int`                       | -           |
| `chain`                        | `String`                    | -           |
| `family`                       | `String`                    | -           |
| `name`                         | `String`                    | -           |
| `supportsBlockTarget`          | `Boolean`                   | -           |
| `supportsLightning`            | `Boolean`                   | -           |
| `supportsBlsDkg`               | `Boolean`                   | -           |
| `supportsMessageSigning`       | `Boolean`                   | -           |
| `supportsStaking`              | `Boolean`                   | -           |
| `supportsTss`                  | `Boolean`                   | -           |
| `allowsAccountConsolidations`  | `Boolean`                   | -           |
| `enabled`                      | `Boolean`                   | -           |
| `isTestnet`                    | `Boolean`                   | -           |
| `coinFamily`                   | `BitgoCoinFamily`           | -           |
| `supportedWalletTypes`         | `[BitgoWalletType]`         | -           |
| `supportedBackupProviderTypes` | `[BitgoBackupProviderType]` | -           |
| `defaultBackupProviderType`    | `BitgoBackupProviderType`   | -           |
| `isToken`                      | `Boolean`                   | -           |
| `bip44Id`                      | `Int`                       | -           |

---

## BitgoCreateAddressInput (Input)

| Field   | Type     | Description |
| ------- | -------- | ----------- |
| `label` | `String` | -           |
| `chain` | `Int`    | -           |

---

## BitgoCustomChangeKeySignatures

| Field    | Type     | Description |
| -------- | -------- | ----------- |
| `user`   | `String` | -           |
| `backup` | `String` | -           |
| `bitgo`  | `String` | -           |

---

## BitgoEncryptedPassphraseInput (Input)

| Field                 | Type      | Description |
| --------------------- | --------- | ----------- |
| `sessionId`           | `String!` | -           |
| `encryptedPassphrase` | `String!` | -           |

---

## BitgoEncryptionKeyPair

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `pub`          | `String!` | -           |
| `encryptedPrv` | `String!` | -           |

---

## BitgoEncryptionKeyPairInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `pub`          | `String!` | -           |
| `encryptedPrv` | `String!` | -           |

---

## BitgoKey

| Field                       | Type              | Description |
| --------------------------- | ----------------- | ----------- |
| `id`                        | `String!`         | -           |
| `encryptedPrv`              | `String`          | -           |
| `isBitGo`                   | `Boolean`         | -           |
| `source`                    | `BitgoSourceType` | -           |
| `type`                      | `BitgoKeyType!`   | -           |
| `ethAddress`                | `String`          | -           |
| `pub`                       | `String`          | -           |
| `commonKeychain`            | `String`          | -           |
| `commonPub`                 | `String`          | -           |
| `commonKeychainSig`         | `String`          | -           |
| `commonPublicKeySig`        | `String`          | -           |
| `keyShares`                 | `[BitgoKeyShare]` | -           |
| `walletHSMGPGPublicKeySigs` | `String`          | -           |

---

## BitgoKeyShare

| Field          | Type                 | Description |
| -------------- | -------------------- | ----------- |
| `from`         | `BitgoKeyShareType!` | -           |
| `to`           | `BitgoKeyShareType!` | -           |
| `publicShare`  | `String!`            | -           |
| `privateShare` | `String!`            | -           |
| `hsmSig`       | `String!`            | -           |

---

## BitgoKeySignature

| Field       | Type     | Description |
| ----------- | -------- | ----------- |
| `backupPub` | `String` | -           |
| `bitgoPub`  | `String` | -           |

---

## BitgoPendingApproval

| Field               | Type                                 | Description |
| ------------------- | ------------------------------------ | ----------- |
| `id`                | `String!`                            | -           |
| `coin`              | `String!`                            | -           |
| `wallet`            | `String!`                            | -           |
| `enterprise`        | `String!`                            | -           |
| `organization`      | `String`                             | -           |
| `creator`           | `String!`                            | -           |
| `createDate`        | `timestamptz!`                       | -           |
| `info`              | `BitgoPendingApprovalInfo!`          | -           |
| `state`             | `BitgoPendingApprovalState!`         | -           |
| `scope`             | `BitgoScope!`                        | -           |
| `userIds`           | `[String!]!`                         | -           |
| `approvalsRequired` | `Int!`                               | -           |
| `walletLabel`       | `String`                             | -           |
| `resolvers`         | `[jsonb]`                            | -           |
| `addressLabels`     | `[BitgoPendingApprovalAddressLabel]` | -           |

---

## BitgoPendingApprovalAddressLabel

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `address` | `String!` | -           |
| `label`   | `String!` | -           |

---

## BitgoPendingApprovalBuildParams

| Field        | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| `recipients` | `[BitgoPendingApprovalRecipient]` | -           |
| `comment`    | `String`                          | -           |
| `instant`    | `Boolean`                         | -           |

---

## BitgoPendingApprovalInfo

| Field                            | Type                                     | Description |
| -------------------------------- | ---------------------------------------- | ----------- |
| `type`                           | `String!`                                | -           |
| `transactionRequest`             | `BitgoPendingApprovalTransactionRequest` | -           |
| `transactionRequestFull`         | `jsonb`                                  | -           |
| `userChangeRequest`              | `jsonb`                                  | -           |
| `policyRuleRequest`              | `jsonb`                                  | -           |
| `updateApprovalsRequiredRequest` | `jsonb`                                  | -           |
| `enterpriseModificationRequest`  | `jsonb`                                  | -           |
| `enterpriseInviteRequest`        | `jsonb`                                  | -           |

---

## BitgoPendingApprovalRecipient

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| `_id`     | `String` | -           |
| `address` | `String` | -           |
| `amount`  | `String` | -           |

---

## BitgoPendingApprovalsInput (Input)

| Field                 | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| `prevId`              | `String`                          | -           |
| `limit`               | `Int`                             | -           |
| `coin`                | `[String]`                        | -           |
| `enterpriseId`        | `String`                          | -           |
| `organizationId`      | `String`                          | -           |
| `requestType`         | `BitgoPendingApprovalRequestType` | -           |
| `state`               | `[BitgoPendingApprovalState]`     | -           |
| `walletId`            | `String`                          | -           |
| `expandWalletLabels`  | `Boolean`                         | -           |
| `expandAddressLabels` | `Boolean`                         | -           |

---

## BitgoPendingApprovalsResponse

| Field              | Type                       | Description |
| ------------------ | -------------------------- | ----------- |
| `pendingApprovals` | `[BitgoPendingApproval!]!` | -           |
| `count`            | `Int!`                     | -           |
| `nextBatchPrevId`  | `String`                   | -           |

---

## BitgoPendingApprovalTransactionRequest

| Field                | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| `coinSpecific`       | `jsonb`                           | -           |
| `verificationItems`  | `[String]`                        | -           |
| `videoApprovers`     | `[jsonb]`                         | -           |
| `requestedAmount`    | `String`                          | -           |
| `fee`                | `Float`                           | -           |
| `sourceWallet`       | `String`                          | -           |
| `recipients`         | `[BitgoPendingApprovalRecipient]` | -           |
| `isUnsigned`         | `Boolean`                         | -           |
| `buildParams`        | `BitgoPendingApprovalBuildParams` | -           |
| `policyUniqueId`     | `String`                          | -           |
| `verificationRuleId` | `String`                          | -           |

---

## BitgoSendCoinsInput (Input)

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `amount`           | `bigint!` | -           |
| `address`          | `String!` | -           |
| `data`             | `String`  | -           |
| `feeLimit`         | `bigint`  | -           |
| `message`          | `String`  | -           |
| `prv`              | `String`  | -           |
| `tokenName`        | `String`  | -           |
| `minConfirms`      | `Int`     | -           |
| `walletPassphrase` | `String`  | -           |

---

## BitgoSendCoinsResponse

| Field      | Type             | Description |
| ---------- | ---------------- | ----------- |
| `transfer` | `BitgoTransfer!` | -           |
| `txid`     | `String!`        | -           |
| `tx`       | `String!`        | -           |
| `status`   | `String!`        | -           |

---

## BitgoSendTransactionInput (Input)

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `digitalWalletId` | `ID!`     | -           |
| `size`            | `String!` | -           |
| `recipient`       | `String!` | -           |
| `password`        | `String!` | -           |
| `coin`            | `String`  | -           |
| `data`            | `String`  | -           |
| `feeLimit`        | `String`  | -           |
| `invoiceId`       | `Int`     | -           |

---

## BitgoSendTransactionResponse

| Field               | Type       | Description |
| ------------------- | ---------- | ----------- |
| `errors`            | `[String]` | -           |
| `warnings`          | `[String]` | -           |
| `txHex`             | `String`   | -           |
| `pendingApprovalId` | `String`   | -           |
| `txId`              | `String`   | -           |
| `cooldownSeconds`   | `Int`      | -           |

---

## BitgoSyncAllTransactionsInput (Input)

| Field                                                             | Type      | Description                                                                          |
| ----------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------ |
| `syncFromBeginning`                                               | `Boolean` | If true, ignores Redis timestamp and syncs all transfers from the beginning of time. |
| Use with caution - this will process ALL historical transactions. |

---

## BitgoSyncAllTransactionsResponse

| Field         | Type       | Description |
| ------------- | ---------- | ----------- |
| `success`     | `Boolean!` | -           |
| `jobCount`    | `Int!`     | -           |
| `walletCount` | `Int`      | -           |
| `error`       | `String`   | -           |

---

## BitgoSyncDigitalWalletTransactionsInput (Input)

| Field                                                                             | Type      | Description                                                                          |
| --------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------ |
| `digitalWalletId`                                                                 | `Int!`    | -                                                                                    |
| `syncFromBeginning`                                                               | `Boolean` | If true, ignores Redis timestamp and syncs all transfers from the beginning of time. |
| Use with caution - this will process ALL historical transactions for this wallet. |

---

## BitgoSyncDigitalWalletTransactionsResponse

| Field      | Type       | Description |
| ---------- | ---------- | ----------- |
| `success`  | `Boolean!` | -           |
| `jobCount` | `Int!`     | -           |
| `error`    | `String`   | -           |

---

## BitgoSyncTokenSupportResponse

| Field               | Type       | Description |
| ------------------- | ---------- | ----------- |
| `success`           | `Boolean!` | -           |
| `totalTokens`       | `Int!`     | -           |
| `markedSupported`   | `Int!`     | -           |
| `markedUnsupported` | `Int!`     | -           |
| `error`             | `String`   | -           |

---

## BitgoSyncTransactionInput (Input)

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `coin`       | `String!` | -           |
| `walletId`   | `String!` | -           |
| `transferId` | `String!` | -           |

---

## BitgoSyncTransactionResponse

| Field           | Type       | Description |
| --------------- | ---------- | ----------- |
| `success`       | `Boolean!` | -           |
| `transactionId` | `String`   | -           |
| `error`         | `String`   | -           |

---

## BitgoSyncWalletTransactionsInput (Input)

| Field                                                                             | Type      | Description                                                                          |
| --------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------ |
| `walletId`                                                                        | `String!` | -                                                                                    |
| `syncFromBeginning`                                                               | `Boolean` | If true, ignores Redis timestamp and syncs all transfers from the beginning of time. |
| Use with caution - this will process ALL historical transactions for this wallet. |

---

## BitgoSyncWalletTransactionsResponse

| Field      | Type       | Description |
| ---------- | ---------- | ----------- |
| `success`  | `Boolean!` | -           |
| `jobCount` | `Int!`     | -           |
| `error`    | `String`   | -           |

---

## BitgoTransfer

| Field  | Type      | Description |
| ------ | --------- | ----------- |
| `id`   | `String!` | -           |
| `hash` | `String!` | -           |

---

## BitgoTransferEntry

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `address`     | `String`  | -           |
| `value`       | `bigint`  | -           |
| `valueString` | `String`  | -           |
| `isPayGo`     | `Boolean` | -           |
| `wallet`      | `String`  | -           |

---

## BitgoTransferHistory

| Field     | Type                             | Description |
| --------- | -------------------------------- | ----------- |
| `date`    | `timestamptz`                    | -           |
| `action`  | `BitgoTransferHistoryActionType` | -           |
| `comment` | `String`                         | -           |

---

## BitgoTransferInput (Input)

| Field    | Type   | Description |
| -------- | ------ | ----------- |
| `amount` | `Int!` | -           |

---

## BitgoWallet

| Field                        | Type                             | Description                                                                                                                      |
| ---------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                         | `String`                         | -                                                                                                                                |
| `label`                      | `String`                         | -                                                                                                                                |
| `approvalsRequired`          | `Int`                            | -                                                                                                                                |
| `balance`                    | `bigint`                         | -                                                                                                                                |
| `confirmedBalance`           | `bigint`                         | -                                                                                                                                |
| `spendableBalance`           | `bigint`                         | -                                                                                                                                |
| `balanceString`              | `String`                         | -                                                                                                                                |
| `confirmedBalanceString`     | `String`                         | -                                                                                                                                |
| `spendableBalanceString`     | `String`                         | -                                                                                                                                |
| `coin`                       | `String!`                        | -                                                                                                                                |
| `keys`                       | `[String]`                       | -                                                                                                                                |
| `tags`                       | `[String]`                       | -                                                                                                                                |
| `receiveAddress`             | `BitgoAddress`                   | -                                                                                                                                |
| `m`                          | `Int`                            | Number of signatures required. This value must be 2 for hot wallets, 1 for ofc wallets, and not specified for custodial wallets. |
| `n`                          | `Int`                            | Number of keys provided. This value must be 3 for hot wallets, 1 for ofc wallets, and not specified for custodial wallets.       |
| `migratedFrom`               | `String`                         | -                                                                                                                                |
| `coinSpecific`               | `jsonb`                          | -                                                                                                                                |
| `enterprise`                 | `String`                         | -                                                                                                                                |
| `customChangeKeySignatures`  | `BitgoCustomChangeKeySignatures` | -                                                                                                                                |
| `isCold`                     | `Boolean`                        | -                                                                                                                                |
| `deleted`                    | `Boolean`                        | -                                                                                                                                |
| `allowBackupKeySigning`      | `Boolean`                        | -                                                                                                                                |
| `recoverable`                | `Boolean!`                       | -                                                                                                                                |
| `startDate`                  | `timestamptz`                    | -                                                                                                                                |
| `type`                       | `BitgoWalletType`                | -                                                                                                                                |
| `pendingChainInitialization` | `Boolean`                        | -                                                                                                                                |
| `hasLargeNumberOfAddresses`  | `Boolean`                        | -                                                                                                                                |
| `multisigType`               | `BitgoMultiSigType`              | -                                                                                                                                |
| `buildDefaults`              | `BitgoBuildDefaults`             | BTC only                                                                                                                         |
| `transfers`                  | `[BitgoTransfer]`                | -                                                                                                                                |
| `addresses`                  | `[BitgoAddress]`                 | -                                                                                                                                |
| `coinData`                   | `BitgoCoinData`                  | -                                                                                                                                |

---

## BitgoWebhookRegistration

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `id`               | `String!` | -           |
| `type`             | `String!` | -           |
| `url`              | `String!` | -           |
| `coin`             | `String`  | -           |
| `walletId`         | `String!` | -           |
| `numConfirmations` | `Int`     | -           |
| `allToken`         | `Boolean` | -           |
| `createdAt`        | `String`  | -           |

---

## BitgoWhitelistEntry

| Field               | Type          | Description |
| ------------------- | ------------- | ----------- |
| `id`                | `ID!`         | -           |
| `walletId`          | `String`      | -           |
| `createdAt`         | `timestamptz` | -           |
| `ruleType`          | `String`      | -           |
| `actionType`        | `String`      | -           |
| `address`           | `String`      | -           |
| `coin`              | `String`      | -           |
| `entryType`         | `String`      | -           |
| `label`             | `String`      | -           |
| `verificationState` | `String`      | -           |

---

## BridgeQuoteData

| Field                      | Type             | Description |
| -------------------------- | ---------------- | ----------- |
| `quoteId`                  | `Int!`           | -           |
| `sourceAmount`             | `String!`        | -           |
| `destinationMinimumAmount` | `String!`        | -           |
| `destinationTokenSymbol`   | `String!`        | -           |
| `estimatedTime`            | `Int`            | -           |
| `priceImpact`              | `String`         | -           |
| `amountInUsd`              | `String`         | -           |
| `symbiosisFee`             | `String`         | -           |
| `platformFeeBps`           | `Int`            | -           |
| `platformFeeAmount`        | `String`         | -           |
| `expiresAt`                | `timestamptz!`   | -           |
| `routes`                   | `[BridgeRoute!]` | -           |

---

## BridgeQuoteResponse

| Field             | Type                       | Description |
| ----------------- | -------------------------- | ----------- |
| `success`         | `Boolean!`                 | -           |
| `quote`           | `BridgeQuoteData`          | -           |
| `error`           | `String`                   | -           |
| `structuredError` | `SmartWalletErrorResponse` | -           |

---

## BridgeResultResponse

| Field             | Type                       | Description |
| ----------------- | -------------------------- | ----------- |
| `success`         | `Boolean!`                 | -           |
| `transactionHash` | `String`                   | -           |
| `quoteId`         | `Int`                      | -           |
| `status`          | `String`                   | -           |
| `error`           | `String`                   | -           |
| `structuredError` | `SmartWalletErrorResponse` | -           |

---

## BridgeRoute

| Field      | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| `provider` | `String!`              | -           |
| `tokens`   | `[BridgeRouteToken!]!` | -           |

---

## BridgeRouteToken

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `symbol`  | `String!` | -           |
| `chainId` | `Int!`    | -           |

---

## BridgeToTronInput (Input)

| Field                        | Type      | Description |
| ---------------------------- | --------- | ----------- |
| `sourceDigitalWalletId`      | `ID!`     | -           |
| `destinationDigitalWalletId` | `ID!`     | -           |
| `tokenAddress`               | `String!` | -           |
| `amount`                     | `String!` | -           |
| `slippageBps`                | `Int`     | -           |

---

## BulkImportWhitelistInput (Input)

| Field             | Type                      | Description |
| ----------------- | ------------------------- | ----------- |
| `digitalWalletId` | `Int!`                    | -           |
| `entries`         | `[WhitelistEntryInput!]!` | -           |

---

## BulkImportWhitelistResponse

| Field     | Type        | Description |
| --------- | ----------- | ----------- |
| `success` | `Boolean!`  | -           |
| `added`   | `Int`       | -           |
| `skipped` | `Int`       | -           |
| `errors`  | `[String!]` | -           |
| `error`   | `String`    | -           |

---

## BulkInvoiceEmailResult

| Field       | Type       | Description |
| ----------- | ---------- | ----------- |
| `invoiceId` | `Int!`     | -           |
| `success`   | `Boolean!` | -           |
| `error`     | `String`   | -           |

---

## BullJobResponse

| Field                | Type                  | Description |
| -------------------- | --------------------- | ----------- |
| `name`               | `String`              | -           |
| `data`               | `jsonb`               | -           |
| `opts`               | `BullJobResponseOpts` | -           |
| `id`                 | `String`              | -           |
| `progress`           | `Int`                 | -           |
| `returnvalue`        | `jsonb`               | -           |
| `stacktrace`         | `jsonb`               | -           |
| `attemptsMade`       | `Int`                 | -           |
| `delay`              | `Int`                 | -           |
| `timestamp`          | `bigint`              | -           |
| `queueQualifiedName` | `String`              | -           |

---

## BullJobResponseOpts

| Field      | Type  | Description |
| ---------- | ----- | ----------- |
| `attempts` | `Int` | -           |
| `delay`    | `Int` | -           |

---

## BurnDustResult

| Field            | Type                | Description |
| ---------------- | ------------------- | ----------- |
| `walletsScanned` | `Int!`              | -           |
| `burnableFound`  | `Int!`              | -           |
| `txsSubmitted`   | `Int!`              | -           |
| `txsFailed`      | `Int!`              | -           |
| `tokens`         | `[BurnDustToken!]!` | -           |
| `errors`         | `[String!]!`        | -           |

---

## BurnDustToken

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `chainId`         | `Int!`    | -           |
| `contractAddress` | `String!` | -           |
| `tokenSymbol`     | `String!` | -           |
| `balanceWei`      | `String!` | -           |
| `usdValue`        | `Float`   | -           |
| `walletId`        | `Int!`    | -           |
| `txHash`          | `String`  | -           |
| `error`           | `String`  | -           |

---

## CalculateBalancerLPPriceResponse

| Field     | Type              | Description |
| --------- | ----------------- | ----------- |
| `price`   | `BalancerLPPrice` | -           |
| `jobId`   | `String`          | -           |
| `success` | `Boolean!`        | -           |
| `error`   | `String`          | -           |

---

## CalculateOtcQuoteInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `fromCurrency` | `String!` | -           |
| `toCurrency`   | `String!` | -           |
| `side`         | `String!` | -           |
| `size`         | `Float!`  | -           |
| `slippage`     | `Float`   | -           |
| `userId`       | `String`  | -           |
| `tradeType`    | `Int`     | -           |
| `limitPrice`   | `Float`   | -           |

---

## CalculateOtcQuoteResponse

| Field                 | Type      | Description |
| --------------------- | --------- | ----------- |
| `quoteExchangeRate`   | `Float!`  | -           |
| `feePercentage`       | `Float!`  | -           |
| `feeAmount`           | `Float!`  | -           |
| `userId`              | `String!` | -           |
| `fromCurrency`        | `String!` | -           |
| `toCurrency`          | `String!` | -           |
| `side`                | `String!` | -           |
| `size`                | `Float!`  | -           |
| `sizeUsd`             | `Float!`  | -           |
| `feeAmountUsd`        | `Float!`  | -           |
| `netSize`             | `Float!`  | -           |
| `netSizeUsd`          | `Float!`  | -           |
| `baseRateUsd`         | `Float!`  | -           |
| `fromCurrencyRateUsd` | `Float!`  | -           |
| `toCurrencyRateUsd`   | `Float!`  | -           |

---

## CancelGoTradeInput (Input)

| Field         | Type   | Description |
| ------------- | ------ | ----------- |
| `goAccountId` | `Int!` | -           |
| `tradeId`     | `Int!` | -           |

---

## CancelGoTradeResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `error`   | `String`   | -           |

---

## CancelQueueJobInput (Input)

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `queueName` | `String!` | -           |
| `jobId`     | `String!` | -           |

---

## CancelQueueJobResponse

| Field       | Type       | Description |
| ----------- | ---------- | ----------- |
| `success`   | `Boolean!` | -           |
| `queueName` | `String!`  | -           |
| `jobId`     | `String!`  | -           |
| `error`     | `String`   | -           |

---

## CancelRainCardInput (Input)

Input for canceling a Rain Card (irreversible)

| Field    | Type     | Description                                       |
| -------- | -------- | ------------------------------------------------- |
| `cardId` | `Int!`   | Card ID (AgioCard_card.id - our internal card ID) |
| `reason` | `String` | Optional reason for cancellation                  |

---

## CardLimitInput (Input)

Spending limit configuration

| Field       | Type                  | Description            |
| ----------- | --------------------- | ---------------------- |
| `amount`    | `Int!`                | Amount in cents        |
| `frequency` | `RainLimitFrequency!` | Limit frequency period |

---

## CardReminderResultItem

| Field               | Type       | Description |
| ------------------- | ---------- | ----------- |
| `cardId`            | `String!`  | -           |
| `sent`              | `Boolean!` | -           |
| `skipped`           | `Boolean`  | -           |
| `dryRun`            | `Boolean`  | -           |
| `reminderNumber`    | `Int`      | -           |
| `error`             | `String`   | -           |
| `cardType`          | `String`   | -           |
| `last4`             | `String`   | -           |
| `nickname`          | `String`   | -           |
| `cardHolderName`    | `String`   | -           |
| `cardHolderEmail`   | `String`   | -           |
| `organizationName`  | `String`   | -           |
| `daysSinceCreation` | `Int`      | -           |

---

## CardReminderRunResponse

| Field     | Type                         | Description |
| --------- | ---------------------------- | ----------- |
| `success` | `Boolean!`                   | -           |
| `total`   | `Int!`                       | -           |
| `sent`    | `Int!`                       | -           |
| `skipped` | `Int!`                       | -           |
| `errors`  | `Int!`                       | -           |
| `results` | `[CardReminderResultItem!]!` | -           |

---

## CardWithdrawInput (Input)

Input for withdrawing collateral from a Rain Card smart wallet

| Field          | Type      | Description                                                                                   |
| -------------- | --------- | --------------------------------------------------------------------------------------------- |
| `tokenAddress` | `String!` | ERC-20 token contract address to withdraw                                                     |
| `amount`       | `String!` | Amount to withdraw (human-readable, e.g. "100.5")                                             |
| `chainId`      | `Int`     | Chain ID to withdraw from. When omitted, resolved by matching tokenAddress across all chains. |

---

## CardWithdrawResponse

Response from card withdrawal operation

| Field                                                                     | Type       | Description                                                                                                        |
| ------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| `success`                                                                 | `Boolean!` | Whether the withdrawal succeeded                                                                                   |
| `transactionHash`                                                         | `String`   | On-chain transaction hash                                                                                          |
| `chainId`                                                                 | `Int`      | Chain ID where the withdrawal occurred                                                                             |
| `tokenAddress`                                                            | `String`   | Token contract address withdrawn                                                                                   |
| `amount`                                                                  | `String`   | Amount withdrawn (human-readable)                                                                                  |
| `error`                                                                   | `String`   | Error message if the withdrawal failed                                                                             |
| `retryAfterSec`                                                           | `Int`      | Seconds until the active Rain signature expires. Present when success=false due to a signature conflict (409/425). |
| The client should surface this to the user and retry after this duration. |

---

## ChargeCardInput (Input)

Input for charging a Rain Card with a fee.
Requires card:charge permission. Debits from the user's collateral balance.

| Field                                                             | Type      | Description                                                                  |
| ----------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------- |
| `rainUserId`                                                      | `uuid!`   | Rain user ID to charge (from Rain API, not our internal user ID)             |
| `feeCents`                                                        | `Int!`    | Fee amount in cents (e.g., 2550 for $25.50)                                  |
| `feeDescription`                                                  | `String!` | Description of the fee (e.g., "Monthly service fee", "Card replacement fee") |
| Stored in fee_description field and used as Rain API description. |

---

## ChargeCardResponse

Response from card charge operation

| Field            | Type       | Description                             |
| ---------------- | ---------- | --------------------------------------- |
| `success`        | `Boolean!` | Whether the charge succeeded            |
| `chargeId`       | `String`   | Charge ID returned by Rain API          |
| `amount`         | `Float`    | Amount charged in USD                   |
| `feeDescription` | `String`   | Description of the fee that was charged |
| `error`          | `String`   | Error message if the charge failed      |

---

## ChatMessageResponse

| Field               | Type          | Description |
| ------------------- | ------------- | ----------- |
| `id`                | `Int`         | -           |
| `chatId`            | `Int`         | -           |
| `peerAUserId`       | `String`      | -           |
| `peerBUserId`       | `String`      | -           |
| `createdAt`         | `timestamptz` | -           |
| `updatedAt`         | `timestamptz` | -           |
| `text`              | `String`      | -           |
| `payload`           | `jsonb`       | -           |
| `userId`            | `String`      | -           |
| `telegramMessageId` | `bigint`      | -           |

---

## ChildEnterprise

| Field               | Type           | Description |
| ------------------- | -------------- | ----------- |
| `id`                | `Int!`         | -           |
| `organizationId`    | `uuid!`        | -           |
| `userId`            | `String!`      | -           |
| `bitgoEnterpriseId` | `String!`      | -           |
| `kycStatus`         | `String!`      | -           |
| `kycData`           | `jsonb`        | -           |
| `label`             | `String`       | -           |
| `createdAt`         | `timestamptz!` | -           |
| `updatedAt`         | `timestamptz!` | -           |
| `goAccounts`        | `[GoAccount!]` | -           |

---

## CoinPrice

| Field              | Type           | Description |
| ------------------ | -------------- | ----------- |
| `coin_id`          | `String`       | -           |
| `created_at`       | `timestamptz!` | -           |
| `id`               | `ID!`          | -           |
| `market_cap`       | `String!`      | -           |
| `market_cap_rank`  | `Int!`         | -           |
| `price_updated_at` | `timestamptz!` | -           |
| `price_usd`        | `String!`      | -           |
| `symbol`           | `String!`      | -           |

---

## CoinsWhereInput (Input)

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `chain`   | `String`  | -           |
| `family`  | `String`  | -           |
| `enabled` | `Boolean` | -           |

---

## CompleteProfileInput (Input)

| Field                              | Type        | Description |
| ---------------------------------- | ----------- | ----------- |
| `sessionToken`                     | `String!`   | -           |
| `stateToken`                       | `String!`   | -           |
| `givenName`                        | `String!`   | -           |
| `familyName`                       | `String!`   | -           |
| `phoneNumber`                      | `String!`   | -           |
| `countryCode`                      | `String!`   | -           |
| `address`                          | `String!`   | -           |
| `address2`                         | `String`    | -           |
| `city`                             | `String!`   | -           |
| `postalCode`                       | `String!`   | -           |
| `country`                          | `String!`   | -           |
| `stateOrProvince`                  | `String!`   | -           |
| `picture`                          | `String`    | -           |
| `email`                            | `String!`   | -           |
| `termsAndConditionsAccepted`       | `Boolean`   | -           |
| `personas`                         | `[String!]` | -           |
| `hasAcceptedRiskDisclaimer`        | `Boolean`   | -           |
| `fundAccreditedType`               | `String`    | -           |
| `isOrganization`                   | `Boolean`   | -           |
| `organizationName`                 | `String`    | -           |
| `organizationType`                 | `String`    | -           |
| `organizationTypeId`               | `Int`       | -           |
| `organizationLogoUrl`              | `String`    | -           |
| `organizationParentOrganizationId` | `uuid`      | -           |
| `organizationCountryCode`          | `String`    | -           |
| `organizationAddress`              | `String`    | -           |
| `organizationAddress2`             | `String`    | -           |
| `organizationCity`                 | `String`    | -           |
| `organizationPostalCode`           | `String`    | -           |
| `organizationStateOrProvince`      | `String`    | -           |

---

## CompleteProfileResponse

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `redirectUrl` | `String!` | -           |

---

## CorporateApplicationEntityInput (Input)

Legal entity information for corporate applications

| Field                | Type      | Description                                                      |
| -------------------- | --------- | ---------------------------------------------------------------- |
| `name`               | `String!` | Legal name of the entity                                         |
| `description`        | `String!` | Description of the business                                      |
| `industry`           | `String!` | NAICS industry code (e.g., "541512" for Computer Systems Design) |
| `registrationNumber` | `String!` | Business registration number                                     |
| `taxId`              | `String!` | Tax ID (EIN)                                                     |
| `website`            | `String!` | Company website URL (REQUIRED by Rain API)                       |
| `type`               | `String!` | Entity type (LLC, Corporation, Partnership, etc.)                |
| `expectedSpend`      | `String!` | Expected monthly spend range                                     |

---

## CorporateApplicationInitialUserInput (Input)

Initial user for corporate application (must have wallet address)

| Field                                                      | Type                | Description                                                                         |
| ---------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------- |
| `firstName`                                                | `String!`           | -                                                                                   |
| `lastName`                                                 | `String!`           | -                                                                                   |
| `birthDate`                                                | `String!`           | -                                                                                   |
| `nationalId`                                               | `String!`           | -                                                                                   |
| `countryOfIssue`                                           | `String!`           | -                                                                                   |
| `email`                                                    | `String!`           | -                                                                                   |
| `address`                                                  | `RainAddressInput!` | -                                                                                   |
| `phoneCountryCode`                                         | `String`            | -                                                                                   |
| `phoneNumber`                                              | `String`            | -                                                                                   |
| `isTermsOfServiceAccepted`                                 | `Boolean!`          | -                                                                                   |
| `role`                                                     | `String`            | -                                                                                   |
| `walletAddress`                                            | `String`            | -                                                                                   |
| `solanaAddress`                                            | `String`            | -                                                                                   |
| `cardNickname`                                             | `String`            | User-defined card nickname for the initial user's card (optional).                  |
| Max 26 chars: alphanumeric, spaces, periods, hyphens only. |
| `requestedLimitAmount`                                     | `Int`               | Desired credit limit amount in dollars for initial user's card (e.g., 25000)        |
| `requestedLimitFrequency`                                  | `String`            | Limit frequency for initial user's card (e.g., "30 day", "7 day")                   |
| `sessionId`                                                | `String`            | Session ID from generateEncryptionKeys mutation (required if encryptedPin provided) |
| `encryptedPin`                                             | `String`            | Encrypted PIN for initial user (use encryptPassphraseForTransfer from agio-utils).  |

PIN (4-6 digits) is staged during application and set automatically when card is activated.
Must meet security requirements: no repeated digits, no sequential patterns. |

---

## CorporateApplicationPersonInput (Input)

Person data for corporate applications (UBOs, representatives)

| Field              | Type                | Description |
| ------------------ | ------------------- | ----------- |
| `firstName`        | `String!`           | -           |
| `lastName`         | `String!`           | -           |
| `birthDate`        | `String!`           | -           |
| `nationalId`       | `String!`           | -           |
| `countryOfIssue`   | `String!`           | -           |
| `email`            | `String!`           | -           |
| `address`          | `RainAddressInput!` | -           |
| `phoneCountryCode` | `String`            | -           |
| `phoneNumber`      | `String`            | -           |

---

## CreateBitgoWalletInput (Input)

| Field                  | Type                           | Description |
| ---------------------- | ------------------------------ | ----------- |
| `label`                | `String!`                      | -           |
| `backupProvider`       | `BitgoBackupProviderType`      | -           |
| `encryptedUserKeyPair` | `BitgoEncryptionKeyPairInput!` | -           |
| `multisigType`         | `BitgoMultiSigType`            | -           |
| `type`                 | `BitgoWalletType!`             | -           |

---

## CreateBitgoWalletResponse

| Field            | Type          | Description |
| ---------------- | ------------- | ----------- |
| `id`             | `String!`     | -           |
| `userKey`        | `BitgoKey!`   | -           |
| `bitgoKey`       | `BitgoKey!`   | -           |
| `backupKey`      | `BitgoKey!`   | -           |
| `label`          | `String!`     | -           |
| `coinId`         | `String!`     | -           |
| `wallet`         | `BitgoWallet` | -           |
| `webhookId`      | `String`      | -           |
| `receiveAddress` | `String`      | -           |

---

## CreateCardDisputeInput (Input)

| Field           | Type     | Description |
| --------------- | -------- | ----------- |
| `transactionId` | `Int!`   | -           |
| `textEvidence`  | `String` | -           |

---

## CreateCardDisputeResponse

| Field       | Type       | Description |
| ----------- | ---------- | ----------- |
| `success`   | `Boolean!` | -           |
| `disputeId` | `String`   | -           |
| `error`     | `String`   | -           |

---

## CreateChildEnterpriseInput (Input)

| Field                | Type                        | Description |
| -------------------- | --------------------------- | ----------- |
| `organizationId`     | `uuid!`                     | -           |
| `userId`             | `String!`                   | -           |
| `label`              | `String`                    | -           |
| `firstName`          | `String!`                   | -           |
| `lastName`           | `String!`                   | -           |
| `email`              | `String!`                   | -           |
| `dateOfBirth`        | `String!`                   | -           |
| `nationality`        | `String!`                   | -           |
| `countryOfResidence` | `String!`                   | -           |
| `phoneNumber`        | `String`                    | -           |
| `address`            | `KYCAddressInput!`          | -           |
| `identityDocument`   | `KYCIdentityDocumentInput!` | -           |

---

## CreateChildEnterpriseResponse

| Field             | Type              | Description |
| ----------------- | ----------------- | ----------- |
| `success`         | `Boolean!`        | -           |
| `childEnterprise` | `ChildEnterprise` | -           |
| `error`           | `String`          | -           |

---

## CreateDigitalWalletAddressResponse

| Field      | Type                          | Description |
| ---------- | ----------------------------- | ----------- |
| `address`  | `DigitalWalletDepositAddress` | -           |
| `errors`   | `[String]`                    | -           |
| `warnings` | `[String]`                    | -           |

---

## CreateDigitalWalletInput (Input)

| Field                       | Type                                     | Description |
| --------------------------- | ---------------------------------------- | ----------- |
| `label`                     | `String!`                                | -           |
| `walletTypeId`              | `Int!`                                   | -           |
| `walletTypeSpecificOptions` | `CreateDigitalWalletTypeSpecificOptions` | -           |

---

## CreateDigitalWalletResponse

| Field            | Type                   | Description |
| ---------------- | ---------------------- | ----------- |
| `digitalWallet`  | `DigitalWalletSummary` | -           |
| `backupCardPdf`  | `String`               | -           |
| `activationCode` | `String`               | -           |
| `errors`         | `[String]`             | -           |
| `warnings`       | `[String]`             | -           |

---

## CreateDigitalWalletTypeSpecificOptions (Input)

| Field                           | Type                            | Description |
| ------------------------------- | ------------------------------- | ----------- |
| `evmChainId`                    | `Int`                           | -           |
| `evmSignedMessage`              | `String`                        | -           |
| `evmSignature`                  | `String`                        | -           |
| `evmReadOnly`                   | `Boolean`                       | -           |
| `evmReadOnlyAddress`            | `String`                        | -           |
| `coinId`                        | `String`                        | -           |
| `bitgoEncryptedUserKeyPair`     | `BitgoEncryptionKeyPairInput`   | -           |
| `bitgoEncryptedPassphrase`      | `BitgoEncryptedPassphraseInput` | -           |
| `bitgoBackupProvider`           | `BitgoBackupProviderType`       | -           |
| `bitgoMultisigType`             | `BitgoMultiSigType`             | -           |
| `bitgoType`                     | `BitgoWalletType`               | -           |
| `smartWalletAccountAddress`     | `String`                        | -           |
| `smartWalletSignerAddress`      | `String`                        | -           |
| `smartWalletSessionKey`         | `String`                        | -           |
| `smartWalletSessionKeyAddress`  | `String`                        | -           |
| `smartWalletPermissionsContext` | `String`                        | -           |
| `smartWalletSignature`          | `String`                        | -           |
| `smartWalletPermissions`        | `jsonb`                         | -           |
| `smartWalletExpiresAt`          | `bigint`                        | -           |
| `smartWalletIndex`              | `Int`                           | -           |

---

## CreateEncryptedKeypairInput (Input)

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `password` | `String!` | -           |
| `seed`     | `String`  | -           |

---

## CreateGoAccountInput (Input)

| Field               | Type      | Description |
| ------------------- | --------- | ----------- |
| `childEnterpriseId` | `Int!`    | -           |
| `label`             | `String!` | -           |
| `enableTrading`     | `Boolean` | -           |
| `enableFiat`        | `Boolean` | -           |
| `digitalWalletId`   | `Int`     | -           |

---

## CreateGoAccountResponse

| Field       | Type        | Description |
| ----------- | ----------- | ----------- |
| `success`   | `Boolean!`  | -           |
| `goAccount` | `GoAccount` | -           |
| `error`     | `String`    | -           |

---

## CreateOrGetApplicantForUserResult

| Field               | Type                       | Description |
| ------------------- | -------------------------- | ----------- |
| `created`           | `Boolean!`                 | -           |
| `sumsubApplicantId` | `String!`                  | -           |
| `kycProfileId`      | `uuid`                     | -           |
| `applicant`         | `SumsubApplicantResponse!` | -           |

---

## CreateRainCardApplicationInput (Input)

| Field                      | Type       | Description                                                                         |
| -------------------------- | ---------- | ----------------------------------------------------------------------------------- |
| `walletAddress`            | `String!`  | Crypto wallet address for the card (Ethereum 0x... or Solana base58 format)         |
| `occupation`               | `String!`  | SOC occupation description (e.g., "Software Developers", "Chief Executives")        |
| `annualSalary`             | `String!`  | Estimated annual salary                                                             |
| `accountPurpose`           | `String!`  | Purpose of the account (e.g., "Savings", "Business")                                |
| `expectedMonthlyVolume`    | `String!`  | Expected monthly transaction volume                                                 |
| `isTermsOfServiceAccepted` | `Boolean!` | User must accept Rain's terms of service                                            |
| `cardNickname`             | `String`   | User-defined card nickname (optional)                                               |
| `requestedLimitAmount`     | `Int`      | Desired credit limit amount in dollars (e.g., 25000)                                |
| `requestedLimitFrequency`  | `String`   | Limit frequency (e.g., "30 day", "7 day")                                           |
| `sessionId`                | `String`   | Session ID from generateEncryptionKeys mutation (required if encryptedPin provided) |
| `encryptedPin`             | `String`   | Encrypted PIN (use encryptPassphraseForTransfer from agio-utils).                   |

PIN (4-6 digits) is staged during application and set automatically when card is activated.
Must meet security requirements: no repeated digits, no sequential patterns. |

---

## CreateRainCardInput (Input)

Input for creating a new Rain Card (virtual or physical)
Unified mutation that handles both card types via cardType discriminator.

| Field                                                                                                        | Type                | Description                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------- |
| `cardApplicationId`                                                                                          | `Int!`              | Card application ID (AgioCard_card_application.id) - the approved application to create card under |
| `cardType`                                                                                                   | `RainCardType!`     | Card type - determines whether shipping is required                                                |
| `sessionId`                                                                                                  | `String`            | Session ID from generateEncryptionKeys mutation (required if encryptedPin provided)                |
| `encryptedPin`                                                                                               | `String`            | Encrypted PIN (use encryptPassphraseForTransfer from agio-utils).                                  |
| For virtual cards, PIN is set immediately. For physical cards, PIN is staged and set when card is activated. |
| `limit`                                                                                                      | `CardLimitInput`    | Optional spending limit                                                                            |
| `displayName`                                                                                                | `String`            | Display name on card (max 26 chars: alphanumeric, space, period, hyphen)                           |
| Can only be set at creation - immutable after.                                                               |
| `shipping`                                                                                                   | `RainShippingInput` | Shipping address - REQUIRED for physical cards, ignored for virtual                                |
| `billing`                                                                                                    | `RainAddressInput`  | Billing address - defaults to shipping address if omitted                                          |

---

## CreateRainCardResponse

Response from creating a new card

| Field             | Type       | Description                             |
| ----------------- | ---------- | --------------------------------------- |
| `success`         | `Boolean!` | -                                       |
| `id`              | `Int`      | Our internal card ID (AgioCard_card.id) |
| `cardId`          | `String`   | New card ID from Rain                   |
| `cardType`        | `String`   | Card type (virtual or physical)         |
| `status`          | `String`   | Card status after creation              |
| `last4`           | `String`   | Last 4 digits of card number            |
| `expirationMonth` | `String`   | Expiration month                        |
| `expirationYear`  | `String`   | Expiration year                         |
| `error`           | `String`   | -                                       |

---

## CreateRainCorporateApplicationInput (Input)

Input for creating a corporate (company) Rain Card application

| Field                      | Type                                    | Description                                                    |
| -------------------------- | --------------------------------------- | -------------------------------------------------------------- |
| `name`                     | `String!`                               | Company name                                                   |
| `address`                  | `RainAddressInput!`                     | Company physical address                                       |
| `entity`                   | `CorporateApplicationEntityInput!`      | Company legal entity information                               |
| `initialUser`              | `CorporateApplicationInitialUserInput!` | Initial user/admin of the company - must have a wallet address |
| `representatives`          | `[CorporateApplicationPersonInput!]!`   | Company representatives                                        |
| `ultimateBeneficialOwners` | `[CorporateApplicationPersonInput!]!`   | Ultimate beneficial owners (UBOs)                              |
| `sourceKey`                | `String`                                | Source key for tracking (optional)                             |

---

## CreateTradeSettlementInput (Input)

| Field              | Type     | Description |
| ------------------ | -------- | ----------- |
| `tradeRequestId`   | `uuid!`  | -           |
| `settlementTypeId` | `Int!`   | -           |
| `notes`            | `String` | -           |

---

## CreateUserAccountInviteInput (Input)

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `email`                  | `String!` | -           |
| `givenName`              | `String!` | -           |
| `familyName`             | `String!` | -           |
| `password`               | `String`  | -           |
| `roleId`                 | `Int`     | -           |
| `roleIds`                | `[Int!]`  | -           |
| `clientId`               | `Int`     | -           |
| `sendResetPasswordEmail` | `Boolean` | -           |
| `continueOnExisting`     | `Boolean` | -           |
| `ttlSec`                 | `Int`     | -           |
| `redirectUrl`            | `String`  | -           |
| `extraMessage`           | `String`  | -           |

---

## CreateUserAccountInviteResponse

| Field        | Type           | Description |
| ------------ | -------------- | ----------- |
| `userId`     | `String!`      | -           |
| `email`      | `String!`      | -           |
| `givenName`  | `String!`      | -           |
| `familyName` | `String!`      | -           |
| `clientId`   | `Int`          | -           |
| `roleId`     | `Int`          | -           |
| `createdAt`  | `timestamptz!` | -           |
| `updatedAt`  | `timestamptz!` | -           |
| `inviteUrl`  | `String`       | -           |
| `emailSent`  | `Boolean!`     | -           |
| `created`    | `Boolean!`     | -           |

---

## CrsDataQualitySummary

| Field                         | Type         | Description |
| ----------------------------- | ------------ | ----------- |
| `fundId`                      | `Int!`       | -           |
| `fundName`                    | `String!`    | -           |
| `totalAccounts`               | `Int!`       | -           |
| `accountsMissingTin`          | `Int!`       | -           |
| `accountsMissingAddress`      | `Int!`       | -           |
| `accountsMissingTaxResidence` | `Int!`       | -           |
| `individualAccounts`          | `Int!`       | -           |
| `organizationAccounts`        | `Int!`       | -           |
| `totalAccountBalance`         | `Float!`     | -           |
| `receivingCountries`          | `[String!]!` | -           |

---

## CrsGeneratedReport

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `fundId`           | `Int!`    | -           |
| `receivingCountry` | `String!` | -           |
| `accountCount`     | `Int!`    | -           |
| `filePath`         | `String!` | -           |
| `fileHash`         | `String!` | -           |
| `fileSizeBytes`    | `Int!`    | -           |
| `messageRefId`     | `String!` | -           |

---

## CrsReceivingCountry

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `country` | `String!` | -           |
| `code`    | `String!` | -           |

---

## DecryptEncryptedKeypairInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `password`     | `String!` | -           |
| `encryptedPrv` | `String!` | -           |

---

## DecryptEncryptedKeypairResponse

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `decryptedPrv` | `String!` | -           |

---

## DecryptPrivateKeyInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `password`     | `String!` | -           |
| `encryptedPrv` | `String!` | -           |

---

## DeleteAuth0UserResponse

| Field        | Type     | Description |
| ------------ | -------- | ----------- |
| `statusCode` | `Int`    | -           |
| `error`      | `String` | -           |
| `message`    | `String` | -           |

---

## DeleteWebhookInput (Input)

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `digitalWalletId` | `Int!`    | -           |
| `webhookId`       | `String!` | -           |

---

## DeleteWebhookResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `error`   | `String`   | -           |

---

## DetachKybBeneficiaryInput (Input)

| Field            | Type      | Description                                                                             |
| ---------------- | --------- | --------------------------------------------------------------------------------------- |
| `organizationId` | `ID!`     | -                                                                                       |
| `beneficiaryId`  | `String!` | Junction record ID from AttachKybBeneficiaryResult.beneficiaryId (NOT the applicant ID) |

---

## DigitalAssetsAggregate

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `count`    | `Int!`    | -           |
| `usdValue` | `String!` | -           |

---

## DigitalAssetSummary

| Field              | Type                            | Description     |
| ------------------ | ------------------------------- | --------------- |
| `id`               | `ID!`                           | -               |
| `walletId`         | `ID`                            | -               |
| `name`             | `String`                        | -               |
| `symbol`           | `String`                        | -               |
| `value`            | `String`                        | -               |
| `usdValue`         | `String`                        | -               |
| `unitPriceUsd`     | `String`                        | -               |
| `coinPrice`        | `CoinPrice`                     | -               |
| `methods`          | `[String]`                      | TODO: implement |
| `depositAddresses` | `[DigitalWalletDepositAddress]` | TODO: implement |
| `contractAddress`  | `String`                        | -               |
| `decimals`         | `Int`                           | -               |
| `verified`         | `Boolean`                       | -               |
| `logoUrl`          | `String`                        | -               |

---

## DigitalWalletAddress

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `id`      | `ID!`     | -           |
| `address` | `String!` | -           |
| `coinId`  | `String!` | -           |

---

## DigitalWalletBackupCardInput (Input)

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `coinId`           | `String!` | -           |
| `walletId`         | `String!` | -           |
| `label`            | `String!` | -           |
| `userEncryptedPrv` | `String!` | -           |
| `userPub`          | `String!` | -           |
| `backupPub`        | `String!` | -           |
| `bitgoPub`         | `String!` | -           |
| `backupProviderId` | `String!` | -           |
| `activationCode`   | `String`  | -           |

---

## DigitalWalletDepositAddress

| Field      | Type      | Description                                                      |
| ---------- | --------- | ---------------------------------------------------------------- |
| `id`       | `ID!`     | -                                                                |
| `address`  | `String!` | -                                                                |
| `coinId`   | `String!` | -                                                                |
| `method`   | `String`  | deposit methods like: 'sol', 'eth', 'arb', etc.                  |
| `tag`      | `String`  | deposit tag is required for some blockchains like XRP, XLM, etc. |
| `label`    | `String`  | -                                                                |
| `value`    | `String`  | -                                                                |
| `valueUsd` | `String`  | -                                                                |
| `index`    | `Int`     | -                                                                |

---

## DigitalWalletDetail

| Field                    | Type                                | Description |
| ------------------------ | ----------------------------------- | ----------- |
| `id`                     | `ID!`                               | -           |
| `externalId`             | `String`                            | -           |
| `digitalWalletId`        | `Int!`                              | -           |
| `isStarred`              | `Boolean!`                          | -           |
| `label`                  | `String`                            | -           |
| `usdValue`               | `String`                            | -           |
| `walletTypeId`           | `Int`                               | -           |
| `native`                 | `Boolean`                           | -           |
| `nativeCoinBalance`      | `String`                            | -           |
| `nativeCoinBalanceUsd`   | `String`                            | -           |
| `nativeCoinUnitPriceUsd` | `String`                            | -           |
| `nativeCoinSymbol`       | `String`                            | -           |
| `nativeDepositAddress`   | `String`                            | -           |
| `nativeNetworkId`        | `Int`                               | -           |
| `type`                   | `String`                            | -           |
| `userId`                 | `String`                            | -           |
| `readonly`               | `Boolean`                           | -           |
| `organizationId`         | `uuid`                              | -           |
| `sparklineUrl`           | `String`                            | -           |
| `assets`                 | `[DigitalAssetSummary]`             | -           |
| `assetsAggregate`        | `DigitalAssetsAggregate`            | -           |
| `transactions`           | `[DigitalWalletTransactionSummary]` | -           |
| `deposits`               | `[DigitalWalletTransactionSummary]` | -           |
| `withdrawals`            | `[DigitalWalletTransactionSummary]` | -           |
| `trades`                 | `[DigitalWalletTradeSummary]`       | -           |
| `addresses`              | `[DigitalWalletDepositAddress]`     | -           |
| `whitelist`              | `[DigitalWalletWhitelistEntry]`     | -           |

---

## DigitalWalletResponse

| Field            | Type           | Description |
| ---------------- | -------------- | ----------- |
| `id`             | `Int!`         | -           |
| `created_at`     | `timestamptz!` | -           |
| `updated_at`     | `timestamptz!` | -           |
| `fund_id`        | `Int`          | -           |
| `network_id`     | `Int!`         | -           |
| `nickname`       | `String`       | -           |
| `user_id`        | `String!`      | -           |
| `wallet_address` | `String!`      | -           |
| `is_whitelisted` | `Boolean!`     | -           |

---

## DigitalWalletSummary

| Field                    | Type                     | Description |
| ------------------------ | ------------------------ | ----------- |
| `id`                     | `ID!`                    | -           |
| `externalId`             | `String`                 | -           |
| `digitalWalletId`        | `Int!`                   | -           |
| `isStarred`              | `Boolean!`               | -           |
| `label`                  | `String`                 | -           |
| `usdValue`               | `String`                 | -           |
| `walletTypeId`           | `Int`                    | -           |
| `native`                 | `Boolean`                | -           |
| `nativeCoinBalance`      | `String`                 | -           |
| `nativeCoinBalanceUsd`   | `String`                 | -           |
| `nativeCoinUnitPriceUsd` | `String`                 | -           |
| `nativeCoinSymbol`       | `String`                 | -           |
| `nativeDepositAddress`   | `String`                 | -           |
| `nativeNetworkId`        | `Int`                    | -           |
| `type`                   | `String`                 | -           |
| `userId`                 | `String`                 | -           |
| `readonly`               | `Boolean`                | -           |
| `assets`                 | `[DigitalAssetSummary]`  | -           |
| `assetsAggregate`        | `DigitalAssetsAggregate` | -           |
| `organizationId`         | `uuid`                   | -           |
| `sparklineUrl`           | `String`                 | -           |

---

## DigitalWalletTradeSummary

| Field           | Type          | Description |
| --------------- | ------------- | ----------- |
| `id`            | `ID!`         | -           |
| `walletId`      | `ID`          | -           |
| `baseCurrency`  | `String`      | -           |
| `fee`           | `String`      | -           |
| `from`          | `String`      | -           |
| `to`            | `String`      | -           |
| `price`         | `String`      | -           |
| `proceeds`      | `String`      | -           |
| `quoteCurrency` | `String`      | -           |
| `size`          | `String`      | -           |
| `createdAt`     | `timestamptz` | -           |

---

## DigitalWalletTransactionsAggregate

| Field                 | Type          | Description |
| --------------------- | ------------- | ----------- |
| `totalCount`          | `Int!`        | -           |
| `lastFetchedAt`       | `timestamptz` | -           |
| `lastFetchRequestAt`  | `timestamptz` | -           |
| `nextEligibleFetchAt` | `timestamptz` | -           |
| `isFetching`          | `Boolean!`    | -           |
| `walletId`            | `ID`          | -           |

---

## DigitalWalletTransactionSummary

| Field               | Type                             | Description |
| ------------------- | -------------------------------- | ----------- |
| `id`                | `ID!`                            | -           |
| `walletId`          | `ID`                             | -           |
| `createdAt`         | `timestamptz`                    | -           |
| `confirmedAt`       | `timestamptz`                    | -           |
| `confirmations`     | `Int`                            | -           |
| `size`              | `String`                         | -           |
| `notes`             | `String`                         | -           |
| `data`              | `String`                         | -           |
| `coin`              | `String`                         | -           |
| `transactionId`     | `String`                         | -           |
| `status`            | `DigitalWalletTransactionStatus` | -           |
| `from`              | `String`                         | -           |
| `to`                | `String`                         | -           |
| `type`              | `DigitalWalletTransactionType`   | -           |
| `coinPrice`         | `CoinPrice`                      | -           |
| `pendingApproval`   | `BitgoPendingApproval`           | -           |
| `pendingApprovalId` | `String`                         | -           |

---

## DigitalWalletWhitelistEntry

| Field        | Type                                 | Description |
| ------------ | ------------------------------------ | ----------- |
| `id`         | `ID!`                                | -           |
| `label`      | `String`                             | -           |
| `address`    | `String`                             | -           |
| `createdAt`  | `timestamptz`                        | -           |
| `updatedAt`  | `timestamptz`                        | -           |
| `isApproved` | `Boolean`                            | -           |
| `symbol`     | `String`                             | -           |
| `status`     | `DigitalWalletWhitelistEntryStatus!` | -           |
| `walletId`   | `ID!`                                | -           |

---

## DocumentTemplateDictionaryResponse

| Field    | Type                    | Description |
| -------- | ----------------------- | ----------- |
| `caseId` | `Int`                   | -           |
| `tags`   | `[DocumentTemplateTag]` | -           |

---

## DocumentTemplateTag

| Field         | Type       | Description |
| ------------- | ---------- | ----------- |
| `id`          | `String!`  | -           |
| `name`        | `String`   | -           |
| `values`      | `[String]` | -           |
| `value`       | `String`   | -           |
| `description` | `String`   | -           |

---

## EmailInput (Input)

| Field          | Type     | Description |
| -------------- | -------- | ----------- |
| `bodyTextOnly` | `String` | -           |
| `bodyHtml`     | `String` | -           |
| `subject`      | `String` | -           |
| `toEmail`      | `String` | -           |
| `toFirstName`  | `String` | -           |

---

## EncryptedKeypair

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `pub`          | `String!` | -           |
| `encryptedPrv` | `String!` | -           |

---

## EncryptionKeys

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `sessionId` | `String!` | -           |
| `key`       | `String!` | -           |
| `iv`        | `String!` | -           |

---

## EnsureTokenChainInput (Input)

| Field             | Type                   | Description                                                                                     |
| ----------------- | ---------------------- | ----------------------------------------------------------------------------------------------- |
| `type`            | `EnsureTokenChainType` | Resolution type - determines which fields are used. Defaults to AUTO if not provided.           |
| `contractAddress` | `String`               | Contract address of the token (0x format). Required for ALCHEMY and CHAIN_ID types.             |
| `identifier`      | `String`               | Token identifier for AUTO type - can be contract address (0x...) or token symbol                |
| `alchemyNetwork`  | `String`               | Alchemy network identifier (e.g., 'eth-mainnet', 'polygon-mainnet'). Required for ALCHEMY type. |
| `chainId`         | `Int`                  | Direct chain ID (e.g., 1 for Ethereum mainnet). Required for CHAIN_ID type.                     |
| `coin`            | `String`               | BitGo coin symbol (e.g., 'eth', 'tbtc', 'hteth'). Required for BITGO_COIN type.                 |
| `digitalWalletId` | `Int`                  | Digital wallet ID for network context. Required for BITGO_COIN type.                            |
| `decimals`        | `Int`                  | Optional token decimals (will be fetched from provider if not provided)                         |
| `symbol`          | `String`               | Optional token symbol (will be fetched from provider if not provided)                           |
| `name`            | `String`               | Optional token name (will be fetched from provider if not provided)                             |
| `immediate`       | `Boolean`              | Process synchronously (true) or queue for background processing (false, default)                |

---

## EnsureTokenChainResult

| Field          | Type       | Description                                           |
| -------------- | ---------- | ----------------------------------------------------- |
| `success`      | `Boolean!` | Whether the operation was successful                  |
| `tokenId`      | `Int`      | The token ID (if found or created)                    |
| `chainId`      | `Int`      | The chain ID (if found or created)                    |
| `created`      | `Boolean`  | Whether a new token_chain record was created          |
| `message`      | `String`   | Human-readable message about the result               |
| `error`        | `String`   | Error message if operation failed                     |
| `queued`       | `Boolean`  | Whether the job was queued for background processing  |
| `jobId`        | `String`   | Job ID if queued                                      |
| `deduplicated` | `Boolean`  | Whether the job was deduplicated (existing job found) |

---

## EnsureTokenChainsFromTransactionsInput (Input)

| Field            | Type      | Description                                        |
| ---------------- | --------- | -------------------------------------------------- |
| `alchemyNetwork` | `String`  | Filter by specific alchemy network                 |
| `limit`          | `Int`     | Maximum number of transactions to process          |
| `skipInProgress` | `Boolean` | Skip transactions that are already being processed |

---

## EnsureTokenChainsFromTransactionsResult

| Field              | Type       | Description                                                    |
| ------------------ | ---------- | -------------------------------------------------------------- |
| `success`          | `Boolean!` | Whether the operation was successful                           |
| `jobsAdded`        | `Int!`     | Number of jobs added to the queue                              |
| `jobsDeduplicated` | `Int!`     | Number of jobs that were deduplicated                          |
| `skipped`          | `Int!`     | Number of transactions that were skipped (no contract address) |
| `total`            | `Int!`     | Total number of transactions processed                         |
| `error`            | `String`   | Error message if operation failed                              |

---

## EvmSignedMessage

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `id`        | `String!` | -           |
| `message`   | `String!` | -           |
| `profileId` | `String!` | -           |

---

## EvmVerifiedMessage

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `address`         | `String!` | -           |
| `signature`       | `String!` | -           |
| `profileId`       | `String!` | -           |
| `digitalWalletId` | `Int`     | -           |

---

## ExchangeQuote

| Field        | Type          | Description |
| ------------ | ------------- | ----------- |
| `id`         | `String`      | -           |
| `fromCoin`   | `String`      | -           |
| `toCoin`     | `String`      | -           |
| `createdAt`  | `timestamptz` | -           |
| `filled`     | `Boolean`     | -           |
| `expired`    | `Boolean`     | -           |
| `side`       | `String`      | -           |
| `fee`        | `Float`       | -           |
| `size`       | `Float`       | -           |
| `exchangeId` | `String`      | -           |
| `proceeds`   | `Float`       | -           |
| `price`      | `Float`       | -           |
| `quoteCoin`  | `String`      | -           |
| `baseCoin`   | `String`      | -           |

---

## ExchangeQuoteError

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| `code`    | `String` | -           |
| `message` | `String` | -           |
| `payload` | `jsonb`  | -           |

---

## ExchangeQuoteResponse

| Field        | Type                 | Description |
| ------------ | -------------------- | ----------- |
| `exchangeId` | `String!`            | -           |
| `quote`      | `ExchangeQuote`      | -           |
| `error`      | `ExchangeQuoteError` | -           |

---

## ExecuteBridgeQuoteInput (Input)

| Field     | Type   | Description |
| --------- | ------ | ----------- |
| `quoteId` | `Int!` | -           |

---

## FeeWalletRebalanceResult

| Field          | Type         | Description |
| -------------- | ------------ | ----------- |
| `originsFound` | `Int!`       | -           |
| `txsSubmitted` | `Int!`       | -           |
| `txsFailed`    | `Int!`       | -           |
| `txHashes`     | `[String!]!` | -           |
| `errors`       | `[String!]!` | -           |
| `impactPct`    | `Float`      | -           |
| `valueInUsd`   | `String`     | -           |
| `valueOutUsd`  | `String`     | -           |

---

## File

| Field              | Type     | Description |
| ------------------ | -------- | ----------- |
| `orginal_filename` | `String` | -           |
| `filename`         | `String` | -           |
| `mimetype`         | `String` | -           |
| `encoding`         | `String` | -           |
| `id`               | `ID!`    | -           |
| `created_at`       | `String` | -           |
| `user_id`          | `String` | -           |
| `cloud_url`        | `String` | -           |
| `short_url`        | `String` | -           |
| `url`              | `String` | -           |
| `thumbnail_url`    | `String` | -           |
| `case_id`          | `Int`    | -           |
| `fund_id`          | `Int`    | -           |
| `title`            | `String` | -           |
| `description`      | `String` | -           |

---

## FileInput (Input)

| Field  | Type            | Description |
| ------ | --------------- | ----------- |
| `name` | `String`        | -           |
| `data` | `String`        | -           |
| `type` | `FileInputType` | -           |

---

## FinanceAdjclose

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `adjclose` | `[Float]` | -           |

---

## FinanceChartResult

| Field        | Type                | Description |
| ------------ | ------------------- | ----------- |
| `timestamp`  | `[timestamptz!]!`   | -           |
| `meta`       | `FinanceMeta`       | -           |
| `indicators` | `FinanceIndicators` | -           |

---

## FinanceCurrentTradingPeriod

| Field     | Type                       | Description |
| --------- | -------------------------- | ----------- |
| `pre`     | `FinanceTradingPeriodItem` | -           |
| `regular` | `FinanceTradingPeriodItem` | -           |
| `post`    | `FinanceTradingPeriodItem` | -           |

---

## FinanceIndicators

| Field      | Type                | Description |
| ---------- | ------------------- | ----------- |
| `quote`    | `[FinanceQuote]`    | -           |
| `adjclose` | `[FinanceAdjclose]` | -           |

---

## FinanceMeta

| Field                  | Type                          | Description |
| ---------------------- | ----------------------------- | ----------- |
| `currency`             | `String`                      | -           |
| `symbol`               | `String`                      | -           |
| `exchangeName`         | `String`                      | -           |
| `instrumentType`       | `String`                      | -           |
| `firstTradeDate`       | `Int`                         | -           |
| `regularMarketTime`    | `Int`                         | -           |
| `gmtoffset`            | `Int`                         | -           |
| `timezone`             | `String`                      | -           |
| `exchangeTimezoneName` | `String`                      | -           |
| `regularMarketPrice`   | `Float`                       | -           |
| `chartPreviousClose`   | `Float`                       | -           |
| `priceHint`            | `Int`                         | -           |
| `currentTradingPeriod` | `FinanceCurrentTradingPeriod` | -           |
| `dataGranularity`      | `String`                      | -           |
| `range`                | `String`                      | -           |
| `validRanges`          | `[String]`                    | -           |

---

## FinanceNewsArticle

| Field                   | Type           | Description |
| ----------------------- | -------------- | ----------- |
| `title`                 | `String`       | -           |
| `url`                   | `String`       | -           |
| `timePublished`         | `timestamptz!` | -           |
| `authors`               | `[String!]!`   | -           |
| `summary`               | `String!`      | -           |
| `bannerImage`           | `String`       | -           |
| `source`                | `String`       | -           |
| `categoryWithinSource`  | `String`       | -           |
| `sourceDomain`          | `String`       | -           |
| `overallSentimentScore` | `Float!`       | -           |
| `overallSentimentLabel` | `String`       | -           |

---

## FinanceQuote

| Field    | Type       | Description |
| -------- | ---------- | ----------- |
| `high`   | `[Float]!` | -           |
| `close`  | `[Float]!` | -           |
| `open`   | `[Float]!` | -           |
| `low`    | `[Float]!` | -           |
| `volume` | `[Float]!` | -           |

---

## FinanceQuoteResult

| Field                               | Type      | Description |
| ----------------------------------- | --------- | ----------- |
| `language`                          | `String`  | -           |
| `region`                            | `String`  | -           |
| `quoteType`                         | `String`  | -           |
| `typeDisp`                          | `String`  | -           |
| `quoteSourceName`                   | `String`  | -           |
| `triggerable`                       | `Boolean` | -           |
| `customPriceAlertConfidence`        | `String`  | -           |
| `currency`                          | `String`  | -           |
| `fiftyDayAverage`                   | `Float`   | -           |
| `fiftyDayAverageChange`             | `Float`   | -           |
| `fiftyDayAverageChangePercent`      | `Float`   | -           |
| `twoHundredDayAverage`              | `Float`   | -           |
| `twoHundredDayAverageChange`        | `Float`   | -           |
| `twoHundredDayAverageChangePercent` | `Float`   | -           |
| `sourceInterval`                    | `Int`     | -           |
| `exchangeDataDelayedBy`             | `Int`     | -           |
| `tradeable`                         | `Boolean` | -           |
| `cryptoTradeable`                   | `Boolean` | -           |
| `exchange`                          | `String`  | -           |
| `shortName`                         | `String`  | -           |
| `messageBoardId`                    | `String`  | -           |
| `exchangeTimezoneName`              | `String`  | -           |
| `exchangeTimezoneShortName`         | `String`  | -           |
| `gmtOffSetMilliseconds`             | `Int`     | -           |
| `market`                            | `String`  | -           |
| `esgPopulated`                      | `Boolean` | -           |
| `marketState`                       | `String`  | -           |
| `regularMarketChangePercent`        | `Float`   | -           |
| `regularMarketPrice`                | `Float`   | -           |
| `regularMarketChange`               | `Float`   | -           |
| `regularMarketTime`                 | `Int`     | -           |
| `regularMarketDayHigh`              | `Float`   | -           |
| `regularMarketDayRange`             | `String`  | -           |
| `regularMarketDayLow`               | `Float`   | -           |
| `regularMarketVolume`               | `Float`   | -           |
| `regularMarketPreviousClose`        | `Float`   | -           |
| `bid`                               | `Float`   | -           |
| `ask`                               | `Float`   | -           |
| `bidSize`                           | `Int`     | -           |
| `askSize`                           | `Int`     | -           |
| `fullExchangeName`                  | `String`  | -           |
| `regularMarketOpen`                 | `Float`   | -           |
| `averageDailyVolume3Month`          | `Float`   | -           |
| `averageDailyVolume10Day`           | `Float`   | -           |
| `fiftyTwoWeekLowChange`             | `Float`   | -           |
| `fiftyTwoWeekLowChangePercent`      | `Float`   | -           |
| `fiftyTwoWeekRange`                 | `String`  | -           |
| `fiftyTwoWeekHighChange`            | `Float`   | -           |
| `fiftyTwoWeekHighChangePercent`     | `Float`   | -           |
| `fiftyTwoWeekLow`                   | `Float`   | -           |
| `fiftyTwoWeekHigh`                  | `Float`   | -           |
| `firstTradeDateMilliseconds`        | `Float`   | -           |
| `priceHint`                         | `Int`     | -           |
| `symbol`                            | `String`  | -           |
| `earningsTimestamp`                 | `Int`     | -           |
| `earningsTimestampStart`            | `Int`     | -           |
| `earningsTimestampEnd`              | `Int`     | -           |
| `trailingAnnualDividendRate`        | `Float`   | -           |
| `trailingPE`                        | `Float`   | -           |
| `trailingAnnualDividendYield`       | `Float`   | -           |
| `epsTrailingTwelveMonths`           | `Float`   | -           |
| `epsForward`                        | `Float`   | -           |
| `epsCurrentYear`                    | `Float`   | -           |
| `priceEpsCurrentYear`               | `Float`   | -           |
| `sharesOutstanding`                 | `Float`   | -           |
| `bookValue`                         | `Float`   | -           |
| `marketCap`                         | `Float`   | -           |
| `forwardPE`                         | `Float`   | -           |
| `priceToBook`                       | `Float`   | -           |
| `prevName`                          | `String`  | -           |
| `nameChangeDate`                    | `String`  | -           |
| `averageAnalystRating`              | `String`  | -           |
| `longName`                          | `String`  | -           |
| `financialCurrency`                 | `String`  | -           |
| `dividendDate`                      | `String`  | -           |
| `displayName`                       | `String`  | -           |

---

## FinanceResultMany

| Field    | Type                    | Description |
| -------- | ----------------------- | ----------- |
| `result` | `[FinanceQuoteResult!]` | -           |
| `error`  | `String`                | -           |

---

## FinanceResultOne

| Field    | Type                 | Description |
| -------- | -------------------- | ----------- |
| `result` | `FinanceQuoteResult` | -           |
| `error`  | `String`             | -           |

---

## FinanceTradingPeriodItem

| Field       | Type     | Description |
| ----------- | -------- | ----------- |
| `timezone`  | `String` | -           |
| `end`       | `Int`    | -           |
| `start`     | `Int`    | -           |
| `gmtoffset` | `Int`    | -           |

---

## FreezeWalletInput (Input)

| Field             | Type   | Description |
| ----------------- | ------ | ----------- |
| `digitalWalletId` | `Int!` | -           |
| `duration`        | `Int!` | -           |

---

## FreezeWalletResponse

| Field      | Type       | Description |
| ---------- | ---------- | ----------- |
| `success`  | `Boolean!` | -           |
| `duration` | `Int`      | -           |
| `error`    | `String`   | -           |

---

## GenerateBackupKeyInput (Input)

| Field    | Type      | Description |
| -------- | --------- | ----------- |
| `coinId` | `String!` | -           |

---

## GenerateBackupKeyResponse

| Field            | Type           | Description |
| ---------------- | -------------- | ----------- |
| `backupKey`      | `HotWalletKey` | -           |
| `backupProvider` | `String`       | -           |
| `errors`         | `[String]`     | -           |
| `warnings`       | `[String]`     | -           |

---

## GenerateBitGoKeyInput (Input)

| Field    | Type      | Description |
| -------- | --------- | ----------- |
| `coinId` | `String!` | -           |

---

## GenerateBitGoKeyResponse

| Field      | Type           | Description |
| ---------- | -------------- | ----------- |
| `bitgoKey` | `HotWalletKey` | -           |
| `errors`   | `[String]`     | -           |
| `warnings` | `[String]`     | -           |

---

## GenerateCrsReportsInput (Input)

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `fundId`             | `Int!`    | -           |
| `reportingPeriodEnd` | `String!` | -           |
| `receivingCountry`   | `String`  | -           |

---

## GenerateCrsReportsResponse

| Field     | Type                     | Description |
| --------- | ------------------------ | ----------- |
| `success` | `Boolean!`               | -           |
| `reports` | `[CrsGeneratedReport!]!` | -           |
| `errors`  | `[String!]!`             | -           |

---

## GenerateHotWalletKeysInput (Input)

| Field                       | Type                            | Description |
| --------------------------- | ------------------------------- | ----------- |
| `coinId`                    | `String!`                       | -           |
| `bitgoEncryptedUserKeyPair` | `BitgoEncryptionKeyPairInput`   | -           |
| `bitgoEncryptedPassphrase`  | `BitgoEncryptedPassphraseInput` | -           |

---

## GenerateHotWalletKeysResponse

| Field            | Type           | Description |
| ---------------- | -------------- | ----------- |
| `userKey`        | `HotWalletKey` | -           |
| `backupKey`      | `HotWalletKey` | -           |
| `bitgoKey`       | `HotWalletKey` | -           |
| `backupProvider` | `String`       | -           |
| `errors`         | `[String]`     | -           |
| `warnings`       | `[String]`     | -           |

---

## GenerateSmartWalletJwtInput (Input)

| Field             | Type                      | Description |
| ----------------- | ------------------------- | ----------- |
| `targetPublicKey` | `String`                  | -           |
| `scope`           | `SmartWalletSubjectScope` | -           |
| `organizationId`  | `uuid`                    | -           |

---

## GenerateUserKeyInput (Input)

| Field                       | Type                            | Description |
| --------------------------- | ------------------------------- | ----------- |
| `coinId`                    | `String!`                       | -           |
| `bitgoEncryptedUserKeyPair` | `BitgoEncryptionKeyPairInput`   | -           |
| `bitgoEncryptedPassphrase`  | `BitgoEncryptedPassphraseInput` | -           |

---

## GenerateUserKeyResponse

| Field      | Type           | Description |
| ---------- | -------------- | ----------- |
| `userKey`  | `HotWalletKey` | -           |
| `errors`   | `[String]`     | -           |
| `warnings` | `[String]`     | -           |

---

## GeocodeLocation

Geocode location from Google Address Validation

| Field       | Type     | Description |
| ----------- | -------- | ----------- |
| `latitude`  | `Float!` | -           |
| `longitude` | `Float!` | -           |

---

## GoAccount

| Field               | Type           | Description |
| ------------------- | -------------- | ----------- |
| `id`                | `Int!`         | -           |
| `childEnterpriseId` | `Int!`         | -           |
| `digitalWalletId`   | `Int`          | -           |
| `bitgoAccountId`    | `String!`      | -           |
| `accountStatus`     | `String!`      | -           |
| `tradingEnabled`    | `Boolean!`     | -           |
| `fiatEnabled`       | `Boolean!`     | -           |
| `config`            | `jsonb`        | -           |
| `createdAt`         | `timestamptz!` | -           |
| `updatedAt`         | `timestamptz!` | -           |

---

## GoAccountBalance

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `currency`    | `String!` | -           |
| `available`   | `String!` | -           |
| `pending`     | `String!` | -           |
| `total`       | `String!` | -           |
| `fiatValue`   | `String`  | -           |
| `lastUpdated` | `String!` | -           |

---

## GoFiatOperation

| Field              | Type           | Description |
| ------------------ | -------------- | ----------- |
| `id`               | `Int!`         | -           |
| `goAccountId`      | `Int!`         | -           |
| `bitgoOperationId` | `String!`      | -           |
| `type`             | `String!`      | -           |
| `currency`         | `String!`      | -           |
| `amount`           | `String!`      | -           |
| `fees`             | `String`       | -           |
| `status`           | `String!`      | -           |
| `bankAccount`      | `jsonb`        | -           |
| `estimatedArrival` | `timestamptz`  | -           |
| `createdAt`        | `timestamptz!` | -           |
| `updatedAt`        | `timestamptz!` | -           |

---

## GoFiatOperationInput (Input)

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `goAccountId` | `Int!`    | -           |
| `type`        | `String!` | -           |
| `currency`    | `String!` | -           |
| `amount`      | `Float!`  | -           |
| `bankAccount` | `jsonb`   | -           |

---

## GoFiatOperationResponse

| Field       | Type              | Description |
| ----------- | ----------------- | ----------- |
| `success`   | `Boolean!`        | -           |
| `operation` | `GoFiatOperation` | -           |
| `error`     | `String`          | -           |

---

## GoNetworkActionResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `error`   | `String`   | -           |

---

## GoNetworkConnection

| Field              | Type           | Description |
| ------------------ | -------------- | ----------- |
| `id`               | `Int!`         | -           |
| `goAccountId`      | `Int!`         | -           |
| `counterpartyId`   | `String!`      | -           |
| `counterpartyName` | `String`       | -           |
| `connectionStatus` | `String!`      | -           |
| `direction`        | `String!`      | -           |
| `metadata`         | `jsonb`        | -           |
| `createdAt`        | `timestamptz!` | -           |
| `updatedAt`        | `timestamptz!` | -           |

---

## GoNetworkConnectionResponse

| Field        | Type                  | Description |
| ------------ | --------------------- | ----------- |
| `success`    | `Boolean!`            | -           |
| `connection` | `GoNetworkConnection` | -           |
| `error`      | `String`              | -           |

---

## GoNetworkDirectoryEntry

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `id`      | `String!` | -           |
| `name`    | `String!` | -           |
| `type`    | `String`  | -           |
| `country` | `String`  | -           |

---

## GoTrade

| Field             | Type           | Description |
| ----------------- | -------------- | ----------- |
| `id`              | `Int!`         | -           |
| `goAccountId`     | `Int!`         | -           |
| `bitgoTradeId`    | `String!`      | -           |
| `side`            | `String!`      | -           |
| `type`            | `String!`      | -           |
| `baseCurrency`    | `String!`      | -           |
| `quoteCurrency`   | `String!`      | -           |
| `requestedAmount` | `String!`      | -           |
| `executedAmount`  | `String`       | -           |
| `price`           | `String`       | -           |
| `executedPrice`   | `String`       | -           |
| `feeCurrency`     | `String`       | -           |
| `feeAmount`       | `String`       | -           |
| `status`          | `String!`      | -           |
| `createdAt`       | `timestamptz!` | -           |
| `executedAt`      | `timestamptz`  | -           |

---

## GoTradeResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `trade`   | `GoTrade`  | -           |
| `error`   | `String`   | -           |

---

## HotWalletKey

| Field            | Type      | Description |
| ---------------- | --------- | ----------- |
| `id`             | `String!` | -           |
| `pub`            | `String!` | -           |
| `type`           | `String!` | -           |
| `source`         | `String!` | -           |
| `encryptedPrv`   | `String`  | -           |
| `commonKeychain` | `String`  | -           |

---

## InitiateGoTradeInput (Input)

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `goAccountId`   | `Int!`    | -           |
| `side`          | `String!` | -           |
| `type`          | `String!` | -           |
| `baseCurrency`  | `String!` | -           |
| `quoteCurrency` | `String!` | -           |
| `amount`        | `Float!`  | -           |
| `price`         | `Float`   | -           |

---

## InitiateOutboundSettlementInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `settlementId` | `Int!`    | -           |
| `toAddress`    | `String`  | -           |
| `toWalletId`   | `Int`     | -           |
| `toBankInfoId` | `Int`     | -           |
| `autoSend`     | `Boolean` | -           |

---

## InvoiceResponse

| Field              | Type       | Description |
| ------------------ | ---------- | ----------- |
| `invoiceId`        | `Int`      | -           |
| `flowTemplateSlug` | `String`   | -           |
| `caseId`           | `Int`      | -           |
| `quoteId`          | `Int`      | -           |
| `error`            | `String`   | -           |
| `success`          | `Boolean!` | -           |

---

## KMSDecryptInput (Input)

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `encryptedData` | `String!` | -           |

---

## KMSDecryptionResult

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `plaintext`   | `String!` | -           |
| `metadata`    | `jsonb`   | -           |
| `keyVersion`  | `String!` | -           |
| `decryptedAt` | `String!` | -           |

---

## KMSEncryptInput (Input)

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `plaintext` | `String!` | -           |
| `metadata`  | `jsonb`   | -           |

---

## KMSEncryptionResult

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `encryptedData` | `String!` | -           |
| `keyVersion`    | `String!` | -           |
| `encryptedAt`   | `String!` | -           |

---

## KMSKeyRotationResult

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `oldVersion` | `String!` | -           |
| `newVersion` | `String!` | -           |
| `rotatedAt`  | `String!` | -           |

---

## KMSMutation

| Field       | Type                    | Description |
| ----------- | ----------------------- | ----------- |
| `encrypt`   | `KMSEncryptionResult!`  | -           |
| `rotateKey` | `KMSKeyRotationResult!` | -           |
| `reencrypt` | `KMSEncryptionResult!`  | -           |

---

## KMSQuery

| Field                   | Type                   | Description |
| ----------------------- | ---------------------- | ----------- |
| `decrypt`               | `KMSDecryptionResult!` | -           |
| `validateEncryptedData` | `Boolean!`             | -           |
| `getCurrentKeyVersion`  | `String!`              | -           |

---

## KMSReencryptInput (Input)

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `encryptedData` | `String!` | -           |

---

## KYCAddressInput (Input)

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `street1`    | `String!` | -           |
| `street2`    | `String`  | -           |
| `city`       | `String!` | -           |
| `state`      | `String`  | -           |
| `postalCode` | `String!` | -           |
| `country`    | `String!` | -           |

---

## KYCIdentityDocumentInput (Input)

| Field            | Type      | Description |
| ---------------- | --------- | ----------- |
| `type`           | `String!` | -           |
| `number`         | `String!` | -           |
| `issueDate`      | `String!` | -           |
| `expiryDate`     | `String!` | -           |
| `issuingCountry` | `String!` | -           |

---

## KycProfile

| Field                                | Type           | Description |
| ------------------------------------ | -------------- | ----------- |
| `id`                                 | `String!`      | -           |
| `sumsub_email_address`               | `String`       | -           |
| `sumsub_first_name`                  | `String`       | -           |
| `sumsub_last_name`                   | `String`       | -           |
| `sumsub_phone_number`                | `String`       | -           |
| `sumsub_country_of_residence`        | `String`       | -           |
| `most_recent_review_status`          | `String`       | -           |
| `most_recent_review_level_name`      | `String`       | -           |
| `last_approved_level_name`           | `String`       | -           |
| `last_approved_date`                 | `timestamptz`  | -           |
| `sumsub_applicant_type`              | `String`       | -           |
| `most_recent_review_anwser_is_green` | `Boolean!`     | -           |
| `created_at`                         | `timestamptz!` | -           |
| `updated_at`                         | `timestamptz`  | -           |

---

## KycSdkInitTokenInput (Input)

| Field                   | Type      | Description |
| ----------------------- | --------- | ----------- |
| `apiToken`              | `String!` | -           |
| `externalUserId`        | `String!` | -           |
| `externalUserEmail`     | `String`  | -           |
| `externalUserFirstName` | `String`  | -           |
| `externalUserLastName`  | `String`  | -           |
| `ttl`                   | `Int`     | -           |
| `currency`              | `String`  | -           |
| `amount`                | `Float`   | -           |

---

## KycSdkUserAuthenticationInput (Input)

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `token` | `String!` | -           |

---

## MarketData

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `pair`      | `String!` | -           |
| `price`     | `String!` | -           |
| `bid`       | `String!` | -           |
| `ask`       | `String!` | -           |
| `volume24h` | `String!` | -           |
| `change24h` | `String!` | -           |

---

## Mutation

| Field                                                                                              | Type                                         | Description                                                                                  |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `generateFundUserAgreementPdf`                                                                     | `String`                                     | -                                                                                            |
| `previewFundUserAgreementPdf`                                                                      | `String`                                     | -                                                                                            |
| `generateEncryptionKeys`                                                                           | `EncryptionKeys!`                            | -                                                                                            |
| `singleUpload`                                                                                     | `File!`                                      | -                                                                                            |
| `multiUpload`                                                                                      | `[File!]`                                    | -                                                                                            |
| `resetApplicant`                                                                                   | `Int`                                        | -                                                                                            |
| `resetApplicantById`                                                                               | `Int`                                        | -                                                                                            |
| `resendVerificationEmail`                                                                          | `String`                                     | -                                                                                            |
| `resendVerificationEmailById`                                                                      | `String`                                     | -                                                                                            |
| `patchAuth0UserById`                                                                               | `PatchAuth0UserResponse`                     | -                                                                                            |
| `patchAuth0User`                                                                                   | `PatchAuth0UserResponse`                     | -                                                                                            |
| `deleteAuth0User`                                                                                  | `DeleteAuth0UserResponse`                    | -                                                                                            |
| `createUserAccountInvite`                                                                          | `CreateUserAccountInviteResponse!`           | -                                                                                            |
| `userCreateUserAccountInvite`                                                                      | `CreateUserAccountInviteResponse!`           | -                                                                                            |
| `sendEmailSharePage`                                                                               | `Boolean`                                    | -                                                                                            |
| `runDigitalWalletAmlReport`                                                                        | `DigitalWalletResponse`                      | -                                                                                            |
| `downloadPdf`                                                                                      | `String`                                     | -                                                                                            |
| `downloadQuotePdf`                                                                                 | `String`                                     | -                                                                                            |
| `downloadProposalPdf`                                                                              | `String`                                     | -                                                                                            |
| `downloadCombinedProposalPdf`                                                                      | `String`                                     | -                                                                                            |
| `downloadInvoicePdf`                                                                               | `String`                                     | -                                                                                            |
| `downloadInvoiceReceiptPdf`                                                                        | `String`                                     | -                                                                                            |
| `downloadInvoiceStatementPdf`                                                                      | `String`                                     | -                                                                                            |
| `downloadCasePdf`                                                                                  | `String`                                     | -                                                                                            |
| `downloadCaseOrgChartPdf`                                                                          | `String`                                     | -                                                                                            |
| `downloadEnhancedCasePdf`                                                                          | `String`                                     | -                                                                                            |
| `downloadCaseSignOffPdf`                                                                           | `String`                                     | -                                                                                            |
| `downloadDocumentTemplatePdf`                                                                      | `String`                                     | -                                                                                            |
| `downloadFundInvestorCapitalStatementPdf`                                                          | `String`                                     | -                                                                                            |
| `downloadFundShareRegisterPdf`                                                                     | `String`                                     | -                                                                                            |
| `downloadFundShareholderMovementPdf`                                                               | `String`                                     | -                                                                                            |
| `downloadFundInvestorStatementPdf`                                                                 | `String`                                     | -                                                                                            |
| `downloadFundInvestorAllocationsPdf`                                                               | `String`                                     | -                                                                                            |
| `downloadFundExpenseReportPdf`                                                                     | `String`                                     | -                                                                                            |
| `downloadFundNavReportPdf`                                                                         | `String`                                     | -                                                                                            |
| `downloadFundSubscriptionConfirmationPdf`                                                          | `String`                                     | -                                                                                            |
| `downloadFundRedemptionConfirmationPdf`                                                            | `String`                                     | -                                                                                            |
| `downloadFundPerformanceStatementPdf`                                                              | `String`                                     | -                                                                                            |
| `downloadWireTransferPdf`                                                                          | `String`                                     | -                                                                                            |
| `sendWireTransferEmail`                                                                            | `SendWireTransferEmailResponse!`             | -                                                                                            |
| `downloadDigitalWalletBackupCardPdf`                                                               | `String`                                     | -                                                                                            |
| `downloadProductCatalogPdf`                                                                        | `String`                                     | -                                                                                            |
| `sendOtpCode`                                                                                      | `Boolean`                                    | -                                                                                            |
| `sendLink`                                                                                         | `Boolean`                                    | -                                                                                            |
| `verifyOtpCode`                                                                                    | `Boolean`                                    | -                                                                                            |
| `sendChatMessage`                                                                                  | `ChatMessageResponse`                        | -                                                                                            |
| `requestQuotes`                                                                                    | `[ExchangeQuoteResponse]`                    | -                                                                                            |
| `generateFileDownloadToken`                                                                        | `String`                                     | -                                                                                            |
| `shortenLink`                                                                                      | `String`                                     | -                                                                                            |
| `jsonbToCsv`                                                                                       | `String`                                     | -                                                                                            |
| `sendEmail`                                                                                        | `Boolean`                                    | -                                                                                            |
| `associateKycProfileWithUser`                                                                      | `KycProfile!`                                | -                                                                                            |
| `renderCaseDocuments`                                                                              | `[BullJobResponse!]!`                        | -                                                                                            |
| `sendCaseDocumentsEmail`                                                                           | `Boolean`                                    | -                                                                                            |
| `authenticateGuest`                                                                                | `String`                                     | -                                                                                            |
| `exchangeTokenForShortLivedToken`                                                                  | `String`                                     | -                                                                                            |
| `startSession`                                                                                     | `SessionResponse`                            | -                                                                                            |
| `endSession`                                                                                       | `Boolean!`                                   | -                                                                                            |
| `destroyUserSessions`                                                                              | `Boolean!`                                   | -                                                                                            |
| `setAuthToken`                                                                                     | `Boolean`                                    | -                                                                                            |
| `deleteAuthToken`                                                                                  | `Boolean`                                    | -                                                                                            |
| `acceptUserOrganizationInvite`                                                                     | `AcceptUserOrganizationInviteResponse`       | -                                                                                            |
| `completeProfile`                                                                                  | `CompleteProfileResponse`                    | -                                                                                            |
| `generateWorkflowSdkInitToken`                                                                     | `String`                                     | -                                                                                            |
| `authenticateWorkflowSdkUser`                                                                      | `String`                                     | -                                                                                            |
| `generateKycSdkInitToken`                                                                          | `String`                                     | -                                                                                            |
| `authenticateKycSdkUser`                                                                           | `String`                                     | -                                                                                            |
| `createInvoiceFromQuote`                                                                           | `InvoiceResponse`                            | -                                                                                            |
| `createInvoiceFromCase`                                                                            | `InvoiceResponse`                            | -                                                                                            |
| `resetInvoiceToQuote`                                                                              | `InvoiceResponse`                            | -                                                                                            |
| `sendInvoiceEmail`                                                                                 | `Boolean`                                    | -                                                                                            |
| `sendQuoteEmail`                                                                                   | `Boolean`                                    | -                                                                                            |
| `sendBulkInvoiceEmails`                                                                            | `SendBulkInvoiceEmailsResponse!`             | -                                                                                            |
| `getOrCreateQuote`                                                                                 | `Int`                                        | -                                                                                            |
| `acceptQuote`                                                                                      | `AcceptQuoteResponse!`                       | -                                                                                            |
| `submitQuoteQuestion`                                                                              | `SubmitQuoteQuestionResponse!`               | -                                                                                            |
| `addGetTrackedTokensToQueue`                                                                       | `BullJobResponse`                            | -                                                                                            |
| `backfillTokenPricesMany`                                                                          | `BullJobResponse`                            | -                                                                                            |
| `backfillTokenPrices`                                                                              | `BullJobResponse`                            | -                                                                                            |
| `backfillTopTokenPrices`                                                                           | `BullJobResponse`                            | -                                                                                            |
| `cancelQueueJob`                                                                                   | `CancelQueueJobResponse!`                    | -                                                                                            |
| `syncCoinlistPlatforms`                                                                            | `BullJobResponse`                            | -                                                                                            |
| `rebuildTokens`                                                                                    | `BullJobResponse`                            | -                                                                                            |
| `reconcileCoingecko`                                                                               | `BullJobResponse`                            | -                                                                                            |
| `verifyTokenChains`                                                                                | `BullJobResponse`                            | -                                                                                            |
| `scrapeCoinIcon`                                                                                   | `String`                                     | -                                                                                            |
| `scrapeNews`                                                                                       | `BullJobResponse!`                           | -                                                                                            |
| `addMarketPricesJob`                                                                               | `[BullJobResponse!]!`                        | -                                                                                            |
| `addWalletSnapshotJob`                                                                             | `BullJobResponse`                            | -                                                                                            |
| `addWalletsSnapshotJob`                                                                            | `[BullJobResponse]`                          | -                                                                                            |
| `updateUserPhoneNumber`                                                                            | `Boolean!`                                   | -                                                                                            |
| `updateUserEmail`                                                                                  | `Boolean!`                                   | -                                                                                            |
| `setEmailVerified`                                                                                 | `Boolean`                                    | -                                                                                            |
| `generateStatementOfAccountPdf`                                                                    | `String`                                     | -                                                                                            |
| `syncApplicantQuestionnaire`                                                                       | `SyncApplicantQuestionnaireResponse!`        | -                                                                                            |
| `processFundCustodyExpenseAccruals`                                                                | `ProcessFundCustodyExpenseAccrualsResponse!` | -                                                                                            |
| `processExpenseAccruals`                                                                           | `ProcessExpenseAccrualsResponse!`            | -                                                                                            |
| `processFeeAccruals`                                                                               | `ProcessFeeAccrualsResponse!`                | -                                                                                            |
| `processFundEndOfDay`                                                                              | `ProcessFundEndOfDayResponse!`               | -                                                                                            |
| `backfillDigitalWalletAssets`                                                                      | `BackfillDigitalWalletAssetsResponse!`       | -                                                                                            |
| `AgioOnboardingDocumentGenerate`                                                                   | `AgioOnboardingDocumentGenerateResponse!`    | -                                                                                            |
| `backfillAlchemyTransactions`                                                                      | `BackfillAlchemyTransactionsResponse!`       | -                                                                                            |
| `registerBalancerPool`                                                                             | `RegisterBalancerPoolResponse!`              | -                                                                                            |
| `trackBalancerPool`                                                                                | `TrackBalancerPoolResponse!`                 | -                                                                                            |
| `calculateBalancerLPPrice`                                                                         | `CalculateBalancerLPPriceResponse!`          | -                                                                                            |
| `refreshBalancerLPPrices`                                                                          | `RefreshBalancerLPPricesResponse!`           | -                                                                                            |
| `rerunBackfillBalancerPool`                                                                        | `RerunBackfillResponse!`                     | -                                                                                            |
| `generateCrsReports`                                                                               | `GenerateCrsReportsResponse!`                | -                                                                                            |
| `transferDigitalAsset`                                                                             | `DigitalWalletTransactionSummary`            | TODO: implement. Use to transfer, send or withdraw digital asset                             |
| `requestConvertDigitalAssetQuote`                                                                  | `ExchangeQuote`                              | TODO: implement                                                                              |
| `acceptConvertDigitalAssetQuote`                                                                   | `DigitalWalletTradeSummary`                  | TODO: implement                                                                              |
| `createDigitalWallet`                                                                              | `CreateDigitalWalletResponse`                | -                                                                                            |
| `createDigitalWalletAddress`                                                                       | `CreateDigitalWalletAddressResponse`         | -                                                                                            |
| `generateHotWalletKeys`                                                                            | `GenerateHotWalletKeysResponse`              | -                                                                                            |
| `generateUserKey`                                                                                  | `GenerateUserKeyResponse`                    | -                                                                                            |
| `generateBackupKey`                                                                                | `GenerateBackupKeyResponse`                  | -                                                                                            |
| `generateBitGoKey`                                                                                 | `GenerateBitGoKeyResponse`                   | -                                                                                            |
| `createEncryptedKeypair`                                                                           | `EncryptedKeypair`                           | -                                                                                            |
| `decryptEncryptedKeypair`                                                                          | `DecryptEncryptedKeypairResponse`            | -                                                                                            |
| `decryptPrivateKey`                                                                                | `String`                                     | -                                                                                            |
| `encryptPassphrase`                                                                                | `String`                                     | -                                                                                            |
| `decryptPassphrase`                                                                                | `String`                                     | -                                                                                            |
| `addDigitalWalletWhitelistEntry`                                                                   | `DigitalWalletWhitelistEntry`                | -                                                                                            |
| `removeDigitalWalletWhitelistEntry`                                                                | `Boolean`                                    | -                                                                                            |
| `addSmartWalletSessionKey`                                                                         | `AddSmartWalletSessionKeyResponse`           | -                                                                                            |
| `revokeSmartWalletSessionKey`                                                                      | `RevokeSmartWalletSessionKeyResponse`        | -                                                                                            |
| `provisionOrgSmartWalletSessionKeys`                                                               | `ProvisionOrgWalletSessionKeysResponse!`     | -                                                                                            |
| `cancelFundSubscription`                                                                           | `Boolean!`                                   | -                                                                                            |
| `cancelFundRedemption`                                                                             | `Boolean!`                                   | -                                                                                            |
| `synchronizeEnzymeVaults`                                                                          | `SynchronizeEnzymeVaultsResponse!`           | -                                                                                            |
| `createChildEnterprise`                                                                            | `CreateChildEnterpriseResponse`              | -                                                                                            |
| `createGoAccount`                                                                                  | `CreateGoAccountResponse`                    | -                                                                                            |
| `initiateGoTrade`                                                                                  | `GoTradeResponse`                            | -                                                                                            |
| `cancelGoTrade`                                                                                    | `CancelGoTradeResponse`                      | -                                                                                            |
| `depositFiatToGoAccount`                                                                           | `GoFiatOperationResponse`                    | -                                                                                            |
| `withdrawFiatFromGoAccount`                                                                        | `GoFiatOperationResponse`                    | -                                                                                            |
| `requestGoNetworkConnection`                                                                       | `GoNetworkConnectionResponse`                | -                                                                                            |
| `acceptGoNetworkConnection`                                                                        | `GoNetworkActionResponse`                    | -                                                                                            |
| `revokeGoNetworkConnection`                                                                        | `GoNetworkActionResponse`                    | -                                                                                            |
| `kms`                                                                                              | `KMSMutation!`                               | -                                                                                            |
| `bitgoSendCoins`                                                                                   | `BitgoSendCoinsResponse`                     | -                                                                                            |
| `bitgoCreateAddress`                                                                               | `BitgoAddress`                               | -                                                                                            |
| `bitgoResolveApproval`                                                                             | `BitgoApprovalResponse`                      | -                                                                                            |
| `bitgoSendTransaction`                                                                             | `BitgoSendTransactionResponse`               | -                                                                                            |
| `bitgoSyncTransaction`                                                                             | `BitgoSyncTransactionResponse`               | -                                                                                            |
| `bitgoSyncWalletTransactions`                                                                      | `BitgoSyncWalletTransactionsResponse`        | -                                                                                            |
| `bitgoSyncDigitalWalletTransactions`                                                               | `BitgoSyncDigitalWalletTransactionsResponse` | -                                                                                            |
| `bitgoSyncAllTransactions`                                                                         | `BitgoSyncAllTransactionsResponse`           | -                                                                                            |
| `bitgoSyncTransactionsForWebhooks`                                                                 | `BitgoSyncAllTransactionsResponse`           | -                                                                                            |
| `bitgoSyncTokenSupport`                                                                            | `BitgoSyncTokenSupportResponse`              | -                                                                                            |
| `bridgeToTronQuote`                                                                                | `BridgeQuoteResponse`                        | -                                                                                            |
| `bridgeToTron`                                                                                     | `BridgeResultResponse`                       | -                                                                                            |
| `ensureTokenChain`                                                                                 | `EnsureTokenChainResult!`                    | Ensure a token_chain record exists for a given contract address and network.                 |
| If the token_chain doesn't exist, fetches metadata from Alchemy and creates the necessary records. |
| `ensureTokenChainsFromTransactions`                                                                | `EnsureTokenChainsFromTransactionsResult!`   | Backfill token chains from existing alchemy_transaction records that have contract addresses |
| but no associated token_chain record yet.                                                          |
| `rebalanceAgioFeeSmartWallet`                                                                      | `FeeWalletRebalanceResult!`                  | -                                                                                            |
| `burnDust`                                                                                         | `BurnDustResult!`                            | -                                                                                            |
| `burnDustAgioFeeSmartWallet`                                                                       | `BurnDustResult!`                            | -                                                                                            |
| `smartWalletSendTransaction`                                                                       | `SmartWalletSendTransactionResponse`         | -                                                                                            |
| `smartWalletSwapQuote`                                                                             | `SwapQuoteResponse`                          | -                                                                                            |
| `smartWalletSwap`                                                                                  | `SwapResultResponse`                         | -                                                                                            |
| `smartWalletExecuteSwapQuote`                                                                      | `SwapResultResponse`                         | Execute a swap using a previously obtained quote (by quoteId).                               |

Note: Alchemy requires a fresh quote for execution, so a new quote is fetched
using the same parameters as the original. This ensures the swap executes at
current market rates while validating the original quote hasn't expired. |
| `generateSmartWalletJwt` | `SmartWalletJwtResponse!` | - |
| `requestOtcTrade` | `ChatMessageResponse` | - |
| `requestOtcQuote` | `RequestQuoteTradeResponse` | - |
| `refreshOtcQuote` | `RefreshOtcQuoteResponse` | - |
| `calculateOtcQuote` | `CalculateOtcQuoteResponse` | - |
| `createRainCardApplication` | `RainCardApplicationResponse!` | Create a Rain Card application for a user with completed KYC.
Requires normal-kyc-level verification. |
| `freezeRainCard` | `RainCardOperationResponse!` | Freeze a Rain Card. Calls Rain API and returns immediate response.
Card status will be updated via webhook.
Requires the user to own the card. |
| `unfreezeRainCard` | `RainCardOperationResponse!` | Unfreeze a Rain Card. Calls Rain API and returns immediate response.
Card status will be updated via webhook.
Requires the user to own the card. |
| `revealRainCardSecrets` | `RainCardSecretsResponse!` | Reveal sensitive card details (PAN, CVC, expiry).
Requires the user to own the card.
Returns encryptedSecrets - use decryptWithSessionKey from agio-utils to decrypt JSON. |
| `replaceVirtualRainCard` | `RainCardReplacementResponse!` | Replace a virtual Rain Card with a new one.
The old card is canceled and a new card is created with new PAN, token, and expiration.
The new card inherits spending limits from the old card.
Only virtual cards can be replaced - physical cards will return an error.
Requires the user to own the card. |
| `setRainCardPin` | `RainCardPinResponse!` | Set or update a Rain Card's PIN.
PIN must be 4-12 digits and meet security requirements.
Requires the user to own the card. |
| `getRainCardPin` | `RainCardPinResponse!` | Retrieve a Rain Card's PIN.
Returns encryptedPin - use decryptWithSessionKey from agio-utils to decrypt.
Requires the user to own the card. |
| `freezeRainCardByRainCardId` | `RainCardOperationResponse!` | Admin-only: Freeze Rain Card by Rain card ID. Bypasses ownership checks. |
| `unfreezeRainCardByRainCardId` | `RainCardOperationResponse!` | Admin-only: Unfreeze Rain Card by Rain card ID. Bypasses ownership checks. |
| `revealRainCardSecretsByRainCardId` | `RainCardSecretsResponse!` | Admin-only: Reveal card secrets by Rain card ID. Bypasses ownership checks.
Returns encryptedSecrets - use decryptWithSessionKey from agio-utils to decrypt JSON. |
| `replaceVirtualRainCardByRainCardId` | `RainCardReplacementResponse!` | Admin-only: Replace virtual card by Rain card ID. Bypasses ownership checks. |
| `setRainCardPinByRainCardId` | `RainCardPinResponse!` | Admin-only: Set card PIN by Rain card ID. Bypasses ownership checks.
PIN must be encrypted using encryptPassphraseForTransfer from agio-utils. |
| `getRainCardPinByRainCardId` | `RainCardPinResponse!` | Admin-only: Get card PIN by Rain card ID. Bypasses ownership checks.
Returns encryptedPin - use decryptWithSessionKey from agio-utils to decrypt. |
| `createRainCorporateApplication` | `RainCorporateApplicationResponse!` | Create a Rain Corporate Card application for a company.
Requires entity information, initial user, representatives, and UBOs.
Website is REQUIRED by Rain API. |
| `validateAddress` | `AddressValidationResponse!` | Validate an address using Google Address Validation API.
Returns validation result with confidence level (HIGH, MEDIUM, or LOW).
Useful for validating user addresses before creating cards, shipping groups, or billing operations.
Cached for 30 days per Google's recommendations. |
| `validateRainShippingAddress` | `AddressValidationResponse!` | Validate a shipping address via Rain's address validation endpoint.
Determines whether Rain can ship a physical card to this address.
Uses Google Address Validation with geocoding fallback — broader country coverage than validateAddress. |
| `autocompleteAddress` | `AutocompleteAddressResponse!` | Autocomplete address search using Google Places API.
Returns address suggestions based on partial input.
Useful for address entry forms with typeahead functionality.
Results cached for 24 hours. |
| `resolvePlaceAddress` | `ResolvePlaceAddressResponse!` | Resolve a Google Place ID to a structured address object.
Use the placeId returned by autocompleteAddress to fetch precise address fields. |
| `updateCardNickname` | `RainCardOperationResponse!` | Update a Rain Card's nickname (display name).
Validates: max 26 chars, alphanumeric + spaces + periods + hyphens only.
Updates local database. Requires the user to own the card. |
| `updateRainUserProfile` | `RainCardOperationResponse!` | Update Rain user profile (address and/or phone).
Syncs to both Rain API and local database.
Requires the user to own the card application. |
| `updateRainCompanyAddress` | `RainCardOperationResponse!` | Update Rain company address.
Syncs to both Rain API and local database.
Requires organization admin or Agio admin role. |
| `updateRainCardLimit` | `RainCardLimitResponse!` | Update a Rain Card's spending limit.
Updates both Rain API and local database.
Requires the user to own the card application. |
| `lockRainCard` | `RainCardOperationResponse!` | Lock a Rain Card (alias for freeze). Card cannot be used for transactions.
Use unlockRainCard to restore card functionality.
Requires the user to own the card. |
| `unlockRainCard` | `RainCardOperationResponse!` | Unlock a Rain Card (alias for unfreeze). Restores card functionality.
Requires the user to own the card. |
| `cancelRainCard` | `RainCardOperationResponse!` | Cancel a Rain Card permanently (irreversible).
Card cannot be reactivated after cancellation.
Requires the user to own the card. |
| `createRainCard` | `CreateRainCardResponse!` | Create a new Rain Card for an approved application.
Supports both virtual and physical cards via cardType discriminator.

- Virtual cards: PIN set immediately, card active after creation
- Physical cards: PIN staged, shipping required, activated when received
  Requires an approved card application. |
  | `replaceRainCard` | `RainCardReplacementResponse!` | Replace an existing Rain Card (for lost/stolen/damaged cards).
  Creates a new card with new PAN and credentials.
  The old card is canceled automatically.
- Virtual cards: New card created immediately
- Physical cards: Requires shipping address
  Requires the user to own the card. |
  | `payInvoiceWithCardBalance` | `PayInvoiceWithCardBalanceResponse!` | Pay an invoice using card balance.
  Debits the user's card collateral balance and records payment against the invoice.
  Requires the user to own both the card application and the invoice. |
  | `updateRainCardLimitByRainCardId` | `RainCardLimitResponse!` | Admin-only: Update card limit by Rain card ID. Bypasses ownership checks. |
  | `cancelRainCardByRainCardId` | `RainCardOperationResponse!` | Admin-only: Cancel card by Rain card ID. Bypasses ownership checks. |
  | `createRainCardByRainUserId` | `CreateRainCardResponse!` | Admin-only: Create card for a user by Rain user ID. Bypasses ownership checks. |
  | `chargeCard` | `ChargeCardResponse!` | Charge a Rain Card with a fee. Requires card:charge permission.
  Debits from user's card collateral balance and records the transaction. |
  | `cardWithdraw` | `CardWithdrawResponse!` | Withdraw collateral from a Rain Card smart wallet.
  Signs the withdrawal with the owner EOA via Alchemy Signer and submits
  via session key UserOp through the Rain coordinator contract. |
  | `runCardReminders` | `CardReminderRunResponse!` | Admin-only: Manually trigger unused card reminder processing.
  Finds cards with no transactions and sends reminder emails based on the schedule.
  Use dryRun: true (default) to preview which reminders would be sent. |
  | `createCardDispute` | `CreateCardDisputeResponse!` | - |
  | `uploadCardDisputeEvidence` | `UploadCardDisputeEvidenceResponse!` | - |
  | `redis` | `RedisMutation!` | - |
  | `sumsub` | `SumsubMutation` | - |
  | `syncSafes` | `SyncSafesResponse!` | - |
  | `createTradeSettlement` | `TradeSettlementResponse!` | - |
  | `resolveSettlementTransaction` | `TradeSettlementResponse!` | - |
  | `resolveSwapSettlement` | `TradeSettlementResponse!` | - |
  | `verifySettlement` | `TradeSettlementResponse!` | - |
  | `initiateOutboundSettlement` | `TradeSettlementResponse!` | - |
  | `recordOutboundTransaction` | `TradeSettlementResponse!` | - |
  | `updateSettlementStatus` | `TradeSettlementResponse!` | - |
  | `recordFiatInbound` | `TradeSettlementResponse!` | - |
  | `syncWhitelist` | `SyncWhitelistResponse` | - |
  | `bulkImportWhitelist` | `BulkImportWhitelistResponse` | - |
  | `addVelocityLimitPolicy` | `AddPolicyResponse` | - |
  | `addSpendingLimitPolicy` | `AddPolicyResponse` | - |
  | `removeWalletPolicy` | `RemovePolicyResponse` | - |
  | `freezeWallet` | `FreezeWalletResponse` | - |
  | `submitWhitelistRequest` | `WhitelistRequestResponse` | - |
  | `approveWhitelistRequest` | `WhitelistRequestResponse` | - |
  | `rejectWhitelistRequest` | `WhitelistRequestResponse` | - |
  | `deleteWebhook` | `DeleteWebhookResponse` | - |
  | `zipFiles` | `ZipResult` | - |
  | `AgioOnboardingDocumentZip` | `ZipResult` | - |
  | `evm` | `MutationEvm` | - |
  | `sendCaseStatusUpdateEmail` | `SendGridClientResponse` | - |
  | `sendCaseSubmittedEmail` | `SendGridClientResponse` | - |
  | `sendKycInviteEmail` | `SendGridClientResponse` | - |
  | `sendSignatureInviteEmail` | `SendGridClientResponse` | - |
  | `sendAccountFundingEmail` | `SendGridClientResponse` | - |
  | `sendCaseAssignedSubscriptionEmail` | `SendGridClientResponse` | - |
  | `sendBankTransactionEmail` | `SendGridClientResponse` | - |
  | `sendCESRAEmail` | `SendGridClientResponse` | - |
  | `sendStandaloneKycInvite` | `SendGridClientResponse` | - |

---

## MutationEvm

| Field           | Type                 | Description |
| --------------- | -------------------- | ----------- |
| `signMessage`   | `EvmSignedMessage`   | -           |
| `verifyMessage` | `EvmVerifiedMessage` | -           |

---

## OrderBookUpdate

| Field             | Type              | Description |
| ----------------- | ----------------- | ----------- |
| `channel`         | `String!`         | -           |
| `type`            | `String!`         | -           |
| `product`         | `String!`         | -           |
| `time`            | `String!`         | -           |
| `bids`            | `[[String!]!]!`   | -           |
| `asks`            | `[[String!]!]!`   | -           |
| `productMeta`     | `TradingProduct!` | -           |
| `midMarketPrice`  | `String!`         | -           |
| `lastTradedPrice` | `String!`         | -           |
| `quotePrice`      | `String!`         | -           |

---

## OrganizationStatus

| Field             | Type       | Description |
| ----------------- | ---------- | ----------- |
| `hasOrganization` | `Boolean!` | -           |
| `organizationId`  | `String`   | -           |
| `enterpriseName`  | `String`   | -           |

---

## OtcQuote

| Field                    | Type           | Description |
| ------------------------ | -------------- | ----------- |
| `id`                     | `uuid!`        | -           |
| `quote_status_id`        | `Int!`         | -           |
| `created_at`             | `timestamptz!` | -           |
| `updated_at`             | `timestamptz!` | -           |
| `from_currency`          | `String!`      | -           |
| `to_currency`            | `String!`      | -           |
| `quote_size`             | `Float!`       | -           |
| `user_id`                | `String!`      | -           |
| `side`                   | `String!`      | -           |
| `quote_slippage`         | `Float!`       | -           |
| `quote_fee_perc`         | `Float!`       | -           |
| `quote_exchange_rate`    | `Float!`       | -           |
| `total_amount`           | `Float!`       | -           |
| `expires_at`             | `timestamptz!` | -           |
| `base_currency`          | `String!`      | -           |
| `to_currency_rate_usd`   | `Float!`       | -           |
| `from_currency_rate_usd` | `Float!`       | -           |

---

## PatchAuth0UserInput (Input)

| Field                       | Type                        | Description |
| --------------------------- | --------------------------- | ----------- |
| `user_id`                   | `ID`                        | -           |
| `email`                     | `String`                    | -           |
| `email_verified`            | `Boolean`                   | -           |
| `picture`                   | `String`                    | -           |
| `created_at`                | `String`                    | -           |
| `updated_at`                | `String`                    | -           |
| `name`                      | `String`                    | -           |
| `given_name`                | `String`                    | -           |
| `family_name`               | `String`                    | -           |
| `nickname`                  | `String`                    | -           |
| `multifactor_last_modified` | `String`                    | -           |
| `last_ip`                   | `String`                    | -           |
| `last_login`                | `String`                    | -           |
| `logins_count`              | `String`                    | -           |
| `city`                      | `String`                    | -           |
| `user_metadata`             | `Auth0ProfileMetadataInput` | -           |

---

## PatchAuth0UserResponse

| Field            | Type                   | Description |
| ---------------- | ---------------------- | ----------- |
| `user_id`        | `ID`                   | -           |
| `email`          | `String`               | -           |
| `email_verified` | `Boolean`              | -           |
| `username`       | `String`               | -           |
| `phone_number`   | `String`               | -           |
| `phone_verified` | `Boolean`              | -           |
| `created_at`     | `String`               | -           |
| `updated_at`     | `String`               | -           |
| `identities`     | `[Auth0Identity]`      | -           |
| `user_metadata`  | `Auth0ProfileMetadata` | -           |
| `picture`        | `String`               | -           |
| `name`           | `String`               | -           |
| `nickname`       | `String`               | -           |
| `multifactor`    | `[String]`             | -           |
| `last_ip`        | `String`               | -           |
| `last_login`     | `String`               | -           |
| `logins_count`   | `Int`                  | -           |
| `blocked`        | `Boolean`              | -           |
| `given_name`     | `String`               | -           |
| `family_name`    | `String`               | -           |

---

## PayInvoiceWithCardBalanceInput (Input)

| Field               | Type   | Description                                          |
| ------------------- | ------ | ---------------------------------------------------- |
| `invoiceId`         | `Int!` | Invoice to pay                                       |
| `cardApplicationId` | `Int!` | Card application to charge (determines Rain user ID) |

---

## PayInvoiceWithCardBalanceResponse

| Field       | Type       | Description |
| ----------- | ---------- | ----------- |
| `success`   | `Boolean!` | -           |
| `chargeId`  | `String`   | -           |
| `amount`    | `Float!`   | -           |
| `invoiceId` | `Int!`     | -           |

---

## Ping

| Field               | Type       | Description |
| ------------------- | ---------- | ----------- |
| `api_version`       | `String!`  | -           |
| `env`               | `String!`  | -           |
| `timestamp`         | `bigint!`  | -           |
| `platform_base_url` | `String!`  | -           |
| `domain`            | `String!`  | -           |
| `name`              | `String!`  | -           |
| `user_id`           | `String`   | -           |
| `client_id`         | `Int`      | -           |
| `default_role`      | `String`   | -           |
| `roles`             | `[String]` | -           |
| `applicant_id`      | `String`   | -           |

---

## Platform

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `id`            | `Int!`    | -           |
| `name`          | `String!` | -           |
| `symbol`        | `String!` | -           |
| `slug`          | `String!` | -           |
| `token_address` | `String!` | -           |

---

## PortfolioDashboard

| Field                   | Type                                  | Description |
| ----------------------- | ------------------------------------- | ----------- |
| `id`                    | `ID!`                                 | -           |
| `assets`                | `[DigitalAssetSummary]`               | -           |
| `assetsAggregate`       | `DigitalAssetsAggregate`              | -           |
| `whitelist`             | `[DigitalWalletWhitelistEntry]`       | -           |
| `wallets`               | `[DigitalWalletSummary]`              | -           |
| `wallet`                | `DigitalWalletDetail`                 | -           |
| `usdValue`              | `String`                              | -           |
| `transactions`          | `[DigitalWalletTransactionSummary!]!` | -           |
| `transactionsAggregate` | `DigitalWalletTransactionsAggregate!` | -           |

---

## ProcessExpenseAccrualsInput (Input)

| Field       | Type     | Description |
| ----------- | -------- | ----------- |
| `fundId`    | `Int`    | -           |
| `expenseId` | `Int`    | -           |
| `startDate` | `String` | -           |
| `endDate`   | `String` | -           |

---

## ProcessExpenseAccrualsResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## ProcessFeeAccrualsInput (Input)

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `fundId`      | `Int!`    | -           |
| `accrualDate` | `String!` | -           |
| `dryRun`      | `Boolean` | -           |

---

## ProcessFeeAccrualsResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## ProcessFundCustodyExpenseAccrualsInput (Input)

| Field       | Type     | Description |
| ----------- | -------- | ----------- |
| `fundId`    | `Int`    | -           |
| `startDate` | `String` | -           |
| `endDate`   | `String` | -           |

---

## ProcessFundCustodyExpenseAccrualsResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## ProcessFundEndOfDayInput (Input)

| Field            | Type      | Description |
| ---------------- | --------- | ----------- |
| `processingDate` | `String!` | -           |
| `skipDelay`      | `Boolean` | -           |
| `fundId`         | `Int`     | -           |

---

## ProcessFundEndOfDayResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## ProvisionOrgWalletSessionKeysResponse

| Field         | Type         | Description |
| ------------- | ------------ | ----------- |
| `provisioned` | `Int!`       | -           |
| `skipped`     | `Int!`       | -           |
| `failed`      | `Int!`       | -           |
| `errors`      | `[String!]!` | -           |

---

## Query

| Field                                   | Type                                   | Description                  |
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
| `rainCardBalance`                       | `RainCardBalanceResponse!`             | Get balance for a Rain Card. |

Returns credit limit, pending charges, posted charges, balance due, and spending power.
Requires the user to own the card. |
| `rainCardBalanceByRainUserId` | `RainCardBalanceResponse!` | Admin-only: Get Rain Card balance by Rain user ID. Bypasses ownership checks. |
| `rainCorporateApplicationPrefill` | `RainCorporateApplicationPrefill!` | Prefill data for the corporate Rain card application form from the org's Sumsub KYB.
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

---

## QueryBitgo

| Field              | Type                            | Description |
| ------------------ | ------------------------------- | ----------- |
| `backupProviders`  | `[BitgoBackupProviderType]`     | -           |
| `coin`             | `QueryBitgoCoin`                | -           |
| `coins`            | `[QueryBitgoCoin]`              | -           |
| `pendingApprovals` | `BitgoPendingApprovalsResponse` | -           |
| `pendingApproval`  | `BitgoPendingApproval`          | -           |

---

## QueryBitgoCoin

| Field     | Type            | Description |
| --------- | --------------- | ----------- |
| `coinId`  | `String`        | -           |
| `data`    | `BitgoCoinData` | -           |
| `wallet`  | `BitgoWallet`   | -           |
| `wallets` | `[BitgoWallet]` | -           |
| `key`     | `BitgoKey`      | -           |

---

## QueryCoinMarketCapToken

| Field                  | Type            | Description |
| ---------------------- | --------------- | ----------- |
| `latest`               | `[TokenInfo!]!` | -           |
| `upcomingAndNewTokens` | `[TokenInfo!]!` | -           |
| `hotTokens`            | `[TokenInfo!]!` | -           |
| `sparkline`            | `Sparkline`     | -           |
| `sparklines`           | `[Sparkline!]!` | -           |

---

## QuoteDetails

| Field                      | Type      | Description |
| -------------------------- | --------- | ----------- |
| `price`                    | `Float!`  | -           |
| `volume_24h`               | `Float!`  | -           |
| `volume_change_24h`        | `Float!`  | -           |
| `percent_change_1h`        | `Float!`  | -           |
| `percent_change_24h`       | `Float!`  | -           |
| `percent_change_7d`        | `Float!`  | -           |
| `percent_change_30d`       | `Float!`  | -           |
| `percent_change_60d`       | `Float!`  | -           |
| `percent_change_90d`       | `Float!`  | -           |
| `market_cap`               | `Float!`  | -           |
| `market_cap_dominance`     | `Float!`  | -           |
| `fully_diluted_market_cap` | `Float!`  | -           |
| `last_updated`             | `String!` | -           |

---

## QuoteType

| Field | Type            | Description |
| ----- | --------------- | ----------- |
| `USD` | `QuoteDetails!` | -           |

---

## RainAddressInput (Input)

Address input for Rain API applications

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `line1`       | `String!` | -           |
| `line2`       | `String`  | -           |
| `city`        | `String!` | -           |
| `region`      | `String!` | -           |
| `postalCode`  | `String!` | -           |
| `countryCode` | `String!` | -           |
| `country`     | `String`  | -           |

---

## RainCardAddress

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `line1`       | `String!` | -           |
| `line2`       | `String`  | -           |
| `city`        | `String!` | -           |
| `region`      | `String!` | -           |
| `postalCode`  | `String!` | -           |
| `countryCode` | `String!` | -           |

---

## RainCardApplication

| Field                                 | Type                         | Description |
| ------------------------------------- | ---------------------------- | ----------- |
| `id`                                  | `ID!`                        | -           |
| `rainApplicationId`                   | `String!`                    | -           |
| `applicantId`                         | `String!`                    | -           |
| `walletAddress`                       | `String!`                    | -           |
| `applicationStatus`                   | `RainCardApplicationStatus!` | -           |
| `applicationReason`                   | `String`                     | -           |
| `isActive`                            | `Boolean!`                   | -           |
| `firstName`                           | `String`                     | -           |
| `lastName`                            | `String`                     | -           |
| `email`                               | `String`                     | -           |
| `phoneCountryCode`                    | `String`                     | -           |
| `phoneNumber`                         | `String`                     | -           |
| `address`                             | `RainCardAddress`            | -           |
| `solanaAddress`                       | `String`                     | -           |
| `applicationExternalVerificationLink` | `RainCardApplicationLink`    | -           |
| `applicationCompletionLink`           | `RainCardApplicationLink`    | -           |
| `createdAt`                           | `timestamptz`                | -           |
| `updatedAt`                           | `timestamptz`                | -           |

---

## RainCardApplicationLink

| Field    | Type      | Description |
| -------- | --------- | ----------- |
| `url`    | `String!` | -           |
| `userId` | `String`  | -           |

---

## RainCardApplicationResponse

| Field                      | Type       | Description                                                            |
| -------------------------- | ---------- | ---------------------------------------------------------------------- |
| `success`                  | `Boolean!` | -                                                                      |
| `applicantId`              | `String`   | -                                                                      |
| `rainApplicationId`        | `String`   | -                                                                      |
| `applicationStatus`        | `String`   | -                                                                      |
| `applicationCompletionUrl` | `String`   | URL to complete additional verification if status is NEEDSVERIFICATION |
| `shareToken`               | `String`   | -                                                                      |
| `error`                    | `String`   | -                                                                      |

---

## RainCardBalance

User balance information from Rain API.
All monetary values are in USD (converted from cents).

| Field            | Type     | Description                                                                     |
| ---------------- | -------- | ------------------------------------------------------------------------------- |
| `creditLimit`    | `Float!` | Credit limit of the user, in USD                                                |
| `pendingCharges` | `Float!` | Pending charges (authorized but not settled), in USD                            |
| `postedCharges`  | `Float!` | Posted charges (settled transactions), in USD                                   |
| `balanceDue`     | `Float!` | Balance due (amount owed), in USD                                               |
| `spendingPower`  | `Float!` | Available spending power (creditLimit - pendingCharges - postedCharges), in USD |

---

## RainCardBalanceResponse

Response from fetching card balance

| Field     | Type              | Description                             |
| --------- | ----------------- | --------------------------------------- |
| `success` | `Boolean!`        | -                                       |
| `id`      | `Int`             | Our internal card ID (AgioCard_card.id) |
| `balance` | `RainCardBalance` | -                                       |
| `error`   | `String`          | -                                       |

---

## RainCardExpiry

Card expiry date returned from Rain API

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `month` | `String!` | -           |
| `year`  | `String!` | -           |

---

## RainCardLimitResponse

Response from updating card limit

| Field            | Type       | Description                             |
| ---------------- | ---------- | --------------------------------------- |
| `success`        | `Boolean!` | -                                       |
| `id`             | `Int`      | Our internal card ID (AgioCard_card.id) |
| `cardId`         | `String`   | Rain card ID                            |
| `limitAmount`    | `Int`      | -                                       |
| `limitFrequency` | `String`   | -                                       |
| `error`          | `String`   | -                                       |

---

## RainCardOperationResponse

Response from Rain API card operations (freeze, unfreeze, cancel)

| Field     | Type       | Description                             |
| --------- | ---------- | --------------------------------------- |
| `success` | `Boolean!` | -                                       |
| `id`      | `Int`      | Our internal card ID (AgioCard_card.id) |
| `cardId`  | `String`   | Rain card ID                            |
| `status`  | `String`   | -                                       |
| `error`   | `String`   | -                                       |

---

## RainCardPinResponse

Response from PIN operations (set/get)

| Field          | Type       | Description                                                        |
| -------------- | ---------- | ------------------------------------------------------------------ |
| `success`      | `Boolean!` | -                                                                  |
| `id`           | `Int`      | Our internal card ID (AgioCard_card.id)                            |
| `encryptedPin` | `String`   | Encrypted PIN. Decrypt with decryptWithSessionKey from agio-utils. |
| `error`        | `String`   | -                                                                  |

---

## RainCardReplacementResponse

Response from replacing a virtual card

| Field       | Type               | Description                             |
| ----------- | ------------------ | --------------------------------------- |
| `success`   | `Boolean!`         | -                                       |
| `id`        | `Int`              | Our internal card ID (AgioCard_card.id) |
| `newCard`   | `RainReplacedCard` | Details of the new replacement card     |
| `oldCardId` | `String`           | ID of the old card that was canceled    |
| `error`     | `String`           | -                                       |

---

## RainCardSecrets

Decrypted card secrets from Rain API.
These are sensitive values - handle with care.

| Field    | Type             | Description                               |
| -------- | ---------------- | ----------------------------------------- |
| `pan`    | `String!`        | Full Primary Account Number (card number) |
| `cvc`    | `String!`        | Card Verification Code (CVV/CVC)          |
| `expiry` | `RainCardExpiry` | Card expiration date                      |

---

## RainCardSecretsResponse

Response from revealing card secrets

| Field                                                                         | Type       | Description                                                                      |
| ----------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------- |
| `success`                                                                     | `Boolean!` | -                                                                                |
| `id`                                                                          | `Int`      | Our internal card ID (AgioCard_card.id)                                          |
| `encryptedSecrets`                                                            | `String`   | Encrypted card secrets JSON. Decrypt with decryptWithSessionKey from agio-utils. |
| Format: { pan: string, cvc: string, expiry: { month: string, year: string } } |
| `error`                                                                       | `String`   | -                                                                                |

---

## RainCorporateAddressPrefill

Prefilled address from Sumsub KYB data (all fields optional — populate what's available)

| Field         | Type     | Description |
| ------------- | -------- | ----------- |
| `line1`       | `String` | -           |
| `city`        | `String` | -           |
| `region`      | `String` | -           |
| `postalCode`  | `String` | -           |
| `countryCode` | `String` | -           |

---

## RainCorporateApplicationPrefill

Prefilled data for a corporate Rain card application, sourced from the org's Sumsub KYB applicant.
Returns whatever verified data is available — may be partial if KYB is incomplete.

| Field                | Type                             | Description |
| -------------------- | -------------------------------- | ----------- |
| `name`               | `String`                         | -           |
| `registrationNumber` | `String`                         | -           |
| `taxId`              | `String`                         | -           |
| `address`            | `RainCorporateAddressPrefill`    | -           |
| `ubos`               | `[RainCorporatePersonPrefill!]!` | -           |
| `representatives`    | `[RainCorporatePersonPrefill!]!` | -           |

---

## RainCorporateApplicationResponse

Response from creating a corporate Rain Card application

| Field               | Type       | Description |
| ------------------- | ---------- | ----------- |
| `success`           | `Boolean!` | -           |
| `companyId`         | `String`   | -           |
| `name`              | `String`   | -           |
| `applicationStatus` | `String`   | -           |
| `error`             | `String`   | -           |

---

## RainCorporatePersonPrefill

Prefilled person data for UBOs / representatives from Sumsub verified sub-applicants

| Field              | Type                          | Description |
| ------------------ | ----------------------------- | ----------- |
| `firstName`        | `String`                      | -           |
| `lastName`         | `String`                      | -           |
| `birthDate`        | `String`                      | -           |
| `nationalId`       | `String`                      | -           |
| `countryOfIssue`   | `String`                      | -           |
| `email`            | `String`                      | -           |
| `phoneCountryCode` | `String`                      | -           |
| `phoneRegionCode`  | `String`                      | -           |
| `phoneNumber`      | `String`                      | -           |
| `address`          | `RainCorporateAddressPrefill` | -           |

---

## RainReplacedCard

Details of a replaced card from Rain API

| Field             | Type      | Description                                   |
| ----------------- | --------- | --------------------------------------------- |
| `id`              | `String!` | New card ID from Rain                         |
| `type`            | `String!` | Card type (always "virtual" for replacements) |
| `status`          | `String!` | Card status after replacement                 |
| `last4`           | `String!` | Last 4 digits of new card number              |
| `expirationMonth` | `String!` | Expiration month (MM format)                  |
| `expirationYear`  | `String!` | Expiration year (YYYY format)                 |

---

## RainShippingInput (Input)

Shipping address input for physical cards

| Field         | Type                 | Description                                      |
| ------------- | -------------------- | ------------------------------------------------ |
| `line1`       | `String!`            | -                                                |
| `line2`       | `String`             | -                                                |
| `city`        | `String!`            | -                                                |
| `region`      | `String!`            | -                                                |
| `postalCode`  | `String!`            | -                                                |
| `countryCode` | `String!`            | -                                                |
| `phoneNumber` | `String!`            | Phone number (required by Rain API for shipping) |
| `firstName`   | `String`             | -                                                |
| `lastName`    | `String`             | -                                                |
| `method`      | `RainShippingMethod` | Shipping method (standard or express)            |

---

## RebuildTokensInput (Input)

| Field               | Type       | Description |
| ------------------- | ---------- | ----------- |
| `tokenIds`          | `[Int!]`   | -           |
| `dryRun`            | `Boolean!` | -           |
| `skipDeduplication` | `Boolean!` | -           |
| `batchSize`         | `Int!`     | -           |
| `waitForResult`     | `Boolean`  | -           |

---

## ReconcileCoingeckoInput (Input)

| Field           | Type       | Description |
| --------------- | ---------- | ----------- |
| `dryRun`        | `Boolean!` | -           |
| `forceRefresh`  | `Boolean!` | -           |
| `maxNewTokens`  | `Int!`     | -           |
| `waitForResult` | `Boolean`  | -           |

---

## RecordFiatInboundInput (Input)

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `settlementId`  | `Int!`    | -           |
| `amount`        | `Float!`  | -           |
| `currency`      | `String!` | -           |
| `bankReference` | `String`  | -           |
| `notes`         | `String`  | -           |

---

## RecordOutboundTransactionInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `settlementId` | `Int!`    | -           |
| `txHash`       | `String!` | -           |

---

## RedisKeyValue

| Field    | Type              | Description |
| -------- | ----------------- | ----------- |
| `key`    | `String!`         | -           |
| `value`  | `String!`         | -           |
| `status` | `RedisKeyStatus!` | -           |

---

## RedisMutation

| Field                  | Type       | Description |
| ---------------------- | ---------- | ----------- |
| `set`                  | `Boolean!` | -           |
| `del`                  | `Boolean!` | -           |
| `flushAll`             | `Boolean!` | -           |
| `flushAllSessions`     | `Int!`     | -           |
| `flushAllTransactions` | `Int!`     | -           |
| `delPattern`           | `Int!`     | -           |

---

## RedisQuery

| Field          | Type               | Description |
| -------------- | ------------------ | ----------- |
| `getValue`     | `String!`          | -           |
| `getKeyValues` | `[RedisKeyValue]!` | -           |
| `getKeys`      | `[String]!`        | -           |
| `getKeyCount`  | `Int!`             | -           |
| `status`       | `RedisStatus!`     | -           |
| `stats`        | `jsonb!`           | -           |

---

## RefreshBalancerLPPricesResponse

| Field        | Type       | Description |
| ------------ | ---------- | ----------- |
| `jobId`      | `String`   | -           |
| `totalPools` | `Int!`     | -           |
| `success`    | `Boolean!` | -           |
| `error`      | `String`   | -           |

---

## RefreshOtcQuoteResponse

| Field    | Type        | Description |
| -------- | ----------- | ----------- |
| `quote`  | `OtcQuote`  | -           |
| `errors` | `[String!]` | -           |

---

## RegisterBalancerPoolInput (Input)

| Field             | Type               | Description |
| ----------------- | ------------------ | ----------- |
| `poolId`          | `String!`          | -           |
| `poolAddress`     | `String!`          | -           |
| `poolType`        | `String!`          | -           |
| `balancerVersion` | `BalancerVersion!` | -           |
| `network`         | `BalancerNetwork!` | -           |
| `name`            | `String`           | -           |
| `symbol`          | `String`           | -           |

---

## RegisterBalancerPoolResponse

| Field     | Type           | Description |
| --------- | -------------- | ----------- |
| `pool`    | `BalancerPool` | -           |
| `success` | `Boolean!`     | -           |
| `error`   | `String`       | -           |

---

## RejectWhitelistRequestInput (Input)

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `requestId` | `Int!`    | -           |
| `reason`    | `String!` | -           |

---

## RemovePolicyResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `error`   | `String`   | -           |

---

## RemoveWalletPolicyInput (Input)

| Field             | Type   | Description |
| ----------------- | ------ | ----------- |
| `digitalWalletId` | `Int!` | -           |
| `policyId`        | `Int!` | -           |

---

## RenderCaseDocumentsFilter (Input)

| Field                 | Type        | Description |
| --------------------- | ----------- | ----------- |
| `documentTemplateIds` | `[uuid!]`   | -           |
| `documentTypeNames`   | `[String!]` | -           |

---

## ReplaceRainCardInput (Input)

Input for replacing an existing card (lost/stolen/damaged)

| Field             | Type                     | Description                                                                  |
| ----------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `cardId`          | `Int!`                   | Card ID (AgioCard_card.id - our internal card ID)                            |
| `reason`          | `RainReplacementReason!` | Reason for replacement                                                       |
| `shippingAddress` | `RainShippingInput`      | Shipping address for physical card replacement (required for physical cards) |

---

## RequestConvertDigitalAssetQuoteInput (Input)

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `walletId`   | `ID!`     | -           |
| `fromCoinId` | `String`  | -           |
| `toCoinId`   | `String`  | -           |
| `size`       | `String!` | -           |

---

## RequestGoNetworkConnectionInput (Input)

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `goAccountId`      | `Int!`    | -           |
| `counterpartyId`   | `String!` | -           |
| `counterpartyName` | `String`  | -           |

---

## RequestOtcQuoteInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `fromCurrency` | `String!` | -           |
| `toCurrency`   | `String!` | -           |
| `side`         | `String!` | -           |
| `size`         | `Float!`  | -           |
| `slippage`     | `Float`   | -           |
| `tradeType`    | `Int`     | -           |
| `limitPrice`   | `Float`   | -           |

---

## RequestOtcTradeInput (Input)

| Field               | Type          | Description |
| ------------------- | ------------- | ----------- |
| `fromCoin`          | `String!`     | -           |
| `toCoin`            | `String!`     | -           |
| `side`              | `String!`     | -           |
| `size`              | `Float!`      | -           |
| `slippage`          | `Float`       | -           |
| `telegramMessageId` | `bigint`      | -           |
| `fromWalletId`      | `Int`         | -           |
| `fromBankInfoId`    | `Int`         | -           |
| `toWalletId`        | `Int`         | -           |
| `toBankInfoId`      | `Int`         | -           |
| `feePerc`           | `Float`       | -           |
| `limitPrice`        | `Float`       | -           |
| `expiresAt`         | `timestamptz` | -           |
| `tradeType`         | `Int`         | -           |
| `quoteId`           | `uuid`        | -           |

---

## RequestQuoteTradeResponse

| Field    | Type        | Description |
| -------- | ----------- | ----------- |
| `quote`  | `OtcQuote`  | -           |
| `errors` | `[String!]` | -           |

---

## RerunBackfillResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `error`   | `String`   | -           |

---

## ResolvedPlaceAddress

Structured address resolved from a Google Place ID

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `line1`            | `String!` | -           |
| `city`             | `String!` | -           |
| `region`           | `String!` | -           |
| `postalCode`       | `String!` | -           |
| `countryCode`      | `String!` | -           |
| `country`          | `String`  | -           |
| `formattedAddress` | `String`  | -           |

---

## ResolvePlaceAddressResponse

Response from resolving a place ID to a structured address

| Field     | Type                   | Description |
| --------- | ---------------------- | ----------- |
| `success` | `Boolean!`             | -           |
| `address` | `ResolvedPlaceAddress` | -           |
| `error`   | `String`               | -           |

---

## ResolveSettlementTransactionInput (Input)

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `settlementId`       | `Int!`    | -           |
| `txHash`             | `String!` | -           |
| `network`            | `String!` | -           |
| `settlementWalletId` | `Int`     | -           |

---

## ResolveSwapSettlementInput (Input)

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `settlementId`  | `Int!`    | -           |
| `txHash`        | `String!` | -           |
| `network`       | `String!` | -           |
| `walletAddress` | `String!` | -           |

---

## RevokeGoNetworkConnectionInput (Input)

| Field          | Type   | Description |
| -------------- | ------ | ----------- |
| `connectionId` | `Int!` | -           |

---

## RevokeSmartWalletSessionKeyInput (Input)

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `sessionId` | `String!` | -           |

---

## RevokeSmartWalletSessionKeyResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `error`   | `String`   | -           |

---

## SendAccountFundingEmailInput (Input)

| Field            | Type     | Description |
| ---------------- | -------- | ----------- |
| `userId`         | `String` | -           |
| `toEmailAddress` | `String` | -           |
| `toFirstName`    | `String` | -           |

---

## SendBulkInvoiceEmailsInput (Input)

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `invoiceIds` | `[Int!]!` | -           |

---

## SendBulkInvoiceEmailsResponse

| Field            | Type                         | Description |
| ---------------- | ---------------------------- | ----------- |
| `totalRequested` | `Int!`                       | -           |
| `totalSent`      | `Int!`                       | -           |
| `totalFailed`    | `Int!`                       | -           |
| `totalSkipped`   | `Int!`                       | -           |
| `results`        | `[BulkInvoiceEmailResult!]!` | -           |

---

## SendCaseAssignedSubscriptionEmailInput (Input)

| Field              | Type     | Description |
| ------------------ | -------- | ----------- |
| `toEmailAddress`   | `String` | -           |
| `toFirstName`      | `String` | -           |
| `caseId`           | `Int`    | -           |
| `flowTemplateSlug` | `String` | -           |

---

## SendCaseStatusUpdateEmailInput (Input)

| Field            | Type     | Description |
| ---------------- | -------- | ----------- |
| `toEmailAddress` | `String` | -           |
| `firstName`      | `String` | -           |
| `caseId`         | `Int`    | -           |
| `oldStatus`      | `String` | -           |
| `newStatus`      | `String` | -           |
| `notes`          | `String` | -           |

---

## SendCESRAEmailInput (Input)

| Field            | Type     | Description |
| ---------------- | -------- | ----------- |
| `caseId`         | `Int`    | -           |
| `toEmailAddress` | `String` | -           |
| `toFirstName`    | `String` | -           |

---

## SendEmailSharePageInput (Input)

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `toEmail`     | `String!` | -           |
| `toFirstName` | `String!` | -           |
| `subject`     | `String!` | -           |
| `body`        | `String!` | -           |
| `pageUrl`     | `String!` | -           |
| `buttonText`  | `String`  | -           |

---

## SendGridClientResponse

| Field        | Type    | Description |
| ------------ | ------- | ----------- |
| `statusCode` | `Int`   | -           |
| `body`       | `jsonb` | -           |

---

## SendKycEmailInput (Input)

| Field            | Type     | Description |
| ---------------- | -------- | ----------- |
| `toEmailAddress` | `String` | -           |
| `fromFirstName`  | `String` | -           |
| `fromLastName`   | `String` | -           |
| `toFirstName`    | `String` | -           |
| `toLastName`     | `String` | -           |
| `caseId`         | `Int`    | -           |
| `notes`          | `String` | -           |
| `inviteId`       | `String` | -           |
| `kycLevel`       | `String` | -           |

---

## SendSignatureInviteEmailInput (Input)

| Field            | Type      | Description |
| ---------------- | --------- | ----------- |
| `toEmailAddress` | `String!` | -           |
| `toFirstName`    | `String!` | -           |
| `toLastName`     | `String!` | -           |
| `caseId`         | `Int!`    | -           |
| `notes`          | `String`  | -           |
| `inviteId`       | `String!` | -           |

---

## SendStandaloneKycInviteInput (Input)

| Field                      | Type      | Description |
| -------------------------- | --------- | ----------- |
| `toEmail`                  | `String!` | -           |
| `toFirstName`              | `String!` | -           |
| `toLastName`               | `String!` | -           |
| `defaultAppId`             | `Int!`    | -           |
| `sumsubLevelId`            | `Int!`    | -           |
| `fromFirstName`            | `String`  | -           |
| `fromLastName`             | `String`  | -           |
| `notes`                    | `String`  | -           |
| `organizationMemberUserId` | `String`  | -           |
| `kycLevel`                 | `String`  | -           |

---

## SendWireTransferEmailInput (Input)

| Field              | Type        | Description |
| ------------------ | ----------- | ----------- |
| `wireTransferId`   | `Int!`      | -           |
| `overrideEmail`    | `String`    | -           |
| `overrideCcEmails` | `[String!]` | -           |
| `customMessage`    | `String`    | -           |

---

## SendWireTransferEmailResponse

| Field      | Type        | Description |
| ---------- | ----------- | ----------- |
| `success`  | `Boolean!`  | -           |
| `sentTo`   | `String`    | -           |
| `ccEmails` | `[String!]` | -           |
| `error`    | `String`    | -           |

---

## ServicesStatus

| Field         | Type                 | Description |
| ------------- | -------------------- | ----------- |
| `id`          | `ID!`                | -           |
| `name`        | `String`             | -           |
| `status`      | `ServicesStatusType` | -           |
| `message`     | `String`             | -           |
| `lastUpdated` | `timestamptz`        | -           |
| `data`        | `jsonb`              | -           |
| `durationMs`  | `Int`                | -           |

---

## SessionResponse

| Field                  | Type           | Description |
| ---------------------- | -------------- | ----------- |
| `id`                   | `ID!`          | -           |
| `userId`               | `String`       | -           |
| `active`               | `Boolean!`     | -           |
| `timestamp`            | `timestamptz!` | -           |
| `allowedFunds`         | `[Int!]!`      | -           |
| `allowedOrganizations` | `[uuid!]!`     | -           |

---

## SetRainCardPinInput (Input)

Input for setting a card PIN

| Field          | Type      | Description                                                       |
| -------------- | --------- | ----------------------------------------------------------------- |
| `cardId`       | `Int!`    | Card ID (AgioCard_card.id - our internal card ID)                 |
| `sessionId`    | `String!` | Session ID from generateEncryptionKeys mutation                   |
| `encryptedPin` | `String!` | Encrypted PIN (use encryptPassphraseForTransfer from agio-utils). |

PIN must be 4-12 digits and meet security requirements:

- No repeated digits (1111, 0000)
- No sequential ascending (1234, 2345)
- No sequential descending (4321, 9876) |

---

## SmartWalletErrorResponse

Structured error response for smart wallet operations

| Field     | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `code`    | `String!` | Error code (e.g., INSUFFICIENT_BALANCE, SWAP_NOT_SUPPORTED) |
| `message` | `String!` | Human-readable error message                                |
| `details` | `String`  | Additional error details as JSON string (optional)          |

---

## SmartWalletExecuteSwapQuoteInput (Input)

| Field     | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| `quoteId` | `Int!` | The quoteId returned from smartWalletSwapQuote (database ID) |

---

## SmartWalletJwtResponse

| Field       | Type                       | Description |
| ----------- | -------------------------- | ----------- |
| `jwt`       | `String!`                  | -           |
| `expiresAt` | `Int!`                     | -           |
| `subjectId` | `String!`                  | -           |
| `scope`     | `SmartWalletSubjectScope!` | -           |

---

## SmartWalletSendTransactionInput (Input)

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `digitalWalletId` | `ID!`     | -           |
| `recipient`       | `String!` | -           |
| `amount`          | `String!` | -           |
| `data`            | `String`  | -           |

---

## SmartWalletSendTransactionResponse

| Field             | Type                       | Description |
| ----------------- | -------------------------- | ----------- |
| `success`         | `Boolean!`                 | -           |
| `transactionHash` | `String`                   | -           |
| `error`           | `String`                   | -           |
| `structuredError` | `SmartWalletErrorResponse` | -           |

---

## SmartWalletSessionKey

| Field               | Type           | Description |
| ------------------- | -------------- | ----------- |
| `id`                | `Int!`         | -           |
| `sessionId`         | `String!`      | -           |
| `sessionKeyAddress` | `String!`      | -           |
| `expired`           | `Boolean!`     | -           |
| `revoked`           | `Boolean!`     | -           |
| `revokedAt`         | `timestamptz`  | -           |
| `expiresAt`         | `timestamptz`  | -           |
| `lastUsedAt`        | `timestamptz`  | -           |
| `createdAt`         | `timestamptz!` | -           |

---

## SmartWalletSessionKeysResponse

| Field           | Type                        | Description |
| --------------- | --------------------------- | ----------- |
| `walletId`      | `Int!`                      | -           |
| `smartWalletId` | `Int!`                      | -           |
| `address`       | `String!`                   | -           |
| `chain`         | `String!`                   | -           |
| `chainId`       | `Int!`                      | -           |
| `deployed`      | `Boolean!`                  | -           |
| `sessionKeys`   | `[SmartWalletSessionKey!]!` | -           |

---

## SmartWalletSwapInput (Input)

| Field                                                                                   | Type              | Description                                                                                      |
| --------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| `digitalWalletId`                                                                       | `ID!`             | -                                                                                                |
| `fromToken`                                                                             | `String!`         | -                                                                                                |
| `toToken`                                                                               | `String!`         | -                                                                                                |
| `amount`                                                                                | `String!`         | Amount in wei (smallest unit). Frontend must convert human-readable to wei using token decimals. |
| `toChainId`                                                                             | `Int`             | -                                                                                                |
| `recipient`                                                                             | `String`          | Optional recipient address. If specified, swap output is sent directly to this address           |
| instead of back to the wallet. Useful for "swap and send" flows like Rain Card funding. |
| `providers`                                                                             | `[SwapProvider!]` | Preferred swap providers to query. Empty/null defaults to [RELAY, ALCHEMY, SYMBIOSIS]            |

which are compared in parallel and the best executable route is selected automatically.
Pass [ALL] to include every available provider (adds ONEINCH, COW).
Pass a single provider (e.g. [COW]) to force routing through that provider only. |

---

## Sparkline

| Field       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`        | `ID!`       | -           |
| `price_usd` | `[Float!]!` | -           |
| `timestamp` | `[Int!]!`   | -           |

---

## SubmitQuoteQuestionInput (Input)

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `quoteId`    | `Int!`    | -           |
| `lineItemId` | `Int`     | -           |
| `question`   | `String!` | -           |
| `changeType` | `String`  | -           |

---

## SubmitQuoteQuestionResponse

| Field        | Type       | Description |
| ------------ | ---------- | ----------- |
| `success`    | `Boolean!` | -           |
| `error`      | `String`   | -           |
| `questionId` | `Int`      | -           |

---

## SubmitWhitelistRequestInput (Input)

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `digitalWalletId` | `Int!`    | -           |
| `address`         | `String!` | -           |
| `chainId`         | `Int`     | -           |
| `label`           | `String`  | -           |
| `notes`           | `String`  | -           |

---

## Subscription

| Field               | Type                 | Description |
| ------------------- | -------------------- | ----------- |
| `ping`              | `String`             | -           |
| `shortLivedToken`   | `String`             | -           |
| `memory`            | `String`             | -           |
| `orderBookUpdates`  | `[OrderBookUpdate!]` | -           |
| `tradeOrderUpdates` | `TradeOrderUpdate`   | -           |

---

## Sumsub

| Field                       | Type                           | Description |
| --------------------------- | ------------------------------ | ----------- |
| `getApplicant`              | `jsonb`                        | -           |
| `getApplicantByApplicantId` | `jsonb`                        | -           |
| `getApplicantTyped`         | `SumsubApplicantResponse`      | -           |
| `me`                        | `SumsubApplicantResponse`      | -           |
| `applicantLevels`           | `[String]`                     | -           |
| `getApplicantLevels`        | `[SumsubApplicantLevelItem!]!` | -           |
| `getApplicantLevel`         | `SumsubApplicantLevelItem`     | -           |
| `applicantReportPdf`        | `String`                       | -           |
| `applicants`                | `[SumsubApplicantResponse]`    | -           |
| `tokenByJwt`                | `SumsubTokenResponse`          | -           |
| `token`                     | `SumsubTokenResponse`          | -           |
| `completeProfileToken`      | `SumsubTokenResponse`          | -           |
| `guestToken`                | `SumsubTokenResponse`          | -           |
| `organizationKybToken`      | `SumsubTokenResponse`          | -           |

---

## SumsubAmlWatcherSettings

| Field        | Type         | Description |
| ------------ | ------------ | ----------- |
| `categories` | `[String!]!` | -           |
| `fuzziness`  | `String!`    | -           |

---

## SumsubApplicantIdentifiers (Input)

| Field   | Type     | Description |
| ------- | -------- | ----------- |
| `email` | `String` | -           |
| `phone` | `String` | -           |

---

## SumsubApplicantInsightSettings

| Field                               | Type       | Description |
| ----------------------------------- | ---------- | ----------- |
| `advancedEmailCheckEnabled`         | `Boolean!` | -           |
| `advancedPhoneCheckEnabled`         | `Boolean!` | -           |
| `advancedIpCheckEnabled`            | `Boolean!` | -           |
| `advancedIdentityEnrichmentEnabled` | `Boolean`  | -           |

---

## SumsubApplicantLevelItem

| Field                             | Type                               | Description |
| --------------------------------- | ---------------------------------- | ----------- |
| `id`                              | `ID!`                              | -           |
| `clientId`                        | `String!`                          | -           |
| `name`                            | `String!`                          | -           |
| `desc`                            | `String`                           | -           |
| `requiredIdDocs`                  | `SumsubRequiredIdDocs!`            | -           |
| `websdkFlowId`                    | `String`                           | -           |
| `msdkFlowId`                      | `String`                           | -           |
| `websdkNext`                      | `Boolean`                          | -           |
| `notificationSettings`            | `SumsubNotificationSettings`       | -           |
| `created`                         | `SumsubDateInfo!`                  | -           |
| `modified`                        | `SumsubDateInfo!`                  | -           |
| `createdAt`                       | `timestamptz!`                     | -           |
| `createdBy`                       | `String!`                          | -           |
| `modifiedAt`                      | `timestamptz!`                     | -           |
| `modifiedBy`                      | `String`                           | -           |
| `useCustomIdDocSettings`          | `Boolean`                          | -           |
| `customPrivacyNoteText`           | `String`                           | -           |
| `customPrivacyLink`               | `String`                           | -           |
| `watchListCheckSettings`          | `SumsubWatchListCheckSettings`     | -           |
| `useCustomWatchListCheckSettings` | `Boolean`                          | -           |
| `applicantInsightSettings`        | `SumsubApplicantInsightSettings`   | -           |
| `kytSettings`                     | `SumsubKytSettings`                | -           |
| `checkSourceSettings`             | `jsonb`                            | -           |
| `type`                            | `String`                           | -           |
| `actionType`                      | `String`                           | -           |
| `applicantType`                   | `String!`                          | -           |
| `autoCheckGeneratorSettings`      | `SumsubAutoCheckGeneratorSettings` | -           |

---

## SumsubApplicantResponse

| Field                  | Type                       | Description          |
| ---------------------- | -------------------------- | -------------------- |
| `id`                   | `ID!`                      | -                    |
| `applicant`            | `jsonb`                    | -                    |
| `applicantId`          | `String`                   | -                    |
| `externalUserId`       | `String`                   | -                    |
| `levelName`            | `String`                   | -                    |
| `approved`             | `Boolean`                  | -                    |
| `userId`               | `String`                   | -                    |
| `questionnaireId`      | `String`                   | -                    |
| `applicantStatus`      | `jsonb`                    | -                    |
| `requiredIdDocsStatus` | `jsonb`                    | -                    |
| `requiredDocuments`    | `[SumsubRequiredDocument]` | -                    |
| `sourceKey`            | `String`                   | Represents client_id |
| `sourceKeyInt`         | `Int`                      | -                    |

---

## SumsubAutoCheckGeneratorSettings

| Field           | Type     | Description |
| --------------- | -------- | ----------- |
| `autoCheckMode` | `String` | -           |
| `kybType`       | `String` | -           |

---

## SumsubBulkSyncResponse

| Field            | Type       | Description |
| ---------------- | ---------- | ----------- |
| `success`        | `Boolean!` | -           |
| `message`        | `String!`  | -           |
| `totalProcessed` | `Int!`     | -           |
| `totalSuccess`   | `Int!`     | -           |
| `totalFailed`    | `Int!`     | -           |
| `totalSkipped`   | `Int!`     | -           |

---

## SumsubCaptureParams

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `inputType` | `String!` | -           |

---

## SumsubClearAllTransactionsResponse

| Field        | Type       | Description |
| ------------ | ---------- | ----------- |
| `success`    | `Boolean!` | -           |
| `message`    | `String!`  | -           |
| `totalItems` | `Int!`     | -           |

---

## SumsubCompanyDocsGroupDefinition

| Field      | Type         | Description |
| ---------- | ------------ | ----------- |
| `label`    | `String!`    | -           |
| `subTypes` | `[String!]!` | -           |
| `required` | `Boolean!`   | -           |

---

## SumsubComplyAdvantageSettings

| Field          | Type         | Description |
| -------------- | ------------ | ----------- |
| `warningTypes` | `[String!]!` | -           |
| `fuzziness`    | `String!`    | -           |

---

## SumsubDateInfo

| Field           | Type           | Description |
| --------------- | -------------- | ----------- |
| `date`          | `timestamptz!` | -           |
| `clientSubject` | `String`       | -           |
| `subjectId`     | `String`       | -           |

---

## SumsubDeleteTransactionResponse

| Field           | Type       | Description |
| --------------- | ---------- | ----------- |
| `success`       | `Boolean!` | -           |
| `message`       | `String!`  | -           |
| `transactionId` | `String!`  | -           |

---

## SumsubDocSet

| Field                         | Type                                  | Description |
| ----------------------------- | ------------------------------------- | ----------- |
| `idDocSetType`                | `String!`                             | -           |
| `types`                       | `[String!]`                           | -           |
| `subTypes`                    | `[String!]`                           | -           |
| `videoRequired`               | `String`                              | -           |
| `captureParams`               | `SumsubCaptureParams`                 | -           |
| `captureMode`                 | `String`                              | -           |
| `uploaderMode`                | `String`                              | -           |
| `nfcVerificationSettings`     | `SumsubNfcVerificationSettings`       | -           |
| `fields`                      | `[SumsubDocumentField!]`              | -           |
| `steps`                       | `[SumsubKybStep!]`                    | -           |
| `companyDocsGroupDefinitions` | `[SumsubCompanyDocsGroupDefinition!]` | -           |
| `questionnaireDefId`          | `String`                              | -           |
| `paymentMethods`              | `[jsonb!]`                            | -           |
| `poaStepSettingsId`           | `String`                              | -           |

---

## SumsubDocumentField

| Field                | Type       | Description |
| -------------------- | ---------- | ----------- |
| `name`               | `String!`  | -           |
| `required`           | `Boolean!` | -           |
| `prefill`            | `String`   | -           |
| `immutableIfPresent` | `Boolean`  | -           |

---

## SumsubFile

| Field          | Type                 | Description |
| -------------- | -------------------- | ----------- |
| `id`           | `String`             | -           |
| `reviewAnswer` | `SumsubReviewAnswer` | -           |
| `uri`          | `String`             | -           |
| `base64`       | `String`             | -           |
| `type`         | `String`             | -           |
| `mimeType`     | `String`             | -           |
| `inspectionId` | `String`             | -           |

---

## SumsubFixedInfoAddress

| Field              | Type     | Description                             |
| ------------------ | -------- | --------------------------------------- |
| `country`          | `String` | Alpha-3 country code (e.g. DEU or RUS)  |
| `postCode`         | `String` | -                                       |
| `town`             | `String` | -                                       |
| `street`           | `String` | -                                       |
| `subStreet`        | `String` | -                                       |
| `state`            | `String` | -                                       |
| `buildingName`     | `String` | -                                       |
| `flatNumber`       | `String` | -                                       |
| `buildingNumber`   | `String` | -                                       |
| `startDate`        | `String` | Date format YYYY-mm-dd, e.g. 2001-09-25 |
| `endDate`          | `String` | Date format YYYY-mm-dd, e.g. 2001-09-25 |
| `formattedAddress` | `String` | -                                       |

---

## SumsubFixedInfoAddressInput (Input)

| Field              | Type     | Description                             |
| ------------------ | -------- | --------------------------------------- |
| `country`          | `String` | Alpha-3 country code (e.g. DEU or RUS)  |
| `postCode`         | `String` | -                                       |
| `town`             | `String` | -                                       |
| `street`           | `String` | -                                       |
| `subStreet`        | `String` | -                                       |
| `state`            | `String` | -                                       |
| `buildingName`     | `String` | -                                       |
| `flatNumber`       | `String` | -                                       |
| `buildingNumber`   | `String` | -                                       |
| `startDate`        | `String` | Date format YYYY-mm-dd, e.g. 2001-09-25 |
| `endDate`          | `String` | Date format YYYY-mm-dd, e.g. 2001-09-25 |
| `formattedAddress` | `String` | -                                       |

---

## SumsubFixedInfoInput (Input)

| Field            | Type                             | Description                                                                                                           |
| ---------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `firstName`      | `String`                         | Applicant first name in the original language                                                                         |
| `lastName`       | `String`                         | Applicant last name in the original language                                                                          |
| `middleName`     | `String`                         | Applicant middle name in the original language                                                                        |
| `firstNameEn`    | `String`                         | -                                                                                                                     |
| `lastNameEn`     | `String`                         | -                                                                                                                     |
| `middleNameEn`   | `String`                         | -                                                                                                                     |
| `legalName`      | `String`                         | Legal name of the company the applicant is related to (UBO or shareholder)                                            |
| `gender`         | `String`                         | Applicant gender (M or F)                                                                                             |
| `dob`            | `String`                         | Date of birth (format YYYY-mm-dd, e.g. 2001-09-25)                                                                    |
| `placeOfBirth`   | `String`                         | Place of birth. This can be a city, a town or another settlement type                                                 |
| `countryOfBirth` | `String`                         | Country of birth. Alpha-3 country code (e.g. DEU, GBR, ARG)                                                           |
| `stateOfBirth`   | `String`                         | State, region, district, county or another territorial entity of birth inside a country, if applicable                |
| `country`        | `String`                         | Country of the last uploaded ID document, may differ from country of birth. Alpha-3 country code (e.g. DEU, GBR, ARG) |
| `nationality`    | `String`                         | Country of origin. Alpha-3 country code (e.g. DEU, GBR, ARG)                                                          |
| `addresses`      | `[SumsubFixedInfoAddressInput!]` | -                                                                                                                     |
| `phone`          | `String`                         | -                                                                                                                     |
| `tin`            | `String`                         | Taxpayer identification number that is unique to each taxpayer                                                        |

---

## SumsubFixedInfoResponse

| Field            | Type                        | Description                                                                                                           |
| ---------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `firstName`      | `String`                    | Applicant first name in the original language                                                                         |
| `lastName`       | `String`                    | Applicant last name in the original language                                                                          |
| `middleName`     | `String`                    | Applicant middle name in the original language                                                                        |
| `firstNameEn`    | `String`                    | -                                                                                                                     |
| `lastNameEn`     | `String`                    | -                                                                                                                     |
| `middleNameEn`   | `String`                    | -                                                                                                                     |
| `legalName`      | `String`                    | Legal name of the company the applicant is related to (UBO or shareholder)                                            |
| `gender`         | `String`                    | Applicant gender (M or F)                                                                                             |
| `dob`            | `String`                    | Date of birth (format YYYY-mm-dd, e.g. 2001-09-25)                                                                    |
| `placeOfBirth`   | `String`                    | Place of birth. This can be a city, a town or another settlement type                                                 |
| `countryOfBirth` | `String`                    | Country of birth. Alpha-3 country code (e.g. DEU, GBR, ARG)                                                           |
| `stateOfBirth`   | `String`                    | State, region, district, county or another territorial entity of birth inside a country, if applicable                |
| `country`        | `String`                    | Country of the last uploaded ID document, may differ from country of birth. Alpha-3 country code (e.g. DEU, GBR, ARG) |
| `nationality`    | `String`                    | Country of origin. Alpha-3 country code (e.g. DEU, GBR, ARG)                                                          |
| `addresses`      | `[SumsubFixedInfoAddress!]` | -                                                                                                                     |
| `phone`          | `String`                    | -                                                                                                                     |
| `tin`            | `String`                    | Taxpayer identification number that is unique to each taxpayer                                                        |

---

## SumsubIdDocError

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `code`    | `String!` | -           |
| `message` | `String!` | -           |
| `field`   | `String`  | -           |

---

## SumsubIdDocMetaData

| Field          | Type                 | Description                                      |
| -------------- | -------------------- | ------------------------------------------------ |
| `idDocType`    | `SumsubIdDocType!`   | -                                                |
| `idDocSubType` | `SumsubIdDocSubType` | -                                                |
| `country`      | `String!`            | 3-letter country code (Wikipedia)                |
| `firstName`    | `String`             | -                                                |
| `middleName`   | `String`             | -                                                |
| `lastName`     | `String`             | -                                                |
| `issuedDate`   | `String`             | Date format YYYY-mm-dd, e.g. 2001-09-25          |
| `validUntil`   | `String`             | Date format YYYY-mm-dd, e.g. 2001-09-25          |
| `number`       | `String`             | -                                                |
| `dob`          | `String`             | Date of birth format YYYY-mm-dd, e.g. 2001-09-25 |
| `placeOfBirth` | `String`             | -                                                |

---

## SumsubIdDocMetaDataInput (Input)

| Field          | Type                 | Description                                      |
| -------------- | -------------------- | ------------------------------------------------ |
| `idDocType`    | `SumsubIdDocType!`   | -                                                |
| `idDocSubType` | `SumsubIdDocSubType` | -                                                |
| `country`      | `String!`            | 3-letter country code (Wikipedia)                |
| `firstName`    | `String`             | -                                                |
| `middleName`   | `String`             | -                                                |
| `lastName`     | `String`             | -                                                |
| `issuedDate`   | `String`             | Date format YYYY-mm-dd, e.g. 2001-09-25          |
| `validUntil`   | `String`             | Date format YYYY-mm-dd, e.g. 2001-09-25          |
| `number`       | `String`             | -                                                |
| `dob`          | `String`             | Date of birth format YYYY-mm-dd, e.g. 2001-09-25 |
| `placeOfBirth` | `String`             | -                                                |

---

## SumsubIdDocMetaDataResponse

| Field           | Type                             | Description |
| --------------- | -------------------------------- | ----------- |
| `data`          | `SumsubIdDocMetaDataWithErrors!` | -           |
| `imageId`       | `String`                         | -           |
| `correlationId` | `String`                         | -           |

---

## SumsubIdDocMetaDataWithErrors

| Field          | Type                    | Description                                      |
| -------------- | ----------------------- | ------------------------------------------------ |
| `idDocType`    | `SumsubIdDocType!`      | -                                                |
| `idDocSubType` | `SumsubIdDocSubType`    | -                                                |
| `country`      | `String!`               | 3-letter country code (Wikipedia)                |
| `firstName`    | `String`                | -                                                |
| `middleName`   | `String`                | -                                                |
| `lastName`     | `String`                | -                                                |
| `issuedDate`   | `String`                | Date format YYYY-mm-dd, e.g. 2001-09-25          |
| `validUntil`   | `String`                | Date format YYYY-mm-dd, e.g. 2001-09-25          |
| `number`       | `String`                | -                                                |
| `dob`          | `String`                | Date of birth format YYYY-mm-dd, e.g. 2001-09-25 |
| `placeOfBirth` | `String`                | -                                                |
| `errors`       | `[SumsubIdDocError!]`   | -                                                |
| `warnings`     | `[SumsubIdDocWarning!]` | -                                                |

---

## SumsubIdDocWarning

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `code`    | `String!` | -           |
| `message` | `String!` | -           |
| `field`   | `String`  | -           |

---

## SumsubKybSettings

| Field                            | Type      | Description |
| -------------------------------- | --------- | ----------- |
| `shareholderThreshold`           | `Int`     | -           |
| `uboThreshold`                   | `Int`     | -           |
| `disableCompanySearchAndPrefill` | `Boolean` | -           |
| `createKycTxns`                  | `Boolean` | -           |

---

## SumsubKybStep

| Field                | Type                     | Description |
| -------------------- | ------------------------ | ----------- |
| `name`               | `String!`                | -           |
| `minDocsCnt`         | `Int!`                   | -           |
| `applicantLevelName` | `String`                 | -           |
| `idDocTypes`         | `[String!]`              | -           |
| `idDocSubTypes`      | `[String!]`              | -           |
| `fields`             | `[SumsubDocumentField!]` | -           |
| `customFields`       | `jsonb`                  | -           |
| `captureMode`        | `String`                 | -           |

---

## SumsubKytSettings

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `createKycTxns` | `Boolean` | -           |

---

## SumsubMutation

| Field                                     | Type                                  | Description                                                                                   |
| ----------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- |
| `tokenByJwt`                              | `SumsubTokenResponse`                 | -                                                                                             |
| `token`                                   | `SumsubTokenResponse`                 | -                                                                                             |
| `completeProfileToken`                    | `SumsubTokenResponse`                 | -                                                                                             |
| `guestToken`                              | `SumsubTokenResponse`                 | -                                                                                             |
| `organizationKybToken`                    | `SumsubTokenResponse`                 | -                                                                                             |
| `createOrGetApplicantForUser`             | `CreateOrGetApplicantForUserResult!`  | -                                                                                             |
| `createOrGetApplicantForOrganization`     | `CreateOrGetApplicantForUserResult!`  | -                                                                                             |
| `generateWebSDKLink`                      | `String!`                             | -                                                                                             |
| `generateWebSDKLinkCompleteProfile`       | `String!`                             | -                                                                                             |
| `addIdDocument`                           | `SumsubIdDocMetaDataResponse!`        | -                                                                                             |
| `addIdDocumentByUserOrganizationInviteId` | `SumsubIdDocMetaDataResponse!`        | -                                                                                             |
| `patchFixedInfo`                          | `SumsubFixedInfoResponse!`            | -                                                                                             |
| `clearAllTransactions`                    | `SumsubClearAllTransactionsResponse!` | -                                                                                             |
| `deleteTransactionById`                   | `SumsubDeleteTransactionResponse!`    | -                                                                                             |
| `deleteTransactionByUtlId`                | `SumsubDeleteTransactionResponse!`    | -                                                                                             |
| `syncTransaction`                         | `SumsubSyncTransactionResponse!`      | -                                                                                             |
| `syncPendingTransactions`                 | `SumsubBulkSyncResponse!`             | -                                                                                             |
| `attachKybBeneficiary`                    | `AttachKybBeneficiaryResult!`         | Link an existing verified Sumsub individual applicant to the org's KYB 2.0 company structure. |

The individual must already have a Sumsub applicant ID (from completing or starting individual KYC).
Returns the junction record ID needed for future detachment. |
| `detachKybBeneficiary` | `SumsubOkResponse!` | Remove a beneficiary from the org's KYB 2.0 company structure.
Uses the junction record ID (not the applicant ID) returned from attachKybBeneficiary. |
| `sendKybBeneficiaryReminders` | `SumsubOkResponse!` | Send Sumsub verification reminder emails to all pending beneficiaries
of the org's company applicant (max 100 per call). |

---

## SumsubNfcVerificationSettings

| Field  | Type      | Description |
| ------ | --------- | ----------- |
| `mode` | `String!` | -           |

---

## SumsubNotificationSettings

| Field                         | Type         | Description |
| ----------------------------- | ------------ | ----------- |
| `applicantNotificationStates` | `[String!]!` | -           |

---

## SumsubOkResponse

| Field | Type       | Description |
| ----- | ---------- | ----------- |
| `ok`  | `Boolean!` | -           |

---

## SumsubQuantifindSettings

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `minRiskLevel`       | `String!` | -           |
| `minConfidenceLevel` | `String!` | -           |

---

## SumsubQuestionnaire

| Field         | Type                          | Description |
| ------------- | ----------------------------- | ----------- |
| `id`          | `String!`                     | -           |
| `title`       | `String`                      | -           |
| `sections`    | `[SumsubQuestionnairSection]` | -           |
| `applicantId` | `String`                      | -           |

---

## SumsubQuestionnaireItem

| Field    | Type           | Description |
| -------- | -------------- | ----------- |
| `id`     | `String!`      | -           |
| `title`  | `String`       | -           |
| `value`  | `String`       | -           |
| `values` | `[String]`     | -           |
| `type`   | `String`       | -           |
| `files`  | `[SumsubFile]` | -           |

---

## SumsubQuestionnairSection

| Field   | Type                          | Description |
| ------- | ----------------------------- | ----------- |
| `id`    | `String!`                     | -           |
| `title` | `String`                      | -           |
| `items` | `[SumsubQuestionnaireItem!]!` | -           |

---

## SumsubRequiredDocument

| Field               | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| `id`                | `String!`             | -           |
| `name`              | `String`              | -           |
| `type`              | `String`              | -           |
| `files`             | `[SumsubFile]`        | -           |
| `reviewAnswer`      | `SumsubReviewAnswer`  | -           |
| `forbidden`         | `Boolean`             | -           |
| `questionnaireData` | `SumsubQuestionnaire` | -           |

---

## SumsubRequiredIdDocs

| Field                   | Type                | Description |
| ----------------------- | ------------------- | ----------- |
| `videoIdent`            | `Boolean`           | -           |
| `videoIdentUploadTypes` | `[String!]`         | -           |
| `stepsOutsideVideoId`   | `[String!]`         | -           |
| `excludedCountries`     | `[String!]`         | -           |
| `docSets`               | `[SumsubDocSet!]!`  | -           |
| `kybSettings`           | `SumsubKybSettings` | -           |

---

## SumsubSyncTransactionResponse

| Field                 | Type       | Description |
| --------------------- | ---------- | ----------- |
| `success`             | `Boolean!` | -           |
| `message`             | `String!`  | -           |
| `utlId`               | `Int!`     | -           |
| `sumsubTransactionId` | `String`   | -           |

---

## SumsubTokenResponse

| Field              | Type     | Description |
| ------------------ | -------- | ----------- |
| `token`            | `String` | -           |
| `levelName`        | `String` | -           |
| `userId`           | `String` | -           |
| `externalActionId` | `String` | -           |
| `sourceKey`        | `String` | -           |
| `applicantId`      | `String` | -           |
| `externalUserId`   | `String` | -           |

---

## SumsubWatchListCheckSettings

| Field             | Type                            | Description |
| ----------------- | ------------------------------- | ----------- |
| `complyAdvantage` | `SumsubComplyAdvantageSettings` | -           |
| `quantifind`      | `SumsubQuantifindSettings`      | -           |
| `amlWatcher`      | `SumsubAmlWatcherSettings`      | -           |

---

## SwapFeePayment

| Field          | Type       | Description |
| -------------- | ---------- | ----------- |
| `sponsored`    | `Boolean!` | -           |
| `tokenAddress` | `String!`  | -           |
| `maxAmount`    | `String!`  | -           |

---

## SwapGasEstimate

| Field                  | Type      | Description |
| ---------------------- | --------- | ----------- |
| `callGasLimit`         | `String!` | -           |
| `verificationGasLimit` | `String!` | -           |
| `preVerificationGas`   | `String!` | -           |
| `maxFeePerGas`         | `String!` | -           |
| `maxPriorityFeePerGas` | `String!` | -           |

---

## SwapPlatformFee

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `feeBps`          | `Int!`    | -           |
| `feeAmountWei`    | `String!` | -           |
| `feeTokenAddress` | `String!` | -           |
| `feeChainId`      | `Int!`    | -           |

---

## SwapQuoteData

Raw quote data without response wrapper

| Field                  | Type              | Description                                                                                       |
| ---------------------- | ----------------- | ------------------------------------------------------------------------------------------------- |
| `fromAmount`           | `String!`         | -                                                                                                 |
| `minimumToAmount`      | `String!`         | -                                                                                                 |
| `expiry`               | `timestamptz!`    | Expiry timestamp as ISO 8601 datetime string                                                      |
| `quoteId`              | `Int`             | Database quote ID for executing the swap. May be null if quote persistence failed.                |
| `feePayment`           | `SwapFeePayment`  | -                                                                                                 |
| `platformFee`          | `SwapPlatformFee` | -                                                                                                 |
| `gasEstimate`          | `SwapGasEstimate` | -                                                                                                 |
| `priceImpactPct`       | `Float`           | Price impact percentage including all fees (null if unavailable from provider)                    |
| `amountInUsd`          | `Float`           | USD value of input amount (null if unavailable from provider)                                     |
| `amountOutUsd`         | `Float`           | USD value of expected output (null if unavailable from provider)                                  |
| `networkFeeUsd`        | `Float`           | Total network/solver fee in USD (null if unavailable from provider)                               |
| `estimatedFillSeconds` | `Int`             | Estimated fill time in seconds — primarily meaningful for cross-chain swaps (null if unavailable) |
| `route`                | `SwapRoute`       | Route chosen by the swap router. Null for legacy quotes or when routing was not performed.        |

---

## SwapQuoteResponse

Response wrapper for swap quote with structured error handling

| Field             | Type                       | Description |
| ----------------- | -------------------------- | ----------- |
| `success`         | `Boolean!`                 | -           |
| `quote`           | `SwapQuoteData`            | -           |
| `error`           | `String`                   | -           |
| `structuredError` | `SmartWalletErrorResponse` | -           |

---

## SwapResultResponse

| Field                 | Type                       | Description                                                               |
| --------------------- | -------------------------- | ------------------------------------------------------------------------- |
| `success`             | `Boolean!`                 | -                                                                         |
| `transactionHash`     | `String`                   | -                                                                         |
| `quoteId`             | `Int`                      | -                                                                         |
| `error`               | `String`                   | -                                                                         |
| `quote`               | `SwapQuoteData`            | -                                                                         |
| `structuredError`     | `SmartWalletErrorResponse` | -                                                                         |
| `sourceWalletId`      | `Int`                      | -                                                                         |
| `destinationWalletId` | `Int`                      | -                                                                         |
| `refreshedBalances`   | `[WalletTokenBalance!]`    | -                                                                         |
| `status`              | `String`                   | Swap status: 'submitted' (cross-chain, awaiting background confirmation), |

'executed' (confirmed on-chain), or 'failed'.
Null for legacy responses without status tracking. |

---

## SwapRoute

Describes the route chosen by the swap router — which provider won and why

| Field              | Type               | Description                                                                                         |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------------------- |
| `provider`         | `SwapProvider!`    | The provider that was selected for this swap                                                        |
| `providersQueried` | `[SwapProvider!]!` | All providers that were queried (may include ones that failed or returned worse quotes)             |
| `hops`             | `[SwapRouteHop!]`  | Routing hops — single-element for same-chain, multi-element for cross-chain with intermediate steps |

---

## SwapRouteHop

A single hop in a swap route (e.g. ETH→USDC on Uniswap, then USDC bridged via Across)

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `provider`    | `String!` | -           |
| `fromToken`   | `String!` | -           |
| `toToken`     | `String!` | -           |
| `fromChainId` | `Int!`    | -           |
| `toChainId`   | `Int!`    | -           |

---

## SyncApplicantQuestionnaireInput (Input)

| Field               | Type      | Description |
| ------------------- | --------- | ----------- |
| `applicantId`       | `String!` | -           |
| `questionnaireData` | `jsonb!`  | -           |
| `logErrors`         | `Boolean` | -           |

---

## SyncApplicantQuestionnaireResponse

| Field             | Type       | Description |
| ----------------- | ---------- | ----------- |
| `success`         | `Boolean!` | -           |
| `applicantId`     | `String!`  | -           |
| `questionnaireId` | `String`   | -           |
| `error`           | `String`   | -           |
| `skipped`         | `Boolean`  | -           |
| `reason`          | `String`   | -           |

---

## SyncCoinlistPlatformsInput (Input)

| Field           | Type                   | Description                                |
| --------------- | ---------------------- | ------------------------------------------ |
| `dryRun`        | `Boolean`              | -                                          |
| `forceRefresh`  | `Boolean`              | -                                          |
| `symbol`        | `String`               | -                                          |
| `waitForResult` | `Boolean`              | -                                          |
| `phases`        | `[SyncCoinlistPhase!]` | Run only specific phases. Omit to run all. |

---

## SynchronizeEnzymeVaultsInput (Input)

| Field                     | Type      | Description |
| ------------------------- | --------- | ----------- |
| `startDate`               | `String!` | -           |
| `endDate`                 | `String!` | -           |
| `fundId`                  | `Int`     | -           |
| `syncNavsAndFees`         | `Boolean` | -           |
| `syncVaultActivities`     | `Boolean` | -           |
| `syncVaultPortfolio`      | `Boolean` | -           |
| `syncVaultDepositors`     | `Boolean` | -           |
| `backfillAssetValuations` | `Boolean` | -           |
| `calculateCostBasis`      | `Boolean` | -           |

---

## SynchronizeEnzymeVaultsResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## SyncSafesInput (Input)

| Field             | Type  | Description |
| ----------------- | ----- | ----------- |
| `digitalWalletId` | `Int` | -           |

---

## SyncSafesResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `jobId`   | `String`   | -           |
| `message` | `String`   | -           |
| `error`   | `String`   | -           |

---

## SyncWhitelistInput (Input)

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `digitalWalletId` | `Int!`    | -           |
| `direction`       | `String!` | -           |

---

## SyncWhitelistResponse

| Field              | Type       | Description |
| ------------------ | ---------- | ----------- |
| `success`          | `Boolean!` | -           |
| `entriesAdded`     | `Int`      | -           |
| `entriesRemoved`   | `Int`      | -           |
| `entriesUnchanged` | `Int`      | -           |
| `discrepancies`    | `jsonb`    | -           |
| `error`            | `String`   | -           |

---

## TaskValidationResult

| Field                    | Type                           | Description |
| ------------------------ | ------------------------------ | ----------- |
| `valid`                  | `Boolean!`                     | -           |
| `results`                | `[TaskValidationRuleResult!]!` | -           |
| `blockers`               | `[TaskValidationRuleResult!]!` | -           |
| `warnings`               | `[TaskValidationRuleResult!]!` | -           |
| `correctionTasksCreated` | `[Int!]!`                      | -           |

---

## TaskValidationRuleResult

| Field              | Type       | Description |
| ------------------ | ---------- | ----------- |
| `ruleId`           | `Int!`     | -           |
| `ruleType`         | `String!`  | -           |
| `passed`           | `Boolean!` | -           |
| `action`           | `String!`  | -           |
| `message`          | `String!`  | -           |
| `correctionTaskId` | `Int`      | -           |

---

## TokenInfo

| Field                              | Type         | Description |
| ---------------------------------- | ------------ | ----------- |
| `id`                               | `Int!`       | -           |
| `name`                             | `String!`    | -           |
| `symbol`                           | `String!`    | -           |
| `slug`                             | `String!`    | -           |
| `num_market_pairs`                 | `Int!`       | -           |
| `date_added`                       | `String!`    | -           |
| `max_supply`                       | `Float`      | -           |
| `circulating_supply`               | `Float!`     | -           |
| `total_supply`                     | `Float!`     | -           |
| `is_active`                        | `Int!`       | -           |
| `infinite_supply`                  | `Boolean!`   | -           |
| `platform`                         | `Platform`   | -           |
| `cmc_rank`                         | `Float!`     | -           |
| `is_fiat`                          | `Int!`       | -           |
| `self_reported_circulating_supply` | `Float`      | -           |
| `self_reported_market_cap`         | `Float`      | -           |
| `tvl_ratio`                        | `Float`      | -           |
| `last_updated`                     | `String!`    | -           |
| `quote`                            | `QuoteType`  | -           |
| `sparkline`                        | `Sparkline!` | -           |
| `sparklineUrl`                     | `String!`    | -           |

---

## TokenSparkline

| Field              | Type                    | Description |
| ------------------ | ----------------------- | ----------- |
| `tokenId`          | `Int!`                  | -           |
| `symbol`           | `String!`               | -           |
| `prices`           | `[Float!]!`             | -           |
| `timestamps`       | `[Int!]!`               | -           |
| `percentageChange` | `Float!`                | -           |
| `period`           | `TokenSparklinePeriod!` | -           |

---

## TrackBalancerPoolResponse

| Field     | Type           | Description |
| --------- | -------------- | ----------- |
| `pool`    | `BalancerPool` | -           |
| `jobId`   | `String`       | -           |
| `success` | `Boolean!`     | -           |
| `error`   | `String`       | -           |

---

## TradeOrderUpdate

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `channel`       | `String!` | -           |
| `time`          | `String!` | -           |
| `accountId`     | `String!` | -           |
| `orderId`       | `String!` | -           |
| `clientOrderId` | `String!` | -           |
| `product`       | `String!` | -           |
| `status`        | `String!` | -           |
| `type`          | `String!` | -           |
| `side`          | `String!` | -           |
| `quantity`      | `String!` | -           |

---

## TradeSettlement

| Field                       | Type           | Description |
| --------------------------- | -------------- | ----------- |
| `id`                        | `Int!`         | -           |
| `tradeRequestId`            | `uuid!`        | -           |
| `settlementTypeId`          | `Int!`         | -           |
| `settlementStatusId`        | `Int!`         | -           |
| `settlementTypeName`        | `String`       | -           |
| `settlementStatusName`      | `String`       | -           |
| `inboundTransactionHash`    | `String`       | -           |
| `inboundFromAddress`        | `String`       | -           |
| `inboundToAddress`          | `String`       | -           |
| `inboundAmount`             | `Float`        | -           |
| `inboundTokenSymbol`        | `String`       | -           |
| `inboundTokenAddress`       | `String`       | -           |
| `inboundNetwork`            | `String`       | -           |
| `inboundConfirmations`      | `Int`          | -           |
| `inboundConfirmedAt`        | `timestamptz`  | -           |
| `inboundProvider`           | `String`       | -           |
| `outboundTransactionHash`   | `String`       | -           |
| `outboundToAddress`         | `String`       | -           |
| `outboundToDigitalWalletId` | `Int`          | -           |
| `outboundInitiatedAt`       | `timestamptz`  | -           |
| `outboundConfirmedAt`       | `timestamptz`  | -           |
| `outboundProvider`          | `String`       | -           |
| `outboundWireTransferId`    | `Int`          | -           |
| `swapTransactionHash`       | `String`       | -           |
| `swapInputTokenSymbol`      | `String`       | -           |
| `swapInputAmount`           | `Float`        | -           |
| `swapOutputTokenSymbol`     | `String`       | -           |
| `swapOutputAmount`          | `Float`        | -           |
| `swapNetwork`               | `String`       | -           |
| `swapWalletAddress`         | `String`       | -           |
| `swapConfirmedAt`           | `timestamptz`  | -           |
| `amountGross`               | `Float!`       | -           |
| `feeAmount`                 | `Float!`       | -           |
| `amountNet`                 | `Float!`       | -           |
| `settlementCurrency`        | `String!`      | -           |
| `amountGrossUsd`            | `Float`        | -           |
| `feeAmountUsd`              | `Float`        | -           |
| `amountNetUsd`              | `Float`        | -           |
| `usdRate`                   | `Float`        | -           |
| `notes`                     | `String`       | -           |
| `verifiedByUserId`          | `String`       | -           |
| `verifiedAt`                | `timestamptz`  | -           |
| `completedAt`               | `timestamptz`  | -           |
| `failedReason`              | `String`       | -           |
| `createdByUserId`           | `String`       | -           |
| `createdAt`                 | `timestamptz!` | -           |
| `updatedAt`                 | `timestamptz!` | -           |

---

## TradeSettlementAudit

| Field               | Type           | Description |
| ------------------- | -------------- | ----------- |
| `id`                | `Int!`         | -           |
| `tradeSettlementId` | `Int!`         | -           |
| `action`            | `String!`      | -           |
| `oldStatusId`       | `Int`          | -           |
| `newStatusId`       | `Int`          | -           |
| `notes`             | `String`       | -           |
| `metadata`          | `JSON`         | -           |
| `createdByUserId`   | `String`       | -           |
| `createdAt`         | `timestamptz!` | -           |

---

## TradeSettlementListResponse

| Field         | Type                  | Description |
| ------------- | --------------------- | ----------- |
| `settlements` | `[TradeSettlement!]!` | -           |
| `success`     | `Boolean!`            | -           |
| `error`       | `String`              | -           |

---

## TradeSettlementResponse

| Field        | Type              | Description |
| ------------ | ----------------- | ----------- |
| `settlement` | `TradeSettlement` | -           |
| `success`    | `Boolean!`        | -           |
| `error`      | `String`          | -           |

---

## TradingPair

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `baseCurrency`  | `String!` | -           |
| `quoteCurrency` | `String!` | -           |
| `minTradeSize`  | `String!` | -           |

---

## TradingProduct

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `id`              | `String!` | -           |
| `name`            | `String!` | -           |
| `baseCurrencyId`  | `String!` | -           |
| `baseCurrency`    | `String!` | -           |
| `quoteCurrencyId` | `String!` | -           |
| `quoteCurrency`   | `String!` | -           |
| `baseMinSize`     | `String!` | -           |
| `baseMaxSize`     | `String`  | -           |
| `baseIncrement`   | `String`  | -           |
| `quoteMinSize`    | `String!` | -           |
| `quoteIncrement`  | `String!` | -           |
| `isTradeDisabled` | `Boolean` | -           |

---

## TransferDigitalAssetInput (Input)

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `walletId`        | `ID!`     | -           |
| `fromCoinId`      | `String`  | -           |
| `fromCoinAddress` | `String`  | -           |
| `toCoinId`        | `String`  | -           |
| `toCoinAddress`   | `String`  | -           |
| `size`            | `String!` | -           |

---

## UpdateRainCardLimitInput (Input)

Input for updating a Rain Card's spending limit

| Field            | Type                  | Description                                       |
| ---------------- | --------------------- | ------------------------------------------------- |
| `cardId`         | `Int!`                | Card ID (AgioCard_card.id - our internal card ID) |
| `limitAmount`    | `Int!`                | Limit amount in cents (e.g., 50000 = $500.00)     |
| `limitFrequency` | `RainLimitFrequency!` | Limit frequency period                            |

---

## UpdateRainCompanyAddressInput (Input)

Input for updating Rain company address

| Field               | Type                | Description                                      |
| ------------------- | ------------------- | ------------------------------------------------ |
| `cardApplicationId` | `Int!`              | Card application ID to identify the Rain company |
| `address`           | `RainAddressInput!` | Updated company address                          |

---

## UpdateRainUserProfileInput (Input)

Input for updating Rain user billing address

| Field               | Type                | Description                                   |
| ------------------- | ------------------- | --------------------------------------------- |
| `cardApplicationId` | `Int!`              | Card application ID to identify the Rain user |
| `address`           | `RainAddressInput!` | Updated billing address                       |

---

## UpdateSettlementStatusInput (Input)

| Field          | Type     | Description |
| -------------- | -------- | ----------- |
| `settlementId` | `Int!`   | -           |
| `statusId`     | `Int!`   | -           |
| `notes`        | `String` | -           |

---

## UploadCardDisputeEvidenceResponse

| Field     | Type       | Description |
| --------- | ---------- | ----------- |
| `success` | `Boolean!` | -           |
| `error`   | `String`   | -           |

---

## User

| Field                | Type                 | Description |
| -------------------- | -------------------- | ----------- |
| `id`                 | `ID`                 | -           |
| `user_id`            | `String`             | -           |
| `portfolioDashboard` | `PortfolioDashboard` | -           |

---

## UserCreateUserAccountInviteInput (Input)

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `email`        | `String!` | -           |
| `givenName`    | `String!` | -           |
| `familyName`   | `String!` | -           |
| `redirectUrl`  | `String`  | -           |
| `extraMessage` | `String`  | -           |

---

## ValidateAddressInput (Input)

Input for validating an address

| Field     | Type                | Description                                                                       |
| --------- | ------------------- | --------------------------------------------------------------------------------- |
| `address` | `RainAddressInput!` | Address to validate before creating cards, shipping groups, or billing operations |

---

## VerifySettlementInput (Input)

| Field          | Type       | Description |
| -------------- | ---------- | ----------- |
| `settlementId` | `Int!`     | -           |
| `approved`     | `Boolean!` | -           |
| `notes`        | `String`   | -           |

---

## VerifyTokenChainsInput (Input)

| Field           | Type       | Description |
| --------------- | ---------- | ----------- |
| `tokenId`       | `Int`      | -           |
| `recheck`       | `Boolean!` | -           |
| `batchSize`     | `Int!`     | -           |
| `dryRun`        | `Boolean!` | -           |
| `waitForResult` | `Boolean`  | -           |

---

## WalletPolicy

| Field             | Type           | Description |
| ----------------- | -------------- | ----------- |
| `id`              | `Int!`         | -           |
| `digitalWalletId` | `Int!`         | -           |
| `bitgoPolicyId`   | `String`       | -           |
| `policyType`      | `String!`      | -           |
| `config`          | `jsonb!`       | -           |
| `isActive`        | `Boolean!`     | -           |
| `createdBy`       | `String!`      | -           |
| `createdAt`       | `timestamptz!` | -           |
| `updatedAt`       | `timestamptz!` | -           |

---

## WalletPolicyAuditEntry

| Field            | Type           | Description |
| ---------------- | -------------- | ----------- |
| `id`             | `Int!`         | -           |
| `walletPolicyId` | `Int!`         | -           |
| `action`         | `String!`      | -           |
| `previousConfig` | `jsonb`        | -           |
| `newConfig`      | `jsonb`        | -           |
| `performedBy`    | `String!`      | -           |
| `notes`          | `String`       | -           |
| `createdAt`      | `timestamptz!` | -           |

---

## WalletTokenBalance

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `digitalWalletId`  | `Int!`    | -           |
| `tokenSymbol`      | `String!` | -           |
| `tokenName`        | `String`  | -           |
| `balance`          | `String!` | -           |
| `currentValueUsd`  | `String`  | -           |
| `latestTokenPrice` | `String`  | -           |
| `tokenLogoUrl`     | `String`  | -           |
| `tokenId`          | `Int!`    | -           |
| `networkId`        | `Int`     | -           |
| `networkName`      | `String`  | -           |
| `decimals`         | `Int`     | -           |
| `contractAddress`  | `String`  | -           |
| `isSpam`           | `Boolean` | -           |
| `dataSource`       | `String`  | -           |

---

## WebhookPayload

| Field               | Type           | Description |
| ------------------- | -------------- | ----------- |
| `id`                | `Int!`         | -           |
| `type`              | `String!`      | -           |
| `state`             | `String!`      | -           |
| `walletId`          | `String`       | -           |
| `hash`              | `String`       | -           |
| `transfer`          | `String`       | -           |
| `coin`              | `String`       | -           |
| `pendingApprovalId` | `String`       | -           |
| `createdAt`         | `timestamptz!` | -           |

---

## WebhookPayloadPage

| Field      | Type                 | Description |
| ---------- | -------------------- | ----------- |
| `payloads` | `[WebhookPayload!]!` | -           |
| `count`    | `Int!`               | -           |

---

## WebhookStats

| Field                     | Type   | Description |
| ------------------------- | ------ | ----------- |
| `transactionWebhooks`     | `Int!` | -           |
| `pendingApprovalWebhooks` | `Int!` | -           |
| `totalWebhooks`           | `Int!` | -           |

---

## WhitelistDiff

| Field          | Type                     | Description |
| -------------- | ------------------------ | ----------- |
| `bitgoOnly`    | `[WhitelistDiffEntry!]!` | -           |
| `internalOnly` | `[WhitelistDiffEntry!]!` | -           |
| `matched`      | `Int!`                   | -           |

---

## WhitelistDiffEntry

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `address` | `String!` | -           |
| `label`   | `String!` | -           |

---

## WhitelistEntryInput (Input)

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `address` | `String!` | -           |
| `label`   | `String!` | -           |

---

## WhitelistRequest

| Field                    | Type           | Description |
| ------------------------ | -------------- | ----------- |
| `id`                     | `Int!`         | -           |
| `userId`                 | `String!`      | -           |
| `organizationId`         | `uuid!`        | -           |
| `digitalWalletId`        | `Int!`         | -           |
| `address`                | `String!`      | -           |
| `chainId`                | `Int`          | -           |
| `label`                  | `String`       | -           |
| `notes`                  | `String`       | -           |
| `status`                 | `String!`      | -           |
| `reviewedBy`             | `String`       | -           |
| `reviewedAt`             | `timestamptz`  | -           |
| `rejectionReason`        | `String`       | -           |
| `bitgoPendingApprovalId` | `String`       | -           |
| `createdAt`              | `timestamptz!` | -           |
| `updatedAt`              | `timestamptz!` | -           |

---

## WhitelistRequestResponse

| Field     | Type               | Description |
| --------- | ------------------ | ----------- |
| `success` | `Boolean!`         | -           |
| `request` | `WhitelistRequest` | -           |
| `error`   | `String`           | -           |

---

## WhitelistSyncLog

| Field              | Type           | Description |
| ------------------ | -------------- | ----------- |
| `id`               | `Int!`         | -           |
| `digitalWalletId`  | `Int!`         | -           |
| `direction`        | `String!`      | -           |
| `status`           | `String!`      | -           |
| `entriesAdded`     | `Int!`         | -           |
| `entriesRemoved`   | `Int!`         | -           |
| `entriesUnchanged` | `Int!`         | -           |
| `discrepancies`    | `jsonb`        | -           |
| `errorMessage`     | `String`       | -           |
| `initiatedBy`      | `String!`      | -           |
| `startedAt`        | `timestamptz`  | -           |
| `completedAt`      | `timestamptz`  | -           |
| `createdAt`        | `timestamptz!` | -           |

---

## WorkflowSdkInitTokenInput (Input)

| Field               | Type      | Description |
| ------------------- | --------- | ----------- |
| `apiToken`          | `String!` | -           |
| `externalUserId`    | `String!` | -           |
| `externalUserEmail` | `String`  | -           |
| `externalUserName`  | `String`  | -           |
| `ttl`               | `Int`     | -           |

---

## WorkflowSdkUserAuthenticationInput (Input)

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `token` | `String!` | -           |

---

## ZipResult

| Field        | Type     | Description |
| ------------ | -------- | ----------- |
| `base64Data` | `String` | -           |
| `name`       | `String` | -           |
| `hash`       | `String` | -           |

---
