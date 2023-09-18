import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestsStore = defineStore('requests', {
  state: () => ({
    allActivityCards: []
  }),
  actions: {
    async getActivityCards(userId) {
      try {
        const {data: { data: { results }}} = await axios.get(
          '/service/barjavand@3/data',
          {
            headers: {
              'Content-Type': 'application/json',
              system: 'mrRobot',
              'gateway-system': 'mrRobot',
              user: 'mrRobot',
              pass: 'mrRobot'
            },
            params: {
              tags: { userId: userId }
            }
          }
        )

        this.allActivityCards = results
      } catch (error) {
        console.log(error)
      }
    }
  }
})
