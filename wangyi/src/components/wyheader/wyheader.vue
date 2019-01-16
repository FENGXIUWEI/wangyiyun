<template>
  <div class="header-wrap" ref="headerWrap">
    <div class="icon">
      <a href="#">
        <img src="@/assets/img/voice.png"/>
      </a>
    </div>
    <div class="input">
      <span>
        搜索音乐,歌词
      </span>
    </div>
    <div class="icon">
      <a href="#">
        <img src="@/assets/img/play.png"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WyHeader'
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
  height:56px;
}
.icon img{
  width:56px;
  height:56px;
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
</style>
