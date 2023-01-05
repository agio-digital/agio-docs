import { onMounted, ref, watchEffect } from "vue";

export const useNpmVersion = (packageName = "agio-sdk") => {
  const loadingText = "loading...";
  const version = ref(loadingText);

  const load = async () => {
    version.value = loadingText;
    const response = await fetch(`https://registry.npmjs.org/${packageName}`);
    const json = await response.json();
    version.value = json["dist-tags"].latest;
  };

  return {
    version,
    load
  };
};

export default useNpmVersion;
