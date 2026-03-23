---
footer: false
---

# Applicant Management

Create, retrieve, and manage applicant profiles for KYC/KYB verification.

## Create Applicant

Creates a new applicant with an external user ID and verification level.

```ts
const { data: applicant } = await sumsub.applicants.createApplicant(
  "user-123", // externalUserId
  "basic-kyc-level", // levelName
  {
    // optional body
    email: "user@example.com",
    phone: "+1234567890",
    fixedInfo: {
      firstName: "John",
      lastName: "Doe",
      dob: "1990-01-15",
      country: "GBR"
    }
  }
);

console.log(applicant.id); // Sumsub applicant ID
```

**Parameters:**

| Name             | Type                  | Required | Description                                                   |
| ---------------- | --------------------- | -------- | ------------------------------------------------------------- |
| `externalUserId` | `string`              | Yes      | Your internal user identifier                                 |
| `levelName`      | `string`              | Yes      | Verification level name configured in Sumsub                  |
| `body`           | `CreateApplicantBody` | No       | Additional applicant data (email, phone, fixedInfo, metadata) |

## Get Applicant

Retrieve an applicant by their Sumsub ID.

```ts
const { data: applicant } = await sumsub.applicants.getApplicant("5cb744200a975a67ed1798a4");
```

## Get Applicant by External User ID

Look up an applicant using your internal user identifier.

```ts
const { data: applicant } = await sumsub.applicants.getApplicantByExternalUserId("user-123");
```

## Import Applicant

Import a pre-verified applicant into Sumsub (skip the verification flow).

```ts
const { data: applicant } = await sumsub.applicants.importApplicant(
  {
    externalUserId: "user-456",
    info: {
      firstName: "Jane",
      lastName: "Smith",
      country: "USA"
    }
    // ... full applicant body without `id`
  },
  "basic-kyc-level"
);
```

## Change Applicant Level

Move an applicant to a different verification level.

```ts
await sumsub.applicants.changeApplicantLevel("5cb744200a975a67ed1798a4", "enhanced-kyc-level");
```

## Generate Access Token

Generate a short-lived token for initializing the Sumsub Web SDK on the client side.

```ts
const { data } = await sumsub.applicants.generateAccessToken(
  "user-123", // externalUserId
  "basic-kyc-level", // levelName
  1200 // ttlInSecs (default: 1200)
);

console.log(data.token); // Pass this to the Web SDK
console.log(data.userId); // Sumsub internal user ID
```

## Get Required Documents

Retrieve the list of document sets required for an applicant's verification level.

```ts
const { data: requiredDocs } = await sumsub.applicants.getRequiredIdDocs("5cb744200a975a67ed1798a4");

// requiredDocs.docSets contains required document types
```

## Get Review Status

Check the current verification status and review result for an applicant.

```ts
const { data: status } = await sumsub.applicants.getReviewStatus("5cb744200a975a67ed1798a4");

console.log(status.reviewStatus); // "completed" | "pending" | "init" | ...
console.log(status.reviewResult); // { reviewAnswer: "GREEN" | "RED", ... }
```

## Company Beneficiary Management (KYB 2.0)

### Add a Beneficiary

Link an existing applicant or create a new beneficiary in a company's KYB structure.

**Link an existing applicant:**

```ts
const { data: beneficiary } = await sumsub.applicants.addCompanyBeneficiary("company-applicant-id", {
  applicantId: "individual-applicant-id",
  types: ["ubo", "director"],
  shareSize: 25
});
```

**Create a new beneficiary:**

```ts
const { data: beneficiary } = await sumsub.applicants.addCompanyBeneficiary("company-applicant-id", {
  beneficiaryInfo: {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com"
  },
  types: ["shareholder"],
  shareSize: 51
});
```

### Remove a Beneficiary

Remove a beneficiary from a company's KYB structure. Use the junction record `id` from the beneficiary object, not the applicant ID.

```ts
await sumsub.applicants.removeCompanyBeneficiary(
  "company-applicant-id",
  "beneficiary-junction-id" // The `id` field from CompanyBeneficiary
);
```

## Document Management

### Upload Identity Document

Upload a document image with metadata for an applicant.

```ts
import { IdDocType } from "sumsub-node-sdk";

const { data: result } = await sumsub.documents.addIdDocument(
  "5cb744200a975a67ed1798a4",
  {
    idDocType: IdDocType.PASSPORT,
    country: "GBR",
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-15"
  },
  imageBuffer // Buffer containing the document image
);

console.log(result.imageId); // Uploaded image ID
console.log(result.data.errors); // Any validation errors
console.log(result.data.warnings); // Any validation warnings
```

### Retrieve Document Image

Download a previously uploaded document image.

```ts
const { data: imageBuffer } = await sumsub.documents.getDocumentImage("inspection-id", "image-id");
```

## Additional Methods

| Method                                                  | Description                                                 |
| ------------------------------------------------------- | ----------------------------------------------------------- |
| `resetApplicant(applicantId)`                           | Reset an applicant's verification to start over             |
| `resetApplicantStep(applicantId, stepType)`             | Reset a specific verification step (IDENTITY, SELFIE, etc.) |
| `patchApplicant(applicantId, body)`                     | Update applicant profile fields                             |
| `patchApplicantFixedInfo(applicantId, body)`            | Update applicant fixed info (name, DOB, etc.)               |
| `approveApplicant(applicantId, options?)`               | Manually approve an applicant                               |
| `rejectApplicant(applicantId, options)`                 | Manually reject an applicant with reasons                   |
| `requestApplicantCheck(applicantId, reason?)`           | Request a new verification check                            |
| `addApplicantToBlacklist(applicantId, note?)`           | Add applicant to the blocklist                              |
| `setApplicantRiskLevel(applicantId, level, comment)`    | Set applicant risk level                                    |
| `deactivateApplicant(applicantId)`                      | Deactivate an applicant                                     |
| `reactivateApplicant(applicantId)`                      | Reactivate a deactivated applicant                          |
| `getApplicantLevels()`                                  | List all configured verification levels                     |
| `getModerationStates(applicantId)`                      | Get current moderation states                               |
| `getDuplicateApplicantsCheckResult(applicantId)`        | Check for duplicate applicants                              |
| `sendBeneficiaryVerificationEmails(companyApplicantId)` | Send reminder emails to KYB beneficiaries                   |

## Flat API Equivalents

All methods above are also available directly on the client:

```ts
// Namespaced (recommended)
await sumsub.applicants.createApplicant("user-123", "basic-kyc-level");
await sumsub.applicants.getReviewStatus("applicant-id");

// Flat (backward compatible)
await sumsub.createApplicant("user-123", "basic-kyc-level");
await sumsub.getReviewStatus("applicant-id");
```
