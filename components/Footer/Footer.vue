<template>
  <div class="border__top">
    <div class="footer">
      <div class="footer__top">
        <div class="footer__top-container">
          <NuxtImg src="../public/img/Logo.png" height="32px" />
          <p class="footer__top-text">
            Cтатьи о дизайне и искусстве, которые исследуют творческие
            вдохновения и актуальные тенденции, раскрывая мир эстетики и
            креативности
          </p>
        </div>
        <div>
          <p class="footer__top-text">email</p>
          <p class="footer__top-email">testblogsupport@gmail.com</p>
          <div class="footer-social">
            <NuxtImg src="../public/img/fb.png" height="30px" width="30px" />
            <NuxtImg src="../public/img/vk.png" height="30px" width="30px" />
            <NuxtImg src="../public/img/insta.png" height="30px" width="30px" />
            <NuxtImg
              src="../public/img/telega.png"
              height="30px"
              width="30px"
            />
          </div>
        </div>
      </div>
      <VSubscribeFormBlock />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VSubscribeFormBlock from "../Article/SubscribeForm/VSubscribeFormBlock";
</script>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
