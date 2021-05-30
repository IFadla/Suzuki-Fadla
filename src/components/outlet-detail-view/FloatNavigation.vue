<template>
  <div class="wrapper-form" v-if="isModal">
    <div class="wrapper-form__head">
      <p>Booking Mobil</p>
      <i class="fas fa-times" @click="toggleModal"></i>
    </div>

    <form class="form">
      <div class="form__info">
        <label for="name">Nama Lengkap</label>
        <input type="text" id="name" placeholder="Fadla Ichsan" />
      </div>

      <div class="form__info">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="fadla@example.com" />
      </div>

      <div class="form__info">
        <label for="tell">No. Handphone</label>
        <input type="text" id="tell" placeholder="08123455768" />
      </div>

      <div class="form__dropdowns">
        <div class="dropdown">
          <label for="cars">Mobil</label>
          <select name="cars" id="cars">
            <option value="volvo">XL 7</option>
            <option value="saab">Ertiga</option>
            <option value="opel">All New Ertiga Sport</option>
            <option value="audi">New Ignis</option>
            <option value="audi">Karimun</option>
          </select>
        </div>

        <div class="dropdown">
          <label for="type">Tipe</label>
          <select name="type" id="type">
            <option value="volvo">Zeta M/T</option>
            <option value="saab">Zeta A/T</option>
            <option value="opel">Beta M/T</option>
            <option value="audi">Beta A/T</option>
            <option value="audi">Alpha A/T</option>
            <option value="audi">Alpha M/T</option>
          </select>
        </div>
      </div>
    </form>

    <div class="wrapper-form__button">
      <div class="button button--batal">
        <p>Batal</p>
      </div>

      <div class="button button--kirim">
        <p>Kirim</p>
      </div>
    </div>
  </div>
  <div class="modal-booking" v-if="isModal" @click="toggleModal"></div>

  <nav class="float-navigation">
    <div class="float-navigation__items">
      <div class="button-booking" @click="toggleModal">
        <p>Booking Mobil</p>
      </div>

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
export default {
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModal = !this.isModal;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.modal-booking {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: $shadow2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper-form {
  padding: 1rem;
  color: $black;
  position: fixed;
  width: 90%;
  min-height: auto;
  max-height: 490px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: $white;
  border-radius: 0.4rem;
  z-index: 3;

  display: flex;
  justify-content: center;
  flex-direction: column;

  &__head {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    align-items: center;
    border-bottom: 1px solid $white1;
    padding-bottom: 0.5rem;
    font-weight: 500;
  }

  .form {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid $white1;

    &__info {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      label {
        margin-bottom: 0.6rem;
      }

      input {
        padding: 0.5rem;
        font-family: "Roboto", sans-serif;
        font-size: 0.9rem;
        border: none;
        border-bottom: 2px solid $white1;
        outline: none;
      }
    }

    &__dropdowns {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .dropdown {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 48%;

        label {
          margin-bottom: 0.6rem;
        }

        select {
          padding: 0.5rem;
          font-family: "Roboto", sans-serif;
          font-size: 0.9rem;
          border: none;
          border-bottom: 2px solid $white1;
          outline: none;
        }
      }
    }
  }

  &__button {
    display: flex;
    justify-content: space-between;

    .button {
      width: 48%;
      text-align: center;
      border-radius: 0.2rem;
      border: 2px solid $blue;
      padding: 0.5rem 1rem;
      color: $blue;
      font-weight: 500;

      &--kirim {
        color: $white;
        background-color: $blue;
      }
    }
  }
}

.float-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  &__items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    background-color: $white;
    padding: 0.4rem;
    border-radius: 0.8rem;
    box-shadow: 0px 10px 20px -20px $shadow2;

    .button-booking {
      background-color: $blue;
      margin: 0 1rem;
      padding: 0.8rem 1.5rem;
      color: $white;
      font-weight: 500;
      font-size: 0.9rem;
      border-radius: 0.2rem;
    }

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

    .button-booking {
      margin: 0 0.5rem;
      padding: 0.8rem 0.9rem;
      font-size: 0.8rem;
    }

    .item__link {
      .item {
        font-size: 0.6rem;
        margin: 0.3rem 0.2rem;
      }
    }
  }
}
</style>