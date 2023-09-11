import { defineStore } from 'pinia'

export default defineStore('theme', {
  state: () => ({
    theme: 'light'
  })
})
