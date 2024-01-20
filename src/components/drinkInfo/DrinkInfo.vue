<script lang="ts" setup>
import { computed } from 'vue'
import { useCoctailStore } from '@/stores/coctail'

import { getArrayFromNumberedObject } from '@/helpers/getArrayFromNumberedObject'

const store = useCoctailStore()
const drink = computed(() => store.drink)

const measures = computed(() => getArrayFromNumberedObject(drink.value, 'strMeasure'))

const ingredients = computed(() => getArrayFromNumberedObject(drink.value, 'strIngredient'))
</script>

<template>
  <div class="drink" v-if="drink">
    <div class="wrapper-info">
      <div>
        <h2>
          {{ drink.strDrink }}
        </h2>

        <div>
          {{ drink.strCategory }}
          <br />
          {{ drink.strAlcoholic }}
          <br />
          {{ drink.strGlass }}

          <br />
          <br />

          <h3>Instructions:</h3>
          {{ drink.strInstructions }}
        </div>
      </div>

      <div class="photo-wrapper">
        <img loading="lazy" class="photo" :src="drink.strDrinkThumb" alt="drink image" />
      </div>
    </div>

    <br />
    <h3>List of ingridients:</h3>

    <div class="ingredients-list">
      <div class="measures">
        <div v-for="measure of measures">
          {{ measure }}
        </div>
      </div>

      <div class="ingredients">
        <div v-for="ingredient of ingredients">
          {{ ingredient }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drink {
  padding: 20px;
}
.wrapper-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
}

.photo-wrapper {
  width: 100%;
  display: flex;
  .photo {
    height: 200px;
  }

  @media (min-width: 576px) {
    justify-content: flex-end;
  }
}

.ingredients-list {
  margin-top: 20px;
  display: flex;

  .ingredients {
    margin-left: 20px;
  }
}
</style>
