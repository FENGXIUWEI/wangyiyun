<template>
  <div class="recommend">
    <scroll class="recommend-cont" v-if="banners.length" >
      <div ref="recommendCont">
        <div v-if="banners.length">
          <slider :loop = 'loop' :autoPlay='autoPlay'>
            <img v-for="item in banners" :key="item.targetId" :src="item.imageUrl"/>
          </slider>
        </div>
        <div class="hot-box">
          <p class="hot-title">推荐歌单</p>
          <div class="hot-wrap">
            <div class="hot-item" v-for="item in recommend" :key="item.id" >
              <a href="">
                <div class="img-box">
                  <img v-lazy="item.picUrl"/>
                </div>
                <p class="sub-title">{{item.name}}</p>
              </a>
            </div>
          </div>
        </div>
        <div class="hot-box">
          <p class="hot-title">最新音乐</p>
          <div class="hot-wrap">
            <div class="hot-item" v-for="item in newsong" :key="item.song.id" >
              <a href="">
                <div class="img-box">
                  <img v-lazy="item.song.album.picUrl"/>
                </div>
                <p class="sub-title">{{item.name}}</p>
              </a>
            </div>
          </div>
        </div>
        <loading v-show="!banners.length">
        </loading>
      </div>
    </scroll>
  </div>
</template>
<script>
import axios from 'axios'
import Slider from '@/common/slider/slider'
import Loading from '@/common/loading/loading'
import Scroll from '@/common/scroll/scroll'
import {baseUrl} from '@/assets/js/config.js'
export default {
  name: 'recommend',
  data () {
    return {
      banners: {},
      recommend: {},
      newsong: {},
      // 控制循环播放
      loop: true,
      // 控制自动播放
      autoPlay: true
    }
  },
  components: {
    Slider,
    Loading,
    Scroll
  },
  created () {
  },
  mounted () {
    axios.get(`${baseUrl}/banner`).then((res) => {
      this.banners = res.data.banners
    })
    axios.get(`${baseUrl}/personalized`).then((res) => {
      this.recommend = res.data.result.slice(0, 6)
    })
    axios.get(`${baseUrl}/personalized/newsong`).then((res) => {
      this.newsong = res.data.result.slice(0, 6)
    })
  }
}
</script>
<style scoped>
  .recommend{
    padding-bottom:112px;
  }
  .recommend-cont{
    overflow:hidden;
  }
  .hot-box{
    padding-left:6px;
    padding-top:22px;
    padding-right:0;
  }
  .hot-title{
    font-size:38px;
    color:#1c1b1b;
    padding-left:18px;
    padding-bottom:22px;
  }
  .hot-wrap{
    font-size:0;
  }
  .hot-item{
    margin-bottom:48px;
    width:230px;
    padding-left:6px;
    padding-right:12px;
    display:inline-block;
    vertical-align: top;
  }
  .hot-item a{
    display:block;
    text-decoration: none;
    color:#404040;
  }
  .hot-item img{
    width:230px;
    height:230px;
  }
  .sub-title{
    font-size:28px;
    line-height:40px;
    height:80px;
    overflow:hidden;
    text-overflow:ellipsis;
    padding-top:8px;
  }
</style>
