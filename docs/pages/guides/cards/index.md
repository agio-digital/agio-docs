---
footer: false
---

# Cards Overview

Agio Cards are crypto-collateralized Visa credit cards backed by stablecoin deposits (USDC or PYUSD). Depositing stablecoins into a Agio Card smart wallet establishes a credit limit, and cardholders can spend up to that limit using virtual or physical Visa cards anywhere Visa is accepted.

All card operations are performed via GraphQL through the Agio Platform API.

## Card Lifecycle

```mermaid
flowchart LR
    A[Apply] --> B{KYC/KYB Review}
    B -->|Approved| C[Create Card]
    B -->|Denied| X[Application Denied]
    C --> D[Fund Card]
    D --> E[Use Card]
    E --> F{Manage}
    F --> G[Freeze / Unfreeze]
    F --> H[Update Limit]
    F --> I[Replace Card]
    F --> J[Withdraw Funds]
    G --> E
    H --> E
    I --> E
    J --> D
```

## Virtual vs Physical Cards

| Feature             | Virtual                                              | Physical                                 |
| ------------------- | ---------------------------------------------------- | ---------------------------------------- |
| **Availability**    | Instant — ready to use immediately                   | Ships globally (free standard shipping)  |
| **Use cases**       | Online purchases, subscriptions                      | In-person, ATM, tap-to-pay               |
| **Shipping**        | Not required                                         | Required (address + phone number)        |
| **PIN**             | Set at creation                                      | Staged at creation, activated on receipt |
| **Replacement**     | `replaceVirtualAgioCard` — new card number instantly | `replaceAgioCard` with shipping address  |
| **Spending limits** | Configurable (rolling period)                        | Configurable (rolling period)            |
| **Cancellation**    | Permanent, irreversible                              | Permanent, irreversible                  |

## Quick Reference

| Action                 | GraphQL Operation                                      | Type         |
| ---------------------- | ------------------------------------------------------ | ------------ |
| List cards             | `vwCards`                                              | Query        |
| Apply (individual)     | `createAgioCardApplication`                            | Mutation     |
| Apply (corporate)      | `createRainCorporateApplication`                       | Mutation     |
| Create card            | `createAgioCard`                                       | Mutation     |
| Freeze card            | `freezeAgioCard`                                       | Mutation     |
| Unfreeze card          | `unfreezeAgioCard`                                     | Mutation     |
| Cancel card            | `cancelAgioCard`                                       | Mutation     |
| Replace virtual card   | `replaceVirtualAgioCard`                               | Mutation     |
| Replace any card       | `replaceAgioCard`                                      | Mutation     |
| Update spending limit  | `updateAgioCardLimit`                                  | Mutation     |
| Set PIN                | `setAgioCardPin`                                       | Mutation     |
| Reveal PIN             | `getAgioCardPin`                                       | Mutation     |
| Reveal card secrets    | `revealAgioCardSecrets`                                | Mutation     |
| Rename card            | `updateCardNickname`                                   | Mutation     |
| Star/unstar card       | `updateCardStarred`                                    | Mutation     |
| Fund card              | `smartWalletSwapQuote` → `smartWalletExecuteSwapQuote` | Mutation     |
| Withdraw collateral    | `cardWithdraw`                                         | Mutation     |
| Card balance           | `rainCardBalance`                                      | Query        |
| View transactions      | `UserCardTransactions`                                 | Query        |
| Real-time transactions | `CardTransactionUpdates`                               | Subscription |
| Application updates    | `CardApplicationUpdates`                               | Subscription |

:::warning Amounts in Cents
All monetary amounts in the Agio Card API are in **cents** (smallest currency unit). `50000` = $500.00. The only exception is `cardWithdraw`, which accepts human-readable token amounts (e.g., `"100.5"`).
:::

## Guides

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/guides/cards/apply">
    <p class="next-steps-link">Applying for Cards</p>
    <p class="next-steps-caption">KYC and KYB application flows for individuals and companies.</p>
  </a>
  <a class="vt-box" href="/guides/cards/create">
    <p class="next-steps-link">Creating & Managing Cards</p>
    <p class="next-steps-caption">Create virtual and physical cards, freeze, replace, and update limits.</p>
  </a>
  <a class="vt-box" href="/guides/cards/funding">
    <p class="next-steps-link">Funding & Withdrawals</p>
    <p class="next-steps-caption">Deposit stablecoins to fund cards and withdraw collateral.</p>
  </a>
  <a class="vt-box" href="/guides/cards/transactions">
    <p class="next-steps-link">Transactions & Analytics</p>
    <p class="next-steps-caption">Query card transactions and monitor spending in real time.</p>
  </a>
  <a class="vt-box" href="/guides/cards/partner-api">
    <p class="next-steps-link">Partner Card API</p>
    <p class="next-steps-caption">HMAC-authenticated GraphQL endpoint for external card-issuing partners.</p>
  </a>
</div>
