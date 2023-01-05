<script lang="ts" setup>
import { ref, onMounted, withDefaults, defineProps } from "vue";

const props = withDefaults(
  defineProps<{
    package?: string;
  }>(),
  {
    package: "agio-sdk"
  }
);

const version = ref("");

onMounted(async () => {
  const response = await fetch(`https://registry.npmjs.org/${props.package}`);
  const json = await response.json();
  version.value = json["dist-tags"].latest;
});
</script>

<template>
    <span>{{ version || 'loading...' }}</span>
</template>
