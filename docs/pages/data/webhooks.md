# KYC & KYT Event Webhooks

## Introduction

The Agio SDK provides a webhook system that allows you to receive notifications when a user's KYC or KYT status changes. This is useful for updating your own database with the latest data.

## Webhook Configuration

To configure webhooks, you must first create a webhook endpoint in your application. This endpoint will receive the webhook data from Agio. The endpoint must be accessible via HTTPS. All webhooks are sent as `POST` requests. The webhook data is sent as JSON in the request body.

Please contact the Agio team to configure your webhook endpoints after creating receiving endpoints in your application API.

## KYC Webhook

The KYC webhook is sent when a user's KYC status changes. The webhook data contains all the information you need to update your database with the current verification data.

### KYC Webhook Data Fields

- `WebhookPayloadId`: The ID of the webhook payload.
- `applicantActionId`: The ID of the applicant action.
- `applicantId`: The ID of the applicant.
- `applicantMemberOf`: The ID of the applicant's member.
- `applicantType`: The type of the applicant.
- `clientId`: The ID of the client.
- `inspectionId`: The ID of the inspection.
- `correlationId`: The ID of the request.
- `externalApplicantActionId`: The ID of the applicant action in your database.
- `externalUserId`: The ID of the user in your database.
- `inspectionId`: The ID of the inspection.
- `levelName`: The name of the KYC level.
- `reviewApproved`: A boolean value indicating whether the review was approved.
- `sourceKey`: The source key of the webhook payload.
- `sandboxMode`: A boolean value indicating whether the webhook payload was sent in sandbox mode.
- `type`: The type of the webhook payload.
- `reviewResult`: The review result of the applicant.
- `reviewStatus`: The status of the review.
- `createdAt`: The date and time the webhook was created.
- `videoIdentReviewStatus`: The status of the video ident review.

### KYC Webhook Data Key Field Details

#### reviewStatus

- `init`: Initial registration has started. A client is still in the process of filling out the applicant profile. Not all required documents are currently uploaded.
- `pending`: An applicant is ready to be processed.
- `prechecked`: The check is in a half way point of being finished.
- `queued`: The check is in a queue and will be processed soon.
- `completed`: The check is finished.
- `onHold`: Applicant pending a final decision from compliance officer (manual check was initiated) or waits for all beneficiaries to pass KYC in case of KYB verification.

#### reviewResult

When the reviewStatus changes to `completed`, the webhook populates a “reviewResult” jsonb field that contains details related to the result.

Please note, final reviewResult approval data is summarized via the “reviewApproved” boolean field. If reviewApproved is true, then the applicant's kyc profile is in a final approval state (a value of false has multiple possible reasons, including the applicant being soft rejected, or the applicant being in a pending state).

#### reviewResult.reviewAnswer

- `GREEN`: The applicant was approved.
- `RED`: The applicant was rejected.

#### reviewResult.reviewRejectType - If the result is a rejection, this field will determine if the rejection can be retried.

- `FINAL`: The applicant was rejected.
- `RETRY`: The applicant was soft rejected. The applicant can retry the verification process. This may happen if the applicant's documents were not clear enough, or if the applicant's documents were not in the correct format.

#### reviewResult.rejectLabels - If the result is a rejection, this field will contain a list of labels that describe the reason for the rejection.

```json
["UNSATISFACTORY_PHOTOS", "GRAPHIC_EDITOR", "FORGERY"]
```

#### Example Initial Rejection

```json
{
  "WebhookPayloadId": 1,
  "applicantId": "5cb744200a975a67ed1798a4",
  "inspectionId": "5cb744200a975a67ed1798a5",
  "correlationId": "req-fa94263f-0b23-42d7-9393-ab10b28ef42d",
  "externalUserId": "externalUserId",
  "levelName": "basic-kyc-level",
  "type": "applicantReviewed",
  "reviewResult": {
    "reviewAnswer": "RED",
    "moderationComment": "We do not accept screenshots. Please upload an original photo.",
    "clientComment": "Screenshots are not accepted.",
    "reviewRejectType": "RETRY",
    "rejectLabels": ["UNSATISFACTORY_PHOTOS", "SCREENSHOTS"]
  },
  "reviewStatus": "completed",
  "createdAt": "2020-02-21 13:23:19+0000"
}
```

#### Example Final Rejection

```json
{
  "WebhookPayloadId": 1,
  "applicantId": "5cb744200a975a67ed1798a4",
  "inspectionId": "5cb744200a975a67ed1798a5",
  "correlationId": "req-fa94263f-0b23-42d7-9393-ab10b28ef42d",
  "externalUserId": "externalUserId",
  "levelName": "basic-kyc-level",
  "type": "applicantReviewed",
  "reviewResult": {
    "moderationComment": "We could not verify your profile. Please contact support: support@agiodigital.com",
    "clientComment": " Suspected fraudulent account.",
    "reviewAnswer": "RED",
    "rejectLabels": ["UNSATISFACTORY_PHOTOS", "GRAPHIC_EDITOR", "FORGERY"],
    "reviewRejectType": "FINAL"
  },
  "reviewStatus": "completed",
  "createdAt": "2020-02-21 13:23:19+0000"
}
```

#### Example Final Approval

```json
{
  "applicantId": "5cb56e8e0a975a35f333cb83",
  "inspectionId": "5cb56e8e0a975a35f333cb84",
  "correlationId": "req-a260b669-4f14-4bb5-a4c5-ac0218acb9a4",
  "externalUserId": "externalUserId",
  "levelName": "basic-kyc-level",
  "type": "applicantReviewed",
  "reviewResult": {
    "reviewAnswer": "GREEN"
  },
  "reviewStatus": "completed",
  "createdAt": "2020-02-21 13:23:19+0000"
}
```

## KYT Webhook

The KYT (Know Your Transaction) webhook is sent when a wallet's verification status changes. This allows you to track wallet whitelisting status in real-time.

### KYT Webhook Data Fields

| Field              | Type      | Description                                                         |
| ------------------ | --------- | ------------------------------------------------------------------- |
| `id`               | integer   | Unique identifier for the wallet record                             |
| `wallet_address`   | string    | The wallet address that was analyzed                                |
| `external_user_id` | string    | Your internal user identifier                                       |
| `status_id`        | integer   | Current wallet status (see below)                                   |
| `clean_wallet`     | boolean   | Whether the wallet was marked as clean (new wallet with no history) |
| `created_at`       | timestamp | When the wallet was submitted for analysis                          |
| `updated_at`       | timestamp | When the status was last updated                                    |

### KYT Status Codes

| Status ID | Status        | Description                                                                        |
| --------- | ------------- | ---------------------------------------------------------------------------------- |
| `1`       | Pending       | Wallet is being analyzed                                                           |
| `2`       | Approved      | Wallet passed risk analysis and manual review                                      |
| `3`       | Denied        | Wallet failed risk analysis (high risk score, sanctioned addresses, illicit funds) |
| `4`       | Auto-approved | Wallet passed automated risk analysis (low risk score)                             |

### Example KYT Webhook Payload

```json
{
  "id": 12345,
  "wallet_address": "0x1234567890abcdef1234567890abcdef12345678",
  "external_user_id": "user-abc-123",
  "status_id": 4,
  "clean_wallet": false,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:31:45Z"
}
```

### Notes

- Wallets marked as `clean_wallet: true` are automatically assigned `status_id: 4` (Auto-approved)
- All wallets start in `status_id: 1` (Pending) until analysis completes
- Status IDs 2, 3, and 4 are final states
