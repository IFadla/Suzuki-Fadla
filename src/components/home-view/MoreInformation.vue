<template>
  <section class="more-information">
    <div class="nav-information">
      <router-link to="/" class="nav-information__item">
        <p>Beranda</p>
      </router-link>

      <router-link to="/" class="nav-information__item">
        <p>Tentang Kami</p>
      </router-link>

      <router-link to="/" class="nav-information__item">
        <p>Outlet</p>
      </router-link>

      <router-link to="/" class="nav-information__item">
        <p>Blog</p>
      </router-link>

      <router-link to="/" class="nav-information__item">
        <p>Promo</p>
      </router-link>
    </div>

    <div class="more-information__contact">
      <div class="address">
        <p class="address__title">ALAMAT</p>
        <p class="address__map">
          <span>SUZUKI Nusantara Jaya Sentosa</span> Jl. Soekarno - Hatta no.
          289, Bojongloa Kidul Bandung 40234
        </p>

        <div class="address__button">
          <i class="fas fa-map-marker-alt"></i>
          <p>CEK GOOGLE MAPS</p>
        </div>

        <div class="address__button second">
          <i class="fas fa-phone-alt"></i>
          <p>(022) 5204645</p>
        </div>
      </div>
    </div>

    <div class="more-information__support">
      <p class="title">HOTLINE 24 JAM (Bebas Pulsa)</p>
      <img src="@/assets/img/halo-suzuki.png" class="first" />

      <p class="download">DOWNLOAD MY SUZUKI</p>
      <img src="@/assets/img/my-suzuki.png" class="sec" />
      <img src="@/assets/img/ecstar.png" class="third" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.more-information {
  background-color: $white;
  padding: 0 1rem;

  .nav-information {
    display: flex;
    border-bottom: 1px solid $white1;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.6rem 0;
    margin-bottom: 2rem;

    &__item {
      text-decoration: none;
      color: $black;

      p {
        margin: 0.5rem 0.4rem;
        font-weight: 500;
      }
    }
  }

  &__contact {
    margin-top: 1.4rem;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid $white1;

    .address {
      text-align: center;
      color: $black;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.6rem;
        font-weight: 800;
      }

      &__map {
        margin-bottom: 0.9rem;

        span {
          font-weight: 800;
        }
      }

      &__button {
        width: 70%;
        border: 2px solid $blue;
        margin-bottom: 0.8rem;
        color: $blue;
        font-weight: 500;
        padding: 0.5rem 0;
        border-radius: 0.2rem;
        display: flex;
        justify-content: center;

        i {
          margin-right: 0.8rem;
        }
      }

      &__button.second {
        border: 2px solid $blue !important;
        background-color: $blue !important;
        color: $white !important;
      }
    }
  }

  &__support {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $black;
    padding-bottom: 3rem;

    p.title,
    p.download {
      font-weight: 800;
      margin-bottom: 0.8rem;
    }

    img.first {
      width: 140px;
      margin-bottom: 2.2rem;
    }

    img.sec {
      width: 200px;
      margin-bottom: 1rem;
    }

    img.third {
      width: 150px;
    }
  }
}
</style>