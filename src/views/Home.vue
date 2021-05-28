<template>
  <main class="main main-home">
    <div class="backdrop backdrop-top">
      <div class="backdrop__title">
        <p>Temukan Outlet Suzuki terdekat di daerah sekitar Anda</p>
      </div>
    </div>
 
    <!-- ini card outlet -->
    <card-outlet/>

    <div class="backdrop backdrop-bottom">
      <div class="backdrop__title">
        <p>Informasi Terbaru</p>
        <p>Seputar Promo, Berita, Event dari Suzuki</p>
      </div>
    </div>

    <!-- ini card event -->
    <card-information/>

    <!-- ini more information -->
    <more-information/>
  </main>

  <footer class="footer footer-home">
    <p>&copy; 2020 Suzuki Indonesia,</p>
    <p>All rights reserved.</p>
  </footer>
</template>

<script>
import CardOutlet from '@/components/home-view/CardOutlet.vue'
import CardInformation from '@/components/home-view/CardInformation.vue'
import MoreInformation from '@/components/home-view/MoreInformation.vue'

export default {
  components: {
    CardOutlet,
    CardInformation,
    MoreInformation
  },
  data() {
    return {

    }
  },
  methods: {

  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.main {
  // height: 100vh;
  // border: 1px solid magenta;

  .backdrop {
    background-color: $blue;
    height: 211px;
    padding-top: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    &__title {
      width: 80%;
      // border: 1px solid magenta;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 1.2rem;
      color: $white;
      text-align: center;

      p:nth-child(2) {
        margin-top: 0.5rem;
        font-size: 0.8rem;
        font-weight: 300;
      }
    }

    &-bottom {
      height: 180px;
    }
  }
}

.footer {
  background-color: $blue;
  color: $white;
  text-align: center;
  padding: 2rem 0;
  font-size: .9rem;
}
</style>