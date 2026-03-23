---
footer: false
---

# TypeScript Types

Complete reference of all exported types from the Rain SDK, organized by domain.

## Core Types

```typescript
import type { RainUser, RainCard, RainTransaction, RainWebhook, RainAddress, RainConfig, RainClient } from "rain-sdk";
```

### RainUser

```typescript
interface RainUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "owner" | "admin" | "cardholder";
  status: "active" | "inactive" | "pending";
  companyId?: string;
  createdAt: string;
  updatedAt: string;
}
```

### RainCard

```typescript
interface RainCard {
  id: string;
  companyId?: string;
  userId: string;
  type: "virtual" | "physical";
  status: "notActivated" | "active" | "locked" | "canceled";
  last4: string;
  expirationMonth: string;
  expirationYear: string;
  limit?: CardLimit;
  billing?: RainAddress;
  configuration?: CardConfiguration;
  displayName?: string;
  createdAt?: string;
  updatedAt?: string;
}
```

### RainTransaction

```typescript
interface RainTransaction {
  id: string;
  type: "spend" | "collateral" | "payment" | "fee";
  status: "requested" | "created" | "pending" | "completed" | "declined" | "reversed";
  amount: number;
  currency: string;
  cardId?: string;
  userId?: string;
  merchantName?: string;
  merchantCategory?: string;
  createdAt: string;
  updatedAt: string;
}
```

### RainWebhook

```typescript
interface RainWebhook<T = unknown> {
  id: string;
  resource: "transaction" | "card" | "collateral" | "company" | "user" | "report" | "disputes" | "contract";
  action: "requested" | "created" | "updated" | "completed";
  eventReceivedAt?: string;
  body: T;
}
```

### RainAddress

```typescript
interface RainAddress {
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string; // ISO 3166-1 alpha-2
  country?: string;
}
```

## Card Types

```typescript
import type {
  CardType, // "virtual" | "physical"
  CardStatus, // "notActivated" | "active" | "locked" | "canceled"
  CardLimit,
  CardConfiguration,
  CardShipping,
  CardSecrets,
  EncryptedData,
  EncryptedPinResponse,
  SetPinRequest,
  ProcessorDetails,
  CreateCardRequest,
  UpdateCardRequest,
  LimitFrequency,
  RevealedCardSecrets
} from "rain-sdk";
```

### CardLimit

```typescript
interface CardLimit {
  amount: number; // In cents
  frequency: "per24HourPeriod" | "perWeek" | "perMonth" | "perYear" | "perTransaction" | "allTime";
}
```

### CardConfiguration

```typescript
interface CardConfiguration {
  displayName?: string; // Max 26 chars
  productId?: string;
  productRef?: string;
  virtualCardArt?: string;
}
```

### CardShipping

```typescript
interface CardShipping {
  firstName: string;
  lastName?: string;
  phoneNumber: string;
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
}
```

## User Types

```typescript
import type { CreateUserRequest, UpdateUserRequest, CreateUserInCompanyRequest, ChargeUserRequest, RainUserBalance } from "rain-sdk";
```

### RainUserBalance

```typescript
interface RainUserBalance {
  creditLimit: number;
  pendingCharges: number;
  postedCharges: number;
  balanceDue: number;
  spendingPower: number;
}
```

## Application Types

```typescript
import type {
  CreateApplicationRequest,
  CreateApplicationResponse,
  UpdateApplicationRequest,
  CreateCorporateApplicationRequest,
  UpdateCorporateApplicationRequest,
  GetApplicationStatusResponse,
  GetCorporateApplicationStatusResponse,
  CorporateApplicationPerson,
  CorporateApplicationInitialUser,
  CorporateApplicationEntity,
  CorporateApplicationUBO,
  RainApplicationStatus,
  RainApplicationLink,
  RainDocumentType,
  RainDocumentSide,
  UploadDocumentRequest
} from "rain-sdk";
```

### RainApplicationStatus

```typescript
type RainApplicationStatus = "approved" | "pending" | "needsInformation" | "needsVerification" | "manualReview" | "denied" | "locked" | "canceled";
```

### CorporateApplicationEntity

```typescript
interface CorporateApplicationEntity {
  name: string;
  description: string;
  industry: string;
  registrationNumber: string;
  taxId: string;
  website: string;
  type: string;
  expectedSpend: string;
}
```

## Company Types

```typescript
import type { RainCompany, UpdateCompanyRequest, CompanyListFilters, CreateCompanyChargeRequest, RainCompanyCharge } from "rain-sdk";
```

### RainCompany

```typescript
interface RainCompany {
  id: string;
  name: string;
  address: RainAddress;
  applicationStatus: RainApplicationStatus;
  ultimateBeneficialOwners?: UltimateBeneficialOwner[];
  applicationCompletionLink?: RainApplicationLink;
  applicationReason?: string;
}
```

## Contract Types

```typescript
import type { RainContract, CreateContractRequest, UpdateContractRequest, ContractToken, RainOnramp, RainOnrampBankingDetails } from "rain-sdk";
```

### ContractToken

```typescript
interface ContractToken {
  address: string; // Token contract address
  balance: string; // Current collateral balance
  exchangeRate: number; // Token to USD conversion rate
  advanceRate: number; // Collateral ratio (1.0 for stablecoins)
}
```

## Balance Types

```typescript
import type { CreditBalance } from "rain-sdk";
```

### CreditBalance

```typescript
interface CreditBalance {
  creditLimit: number; // Cents
  pendingCharges: number; // Cents
  postedCharges: number; // Cents
  balanceDue: number; // Cents
  spendingPower: number; // Cents
}
```

## Transaction Types

```typescript
import type {
  TransactionType, // "spend" | "collateral" | "payment" | "fee"
  TransactionStatus, // "requested" | "created" | "pending" | "completed" | "declined" | "reversed"
  TransactionFilters,
  SpendTransaction,
  CollateralTransaction,
  PaymentTransaction,
  FeeTransaction
} from "rain-sdk";
```

### SpendTransaction

```typescript
interface SpendTransaction {
  id: string;
  amount: number;
  currency: string;
  cardId: string;
  userId: string;
  status: TransactionStatus;
  cardType?: "virtual" | "physical";
  merchantName?: string;
  merchantCategory?: string;
  merchantCategoryCode?: string;
  merchantCity?: string;
  merchantCountry?: string;
  localAmount?: number;
  localCurrency?: string;
  authorizedAmount?: number;
  authorizedAt?: string;
  postedAt?: string;
  declinedReason?: string;
  createdAt: string;
  settledAt?: string;
}
```

## Shipping Types

```typescript
import type {
  BulkShippingGroup,
  CreateShippingGroupRequest,
  GetShippingGroupsParams,
  ValidateAddressRequest,
  AddressValidationResponse,
  AddressValidationConfidence // "HIGH" | "MEDIUM" | "LOW"
} from "rain-sdk";
```

### AddressValidationResponse

```typescript
interface AddressValidationResponse {
  isValid: boolean;
  confidence?: "HIGH" | "MEDIUM" | "LOW";
}
```

## Signature Types

```typescript
import type { SignatureResponse, SignatureParams, BlockchainSignature } from "rain-sdk";
```

### SignatureResponse

```typescript
type SignatureResponse = { status: "ready"; signature: BlockchainSignature; expiresAt: string } | { status: "pending"; retryAfter?: number };
```

## Webhook Types

```typescript
import type { WebhookEvent, WebhookResource, WebhookAction, WebhookSigningKey, TransactionWebhookBody, CreateSecondaryKeyResponse, PromoteKeyResponse } from "rain-sdk";
```

## Dispute Types

```typescript
import type {
  IssuingDispute,
  CreateDisputeInput,
  UpdateDisputeInput,
  DisputeFilters,
  UploadDisputeEvidenceInput,
  DisputeStatus, // "pending" | "inReview" | "accepted" | "rejected" | "canceled"
  DisputeType // "fraud" | "creditNotProcessed" | "serviceNotReceived" | "merchandiseIssue" | "other"
} from "rain-sdk";
```

## Key Types

```typescript
import type { RainKey, CreateKeyRequest } from "rain-sdk";
```

## Payment Types

```typescript
import type { InitiatePaymentRequest, InitiatePaymentResponse } from "rain-sdk";
```

## Display Name Utilities

```typescript
import {
  validateDisplayName, // Returns ValidateDisplayNameResult
  sanitizeDisplayName, // Removes invalid characters
  isValidDisplayName, // Quick boolean check
  truncateDisplayName, // Truncates to max length
  MAX_DISPLAY_NAME_LENGTH, // 21
  DISPLAY_NAME_PATTERN, // Regex pattern
  INVALID_CHARS_PATTERN, // Regex for invalid chars
  type ValidateDisplayNameResult
} from "rain-sdk";
```

### ValidateDisplayNameResult

```typescript
interface ValidateDisplayNameResult {
  isValid: boolean;
  errors: string[];
  sanitized: string;
}
```
