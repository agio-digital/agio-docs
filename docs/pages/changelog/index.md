# Changelog

## Version 1.1.6

_(no breaking changes)_

1. Moved docs to [docs.agiodigital.com](https://docs.agiodigital.com)

## Version 1.1.5

_(no breaking changes)_

1. devDep: generated updated types for `ClientUserQueryResult`, `ClientQueryResult` and `ClientUserSubscriptionResult` (doesn't affect SDK)
2. devDep: ability to run npm scripts codegen sub-commands `yarn codegen:download`, `yarn codegen:generare`, `yarn codegen` (doesn't affect SDK)
3. devDep: import types with type keyword. ex: `import type { foo } from 'bar'` (doesn't affect SDK)
4. **SDK:** it is recommended to use type `SdkConfig` instead of `Config` for better intellisense support. `Config` is marked as deprecated
5. **SDK:** added new properties to `SdkConfig` interface. Use these to initialize the SDK widget with selected language, KYC/KYB, address disabled alternative KYC flow

```ts
const config: SdkConfig = {
  // ...other properties

  /**
  * @description 2-letter ISO 639-1 language code, case-insensitive
  * @example "en"
  * @example "pt-BR"
  */
  lang?: string

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
