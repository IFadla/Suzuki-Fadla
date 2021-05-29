<template>
  <main class="main main-outlet">
    <slider-outlet />
    <tabs-outlet>
      <tab-outlet title="Passenger Car">
        <card-passenger-car />
      </tab-outlet>
      <tab-outlet title="Commercial Car">
        <card-commercial-car />
      </tab-outlet>
    </tabs-outlet>

    <!--  -->
    <suzuki-services/>

    <more-information/>
  </main>
  <footer class="footer footer-outlet">
    <p>&copy; 2020 Suzuki Indonesia,</p>
    <p>All rights reserved.</p>
  </footer>
  <float-navigation/>
</template>

<script>
import SliderOutlet from "@/components/outlet-view/SliderOutlet.vue";
import TabsOutlet from "@/components/outlet-view/TabsOutlet.vue";
import TabOutlet from "@/components/outlet-view/TabOutlet.vue";
import CardCommercialCar from "@/components/outlet-view/CardCommercialCar.vue";
import CardPassengerCar from "@/components/outlet-view/CardPassengerCar.vue";
import SuzukiServices from "@/components/outlet-view/SuzukiServices.vue";
import MoreInformation from '@/components/home-view/MoreInformation.vue'
import FloatNavigation from '@/components/outlet-view/FloatNavigation.vue'


export default {
  components: {
    SliderOutlet,
    TabsOutlet,
    TabOutlet,
    CardCommercialCar,
    CardPassengerCar,
    SuzukiServices,
    MoreInformation,
    FloatNavigation
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.main-outlet {
  background-color: white;
}

.footer-outlet {
  padding-bottom: 8rem;
}
</style>