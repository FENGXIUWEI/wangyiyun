<template>
  <div v-show="playing">
    {{fullScreen}}
    {{currentIndex}}
    {{playing}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'play',
  computed: {
    ...mapGetters([
      'currentIndex',
      'fullScreen',
      'playing'
    ])
  }
}
</script>

<style scoped>

</style>
