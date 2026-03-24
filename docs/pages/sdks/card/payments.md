---
footer: false
---

# Payment System

Agio Cards operate as a **prepaid card system** backed by stablecoins. Your crypto collateral secures your credit line, eliminating default risk while enabling fiat spending.

## How It Works

1. **Deposit collateral** -- Send supported stablecoins to your on-chain contract
2. **Spend with cards** -- Agio fronts fiat payments to merchants when you swipe
3. **Collateral stays on-chain** -- Your crypto remains untouched during the billing period
4. **Monthly statement** -- At month end, you receive a statement with total balance owed
5. **8-day grace period** -- Pay off the balance manually within 8 days
6. **Auto-liquidation** -- If unpaid, Agio liquidates the owed amount from your collateral
7. **Remainder carries forward** -- Remaining collateral stays available for next month

## Collateral Rates

Each supported stablecoin has a rate determining the collateral-to-credit ratio:

| Asset | Rate | Meaning                    |
| ----- | ---- | -------------------------- |
| USDC  | 1.0  | $1 USDC = $1 credit limit  |
| PYUSD | 1.0  | $1 PYUSD = $1 credit limit |

```
Credit Limit = Collateral Balance x Rate
```

For stablecoins, the rate is 1:1. No defaults are possible because the credit limit always equals the collateral value.

## CreditBalance

Query balances at tenant, company, or user level. All amounts are in **cents**.

```typescript
// Tenant-level balance
const { data: tenantBalance } = await cards.balances.getTenantBalances();

// Company-level balance
const { data: companyBalance } = await cards.balances.getCompanyBalances("company-id");

// User-level balance
const { data: userBalance } = await cards.balances.getUserBalances("user-id");
```

### CreditBalance Interface

```typescript
interface CreditBalance {
  creditLimit: number; // Maximum credit available (cents)
  pendingCharges: number; // Authorized but not posted transactions (cents)
  postedCharges: number; // Completed and settled transactions (cents)
  balanceDue: number; // Total amount currently owed (cents)
  spendingPower: number; // Available credit to spend (cents)
}
```

| Field            | Description                        | Example           |
| ---------------- | ---------------------------------- | ----------------- |
| `creditLimit`    | Maximum credit based on collateral | `100000` ($1,000) |
| `pendingCharges` | Authorized but not yet settled     | `5000` ($50)      |
| `postedCharges`  | Completed, settled transactions    | `3000` ($30)      |
| `balanceDue`     | Total currently owed               | `8000` ($80)      |
| `spendingPower`  | Available credit remaining         | `92000` ($920)    |

```
spendingPower = creditLimit - balanceDue
```

## Initiate Payments

Initiate on-chain payments for companies or individual users:

```typescript
// Company payment
const { data: payment } = await cards.payments.initiateCompanyPayment("company-id", {
  amount: 50000, // $500.00 in cents
  walletAddress: "0x...",
  chainId: 1 // Ethereum mainnet
});

// User payment
const { data: payment } = await cards.payments.initiateUserPayment("user-id", {
  amount: 25000,
  walletAddress: "0x...",
  chainId: 137 // Polygon
});
```

## Fees and Custom Charges

### Platform Fees

Agio charges platform fees (monthly/annual) directly. These appear as webhook events with `transactionType: "fee"`.

### Custom Charges

Apply custom fees to users via the charge API. Charges are **per-user, not per-card**.

```typescript
await cards.users.chargeUser("user-id", {
  amount: 2550, // $25.50 in cents
  description: "Monthly service fee"
});
```

```
Spending Power = Credit Limit - Pending - Posted - Fees + Payments
```

Fees reduce the credit balance (spending power), not the collateral directly. Collateral is only liquidated during the monthly auto-liquidation cycle.

:::warning
Custom charges are post-authorization and may cause a user's balance to go negative. The Agio charge API does not accept an idempotency key -- implement your own deduplication logic.
:::

## Supported Stablecoins

- USDC (Circle)
- PYUSD (PayPal USD)
- Glow Dollar

## Supported Chains

- Ethereum Mainnet
- Polygon
- Base, Optimism, Arbitrum (coming soon)

## Infrastructure Flow

Under the hood, Agio's payment infrastructure works as follows:

1. **Borrowing** -- Agio borrows from on-chain lenders (Credit Coop, Huma Finance) against receivables
2. **Off-ramping** -- Stablecoins are off-ramped through issuers (e.g., Circle for USDC)
3. **Settlement** -- Agio settles with Visa and merchants in fiat
4. **Reconciliation** -- At month end, balances are reconciled against collateral
