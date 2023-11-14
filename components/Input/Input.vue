<script setup lang="ts">
interface IInput {
  type?: string;
  placeholder?: string;
}

const { type, placeholder } = defineProps<IInput>();
const model = defineModel();
</script>

<template>
  <input
    :placeholder="placeholder"
    :type="type"
    class="input"
    v-model="model"
  />
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
