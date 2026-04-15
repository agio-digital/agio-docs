---
footer: false
---

# Partner Card API

The Partner Card API gives external card-issuing partners programmatic access to their organization's card data via a scoped GraphQL endpoint. Unlike the Agio Platform API (which requires Auth0 user authentication), partner access uses HMAC-signed API keys — no browser login required.

**Endpoint:** `https://api.agiodigital.com/partner/cards/graphql`

:::info Access Required
Partner API credentials are provisioned by Agio ops. Contact your Agio account manager to request access. You will receive an `api_token` UUID and a `client_secret` to use for request signing.
:::

## Authentication

Every request requires two layers of authentication:

### Layer 1 — API Key

Send your `api_token` as the `x-agio-api-key` header:

```
x-agio-api-key: <your-api-token-uuid>
```

### Layer 2 — HMAC Signature

Sign each request with your `client_secret` using HMAC-SHA256 over the payload `` `${timestamp}.${rawBody}` ``:

| Header             | Value                                                     |
| ------------------ | --------------------------------------------------------- |
| `x-agio-timestamp` | Current Unix time in **milliseconds** (`Date.now()`)      |
| `x-agio-signature` | HMAC-SHA256 hex digest of `` `${timestamp}.${rawBody}` `` |

:::warning Timestamp in Milliseconds
The timestamp must be in **milliseconds** (e.g. `1744736599000`), not seconds. Requests with a timestamp outside ±5 minutes of server time are rejected.
:::

**Replay protection:** Each `(token, timestamp, signature)` tuple is accepted only once within a 10-minute window.

## Signing Requests

### Node.js / TypeScript

```typescript
import { createHmac } from "node:crypto";

const endpoint = "https://api.agiodigital.com/partner/cards/graphql";
const apiToken = process.env.AGIO_PARTNER_API_TOKEN!;
const clientSecret = process.env.AGIO_PARTNER_CLIENT_SECRET!;

async function partnerQuery(query: string, variables?: Record<string, unknown>) {
  const body = JSON.stringify({ query, variables });
  const ts = Date.now().toString();
  const sig = createHmac("sha256", clientSecret).update(`${ts}.${body}`).digest("hex");

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-agio-api-key": apiToken,
      "x-agio-timestamp": ts,
      "x-agio-signature": sig
    },
    body
  });

  return res.json();
}
```

### Python

```python
import hmac
import hashlib
import time
import json
import urllib.request

def partner_query(query: str, variables: dict | None = None) -> dict:
    endpoint = "https://api.agiodigital.com/partner/cards/graphql"
    api_token = os.environ["AGIO_PARTNER_API_TOKEN"]
    client_secret = os.environ["AGIO_PARTNER_CLIENT_SECRET"]

    body = json.dumps({"query": query, "variables": variables}).encode()
    ts = str(int(time.time() * 1000))  # milliseconds
    sig = hmac.new(client_secret.encode(), f"{ts}.".encode() + body, hashlib.sha256).hexdigest()

    req = urllib.request.Request(endpoint, data=body, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("x-agio-api-key", api_token)
    req.add_header("x-agio-timestamp", ts)
    req.add_header("x-agio-signature", sig)

    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read())
```

## Schema

The partner endpoint exposes only `AgioCard_*` types — a scoped subset of the Agio schema. All other types (funds, auth, KYC, etc.) are excluded and will return `GRAPHQL_VALIDATION_FAILED` if queried.

Run an introspection query to discover available fields:

```graphql
{
  __schema {
    queryType {
      fields {
        name
        description
      }
    }
  }
}
```

All results are automatically scoped to your partner organization — you can only read data belonging to your organization.

## Key Queries

### List all rain users for your organization

```graphql
{
  AgioCard_rain_user {
    id
    application_status
    application_reason
    is_active
    is_terms_of_service_accepted
  }
}
```

### List cards with status

```graphql
{
  AgioCard_vw_card {
    id
    type
    status
    last4
    expiration_month
    expiration_year
    is_current
    limit_frequency
  }
}
```

### User balance

```graphql
{
  AgioCard_vw_rain_user_balance {
    rain_user_id
    balance
  }
}
```

### Monthly spend per user

```graphql
{
  AgioCard_vw_rain_user_monthly_spend {
    rain_user_id
    month
    amount_cents
  }
}
```

### Token balances (on-chain)

```graphql
{
  AgioCard_vw_rain_token_balance {
    rain_user_id
    chain
    token
    amount
  }
}
```

## Error Reference

| HTTP | `extensions.code`           | Cause                                                                                     |
| ---- | --------------------------- | ----------------------------------------------------------------------------------------- |
| 401  | —                           | Missing/invalid API key, bad signature, expired/revoked token, or timestamp out of window |
| 503  | —                           | Nonce store (Redis) temporarily unavailable                                               |
| 400  | `GRAPHQL_PARSE_FAILED`      | Syntax error in query                                                                     |
| 400  | `GRAPHQL_VALIDATION_FAILED` | Query references a type outside the `AgioCard_*` scope                                    |
| 502  | —                           | Upstream Hasura unavailable                                                               |

## Credential Rotation

Contact your Agio account manager to rotate credentials. Old credentials remain valid until explicitly revoked — there is no automatic expiry on rotation. For suspected compromise, report immediately so the old token can be hard-revoked (takes effect on the next request).
