import { defineStore } from 'pinia'
import axios from 'axios'
import VueCookies from 'vue-cookies'
export default defineStore('Barjavand', {
  state: () => ({
    imageId: '',
    activityName: '',
    description: '',
    date: '',
    fromHour: '',
    untilHour: '',
    activityType: '',
    userId: ''
  }),
  actions: {
    async sendActivityData(values, userId) {
      try {
        const response = await axios.post(
          '/service/barjavand@3/data',
          {
            schema: {
              name: 'activity',
              version: '1.0.0'
            },
            tags: {
              userId: userId,
              date: values.date,
              activityType: values.create
            },
            data: {
              imageId: '',
              activityName: values.createActivity,
              description: values.description,
              date: values.date,
              fromHour: values.startTime,
              untilHour: values.endTime,
              activityType: values.create,
              userId: userId
            }
          },
          {
            headers: {
              system: 'mrRobot',
              'gateway-system': 'mrRobot',
              user: 'mrRobot',
              pass: 'mrRobot'
            }
          }
        )
        console.log(response)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
})
