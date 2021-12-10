<template lang="pug">
main
  button(@click="getprofile") プロフィール
  p {{profile.data}}
</template>
<script>
import axios from 'axios'
const envSet = require('@/env.settings.js')[[process.env.NODE_ENV]]
export default {
  data() {
    return {
      profile: '',
    }
  },
  methods: {
    async getprofile() {
      try{
        let token = JSON.parse(localStorage.getItem('user')).login.access
        this.profile = await this.$axios.post(
          `http://localhost:${envSet.PORT}/api/post/get`,
          { token: token }
        )
      } catch(e){
        this.$router.push('/')
      }
    },
  },
}
</script>
