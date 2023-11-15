<script setup>
import { onMounted } from "vue";
import VIntroBlock from "/components/Article/Intro/VIntroBlock";
import VTextBlock from "/components/Article/Text/VTextBlock";
import VImageBlock from "/components/Article/Image/VImageBlock.vue";
import VSliderBlock from "/components/Article/Slider/VSliderBlock";
import VSubscribeFormBlock from "/components/Article/SubscribeForm/VSubscribeFormBlock";
import VListBlock from "/components/Article/List/VListBlock";
import VCTAFormBlock from "/components/Article/Form/VCTAFormBlock";

const route = useRoute();
const store = useStore();
const { data, loading, error, pageType } = storeToRefs(store);

onMounted(async () => {
  await store.getTemplate(route.fullPath);
});

watchEffect(() => {
  useSeoMeta({
    title: data?.value?.meta?.title,
    description: data?.value?.meta?.description,
  });
});
</script>

<template>
  <div v-if="loading && !data?.body"><Loader /></div>
  <div v-if="error"><Error /></div>
  <div v-else class="page-container">
    <div v-for="(pageBlock, i) in data?.body" :key="i">
      <VIntroBlock
        v-if="pageBlock.type === 'article_intro_block'"
        :ht="pageBlock.data"
      />
      <VTextBlock v-if="pageBlock.type === 'text_block'" :ht="pageBlock.data" />
      <VImageBlock
        v-if="pageBlock.type === 'image_block'"
        :ht="pageBlock.data"
      />
      <VSliderBlock
        v-if="pageBlock.type === 'slider_block'"
        :ht="pageBlock.data"
      />
      <VSubscribeFormBlock v-if="pageBlock.type === 'subscribe_form_block'" />
      <VListBlock
        v-if="pageBlock.type === 'article_list_block'"
        :ht="pageBlock.data"
        :pageType="pageType"
      />
      <VCTAFormBlock v-if="pageBlock.type === 'cta_form_block'" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: var(--max-width);
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 1370px) {
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
