<template>
  <nav class="float-navigation">
    <div class="float-navigation__items">
      <router-link to="/" class="item__link">
        <div class="item">
          <div class="item__icon item__icon--whatsapp">
            <img src="@/assets/icon/icon-whatsapp.png" alt="" />
          </div>

          <p>WhatsApp</p>
        </div>
      </router-link>

      <router-link to="/" class="item__link">
        <div class="item">
          <div class="item__icon item__icon--harga">
            <img src="@/assets/icon/icon-daftar-harga.png" alt="" />
          </div>

          <p>Daftar Harga</p>
        </div>
      </router-link>

      <router-link to="/" class="item__link">
        <div class="item">
          <div class="item__icon item__icon--pesan">
            <img src="@/assets/icon/icon-pesan-servis.png" alt="" />
          </div>

          <p>Pesan Servis</p>
        </div>
      </router-link>

      <router-link to="/" class="item__link">
        <div class="item">
          <div class="item__icon">
            <img src="@/assets/icon/icon-simulasi-kredit.png" alt="" />
          </div>

          <p>Simulasi Kredit</p>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.float-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  &__items {
    display: flex;
    justify-content: center;
    width: auto;
    background-color: $white;
    padding: 0.4rem;
    border-radius: 0.8rem;
    box-shadow: 0px 10px 20px -20px $shadow2;

    .item__link {
      text-decoration: none;

      .item {
        color: $black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;
        margin: 0.3rem 0.9rem;

        .item__icon {
          background-color: $blue1;
          width: 35px;
          height: 35px;
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.4rem;

          img {
            width: 15px;
          }

          &--whatsapp {
            background-color: $green;

            img {
              width: 24px;
            }
          }

          &--harga {
            img {
              width: 22px;
            }
          }

          &--pesan {
            img {
              width: 20px;
            }
          }
        }

        p {
          font-weight: 500;
        }
      }
    }
  }
}

@media only screen and (max-width: 375px) {
  .float-navigation__items {
    justify-content: space-between;
    width: 92%;
    padding: 0.4rem 1rem;

    .item__link {
      .item {
        font-size: 0.6rem;
        margin: 0.3rem 0.2rem;
      }
    }
  }
}
</style>