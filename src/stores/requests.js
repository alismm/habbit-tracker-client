import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestsStore = defineStore('requests', {
  state: () => ({
    allActivityCards: []
  }),
  actions: {
    async getActivityCards() {
      try {
        const {data: { data: { results }}} = await axios.get(
          'https://barjavand-v3-dev.apipart.ir/service/barjavand@3/data',
          {
            headers: {
              'Content-Type': 'application/json',
              system: 'mrRobot',
              'gateway-system': 'mrRobot',
              user: 'mrRobot',
              pass: 'mrRobot'
            },
            params: {
              tags: { userId: '88d1de7d-1c3a-4c3f-b416-123c7bfaed14' }
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
