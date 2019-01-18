<template>
  <div class="header-wrap" ref="headerWrap">
    <div class="icon">
      <a href="#">
        <Icon :type="yuyin.type" :size="yuyin.size" :color="yuyin.color"></Icon>
      </a>
    </div>
    <div class="input">
      <span>
        <Icon :type="chaxun.type" :size="chaxun.size" :color="chaxun.color"></Icon>
        搜索音乐,歌词
      </span>
    </div>
    <div class="icon">
      <a href="#">
        <Icon :type="play.type" :size="play.size" :color="play.color"></Icon>
      </a>
    </div>
  </div>
</template>

<script>
import Icon from '@/common/icon/icon'
export default {
  name: 'WyHeader',
  data () {
    return {
      yuyin: {
        type: 'yuyin',
        size: 24,
        color: 'white'
      },
      chaxun: {
        type: 'chaxun',
        size: 16,
        color: '#88898d'
      },
      play: {
        type: 'zhengzaibofang',
        size: 24,
        color: 'white'
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped>
.header-wrap{
  height:84px;
  padding-top:16px;
  background:#ee312d;
  font-size:0px;
}
.icon{
  width:124px;
  vertical-align:top;
  display:inline-block;
}
.icon a{
  display:block;
  margin:0 auto;
  width:56px;
  height:66px;
  text-align:center;
  line-height:66px;
  outline: none;
  color:white;
  text-decoration: none;
}
.icon i{
  font-size:48px;
}
.input{
  display:inline-block;
  width:452px;
  padding-left:50px;
  height:66px;
  line-height:66px;
  vertical-align:top;
  background:white;
  border-radius:6px;
}
.input span{
  font-size:30px;
  color:#88898d;
  letter-spacing: 3px;
}
.input span i{
  font-size:34px;
}
</style>
