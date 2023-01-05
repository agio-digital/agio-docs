# TypeScript Support

### The `SdkConfig` interface

```ts
/** @example `import { SdkConfig } from "agio-sdk"` */

interface SdkConfig {
  /**
   * @description user id in your database
   * @example "example-9ebc4a1a" */
  externalUserId: string;
  /**
   * @description your Agio SDK API token
   * @example "00000000-0000-0000-0000-000000000000"
   * */
  apiToken: string;
  /**
   * @description pre-fill wallet address
   * @example "0x0000000000000000000000000000000000000000"
   * */
  walletAddress?: string;
  /**
   * @description pre-fill cleanWallet input. With this setting the Agio SDK doesn't runs an AML report
   * @example true
   * */
  cleanWallet?: boolean;
  /**
   * @description disable wallet address input field, preventing user from changing it
   * @example true
   */
  walletAddressDisabled?: boolean;
  /**
   * @description id of the initial step
   * @example "status"
   * */
  step?: string;
  /**
   * @description querySelector string of the element the widget will be mounted to
   * @example "#iframe"
   * */
  element?: string | Element | null;
  /**
   * @description use KYB flow instead of KYC
   * @example true
   */
  kyb?: boolean;
  /**
   * @description use alternative KYC level
   * In case a user can't provide a valid ID document (passport), the alternative KYC level can be used
   * @example false
   */
  useAlternativeKycLevel?: boolean;
  /**
   * @description callbacks
   * */
  on?: Partial<CallbacksConfig>;
  /**
   * @description callbacks object for handling user data changes, errors, and loading
   * @defaultValue "production"
   * */
  environment?: Environment;
  /** @description overwrite iframe base URL, for testing purposes only */
  appBaseUrl?: string;
  /**
   * @description 2-letter ISO 639-1 language code, case-insensitive
   * @example "en"
   * @example "pt-BR"
   */
  lang?: string;
  webSocketImpl?: ClientOptions["webSocketImpl"];
  /**
   * @description 2-letter ISO 639-1 language code, case-insensitive
   * @example "en"
   * @example "pt-BR"
   */
  lang?: string;

  /**
   * @description disable wallet address input field, preventing user from changing it
   * @example true
   */
  walletAddressDisabled?: boolean;

  /**
   * @description use KYB flow instead of KYC
   * @example true
   */
  kyb?: boolean;

  /**
   * @description use alternative KYC level
   * In case a user can't provide a valid ID document (passport), the alternative KYC level can be used
   * @example false
   */
  useAlternativeKycLevel?: boolean;
}
```

## The `SdkState` interface

The **`SdkState`** interface represents the state of the Agio SDK. It includes a number of properties that can be accessed after the SDK has been initialized, including:

```ts
/** @example `import { SdkState } from "agio-sdk"` */

export interface SdkState {
  config: SdkConfig;
  iframe: null | HTMLIFrameElement;
  unloadIframe: null | (() => void);
  on: Partial<CallbacksConfig>;
  globalConfig: GlobalConfig;
  subscription: null | Subscription;
  mounted: boolean;
  clientUserQueryResult: ClientUserQueryResult | null;
  clientUserSubscriptionResult: ClientUserSubscriptionResult | null;
  setElement(element: string | undefined | null): void;
  mount(config?: SdkConfig): SdkState;
  unmount(): SdkState;
}
```

## Example usage

```ts
import { createAgioSdk, SdkConfig, SdkState } from "agio-sdk";

const config: SdkConfig = {
  element: "#iframe",
  externalUserId: "your-company-user-id-9eb",
  apiToken: "00000000-0000-0000-0000-000000000000"
  //...etc
};

const sdk: SdkState = createAgioSdk(config);
```
