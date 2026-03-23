---
footer: false
---

# TypeScript Types

All types are exported from the package root:

```ts
import type { Applicant, ReviewResult, IdDocType, SumsubConfig, WebhookValidationOptions } from "sumsub-node-sdk";
```

## Core Types

### Applicant

The primary applicant record returned by most applicant API calls.

```ts
interface Applicant {
  id: string;
  createdAt: string;
  key: string;
  clientId: string;
  inspectionId: string;
  externalUserId: string;
  type: string;
  info: Info;
  review: Review;
  agreement: Agreement;
  requiredIdDocs: RequiredIdDocs;
  applicantPlatform: string;
  ipCountry: string;
  deleted?: boolean;
  sourceKey?: string;
  email?: string;
  phone?: string;
  lang?: string;
  metadata?: MetaDataRecord[];
  fixedInfo?: FixedInfo;
}
```

### Review

Verification review details attached to an applicant.

```ts
interface Review {
  reviewId: string;
  attemptId: string;
  attemptCnt: number;
  reprocessing: boolean;
  levelName: string;
  createDate: string;
  reviewStatus: string;
  priority: number;
  autoChecked: boolean;
  reviewDate: string;
  reviewResult: ReviewResult;
  reviewReasonCode: string;
  startDate: string;
  elapsedSincePendingMs?: number;
  elapsedSinceQueuedMs?: number;
}
```

### ReviewResult

```ts
interface ReviewResult {
  reviewAnswer: ReviewAnswer;
  rejectLabels?: string[];
  clientComment?: string;
  reviewRejectType?: ReviewRejectType;
  moderationComment?: string;
}

type ReviewAnswer = "RED" | "GREEN";
type ReviewRejectType = "FINAL" | "RETRY";
```

### ReviewStatus

```ts
type ReviewStatus = "pending" | "init" | "prechecked" | "queued" | "completed" | "onHold";
```

## Document Types

### IdDocType (enum)

```ts
enum IdDocType {
  ID_CARD = "ID_CARD",
  PASSPORT = "PASSPORT",
  DRIVERS = "DRIVERS",
  RESIDENCE_PERMIT = "RESIDENCE_PERMIT",
  UTILITY_BILL = "UTILITY_BILL",
  SELFIE = "SELFIE",
  VIDEO_SELFIE = "VIDEO_SELFIE",
  PROFILE_IMAGE = "PROFILE_IMAGE",
  ID_DOC_PHOTO = "ID_DOC_PHOTO",
  AGREEMENT = "AGREEMENT",
  CONTRACT = "CONTRACT",
  DRIVERS_TRANSLATION = "DRIVERS_TRANSLATION",
  INVESTOR_DOC = "INVESTOR_DOC",
  VEHICLE_REGISTRATION_CERTIFICATE = "VEHICLE_REGISTRATION_CERTIFICATE",
  INCOME_SOURCE = "INCOME_SOURCE",
  PAYMENT_METHOD = "PAYMENT_METHOD",
  BANK_CARD = "BANK_CARD",
  COVID_VACCINATION_FORM = "COVID_VACCINATION_FORM",
  OTHER = "OTHER"
}
```

### IdDoc

```ts
interface IdDoc {
  idDocType: string;
  country: string;
  number?: string;
  issuedDate?: string;
  validUntil?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  dob?: string;
  placeOfBirth?: string;
}
```

### IdDocMetaData

Metadata sent when uploading identity documents.

```ts
interface IdDocMetaData {
  idDocType: IdDocType;
  idDocSubType?: "FRONT_SIDE" | "BACK_SIDE" | null;
  country: string; // 3-letter country code
  firstName?: string;
  middleName?: string;
  lastName?: string;
  issuedDate?: string; // YYYY-mm-dd
  validUntil?: string; // YYYY-mm-dd
  number?: string;
  dob?: string; // YYYY-mm-dd
  placeOfBirth?: string;
}
```

### RequiredIdDocs / RequiredIdDocsStatus

```ts
interface RequiredIdDocs {
  docSets: DocSet[];
}

type RequiredIdDocsStatus = Record<string, IdDocStatus>;
```

## Application Types

### ApplicantLevelItem

```ts
interface ApplicantLevelItem {
  id: string;
  clientId: string;
  name: string;
  desc?: string;
  requiredIdDocs: RequiredIdDocs;
  type: LevelType; // "standalone" | "actions" | "module"
  applicantType: ApplicantType; // "individual" | "company"
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  // ... additional configuration fields
}

type GetApplicantLevelsResponse = {
  list: {
    items: ApplicantLevelItem[];
    totalItems: number;
  };
};
```

## Company Types (KYB 2.0)

### CompanyBeneficiary

```ts
interface CompanyBeneficiary {
  /** Junction record ID (use for deletion) */
  id: string;
  /** Sumsub applicant ID of the linked individual */
  applicantId?: string;
  /** KYB 2.0 role types */
  types?: KybBeneficiaryType[];
  /** Ownership percentage (0-100) */
  shareSize?: number;
  /** Embedded profile data */
  beneficiaryInfo?: BeneficiaryInfo;
}
```

### KybBeneficiaryType

```ts
type KybBeneficiaryType =
  | "ubo"
  | "shareholder"
  | "representative"
  | "director"
  | "companyOfficer"
  | "investor"
  | "secretary"
  | "founder"
  | "legalAdvisor"
  | "authorizedSignatory"
  | "trustee"
  | "trustBeneficiary"
  | "trustSettlor"
  | "trustProtector";
```

## Transaction Types

### SubmitTransactionBody

```ts
interface SubmitTransactionBody {
  txnId: string;
  type: TransactionType; // "finance" | "kyc" | "travelRule" | "userPlatformEvent"
  txnDate?: string;
  zoneId?: string;
  info?: TransactionInfo;
  sourceKey?: string;
  applicant?: TransactionParticipant;
  counterparty?: TransactionParticipant;
  props?: Record<string, string>;
}
```

### GetTransactionResponse

```ts
interface GetTransactionResponse {
  id: string;
  applicantId: string;
  externalUserId?: string;
  clientId?: string;
  data: TransactionData;
  score?: number;
  review?: TransactionReview;
  createdAt: string;
  modifiedAt?: string;
  scoringResult?: TransactionScoringResult;
  typedTags?: TypedTag[];
}
```

### FindTransactionsResponse

```ts
interface FindTransactionsResponse {
  list: {
    items: GetTransactionResponse[];
    totalItems: number;
  };
}
```

## Webhook Types

```ts
interface WebhookHeaders {
  "x-payload-digest": string;
  "x-payload-digest-alg": WebhookDigestAlgorithm;
}

interface WebhookValidationOptions {
  secretKey: string;
  payload: Buffer | string;
  headers: WebhookHeaders;
}

interface WebhookValidationResult {
  isValid: boolean;
  calculatedDigest: string;
  receivedDigest: string;
  algorithm: WebhookDigestAlgorithm;
}

type WebhookDigestAlgorithm = "HMAC_SHA1_HEX" | "HMAC_SHA256_HEX" | "HMAC_SHA512_HEX";
```

## Web SDK Types

### GetShareTokenResponse

```ts
interface GetShareTokenResponse {
  token: string;
  forClientId: string;
}
```

### GenerateWebSDKLinkBody

```ts
interface GenerateWebSDKLinkBody {
  levelName: string;
  userId: string;
  externalActionId?: string;
  applicantIdentifiers?: {
    email?: string;
    phone?: string;
  };
  ttlInSecs?: number; // Default: 1800
}
```

## Config Type

```ts
interface SumsubConfig {
  baseURL: string;
  secretKey: string;
  appToken: string;
  axiosInstance?: AxiosInstance;
}
```

## Breaking Changes (v2.0.0)

### Automatic URI Encoding

As of v2.0.0, the SDK automatically applies `encodeURIComponent` to all user-supplied path and query parameters. If you were manually encoding values, remove that to avoid double-encoding:

```ts
// Before v2.0.0
const encoded = encodeURIComponent(externalUserId);
await sumsub.getApplicantByExternalUserId(encoded); // Double-encoded!

// v2.0.0+
await sumsub.getApplicantByExternalUserId(externalUserId); // Correct
```

## Error Handling

All SDK methods return Axios responses. HTTP errors throw `AxiosError` with the response attached:

```ts
import { AxiosError } from "axios";

try {
  await sumsub.applicants.getApplicant("invalid-id");
} catch (err) {
  if (err instanceof AxiosError) {
    console.error(err.response?.status); // 404
    console.error(err.response?.data); // Sumsub error body
  }
}
```
