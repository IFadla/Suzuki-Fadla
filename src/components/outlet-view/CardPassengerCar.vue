<template>
  <article class="card-passenger">
    <router-link to="/outlet-detail" class="card__link" v-for="passengerCar in passengerCars" :key="passengerCar.id">
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
          image:
            "https://s3-alpha-sig.figma.com/img/a0ac/4cef/bc96e501a9728ba1ea90f8da1d5b82d5?Expires=1623024000&Signature=GBTiphJH7E-y3aIUGCleuLFwqfalHaZNQVgKXX48TBdHN6PLbNuyR-IrI0OXrqo8KfSdUa8a2FkqrRNs34xcFp3eBxX3Wa3e-39HHtJ86KnaLqKuXDOAud96A31gac38rFhc5jRI8c8SaXOVlmSJNZjAt5YU82SVDREDD-uw19WiJu28Sz0WzQ0m0HDAhxFTMI5QkBXDt-jyOhAUDPI3X9T3xdB56mmFBfszsXi9MpuCXSya3BAWGxek3neO41amX6WMTxwbR60GogokYMgZs6aJP3Ih42lVuICfzLCCVPStztbGhG~dpf1hyzTPtU~QdkDU-0ALD7uMB7dA9RM50g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "XL 7",
          price: "Rp 232.000.000",
        },
        {
          id: 2,
          image:
            "https://s3-alpha-sig.figma.com/img/9758/8f0c/4093df0b81434cd086f58431ae29edf7?Expires=1623024000&Signature=cIRnuqpaXuGMUcU3FSx8vmJKTRxcWuyS-BIlwrQJrZUVeSGfWr-Ndj9x3suFSSYyiz~ilR50~NOdJhbE5Fo0uKFDVyLWF23MsK9d-i5GM8k15bRKbarFd-Y726Iv-~BOjvPiCjDFgPlhev5NEgdeWefYXURx~Szm2JxESx3c3Yw4268IvcqpvOwqZCZiQrXVj~6OgjLugcMIS31RgRdG9A1d8mS4WYF5F~DPCP38FmYPFY0dp~9qGo0fPdFsM5JAKPSiyRHwRTFMKUpBopCUZMq6uFZvg-JI3Hl4wc2Yp5C-jb59voYKeptwOH9rQ38aLnq8TV9Ow5ih7MlmpGzcYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "All New Ertiga",
          price: "Rp 207.000.000",
        },
        {
          id: 3,
          image:
            "https://s3-alpha-sig.figma.com/img/110c/9e99/74b8d8fa0102a301301e4c16199194f2?Expires=1623024000&Signature=bD8SOV0s3S434aeLKi2PsIKTGIr0ShuTbtilW7Oxt9A6yh5LxnJ-P~9mYm8Zu0pkIkjasSpyn-4AVMdqji-e1rH2CGC907QXdeRayk2iF1ytQzIDU8Fe85VUfG9spIk-k1yCToH8~z5iSmlAV2ggr2h9JlI4hjE753ktvnaJhWQDoJIad9ry24cWvio7QbuoQd3ZZ1Qk8QtOSJUy6HHbUrZoo9ZImYb4IxTimpUxnyBL47bjoScVBNcsMIoDb-mZv3lmzr8q1SPO4xrbl1Btkp~-8HPS8PmWGgItzX9q9ys3UTMrcnbZCL0uMtMGdW3YTimW406g1ANBHCWaFNg8EA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "All New Ertiga Suzuki Sport",
          price: "Rp 252.000.000",
        },
        {
          id: 4,
          image:
            "https://s3-alpha-sig.figma.com/img/bda8/9408/fcd6ee70976be59963c89215d8c76836?Expires=1623024000&Signature=bs-7uF4Dk6HzfWP~hy~N-AgjZ8fs2dneEGVOZPk5xbVim0F5tIZTVJtYalW7x4gn0O4gVhr1sWEMz-TbxCNbPb7TPgWyfXTCht~MCWEV11kC58KdaBwEzjP8Jj1WTOfIadlTbSUax9dB~zVbIilcrGHp-U0mlpVdQptxJ9omN-AOGeDvcHFQSKoL7kTw~Np7zf~FUTnl4j5OD3HnqwbphxFWwSKyGDgpcTUTasSJul34-7vAxqF99TqvA8b5kUjSV~p6xHDrBR2o7~yQ0fGC5jLbD6B94WKLsMwmRX3eUb9DYjoDw4sPXZgVELZ~WGsjgfUL-~Y6PiZ0M07AHfnfLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "New Ignis",
          price: "Rp 171.000.000",
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
      // border: 1px solid  blu;
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
        font-size: 1rem;
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
        font-size: 1rem;
      }

      .button-detail {
        border: 1px solid $blue2;
        background-color: $blue1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem 0;
        font-size: 0.8rem;
        color: $blue2;
        width: 90px;
        margin-top: 1rem;
        border-radius: 2px;
      }
    }
  }
}
</style>