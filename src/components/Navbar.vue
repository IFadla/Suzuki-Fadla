<template>
  <header :class="{ headerShow: isShowList }">
    <div class="overlay" :class="{ overlayShow: isShowList }"></div>
    <nav class="navbar" :class="{ navbarShadow: isShowList }">
      <router-link to="/" class="navbar__link">
        <div class="navbar__brand">
          <img src="@/assets/icon/brand-suzuki.png" class="navbar__logo" />
          <div class="navbar__title">
            <p>PT.Nusantara Jaya Sentosa</p>
            <p>Main Dealer Suzuki Jawa Barat</p>
          </div>
        </div>
      </router-link>

      <div class="navbar__burger" @click="showList">
        <span :class="{ topBurger: isShowList }"></span>
        <span :class="{ midBurger: isShowList }"></span>
        <span :class="{ bottomBurger: isShowList }"></span>
      </div>

      <div class="navbar__list" :class="{ listShow: isShowList }">
        <div class="navbar__menu">
          <div class="navbar__items">
            <router-link to="/" class="navbar__link" @click="showList">
              <p>Beranda</p>
            </router-link>

            <router-link to="/outlet" class="navbar__link" @click="showList">
              <p>Tentang Kami</p>
            </router-link>

            <router-link to="/" class="navbar__link" @click="showList">
              <p>Mobil</p>
            </router-link>

            <router-link to="/" class="navbar__link" @click="showList">
              <p>Service</p>
            </router-link>

            <router-link to="/" class="navbar__link" @click="showList">
              <p>Sparepart</p>
            </router-link>

            <router-link to="/" class="navbar__link" @click="showList">
              <p>Hubungi Kami</p>
            </router-link>
          </div>

          <div class="navbar__line">
            <span></span>
          </div>

          <div class="navbar__call">
            <i class="fas fa-phone-alt"></i>
            <p>(022) 6204645</p>
          </div>

          <div class="navbar__support">
            <img src="@/assets/img/halo-suzuki.png" />
            <img src="@/assets/img/my-suzuki.png" />
          </div>
        </div>

        <div class="navbar__mark">
          <p>&copy; 2020 Suzuki Indonesia.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowList: false,
    };
  },
  methods: {
    showList() {
      this.isShowList = !this.isShowList;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  z-index: 1;

  .overlay {
    position: fixed;
    width: 0;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: unset;
    z-index: -1;
    transition: all 0.2s ease;
  }

  .overlayShow {
    width: 100vw;
    background-color: $shadow2;
    z-index: 1;
  }

  .navbar {
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 15px $shadow1;
    position: relative;
    height: 62px;

    &__link {
      text-decoration: none;
    }

    &__brand {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 36px;
        margin-right: 0.8rem;
      }

      .navbar__title {
        color: $black;
        font-size: 0.8rem;

        p:nth-child(1) {
          font-weight: 800;
        }
      }
    }

    &__burger {
      width: 35px;
      height: 35px;
      border-radius: 50px;
      background-color: $blue;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      overflow: hidden;
      cursor: pointer;
      position: fixed;
      right: 1rem;
      top: 0.8rem;

      span:nth-child(1) {
        display: block;
        width: 20px;
        height: 2px;
        background-color: $white;
        transform: translateY(-4px);
        transition: all 0.3s ease;
      }

      span.topBurger {
        transform: rotate(45deg) translate(0px, 2px);
      }

      span:nth-child(2) {
        display: block;
        width: 20px;
        height: 2px;
        background-color: $white;
        transition: all 0.3s ease;
      }

      span.midBurger {
        transform: translateX(50px);
        background-color: transparent;
      }

      span:nth-child(3) {
        display: block;
        width: 20px;
        height: 2px;
        background-color: $white;
        transform: translateY(4px);
        transition: all 0.3s ease;
      }

      span.bottomBurger {
        transform: rotate(-45deg) translate(0px, -2px);
      }
    }

    &__list {
      width: 80vw;
      height: 100vh;
      background-color: $white;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      overflow-y: scroll;
      z-index: 1;
      padding: 0 1.4rem;
      padding-bottom: 1.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform: translateX(100vw);
      transition: all 0.5s ease;

      .navbar__menu {
        padding-top: 4.8rem;

        .navbar__items {
          .navbar__link {
            color: $black;
            font-size: 1.2rem;
            font-weight: 500;

            p {
              margin-bottom: 0.8rem;
            }
          }
        }

        .navbar__line {
          margin: 1.4rem 0;
          display: flex;
          justify-content: center;

          span {
            display: block;
            width: 100%;
            height: 1px;
            background-color: $white1;
          }
        }

        .navbar__call {
          width: 100%;
          height: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: $blue;
          color: $white;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;

          i {
            margin-right: 0.6rem;
          }
        }

        .navbar__support {
          width: 100%;
          margin: 1.8rem 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;

          img:nth-child(1) {
            width: 5rem;
          }
          img:nth-child(2) {
            width: 11.8rem;
          }
        }
      }

      .navbar__mark {
        font-size: 0.9rem;
      }
    }

    .listShow {
      transform: translateX(0);
    }
  }

  .navbarShadow {
    box-shadow: unset;
  }
}

@media only screen and (min-width: 768px) {
  .navbar__support {
    justify-content: space-evenly !important;
  }
}

@media only screen and (max-width: 360px) {
  .navbar__support {
    justify-content: center !important;
  }
  .navbar__list {
    overflow-y: scroll;
  }
}
</style>