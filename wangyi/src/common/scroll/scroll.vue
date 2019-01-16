<template>
  <div class="scroll" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  created () {
    this.initScroll()
  },
  mounted () {
    this.initScroll()
    let fullHeight = document.documentElement.clientHeight
    let header = this.$parent.$parent.$children[0].$refs.headerWrap.clientHeight
    let nav = this.$parent.$parent.$children[1].$refs.tab.clientHeight
    let foot = this.$parent.$parent.$children[3].$refs.footer.clientHeight
    this.$refs.scroll.style.height = fullHeight - header - nav - foot + 'px'
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        scrollX: false,
        momentum: false
      })
    }
  }
}
</script>
<style scoped>
</style>
