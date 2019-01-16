<template>
   <div class="loading">
      <img src="@/assets/img/loading.gif"/>
      <p>{{title}}</p>
   </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<style scoped>
.loading{
  text-align:center;
}
.loading img{
  width:72px;
  height:72px;
}
.loading p{
  font-size:26px;
  padding-top:20px;
  padding-bottom:20px;
}
</style>
