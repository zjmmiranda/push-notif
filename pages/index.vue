<template>
  <div>
    <p v-show="token != ''">
      Ready!
    </p>
    <Tutorial/>
    <button @click="sendNotification()">Send notification</button>
  </div>
  
</template>

<script>
import { getMessaging } from "firebase/messaging";
export default {
  name: 'IndexPage',
  data() {
    return {
      token: ''
    }
  },
  async mounted() {
    const currentToken = await this.$fire.messaging.getToken()
    console.log(currentToken)
    this.token = currentToken
  },
  methods: {
    async sendNotification(){
      const currentToken = await this.$fire.messaging.getToken()
      console.log(currentToken)
      this.token = currentToken
      const authToken = 'Bearer ya29.a0ARrdaM-kIX_F8fH5VuHjpWYj5DfjycfuNjjkYGamNw9ctWfDIi7P9zjaBoY9PKxTuA3KQG_GaRM8XKh7aDXBwNLH52QGHb5Rjz4fNI92r1Pw_f4EAOq45gUK993WX3vlXfLB5saGrP10Sorh01bohn259BYI'
      const payload = {
        message: {
          notification: {
            title: 'firebase',
            body: 'firebase is awesome'
          },
          token: this.token
        }
      }
      
      const response = await this.$axios.post('https://fcm.googleapis.com/v1/projects/push-notif-14198/messages:send', payload, {
        headers: {
          'Authorization': authToken,
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      this.$fire.messaging.onMessage((payload) => {
        console.info('Message received: ', payload)
        alert(payload.notification.body)
      })
    }
  }
}
</script>
