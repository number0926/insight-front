<template lang="pug">
  v-app.hei
    v-card(width="400px" class="mx-auto mt-5")
      v-card-title
        h1(class="display-1") サインイン
        .ermsg(v-show="error") 有効なメールアドレスまたはパスワードを入力してください。
      v-card-text
        v-form
          v-text-field(prepend-icon="mdi-email" label="メールアドレス" v-model="mail")
          v-text-field(prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" label="パスワード" @click:append="showPassword=!showPassword" v-model="pass")
          v-card-actions
            v-btn(class="info" @click="register(mail,pass)") サインイン
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
      error: false,
    }
  },
  methods: {
    ...mapActions('login', {
      async register(dispatch, mail, pass) {
        sessionStorage.clear()
        this.data = await this.$axios.post(
          `http://localhost:${envSet.PORT}/api/register`,
          {
            mail: mail,
            pass: pass,
          }
        )
        if (this.data.data.name == 'Error') this.error = true
        else {
          this.error = false
          dispatch('register', this.data.data)
        }
        this.$router.push('/home')
      },
    }),
  },
}
</script>
<style scoped>
.hei {
  height: 50vh;
}
.ermsg {
  color: red;
  font-size: 0.75rem;
}
</style>
