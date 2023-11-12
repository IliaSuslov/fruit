<script setup lang="ts">
interface IInput {
  type?: string;
  placeholder?: string;
}

const { type, placeholder } = defineProps<IInput>();
</script>

<template>
  <input :placeholder="placeholder" :type="type" class="input" />
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
