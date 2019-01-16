<template>
  <div class="container" @mouseover="clearAutoPlay" @mouseout="openAutoPlay">
    <div class="list" >
      <ul ref="imgs" :style="{width:imgsHeight}" style="left:0;">
        <li >
          <a href="#">
            <img :src="banners[banners.length-1].imageUrl"/>
          </a>
        </li>
        <li v-for="item in banners" :key="item.targetId">
          <a href="#">
            <img :src="item.imageUrl"/>
          </a>
        </li>
        <li >
          <a href="#">
            <img :src="banners[0].imageUrl"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="dots">
      <ul>
        <li v-for="(item,index) in banners" :key="item.targetId" @click="imgIndex(index)" >
          <a href="#" :class="{'active':activeIndex==index}"></a>
        </li>
      </ul>
    </div>
    <a href="#" class="prev" @click="prevous">上一页</a>
    <a href="#" class="next" @click="next">下一页</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      banners: {},
      activeIndex: 0,
      timer: ''
    }
  },
  computed: {
    imgsHeight () {
      return this.banners.length * 300 + 'px'
    }

  },
  methods: {
    init () {
      if (this.activeIndex >= this.banners.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex = this.activeIndex + 1
      }
      this.$refs.imgs.style.left = -this.activeIndex * 300 + 'px'
    },
    prevous () {
      if (this.activeIndex <= 0) {
        this.activeIndex = this.banners.length - 1
      } else {
        this.activeIndex = this.activeIndex - 1
      }
      this.$refs.imgs.style.left = -this.activeIndex * 300 + 'px'
    },
    next () {
      if (this.activeIndex >= this.banners.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex = this.activeIndex + 1
      }
      this.$refs.imgs.style.left = -this.activeIndex * 300 + 'px'
    },
    imgIndex (index) {
      this.$refs.imgs.style.left = -index * 300 + 'px'
    },
    clearAutoPlay () {
      clearInterval(this.timer)
    },
    openAutoPlay () {
      let that = this
      that.timer = setInterval(() => {
        that.init()
      }, 500)
    }
  },
  mounted () {
    axios.get('http://192.168.0.103:3000/banner').then((res) => {
      this.banners = res.data.banners
    })
    let that = this
    if (this.banners) {
      // 自动轮播效果
      that.timer = setInterval(() => {
        that.init()
      }, 500)
    }
  }
}
</script>
<style scoped>
ul,li,a,img{
  padding:0px;
  margin:0px;
}
.container{
  position:relative;
  width:300px;
  height:111px;
  overflow:hidden;
  white-space: nowrap;
}
.list{
  width:300px;
}
.list ul{
  position:relative;
  left:0;
  list-style:none;
  overflow:hidden;
}
.list ul li{
  width:300px;
  float:left;
}
.list ul li a img{
  width:300px;
}
.dots{
  position:absolute;
  bottom:0;
  left:50%;
  transform:translate(-50%,0);
}
.dots ul{
  overflow:hidden;
  list-style:none;
}
.dots ul li{
  float:left;
}
.dots ul li a{
  display:inline-block;
  width:12px;
  height:12px;
  border-radius:50%;
  background:rgba(0,0,0,0.8);
  margin-right:4px;
}
.dots ul li a.active{
  background:rgba(255,255,255,0.8);
}
.next,.prev{
  position:absolute;
  font-size:12px;
  color:red;
  top:50px;
}
.prev{
  left:0px;
}
.next{
  right:0px;
}
</style>
