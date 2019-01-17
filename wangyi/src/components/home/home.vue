<template>
  <div>
    <wy-header></wy-header>
    <nav-bar></nav-bar>
    <router-view>
    </router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import WyHeader from '@/components/wyheader/wyheader'
import NavBar from '@/components/navbar/navbar'
import TabBar from '@/components/tabbar/tabbar'
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  components: {
    WyHeader,
    NavBar,
    TabBar
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  mounted () {
    if (!this.user.loginType) {
      //  this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
