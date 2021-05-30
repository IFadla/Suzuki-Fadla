<template>
<div class="wrapper-slide">
<vueper-slides
    ref="myVueperSlides"
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true"
    class="margintop"
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
</div>
  
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
          image:
            "https://s3-alpha-sig.figma.com/img/b357/8afe/72159fc96d59708c1dd229780837f8b6?Expires=1623024000&Signature=AzSHvRLfbMVqi634dbwvNsIrK30oO~c5AsUPRZMUQKxUJ5YW-PIFVELw6NF~Yj~MLXwaFFvXuvRLEgUOSKWJC1QIfBknVeLaIpIV1g5f1XNxkkGTwBAA68FJnSt6~N6EgGoE9edfpR6J5QF-aY5ZLz-gjzmhUiNcCGgMtSIaYcVcB9uFWx4NCxu3Gp73M-30lKD-0WITfx8MtwjeT-txGdVxEu6kDvI4N7gdafLCFsw5XMUN-FWCwEvzKMPGJ5GvYTatwgPOb6T6aenR6U5zi9PJUXHRlslC891yU4mjo3A0PZBCegzFHcMabjfx2NTNU839PQLMHLkyMpObrCqo-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          id: "slide-2",
          image:
            "https://s3-alpha-sig.figma.com/img/b357/8afe/72159fc96d59708c1dd229780837f8b6?Expires=1623024000&Signature=AzSHvRLfbMVqi634dbwvNsIrK30oO~c5AsUPRZMUQKxUJ5YW-PIFVELw6NF~Yj~MLXwaFFvXuvRLEgUOSKWJC1QIfBknVeLaIpIV1g5f1XNxkkGTwBAA68FJnSt6~N6EgGoE9edfpR6J5QF-aY5ZLz-gjzmhUiNcCGgMtSIaYcVcB9uFWx4NCxu3Gp73M-30lKD-0WITfx8MtwjeT-txGdVxEu6kDvI4N7gdafLCFsw5XMUN-FWCwEvzKMPGJ5GvYTatwgPOb6T6aenR6U5zi9PJUXHRlslC891yU4mjo3A0PZBCegzFHcMabjfx2NTNU839PQLMHLkyMpObrCqo-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
          id: "slide-3",
          image:
            "https://s3-alpha-sig.figma.com/img/b357/8afe/72159fc96d59708c1dd229780837f8b6?Expires=1623024000&Signature=AzSHvRLfbMVqi634dbwvNsIrK30oO~c5AsUPRZMUQKxUJ5YW-PIFVELw6NF~Yj~MLXwaFFvXuvRLEgUOSKWJC1QIfBknVeLaIpIV1g5f1XNxkkGTwBAA68FJnSt6~N6EgGoE9edfpR6J5QF-aY5ZLz-gjzmhUiNcCGgMtSIaYcVcB9uFWx4NCxu3Gp73M-30lKD-0WITfx8MtwjeT-txGdVxEu6kDvI4N7gdafLCFsw5XMUN-FWCwEvzKMPGJ5GvYTatwgPOb6T6aenR6U5zi9PJUXHRlslC891yU4mjo3A0PZBCegzFHcMabjfx2NTNU839PQLMHLkyMpObrCqo-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_viperslides.scss";
.wrapper-slide {
  // border: 1px solid magenta;
  
  .margintop {
  z-index: -1 !important;

  margin-top: 73px;
}
}

</style>