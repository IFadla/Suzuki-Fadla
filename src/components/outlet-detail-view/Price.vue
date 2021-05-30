<template>
  <div id="Price" class="price">
    <div class="price__header">
      <p>
        DAFTAR HARGA <br />
        XL 7
      </p>
    </div>

    <div class="tag-price" v-for="(price, index) in prices" :key="index">
      <div class="tag-price__type">
        <p>{{ price.type }}</p>
      </div>
      <div class="tag-price__price">
        <p>{{ price.price }}</p>
      </div>
    </div>

    <div class="price__button">
      <p>Lihat Semua Harga Mobil</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [
        {
          type: "XL7 ZETA M/T",
          price: "Rp 232.000.000",
        },
        {
          type: "XL7 ZETA A/T",
          price: "Rp 242.500.000",
        },
        {
          type: "XL7 BETA M/T",
          price: "Rp 248.500.000",
        },
        {
          type: "XL7 BETA A/T",
          price: "Rp 259.000.000",
        },
        {
          type: "XL7 ALPHA M/T",
          price: "Rp 258.500.000",
        },
        {
          type: "XL7 ALPHA A/T",
          price: "Rp 269.000.000",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.price {
  margin: 1.2rem 0;
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  background-color: $white;

  &__header {
    padding: 1.4rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    // border: 1px solid magenta;
  }

  .tag-price {
    width: 100%;
    // border: 1px solid magenta;
    margin-bottom: 1rem;
    display: flex;
    padding: 0.8rem 1rem;
    justify-content: space-between;
    color: $black;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 0.2rem;
    background-color: $blue3;
    box-shadow: 0px 2px 8px $white1;
  }

  &__button {
    width: 70%;
    border: 2px solid $blue;
    padding: 0.5rem 1rem;
    color: $blue;
    font-weight: 500;
    margin: 1rem 0;
    margin-bottom: 2rem;
    border-radius: 0.2rem;
    text-align: center;
  }
}
</style>