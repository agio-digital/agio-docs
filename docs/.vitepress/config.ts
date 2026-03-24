import fs from "fs";
import path from "path";
import { defineConfigWithTheme, loadEnv } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";
import baseConfig from "@vue/theme/config";
import { headerPlugin } from "./headerMdPlugin";
import { SidebarGroup } from "@vue/theme/src/vitepress/config";
import { withMermaid } from "vitepress-plugin-mermaid";

// Load env vars from project root
const env = loadEnv("", path.resolve(__dirname, "../.."));

const nav: ThemeConfig["nav"] = [
  {
    text: "SDKs",
    activeMatch: `^/(guide|style-guide|cookbook|examples|sdk|sdks)/`,
    items: [
      {
        text: "Docs",
        items: [
          { text: "Guide", link: "/guide/introduction" },
          { text: "Installation", link: "/guide/quick-start" },
          { text: "Configuration", link: "/guide/configuration" },
          { text: "Examples", link: "/examples/typescript" }
        ]
      },
      {
        text: "Agio SDK",
        items: [
          { text: "TypeScript", link: "/guide/quick-start" },
          { text: "Direct Widget", link: "/guide/direct-widget" }
        ]
      },
      {
        text: "Agio Card SDK",
        items: [
          { text: "Overview", link: "/sdks/card/" },
          { text: "Cards", link: "/sdks/card/cards" },
          { text: "Applications", link: "/sdks/card/applications" },
          { text: "Smart Contracts", link: "/sdks/card/contracts" },
          { text: "Payment System", link: "/sdks/card/payments" }
        ]
      },
      {
        text: "Sumsub SDK",
        items: [
          { text: "Overview", link: "/sdks/sumsub/" },
          { text: "Applicants", link: "/sdks/sumsub/applicants" },
          { text: "Webhooks", link: "/sdks/sumsub/webhooks" }
        ]
      }
    ]
  },
  {
    text: "API Reference",
    activeMatch: `^/api/`,
    items: [
      { text: "Overview", link: "/api/" },
      { text: "Authentication", link: "/api/authentication" },
      {
        text: "GraphQL API",
        items: [
          { text: "Overview", link: "/api/graphql-overview" },
          { text: "API Explorer", link: "/api/platform-api-explorer" }
        ]
      },
      {
        text: "Hasura API",
        items: [
          { text: "Overview", link: "/api/hasura/overview" },
          { text: "API Explorer", link: "/api/hasura-explorer" }
        ]
      },
      {
        text: "REST API",
        items: [
          { text: "Overview", link: "/api/rest/" },
          { text: "Authentication", link: "/api/rest/auth" },
          { text: "Documents & PDFs", link: "/api/rest/documents" },
          { text: "Webhooks", link: "/api/rest/webhooks" }
        ]
      }
    ]
  },
  {
    text: "Guides",
    activeMatch: `^/guides/`,
    items: [
      {
        text: "Wallets",
        items: [
          { text: "Overview", link: "/guides/wallets/" },
          { text: "Creating Wallets", link: "/guides/wallets/create" },
          { text: "Transfers & Swaps", link: "/guides/wallets/transfers" }
        ]
      },
      {
        text: "Cards",
        items: [
          { text: "Overview", link: "/guides/cards/" },
          { text: "Applying for Cards", link: "/guides/cards/apply" },
          { text: "Funding & Withdrawals", link: "/guides/cards/funding" }
        ]
      }
    ]
  }
];

const defaultSidebarItems: SidebarGroup[] = [
  {
    text: "Getting Started",
    items: [
      { text: "Introduction", link: "/guide/introduction" },
      {
        text: "Quick Start",
        link: "/guide/quick-start"
      },
      {
        text: "Configuration",
        link: "/guide/configuration"
      }
    ]
  },
  // examples
  {
    text: "Examples",
    items: [
      {
        text: "TypeScript",
        link: "/examples/typescript"
      },
      {
        text: "React Component",
        link: "/examples/react-component"
      }
    ]
  },
  {
    text: "SDKs",
    items: [
      {
        text: "TypeScript",
        link: "/guide/quick-start"
      },
      {
        text: "Direct Widget",
        link: "/guide/direct-widget"
      }
    ]
  },
  {
    text: "Data & Administration",
    items: [
      {
        text: "KYC Data",
        link: "/data/kyc"
      },
      {
        text: "KYT Data",
        link: "/data/kyt"
      },
      {
        text: "Webhooks",
        link: "/data/webhooks"
      }
    ]
  },
  // typescript
  {
    text: "More",
    items: [
      {
        text: "TypeScript Support",
        link: "/typescript/types"
      },
      {
        text: "Changelog",
        link: "/changelog/"
      }
    ]
  }
];

const apiSidebarItems: SidebarGroup[] = [
  {
    text: "API Reference",
    items: [
      { text: "Overview", link: "/api/" },
      { text: "Authentication", link: "/api/authentication" }
    ]
  },
  {
    text: "GraphQL API",
    items: [
      { text: "Overview", link: "/api/graphql-overview" },
      { text: "API Explorer", link: "/api/platform-api-explorer" },
      { text: "Queries", link: "/api/queries" },
      { text: "Mutations", link: "/api/mutations" },
      { text: "Types", link: "/api/types" },
      { text: "Examples", link: "/api/examples" }
    ]
  },
  {
    text: "Hasura API",
    items: [
      { text: "Overview", link: "/api/hasura/overview" },
      { text: "API Explorer", link: "/api/hasura-explorer" },
      { text: "Tables", link: "/api/hasura/tables" },
      { text: "Permissions", link: "/api/hasura/permissions" }
    ]
  },
  {
    text: "REST API",
    items: [
      { text: "Overview", link: "/api/rest/" },
      { text: "Authentication", link: "/api/rest/auth" },
      { text: "Documents & PDFs", link: "/api/rest/documents" },
      { text: "Webhooks", link: "/api/rest/webhooks" },
      { text: "Static Assets", link: "/api/rest/assets" }
    ]
  }
];

const cardSdkSidebarItems: SidebarGroup[] = [
  {
    text: "Agio Card SDK",
    items: [
      { text: "Overview", link: "/sdks/card/" },
      { text: "Cards", link: "/sdks/card/cards" },
      { text: "Users", link: "/sdks/card/users" },
      { text: "Applications", link: "/sdks/card/applications" }
    ]
  },
  {
    text: "Infrastructure",
    items: [
      { text: "Smart Contracts", link: "/sdks/card/contracts" },
      { text: "Payment System", link: "/sdks/card/payments" },
      { text: "Webhooks", link: "/sdks/card/webhooks" },
      { text: "TypeScript Types", link: "/sdks/card/types" }
    ]
  }
];

const sumsubSdkSidebarItems: SidebarGroup[] = [
  {
    text: "Sumsub SDK",
    items: [
      { text: "Overview", link: "/sdks/sumsub/" },
      { text: "Applicants", link: "/sdks/sumsub/applicants" },
      { text: "Transactions (KYT)", link: "/sdks/sumsub/transactions" },
      { text: "Webhooks", link: "/sdks/sumsub/webhooks" },
      { text: "TypeScript Types", link: "/sdks/sumsub/types" }
    ]
  }
];

const guidesSidebarItems: SidebarGroup[] = [
  {
    text: "Wallet Guides",
    items: [
      { text: "Overview", link: "/guides/wallets/" },
      { text: "Creating Wallets", link: "/guides/wallets/create" },
      { text: "Balances & Assets", link: "/guides/wallets/balances" },
      { text: "Transfers & Swaps", link: "/guides/wallets/transfers" }
    ]
  },
  {
    text: "Card Guides",
    items: [
      { text: "Overview", link: "/guides/cards/" },
      { text: "Applying for Cards", link: "/guides/cards/apply" },
      { text: "Creating & Managing", link: "/guides/cards/create" },
      { text: "Funding & Withdrawals", link: "/guides/cards/funding" },
      { text: "Transactions", link: "/guides/cards/transactions" }
    ]
  }
];

export const sidebar: ThemeConfig["sidebar"] = {
  "/guide/": defaultSidebarItems,
  "/examples/": defaultSidebarItems,
  "/typescript/": defaultSidebarItems,
  "/changelog/": defaultSidebarItems,
  "/data/": defaultSidebarItems,
  "/api/": apiSidebarItems,
  "/sdks/card/": cardSdkSidebarItems,
  "/sdks/sumsub/": sumsubSdkSidebarItems,
  "/guides/": guidesSidebarItems
};

// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default withMermaid(defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: "en-US",
  title: "Agio Digital Ltd. - Developer Documentation",
  description: "Developer documentation for Agio Digital Ltd. Build your own applications on top of the Agio platform.",
  srcDir: "pages",
  srcExclude: ["tutorial/**/description.md"],
  scrollOffset: "header",
  head: [
    ["meta", { name: "theme-color", content: "#193f66" }],
    ["meta", { name: "twitter:site", content: "@agiodigital" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://www.agiodigital.com/favicon.ico"
      }
    ],
    ["link", { rel: "icon", href: "https://www.agiodigital.com/favicon.ico" }],
    [
      "style",
      {},
      `
      ${fs.readFileSync(path.resolve(__dirname, "theme/styles/theme-overrides.css"), "utf-8")}
    `
    ],
    ["link", { rel: "stylesheet", href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css" }]
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    // localeLinks: [
    //   {
    //     text: "BR-pt",
    //     link: "https://br.vuejs.org/"
    //   }
    // ],

    // algolia: {
    //   indexName: "vuejs",
    //   appId: "ML0LEBN7FQ",
    //   apiKey: "f49cbd92a74532cc55cfbffa5e5a7d01",
    //   searchParameters: {
    //     facetFilters: ["version:v3"]
    //   }
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/agio-digital/" },
      { icon: "twitter", link: "https://twitter.com/agiodigital" }
    ],

    // editLink: {
    //   repo: "agio-digital/agio-sdk/docs",
    //   text: "Edit this page on GitHub"
    // },

    footer: {
      license: {
        text: "MIT License",
        link: "https://opensource.org/licenses/MIT"
      },
      copyright: `Copyright 2021-${new Date().getFullYear()} © Agio Digital Ltd.`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin);
    }
  },

  vite: {
    envDir: "..",
    define: {
      __VUE_OPTIONS_API__: false,
      "import.meta.env.VITE_AUTH0_DOMAIN": JSON.stringify(env.VITE_AUTH0_DOMAIN),
      "import.meta.env.VITE_AUTH0_CLIENT_ID": JSON.stringify(env.VITE_AUTH0_CLIENT_ID)
    },
    optimizeDeps: {
      include: ["gsap", "dynamics.js"],
      exclude: ["@vue/repl"]
    },
    // @ts-ignore
    ssr: {
      external: ["@vue/repl"]
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ["../.."]
      }
    },
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    },
    resolve: {
      // overwrite navbar title component
      alias: {
        "./VPNavBarTitle.vue": path.resolve(__dirname, "theme/components/NavBarTitle.vue")
      }
    }
  },

  vue: {
    reactivityTransform: true
  }
}));
