<template>
  <section class="suzuki-services">
    <div class="service">
      <img
        src="https://s3-alpha-sig.figma.com/img/848c/6a25/50680b8898564858e484a34a6699baec?Expires=1623024000&Signature=eN523Zb5aqBThXwztsD7tDF55VWdC990aa0FtTEPHX41XGLwFeVXGpX1tmRdFqvlqJYULb9jhQuOXOLsaVYWxa9JvBfVxzJ027cVrWaBYVpfQXQXOFubtTwOQYrBq4~7XP62baLRT2r~7Ul6kh130k17TxVsX70euRRH44g0HZqUemoAJFy-gPOhq0JnB-ye0doDxsI9dlty-h6fRR7bUlYwmr8uxbKE3o4HH9IrYzForSoqpdrJ04KZ9G8ZoETYiekbUS5Ng7GdYfgWloBv1o4gnEAmvtfHAfgtqV6DiyswY4NzNg9gGdeOAzwxOx-214QTGvwXp~ilGZ0gityc8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <div class="layer"></div>

      <div class="service__float">
        <div class="service__info">
          <p class="title">PEMESANAN SERVIS</p>
          <p class="desc">
            Tetap nyaman dan aman berkendara dengan servis rutin kendaraan
            Suzuki
          </p>
        </div>

        <div class="service__button">
          <p>PESAN SERVIS</p>
        </div>
      </div>
    </div>
    <div class="service">
      <img
        src="https://s3-alpha-sig.figma.com/img/6195/97fd/5f4fdc5fe412dab3a1fdb447113ab468?Expires=1623024000&Signature=GxRavv6I8oLbaaEaoInrgedUouCFhwOWEfBSw7qordX8Bpv51U80mPMND9A8xxj9E73RZ7AVHA4daSdcE1TRrVT7yJYxykEgfKF4bjra8h1jXPQWnukdquhkAGtc37K9QZPOooYrGBIFVb9rDXH6f0xveIOyuVD3gcHVIyvBxJy07D-V1OCIGkQ6dNvEbZmX6~e~nO9hEYzYNU3ddK3DqB1I4wcaYWIw5GNXpUWjVNuDybWfytOouNtKpp-kAoIftYz4Llaf8BWOzrvRcnGD6Oiy1E3WcN1HnyEwi~qwBe5px~cMfkFbl~1-oZ9zZaP4G~Aoia05vqWlBCEqHCmJIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <div class="layer"></div>

      <div class="service__float">
        <div class="service__info">
          <p class="title">PEMESANAN SERVIS</p>
          <p class="desc">
            Tetap nyaman dan aman berkendara dengan servis rutin kendaraan
            Suzuki
          </p>
        </div>

        <div class="service__button">
          <p>PESAN SERVIS</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.suzuki-services {
  // border: 1px solid cyan;

  .service {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.1rem;

    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }

    .layer {
      background-color: rgba(22, 60, 128, 0.6);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &__float {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      // border: 1px solid magenta;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .service__info {
        width: 80%;
        // border: 1px solid black;
        text-align: center;
        color: $white;

        .title {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .desc {
          font-size: 0.9rem;
        }
      }

      .service__button {
        color: $white;
        font-weight: 500;
        border: 2px solid $white;
        padding: 0.4rem 0.8rem;
        margin-top: 1.5rem;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>