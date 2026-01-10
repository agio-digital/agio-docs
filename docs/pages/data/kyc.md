# Know Your Customer (KYC) Verification

## Overview

KYC (Know Your Customer) verification is a regulatory requirement that ensures users are who they claim to be. The Agio platform integrates with [Sumsub](https://sumsub.com/) to provide identity verification services including document verification, facial recognition, and liveness detection.

## Verification Flow

1. **User Initiates** - User starts the verification process through the SDK or Direct Widget
2. **Document Upload** - User uploads identity documents (passport, ID card, driver's license)
3. **Facial Verification** - User completes a selfie or liveness check
4. **Review Process** - Documents are automatically analyzed and reviewed
5. **Result** - Verification is approved, rejected, or requires retry

## Verification Statuses

The `reviewStatus` field indicates the current state of a user's verification:

| Status            | Description                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| `init`            | Initial registration started. User is still filling out their profile and uploading documents.              |
| `pending`         | Applicant profile is complete and ready to be processed.                                                    |
| `queued`          | Verification is in the queue and will be processed soon.                                                    |
| `prechecked`      | Verification is partially complete (intermediate state).                                                    |
| `completed`       | Verification process is finished. Check `reviewResult` for the outcome.                                     |
| `onHold`          | Awaiting manual review by a compliance officer, or waiting for all beneficiaries to complete KYC (for KYB). |
| `awaitingService` | Waiting for an external service response.                                                                   |
| `awaitingUser`    | Waiting for additional information from the user.                                                           |

## Review Results

When `reviewStatus` is `completed`, the `reviewResult` object contains the verification outcome:

### reviewAnswer

| Value   | Description                                            |
| ------- | ------------------------------------------------------ |
| `GREEN` | Verification approved. User has passed all checks.     |
| `RED`   | Verification rejected. See `rejectLabels` for reasons. |

### reviewRejectType

When `reviewAnswer` is `RED`, this field indicates if the user can retry:

| Value   | Description                                                |
| ------- | ---------------------------------------------------------- |
| `FINAL` | Permanent rejection. User cannot resubmit.                 |
| `RETRY` | Temporary rejection. User can correct issues and resubmit. |

### Common Rejection Labels

The `rejectLabels` array contains reasons for rejection:

| Label                      | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| `FORGERY`                  | Document appears to be forged or tampered with         |
| `DOCUMENT_TEMPLATE`        | Document is a template or sample                       |
| `LOW_QUALITY`              | Image quality is too low to verify                     |
| `SPAM`                     | Submission appears to be spam or fraudulent            |
| `NOT_DOCUMENT`             | Uploaded file is not a valid identity document         |
| `SELFIE_MISMATCH`          | Face in selfie does not match document photo           |
| `ID_INVALID`               | Document is expired, damaged, or invalid               |
| `FOREIGNER`                | Document is from an unsupported country                |
| `DUPLICATE`                | User has already been verified under different details |
| `BAD_SELFIE`               | Selfie quality issues (blur, lighting, obstruction)    |
| `BAD_VIDEO_SELFIE`         | Liveness check video has issues                        |
| `BAD_FACE_MATCHING`        | Face matching confidence is too low                    |
| `BAD_PROOF_OF_RESIDENCE`   | Proof of address document is invalid                   |
| `SCREENSHOTS`              | Screenshots are not accepted                           |
| `BLACK_AND_WHITE`          | Document must be in color                              |
| `INCOMPATIBLE_TASK_REQ`    | Document doesn't meet requirements                     |
| `GRAPHIC_EDITOR`           | Document appears to be digitally edited                |
| `UNSATISFACTORY_PHOTOS`    | Photos do not meet quality requirements                |
| `AGE_REQUIREMENT_MISMATCH` | User does not meet age requirements                    |

## Know Your Business (KYB)

For business verification, set `kyb: true` in the SDK configuration or use the `kyb` query parameter in the Direct Widget. KYB verification includes:

- Company registration documents
- Beneficial ownership information
- Director/officer identification
- Proof of business address

KYB verification may require multiple individuals (beneficial owners, directors) to complete individual KYC before the business verification is approved.

## Webhook Integration

To receive real-time updates when verification status changes, configure webhooks. See the [Webhooks documentation](/data/webhooks) for:

- Webhook payload structure
- Event types and triggers
- Implementation examples

## SDK Fields Reference

The following fields are available in the SDK's user data callbacks:

| Field            | Type      | Description                                   |
| ---------------- | --------- | --------------------------------------------- |
| `id`             | string    | Unique identifier for the verification record |
| `externalUserId` | string    | Your internal user identifier                 |
| `reviewStatus`   | string    | Current verification status                   |
| `reviewResult`   | object    | Verification outcome (when completed)         |
| `createdAt`      | timestamp | When verification was initiated               |
| `updatedAt`      | timestamp | Last status update time                       |

## Best Practices

1. **Handle all statuses** - Implement UI states for each `reviewStatus` value
2. **Support retries** - When `reviewRejectType` is `RETRY`, allow users to resubmit
3. **Use webhooks** - Don't poll for status; use webhooks for real-time updates
4. **Secure tokens** - Always generate init tokens server-side
5. **Test in sandbox** - Use development environment before going to production
