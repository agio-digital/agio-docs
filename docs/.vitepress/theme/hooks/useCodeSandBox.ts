import { computed, Ref, ref, watchEffect, unref } from "vue";

export const useCodeSandBox = (id: string | Ref<string>, title: string | Ref<string>, filePath: string | Ref<string>) => {
  id = unref(id);
  title = unref(title);
  filePath = unref(filePath);

  const code = ref<string>("");
  const error = ref<string>("");
  const fileExtension = computed(() => {
    const ext = (filePath as string).split(".").pop();
    if (ext === "js") return "jsx";
    if (ext === "ts") return "tsx";
    return ext;
  });

  const fileName = computed(() => (filePath as string).split("/").slice(-1)[0]);
  const url = computed(() => `https://codesandbox.io/api/v1/sandboxes/${id}`);
  // codesanbox iframe url, only page no buttons
  // get theme from css

  const theme = computed(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const iframeUrl = computed(() => `https://codesandbox.io/embed/${id}?autoresize=1&fontsize=14&hidenavigation=1&theme=${theme.value}`);

  const getFile = async () => {
    const res = await fetch(url.value);
    const { data } = await res.json();
    const fileName = (filePath as string).split("/").slice(-1)[0];
    const file = data.modules.find((mod) => mod.title === fileName);
    const code = file?.code || "";
    return code || "";
  };

  watchEffect(() => {
    if (filePath) {
      getFile()
        .then((data) => {
          code.value = data;
        })
        .catch((err) => {
          error.value = err?.message || "Error fetching file";
        });
    }
  });

  return {
    code,
    fileExtension,
    fileName,
    url,
    iframeUrl,
    getFile,
    id,
    title,
    filePath,
    error
  };
};

export default useCodeSandBox;
