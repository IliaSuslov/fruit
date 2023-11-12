<script setup lang="ts">
interface IButton {
  type?: string;
  color?: string;
  square?: bolean;
  onClick?: () => void;
}

const props = defineProps<IButton>();
const emit = defineEmits();
</script>
<template>
  <button
    class="button"
    :class="{
      __blue: color === 'blue',
      __square: square,
    }"
    :style="class"
    :type="type"
    @click="emit('onClick')"
  >
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
