import { defineStore } from 'pinia'
import { searchCoctails, type Drink } from '@/api'
import { ERROR_MESSAGE } from '@/constants'

interface Coctails {
  [key: string]: Drink
}

export const useCoctailStore = defineStore('coctail', {
  state: () => ({
    isLoading: false,
    coctails: {} as Coctails,
    drink: null as null | Drink,
    errorMessage: null as null | string
  }),
  actions: {
    async getCoctail(coctailCode: string) {
      const data = this.coctails[coctailCode]

      if (data) {
        this.drink = data
        return
      }

      try {
        this.isLoading = true
        this.errorMessage = null

        const { data } = await searchCoctails(coctailCode)

        const drink = data.drinks[0]

        this.coctails[coctailCode] = drink
        this.drink = drink
      } catch (err) {
        this.errorMessage = ERROR_MESSAGE
      } finally {
        this.isLoading = false
      }
    }
  }
})
