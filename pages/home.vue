<template lang="pug">
main
  //- p {{data.data}}
  //- p {{user.data}} プロフィールの登録を必須にする
  v-btn(elevation="2" @click="post()").btn 投稿
  .cardarea
    v-card(v-for="i in data.data" :key="i.title" width="25%" class="mx-auto mt-5" elevation="2").pad
        v-card-title
          h1(class="display-1") {{i.title}}
        v-card-text(max-height="50px")
          p {{i.text}}
</template>
<script>
import axios from 'axios'
const envSet = require('@/env.settings.js')[[process.env.NODE_ENV]]

export default {
  data() {
    return {
      data: '',
      user: '',
    }
  },
  async mounted() {
    let token = JSON.parse(localStorage.getItem('user')).login.access
    this.data = await this.$axios.post(
      `http://localhost:${envSet.PORT}/api/post/get`,
      {
        token: token,
      }
    )
    this.user = await this.$axios.post(
      `http://localhost:${envSet.PORT}/api/profile`,
      {
        token: token,
      }
    )
    // for(i in this.data.data) {
    //   i.user = await this.$axios.post(
    //     `http://localhost:${envSet.PORT}/api/profile`,
    //   )
    // }
  },
  methods: {
    post() {
      this.$router.push('/post')
    },
  },
}
</script>
<style scoped>
.btn {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;
}
.cardarea {
  margin: 10px 10px;
  display: flex;
  flex-wrap: wrap;
}
.pad {
  margin: 10px 10px;
}
</style>
