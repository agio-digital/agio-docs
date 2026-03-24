---
footer: false
---

# Applications

KYC (Know Your Customer) and KYB (Know Your Business) application flows for onboarding individuals and companies to Agio Cards.

## Individual Consumer Application

For individual cardholders. Triggers Agio's KYC/AML process.

```typescript
const { data: application } = await cards.applications.createApplication({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  birthDate: "1990-01-15",
  nationalId: "123456789",
  countryOfIssue: "US",
  phoneCountryCode: "1",
  phoneNumber: "5551234567",
  address: {
    line1: "123 Main St",
    city: "Miami",
    region: "FL",
    postalCode: "33101",
    countryCode: "US"
  },
  walletAddress: "0x...",
  ipAddress: "192.168.1.1",
  occupation: "15-1132",
  annualSalary: "100000_TO_150000",
  accountPurpose: "PERSONAL_SPENDING",
  expectedMonthlyVolume: "1000_TO_5000",
  isTermsOfServiceAccepted: true,
  sourceKey: "your-app-key",
  hasExistingDocuments: false
});
```

If you have existing KYC data from Sumsub, pass a share token instead:

```typescript
const { data: application } = await cards.applications.createApplication({
  sumsubShareToken: "token-from-sumsub",
  walletAddress: "0x...",
  ipAddress: "192.168.1.1",
  occupation: "15-1132",
  annualSalary: "100000_TO_150000",
  accountPurpose: "PERSONAL_SPENDING",
  expectedMonthlyVolume: "1000_TO_5000",
  isTermsOfServiceAccepted: true,
  sourceKey: "your-app-key",
  hasExistingDocuments: true
});
```

### Update an Individual Application

```typescript
await cards.applications.updateApplication("user-id", {
  occupation: "15-1199",
  annualSalary: "150000_TO_250000"
});
```

### Upload KYC Documents

```typescript
await cards.applications.uploadUserDocument("user-id", {
  document: passportBuffer,
  name: "passport_front.jpg",
  type: "passport",
  side: "front",
  countryCode: "US"
});
```

Supported document types: `idCard`, `passport`, `drivers`, `residencePermit`, `utilityBill`, `selfie`, `videoSelfie`, `profileImage`, `idDocPhoto`, `agreement`, `contract`, `incomeSource`, `paymentMethod`, `bankCard`, `other`.

## Corporate Application

For companies issuing cards to employees. Triggers KYB for the company and KYC for all beneficial owners.

```typescript
const { data: company } = await cards.applications.createCorporateApplication({
  name: "Acme Corp",
  address: {
    line1: "123 Business Ave",
    city: "Miami",
    region: "FL",
    postalCode: "33101",
    countryCode: "US"
  },
  entity: {
    name: "Acme Corporation",
    description: "Software development",
    industry: "541512",
    registrationNumber: "12345678",
    taxId: "12-3456789",
    website: "https://acme.com",
    type: "LLC",
    expectedSpend: "10000_TO_50000"
  },
  initialUser: {
    firstName: "John",
    lastName: "Doe",
    email: "john@acme.com",
    birthDate: "1980-01-15",
    nationalId: "123456789",
    countryOfIssue: "US",
    address: {
      line1: "123 Main St",
      city: "Miami",
      region: "FL",
      postalCode: "33101",
      countryCode: "US"
    },
    ipAddress: "192.168.1.1",
    isTermsOfServiceAccepted: true,
    walletAddress: "0x..."
  },
  representatives: [
    {
      firstName: "Jane",
      lastName: "Smith",
      birthDate: "1985-06-20",
      nationalId: "987654321",
      countryOfIssue: "US",
      email: "jane@acme.com",
      address: {
        line1: "456 Oak Ave",
        city: "Miami",
        region: "FL",
        postalCode: "33101",
        countryCode: "US"
      }
    }
  ],
  ultimateBeneficialOwners: [
    {
      firstName: "John",
      lastName: "Doe",
      birthDate: "1980-01-15",
      nationalId: "123456789",
      countryOfIssue: "US",
      email: "john@acme.com",
      address: {
        line1: "123 Main St",
        city: "Miami",
        region: "FL",
        postalCode: "33101",
        countryCode: "US"
      }
    }
  ],
  sourceKey: "your-app-key"
});
```

### Update a Corporate Application

```typescript
await cards.applications.updateCorporateApplication("company-id", {
  name: "Acme Corp (Updated)",
  entity: { expectedSpend: "50000_TO_100000" }
});
```

## Monitor Application Status

### Individual Application Status

```typescript
const { data: status } = await cards.applications.getApplicationStatus("user-id");

if (status.applicationStatus === "approved") {
  // Proceed to issue cards
} else if (status.applicationStatus === "needsInformation") {
  console.log("Action required:", status.applicationReason);
}
```

### Corporate Application Status

```typescript
const { data: status } = await cards.applications.getCorporateApplicationStatus("company-id");

if (status.applicationStatus === "approved") {
  // Proceed to add users and issue cards
}

// Check individual UBO statuses
status.ultimateBeneficialOwners.forEach((ubo) => {
  console.log(`${ubo.firstName} ${ubo.lastName}: ${ubo.applicationStatus}`);
  if (ubo.applicationCompletionLink) {
    console.log("Verification link:", ubo.applicationCompletionLink.url);
  }
});
```

## Application Status Values

| Status              | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `approved`          | Application approved. Cards can be issued.                        |
| `pending`           | Under review. No action required.                                 |
| `needsInformation`  | Additional information required. Check `applicationReason`.       |
| `needsVerification` | Identity verification pending. Check `applicationCompletionLink`. |
| `manualReview`      | Flagged for manual review by Agio compliance.                     |
| `denied`            | Application denied.                                               |
| `locked`            | Account locked. Contact Agio support.                             |
| `canceled`          | Application canceled.                                             |

## UBO Tracking (Corporate)

Corporate applications include Ultimate Beneficial Owners who each go through individual KYC. The `getCorporateApplicationStatus` response includes per-UBO status:

```typescript
interface CorporateApplicationUBO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  applicationStatus: AgioCardApplicationStatus;
  applicationCompletionLink?: { url: string; params: Record<string, string> };
  applicationReason?: string;
}
```

Each UBO must reach `approved` status before the overall corporate application can be approved.

:::tip One-Time Applications
Applications are one-time per identity. Once a user or company is approved, unlimited cards can be issued without repeating the KYC/KYB process.
:::
