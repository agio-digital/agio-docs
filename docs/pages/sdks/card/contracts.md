---
footer: false
---

# Smart Contracts

Agio uses **ERC-4337 Account Abstraction** to provide on-chain smart contract wallets for each user or company. These wallets hold stablecoin collateral that backs the credit line for card spending.

## Contract Structure

Each user or company receives a `AgioCardContract` with three key addresses:

```typescript
interface AgioCardContract {
  id: string;
  proxyAddress: string; // User's smart wallet (upgradeable proxy)
  depositAddress: string; // Where collateral is deposited
  controllerAddress: string; // Agio's controller for limits/liquidation
  chainId: number; // Blockchain network
  contractVersion: number; // Contract version
  tokens?: ContractToken[]; // Supported collateral tokens
  onramp?: AgioCardOnramp; // Fiat onramp bank details (if enabled)
  status?: "active" | "inactive" | "pending";
}

interface ContractToken {
  address: string; // Token contract address (e.g., USDC)
  balance: string; // Current collateral balance
  exchangeRate: number; // Token to USD conversion rate
  advanceRate: number; // Collateral ratio (1.0 for stablecoins)
}
```

| Component              | Purpose                                      | Controlled By                  |
| ---------------------- | -------------------------------------------- | ------------------------------ |
| **Proxy Address**      | User's smart wallet for signing transactions | User (via Account Abstraction) |
| **Deposit Address**    | Receives and holds collateral                | Agio system                    |
| **Controller Address** | Enforces credit limits, triggers liquidation | Agio                           |

## Query Contracts

```typescript
// User contracts
const { data: contracts } = await cards.contracts.getUserContracts("user-id");

// Company contracts
const { data: contracts } = await cards.contracts.getCompanyContracts("company-id");

// Tenant contracts
const { data: contracts } = await cards.contracts.getTenantContracts("tenant-id");
```

All contract endpoints return arrays since a user or company can have contracts on multiple chains.

## Create a Contract

```typescript
// Create contract for a user
const { data: contract } = await cards.contracts.createUserContract("user-id", {
  userAddress: "0x1234...",
  chainId: 1, // Ethereum mainnet
  contractVersion: 2
});

// Create contract for a company
const { data: contract } = await cards.contracts.createCompanyContract("company-id", {
  userAddress: "0x1234...",
  chainId: 137 // Polygon
});
```

| Field             | Type   | Required | Description                              |
| ----------------- | ------ | -------- | ---------------------------------------- |
| `userAddress`     | string | Yes      | EVM wallet address of the contract owner |
| `chainId`         | number | Yes      | Target blockchain network ID             |
| `contractVersion` | number | No       | Contract version (defaults to latest)    |

## Update a Contract

```typescript
await cards.contracts.updateContract("contract-id", {
  status: "active",
  depositAddress: "0xabcd...",
  controllerAddress: "0xefgh..."
});
```

## Supported Chains

| Chain             | Chain ID   | Status      |
| ----------------- | ---------- | ----------- |
| Ethereum Mainnet  | `1`        | Live        |
| Polygon           | `137`      | Live        |
| Sepolia (testnet) | `11155111` | Live        |
| Base              | `8453`     | Coming Soon |
| Optimism          | `10`       | Coming Soon |
| Arbitrum          | `42161`    | Coming Soon |

## Fiat Onramp

When enabled, contracts include virtual bank account details for direct fiat funding:

```typescript
interface AgioCardOnramp {
  ach: { accountNumber; routingNumber; beneficiaryName; beneficiaryAddress };
  rtp: { accountNumber; routingNumber; beneficiaryName; beneficiaryAddress };
  wire: { accountNumber; routingNumber; beneficiaryName; beneficiaryAddress };
}
```

## ERC-4337 Transaction Flow

```
User Intent
    |
[Bundler] packages into UserOperation
    |
[EntryPoint] validates and executes
    |
[Paymaster] sponsors gas (gasless UX)
    |
[User Smart Account] executes action
    |
[Controller] enforces credit limits
```

## Security Model

| Property                | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| **No Default Risk**     | Credit limit always less than or equal to collateral value |
| **On-Chain Collateral** | Verifiable on any block explorer                           |
| **Programmable Limits** | Controller enforces spending rules automatically           |
| **Gasless UX**          | Paymaster sponsors transaction fees for users              |

The Controller contract is Agio's key enforcement mechanism:

1. **Credit Limit Enforcement** -- sets limits based on `collateral x advanceRate`
2. **Auto-Liquidation** -- triggers after 8-day grace period if the statement is unpaid
3. **Withdrawal Authorization** -- controls when and how collateral can be withdrawn
4. **Rate Management** -- manages collateral-to-credit ratios per token
