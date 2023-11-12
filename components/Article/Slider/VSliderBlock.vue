<template lang="pug">
div
  .slider
    Button(@onClick="prevImage" :square="true" class="slider__button--left")
      NuxtImg(src="../public/img/left_arrow.png" width="12px")
    .slider__image-container
      NuxtImg(:src="ht[selectedImage - 1]" class="slider__image")
      p.slider__counter {{ selectedImage }} / {{ ht.length }}
    Button(@onClick="nextImage" :square="true" class="slider__button--right")
      NuxtImg(src="../public/img/right_arrow.png" width="12px")
</template>

<script setup>
const props = defineProps(["ht"]);

const selectedImage = ref(1);

const prevImage = () => {
  if (selectedImage.value === 1) {
    selectedImage.value = props.ht.length;
  } else {
    selectedImage.value = selectedImage.value - 1;
  }
};

const nextImage = () => {
  if (selectedImage.value !== props.ht.length) {
    selectedImage.value = selectedImage.value + 1;
  } else {
    selectedImage.value = 1;
  }
};
</script>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
