<template>
  <div class="rank-list">
    <div class="rank" v-for="item in list" :key="item.id">
      <div class="rank-img">
        <img :src="item.coverImgUrl"/>
      </div>
      <div class="song-list">
        <p v-for="(song,index) in item.tracks" :key="index">
          {{index+1}}.{{song.first}}-{{song.second}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {baseUrl} from '@/assets/js/config.js'
const YUNMUSIC_TOP = [0, 1, 2, 3, 4, 22, 23]
export default {
  name: 'rank',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    for (let i = 0; i < YUNMUSIC_TOP.length; i++) {
      axios.get(`${baseUrl}/top/list?idx=${YUNMUSIC_TOP[i]}`).then((res) => {
        let list = res.data.playlist
        list.tracks = list.tracks.splice(0, 3)
        this.list.push(list)
      })
    }
    console.log(this.list)
  }
}
</script>

<style scoped>
.rank{
 display:flex;
}
.rank-img{
  flex:0 1 300px;
}
.rank-img img{
  height:300px;
  heihgt:300px;
}
.song-list{
  flex:1;
}
</style>
