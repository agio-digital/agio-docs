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

---

## POST /documents/upload

Upload one or more documents (multipart form data). Used for case documents, KYC files, and general file uploads.

- **Auth required:** Admin API key or admin session

**Limits:**

| Constraint | Value |
| --- | --- |
| Max total size | 80 MB |
| Max files per request | 50 |

**Request:**

```bash
curl -X POST https://api.agiodigital.com/documents/upload \
  -H "X-API-Key: <admin_key>" \
  -F "files=@document1.pdf" \
  -F "files=@document2.jpg"
```

---

## GET /kyc/documents/:id/file

Retrieve a KYC verification document file from Sumsub. Requires a signed token containing the inspection and document IDs.

- **Auth required:** Signed JWT token (passed as query parameter)

```bash
curl "https://api.agiodigital.com/kyc/documents/abc123/file?token=<signed_jwt>"
```

---

## GET /wallets/:walletId/sparkline

Get a wallet performance sparkline as SVG or base64-encoded image. Cached for 8 minutes.

- **Auth required:** Session cookie or Bearer token (must own the wallet)

```bash
curl https://api.agiodigital.com/wallets/42/sparkline \
  -H "Authorization: Bearer <token>"
```

---

## GET /funds/:fundId/user-agreement

Retrieve the fund user agreement document.

- **Auth required:** Session cookie or Bearer token

```bash
curl https://api.agiodigital.com/funds/5/user-agreement \
  -H "Authorization: Bearer <token>"
```
