<template>
  <article class="card-passenger">
    <router-link to="/" class="card__link" v-for="passengerCar in passengerCars" :key="passengerCar.id">
      <div class="card">
        <div class="card__image">
          <img
            :src="passengerCar.image"
            alt=""
          />
        </div>

        <div class="card__information">
          <p class="title">{{ passengerCar.title }}</p>
          <p class="start-from">Mulai Dari</p>
          <p class="price">{{ passengerCar.price }}</p>

          <div class="button-detail">
            <p>Lihat Detail</p>
          </div>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  data() {
    return {
      passengerCars: [
        {
          id: 1,
          image: 'https://sibaturaspirman.github.io/suzuki/assets/images/content/mobil-5.png',
          title: "New Carry Pick-Up",
          price: "Rp 145.600.000",
        },
        {
          id: 2,
          image: 'https://sibaturaspirman.github.io/suzuki/assets/images/content/mobil-6.png',
          title: "New Carry Luxury",
          price: "Rp 159.100.000",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.card-passenger {
  padding: 0 1rem;
  padding-top: 2rem;
  padding-bottom: 0rem;
  // border: 1px solid black;

  .card__link {
    text-decoration: none;
  }

  .card {
    width: 100%;
    display: flex;
    // border: 1px solid black;
    border-bottom: 2px solid $white1;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    &__image {
      // border: 1px solid magenta;
      overflow: hidden;
      max-width: 175px;
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 105%;
      }
    }

    &__information {
      color: $black;
      margin-left: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // border: 1px solid magenta;

      p.title {
        font-weight: 800;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      p.start-from {
        font-style: italic;
        font-size: 0.9rem;
        color: $disabled;
      }

      p.price {
        color: $blue;
        font-weight: 500;
        font-size: 1.1rem;
      }

      .button-detail {
        border: 1px solid $blue2;
        background-color: $blue1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem 0;
        font-size: 0.9rem;
        color: $blue2;
        width: 90px;
        margin-top: 1rem;
        border-radius: 2px;
      }
    }
  }
}
</style>