<template lang="pug">
main
  .heading
  logout.head(v-show="show")
  nuxt
</template>
<script>
import logout from '@/components/logout'
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.show = true
    } else {
      this.show = false
    }
  },
  components: {
    logout,
  },
}
</script>
<style scoped>
.head {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 100;
}
.heading {
  width: 100vw;
  height: 3rem;
}
</style>
