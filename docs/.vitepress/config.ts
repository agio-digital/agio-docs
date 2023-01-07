import fs from "fs";
import path from "path";
import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";
import baseConfig from "@vue/theme/config";
import { headerPlugin } from "./headerMdPlugin";
import { SidebarGroup } from "@vue/theme/src/vitepress/config";

const nav: ThemeConfig["nav"] = [
  {
    text: "Docs",
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: "Guide", link: "/guide/introduction" },
      {
        text: "Installation",
        link: "/guide/quick-start"
      },
      {
        text: "Configuration",
        link: "/guide/configuration"
      },
      { text: "Examples", link: "/examples/javascript" },
    ]
  },
  {
    text: "About",
    activeMatch: `^/about/`,
    items: [
      { text: "Releases", link: "https://www.npmjs.com/package/agio-sdk?activeTab=versions" },
      { text: "Agio Website", link: "https://www.agiodigital.com/" },
      { text: "Agio App", link: "https://app.agiodigital.com" },
      { text: "Team", link: "https://www.agiodigital.com/#team" },
      { text: "Contact", link: "https://www.agiodigital.com/#contact" }
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
        text: "JavaScript",
        link: "/examples/javascript"
      },
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

export const sidebar: ThemeConfig["sidebar"] = {
  // for guide or exaple
  "/guide/": defaultSidebarItems,
  "/examples/": defaultSidebarItems,
  "/typescript/": defaultSidebarItems,
  "/changelog/": defaultSidebarItems
};

// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: "en-US",
  title: "Agio SDK",
  description: "Agio Management SDK - The Agio Management SDK is a set of tools to help you build your own applications on top of the Agio platform.",
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
    ]
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
    define: {
      __VUE_OPTIONS_API__: false
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
});
