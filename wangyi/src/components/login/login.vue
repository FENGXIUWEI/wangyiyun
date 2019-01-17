<template>
  <div class="container">
    <div class="header">
      登录
    </div>
    <h1 class="logo">
      <img src="@/assets/img/logo.png"/>
    </h1>
    <div class="box">
      <form >
        <div class="username">
          <input type="text" placeholder="用户名登录" v-model="username"/>
        </div>
        <div class="psw">
          <input type="password" placeholder="密码" v-model="psw"/>
        </div>
        <div class="btns">
          <button class="register">注册</button>
          <button class="login" @click="login">登录</button>
        </div>
      </form>
      <p class="forget"><a href="#">忘记密码?</a></p>
      <p class="contact-title">使用社交账号登录</p>
      <p class="contact-img">
        <a href="#">
          <img src="@/assets/img/weibo.png"/>
        </a>
        <a href="#">
          <img src="@/assets/img/qq.png"/>
        </a>
        <a href="#">
          <img src="@/assets/img/weixin.png"/>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {baseUrl} from '@/assets/js/config.js'
import {mapMutations} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      psw: ''
    }
  },
  methods: {
    login () {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      if (this.username === '' || this.psw === '') {
        console.log('用户名或者密码不能为空')
      } else if (!myreg.test(this.username)) {
        console.log('请输入有效的用户名')
      } else {
        axios.get(`${baseUrl}/login/cellphone?phone=${this.username}&password=${this.psw}`).then((res) => {
          if (res.data.code === 200) {
            console.log(res.data)
            let obj = {}
            obj.loginType = res.data.loginType
            obj.username = res.data.account.userName
            obj.nickname = res.data.profile.nickname
            this.setUser(obj)
            this.$router.push('/home')
          } else {
            console.log('登录失败')
          }
        })
      }
    },
    ...mapMutations({
      'setUser': 'SET_USER'
    })
  }
}
</script>

<style scoped>
  body{
    background:#fff6f7;
    width:750px;
  }
  .header{
    height:86px;
    line-height:86px;
    color:white;
    text-align:center;
    font-size:30px;
    background:#f03637;
  }
  .logo{
    text-align:center;
    margin-top:100px;
  }
  .logo img{
    width:240px;
    height:240px;
  }
  .box{
    width:640px;
    height:202px;
    border:1px solid #afb0b0;
    margin:60px auto 0;
    border-radius:6px;
  }
  .username,.psw{
    height:100px;
    padding-left:100px;
    font-size:26px;
    border-bottom:1px solid #d9d9d9;
  }
  .username{
    background-image:url('../../assets/img/user.png') ;
    background-repeat: no-repeat;
    background-size:50px 50px;
    background-position:50px 25px;
  }
  .psw{
    border:0;
    background-image:url('../../assets/img/psw.png') ;
    background-repeat: no-repeat;
    background-size:50px 50px;
    background-position:50px 25px;
  }
  .username input,.psw input{
    height:100px;
    width:490px;
    border:0px;
    padding-left:25px;
    padding-right:25px;
    border-radius:6px;
  }
  .btns{
    text-align:center;
    margin-top:50px;
    font-size:0px;
  }
  .btns button{
    width:200px;
    height:66px;
    border-radius:6px;
    cursor:pointer;
  }
  .register{
    color:#ed3332;
    background:white;
    border:1px solid #ef6969;
  }
  .login{
    background:#f53a3c;
    color:white;
    border:1px solid #cf1819;
    margin-left:36px;
  }
  .forget{
    margin-top:25px;
    text-align:right;
  }
  .forget a{
    font-size:24px;
    color:#636060;
    text-decoration: none;
  }
  .contact-title{
    text-align:center;
    font-size:24px;
    color:#2c2b2b;
    margin-top:106px;
  }
  .contact-img{
    text-align:center;
    font-size:0px;
    padding-top:50px;
  }
  .contact-img a{
    display:inline-block;
    width:90px;
    height:90px;
    border-radius:50%;
    margin-left:45px;
  }
  .contact-img img{
    width:90px;
    height:90px;
  }
  .contact-img a:first-child{
    margin-left:0;
  }
</style>
