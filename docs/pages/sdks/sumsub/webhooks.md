---
footer: false
---

# Webhooks

Validate incoming Sumsub webhook signatures to ensure payload integrity and authenticity.

## Standalone Functions

The webhook validation functions are exported directly from the package and do not require a client instance. This is the recommended approach for webhook handlers.

```ts
import { validateWebhook, isValidWebhook } from "sumsub-node-sdk";
```

### validateWebhook

Returns a detailed validation result with digest comparison data. Throws if required headers are missing or the algorithm is unsupported.

```ts
import { validateWebhook } from "sumsub-node-sdk";

const result = validateWebhook({
  secretKey: process.env.SUMSUB_WEBHOOK_SECRET_KEY,
  payload: requestBody, // Buffer or string
  headers: {
    "x-payload-digest": req.headers["x-payload-digest"],
    "x-payload-digest-alg": req.headers["x-payload-digest-alg"]
  }
});

if (result.isValid) {
  // Process the webhook
} else {
  // Reject — digest mismatch
  console.error("Expected:", result.calculatedDigest);
  console.error("Received:", result.receivedDigest);
}
```

### isValidWebhook

Returns a simple boolean. Returns `false` (instead of throwing) on missing headers or unsupported algorithms.

```ts
import { isValidWebhook } from "sumsub-node-sdk";

const valid = isValidWebhook({
  secretKey: process.env.SUMSUB_WEBHOOK_SECRET_KEY,
  payload: requestBody,
  headers: {
    "x-payload-digest": req.headers["x-payload-digest"],
    "x-payload-digest-alg": req.headers["x-payload-digest-alg"]
  }
});

if (!valid) {
  return res.status(401).json({ error: "Invalid signature" });
}
```

## Interfaces

### WebhookValidationOptions

```ts
interface WebhookValidationOptions {
  /** Webhook-specific secret key (NOT the app secret key) */
  secretKey: string;
  /** Raw request body as Buffer or UTF-8 string */
  payload: Buffer | string;
  /** Required Sumsub webhook headers */
  headers: WebhookHeaders;
}
```

### WebhookHeaders

```ts
interface WebhookHeaders {
  "x-payload-digest": string;
  "x-payload-digest-alg": WebhookDigestAlgorithm;
}
```

### WebhookValidationResult

```ts
interface WebhookValidationResult {
  /** Whether the calculated digest matches the received digest */
  isValid: boolean;
  /** HMAC digest computed from the payload and secret key */
  calculatedDigest: string;
  /** Digest value from the x-payload-digest header */
  receivedDigest: string;
  /** Algorithm used for the digest */
  algorithm: WebhookDigestAlgorithm;
}
```

### WebhookDigestAlgorithm

```ts
type WebhookDigestAlgorithm =
  | "HMAC_SHA1_HEX" // Legacy — avoid for new integrations
  | "HMAC_SHA256_HEX" // Recommended
  | "HMAC_SHA512_HEX";
```

## Required Headers

Sumsub sends two headers with every webhook request:

| Header                 | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| `x-payload-digest`     | HMAC hex digest of the request body                                      |
| `x-payload-digest-alg` | Algorithm used: `HMAC_SHA256_HEX`, `HMAC_SHA512_HEX`, or `HMAC_SHA1_HEX` |

Both headers must be present for validation. `validateWebhook` throws an error if either is missing; `isValidWebhook` returns `false`.

## Supported Algorithms

| Algorithm         | Hash    | Status                              |
| ----------------- | ------- | ----------------------------------- |
| `HMAC_SHA256_HEX` | SHA-256 | Recommended                         |
| `HMAC_SHA512_HEX` | SHA-512 | Supported                           |
| `HMAC_SHA1_HEX`   | SHA-1   | Legacy (avoid for new integrations) |

## Express.js Example

A complete webhook handler with raw body parsing:

```ts
import express from "express";
import { validateWebhook } from "sumsub-node-sdk";

const app = express();

// Sumsub webhooks require the raw body for signature validation.
// Parse JSON for all other routes, but capture raw body on the webhook path.
app.post("/webhooks/sumsub", express.raw({ type: "application/json" }), (req, res) => {
  try {
    const result = validateWebhook({
      secretKey: process.env.SUMSUB_WEBHOOK_SECRET_KEY,
      payload: req.body, // Buffer from express.raw()
      headers: {
        "x-payload-digest": req.headers["x-payload-digest"] as string,
        "x-payload-digest-alg": req.headers["x-payload-digest-alg"] as string
      }
    });

    if (!result.isValid) {
      return res.status(401).json({ error: "Invalid webhook signature" });
    }

    const event = JSON.parse(req.body.toString());

    switch (event.type) {
      case "applicantReviewed":
        // Handle verification completion
        break;
      case "applicantPending":
        // Handle applicant ready for review
        break;
      case "applicantCreated":
        // Handle new applicant
        break;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Webhook validation error:", err.message);
    res.status(400).json({ error: err.message });
  }
});
```

::: warning Security Note
Use the **webhook-specific secret key** configured in Sumsub's webhook settings, not your application's API secret key. These are different credentials.
:::

## Client Instance Access

Webhook validation is also available via the client for consistency with other SDK methods:

```ts
// Namespaced
sumsub.webhooks.validateWebhook(options);
sumsub.webhooks.isValidWebhook(options);

// Flat
sumsub.validateWebhook(options);
sumsub.isValidWebhook(options);
```

The client methods call the same underlying functions as the standalone exports. No HTTP client or authentication is required for webhook validation.
