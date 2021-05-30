<template>
  <div id="Eksterior" class="eksterior">
    <div class="eksterior__header">
      <p>EKSTERIOR</p>
    </div>

    <div class="eksterior__gallery">
      <img src="@/assets/img/eksterior.png" alt="" />
    </div>

    <div class="eksterior__button">
      <p>Lihat Semua Eksterior</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.eksterior {
  width: 100%;
  background-color: $blue;
  color: $white;
  margin-top: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header {
    padding: 1.4rem;
    text-align: center;
    font-size: 1.1rem;
  }

  &__gallery {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__button {
    width: 70%;
    border: 1px solid $white;
    padding: 0.5rem 1rem;
    text-align: center;
    margin: 1.5rem;
  }
}
</style>