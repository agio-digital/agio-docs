---
footer: false
---

# Documents & PDFs

REST endpoints for retrieving invoices, receipts, quotes, case reports, and user-uploaded files. Most document endpoints support both HTML and PDF output.

## GET /invoices/:invoiceId

Retrieve an invoice by ID. Supports HTML preview and PDF download.

- **Auth required:** Session cookie or Bearer token

**Query Parameters:**

| Param    | Type   | Default | Description                    |
| -------- | ------ | ------- | ------------------------------ |
| `format` | string | `html`  | Output format: `html` or `pdf` |

**Request:**

```bash
# HTML preview
curl https://api.agiodigital.com/invoices/12345 \
  -H "Authorization: Bearer <token>"

# PDF download
curl https://api.agiodigital.com/invoices/12345?format=pdf \
  -H "Authorization: Bearer <token>" \
  -o invoice.pdf
```

**Response:**

- `200 OK` with `Content-Type: text/html` or `Content-Type: application/pdf`
- `404 Not Found` if the invoice does not exist or the user lacks access

---

## GET /receipts/:receiptId

Retrieve a receipt by ID.

- **Auth required:** Session cookie or Bearer token

**Query Parameters:**

| Param    | Type   | Default | Description                    |
| -------- | ------ | ------- | ------------------------------ |
| `format` | string | `html`  | Output format: `html` or `pdf` |

**Request:**

```bash
curl https://api.agiodigital.com/receipts/67890?format=pdf \
  -H "Authorization: Bearer <token>" \
  -o receipt.pdf
```

**Response:**

- `200 OK` with `Content-Type: text/html` or `Content-Type: application/pdf`
- `404 Not Found` if the receipt does not exist or the user lacks access

---

## GET /quotes/:quoteId

Retrieve a quote document by ID.

- **Auth required:** Session cookie or Bearer token

**Query Parameters:**

| Param    | Type   | Default | Description                    |
| -------- | ------ | ------- | ------------------------------ |
| `format` | string | `html`  | Output format: `html` or `pdf` |

**Request:**

```bash
curl https://api.agiodigital.com/quotes/Q-2026-001?format=pdf \
  -H "Authorization: Bearer <token>" \
  -o quote.pdf
```

**Response:**

- `200 OK` with `Content-Type: text/html` or `Content-Type: application/pdf`
- `404 Not Found` if the quote does not exist or the user lacks access

---

## GET /product-catalog

Download the product catalog as a PDF.

- **Auth required:** Session cookie or Bearer token

**Request:**

```bash
curl https://api.agiodigital.com/product-catalog \
  -H "Authorization: Bearer <token>" \
  -o catalog.pdf
```

**Response:**

- `200 OK` with `Content-Type: application/pdf`

---

## GET /pdf/case/:caseId/report

Generate a case report PDF. Intended for server-to-server integrations.

- **Auth required:** API Key (`X-API-Key`)

**Request:**

```bash
curl https://api.agiodigital.com/pdf/case/CASE-001/report \
  -H "X-API-Key: <api_key>" \
  -o case-report.pdf
```

**Response:**

- `200 OK` with `Content-Type: application/pdf`
- `403 Forbidden` if the API key lacks permission
- `404 Not Found` if the case does not exist

---

## GET /pdf/case/:caseId/agreement

Generate a case agreement PDF. Intended for server-to-server integrations.

- **Auth required:** API Key (`X-API-Key`)

**Request:**

```bash
curl https://api.agiodigital.com/pdf/case/CASE-001/agreement \
  -H "X-API-Key: <api_key>" \
  -o case-agreement.pdf
```

**Response:**

- `200 OK` with `Content-Type: application/pdf`
- `403 Forbidden` if the API key lacks permission
- `404 Not Found` if the case does not exist

---

## GET /static/file-uploads/:name

Retrieve a user-uploaded file. Access is restricted to the file owner or an admin user.

- **Auth required:** Session cookie or Bearer token (must be the file owner or an admin)

**Request:**

```bash
curl https://api.agiodigital.com/static/file-uploads/doc_abc123.pdf \
  -H "Authorization: Bearer <token>" \
  -o uploaded-file.pdf
```

**Response:**

- `200 OK` with the file's original `Content-Type`
- `403 Forbidden` if the authenticated user is neither the file owner nor an admin
- `404 Not Found` if the file does not exist
