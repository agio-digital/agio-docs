---
footer: false
---

# Cards

Create and manage virtual and physical Visa cards backed by on-chain stablecoin collateral.

## Create a Card

Cards are created per-user via `POST /users/{userId}/cards`:

```typescript
// Virtual card (available immediately)
const { data: card } = await rain.cards.createCard({
  userId: "user-id",
  type: "virtual",
  limit: { amount: 50000, frequency: "per30DayPeriod" } // $500/month
});

// Physical card (requires shipping address)
const { data: physicalCard } = await rain.cards.createCard({
  userId: "user-id",
  type: "physical",
  shipping: {
    firstName: "Jane",
    lastName: "Smith",
    phoneNumber: "+15555551234",
    line1: "123 Main St",
    city: "Miami",
    region: "FL",
    postalCode: "33101",
    countryCode: "US"
  },
  configuration: {
    displayName: "JANE SMITH"
  }
});
```

## Get and List Cards

```typescript
// List all cards
const { data: cards } = await rain.cards.getCards();

// Filter by type, status, user, or company
const { data: virtualCards } = await rain.cards.getCards({
  type: "virtual",
  userId: "user-id",
  status: "active",
  limit: 50
});

// Get a single card
const { data: card } = await rain.cards.getCard("card-id");
```

## Update a Card

```typescript
await rain.cards.updateCard("card-id", {
  limit: { amount: 100000, frequency: "per30DayPeriod" },
  billing: {
    line1: "456 Oak Ave",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    countryCode: "US"
  }
});
```

## Freeze, Unfreeze, and Cancel

```typescript
// Temporarily lock (reversible)
await rain.cards.freezeCard("card-id");

// Restore to active
await rain.cards.unfreezeCard("card-id");

// Permanently cancel (irreversible)
await rain.cards.cancelCard("card-id");
```

## Replace a Virtual Card

Generates a new card number for an existing virtual card:

```typescript
const { data: newCard } = await rain.cards.replaceVirtualCard("card-id");
```

## Card Secrets

Card PAN and CVC are encrypted using RSA + AES-128-GCM. The SDK handles the full encryption flow:

1. Generate a session context (RSA-OAEP encrypted secret)
2. Fetch AES-128-GCM encrypted card data from Rain
3. Decrypt locally using the session secret

```typescript
// Reveal card secrets (PAN, CVC, expiry)
const secrets = await rain.cards.revealCardSecrets("card-id", sessionPublicKey);

console.log(secrets.pan); // Full card number
console.log(secrets.cvc); // Security code
console.log(secrets.expiry); // { month: "12", year: "2028" }
```

:::danger Security
Never store decrypted card secrets. Only request them when absolutely necessary for display to the cardholder.
:::

## PIN Management

PINs use the same encrypted session protocol:

```typescript
// Set or update PIN
await rain.cards.setCardPin("card-id", "1234", sessionPublicKey);

// Retrieve current PIN
const pin = await rain.cards.getCardPin("card-id", sessionPublicKey);
```

## Spending Limits

Limits are rolling -- purchases from the defined period count against the limit and fall off as they age past the boundary.

```typescript
await rain.cards.updateCard("card-id", {
  limit: {
    amount: 200000, // $2,000.00 in cents
    frequency: "per30DayPeriod" // Rolling 30-day window
  }
});
```

| Frequency         | Description            |
| ----------------- | ---------------------- |
| `per24HourPeriod` | Rolling 24-hour window |
| `perWeek`         | Rolling 7-day window   |
| `perMonth`        | Rolling 30-day window  |
| `perYear`         | Rolling 365-day window |
| `perTransaction`  | Per-transaction cap    |
| `allTime`         | Lifetime total limit   |

:::warning Amounts in Cents
All limit amounts are in cents. `200000` = $2,000.00.
:::

## Virtual vs Physical Cards

| Feature             | Virtual                         | Physical                         |
| ------------------- | ------------------------------- | -------------------------------- |
| **Availability**    | Instant                         | Ships globally (free)            |
| **Replacement**     | `replaceVirtualCard()`          | Reorder required                 |
| **Cancellation**    | Permanent                       | Permanent                        |
| **Use Cases**       | Online purchases, subscriptions | In-person, ATM, tap-to-pay       |
| **Spending Limits** | Configurable                    | Configurable                     |
| **Shipping**        | Not required                    | Required (address or bulk group) |

## Display Name Rules

The `displayName` field on card configuration has strict requirements:

- Maximum **21 characters**
- Alphanumeric characters and spaces only
- No special characters or symbols

```typescript
import { validateDisplayName, sanitizeDisplayName } from "rain-sdk";

const result = validateDisplayName("JANE SMITH");
if (!result.isValid) {
  const clean = sanitizeDisplayName("JANE SMITH #1");
  // Returns: "JANE SMITH 1"
}
```

## Card Statuses

| Status         | Description                    | Reversible     |
| -------------- | ------------------------------ | -------------- |
| `notActivated` | Issued but requires activation | Yes            |
| `active`       | Fully functional               | --             |
| `locked`       | Temporarily frozen             | Yes (unfreeze) |
| `canceled`     | Permanently disabled           | No             |
