<template lang="pug">
  v-btn(elevation="2" @click="logout()" class="mx-auto mt-5") ログアウト
</template>
<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
const envSet = require('@/env.settings.js')[[process.env.NODE_ENV]]
export default {
  data() {
    return {
      mail: '',
      pass: '',
      box: '',
      showPassword: false,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/')
    },
  },
}
</script>
