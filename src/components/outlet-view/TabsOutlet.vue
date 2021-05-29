<template>
  <section class="tabs tabs-outlet">
    <div class="tabs__header">
      <p>Temukan Mobil Suzuki yang tepat untuk Anda</p>
    </div>

    <div class="tabs__item">
      <div
        class="tab"
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
      >
        <p>{{ title }}</p>
      </div>
      <!-- 
      <div class="tab">
        <p>Commercial Car</p>
      </div> -->
    </div>

    <!-- tab here -->
    <div class="wrapper__slot">
      <slot></slot>
    </div>

    <div class="button-tabs">
      <p>Lihat Semua Mobil</p>
    </div>
  </section>
</template>

<script>
import { ref, provide } from "vue";

export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid magenta;

  &__header {
    width: 100%;
    background-color: $blue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    color: $white;
    font-size: 1.1rem;

    p {
      width: 60%;
      text-align: center;
    }
  }

  &__item {
    width: 100%;

    background-color: $blue;
    display: flex;
    color: $white;
    font-size: 1rem;

    .tab {
      flex: 1;
      border-bottom: 4px solid $blue;
      padding: 0.8rem;
      text-align: center;
      cursor: pointer;

      &.active {
        border-bottom: 4px solid $white;
      }
    }
  }

  .wrapper__slot {
    width: 100%;
    // border: 1px solid red;
  }

  .button-tabs {
    border: 2px solid $blue;
    width: 70%;
    text-align: center;
    padding: 0.5rem 0;
    color: $blue;
    font-weight: 500;
    border-radius: 0.2rem;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-bottom: 1.5rem;

    &:hover {
      background-color: $blue;
      color: $white;
    }
  }
}
</style>