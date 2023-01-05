---
footer: false
title: Quick Start
---

# Quick Start {#quick-start}

## To use the Agio SDK, follow these steps:

1. Install the Agio SDK using npm or yarn:

<small>**With npm:**</small>

```bash
npm install agio-sdk
```

<small>**...or with yarn:**</small>

```bash
yarn add agio-sdk
```

2. Import the `createAgioSdk` function from the Agio SDK and create an instance of the SDK by passing in a configuration object:

<small>**Simple:**</small>

```js
import { createAgioSdk } from "agio-sdk";

const sdk = createAgioSdk({
  element: "#iframe",
  apiToken: "00000000-0000-0000-0000-000000000000",
  externalUserId: "example-9ebc4a1a"
});

// html: <div id="iframe"></div>
```

<small>**Advanced:**</small>

```js
import { createAgioSdk } from "agio-sdk";

const sdk = createAgioSdk({
  /** @description Element or string */
  element: "#iframe",
  /** @description user id in your database */
  externalUserId: "example-9ebc4a1a",
  /** @description pre-fill wallet address */
  walletAddress: "0x0000000000000000000000000000000000000000",
  /** @description your Agio SDK API token */
  apiToken: "00000000-0000-0000-0000-000000000000",
  /** @description register callbacks */
  on: {
    userLoad: (userLoad) => {
      console.log("[userLoad]", { userLoad });
    },
    userData: (userData) => {
      console.log("[userData]", { userData });
    },
    error: (error) => {
      console.log("[error]", { error });
    },
    load: (iframe) => {
      console.log("[load]", { iframe });
    },
    unload: (iframe) => {
      console.log("[unload]", { iframe });
    },
    mount: (state) => {
      console.log("[mount]", { state });
    },
    unmount: (state) => {
      console.log("[unmount]", { state });
    }
  }
});

/** @description or register callbacks through the sdk object */
sdk.on.load = (iframe) => {
  console.log("[load]", { iframe });
};
```

3. You can now mount the iframe by calling the `mount` method on the SDK instance, passing in the element that you want to mount it to:

```js
sdk.mount("#iframe");
```

4. You can unmount the iframe by calling the `unmount` method on the SDK instance:

```js
sdk.unmount();
```
