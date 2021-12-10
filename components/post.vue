<template lang="pug">
v-card(width="90vw" class="mx-auto mt-5").form
  v-form
    h1 新規投稿
    v-text-field(v-model="title" label="タイトル" required)
    v-text-field(v-model="content" label="本文" required)
    v-card-actions
      v-btn(@click="post(title,content)") 投稿
</template>
<script>
const envSet = require('@/env.settings.js')[[process.env.NODE_ENV]]
export default {
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    async post(title, content) {
      let token = JSON.parse(localStorage.getItem('user')).login.access
      await this.$axios
        .post(
          `http://localhost:${envSet.PORT}/api/post/post`,
          {
            token: token,
            title: title,
            content: content,
          },
          {
            'Content-Type': 'application/json',
          }
        )
        .then((rs) => {
          this.$router.push('/home')
        })
        .catch((e) => res.send(e))
    },
  },
}
</script>
<style scoped>
.form {
  margin: 10px auto;
  padding: 10px;
}
</style>
