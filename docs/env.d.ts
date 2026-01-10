/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@vue/theme/config" {
  import { UserConfig } from "vitepress";
  const config: () => Promise<UserConfig>;
  export default config;
}

declare module "@vue/theme/highlight" {
  const createHighlighter: () => Promise<(input: string) => string>;
  export default createHighlighter;
}
