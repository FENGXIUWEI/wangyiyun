<template>
  <div class="singer">
    <scroll v-show="rec.length" class="scroll-wrap" @scroll="scroll">
    <div>
    <div v-for="item in rec" :key="item.id" ref="singerItem">
      <p class="title">{{item.title}}</p>
      <div v-for="key in item.items" :key="key.id" class="pic-box">
        <div class="picUrl">
          <img v-lazy="key.picUrl"/>
        </div>
        <p class="pictitle">{{key.name}}</p>
      </div>
    </div>
    </div>
    </scroll>
    <loading v-show="!rec.length">
    </loading>
    <div class="alphabet" >
      <span v-for="(item,index) in rec" :key="index">
        {{item.title}}
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {baseUrl} from '@/assets/js/config.js'
import Scroll from '@/common/scroll/scroll'
import Loading from '@/common/loading/loading'
var pinyin = require('pinyin')
const HOST_TITLE = '热门'
const HOST_NUM = 10
export default {
  name: 'singer',
  data () {
    return {
      artists: [],
      rec: [],
      scrollY: -1
    }
  },
  created () {
  },
  components: {
    Scroll,
    Loading
  },
  mounted () {
    setTimeout(() => {
      this.initSinger()
      this.calculateHeight()
    }, 20)
  },
  methods: {
    initSinger () {
      axios.get(`${baseUrl}/top/artists?limit=100`).then((res) => {
        this.rec = this.normalSinger(res.data.artists)
      })
    },
    normalSinger (data) {
      this.artists = data
      for (let i = 0; i < this.artists.length; i++) {
        this.artists[i].pName = pinyin(this.artists[i].name)[0]
        this.artists[i].pName = this.artists[i].pName[0].substr(0, 1).toLocaleUpperCase()
      }
      // 设置热门信息
      let map = {
        hot: {
          title: HOST_TITLE,
          items: []
        }
      }
      for (let i = 0; i < this.artists.length; i++) {
        if (i < HOST_NUM) {
          map.hot.items.push({
            name: this.artists[i].name,
            id: this.artists[i].id,
            picUrl: this.artists[i].picUrl
          })
        }
        let key = this.artists[i].pName
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push({
          name: this.artists[i].name,
          id: this.artists[i].id,
          picUrl: this.artists[i].picUrl
        })
      }
      let ret = []
      let hot = []
      // 保存字母为A-Z的
      for (let key in map) {
        let value = map[key]
        if (value.title.match(/[a-zA-Z]/)) {
          ret.push(value)
        } else if (value.title === HOST_TITLE) {
          hot.push(value)
        }
      }
      // 按照顺序进行排序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      // 将数据进行合并
      hot = hot.concat(ret)
      return hot
    },
    calculateHeight () {
      console.log(JSON.stringify(this.$refs))
    },
    // 滚动的时候获取y值
    scroll (pos) {
      this.scrollY = pos.y
    }
  },
  watch: {
    // 监听data的变化
    scrollY (newY) {
      console.log(newY)
    }
  }
}
</script>

<style scoped>
.singer{
  position:relative;
  z-index:1;
}
.scroll-wrap{
  height:500px;
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
</style>
