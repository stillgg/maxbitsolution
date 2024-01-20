<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { AVAILABLE_COCTAILS_CODES } from '@/constants/index'

const route = useRoute()
</script>

<template>
  <nav class="nav">
    <ul class="coctail-list">
      <RouterLink
        v-for="coctailCode of AVAILABLE_COCTAILS_CODES"
        :to="`/coctails/${coctailCode.path}`"
      >
        <li
          class="coctail"
          :class="{
            active: `/coctails/${coctailCode.path}` === route.fullPath
          }"
        >
          {{ coctailCode.name }}
        </li>
      </RouterLink>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  overflow: hidden;
  padding: 20px 0;

  .coctail {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    color: black;
    padding: 5px 20px;

    &.active {
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
      background-color: rgba(74, 74, 74, 0.2);
    }
  }

  @media (min-width: 768px) {
    border-right: 1px solid black;
  }

  @media (max-width: 767.98px) {
    border-bottom: 1px solid black;
  }
}
</style>
