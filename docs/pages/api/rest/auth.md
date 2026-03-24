---
footer: false
---

# Authentication

REST endpoints for session management, token exchange, and SDK initialization.

## POST /auth/token-exchange

Exchange an Auth0-issued token for a platform session. This is the primary authentication flow for browser-based clients.

- **Auth required:** Auth0 JWT (Bearer token)

**Request:**

```bash
curl -X POST https://api.agiodigital.com/auth/token-exchange \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <auth0_token>"
```

**Response** `200 OK`:

```json
{
  "user": {
    "id": "auth0|abc123",
    "email": "user@example.com",
    "roles": ["user"]
  },
  "expiresAt": "2026-03-24T12:00:00Z"
}
```

A session cookie is set on the response. Subsequent requests from the same browser are authenticated automatically.

---

## GET /auth/session

Return the current session information for the authenticated user.

- **Auth required:** Session cookie or Bearer token

**Request:**

```bash
curl https://api.agiodigital.com/auth/session \
  -H "Authorization: Bearer <token>"
```

**Response** `200 OK`:

```json
{
  "user": {
    "id": "auth0|abc123",
    "email": "user@example.com",
    "roles": ["user"],
    "organizationId": "org_abc123"
  },
  "expiresAt": "2026-03-24T12:00:00Z"
}
```

Returns `401 Unauthorized` if no valid session exists.

---

## DELETE /auth/session

Destroy the current session.

- **Auth required:** Session cookie or Bearer token

**Request:**

```bash
curl -X DELETE https://api.agiodigital.com/auth/session \
  -H "Authorization: Bearer <token>"
```

**Response** `200 OK`:

```json
{
  "message": "Session destroyed",
  "success": true
}
```

---

## GET /auth/logout

Log out and redirect to Auth0 logout URL.

- **Auth required:** No

**Query Parameters:**

| Param | Type | Description |
| --- | --- | --- |
| `returnTo` | string | URL to redirect after logout |
| `x-client-type` | string | `api` or `browser` |

**Request:**

```bash
curl https://api.agiodigital.com/auth/logout?returnTo=https://app.agiodigital.com
```

---

## POST /auth/alchemy-jwt

Generate a scoped JWT for Alchemy Smart Account operations (blockchain wallet interactions).

- **Auth required:** Session cookie or Bearer token

**Request:**

```bash
curl -X POST https://api.agiodigital.com/auth/alchemy-jwt \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>"
```

**Response** `200 OK`:

```json
{
  "token": "eyJhbGciOiJSUzI1NiIs...",
  "expiresAt": "2026-03-23T13:00:00Z"
}
```

---

## POST /auth/workflow-sdk/init-token

Initialize a Workflow SDK session token. Used by external integrations consuming the Agio Workflow SDK.

- **Auth required:** API Key (`X-API-Key`)

**Request:**

```bash
curl -X POST https://api.agiodigital.com/auth/workflow-sdk/init-token \
  -H "Content-Type: application/json" \
  -H "X-API-Key: <api_key>" \
  -d '{
    "userId": "auth0|abc123",
    "organizationId": "org_abc123"
  }'
```

| Field            | Type   | Required | Description     |
| ---------------- | ------ | -------- | --------------- |
| `userId`         | string | Yes      | Auth0 user ID   |
| `organizationId` | string | Yes      | Organization ID |

**Response** `200 OK`:

```json
{
  "token": "wf_sdk_abc123...",
  "expiresAt": "2026-03-23T14:00:00Z"
}
```

---

## POST /auth/kyc-sdk/init-token

Initialize a KYC SDK session token. Used to launch the Sumsub-powered identity verification flow.

- **Auth required:** API Key (`X-API-Key`)

**Request:**

```bash
curl -X POST https://api.agiodigital.com/auth/kyc-sdk/init-token \
  -H "Content-Type: application/json" \
  -H "X-API-Key: <api_key>" \
  -d '{
    "userId": "auth0|abc123",
    "levelName": "basic-kyc-level"
  }'
```

| Field       | Type   | Required | Description                               |
| ----------- | ------ | -------- | ----------------------------------------- |
| `userId`    | string | Yes      | Auth0 user ID                             |
| `levelName` | string | No       | KYC level (defaults to `basic-kyc-level`) |

**Response** `200 OK`:

```json
{
  "token": "kyc_sdk_abc123...",
  "expiresAt": "2026-03-23T13:30:00Z"
}
```

---

## OIDC Discovery

Standard OpenID Connect discovery endpoints for token verification and key rotation.

### GET /.well-known/openid-configuration

Returns the OpenID Connect discovery document.

- **Auth required:** No

```bash
curl https://api.agiodigital.com/.well-known/openid-configuration
```

### GET /.well-known/jwks.json

Returns the JSON Web Key Set used to verify JWTs issued by the platform.

- **Auth required:** No

```bash
curl https://api.agiodigital.com/.well-known/jwks.json
```

**Response** `200 OK`:

```json
{
  "keys": [
    {
      "kty": "RSA",
      "kid": "key-id-1",
      "use": "sig",
      "alg": "RS256",
      "n": "...",
      "e": "AQAB"
    }
  ]
}
```
