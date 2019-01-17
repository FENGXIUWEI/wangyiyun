<template>
  <div class="singer">
    <div v-if="rec.length" >
      <list :data="rec" ></list>
    </div>
    <loading v-show="!rec.length">
    </loading>
  </div>
</template>

<script>
import axios from 'axios'
import {baseUrl} from '@/assets/js/config.js'
import List from '@/common/list/list'
import Loading from '@/common/loading/loading'
var pinyin = require('pinyin')
const HOST_TITLE = '热门'
const HOST_NUM = 10
export default {
  name: 'singer',
  data () {
    return {
      artists: [],
      rec: []
    }
  },
  components: {
    Loading,
    List
  },
  mounted () {
    setTimeout(() => {
      this.initSinger()
    }, 20)
  },
  methods: {
    initSinger () {
      axios.get(`${baseUrl}/top/artists?limit=100`).then((res) => {
        this.rec = this.normalSinger(res.data.artists)
        this.calculateHeight()
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
    }
  }
}
</script>

<style scoped>
.singer{
  position: relative;
}
</style>
