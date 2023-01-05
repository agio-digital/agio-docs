---
title: JavaScript
outline: deep


---

<script setup>
    import CodeSandBox from "@theme/components/CodeSandBox.vue";
</script>

# JavaScript {#javascript}

## Code Example {#code-example}

<ClientOnly>
    <CodeSandBox id="nostalgic-keldysh-cj5y83" title="javascript" filePath="src/index.js" />
</ClientOnly>

```tsx
import { AgioSdkComponent } from "agio-sdk/lib/browser/react";

function App() {
  const props = {
    walletAddress: "0x0000000000000000000000000000000000000000",
    apiToken: "08264026-0ae3-4a3f-b28c-5d772425cff0",
    externalUserId: "example-external-user2",
    environment: "development",
    step: "kyc",
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
  };

  return (
    <div className="App">
      <h2>React JavaScript</h2>
      <AgioSdkComponent {...props} />
    </div>
  );
}

export default App;
```
