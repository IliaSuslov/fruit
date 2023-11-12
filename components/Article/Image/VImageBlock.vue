<template lang="pug">
div
  .image-block
    NuxtImg(:src="ht.src" class="img-responsive")
    p.body2 {{ ht.caption }}
</template>

<script setup>
const props = defineProps(["ht"]);
</script>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
