<template>
  <header class="header-outlet-detail">
    <div class="brand">
      <p class="brand__title">XL7</p>
    </div>

    <nav class="header-nav">
      <a href="#" class="header-nav__link">
        <div class="header-nav__item header-nav__item--active">
          <p class="item">Overview</p>
        </div>
      </a>
      <a href="#" class="header-nav__link">
        <div class="header-nav__item">
          <p class="item">Tipe & Warna</p>
        </div>
      </a>
      <a href="#" class="header-nav__link">
        <div class="header-nav__item">
          <p class="item">Eksterior</p>
        </div>
      </a>
      <a href="#" class="header-nav__link">
        <div class="header-nav__item">
          <p class="item">Interior</p>
        </div>
      </a>

      <a href="#" class="header-nav__link">
        <div class="header-nav__item">
          <p class="item">Spesifikasi</p>
        </div>
      </a>

      <a href="#" class="header-nav__link">
        <div class="header-nav__item">
          <p class="item">Harga</p>
        </div>
      </a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.header-outlet-detail {
  // border: 1px solid magenta;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: $white;
  margin-top: 62px;
  z-index: 0;
  padding: 0 1rem;

  .brand {
    // border: 1px solid magenta;
    padding: .6rem 1rem;

    &__title {
      font-size: .9rem;
      font-weight: 500;
    }
  }

  .header-nav {
    display: flex;
    overflow-y: scroll;
    flex-wrap: nowrap;
    border-top: 1px solid $white1;
    padding-top: 0.2rem;

    &__link {
      text-decoration: none;
      color: $disabled;
      display: flex;
      justify-content: center;
      align-items: center;

      .header-nav__item {
        // border: 1px solid magenta;
        padding: 0.4rem 1rem;
        border-bottom: 2px solid $white;
        margin-right: .5rem;

        &--active {
          color: $blue;
          border-bottom: 2px solid $blue;
        }

        p {
          font-size: 0.8rem;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>