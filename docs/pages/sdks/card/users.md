---
footer: false
---

# Users

Manage Agio cardholders -- create, update, delete users and query their balances.

## List Users

```typescript
const { data: users } = await cards.users.getUsers();
```

Returns an array of `AgioCardUser` objects.

## Get a User

```typescript
const { data: user } = await cards.users.getUser("user-id");

console.log(user.firstName); // "Jane"
console.log(user.role); // "cardholder"
console.log(user.status); // "active"
```

## Create a User

```typescript
const { data: user } = await cards.users.createUser({
  firstName: "Jane",
  lastName: "Smith",
  email: "jane@example.com",
  role: "cardholder"
});
```

| Field       | Type   | Required | Description                             |
| ----------- | ------ | -------- | --------------------------------------- |
| `firstName` | string | Yes      | User's first name                       |
| `lastName`  | string | Yes      | User's last name                        |
| `email`     | string | Yes      | User's email address                    |
| `role`      | string | Yes      | `"owner"`, `"admin"`, or `"cardholder"` |
| `companyId` | string | No       | Associate user with a company           |

## Update a User

```typescript
await cards.users.updateUser("user-id", {
  firstName: "Janet",
  phoneCountryCode: "1",
  phoneNumber: "5555551234",
  walletAddress: "0x..."
});
```

Updatable fields include `firstName`, `lastName`, `email`, `role`, `isActive`, `isTermsOfServiceAccepted`, `address`, `phoneCountryCode`, `phoneNumber`, `walletAddress`, `solanaAddress`, `tronAddress`, and `stellarAddress`.

## Delete a User

```typescript
await cards.users.deleteUser("user-id");
```

## Get User Balance

```typescript
const { data: balance } = await cards.users.getUserBalance("user-id");

console.log(`Credit limit: $${balance.creditLimit / 100}`);
console.log(`Spending power: $${balance.spendingPower / 100}`);
console.log(`Balance due: $${balance.balanceDue / 100}`);
```

See the [Payment System](./payments) page for full details on the credit balance model.

## Create User in Company (Corporate Flow)

After a corporate application is approved, add employees to the company. The `initialUser` from the application is created automatically -- this endpoint is for additional users.

```typescript
const { data: user } = await cards.users.createUserInCompany("company-id", {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane@company.com",
  isTermsOfServiceAccepted: true,
  birthDate: "1990-05-15",
  walletAddress: "0x...",
  phoneCountryCode: "1",
  phoneNumber: "5555551234"
});

// Then issue a card for the new user
const { data: card } = await cards.cards.createCard({
  userId: user.id,
  type: "virtual",
  limit: { amount: 50000, frequency: "per30DayPeriod" }
});
```

| Field                      | Type        | Required | Description           |
| -------------------------- | ----------- | -------- | --------------------- |
| `firstName`                | string      | Yes      | Max 50 characters     |
| `lastName`                 | string      | Yes      | Max 50 characters     |
| `email`                    | string      | Yes      | Employee email        |
| `isTermsOfServiceAccepted` | boolean     | Yes      | Must be `true`        |
| `birthDate`                | string      | No       | `YYYY-MM-DD` format   |
| `walletAddress`            | string      | No       | EVM wallet address    |
| `solanaAddress`            | string      | No       | Solana wallet address |
| `address`                  | RainAddress | No       | Physical address      |
| `phoneCountryCode`         | string      | No       | e.g. `"1"` for US     |
| `phoneNumber`              | string      | No       | Without country code  |

## Charge a User

Apply custom fees to a user's account. Charges are **per-user, not per-card** and reduce the user's spending power.

```typescript
await cards.users.chargeUser("user-id", {
  amount: 500, // $5.00 in cents
  description: "Express shipping fee"
});
```

:::warning
Custom charges are post-authorization and may cause a user's balance to go negative. The Agio charge API does not accept an idempotency key -- implement your own deduplication logic.
:::

## User Roles

| Role         | Description                              |
| ------------ | ---------------------------------------- |
| `owner`      | Full control including admin management  |
| `admin`      | Create cards, manage members, set limits |
| `cardholder` | Use assigned cards, view own expenses    |

## User Statuses

| Status     | Description                     |
| ---------- | ------------------------------- |
| `active`   | Fully functional user           |
| `inactive` | Disabled user                   |
| `pending`  | Awaiting activation or approval |
