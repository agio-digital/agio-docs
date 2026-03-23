---
footer: false
---

# REST API

The Agio Platform exposes REST endpoints for authentication, document generation, webhook ingestion, and static assets. These complement the [GraphQL API](/api/graphql-overview) and [Hasura API](/api/hasura/overview).

## Base URLs

| Environment | Base URL                          |
| ----------- | --------------------------------- |
| Production  | `https://api.agiodigital.com`     |
| Development | `https://dev.api.agiodigital.com` |

## Authentication

Endpoints use one of four authentication methods depending on the context:

### JWT Bearer Token

Most user-facing endpoints accept a JWT issued by Auth0. Include it in the `Authorization` header:

```
Authorization: Bearer <token>
```

### Session Cookie

Browser-based clients can authenticate via an HTTP-only session cookie set by the [`/auth/token-exchange`](/api/rest/auth#post-authtoken-exchange) endpoint. Subsequent requests on the same domain are authenticated automatically.

### API Key Header

Server-to-server integrations authenticate with an API key passed in one of two headers:

```
X-API-Key: <key>
```

or

```
x-agio-api-token: <key>
```

### Webhook Signatures

External services (BitGo, Rain, Sumsub) sign their payloads. Each service uses its own verification scheme documented in the [Webhooks](/api/rest/webhooks) reference.

## Common Headers

| Header          | Value                                              | Required                        |
| --------------- | -------------------------------------------------- | ------------------------------- |
| `Content-Type`  | `application/json`                                 | For POST/PUT bodies             |
| `Authorization` | `Bearer <jwt>`                                     | JWT-authenticated endpoints     |
| `X-API-Key`     | `<key>`                                            | API-key-authenticated endpoints |
| `Accept`        | `application/json`, `application/pdf`, `text/html` | Document endpoints (varies)     |

## Error Response Format

All error responses follow a consistent JSON structure:

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired token",
    "statusCode": 401
  }
}
```

| Field        | Type   | Description                 |
| ------------ | ------ | --------------------------- |
| `code`       | string | Machine-readable error code |
| `message`    | string | Human-readable description  |
| `statusCode` | number | HTTP status code            |

### Common Error Codes

| Status | Code             | Meaning                                     |
| ------ | ---------------- | ------------------------------------------- |
| 400    | `BAD_REQUEST`    | Malformed request or invalid input          |
| 401    | `UNAUTHORIZED`   | Missing or invalid credentials              |
| 403    | `FORBIDDEN`      | Valid credentials, insufficient permissions |
| 404    | `NOT_FOUND`      | Resource does not exist                     |
| 429    | `RATE_LIMITED`   | Too many requests                           |
| 500    | `INTERNAL_ERROR` | Unexpected server error                     |

## Rate Limiting

Rate limits are applied per API key or session:

- **Standard:** 100 requests/minute
- **Extended:** 1,000 requests/minute (by arrangement)
- **Unlimited:** Available for enterprise clients

When rate-limited, the API returns `429 Too Many Requests` with a `Retry-After` header indicating how long to wait (in seconds).

## Endpoint Categories

<div class="vt-box-container next-steps">
  <a class="vt-box" href="/api/rest/auth">
    <p class="next-steps-link">Authentication</p>
    <p class="next-steps-caption">Token exchange, sessions, and SDK initialization.</p>
  </a>
  <a class="vt-box" href="/api/rest/documents">
    <p class="next-steps-link">Documents & PDFs</p>
    <p class="next-steps-caption">Invoices, receipts, quotes, and case reports.</p>
  </a>
  <a class="vt-box" href="/api/rest/webhooks">
    <p class="next-steps-link">Webhooks</p>
    <p class="next-steps-caption">External service callbacks and Hasura event triggers.</p>
  </a>
  <a class="vt-box" href="/api/rest/assets">
    <p class="next-steps-link">Static Assets</p>
    <p class="next-steps-caption">Coin icons, flags, network logos, and health checks.</p>
  </a>
</div>
