<template>
  <div class="scroll" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
    // probeType为1 表示监听滚动的事件
    probeType: {
      type: Number,
      default: 3
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    })
    /** let fullHeight = document.documentElement.clientHeight
    let header = this.$parent.$parent.$children[0].$refs.headerWrap.clientHeight
    let nav = this.$parent.$parent.$children[1].$refs.tab.clientHeight
    let foot = this.$parent.$parent.$children[3].$refs.footer.clientHeight
    this.$refs.scroll.style.height = fullHeight - header - nav - foot + 'px'
     **/
  },
  methods: {
    initScroll () {
      if (!this.$refs.scroll) {
        return
      }
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        scrollX: false,
        probeType: this.probeType
      })
      // 设置滚动的事件
      this.scroll.on('scroll', (posY) => {
        // 子组件给父组件传递函数
        console.log(posY)
        this.$emit('scroll', posY)
      })
    }
  }
}
</script>
<style scoped>
</style>
