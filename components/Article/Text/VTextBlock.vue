<template>
  <div class="text-block-content" v-html="ht"></div>
</template>

<script setup>
const props = defineProps(["ht"]);

const contentContainer = ref(null);
</script>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
