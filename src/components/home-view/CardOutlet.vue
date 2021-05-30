<template>
  <section class="card-outlet">
    <router-link
      to="/outlet"
      class="card-link"
      v-for="outlet in outlets"
      :key="outlet.id"
    >
      <div class="card">
        <div class="card__image">
          <img :src="outlet.image" />
        </div>

        <div class="card__information">
          <div class="card__tag">
            <p>{{ outlet.tag }}</p>
          </div>

          <p class="card__title">{{ outlet.title }}</p>

          <div class="card__contact">
            <div class="card__tell">
              <i class="fas fa-phone-alt"></i>
              <p>{{ outlet.tell }}</p>
            </div>
            <div class="card__map">
              <i class="fas fa-map-marker-alt"></i>
              <p>{{ outlet.map }}</p>
            </div>
          </div>

          <div class="card__button">
            <p>Kunjungi Website Outlet</p>
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      outlets: [
        {
          id: 1,
          image:
            "https://s3-alpha-sig.figma.com/img/0a7d/82e7/ce79c89a4ecf2244f66881aa8d4e3e32?Expires=1623024000&Signature=M-HQMx2T3qm2mTkCRXiXRJ2K1HoH0YosHBMRz5l-RTOwnvR7sDyzjvMKyQVQ14YryIlc2s3el41J~43ltGil7JyetH2MZNcAC~YcfS-1dJZa~Licljdj~yMcxoVZPBmBWlVWYgO44OmY4OJWmdEUzkbl-c0lqY7O73tpXOIUn4sIk~WL5nLkFleMj0a7wGMsfQv~SJ~65vmAWWVyXq62zDhG60O6rXYEAXYGGhdKmP1YqwRcXxZ9Qbb9W-dB72dVl0RPUEz62iMXOtBi4CD57HnOp0yZJSHL~YbLeIQbUJbIemW1ct5Y9-OFvNcvoogXgo1Sq5yk9kgSHWXDtdHTfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS SOEKARNO - HATTA",
          tell: "(022) 6204645",
          map: "JL. Soekarno Hatta No. 289 Bandung 40234",
          tag: "Sales , Service, Sparepart, Body & Paint",
        },
        {
          id: 2,
          image:
            "https://s3-alpha-sig.figma.com/img/1627/eed5/b3c9d5c0cded1ff7a28ad68e330e26a2?Expires=1623024000&Signature=YllF9XaSePl2xeUy4AZoXcFHq4iUouh-BTKIU7T1QNCIYXQO9baBIhBTCg~oqaXCRcQ70GZa4i2nOYLGv8p3e8kGH8vwQ9Vfbk8qTxRDCeK6Lug17UKyLEKaKU9kEOy0Hyq1ONHdqYavoCUWMSe5GCPSSaoPwHlQ~JKFE3CujdAC5x41vYeSaA95GyqJ63ymlPRmmDDq7bi6GJMMlmN0mkgPpR56PL0ISbMgCtaKcDIJ9lFxY5x5IYbKsHrlmpbl5IHwX~z~CH9AZ~2t1QjsleAMqz6Iwm2LNbwsdk1AJwZ0lkJNhuQZKjB-5CRLUnuLTbnp5vmUcbdIzLWyAePErw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS CIBEUREUM",
          tell: "(022) 6204645",
          map: "JL. Raya Cibeureum 48 B Bandung",
          tag: "Sales , Service, Sparepart",
        },
        {
          id: 3,
          image:
            "https://s3-alpha-sig.figma.com/img/7ed7/5134/87b7251f23976d20f52c45932b269322?Expires=1623024000&Signature=DFc67SgF8z4SzJ5uzTeE8DbkqwTEnt7O9TtIrrSYuyfO1TGEab9~TpZBL4L5kZA~zCXmFn6vdy-VpOUdeEYeWGEcnenAh~IVhmIpCp-1m49jwYQIchaWWB0~Dc050TClh2hbCQYLSJeX0NdEDi423zMtZvtrdGQ9dWnCykkFMO37xHwBU4GFkeODgyD8Br2X6qsgKa2s7LLYonL1rlG-FzELX6Q6suRp37uN7XF4n66RoidVnaAj1ZCUN03xvUkje13yOJW5NcDvDOC2lDc3fT8jYBqUoKTlHbJ~UDD~5hjuc23SNQR8UzuvhQdB8NawYgXC9kgN7XqVYLl2-2sJhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS BUAH BATU",
          tell: "(022) 7300723",
          map: "JL. Soekarno – Hatta No. 513 Bandung",
          tag: "Sales , Service, Sparepart",
        },
        {
          id: 4,
          image:
            "https://s3-alpha-sig.figma.com/img/3454/6cbc/608266a9df42dd4c5e4a949b3e1d241a?Expires=1623024000&Signature=b0MwQSStsDDd5bEEm7IWMvR7w7TEmEEWDJAXU9-aXwTKA3Bt7s-Wsy5TQl1hbJ5bzig4Ngf9XLt3UreV9vWcyEXFz4aPGbP3vx3-Of9fnvKBYaKi6s-eUg4Ksz1b5Pc9tN1zJ4hc4Hyx4ynURfjVTk8EQ5SJHFVkJGv~j53t0X~YHAg29Ewxr04-EKOu77vLr5X5WYf~P9Ifh7v1vNw8uGNUPs9x1FACITcFzxUzl56WMsk-iJXTAzgM-~9C35E4-LaI181tjYUfClwn4P8H2lSOq6NwEJsnmtjf9LdR8slOZrjsaVXtaawzN-4Zt7qNzU6lkqIIws53pNlZEnxQvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS AHMAD YANI",
          tell: "(022) 7101655",
          map: "JL. Jenderal Ahmad Yani 259 Bandung",
          tag: "Sales , Service, Sparepart",
        },
        {
          id: 5,
          image:
            "https://s3-alpha-sig.figma.com/img/29bc/9a5a/980e1dc836188ffefc2001a9dfa9fed4?Expires=1623024000&Signature=QVuWHv2j3Unt3nFgXMmWsz1akulUXwJ~NeTdE33DgNdLEIHT7CDmKIOeucVgQL6rzxjcVOXCOz6Cj5S7f1tLIb6eROBTHkdqAzTADvIm0nORsnDEbbwlp22xWKo-CTSRXApgiSPLlgT44bDL8dmBBPW6w4m4XLlzg1GL7P3LM4R4ZdwL-ATKPu1x2z88aylO25amcHfbdBWCJ7yefN1tr2fnrypQwZ3LXh7hmu5lUlDJrY8gb3cJHlU03IjrG4WEooZu1M-QnELhgzQ7xkUWaFZQ93zG8tftmtwKYZekRyjDQx0TMjcSJseSbki9AKnR-SRpXNUB0I0Xv9R31iA-AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS KOPO",
          tell: "(022) 5422259",
          map: "JL. Kopo (Sayati) 260 C Bandung",
          tag: "Sales",
        },
        {
          id: 6,
          image:
            "https://s3-alpha-sig.figma.com/img/e1b4/53f8/c124953e4a53fa9aa15230c4598b247d?Expires=1623024000&Signature=g05wqDHhXUDZCD1AEIYCjd2lswOSBTdHAkxot99JAQFWAVnBBf9PTVZCNq66z447QHqv4~6H6ILAOycZo9JFcjR-W4LMtEFkU-SVUgn~Idwe8pIbnvsJEAYpkW64GtZ8DUmggMWANk~rfXTRCm7qDrqTZg4Ex1UbLjJgQq~HfocpVcObpPukmVNcX0DHY0HAmNPxQd5qCqza5nM13zGeTrykLEodzc-fu5kOnB0uOY5lgzx3hklKo5aKDa6eQt~tXQ221yrTPeD-GEBHwyXueJeq3IBL2eIJiMOB-IradPBfCjGlDTBq9cLQtHCZALoKtx7ly-D4OXzJvWC2x2CzFg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS DAGO",
          tell: "(022) 6002512",
          map: "JL. IR.H. Juanda (Dago) No. 75 Bandung",
          tag: "Sales",
        },
        {
          id: 7,
          image:
            "https://s3-alpha-sig.figma.com/img/2f89/f6b5/0d48d5a40e286302b23ca00cb53a765a?Expires=1623024000&Signature=Ac1EMA3QLf5mtY5BgGgabyQTkuKkrlsvJMb9UopAoRA9LniWExO9m0sd1OyRch9YvmMq89xB4eUtzjQzkFJIhsRKXOzlPkrwiqunzLvJoziRCuolTEjpIuryXkdo64wN8QDxXSTQ1ivCBbdF2TWapbQOTobjQp4kGPEiORmGeOLZJ~POtH1jYqDuj7PfYIUBUlInRN1CNODBrYcB58BoY3qRvISxkuIUmr~cakIUpDhyigio~to~RooZCzCw3Bi-Xs6RmSjQ2B8F5jthSVignn5T-LPy7fWL8kFIy-IGwRlbY1BA4cN4WZRgRGubJonbWKUe-RdxY4FIiLcgSY3Itw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS SETIABUDHI",
          tell: "(022) 2030787",
          map: "JL. DR. Setiabudhi No. 78 Bandung",
          tag: "Sales , Service, Sparepart",
        },
        {
          id: 8,
          image:
            "https://s3-alpha-sig.figma.com/img/a39c/cf05/44c02450d461218802c38d21f6098bda?Expires=1623024000&Signature=KFIGLT84apESg~PWwgGXBWAdU5jfcNMMXU9v8y5pPu8LnyVAOf90yxAXC4cAWOFlYr0jtYURc4E935uZyKOuLTKAIgNHaGjnpBBJsl8ugtl5icTiH122jHkr1CGuMRZF-eT9SdBjJf4oN1iJ6uTllapyQ~y11q1hRcnpApJXDkRYJdNcB59pk261yG~zecD2J7Im00UlgHOk4NLBTrvjWZzLWc8qZQLwHbvkscu-pWEM4HBmBLuKKxpe802jnLa6NaCOyFiDd8fMe8f94BMfRE21HW1oaLCjvLOzdfV3TkSVzPlTymBhMDCk2qvVnM8VZq2kWs0XKPgiolVx-UNcBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          title: "SUZUKI NJS RANCAEKEK",
          tell: "(022) 87836800",
          map: "JL. Raya Rancaekek Cipasir KM. 22 Rancaekek",
          tag: "Sales , Service, Sparepart",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.card-outlet {
  padding: 0 1rem;
  margin-top: -100px;
  padding-bottom: 1rem;

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

      .card__tag {
        border-radius: 0.2rem;
        border: 1px solid $blue2;
        padding: 0.205rem 0.4rem;
        font-size: 0.8rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: $blue1;
        color: $blue2;
        margin-bottom: 0.6rem;
      }

      .card__title {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
        color: $black;
      }

      .card__contact {
        .card__tell,
        .card__map {
          display: flex;
          margin: 0.6rem 0;
          color: $disabled;
          font-size: 0.9rem;

          i {
            margin-right: 0.6rem;
          }
        }
      }

      .card__button {
        border: 2px solid $blue;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
        color: $blue;
        font-weight: 500;
        margin-top: 1rem;
        transition: all 0.3s ease;
        border-radius: 0.3rem;
        background-color: $white;

        &:hover {
          background-color: $blue;
          color: $white;
        }
      }
    }
  }
}
</style>