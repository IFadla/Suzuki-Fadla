<template>
  <div id="Specification" class="specification">
    <div class="specification__header">
      <p>SPESIFIKASI</p>
    </div>

    <div class="accordion">
      <div class="accordion-item" v-for="(item, index) in items" :key="index">
        <div @click="item.show = !item.show" class="accordion-item__title">
          <p>{{ item.title }}</p>
          <i class="fas fa-sort-down" :class="{ active: item.show }"></i>
        </div>
        <div v-if="item.show" class="accordion-item__content">
          <div class="side-left">
            <p
              class="left"
              v-for="(litem, index) in item.content.left"
              :key="index"
            >
              {{ litem }}
            </p>
          </div>

          <div class="side-right">
            <p
              class="right"
              v-for="(ritem, index) in item.content.right"
              :key="index"
            >
              {{ ritem }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isDown: true,
      items: [
        {
          title: "DIMENSI",
          content: {
            left: [
              "Panjang Keseluruhan",
              "Lebar Keseluruhan",
              "Tinggi Keseluruhan",
              "Jarak Poros Roda",
              "Jarak Pijak Depan",
              "Jarak Pijak Belakang",
              "Jarak Terendah",
              "Radius Putar Minimum",
            ],
            right: [
              "4,450 mm",
              "1,775 mm",
              "1,710 mm",
              "2,740 mm",
              "1,515 mm",
              "1,530 mm",
              "5,1",
              "200 mm",
            ],
          },
          show: true,
        },
        {
          title: "MESIN",
          content: {
            left: [
              "Jenis",
              "Isi Silinder",
              "Jumlah Katup",
              "Jumlah Silinder",
              "Diameter x Langkah",
              "Perbandingan Kompresi",
              "Daya Maksimum",
              "Momen Puntir Maksimum",
              "Sistem Bahan Bakar",
            ],
            right: [
              "K150",
              "4",
              "16",
              "1.462 cm",
              "74,0 x 85,0 mm",
              "10,5",
              "77kW (104,7ps/6.000) KW/rpm",
              "138 / 4.400Nm / rpm",
              "Multipoint Injection",
            ],
          },
          show: false,
        },
        {
          title: "TRANSMISI",
          content: {
            left: ["Perbandingan Gigi Akhir", "Ratio Gear"],
            right: [
              "3.545 / 2.875",
              "Gear M/T A/T",
              "1st 3.909 2.875",
              "2nd 2.043 1.568",
              "3rd 1.407 1.000",
              "4th 1.065 0.697",
              "5th 0.769 N.A",
              "Reverse 3.250 2.300",
            ],
          },
          show: false,
        },
        {
          title: "BERAT",
          content: {
            left: ["Berat Kosong", "Berat Kotor"],
            right: ["1.145 kg (5 MT), 1.165 kg (6 AT)", "1.670 kg"],
          },
          show: false,
        },
        {
          title: "RANGKA",
          content: {
            left: ["Tempat Duduk", "Tangki Bahan Bakar"],
            right: ["7 Persons", "45 liters"],
          },
          show: false,
        },
        {
          title: "BAJU",
          content: {
            left: ["Tempat Duduk", "Tangki Bahan Bakar"],
            right: ["7 Persons", "45 liters"],
          },
          show: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.specification {
  background-color: $white;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  padding-bottom: 2rem;

  &__header {
    padding: 1.4rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .accordion {
    width: 100%;

    &-item {
      margin-bottom: 1rem;
      box-shadow: 0px 2px 8px $white1;

      &__title {
        padding: 0.7rem 1rem;
        display: flex;
        justify-content: space-between;
        color: $black;
        background-color: $blue3;
        border-radius: 0.2rem;

        p {
          font-size: 1rem;
          font-weight: 500;
        }

        i {
          font-size: 1.2rem;
        }

        i.active {
          transform: rotate(180deg);
        }
      }

      &__content {
        padding: 1.5rem 1rem;
        display: flex;

        .side-left,
        .side-right {
          flex: 1;
          height: 100%;

          p {
            margin-bottom: 0.5rem;
            height: 2.6rem;
          }
        }

        .side-left {
          flex: 1;
          padding-right: 1rem;
          font-weight: 500;
        }
      }
    }
  }
}
</style>