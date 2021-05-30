<template>
  <vueper-slides
    ref="myVueperSlides"
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true"
  >
    <vueper-slide
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.image"
    />
    <template v-slot:pause>
      <i class="icon pause_circle_outline"></i>
    </template>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
        {
          id: "slide-1",
          image: 'https://s3-alpha-sig.figma.com/img/d9a7/fd47/c2cffc9133bba0c585b7cda2fe87b593?Expires=1623024000&Signature=WvrnesWoKrDBZtg-WcWTgc2H0ZHffX7HY3~Q~wfE65i8~75PP7Pja~aaQtek6vFBxdFIxN1BLd52JlzATEbhgQKBCv4X9jFRj51C2JXgyf8enJJVZ3r~MEtro1W3QKs9QS519HyGrZOgeSWU7zcZzVLQq0whD6DxpPdTrF0Cc10q8-wZ0O2UI9w1p4Lbvwa74yq-EFb575Ml5xeGQP1bRIbX8uZb-HzFttSMN9Sz3LnUnhIRbrHwM5rNUvJOQlp2OUlBogqedWMw3L2orasISRV8PuWHeFaaPY2fgDKS0sdcAzxZGzxpBqE-GeUxaxrjKuWMg8~ry2TxfU6fsaP6NA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          id: "slide-2",
          image: 'https://s3-alpha-sig.figma.com/img/d9a7/fd47/c2cffc9133bba0c585b7cda2fe87b593?Expires=1623024000&Signature=WvrnesWoKrDBZtg-WcWTgc2H0ZHffX7HY3~Q~wfE65i8~75PP7Pja~aaQtek6vFBxdFIxN1BLd52JlzATEbhgQKBCv4X9jFRj51C2JXgyf8enJJVZ3r~MEtro1W3QKs9QS519HyGrZOgeSWU7zcZzVLQq0whD6DxpPdTrF0Cc10q8-wZ0O2UI9w1p4Lbvwa74yq-EFb575Ml5xeGQP1bRIbX8uZb-HzFttSMN9Sz3LnUnhIRbrHwM5rNUvJOQlp2OUlBogqedWMw3L2orasISRV8PuWHeFaaPY2fgDKS0sdcAzxZGzxpBqE-GeUxaxrjKuWMg8~ry2TxfU6fsaP6NA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          id: "slide-3",
          image: 'https://s3-alpha-sig.figma.com/img/d9a7/fd47/c2cffc9133bba0c585b7cda2fe87b593?Expires=1623024000&Signature=WvrnesWoKrDBZtg-WcWTgc2H0ZHffX7HY3~Q~wfE65i8~75PP7Pja~aaQtek6vFBxdFIxN1BLd52JlzATEbhgQKBCv4X9jFRj51C2JXgyf8enJJVZ3r~MEtro1W3QKs9QS519HyGrZOgeSWU7zcZzVLQq0whD6DxpPdTrF0Cc10q8-wZ0O2UI9w1p4Lbvwa74yq-EFb575Ml5xeGQP1bRIbX8uZb-HzFttSMN9Sz3LnUnhIRbrHwM5rNUvJOQlp2OUlBogqedWMw3L2orasISRV8PuWHeFaaPY2fgDKS0sdcAzxZGzxpBqE-GeUxaxrjKuWMg8~ry2TxfU6fsaP6NA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_viperslides.scss";

</style>