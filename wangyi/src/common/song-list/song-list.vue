<template>
   <div >
      <div class="song" v-for="(item,index) in song" :key="item.id" @click="selectItem(song, index)">
        <div class="item">
          {{index+1}}
        </div>
        <div class="desc">
          <p class="songname">{{item.name}}</p>
          <p class="artistname">{{item.ar[0].name}}</p>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'song-list',
  props: {
    song: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    selectItem (item, index) {
      this.$emit('select', item, index)
    }
  }
}
</script>

<style scoped>
.song{
  padding:20px;
  display:flex;
  align-items: center;
  border-bottom:1px solid rgb(228, 228, 228);
}
.item{
  color:#757575;
  padding-right:20px;
}
.songname{
  font-size:28px;
  color:#333;
}
.artistname{
  margin-top:10px;
  font-size:24px;
  color:#757575;
}
</style>
