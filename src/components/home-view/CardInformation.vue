<template>
  <section class="card-information">
    <router-link
      to="/"
      class="card-link"
      v-for="information in informations"
      :key="information.id"
    >
      <div class="card">
        <div class="card__image">
          <img :src="information.image" />
        </div>

        <div class="card__information">
          <p>{{ information.time }}</p>
          <p>{{ information.title }}</p>
        </div>
      </div>
    </router-link>

    <div class="button-information">
      <p>Lihat Semua Informasi</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      informations: [
        {
          id: 1,
          image:
            "https://s3-alpha-sig.figma.com/img/9e97/ba10/a78b28d0ce4203bb4b56cb1a17bfaa36?Expires=1623024000&Signature=Bw9nR4hfgn8lPWXqdF21VX7Lx0VYoN-AQD7PCRda2i5cheD-yywo8YlbPPY0cMn~-YoOujTBXnHv9ke8oGcqYp-2LN5TIPxkJrj86O5-4llQRiAK0XhiOiLVC6vw4mfUIzZF4CKD93plN~eFTez25NLcJ9lI8pFm3b-UyQZJqFm4eqDKcEUl-b1pksz9yg5CvrhOGr5cIintb4TjvcKcf-l03NqdB2JEZrdUcgf~P-tGBBVAS8SMYh5u5GvUqDiNQHe1SuslXBaA4Wv3SmXpTGj30ULw7Yb0atEIeateorCr540mFA7GeOZArk4HxuU4mxfC3DWy4sfxw3OFtNZrag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          time: "Rabu, 19 Agustus 2020",
          title: "Promo Pembelian Berhadiah Periode Bulan September 2020",
        },
        {
          id: 2,
          image:
            "https://s3-alpha-sig.figma.com/img/6681/89c5/3ead8968a4c69252d5dd9c1a1244c4c8?Expires=1623024000&Signature=LMgPNG74-tqfxPy02MYP57TcU1~RlF9~cnGwbadY6RClqNZo53kTEctZpeGPNfrGXYlV0s6NwxBx0KtHlL8XWIKl9abFtWtD8806furVfarTPKCCN9gWacqSPPSkEsmHIGxu8SLT76UKo75ExX4jHk7bKUAth3gAfrmarOfzAyB0A~qXopqNrH85jTCFUXOXlYmJDZ6rmZ1HmOEbRZtbubwf1d4SB4UFFIuE79Cnr0jfcTWtXaFj48psfFBdncMSrl-La6Ty7nlM-OdMqr02Fpdyi~tm-ORRxR5jA6j69n2Zz92H7dUkyjtdApeh1SLxIOEZR3O-yy0RibD5lFTEeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          time: "Selasa, 17 Agustus 2020",
          title: "Suzuki Insurance – Ganti Mobil Anda Dengan Nilai yang Sama",
        },
        {
          id: 3,
          image:
            "https://s3-alpha-sig.figma.com/img/1b4d/e658/49062f0fc5ce72637907809d0c9e9705?Expires=1623024000&Signature=SkxMFqC3mIHSTLmMyJTaWX856CEVoq7hkGBS1s6MEfkXsVhEWMFoofwjzQIv5wrifEwwfGbBgO1nlWt8KgZYg-guqcnCsFzY1jD89lAGNQCe9Ga4yFtVfBimt5U4fwDXfTO7mK~JBYAxSYcYEiyQAhr8dqUC~agicILx07XUK6reEB-AQ7KKClTEyU3knOMLzEsr2-A5XPb1xJK-DzMVtmdTjwOew5xT-zxbr0yPK52301RprbjQmY9cpfEVhH4R-Roh5vKht9laEU~6AZGrvUwVuomUazfQXen1vFembXAqnUFaq1Uwjcs18TxE9yry~WBBUhIFKLWP6b-5nVdnew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          time: "Rabu, 19 Agustus 2020",
          title:
            "Suzuki Peduli Gempa Maluku 2019, Bentuk Kepedulian Untuk Korban ",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.card-information {
  padding: 0 1rem;
  margin-top: -70px;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-link {
    text-decoration: none;
  }

  .card {
    overflow: hidden;
    border-radius: 0.8rem;
    background-color: $white;
    margin-bottom: 1.5rem;
    box-shadow: 0px 15px 10px -10px $shadow;

    &__image {
      width: 100%;
      height: 214px;

      img {
        width: 100%;
        height: 214px;
        object-fit: cover;
      }
    }

    &__information {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: $black;

      p:nth-child(1) {
        color: $disabled;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      p:nth-child(2) {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
    }
  }

  .button-information {
    border: 2px solid $blue;
    width: 70%;
    text-align: center;
    padding: 0.5rem 0;
    color: $blue;
    font-weight: 500;
    border-radius: 0.2rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: $blue;
      color: $white;
    }
  }
}
</style>