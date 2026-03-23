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
