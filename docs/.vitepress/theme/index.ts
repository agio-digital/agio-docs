import "./styles/index.css";
import { h, defineComponent, ref, onMounted } from "vue";
import type { Theme } from "vitepress";
import { VPTheme } from "@vue/theme";
import { auth0 } from "../auth0";
import AuthGuard from "./components/AuthGuard.vue";
import UserMenu from "./components/UserMenu.vue";

// Layout wrapper that adds AuthGuard and UserMenu
const LayoutWithAuth = defineComponent({
  name: "LayoutWithAuth",
  setup() {
    const isClient = ref(false);
    const auth0Configured = ref(false);

    onMounted(() => {
      isClient.value = true;
      const domain = import.meta.env.VITE_AUTH0_DOMAIN;
      const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
      console.log("[Auth] Domain:", domain, "ClientId:", clientId);
      auth0Configured.value = !!(domain && clientId);
      console.log("[Auth] Configured:", auth0Configured.value);
    });

    return () => {
      // During SSR or before mount, render basic layout
      if (!isClient.value) {
        return h(VPTheme.Layout);
      }

      // If Auth0 is not configured, render without auth
      if (!auth0Configured.value) {
        return h(VPTheme.Layout, null, {
          "nav-bar-content-after": () => h("div", { class: "nav-user-area" }),
        });
      }

      // Wrap with AuthGuard when Auth0 is configured
      return h(AuthGuard, null, {
        default: () =>
          h(VPTheme.Layout, null, {
            "nav-bar-content-after": () => h("div", { class: "nav-user-area" }, [h(UserMenu)]),
          }),
      });
    };
  },
});

export default {
  extends: VPTheme,
  Layout: LayoutWithAuth,
  enhanceApp({ app }) {
    // Only register Auth0 on client-side
    if (typeof window !== "undefined") {
      const isConfigured = !!(import.meta.env.VITE_AUTH0_DOMAIN && import.meta.env.VITE_AUTH0_CLIENT_ID);
      if (isConfigured) {
        app.use(auth0);
      }
    }
  },
} satisfies Theme;
