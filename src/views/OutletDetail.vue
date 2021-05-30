<template>
  <main class="main main-outlet-detail">
    <float-header />
    <slider-outlet-detail />
    <!-- Headline -->
    <headline />
    <!-- Tipe Warna -->

    <!-- Eksterior -->
    <eksterior />

    <!-- Interior -->
    <interior />

    <!-- Spesifikasi -->
    <specification />

    <!-- Harga -->
    <price />

    <more-information />
  </main>
  <footer class="footer footer-outlet-detail">
    <p>&copy; 2020 Suzuki Indonesia,</p>
    <p>All rights reserved.</p>
  </footer>

  <!-- Float Navigation -->
  <float-navigation/>
</template>

<script>
import FloatHeader from "@/components/outlet-detail-view/FloatHeader.vue";
import SliderOutletDetail from "@/components/outlet-detail-view/SliderOutletDetail.vue";
import Headline from "@/components/outlet-detail-view/Headline.vue";
import Eksterior from "@/components/outlet-detail-view/Eksterior.vue";
import Interior from "@/components/outlet-detail-view/Interior.vue";
import Specification from "@/components/outlet-detail-view/Specification.vue";
import Price from "@/components/outlet-detail-view/Price.vue";
import FloatNavigation from "@/components/outlet-detail-view/FloatNavigation.vue";
import MoreInformation from "@/components/home-view/MoreInformation.vue";

export default {
  components: {
    FloatHeader,
    SliderOutletDetail,
    Headline,
    Eksterior,
    Interior,
    Specification,
    Price,
    FloatNavigation,
    MoreInformation
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.footer-outlet-detail {
  padding-bottom: 8rem;
}
</style>