<template>
  <div class="headline">
    <div class="headline__title">
      <p>GEAR <span>TO</span> ACCOMPLISH</p>
    </div>

    <div class="headline__desc">
      <p>
        Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter.
        Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi
        penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi
        SUV yang luar biasa di kelasnya
      </p>
    </div>

    <div class="headline__buttons">
      <div class="button__unduh">
        <p>UNDUH BROSUR</p>
      </div>

      <div class="button__harga">
        <p>HARGA</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
@import "@/assets/styles/_variables.scss";

.headline {
  background-color: $blue;
  padding: 1.8rem 1rem;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    text-align: center;
    margin-bottom: 1rem;

    p {
      font-size: 1.8rem;
      font-weight: 600;
      font-style: italic;

      span {
        font-size: 1.2rem;
      }
    }
  }

  &__desc {
    width: 98%;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid $blue2;
    margin-bottom: 1rem;

    p {
      font-size: 0.9rem;
    }
  }

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .button__unduh,
    .button__harga {
      border: 2px solid $white;
      padding: 0.4rem 1rem;
      margin: 0 0.5rem;
      font-weight: 500;
    }

    .button__harga {
      background-color: $white;
      color: $blue;
    }
  }
}
</style>