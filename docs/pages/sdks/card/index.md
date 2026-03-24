---
footer: false
---

# Agio Card SDK

TypeScript SDK for integrating Agio Cards prepaid crypto cards into your application. Agio Cards enable companies to spend directly from their crypto treasury using Visa cards, without off-ramping.

## Installation

::: code-group

```sh [yarn]
yarn add agio-card-sdk
```

```sh [npm]
npm install agio-card-sdk
```

:::

## Quick Start

```typescript
import { createClient } from "agio-card-sdk";

const cards = createClient({
  baseURL: "https://api.agiodigital.com/v1/cards",
  apiKey: "your-api-key"
});

// List users
const { data: users } = await cards.users.getUsers();

// List cards
const { data: cards } = await cards.cards.getCards({ type: "virtual" });

// Check a user's balance (amounts in cents)
const { data: balance } = await cards.balances.getUserBalances("user-id");
console.log(`Spending power: $${balance.spendingPower / 100}`);
```

## Configuration

```typescript
import type { AgioCardConfig } from "agio-card-sdk";

const config: AgioCardConfig = {
  baseURL: string;  // Agio Card API base URL
  apiKey: string;   // Your API key (sent as X-API-Key header)
};
```

| Field     | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| `baseURL` | Agio Card API base URL. Production: `https://api.agiodigital.com/v1/cards` |
| `apiKey`  | Your Agio Card API key. Passed via `X-API-Key` header on every request.    |

The SDK also accepts an optional `axiosInstance` if you need custom interceptors or retry logic.

## Service Modules

The client exposes 13 namespaced service modules:

| Module         | Description                                                                      | Docs                           |
| -------------- | -------------------------------------------------------------------------------- | ------------------------------ |
| `users`        | Create, update, delete users; query balances; charge custom fees                 | [Users](./users)               |
| `cards`        | Create virtual/physical cards; freeze, unfreeze, cancel; manage PINs and secrets | [Cards](./cards)               |
| `applications` | Individual (KYC) and corporate (KYB) application flows                           | [Applications](./applications) |
| `companies`    | Company CRUD, custom charges                                                     | --                             |
| `contracts`    | Smart contract wallet management (multi-chain)                                   | [Smart Contracts](./contracts) |
| `balances`     | Credit balance queries at tenant, company, and user level                        | [Payment System](./payments)   |
| `transactions` | List and retrieve transaction details                                            | --                             |
| `payments`     | Initiate on-chain payments for companies and users                               | [Payment System](./payments)   |
| `webhooks`     | Webhook event history, signature verification, key rotation                      | [Webhooks](./webhooks)         |
| `signatures`   | Payment and withdrawal signature management                                      | --                             |
| `shipping`     | Bulk shipping groups, address validation                                         | --                             |
| `keys`         | API key creation and deletion                                                    | --                             |
| `disputes`     | Transaction dispute lifecycle management                                         | --                             |

All methods are available both via namespace (`cards.cards.getCards()`) and flat access (`cards.getCards()`).

:::warning Amounts in Cents
All monetary amounts in the Agio Card API are expressed in **cents** (smallest currency unit). `50000` = $500.00.
:::

## TypeScript Support

The SDK ships with full TypeScript definitions. See the [Types Reference](./types) for all exported types.

```typescript
import type { AgioCardUser, AgioCard, CreditBalance } from "agio-card-sdk";
```

## Environment Variables

```env
AGIO_CARD_API_URL=https://api.agiodigital.com/v1/cards
AGIO_CARD_API_KEY=your-api-key
```
