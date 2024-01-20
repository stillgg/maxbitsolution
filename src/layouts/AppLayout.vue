<script lang="ts" setup>
import Navbar from '@/components/navbar/Navbar.vue'
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Navbar />

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-top: 50px;
}

.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  min-width: 360px;
  max-width: 1024px;
  margin: 25px auto;
  border: 1px solid black;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }
}
</style>
