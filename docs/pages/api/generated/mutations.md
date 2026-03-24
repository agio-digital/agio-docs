---
footer: false
---

# Generated Mutations Reference

> This file is auto-generated from the GraphQL schema. Do not edit directly.

## Available Mutations

| Mutation                                                                                           | Return Type                                  | Description                                                                                  |
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
| `createAgioCardApplication` | `AgioCardApplicationResponse!` | Create a Agio Card application for a user with completed KYC.
Requires normal-kyc-level verification. |
| `freezeAgioCard` | `AgioCardOperationResponse!` | Freeze a Agio Card. Calls Agio Card API and returns immediate response.
Card status will be updated via webhook.
Requires the user to own the card. |
| `unfreezeAgioCard` | `AgioCardOperationResponse!` | Unfreeze a Agio Card. Calls Agio Card API and returns immediate response.
Card status will be updated via webhook.
Requires the user to own the card. |
| `revealAgioCardSecrets` | `AgioCardSecretsResponse!` | Reveal sensitive card details (PAN, CVC, expiry).
Requires the user to own the card.
Returns encryptedSecrets - use decryptWithSessionKey from agio-utils to decrypt JSON. |
| `replaceVirtualAgioCard` | `AgioCardReplacementResponse!` | Replace a virtual Agio Card with a new one.
The old card is canceled and a new card is created with new PAN, token, and expiration.
The new card inherits spending limits from the old card.
Only virtual cards can be replaced - physical cards will return an error.
Requires the user to own the card. |
| `setAgioCardPin` | `AgioCardPinResponse!` | Set or update a Agio Card's PIN.
PIN must be 4-12 digits and meet security requirements.
Requires the user to own the card. |
| `getAgioCardPin` | `AgioCardPinResponse!` | Retrieve a Agio Card's PIN.
Returns encryptedPin - use decryptWithSessionKey from agio-utils to decrypt.
Requires the user to own the card. |
| `freezeAgioCardByAgioCardId` | `AgioCardOperationResponse!` | Admin-only: Freeze Agio Card by Agio card ID. Bypasses ownership checks. |
| `unfreezeAgioCardByAgioCardId` | `AgioCardOperationResponse!` | Admin-only: Unfreeze Agio Card by Agio card ID. Bypasses ownership checks. |
| `revealAgioCardSecretsByAgioCardId` | `AgioCardSecretsResponse!` | Admin-only: Reveal card secrets by Agio card ID. Bypasses ownership checks.
Returns encryptedSecrets - use decryptWithSessionKey from agio-utils to decrypt JSON. |
| `replaceVirtualAgioCardByAgioCardId` | `AgioCardReplacementResponse!` | Admin-only: Replace virtual card by Agio card ID. Bypasses ownership checks. |
| `setAgioCardPinByAgioCardId` | `AgioCardPinResponse!` | Admin-only: Set card PIN by Agio card ID. Bypasses ownership checks.
PIN must be encrypted using encryptPassphraseForTransfer from agio-utils. |
| `getAgioCardPinByAgioCardId` | `AgioCardPinResponse!` | Admin-only: Get card PIN by Agio card ID. Bypasses ownership checks.
Returns encryptedPin - use decryptWithSessionKey from agio-utils to decrypt. |
| `createRainCorporateApplication` | `RainCorporateApplicationResponse!` | Create a Agio Corporate Card application for a company.
Requires entity information, initial user, representatives, and UBOs.
Website is REQUIRED by Agio Card API. |
| `validateAddress` | `AddressValidationResponse!` | Validate an address using Google Address Validation API.
Returns validation result with confidence level (HIGH, MEDIUM, or LOW).
Useful for validating user addresses before creating cards, shipping groups, or billing operations.
Cached for 30 days per Google's recommendations. |
| `validateRainShippingAddress` | `AddressValidationResponse!` | Validate a shipping address via Agio's address validation endpoint.
Determines whether Agio can ship a physical card to this address.
Uses Google Address Validation with geocoding fallback — broader country coverage than validateAddress. |
| `autocompleteAddress` | `AutocompleteAddressResponse!` | Autocomplete address search using Google Places API.
Returns address suggestions based on partial input.
Useful for address entry forms with typeahead functionality.
Results cached for 24 hours. |
| `resolvePlaceAddress` | `ResolvePlaceAddressResponse!` | Resolve a Google Place ID to a structured address object.
Use the placeId returned by autocompleteAddress to fetch precise address fields. |
| `updateCardNickname` | `AgioCardOperationResponse!` | Update a Agio Card's nickname (display name).
Validates: max 26 chars, alphanumeric + spaces + periods + hyphens only.
Updates local database. Requires the user to own the card. |
| `updateAgioCardUserProfile` | `AgioCardOperationResponse!` | Update Agio user profile (address and/or phone).
Syncs to both Agio Card API and local database.
Requires the user to own the card application. |
| `updateRainCompanyAddress` | `AgioCardOperationResponse!` | Update Agio company address.
Syncs to both Agio Card API and local database.
Requires organization admin or Agio admin role. |
| `updateAgioCardLimit` | `AgioCardLimitResponse!` | Update a Agio Card's spending limit.
Updates both Agio Card API and local database.
Requires the user to own the card application. |
| `lockAgioCard` | `AgioCardOperationResponse!` | Lock a Agio Card (alias for freeze). Card cannot be used for transactions.
Use unlockAgioCard to restore card functionality.
Requires the user to own the card. |
| `unlockAgioCard` | `AgioCardOperationResponse!` | Unlock a Agio Card (alias for unfreeze). Restores card functionality.
Requires the user to own the card. |
| `cancelAgioCard` | `AgioCardOperationResponse!` | Cancel a Agio Card permanently (irreversible).
Card cannot be reactivated after cancellation.
Requires the user to own the card. |
| `createAgioCard` | `CreateAgioCardResponse!` | Create a new Agio Card for an approved application.
Supports both virtual and physical cards via cardType discriminator.

- Virtual cards: PIN set immediately, card active after creation
- Physical cards: PIN staged, shipping required, activated when received
  Requires an approved card application. |
  | `replaceAgioCard` | `AgioCardReplacementResponse!` | Replace an existing Agio Card (for lost/stolen/damaged cards).
  Creates a new card with new PAN and credentials.
  The old card is canceled automatically.
- Virtual cards: New card created immediately
- Physical cards: Requires shipping address
  Requires the user to own the card. |
  | `payInvoiceWithCardBalance` | `PayInvoiceWithCardBalanceResponse!` | Pay an invoice using card balance.
  Debits the user's card collateral balance and records payment against the invoice.
  Requires the user to own both the card application and the invoice. |
  | `updateAgioCardLimitByAgioCardId` | `AgioCardLimitResponse!` | Admin-only: Update card limit by Agio card ID. Bypasses ownership checks. |
  | `cancelAgioCardByAgioCardId` | `AgioCardOperationResponse!` | Admin-only: Cancel card by Agio card ID. Bypasses ownership checks. |
  | `createAgioCardByAgioCardUserId` | `CreateAgioCardResponse!` | Admin-only: Create card for a user by Agio user ID. Bypasses ownership checks. |
  | `chargeCard` | `ChargeCardResponse!` | Charge a Agio Card with a fee. Requires card:charge permission.
  Debits from user's card collateral balance and records the transaction. |
  | `cardWithdraw` | `CardWithdrawResponse!` | Withdraw collateral from a Agio Card smart wallet.
  Signs the withdrawal with the owner EOA via Alchemy Signer and submits
  via session key UserOp through the Agio coordinator contract. |
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
