<template lang="pug">
.container
  h2(v-if="pageType !== 'home'") {{ ht.title }}
  div(v-if="ht.articles").articles-container
    .container-item(v-for="(article, i) in ht.articles" :key="i" class="container-item")
      NuxtImg(:src="article.image" class="container-item-image" )
      .item-content(class="item-content")
        h3 {{ article.title }}
        a(:href="article.link")
          Button.btn Читать
  Loader(v-else)
  </template>

<script setup>
const props = defineProps(["ht", "pageType"]);
</script>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
