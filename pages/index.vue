<template lang="pug">
main
  login(v-if="shown")
  register(v-if="!shown")
  v-btn(elevation="2" @click="register()" class="mx-auto mt-5" v-if="shown") 新規ユーザー作成
  v-btn(elevation="2" @click="login()" class="mx-auto mt-5" v-if="!shown") ログイン
</template>
<script>
import register from '@/components/register'
import login from '@/components/login'
export default {
  components: {
    register,
    login,
  },
  data() {
    return {
      shown: true,
    }
  },
  methods: {
    register() {
      this.shown = false
    },
    login() {
      this.shown = true
    },
  },
}
</script>
