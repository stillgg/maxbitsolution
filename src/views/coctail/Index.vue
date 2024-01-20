<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

import { useCoctailStore } from '@/stores/coctail'

import { AVAILABLE_COCTAILS_CODES } from '@/constants'

import DrinkInfo from '@/components/drinkInfo/DrinkInfo.vue'

const route = useRoute()

const store = useCoctailStore()

const getCoctailNameFromUrl = () => route.fullPath.split('coctails')[1].slice(1)

const isCoctailExist = (coctailName: string) => {
  return AVAILABLE_COCTAILS_CODES.some(
    (coctail) => coctail.name.toLowerCase() === coctailName.toLowerCase()
  )
}

const normolizePath = () => {
  const coctailName = getCoctailNameFromUrl()

  const coctailPath = isCoctailExist(coctailName) ? coctailName : AVAILABLE_COCTAILS_CODES[0].path

  router.replace('/coctails/' + coctailPath)
}

const loadCoctail = () => {
  const coctailName = getCoctailNameFromUrl()
  store.getCoctail(coctailName)
}

onMounted(() => {
  normolizePath()
  loadCoctail()
})

watch(() => route.fullPath, loadCoctail)
</script>

<template>
  <DrinkInfo />
</template>
