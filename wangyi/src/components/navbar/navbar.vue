<template>
  <div class="tab" ref="tab">
    <router-link tag="div" to="/recommend" class="tab-item">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" to="/singer" class="tab-item">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" to="/home" class="tab-item">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" to="/search" class="tab-item">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.tab{
  font-size:0px;
  border-bottom:1px solid #d0d0d1;
}
.tab-item{
  width:25%;
  text-align:center;
  font-size:34px;
  height:92px;
  line-height:92px;
  display:inline-block;
}
.tab-link{
  padding:23px 10px;

}
.tab-item.active .tab-link{
  border-bottom:5px solid red;
}
</style>
