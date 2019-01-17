<template>
  <div id="app">
    <router-view></router-view>
    <play></play>
  </div>
</template>

<script>
import Play from '@/components/play/play'
export default {
  name: 'App',
  components: {
    Play
  }
}
</script>

<style>
html{
  font-size:32px;
}
input,button,img,h1,a{
  padding:0px;
  margin:0px;
}
img{
  border:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  padding:0px;
  margin:0px;
}
</style>
