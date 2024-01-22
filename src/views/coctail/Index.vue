<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

import { useCoctailStore } from '@/stores/coctail'

import { AVAILABLE_COCTAILS_CODES } from '@/constants'

import DrinkInfo from '@/components/drinkInfo/DrinkInfo.vue'

const route = useRoute()

const store = useCoctailStore()

const isCoctailExist = (coctailName: string) => {
  return AVAILABLE_COCTAILS_CODES.some(
    (coctail) => coctail.name.toLowerCase() === coctailName.toLowerCase()
  )
}

const coctailCode = computed(() => {
  const code = route.params.coctailCode
  if (Array.isArray(code)) return code[0]
  return code
})

const normolizePath = () => {
  const coctailPath = isCoctailExist(coctailCode.value)
    ? coctailCode.value
    : AVAILABLE_COCTAILS_CODES[0].path

  router.replace('/coctails/' + coctailPath)
}

const loadCoctail = () => {
  store.getCoctail(coctailCode.value)
}

onMounted(() => {
  normolizePath()
  loadCoctail()
})

watch(() => coctailCode.value, loadCoctail)
</script>

<template>
  <DrinkInfo />
</template>
