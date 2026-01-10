---
footer: false
---

# GraphQL API Examples

Complete code examples for common API operations.

## Setup

### JavaScript/TypeScript with Apollo Client

```typescript
import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.agiodigital.com/graphql"
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "X-API-Key": process.env.AGIO_API_KEY
  }
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
```

### Python with requests

```python
import requests
import os

API_URL = "https://api.agiodigital.com/graphql"
API_KEY = os.environ.get("AGIO_API_KEY")

def graphql_request(query: str, variables: dict = None):
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY
    }
    payload = {"query": query}
    if variables:
        payload["variables"] = variables

    response = requests.post(API_URL, json=payload, headers=headers)
    return response.json()
```

## Portfolio Operations

### Get Portfolio Summary

Retrieve a complete portfolio summary including all wallets and assets.

::: code-group

```typescript [TypeScript]
const GET_PORTFOLIO = gql`
  query GetPortfolio($userId: String!) {
    netWorthUsdByUserId(userId: $userId)
    digitalAssetsByUserId(userId: $userId, limit: 100) {
      name
      symbol
      value
      usdValue
      unitPriceUsd
      walletId
    }
  }
`;

async function getPortfolio(userId: string) {
  const { data } = await client.query({
    query: GET_PORTFOLIO,
    variables: { userId }
  });

  return {
    netWorth: data.netWorthUsdByUserId,
    assets: data.digitalAssetsByUserId
  };
}

// Usage
const portfolio = await getPortfolio("auth0|abc123");
console.log(`Net Worth: $${portfolio.netWorth.toLocaleString()}`);
```

```python [Python]
query = """
query GetPortfolio($userId: String!) {
    netWorthUsdByUserId(userId: $userId)
    digitalAssetsByUserId(userId: $userId, limit: 100) {
        name
        symbol
        value
        usdValue
        unitPriceUsd
        walletId
    }
}
"""

def get_portfolio(user_id: str):
    result = graphql_request(query, {"userId": user_id})
    data = result["data"]
    return {
        "net_worth": data["netWorthUsdByUserId"],
        "assets": data["digitalAssetsByUserId"]
    }

# Usage
portfolio = get_portfolio("auth0|abc123")
print(f"Net Worth: ${portfolio['net_worth']:,.2f}")
```

:::

### Get Wallet Details

Retrieve detailed information about a specific wallet.

::: code-group

```typescript [TypeScript]
const GET_WALLET = gql`
  query GetWalletDetail($id: Int!) {
    digitalWalletDetailById(id: $id, refresh: true) {
      id
      label
      usdValue
      assets {
        symbol
        value
        usdValue
      }
      transactions(limit: 20) {
        transactionId
        type
        status
        amount
        createdAt
      }
      whitelist {
        address
        label
        status
      }
    }
  }
`;

async function getWalletDetails(walletId: number) {
  const { data } = await client.query({
    query: GET_WALLET,
    variables: { id: walletId }
  });
  return data.digitalWalletDetailById;
}

// Usage
const wallet = await getWalletDetails(123);
console.log(`Wallet: ${wallet.label}`);
console.log(`Balance: $${wallet.usdValue.toLocaleString()}`);
wallet.assets.forEach((asset) => {
  console.log(`  ${asset.symbol}: ${asset.value} ($${asset.usdValue})`);
});
```

```python [Python]
query = """
query GetWalletDetail($id: Int!) {
    digitalWalletDetailById(id: $id, refresh: true) {
        id
        label
        usdValue
        assets {
            symbol
            value
            usdValue
        }
        transactions(limit: 20) {
            transactionId
            type
            status
            amount
            createdAt
        }
    }
}
"""

def get_wallet_details(wallet_id: int):
    result = graphql_request(query, {"id": wallet_id})
    return result["data"]["digitalWalletDetailById"]

# Usage
wallet = get_wallet_details(123)
print(f"Wallet: {wallet['label']}")
print(f"Balance: ${wallet['usdValue']:,.2f}")
```

:::

## Trading Operations

### Request OTC Quote

Request a quote for an OTC trade.

::: code-group

```typescript [TypeScript]
const REQUEST_QUOTE = gql`
  mutation RequestOtcQuote($input: RequestOtcQuoteInput!) {
    requestOtcQuote(input: $input) {
      id
      from_currency
      to_currency
      quote_size
      quote_fee_perc
      expires_at
      status
    }
  }
`;

async function requestQuote(fromCurrency: string, toCurrency: string, size: number, side: "BUY" | "SELL") {
  const { data } = await client.mutate({
    mutation: REQUEST_QUOTE,
    variables: {
      input: {
        fromCurrency,
        toCurrency,
        size,
        side
      }
    }
  });
  return data.requestOtcQuote;
}

// Usage: Sell 1.5 BTC for USD
const quote = await requestQuote("BTC", "USD", 1.5, "SELL");
console.log(`Quote ID: ${quote.id}`);
console.log(`Fee: ${quote.quote_fee_perc}%`);
console.log(`Expires: ${quote.expires_at}`);
```

```python [Python]
mutation = """
mutation RequestOtcQuote($input: RequestOtcQuoteInput!) {
    requestOtcQuote(input: $input) {
        id
        from_currency
        to_currency
        quote_size
        quote_fee_perc
        expires_at
        status
    }
}
"""

def request_quote(from_currency: str, to_currency: str, size: float, side: str):
    result = graphql_request(mutation, {
        "input": {
            "fromCurrency": from_currency,
            "toCurrency": to_currency,
            "size": size,
            "side": side
        }
    })
    return result["data"]["requestOtcQuote"]

# Usage: Sell 1.5 BTC for USD
quote = request_quote("BTC", "USD", 1.5, "SELL")
print(f"Quote ID: {quote['id']}")
print(f"Fee: {quote['quote_fee_perc']}%")
```

:::

### Get Market Quotes

Get quotes from multiple exchanges for comparison.

::: code-group

```typescript [TypeScript]
const GET_QUOTES = gql`
  mutation RequestQuotes($fromCoin: String!, $toCoin: String!, $size: Float!, $side: String!) {
    requestQuotes(fromCoin: $fromCoin, toCoin: $toCoin, size: $size, side: $side) {
      exchange
      price
      fee
      proceeds
      expiresAt
    }
  }
`;

async function getMarketQuotes(fromCoin: string, toCoin: string, size: number, side: string) {
  const { data } = await client.mutate({
    mutation: GET_QUOTES,
    variables: { fromCoin, toCoin, size, side }
  });

  // Sort by best price
  return data.requestQuotes.sort((a, b) => (side === "SELL" ? b.price - a.price : a.price - b.price));
}

// Usage
const quotes = await getMarketQuotes("ETH", "USD", 10, "SELL");
quotes.forEach((q) => {
  console.log(`${q.exchange}: $${q.price} (fee: $${q.fee})`);
});
```

```python [Python]
mutation = """
mutation RequestQuotes(
    $fromCoin: String!
    $toCoin: String!
    $size: Float!
    $side: String!
) {
    requestQuotes(
        fromCoin: $fromCoin
        toCoin: $toCoin
        size: $size
        side: $side
    ) {
        exchange
        price
        fee
        proceeds
        expiresAt
    }
}
"""

def get_market_quotes(from_coin: str, to_coin: str, size: float, side: str):
    result = graphql_request(mutation, {
        "fromCoin": from_coin,
        "toCoin": to_coin,
        "size": size,
        "side": side
    })
    quotes = result["data"]["requestQuotes"]
    # Sort by best price
    reverse = side == "SELL"
    return sorted(quotes, key=lambda q: q["price"], reverse=reverse)

# Usage
quotes = get_market_quotes("ETH", "USD", 10, "SELL")
for q in quotes:
    print(f"{q['exchange']}: ${q['price']} (fee: ${q['fee']})")
```

:::

## Wallet Management

### Create a New Wallet

::: code-group

```typescript [TypeScript]
const CREATE_WALLET = gql`
  mutation CreateWallet($input: CreateDigitalWalletInput!) {
    createDigitalWallet(input: $input) {
      success
      wallet {
        id
        label
        walletType
        coin
      }
      error
    }
  }
`;

async function createWallet(label: string, walletType: string, coin: string, organizationId?: string) {
  const { data } = await client.mutate({
    mutation: CREATE_WALLET,
    variables: {
      input: {
        label,
        walletType,
        coin,
        organizationId
      }
    }
  });

  if (!data.createDigitalWallet.success) {
    throw new Error(data.createDigitalWallet.error);
  }

  return data.createDigitalWallet.wallet;
}

// Usage
const wallet = await createWallet("Treasury Wallet", "cold", "BTC", "org-123");
console.log(`Created wallet: ${wallet.id}`);
```

```python [Python]
mutation = """
mutation CreateWallet($input: CreateDigitalWalletInput!) {
    createDigitalWallet(input: $input) {
        success
        wallet {
            id
            label
            walletType
            coin
        }
        error
    }
}
"""

def create_wallet(label: str, wallet_type: str, coin: str, organization_id: str = None):
    result = graphql_request(mutation, {
        "input": {
            "label": label,
            "walletType": wallet_type,
            "coin": coin,
            "organizationId": organization_id
        }
    })
    data = result["data"]["createDigitalWallet"]
    if not data["success"]:
        raise Exception(data["error"])
    return data["wallet"]

# Usage
wallet = create_wallet("Treasury Wallet", "cold", "BTC", "org-123")
print(f"Created wallet: {wallet['id']}")
```

:::

### Manage Whitelist

Add and remove addresses from a wallet's whitelist.

::: code-group

```typescript [TypeScript]
const ADD_WHITELIST = gql`
  mutation AddWhitelist($walletId: Int!, $label: String!, $address: String!) {
    addDigitalWalletWhitelistEntry(digitalWalletId: $walletId, label: $label, address: $address) {
      id
      address
      label
      status
    }
  }
`;

async function addToWhitelist(walletId: number, label: string, address: string) {
  const { data } = await client.mutate({
    mutation: ADD_WHITELIST,
    variables: { walletId, label, address }
  });
  return data.addDigitalWalletWhitelistEntry;
}

// Usage
const entry = await addToWhitelist(123, "Exchange Hot Wallet", "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh");
console.log(`Whitelist entry ${entry.id}: ${entry.status}`);
```

```python [Python]
mutation = """
mutation AddWhitelist($walletId: Int!, $label: String!, $address: String!) {
    addDigitalWalletWhitelistEntry(
        digitalWalletId: $walletId
        label: $label
        address: $address
    ) {
        id
        address
        label
        status
    }
}
"""

def add_to_whitelist(wallet_id: int, label: str, address: str):
    result = graphql_request(mutation, {
        "walletId": wallet_id,
        "label": label,
        "address": address
    })
    return result["data"]["addDigitalWalletWhitelistEntry"]

# Usage
entry = add_to_whitelist(
    123,
    "Exchange Hot Wallet",
    "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
)
print(f"Whitelist entry {entry['id']}: {entry['status']}")
```

:::

## Document Generation

### Generate Invoice PDF

::: code-group

```typescript [TypeScript]
const DOWNLOAD_INVOICE = gql`
  mutation DownloadInvoice($invoiceId: Int!) {
    downloadInvoicePdf(invoiceId: $invoiceId)
  }
`;

async function downloadInvoice(invoiceId: number): Promise<Buffer> {
  const { data } = await client.mutate({
    mutation: DOWNLOAD_INVOICE,
    variables: { invoiceId }
  });

  // data.downloadInvoicePdf is base64 encoded
  return Buffer.from(data.downloadInvoicePdf, "base64");
}

// Usage
import fs from "fs";

const pdfBuffer = await downloadInvoice(456);
fs.writeFileSync("invoice-456.pdf", pdfBuffer);
console.log("Invoice saved to invoice-456.pdf");
```

```python [Python]
import base64

mutation = """
mutation DownloadInvoice($invoiceId: Int!) {
    downloadInvoicePdf(invoiceId: $invoiceId)
}
"""

def download_invoice(invoice_id: int) -> bytes:
    result = graphql_request(mutation, {"invoiceId": invoice_id})
    # Response is base64 encoded
    return base64.b64decode(result["data"]["downloadInvoicePdf"])

# Usage
pdf_data = download_invoice(456)
with open("invoice-456.pdf", "wb") as f:
    f.write(pdf_data)
print("Invoice saved to invoice-456.pdf")
```

:::

## Error Handling

### Handling GraphQL Errors

::: code-group

```typescript [TypeScript]
import { ApolloError } from "@apollo/client";

async function safeQuery<T>(queryFn: () => Promise<T>): Promise<T | null> {
  try {
    return await queryFn();
  } catch (error) {
    if (error instanceof ApolloError) {
      // Handle GraphQL errors
      error.graphQLErrors.forEach((gqlError) => {
        console.error(`GraphQL Error: ${gqlError.message}`);

        const code = gqlError.extensions?.code;
        switch (code) {
          case "UNAUTHORIZED":
            console.error("Invalid API key");
            break;
          case "FORBIDDEN":
            console.error("Insufficient permissions");
            break;
          case "RATE_LIMITED":
            console.error("Rate limit exceeded");
            break;
        }
      });

      // Handle network errors
      if (error.networkError) {
        console.error(`Network Error: ${error.networkError.message}`);
      }
    }
    return null;
  }
}

// Usage
const portfolio = await safeQuery(() => getPortfolio("auth0|abc123"));
if (portfolio) {
  console.log(`Net Worth: $${portfolio.netWorth}`);
}
```

```python [Python]
def safe_request(query: str, variables: dict = None):
    try:
        result = graphql_request(query, variables)

        if "errors" in result:
            for error in result["errors"]:
                code = error.get("extensions", {}).get("code")
                message = error.get("message")

                print(f"GraphQL Error: {message}")

                if code == "UNAUTHORIZED":
                    print("Invalid API key")
                elif code == "FORBIDDEN":
                    print("Insufficient permissions")
                elif code == "RATE_LIMITED":
                    print("Rate limit exceeded")

            return None

        return result["data"]

    except requests.exceptions.RequestException as e:
        print(f"Network Error: {e}")
        return None

# Usage
data = safe_request(query, {"userId": "auth0|abc123"})
if data:
    print(f"Net Worth: ${data['netWorthUsdByUserId']}")
```

:::

## Next Steps

- [Queries Reference](/api/queries) - Full list of available queries
- [Mutations Reference](/api/mutations) - Full list of available mutations
- [Types Reference](/api/types) - GraphQL type definitions
- [Hasura API](/api/hasura/overview) - Database-level access
