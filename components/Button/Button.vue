<script setup lang="ts">
interface IButton {
  type?: "button" | "submit" | "reset";
  color?: string;
  square?: boolean;
  onClick?: () => void;
}

const { color, square, type } = defineProps<IButton>();
const emit = defineEmits(["onClick"]);
</script>
<template>
  <button
    class="button"
    :class="{
      __blue: color === 'blue',
      __square: square,
    }"
    :type="type"
    @click="emit('onClick')"
  >
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
