<template>
   <i :class="`iconfont icon-${type}`" :style="bgStyle"></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#5c6b77'
    }
  },
  computed: {
    bgStyle () {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      }
    }
  }
}
</script>

<style scoped>

</style>
