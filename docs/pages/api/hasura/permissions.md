---
footer: false
---

# Hasura Permissions

The Hasura API uses role-based access control (RBAC) to ensure users only access authorized data. This guide explains the permission system and available roles.

## Permission Model

Hasura permissions are defined at three levels:

1. **Table Level** - Which tables a role can access
2. **Row Level** - Which rows within a table (using filters)
3. **Column Level** - Which columns are visible

## Available Roles

### Core Roles

| Role                  | Description                | Typical Use          |
| --------------------- | -------------------------- | -------------------- |
| `user`                | Base authenticated user    | End-user access      |
| `organization_admin`  | Organization administrator | Manage org resources |
| `organization_member` | Organization member        | View org resources   |

### Finance Roles

| Role           | Description        | Typical Use               |
| -------------- | ------------------ | ------------------------- |
| `accounting`   | Accounting staff   | Full financial access     |
| `auditor`      | Audit access       | Read-only financial data  |
| `compliance`   | Compliance officer | KYC/AML access            |
| `front_office` | Front office staff | Trading and client access |

### Fund Roles

| Role             | Description          | Typical Use               |
| ---------------- | -------------------- | ------------------------- |
| `fund_manager`   | Fund management      | Manage fund operations    |
| `fund_signatory` | Authorized signatory | Approve fund transactions |
| `investor`       | Fund investor        | View investment data      |

### Trading Roles

| Role                    | Description          | Typical Use        |
| ----------------------- | -------------------- | ------------------ |
| `trader`                | Trading desk         | Execute trades     |
| `digital_wallets_admin` | Wallet administrator | Manage all wallets |

### Administrative Roles

| Role                | Description         | Typical Use         |
| ------------------- | ------------------- | ------------------- |
| `client_user_admin` | Client management   | Manage client users |
| `kyc_sdk_user`      | KYC SDK access      | Embedded KYC flows  |
| `workflow_sdk_user` | Workflow SDK access | Automated workflows |

### Other Roles

| Role               | Description          | Typical Use             |
| ------------------ | -------------------- | ----------------------- |
| `family_office`    | Family office access | Multi-family management |
| `director`         | Director level       | Oversight access        |
| `shareholder`      | Shareholder access   | Investor reporting      |
| `beneficial_owner` | Beneficial owner     | Compliance reporting    |
| `card_holder`      | Card holder          | Card-specific access    |

## Using Roles

### Setting Role in Request

Include the role header with your API request:

```bash
curl -X POST https://hasura.agiodigital.com/v1/graphql \
  -H "Content-Type: application/json" \
  -H "X-Hasura-Admin-Secret: your-api-key" \
  -H "X-Hasura-Role: organization_admin" \
  -H "X-Hasura-Organization-Id: your-org-id" \
  -d '{"query": "{ digital_wallet { id label } }"}'
```

### Session Variables

Roles use session variables for row-level filtering:

| Variable                   | Description                 | Example         |
| -------------------------- | --------------------------- | --------------- |
| `X-Hasura-User-Id`         | Current user's Auth0 ID     | `auth0\|abc123` |
| `X-Hasura-Organization-Id` | Current organization UUID   | `550e8400-...`  |
| `X-Hasura-Allowed-Funds`   | List of accessible fund IDs | `{1,2,3}`       |

Example with session variables:

```bash
curl -X POST https://hasura.agiodigital.com/v1/graphql \
  -H "Content-Type: application/json" \
  -H "X-Hasura-Admin-Secret: your-api-key" \
  -H "X-Hasura-Role: investor" \
  -H "X-Hasura-User-Id: auth0|abc123" \
  -H "X-Hasura-Allowed-Funds: {1,2,3}" \
  -d '{"query": "{ fund { id name } }"}'
```

## Permission Examples

### organization_admin Role

The `organization_admin` role can access resources belonging to their organization:

**digital_wallet table:**

```json
{
  "filter": {
    "organization_id": {
      "_eq": "X-Hasura-Organization-Id"
    }
  },
  "columns": ["id", "label", "coin", "wallet_type", "usd_value", "created_at"],
  "allow_aggregations": true
}
```

This means:

- Can only see wallets where `organization_id` matches their org
- Can see specified columns only
- Can run aggregate queries (COUNT, SUM, etc.)

### investor Role

The `investor` role can access their own investment data:

**fund_subscription table:**

```json
{
  "filter": {
    "_and": [{ "user_id": { "_eq": "X-Hasura-User-Id" } }, { "fund_id": { "_in": "X-Hasura-Allowed-Funds" } }]
  },
  "columns": ["id", "fund_id", "subscription_amount", "status", "created_at"]
}
```

This means:

- Can only see their own subscriptions
- Only for funds they're allowed to access
- Limited column visibility (e.g., no internal notes)

### accounting Role

The `accounting` role typically has broader access:

**invoice table:**

```json
{
  "filter": {},
  "columns": "*",
  "allow_aggregations": true
}
```

This means:

- Can see all invoices (no row filter)
- Can see all columns
- Can run aggregate queries

### front_office Role

The `front_office` role has operational access:

**digital_wallet table:**

```json
{
  "filter": {},
  "columns": ["id", "label", "coin", "wallet_type", "usd_value", "status"],
  "allow_aggregations": true
}
```

**otc_quote table:**

```json
{
  "filter": {},
  "columns": "*",
  "allow_aggregations": true
}
```

## Column Permissions

Different roles see different columns. Example for `invoice` table:

| Column           | accounting | auditor | organization_admin |
| ---------------- | ---------- | ------- | ------------------ |
| `id`             | ✓          | ✓       | ✓                  |
| `invoice_number` | ✓          | ✓       | ✓                  |
| `total`          | ✓          | ✓       | ✓                  |
| `status`         | ✓          | ✓       | ✓                  |
| `internal_notes` | ✓          | ✓       | ✗                  |
| `cost_breakdown` | ✓          | ✗       | ✗                  |

## Insert/Update/Delete Permissions

### Insert Permissions

Some roles can create new records:

```json
{
  "check": {
    "organization_id": { "_eq": "X-Hasura-Organization-Id" }
  },
  "set": {
    "created_by": "X-Hasura-User-Id"
  },
  "columns": ["label", "description"]
}
```

- `check`: Validation rule that must pass
- `set`: Auto-set columns on insert
- `columns`: Allowed columns for insert

### Update Permissions

```json
{
  "filter": {
    "organization_id": { "_eq": "X-Hasura-Organization-Id" }
  },
  "columns": ["label", "description"],
  "check": {
    "status": { "_neq": "locked" }
  }
}
```

- `filter`: Which rows can be updated
- `columns`: Which columns can be modified
- `check`: Additional validation

### Delete Permissions

Most roles have limited delete access:

```json
{
  "filter": {
    "_and": [{ "organization_id": { "_eq": "X-Hasura-Organization-Id" } }, { "status": { "_eq": "draft" } }]
  }
}
```

## Aggregation Permissions

Aggregations must be explicitly enabled per role:

```graphql
# Only works if role has allow_aggregations: true
query GetStats {
  digital_wallet_aggregate {
    aggregate {
      count
      sum {
        usd_value
      }
      avg {
        usd_value
      }
    }
  }
}
```

Roles without aggregation permission will get an error.

## Best Practices

### Use Appropriate Roles

Choose the most restrictive role that meets your needs:

```typescript
// Bad: Using admin for read-only dashboard
const headers = {
  "X-Hasura-Role": "accounting" // Too broad
};

// Good: Using specific read-only role
const headers = {
  "X-Hasura-Role": "auditor" // Read-only access
};
```

### Provide Session Variables

Always include required session variables:

```typescript
// Required variables depend on the role
const headers = {
  "X-Hasura-Admin-Secret": process.env.HASURA_SECRET,
  "X-Hasura-Role": "organization_admin",
  "X-Hasura-Organization-Id": organizationId, // Required for org roles
  "X-Hasura-User-Id": userId // Required for user roles
};
```

### Handle Permission Errors

```typescript
try {
  const result = await client.query({ query: GET_DATA });
  return result.data;
} catch (error) {
  if (error.message.includes("permission")) {
    console.error("Insufficient permissions for this operation");
    // Handle gracefully - maybe show limited view
  }
  throw error;
}
```

## Querying with Relationships

Permissions apply to related data too:

```graphql
query GetOrganizationData {
  organization {
    id
    name
    # This will only show wallets the role can access
    digital_wallets {
      id
      label
    }
    # This will only show users the role can access
    users {
      id
      email
    }
  }
}
```

Related data is automatically filtered based on the role's permissions for each table.

## Next Steps

- [Tables Reference](/api/hasura/tables) - Key database tables
- [Hasura Overview](/api/hasura/overview) - API fundamentals
- [Authentication](/api/authentication) - API key setup
