<template lang="pug"> 
div
  .intro-block
    NuxtImg.intro-block__img-responsive(:src="ht.image")
    div
      h1 {{ ht.title }}
      .intro-block__text-container
        .intro-block__text
          NuxtImg(src="../public/img/clock.png", height="16px")
          p.body2
            | {{ ht.reading_time }} мин время чтения
        .intro-block__text
          NuxtImg(src="../public/img/eye.png", height="10px")
          p.body2
            | {{ ht.views_count }} прочитало статью
      p {{ ht.short_description }}
</template>

<script setup>
const props = defineProps(["ht"]);
</script>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
