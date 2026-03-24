---
footer: false
---

# Webhooks

The Agio Platform uses an event-driven architecture. Webhooks fall into three categories: **external service callbacks** (from third-party providers), **database event triggers** (fired by Hasura when rows change), and **cron triggers** (scheduled jobs).

## Authentication

| Category                | Auth Mechanism                                    |
| ----------------------- | ------------------------------------------------- |
| External (BitGo)        | Payload signature verification (HMAC)             |
| External (Agio Card)    | Payload signature verification                    |
| External (Sumsub)       | Payload signature verification (HMAC-SHA1)        |
| External (Auth0)        | IP allowlist                                      |
| Database event triggers | `x-agio-api-token` header (platform admin secret) |
| Cron triggers           | `x-agio-api-token` header (platform admin secret) |

## External Service Webhooks

These endpoints receive callbacks from third-party services. Each service signs its payloads using a service-specific scheme.

### POST /webhooks/on-insert-bitgo-webhook-payload-transaction

Receives transaction notifications from BitGo. Payloads are signed using BitGo's webhook signature scheme.

- **Auth:** BitGo HMAC signature
- **Triggers:** Wallet balance updates, transaction confirmations, pending approval notifications

**Example payload:**

```json
{
  "hash": "0xabc123...",
  "transfer": "txid_abc123",
  "coin": "eth",
  "type": "transfer",
  "state": "confirmed",
  "walletId": "wallet_abc123"
}
```

---

### POST /webhooks/on-card-webhook

Receives card and payment events from Agio Cards.

- **Auth:** Agio Card payload signature
- **Triggers:** Card status changes, transaction authorizations, settlements, card spend events

**Example payload:**

```json
{
  "eventType": "TRANSACTION_AUTHORIZED",
  "cardId": "card_abc123",
  "amount": 150.0,
  "currency": "USD",
  "merchantName": "Example Merchant",
  "timestamp": "2026-03-23T10:30:00Z"
}
```

---

### POST /webhooks/on-sumsub-webhook-payload

Receives KYC/AML verification events from Sumsub.

- **Auth:** HMAC-SHA1 signature in `x-payload-digest` header
- **Triggers:** Applicant review status changes, document verification results

See the [KYC Webhook Data](/data/webhooks) page for full field reference and status codes.

**Example payload:**

```json
{
  "applicantId": "5cb744200a975a67ed1798a4",
  "inspectionId": "5cb744200a975a67ed1798a5",
  "externalUserId": "auth0|abc123",
  "type": "applicantReviewed",
  "reviewStatus": "completed",
  "reviewResult": {
    "reviewAnswer": "GREEN"
  },
  "createdAt": "2026-03-23T10:30:00+0000"
}
```

---

### POST /webhooks/on-auth0-log-streams

Receives authentication log events from Auth0 Log Streams.

- **Auth:** IP allowlist (Auth0 egress IPs only)
- **Triggers:** Login events, failed authentication attempts, password changes, MFA events

**Example payload:**

```json
{
  "log_id": "90020260323...",
  "data": {
    "type": "s",
    "connection": "Username-Password-Authentication",
    "user_id": "auth0|abc123",
    "ip": "203.0.113.42"
  }
}
```

## Database Event Webhooks

These endpoints are called by Hasura event triggers when database rows are inserted, updated, or deleted. All require the `x-agio-api-token` header.

::: info
Database event webhooks are internal to the platform. They are documented here for completeness but are not intended for external consumption.
:::

### User Lifecycle

| Endpoint                        | Trigger          | Description                                     |
| ------------------------------- | ---------------- | ----------------------------------------------- |
| `POST /webhooks/on-user-insert` | INSERT on `user` | Provisions default wallets, sends welcome email |
| `POST /webhooks/on-user-delete` | DELETE on `user` | Cleans up associated resources                  |

### KYC

| Endpoint                               | Trigger                 | Description                                           |
| -------------------------------------- | ----------------------- | ----------------------------------------------------- |
| `POST /webhooks/on-kyc-profile-update` | UPDATE on `kyc_profile` | Syncs verification status, triggers downstream checks |

### Trading

| Endpoint                                    | Trigger                      | Description                             |
| ------------------------------------------- | ---------------------------- | --------------------------------------- |
| `POST /webhooks/on-trade-request-update`    | UPDATE on `trade_request`    | Processes trade state transitions       |
| `POST /webhooks/on-trade-settlement-update` | UPDATE on `trade_settlement` | Finalizes settlements, updates balances |

### Wallets

| Endpoint                                  | Trigger                    | Description                   |
| ----------------------------------------- | -------------------------- | ----------------------------- |
| `POST /webhooks/on-digital-wallet-update` | UPDATE on `digital_wallet` | Syncs wallet metadata changes |

### Transactions

| Endpoint                                     | Trigger                       | Description                              |
| -------------------------------------------- | ----------------------------- | ---------------------------------------- |
| `POST /webhooks/on-asset-transaction-insert` | INSERT on `asset_transaction` | Triggers notifications, updates balances |

### Invoicing

| Endpoint                                   | Trigger                     | Description                                  |
| ------------------------------------------ | --------------------------- | -------------------------------------------- |
| `POST /webhooks/on-invoice-payment-insert` | INSERT on `invoice_payment` | Marks invoices paid, sends receipt           |
| `POST /webhooks/on-invoice-reminder`       | Scheduled                   | Sends payment reminders for overdue invoices |

### Cards

| Endpoint                          | Trigger   | Description                             |
| --------------------------------- | --------- | --------------------------------------- |
| `POST /webhooks/on-card-reminder` | Scheduled | Sends card expiry and balance reminders |

### Fiat Operations

| Endpoint                                           | Trigger                             | Description                            |
| -------------------------------------------------- | ----------------------------------- | -------------------------------------- |
| `POST /webhooks/on-fiat-deposit-request-update`    | UPDATE on `fiat_deposit_request`    | Processes deposit state transitions    |
| `POST /webhooks/on-fiat-withdrawal-request-update` | UPDATE on `fiat_withdrawal_request` | Processes withdrawal state transitions |

## Cron Triggers

Scheduled jobs executed at fixed intervals via Hasura cron triggers. All require the `x-agio-api-token` header.

| Job                | Schedule        | Description                                          |
| ------------------ | --------------- | ---------------------------------------------------- |
| Coin price sync    | Every 15 min    | Fetches latest prices from exchanges and aggregators |
| Currency rate sync | Every 15 min    | Updates fiat currency exchange rates                 |
| Midnight jobs      | Daily 00:00 UTC | Portfolio snapshots, report generation, cleanup      |
| Reaper jobs        | Every 6 hours   | Webhook health checks, stale data reconciliation     |
