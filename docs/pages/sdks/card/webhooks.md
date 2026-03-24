---
footer: false
---

# Webhooks

Receive real-time notifications for Agio events and verify their authenticity using HMAC-SHA256 signatures.

## Webhook Event History

Query past webhook events delivered to your endpoint:

```typescript
// Get all webhook events
const { data: events } = await cards.webhooks.getWebhooks();

// Filter by resource, action, or time range
const { data: events } = await cards.webhooks.getWebhooks({
  resourceType: "transaction",
  resourceAction: "created",
  requestSentAtAfter: "2026-01-01T00:00:00Z",
  limit: 50
});

// Get a specific webhook event
const { data: event } = await cards.webhooks.getWebhook("webhook-event-id");
```

### WebhookEvent Structure

```typescript
interface WebhookEvent {
  id: string;
  requestBody: RainWebhook; // The webhook payload
  requestSentAt: string; // When Agio sent the webhook
  responseReceivedAt?: string; // When your server responded
  responseStatus?: number; // Your server's HTTP status
  responseBody?: unknown; // Your server's response
  attemptCount?: number; // Delivery attempt number
}
```

## Verify Webhook Signatures

Agio signs every webhook payload with HMAC-SHA256 using your API key. Always verify signatures before processing.

```typescript
const isValid = cards.webhooks.verifyWebhookSignature(
  requestBody, // Raw request body (string or object)
  signature // Value from the "signature" header
);
```

The SDK uses timing-safe comparison to prevent timing attacks.

## Parse Webhook Payloads

```typescript
const webhook = cards.webhooks.parseWebhook(requestBody);

console.log(webhook.id); // Webhook event ID
console.log(webhook.resource); // "transaction", "card", "collateral", etc.
console.log(webhook.action); // "created", "updated", "completed", etc.
console.log(webhook.body); // Event-specific payload
```

### Webhook Resources and Actions

| Resource      | Actions                                        | Description                                      |
| ------------- | ---------------------------------------------- | ------------------------------------------------ |
| `transaction` | `requested`, `created`, `updated`, `completed` | Spend, collateral, payment, and fee transactions |
| `card`        | `created`, `updated`                           | Card status changes                              |
| `collateral`  | `created`, `updated`, `completed`              | Collateral deposits and withdrawals              |
| `company`     | `created`, `updated`                           | Company status changes                           |
| `user`        | `created`, `updated`                           | User status changes                              |
| `contract`    | `created`, `updated`                           | Smart contract events                            |
| `report`      | `created`, `completed`                         | Report generation events                         |
| `disputes`    | `created`, `updated`                           | Dispute lifecycle events                         |

## Express.js Handler Example

```typescript
import express from "express";
import { createClient } from "agio-card-sdk";

const app = express();
const cards = createClient({ baseURL, apiKey });

app.post("/webhooks/cards", express.json(), (req, res) => {
  const signature = req.headers["signature"] as string;

  if (!signature) {
    return res.status(400).json({ error: "Missing signature header" });
  }

  const isValid = cards.webhooks.verifyWebhookSignature(req.body, signature);
  if (!isValid) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  const webhook = cards.webhooks.parseWebhook(req.body);

  switch (`${webhook.resource}.${webhook.action}`) {
    case "transaction.created":
      handleNewTransaction(webhook.body);
      break;
    case "card.updated":
      handleCardUpdate(webhook.body);
      break;
    case "collateral.completed":
      handleCollateralDeposit(webhook.body);
      break;
  }

  res.json({ received: true });
});
```

## Signing Key Rotation

Rotate webhook signing keys without downtime using the two-step process:

### Step 1: Create a Secondary Key

```typescript
const { data: keyResponse } = await cards.webhooks.createSecondarySigningKey();

console.log(keyResponse.currentSigningApiKey.name); // Current primary
console.log(keyResponse.newSecondarySigningApiKey.key); // New secondary key
```

Update your webhook handler to accept signatures from either key during the transition.

### Step 2: Promote Secondary to Primary

Once you have verified the secondary key works:

```typescript
const { data: promoted } = await cards.webhooks.promoteSecondaryKeyToPrimary();

console.log(promoted.oldPrimarySigningApiKey.name); // Deleted
console.log(promoted.newPrimarySigningApiKey.key); // Now primary
```

:::danger
Promoting the secondary key **deletes** the old primary key. Verify your handler works with the secondary key before promoting.
:::

## Signature Key Scopes

Signature keys can be managed at three scopes for payment and withdrawal operations:

```typescript
// Company scope
await cards.signatures.getCompanyPaymentSignature("company-id", params);
await cards.signatures.getCompanyWithdrawalSignature("company-id", params);

// Tenant scope
await cards.signatures.getTenantPaymentSignature("tenant-id", params);
await cards.signatures.getTenantWithdrawalSignature("tenant-id", params);

// User scope
await cards.signatures.getUserPaymentSignature("user-id", params);
await cards.signatures.getUserWithdrawalSignature("user-id", params);
```

### SignatureParams

```typescript
interface SignatureParams {
  token: string; // Token contract address
  amount: string; // Amount in token units
  adminAddress: string; // Admin wallet address
  chainId?: number; // Target chain ID
  isAmountNative?: boolean;
  rainCollateralContractId?: string;
  recipientAddress?: string; // Required for withdrawals
}
```

Signatures are returned as either `ready` (with `data` and `salt`) or `pending` (with optional `retryAfter`).
