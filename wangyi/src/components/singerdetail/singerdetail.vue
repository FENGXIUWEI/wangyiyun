<template>
   <div class="music-list" >
     <div>
     <div class="header" ref="header">
       <div class="back">
         <i class="fa fa-angle-left"></i>
       </div>
       <div class="text">
         <h1 class="title" v-show="title.length">{{title}}</h1>
       </div>
     </div>
     <div class="list">
     <div class="music-list-wrapper">
       <div class="bg-image" ref="bgImage" :style="bgStyle">
         <div class="filter"></div>
         <div class="text">
           <h2 class="list-title" v-show="title.length">{{title}}</h2>
         </div>
       </div>
       <div class="song-list-wrapper">
         <div class="sequence-play" >
           <i class="iconfont icon-bofangicon"></i>
           <span class="text">播放全部</span>
           <span class="count">(共{{hotSongs}}首)</span>
         </div>
         <div class="song-wrapper">
          <song-list :song="data.hotSongs" @select="selectItem"></song-list>
         </div>
       </div>
     </div>
     </div>
     </div>
   </div>
</template>

<script>
import {baseUrl} from '@/assets/js/config.js'
import SongList from '@/common/song-list/song-list'
import Loading from '@/common/loading/loading'
import {mapActions} from 'vuex'
export default {
  name: 'singerdetail',
  data () {
    return {
      data: [],
      title: '',
      hotSongs: 0,
      bgStyle: ''
    }
  },
  created () {
    this.fetchData()
  },
  mounted () {
  },
  methods: {
    // 运用action方法
    selectItem (item, index) {
      this.selectPlay({
        list: item,
        index: index
      })
    },
    fetchData () {
      let id = this.$route.params.id
      this.$fetch(`${baseUrl}/artists?id=${id}`).then((res) => {
        if (res.code === 200) {
          this.data = res
          this.title = this.data.artist.name
          this.hotSongs = this.data.hotSongs.length
          this.bgStyle = `background-image:url(${this.data.artist.picUrl})`
        }
      }, error => {
        console.log(error)
      })
    },
    ...mapActions([
      'selectPlay'
    ])
  },
  computed: {
  },
  components: {
    SongList,
    Loading
  }
}
</script>

<style scoped>
.music-list{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
.header{
  position:fixed;
  top:0px;
  height:80px;
  width:100%;
  line-height:80px;
  color:white;
  z-index:100;
  padding-left:20px;
  font-size:16px;
}
.bg-image{
  position:relative;
  height:0px;
  padding-top:75%;
  background-size:cover;
}
.bg-image .text{
  position:absolute;
  padding-left:20px;
  font-size:24px;
  color:white;
  bottom:40px;
}
.song-list-wrapper{
  position:relative;
  top:-20px;
  background:white;
  border-radius:10px;
}
.sequence-play{
  height:80px;
  padding-left:20px;
  line-height:80px;
  border-bottom:1px solid rgb(228, 228, 228);
}
</style>
