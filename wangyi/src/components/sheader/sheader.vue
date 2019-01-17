<template>
  <div class="header-wrap" ref="headerWrap">
    <div class="icon">
      <a href="#">
        <img src="@/assets/img/voice.png"/>
      </a>
    </div>
    <div class="input">
      <span>
        {{title}}
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
  name: 'sheader',
  props: {
    title: {
      type: String,
      default: ''
    }
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
    height:56px;
  }
  .icon img{
    width:56px;
    height:56px;
  }
  .input{
    display:inline-block;
    width:502px;
    text-align:center;
    height:66px;
    line-height:66px;
    vertical-align:top;
  }
  .input span{
    font-size:30px;
    color:white;
    letter-spacing: 3px;
  }
</style>
