<template>
   <div class="footer" ref="footer">
     <div class="footer-item">
       <a href="#">
          <img src="@/assets/img/fmusic.png"/>
          <p class="title">发现</p>
       </a>
     </div>
     <div class="footer-item">
       <a href="#">
         <img src="@/assets/img/usertabbar.png"/>
         <p class="title">用户</p>
       </a>
     </div>
   </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style scoped>
.footer{
  position:fixed;
  bottom:0px;
  width:100%;
  padding-top:12px;
  height:100px;
  font-size:0;
  background:#c89368;
}
.footer-item {
  display:inline-block;
  width:50%;
  text-align:center;
}
.footer-item a{
  text-decoration: none;
}
.footer-item img{
  width:50px;
}
.title{
  color:white;
  font-size:22px;
}
</style>
