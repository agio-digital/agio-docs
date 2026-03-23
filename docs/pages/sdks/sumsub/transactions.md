---
footer: false
---

# Transaction Monitoring (KYT)

Submit, query, and review transactions for Know Your Transaction (KYT) compliance monitoring.

## Submit a Transaction

Submit a transaction for an existing applicant. The transaction is scored against your configured rules.

```ts
const { data: result } = await sumsub.transactions.submitTransaction("applicant-id", {
  txnId: "txn-abc-123",
  type: "finance",
  info: {
    direction: "out",
    amount: 1500.0,
    currencyCode: "USD",
    currencyType: "fiat"
  },
  counterparty: {
    fullName: "Acme Corp",
    type: "company",
    paymentMethod: {
      type: "bankAccount",
      accountId: "GB29NWBK60161331926819"
    }
  }
});

console.log(result.txnId); // "txn-abc-123"
console.log(result.riskScore); // Numeric risk score
console.log(result.riskLevel); // "low" | "medium" | "high" | ...
```

**SubmitTransactionBody fields:**

| Field          | Type                     | Required | Description                                                       |
| -------------- | ------------------------ | -------- | ----------------------------------------------------------------- |
| `txnId`        | `string`                 | Yes      | Your unique transaction identifier                                |
| `type`         | `TransactionType`        | Yes      | `"finance"` \| `"kyc"` \| `"travelRule"` \| `"userPlatformEvent"` |
| `txnDate`      | `string`                 | No       | Transaction date (ISO 8601)                                       |
| `info`         | `TransactionInfo`        | No       | Amount, currency, direction, payment details                      |
| `applicant`    | `TransactionParticipant` | No       | Sender/originator details                                         |
| `counterparty` | `TransactionParticipant` | No       | Receiver/beneficiary details                                      |
| `props`        | `Record<string, string>` | No       | Custom key-value properties                                       |

### Submit for Non-Existing Applicant

Submit a transaction that will auto-create the applicant profile:

```ts
const { data } = await sumsub.transactions.submitTransactionForNonExisting({
  levelName: "kyt-level",
  txnId: "txn-xyz-789",
  type: "finance",
  info: {
    direction: "in",
    amount: 500,
    currencyCode: "BTC",
    currencyType: "crypto"
  }
});
```

## Get Transaction

Retrieve a transaction by its Sumsub internal ID.

```ts
const { data: txn } = await sumsub.transactions.getTransaction("sumsub-txn-id");

console.log(txn.data.txnId); // Your original txnId
console.log(txn.score); // Risk score
console.log(txn.review); // Review status and result
console.log(txn.scoringResult); // Matched rules and scoring details
```

### Get by Your Transaction ID

Look up a transaction using the `txnId` you provided at submission:

```ts
const { data: txn } = await sumsub.transactions.getTransactionByTxnId("txn-abc-123");
```

## Find Transactions

Search and filter transactions with pagination.

```ts
const { data: results } = await sumsub.transactions.findTransactions({
  limit: 50,
  order: "-createdAt",
  "data.type": "finance",
  "data.info.direction": "out"
});

console.log(results.list.items); // Array of transactions
console.log(results.list.totalItems); // Total matching count
```

**FindTransactionsQuery fields:**

| Field                                    | Type     | Description                                 |
| ---------------------------------------- | -------- | ------------------------------------------- |
| `limit`                                  | `number` | Max results to return                       |
| `order`                                  | `string` | Sort order (prefix with `-` for descending) |
| `data.type`                              | `string` | Filter by transaction type                  |
| `data.info.direction`                    | `string` | Filter by `"in"` or `"out"`                 |
| `data.info.paymentTxnId`                 | `string` | Filter by payment transaction ID            |
| `data.applicant.paymentMethod.accountId` | `string` | Filter by account ID                        |

## Delete a Transaction

```ts
const { data } = await sumsub.transactions.deleteTransaction("sumsub-txn-id");
```

## Approve / Reject Transactions

### Approve

```ts
const { data } = await sumsub.transactions.approveTransaction("sumsub-txn-id", { clientComment: "Verified manually by compliance team" });
```

### Reject

```ts
const { data } = await sumsub.transactions.rejectTransaction("sumsub-txn-id", {
  rejectLabels: ["sanctions_hit", "high_risk_jurisdiction"],
  clientComment: "Counterparty flagged in sanctions list"
});
```

Both methods set the transaction review to `completed` with the appropriate `reviewAnswer` (`GREEN` for approve, `RED` for reject).

## Payment Methods

Register a payment method for an applicant to associate with future transactions.

```ts
const { data: method } = await sumsub.transactions.addPaymentMethod("applicant-id", {
  externalId: "pm-001",
  data: {
    type: "cryptoWallet",
    accountIdentifier: "0x1234...abcd",
    currencyCode: "ETH"
  }
});
```

**Supported payment method types:** `bankCard` | `bankAccount` | `eWallet` | `cryptoWallet` | `other`

## Bulk Import

Import multiple transactions at once using NDJSON format (handled automatically).

```ts
const { data } = await sumsub.transactions.bulkTransactionImport([
  {
    applicantId: "applicant-1",
    data: { txnId: "bulk-001", type: "finance", info: { amount: 100, currencyCode: "USD" } }
  },
  {
    applicantId: "applicant-2",
    data: { txnId: "bulk-002", type: "finance", info: { amount: 250, currencyCode: "EUR" } }
  }
]);

console.log(data.createdCnt); // Number of transactions created
```

## Transaction Notes

Add, edit, and remove notes on transactions for audit trails.

```ts
// Add a note
const { data: note } = await sumsub.transactions.addTransactionNote({
  txnId: "sumsub-txn-id",
  note: "Reviewed by compliance officer"
});

// List notes
const { data: notes } = await sumsub.transactions.getTransactionNotes("sumsub-txn-id");

// Edit a note
await sumsub.transactions.editTransactionNote({
  txnId: "sumsub-txn-id",
  id: note.id,
  note: "Updated review note"
});

// Remove a note
await sumsub.transactions.removeTransactionNote({
  txnId: "sumsub-txn-id",
  id: note.id
});
```

## Transaction Tags

Categorize transactions with custom tags.

```ts
// Add tags
await sumsub.transactions.addTransactionTags("sumsub-txn-id", ["high-value", "manual-review"]);

// Get tags
const { data: tags } = await sumsub.transactions.getTransactionTags("sumsub-txn-id");

// Remove tags
await sumsub.transactions.removeTransactionTags("sumsub-txn-id", ["manual-review"]);
```

## Additional Methods

| Method                                            | Description                                                              |
| ------------------------------------------------- | ------------------------------------------------------------------------ |
| `getAvailableKytCurrencies(type?)`                | List supported currencies, optionally filtered by `"crypto"` or `"fiat"` |
| `changeTransactionProps(txnId, props, unsetKey?)` | Update custom properties on a transaction                                |
| `rescoreTransaction(txnId)`                       | Re-run scoring rules on an existing transaction                          |

## Flat API Equivalents

```ts
// Namespaced (recommended)
await sumsub.transactions.submitTransaction("applicant-id", body);
await sumsub.transactions.approveTransaction("txn-id");

// Flat (backward compatible)
await sumsub.submitTransaction("applicant-id", body);
await sumsub.approveTransaction("txn-id");
```
