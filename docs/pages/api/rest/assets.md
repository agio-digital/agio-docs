---
footer: false
---

# Static Assets

REST endpoints for coin icons, country flags, network logos, and service health checks. Asset endpoints are public and cached aggressively.

## Coin Icons

### GET /coins/:symbol/icon

Returns the icon for a coin or token by its ticker symbol (case-insensitive).

- **Auth required:** No
- **Cache:** 24 hours (`Cache-Control: public, max-age=86400`)

**Request:**

```bash
curl https://api.agiodigital.com/coins/btc/icon -o btc-icon.png
```

**Response:**

- `200 OK` with `Content-Type: image/png` (or `image/svg+xml`)
- `404 Not Found` if no icon exists for the symbol

---

### GET /static/coins/:symbol

Returns static assets for a coin (icon, metadata). Functionally similar to `/coins/:symbol/icon`.

- **Auth required:** No

```bash
curl https://api.agiodigital.com/static/coins/eth -o eth-icon.png
```

## Flags

### GET /static/flags/:symbol

Returns a country flag SVG by ISO 3166-1 alpha-2 code (case-insensitive).

- **Auth required:** No

**Request:**

```bash
curl https://api.agiodigital.com/static/flags/us -o us-flag.svg
```

**Response:**

- `200 OK` with `Content-Type: image/svg+xml`
- `404 Not Found` if no flag exists for the code

## Network Icons

### GET /static/networks/:symbol

Returns the logo for a blockchain network by symbol (e.g., `ethereum`, `polygon`, `bitcoin`).

- **Auth required:** No

**Request:**

```bash
curl https://api.agiodigital.com/static/networks/ethereum -o ethereum-logo.svg
```

**Response:**

- `200 OK` with `Content-Type: image/svg+xml` or `image/png`
- `404 Not Found` if no icon exists for the network

## Health & Status

These endpoints are used for monitoring and orchestration. None require authentication.

### GET /

Returns service identification and status.

- **Auth required:** No

**Request:**

```bash
curl https://api.agiodigital.com/
```

**Response** `200 OK`:

```json
{
  "service": "agio-platform-api",
  "status": "ok"
}
```

---

### GET /health

Returns a `204 No Content` response when the service is healthy. Used by load balancers and container orchestrators.

- **Auth required:** No

**Request:**

```bash
curl -I https://api.agiodigital.com/health
```

**Response:**

```
HTTP/2 204
```

Returns `503 Service Unavailable` if the service is unhealthy.

---

### GET /healthz

Pre-middleware health check. Responds before any authentication or request-processing middleware runs. Useful for Kubernetes liveness probes.

- **Auth required:** No

**Request:**

```bash
curl -I https://api.agiodigital.com/healthz
```

**Response:**

```
HTTP/2 204
```

---

### GET /metrics

Exposes Prometheus-formatted metrics for monitoring and alerting.

- **Auth required:** No (typically restricted by network policy)

**Request:**

```bash
curl https://api.agiodigital.com/metrics
```

**Response** `200 OK`:

```
Content-Type: text/plain; version=0.0.4
```

Returns counters, histograms, and gauges including request duration, active connections, and error rates.
