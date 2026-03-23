---
footer: false
---

# Rain SDK

TypeScript SDK for integrating [Rain Cards](https://raincards.xyz) corporate crypto cards into your application. Rain enables companies to spend directly from their crypto treasury using Visa cards, without off-ramping.

## Installation

::: code-group

```sh [yarn]
yarn add rain-sdk
```

```sh [npm]
npm install rain-sdk
```

:::

## Quick Start

```typescript
import { createClient } from "rain-sdk";

const rain = createClient({
  baseURL: "https://api.raincards.xyz/v1/issuing",
  apiKey: "your-api-key"
});

// List users
const { data: users } = await rain.users.getUsers();

// List cards
const { data: cards } = await rain.cards.getCards({ type: "virtual" });

// Check a user's balance (amounts in cents)
const { data: balance } = await rain.balances.getUserBalances("user-id");
console.log(`Spending power: $${balance.spendingPower / 100}`);
```

## Configuration

```typescript
import type { RainConfig } from "rain-sdk";

const config: RainConfig = {
  baseURL: string;  // Rain API base URL
  apiKey: string;   // Your API key (sent as Api-Key header)
};
```

| Field     | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `baseURL` | Rain API base URL. Production: `https://api.raincards.xyz/v1/issuing` |
| `apiKey`  | Your Rain API key. Passed via `Api-Key` header on every request.      |

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

All methods are available both via namespace (`rain.cards.getCards()`) and flat access (`rain.getCards()`).

:::warning Amounts in Cents
All monetary amounts in the Rain API are expressed in **cents** (smallest currency unit). `50000` = $500.00.
:::

## TypeScript Support

The SDK ships with full TypeScript definitions. See the [Types Reference](./types) for all exported types.

```typescript
import type { RainUser, RainCard, CreditBalance } from "rain-sdk";
```

## Environment Variables

```env
RAIN_API_URL=https://api.raincards.xyz/v1/issuing
RAIN_API_KEY=your-api-key
```
