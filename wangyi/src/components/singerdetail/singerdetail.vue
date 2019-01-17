<template>
   <div>
    <s-header :title="title"></s-header>
     <div v-for="(item,index) in data.hotSongs" :key="index" @click="selectItem(item,index)">
        {{item.name}}
     </div>
   </div>
</template>

<script>
import axios from 'axios'
import {baseUrl} from '@/assets/js/config.js'
import SHeader from '@/components/sheader/sheader'
import {mapActions} from 'vuex'
export default {
  name: 'singerdetail',
  data () {
    return {
      title: '',
      data: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      let id = this.$route.params.id
      axios.get(`${baseUrl}/artists?id=${id}`).then((res) => {
        this.data = res.data
        this.title = res.data.artist.name
      })
    })
  },
  methods: {
    selectItem (item, index) {
      this.selectPlay({
        list: item,
        index
      })
    },
    // 运用action方法
    ...mapActions([
      'selectPlay'
    ])
  },
  components: {
    SHeader
  }
}
</script>

<style scoped>

</style>
