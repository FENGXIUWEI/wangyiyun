<template>
  <div class="wrapper">
    <scroll v-show="data.length" class="scroll-wrap" @scroll="scroll">
    <div>
    <div v-for="item in data" :key="item.id" ref="list">
      <p class="title">{{item.title}}</p>
      <div v-for="key in item.items" :key="key.id" class="pic-box" @click="selectSinger(key.id)">
        <div class="picUrl">
          <img v-lazy="key.picUrl"/>
        </div>
        <p class="pictitle">{{key.name}}</p>
      </div>
    </div>
     </div>
    </scroll>
    <div class="alphabet" @touchstart.stop.prevent="onShortcutTouchStart">
      <span v-for="(item,index) in data" :key="index" :class="{active:currentIndex===index}" :data-index="index">
        {{item.title}}
      </span>
    </div>
  </div>
</template>

<script>
import Scroll from '@/common/scroll/scroll'
export default {
  name: 'list',
  data () {
    return {
      listHeight: [],
      scrollY: -1,
      currentIndex: 0,
      touch: {}
    }
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    Scroll
  },
  mounted () {
    this.calculateHeight()
  },
  methods: {
    calculateHeight () {
      let list = this.$refs.list
      let height = 0
      this.listHeight.push(height)
      console.log(list)
      for (let i = 0; i < list.length; i++) {
        console.log(list[i].offsetHeight)
        height += list[i].clientHeight
        this.listHeight.push(height)
      }
    },
    scroll (posY) {
      this.scrollY = posY.y
    },
    // 手动触发时执行的效果
    onShortcutTouchStart (e) {
      // 动态获取元素的属性
      let index = e.target.getAttribute('data-index')
      // 获取touches对象
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = index
      console.log(e)
    },
    selectSinger (id) {
      this.$router.push(`/SingerDetail/${id}`)
    }
  },
  watch: {
    scrollY (newY) {
      // 如果newY的值大于0
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // 边界值的判断
      if (-newY > this.listHeight[this.listHeight.length - 1]) {
        this.currentIndex = this.listHeight.length - 2
        return
      }
      // 问题计算不准确
      for (let i = 0; i < this.listHeight.length; i++) {
        if (-newY > this.listHeight[i] && -newY <= this.listHeight[i + 1]) {
          this.currentIndex = i
          return
        }
      }
    }
  }
}
</script>

<style scoped>
  .scroll-wrap{
    position: relative;
    height:1000px;
    overflow:hidden;
  }
  .title{
    height:40px;
    line-height:40px;
    font-size:26px;
    padding-left:20px;
    background:#d5d5d5;
  }

  .pic-box{
    padding:10px 20px;
    border-bottom:1px solid #d5d5d5;
    background:white;
    align-items: center;
    display:flex;
  }
  .picUrl{
    flex:0 1 80px;
  }
  .picUrl img{
    width:80px;
    height:80px;
  }
  .pictitle{
    padding-left:20px;
    flex:1;
    font-size:26px;
  }
  .alphabet{
    width:60px;
    position:absolute;
    top:100px;
    right:0;
  }
  .alphabet span{
    display:block;
    text-align:center;
    font-size:24px;
    width:60px;
    height:40px;
    font-weight:bold;
    color:#757575;
    line-height:40px;
  }
  .alphabet span.active{
    color:red;
  }
</style>
