---
footer: false
---

# Sumsub Node SDK

Modern TypeScript/JavaScript SDK for the [Sumsub](https://sumsub.com/) KYC/AML platform. Provides full coverage of the Sumsub REST API with typed requests, responses, and standalone webhook validation.

## Installation

```bash
yarn add sumsub-node-sdk
```

```bash
npm install sumsub-node-sdk
```

## Quick Start

```ts
import { createClient } from "sumsub-node-sdk";

const sumsub = createClient({
  baseURL: "https://api.sumsub.com",
  secretKey: process.env.SUMSUB_SECRET_KEY,
  appToken: process.env.SUMSUB_APP_TOKEN
});

// Create an applicant
const { data: applicant } = await sumsub.createApplicant("user-123", "basic-kyc-level");

// Generate a Web SDK access token
const { data: token } = await sumsub.generateAccessToken("user-123", "basic-kyc-level");
```

### Default Export

A pre-configured client is also available, reading from environment variables:

```ts
import { sdk } from "sumsub-node-sdk";

// Uses SUMSUB_BASE_URL, SUMSUB_SECRET_KEY, SUMSUB_APP_TOKEN
const { data } = await sdk.getApplicant("applicant-id");
```

## Configuration

```ts
interface SumsubConfig {
  /** Sumsub API base URL (e.g. "https://api.sumsub.com") */
  baseURL: string;
  /** Secret key for HMAC request signing */
  secretKey: string;
  /** App token for authentication */
  appToken: string;
  /** Optional custom Axios instance */
  axiosInstance?: AxiosInstance;
}
```

All requests are automatically signed with HMAC authentication via an Axios interceptor.

## Dual API Pattern

The SDK exposes every method in two ways:

### Flat API (backward compatible)

Methods are available directly on the client object:

```ts
const sumsub = createClient(config);
await sumsub.createApplicant("user-123", "basic-kyc-level");
await sumsub.submitTransaction("applicant-id", txnBody);
await sumsub.validateWebhook(webhookOptions);
```

### Namespaced API (recommended)

Methods are grouped by service module for better discoverability:

```ts
const sumsub = createClient(config);
await sumsub.applicants.createApplicant("user-123", "basic-kyc-level");
await sumsub.transactions.submitTransaction("applicant-id", txnBody);
await sumsub.webhooks.validateWebhook(webhookOptions);
```

Both patterns call the same underlying implementation. Use namespaced for new code.

## Service Modules

| Module                                    | Namespace      | Description                                              |
| ----------------------------------------- | -------------- | -------------------------------------------------------- |
| [Applicants](/sdks/sumsub/applicants)     | `applicants`   | Create, retrieve, update, and manage applicant lifecycle |
| Documents                                 | `documents`    | Upload identity documents and retrieve document images   |
| [Transactions](/sdks/sumsub/transactions) | `transactions` | Submit and monitor KYT transactions                      |
| Web SDK                                   | `websdk`       | Generate Web SDK integration links                       |
| [Webhooks](/sdks/sumsub/webhooks)         | `webhooks`     | Validate incoming webhook signatures                     |
| Crypto                                    | -              | Cryptocurrency-specific operations                       |
| Questionnaire                             | -              | Questionnaire management                                 |
| Travel Rule                               | `travelRule`   | Travel rule compliance                                   |

## Module Compatibility

The SDK ships as dual CJS/ESM:

| Format     | Entry Point       |
| ---------- | ----------------- |
| CommonJS   | `dist/index.cjs`  |
| ES Modules | `dist/index.mjs`  |
| TypeScript | `dist/index.d.ts` |

```ts
// ESM
import { createClient } from "sumsub-node-sdk";

// CJS
const { createClient } = require("sumsub-node-sdk");
```

## Requirements

- Node.js >= 18.0.0
- TypeScript >= 4.7 (for type imports)

## Additional Resources

- [Applicant Management](/sdks/sumsub/applicants) - Create and manage applicants, generate access tokens
- [Transaction Monitoring](/sdks/sumsub/transactions) - Submit and review KYT transactions
- [Webhooks](/sdks/sumsub/webhooks) - Validate webhook signatures with Express.js examples
- [TypeScript Types](/sdks/sumsub/types) - Full type reference for all request/response objects
