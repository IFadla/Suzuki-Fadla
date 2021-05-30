<template>
  <div id="ColorCar" class="color-car">
    <div class="color-car__title">
      <p>Tipe & Warna</p>
    </div>
    <div class="color-car__header">
      <div
        class="item-type"
        @click="toggleNavAlpha"
        :class="{ active: isAlpha }"
      >
        <p>XL7 Alpha</p>
      </div>
      <div class="item-type" @click="toggleNavBeta" :class="{ active: isBeta }">
        <p>XL7 Beta</p>
      </div>
      <div class="item-type" @click="toggleNavZeta" :class="{ active: isZeta }">
        <p>XL7 Zeta</p>
      </div>
    </div>

    <div class="color-car__image">
      <div class="type-alpha" v-if="isTypeAlpha">
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-alpha-1.png"
          alt=""
          v-if="isOrange || isMaroon"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-alpha-2.png"
          alt=""
          v-if="isGold"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-alpha-3.png"
          alt=""
          v-if="isBlack"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-alpha-4.png"
          alt=""
          v-if="isWhite"
        />
      </div>

      <div class="type-beta" v-if="isTypeBeta">
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-beta-1.png"
          alt=""
          v-if="isMaroon || isOrange || isGold"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-beta-2.png"
          alt=""
          v-if="isGray"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-beta-3.png"
          alt=""
          v-if="isWhite"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-beta-4.png"
          alt=""
          v-if="isBlack"
        />
      </div>

      <div class="type-beta" v-if="isTypeZeta">
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-zeta-1.png"
          alt=""
          v-if="isWhite"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-zeta-2.png"
          alt=""
          v-if="isBlack"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-zeta-3.png"
          alt=""
          v-if="isGray"
        />
        <img
          src="https://sibaturaspirman.github.io/suzuki/assets/images/content/xl7-zeta-4.png"
          alt=""
          v-if="isMaroon"
        />
      </div>
    </div>

    <div class="color-car__color">
      <div class="alpha-color" v-if="isTypeAlpha">
        <p v-if="isOrange">RISING ORANGE + BLACK</p>
        <p v-if="isGold">BRAVE KAKHI + BLACK</p>
        <p v-if="isBlack">PRIME COOL BLACK</p>
        <p v-if="isWhite">PRIME SNOW WHITE</p>
      </div>

      <div class="alpha-color" v-if="isTypeBeta">
        <p v-if="isMaroon">PEARL BURGUNDY RED</p>
        <p v-if="isGray">METALLIC MAGMA GREY</p>
        <p v-if="isWhite">PEARL SNOW WHITE</p>
        <p v-if="isBlack">PRIME COOL BLACK</p>
      </div>

      <div class="alpha-color" v-if="isTypeZeta">
        <p v-if="isWhite">PEARL SNOW WHITE</p>
        <p v-if="isBlack">PRIME COOL BLACK</p>
        <p v-if="isGray">METALLIC MAGMA GREY</p>
        <p v-if="isMaroon">PEARL BURGUNDY RED</p>
      </div>

      <div class="swatch-alpha" v-if="isTypeAlpha">
        <div class="color-picker">
          <div
            class="circle"
            @click="toggleOrange"
            :class="{ active: isOrange }"
          >
            <div class="color"></div>
          </div>
          <div class="circle" @click="toggleGold" :class="{ active: isGold }">
            <div class="color gold"></div>
          </div>
          <div class="circle" @click="toggleBlack" :class="{ active: isBlack }">
            <div class="color black"></div>
          </div>
          <div class="circle" @click="toggleWhite" :class="{ active: isWhite }">
            <div class="color white"></div>
          </div>
        </div>
      </div>

      <div class="swatch-alpha" v-if="isTypeBeta">
        <div class="color-picker">
          <div
            class="circle"
            @click="toggleMaroon"
            :class="{ active: isMaroon || isOrange || isGold }"
          >
            <div class="color maroon"></div>
          </div>
          <div class="circle" @click="toggleGray" :class="{ active: isGray }">
            <div class="color gray"></div>
          </div>
          <div class="circle" @click="toggleWhite" :class="{ active: isWhite }">
            <div class="color white"></div>
          </div>
          <div class="circle" @click="toggleBlack" :class="{ active: isBlack }">
            <div class="color black"></div>
          </div>
        </div>
      </div>

      <div class="swatch-alpha" v-if="isTypeZeta">
        <div class="color-picker">
          <div class="circle" @click="toggleWhite" :class="{ active: isWhite }">
            <div class="color white"></div>
          </div>
          <div class="circle" @click="toggleBlack" :class="{ active: isBlack }">
            <div class="color black"></div>
          </div>
          <div class="circle" @click="toggleGray" :class="{ active: isGray }">
            <div class="color gray"></div>
          </div>
          <div
            class="circle"
            @click="toggleMaroon"
            :class="{ active: isMaroon }"
          >
            <div class="color maroon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAlpha: true,
      isBeta: false,
      isZeta: false,

      isOrange: true,
      isGold: false,
      isBlack: false,
      isWhite: false,
      isMaroon: false,
      isGray: false,

      isTypeAlpha: true,
      isTypeBeta: false,
      isTypeZeta: false,
    };
  },
  methods: {
    toggleNavAlpha() {
      this.isAlpha = true;
      this.isBeta = false;
      this.isZeta = false;

      this.isTypeAlpha = true;
      this.isTypeBeta = false;
      this.isTypeZeta = false;

      this.isMaroon = false;
      this.isWhite = false;
      this.isOrange = true;
      this.isGold = false;
      this.isBlack = false;
      this.isGray = false;
    },
    toggleNavBeta() {
      this.isAlpha = false;
      this.isBeta = true;
      this.isZeta = false;

      this.isTypeAlpha = false;
      this.isTypeBeta = true;
      this.isTypeZeta = false;

      this.isMaroon = true;
      this.isWhite = false;
      this.isOrange = false;
      this.isGold = false;
      this.isBlack = false;
      this.isGray = false;
    },
    toggleNavZeta() {
      this.isAlpha = false;
      this.isBeta = false;
      this.isZeta = true;

      this.isTypeAlpha = false;
      this.isTypeBeta = false;
      this.isTypeZeta = true;

      this.isWhite = true;
      this.isMaroon = false;
      this.isOrange = false;
      this.isGold = false;
      this.isBlack = false;
      this.isGray = false;
    },

    // color toggle

    toggleOrange() {
      this.isOrange = true;
      this.isGold = false;
      this.isBlack = false;
      this.isWhite = false;
      this.isMaroon = false;
      this.isGray = false;
    },
    toggleGold() {
      this.isOrange = false;
      this.isGold = true;
      this.isBlack = false;
      this.isWhite = false;
      this.isMaroon = false;
      this.isGray = false;
    },
    toggleBlack() {
      this.isOrange = false;
      this.isGold = false;
      this.isBlack = true;
      this.isWhite = false;
      this.isMaroon = false;
      this.isGray = false;
    },
    toggleWhite() {
      this.isOrange = false;
      this.isGold = false;
      this.isBlack = false;
      this.isWhite = true;
      this.isMaroon = false;
      this.isGray = false;
    },
    toggleMaroon() {
      this.isOrange = false;
      this.isGold = false;
      this.isBlack = false;
      this.isWhite = false;
      this.isMaroon = true;
      this.isGray = false;
    },
    toggleGray() {
      this.isOrange = false;
      this.isGold = false;
      this.isBlack = false;
      this.isWhite = false;
      this.isMaroon = false;
      this.isGray = true;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.color-car {
  margin-top: 1.2rem;
  background-color: $white;
  color: $black;
  padding: 1rem 0;

  &__title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.9rem 1rem;
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;

    .item-type {
      width: 100px;
      text-align: center;
      font-size: 0.9rem;
      color: $blue2;
      padding: 0.5rem;
      border-bottom: 3px solid $white1;

      &.active {
        color: $blue;
        border-bottom: 3px solid $blue;
      }
    }
  }

  &__image {
    width: 80%;
    min-height: 182px;
    max-height: auto;
    margin: 1rem auto;

    img {
      width: 100%;
    }
  }

  &__color {
    padding: 0.9rem 1rem;
    padding-top: 0;
    font-size: 0.9rem;
    text-align: center;

    .color-picker {
      display: flex;
      justify-content: center;
      margin-top: 0.8rem;

      .circle {
        width: 40px;
        border-radius: 50px;
        margin: 0 0.2rem;
        height: 40px;
        background-color: $white;
        box-shadow: 0px 5px 10px $shadow1;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
          background-color: $blue;
        }

        .color {
          border-radius: 50px;
          width: 32px;
          height: 32px;
          background-color: $orange;

          &.gold {
            background-color: $gold;
          }
          &.black {
            background-color: $black1;
          }
          &.white {
            background-color: $white;
          }
          &.maroon {
            background-color: #534050;
          }
          &.gray {
            background-color: #797979;
          }
        }
      }
    }
  }
}
</style>