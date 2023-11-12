<template setup lang="pug">
div
  .cta-form-block
    NuxtImg.cta-form-block__img.img-responsive(src="../public/img/cta.png")
    .cta-form-block__data.cta-form-block-data
      h2.cta-form-block-data__title Стань участником проекта
      Input.cta-form-block-data__input(placeholder="имя")
      Input.cta-form-block-data__input(placeholder="телефон")
      Input.cta-form-block-data__input(placeholder="email")
      Button.cta-form-block-data__btn.btn(color="blue") Присоединиться
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
