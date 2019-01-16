<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <a href="#" class="dot" v-for="(item,index) in dots" :key="item" :class="{'active':currentIndex==index}" @click="selectImg(index)"></a>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 当前选中的坐标值
      currentIndex: 0,
      dots: []
    }
  },
  // 页面载入完成的时候触发的事件
  mounted () {
    // 或取有几张图片;要确定图片确实加载完成，否则获取到的值会为0
    setTimeout(() => {
      this.initWidth()
      this.initDots()
      this.initScroll()
      if (this.autoPlay) {
        this.play()
      }
    }, 20)
    window.addEventListener('resize', () => {
      this.initWidth(true)
      // 执行刷新事件
      this.scroll.refresh()
    })
  },
  methods: {
    // 设置slider-group的大小
    initWidth (isResize) {
      this.chilren = this.$refs.sliderGroup.children
      // 获取父元素的宽度
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.chilren.length; i++) {
        // 需要给每个img设置宽度，不设置会出现问题
        this.chilren[i].style.width = sliderWidth + 'px'
        // 获取宽度
        width += sliderWidth
      }
      // 给其多留两个位置
      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    // 初始化dots
    initDots () {
      this.dots = new Array(this.chilren.length)
    },
    // 实例化better-scroll组件
    initScroll () {
      // 图片轮播是指横向进行滚动效果
      this.scroll = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        // 关闭或者打开惯性运动的执行
        snap: {
          loop: true,
          // 循环
          threshold: 0.3,
          speed: 400
          // 轮播间隔
        }
      })
      // 在滚动结束时获取当前的位置
      this.scroll.on('scrollEnd', () => {
        this.currentIndex = this.scroll.getCurrentPage().pageX
      })
      // 当滚动开始的时候清除自动播放
      this.scroll.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearInterval(this.timer)
        }
      })
    },
    // 点击小图标时，图片滚动到对应的位置
    selectImg (index) {
      if (this.autoPlay) {
        clearInterval(this.timer)
      }
      this.scroll.goToPage(index, 0, 400)
      this.currentIndex = index
      this.play()
    },
    // 设置自动播放效果
    play () {
      this.timer = setInterval(() => {
        let pageIndex = this.currentIndex + 1
        if (pageIndex > this.dots.length - 1) {
          pageIndex = 0
          this.currentIndex = 0
        } else {
          this.currentIndex = this.currentIndex + 1
        }
        this.scroll.goToPage(pageIndex, 0, 400)
      }, 5000)
    }
  }
}
</script>

<style scoped>
  .slider{
    overflow:hidden;
  }
  .slider-group{
    height:282px;
    position: relative;
  }
  .slider-group img{
    height:282px;
  }
  .dots{
    text-align:center;
  }
  .dot{
    display:inline-block;
    width:15px;
    height:15px;
    margin-right:5px;
    background:rgba(0,0,0,0.6);
    border-radius:50%;
  }
  .dot.active{
    background:red;
  }
</style>
