# SDK Configuration

The **`SdkConfig`** interface represents the configuration options for the Agio SDK. It contains a number of properties that can be passed when initializing the SDK, including the following:

- `externalUserId`: The user ID in your database.
- `apiToken`: Your Agio SDK API token.
- `walletAddress`: The pre-filled wallet address.
- `cleanWallet`: A boolean value indicating whether the Agio SDK should run an AML report.
- `walletAddressDisabled`: A boolean value indicating whether the wallet address input field should be disabled.
- `step`: The ID of the initial step.
- `element`: A query selector string or element reference for the element the widget should be mounted to.
- `kyb`: A boolean value indicating whether to use the KYB flow instead of KYC.
- `useAlternativeKycLevel`: A boolean value indicating whether to use the alternative KYC level.
- `on`: An object of callbacks for handling user data changes, errors, and loading.
- `environment`: The environment (e.g. "production" or "development").
- `appBaseUrl`: The base URL of the iframe, for testing purposes only.
- `lang`: A 2-letter ISO 639-1 language code. For example, `"en"` for English or `"pt-BR"` for Brazilian Portuguese.
- `webSocketImpl`: An implementation of the WebSocket interface.

Some of these properties are optional, and have default values specified in the interface definition.

## Full Configuration

For more information, see the TypeScript definitions in the [TypeScript Support section](/typescript/types.html#sdk-configuration)

## Example Configuration

```ts
import { createAgioSdk } from "agio-sdk";

const config = {
  element: "#iframe",
  externalUserId: "your-company-user-id-9eb",
  apiToken: "00000000-0000-0000-0000-000000000000"
  //...etc
};

const sdk = createAgioSdk(config);
```
