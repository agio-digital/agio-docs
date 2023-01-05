<script lang="ts" setup>
import { useCodeSandBox } from "./../hooks/useCodeSandBox";
import MarkdownIt from "markdown-it";
import { ref, toRefs, watch } from "vue";
import { preWrapperPlugin } from "../md/pre-wrapper";
import { linkPlugin } from "../md/link";
import { useClipboard } from "@vueuse/core";
import hljs from "highlight.js";

const getMdRenderer = async () => {
  const md = MarkdownIt({
    html: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' + hljs.highlight(str, { language: lang, ignoreIllegals: true }).value + "</code></pre>";
        } catch (error) {
          console.log(error);
        }
      }

      return '<pre class="hljs"><code>' + MarkdownIt().utils.escapeHtml(str) + "</code></pre>";
    }
  });

  //   md.use(componentPlugin, {});
  md.use(preWrapperPlugin);
  md.use(linkPlugin, { target: "_blank", rel: "noreferrer" });

  console.log(md);

  return md;
};

const props = withDefaults(
  defineProps<{
    title: string;
    id: string;
    filePath: string;
    tab?: "preview" | "code";
  }>(),
  {
    tab: "code"
  }
);

const { title, id, filePath } = toRefs(props);
const { code, fileExtension, iframeUrl } = useCodeSandBox(id, title, filePath);
const tabs = ref([
  {
    label: "Code",
    value: "code"
  },
  {
    label: "Preview",
    value: "preview"
  }
]);

const activeTab = ref(props.tab);

// render code

const renderedMd = ref("");

watch(
  code,
  async (val) => {
    if (!val) return;

    const renderer = await getMdRenderer();

    console.log(renderer);

    const codeBlock = `
\`\`\`${fileExtension.value}
${val}
\`\`\`
    `;

    renderedMd.value = renderer.render(codeBlock);
  },
  {
    immediate: true
  }
);

const cb = useClipboard();

const handleClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("copy")) {
    setTimeout(() => {
      const code = target.parentElement?.querySelector("code")?.innerText;
      cb.copy(code || "");
    }, 50);
  }
};
</script>

<template>
  <!-- <div>
    <iframe :src="iframeUrl" class="w-full h-full" v-if="id"></iframe>
    <div v-html="renderedMd" @click="handleClick($event)"></div>
  </div> -->
  <!-- with tabs -->
  <div class="code-sandbox">
    <div class="tabs">
      <div class="tab" v-for="tab in tabs" :key="tab.value" :class="{ active: activeTab === tab.value }" @click="activeTab = tab.value">
        {{ tab.label }}
      </div>
    </div>

    <div class="tab-content" v-if="activeTab === 'code'">
      <div v-html="renderedMd" @click="handleClick($event)"></div>
    </div>
    <div class="tab-content" v-if="activeTab === 'preview'">
      <iframe :src="iframeUrl" class="w-full h-full" v-if="id"></iframe>
    </div>
  </div>
</template>

<style>
@import "https://highlightjs.org/static/demo/styles/base16/material-palenight.css";

.hljs-attr,
.hljs-link,
.hljs-literal,
.hljs-number,
.hljs-symbol,
.hljs-variable.constant_ {
  color: #f07178;
}
</style>

<style scoped>
iframe {
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: 0;
  border: 0;
}

.code-sandbox {
  border: 1px solid var(--vt-c-divider-light);
  border-radius: 8px;
  overflow: hidden;
}

.tabs {
  display: flex;
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 0 0.5rem;
}

.tab {
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
}

.tab.active {
  font-weight: 600;
}

::v-deep(div[class*="language-"]) {
  margin: 0;
  border-radius: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
