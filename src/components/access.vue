<template>
  <div>

    <div id="menu_block">
      <a href="/">
        <img id="img1" src="../../static/img1.png" height="65" width="62"/>
      </a>
    </div>
    <div id="vue-app">
      <div id="top">
        <div id="sign_inn" @click="sign_in">Sign in</div>
        <div id="sign_up" @click="sign_up">Sign up</div>
        <input placeholder="     Search url here" v-model="search_id">
        <button id="btn" @click="search">search</button>
        <div>{{searched_id}}</div>
      </div>
      <!--注册-->
      <div id="sign_in" >
        <div id="form1">
          <form class="sign_up" action="" method="" name="">
            <div class="input">
              <span>Username:</span>
              <input type="text" required="required" v-model="username">
            </div>
            <div class="input">
              <span>Password:</span>
              <input type="password" v-model="password_hash">
            </div>
            <div class="input">
              <span>Password Again:</span>
              <input type="password" v-model="repeatpassword" @change="pwd">
            </div>
            <div class="input">
              <span>Telephone:</span>
              <input type="tel" v-model="telephone" @change="tel">
            </div>
            <div class="input">
              <span>E-mail:</span>
              <input type="email" v-model="email_hash" @change="email">
            </div>
            <div class="input">
              <span>Country:</span>
              <input type="text" v-model="country">
            </div>
            <div class="btn_sign">
              <button class="btn_sign_in" @click="submit_register">sign up</button>
            </div>
            <span class="way">其他注册方式</span>
            <img class="img11" src="../../static/img11.jpeg" height="54" width="52"/>
            <img class="img12" src="../../static/img12.jpeg" height="50" width="50"/>
            <img class="img13" src="../../static/img13.jpeg" height="52" width="55"/>
          </form>
        </div>
        <!--登录-->
        <div id="form2">
          <form class="sign_in" action="" method="" name="">
            <div class="input">
              <span>Username:</span>
              <input type="text" v-model="username">
            </div>
            <div class="input">
              <span>Password:</span>
              <input typ e="password" v-model="password_hash">
            </div>
            <div class="btn_sign">
              <button class="btn_sign_in" @click="submit_login">sign up</button>
            </div>
            <span class="way">其他登录方式</span>
            <img class="img11" src="../../static/img11.jpeg" height="54" width="52"/>
            <img class="img12" src="../../static/img12.jpeg" height="50" width="50"/>
            <img class="img13" src="../../static/img13.jpeg" height="52" width="55"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "access",
      data(){
        return{
          username:'',
          password_hash:'',
          repeatpassword:'',
          telephone:'',
          email_hash:'',
          country:'',
          register_bool:'',
          search_id:'',
          searched_id:'',
        }
      },
      methods: {
        sign_in:function () {
          let form1=document.getElementById("form1");
          let sign_inn=document.getElementById("sign_inn");
          let form2=document.getElementById("form2");
          let sign_up=document.getElementById("sign_up");
          sign_inn.style.border='1px solid black';
          sign_up.style.border="none";
          form1.style.display="block";
          form2.style.display="none";
        },
        sign_up:function () {
          sign_up.style.border='1px solid black';
          sign_inn.style.border="none";
          form2.style.display="block";
          form1.style.display="none";
        },
        //此处为注册
        //需返回判断值（优化：在界面上直接判断哪里没有专一性）
        //需要先判断输入的内容对不对（电话、邮件合法吗，两次密码一样吗
        tel:function(){
          let phone=/^1[345789]\d{9}$/;
          if (!phone.test(this.telephone)) {
            alert("请输入正确的手机号");
            this.telephone = "";
          }
        },
        email:function(){
          let email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          if (!email.test(this.email_hash)) {
            alert("请输入正确的邮箱");
            this.email_hash = "";
          }
        },
        pwd:function(){
          if(this.password_hash===this.repeatpassword){

          }else{
            alert("两次输入的密码不同，请重新输入");
            this.password_hash="";
            this.repeatpassword="";
          }
        },
        submit_register:function(){
          let qs = require('qs');
          const that=this;
          this.axios.post('http://114.55.98.156:3000/register',
            qs.stringify({
              username:this.username,
              password_hash:this.password_hash,
              repeatpassword:this.repeatpassword,
              telephone:this.telephone,
              email_hash:this.email_hash,
              country:this.country
            }))
            .then(function (response) {
              console.log(response);
              //如果注册成功则跳转至profile界面（需拼接路由（这个路由直接跳转有页面吗？）），若不成功则弹窗提示并返回注册界面
              if(response.data[0].AAB==="true"){
                console.log("success");
                alert("注册成功！请登录！");
                that.$router.push('/');
              }else{
                console.log("fail");
                alert("注册不成功，请再试！");
                that.$router.push('/');
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        },

        //此处为登录
        submit_login:function () {
          let qs = require('qs');
          const that=this;
          this.axios.post('http://114.55.98.156:3000/login',
            qs.stringify({
            username:this.username,
            password_hash:this.password_hash,
          }))
            .then(function (response) {
              console.log(response);
              if(response.data[0].AAB==="true"){
                console.log("success");
                that.$router.push({ path: '/profile' });
              }else{
                console.log("fail");
                alert("用户名或密码错误，请重新登录！");
                that.$router.push('/');
              }
          })
            .catch(function (error) {
              console.log(error);
            });
        },
        //搜索框
        search:function () {
          const that=this;
          let room_url_user=this.search_id;
          this.axios.get('http://114.55.98.156:3000/auth/search',{
            params:{
              room_url_user,
            },
          })
            .then(function (response) {
              console.log(response);
              that.searched_id=response.data.username||response.data.roomname;
              if(that.searched_id===''){
                alert("你搜索的用户/房间不存在！")
              }
            })
        },

      },
    }
</script>

<style scoped>
  #img1{
    position: absolute;
  }
  #menu_block{
    background-color: #ffffff;
    width: 80px;
    height: 610px;
    float: left;
  }
  #top{
    background-color:#f5f6fa;
    width: 1252px;
    height: 60px;
    float: left;
    position: relative;
  }
  #top>input{
    height: 34px;
    width: 200px;
    position: absolute;
    top: 10px;
    right: 150px;
    border-radius:10px;
    background-color: #edeef6;
    border:none;
    color:#9a9ba5;
  }
  #top>button{
    height: 35px;
    width: 80px;
    position: absolute;
    top: 10px;
    right: 50px;
    border-radius:10px;
    background-color: #edeef6;
    border:none;
    color:#9a9ba5;
  }
  #sign_inn{
    float: left;
    margin-left: 40px;
    margin-top: 12px;
    border: 1px solid black;
    border-radius:5px;
    width: 70px;
    height: 30px;
  }
  #sign_up{
    float: left;
    margin-left: 20px;
    margin-top: 12px;
    border-radius:5px;
    width: 70px;
    height: 30px;
  }
  #sign_in{
    background-color:#f5f6fa;
    height: 550px;
    width: 1252px;
    float: left;
  }
  .sign_up{
    width: 700px;
    height: 550px;
    margin:0 auto;
  }
  .sign_in{
    width: 700px;
    height: 550px;
    margin:0 auto;
    padding-top: 100px;
  }
  .input{
    height: 70px;
    width: 600px;
  }
  .input>input{
    margin-top: 5px;
    height: 30px;
    width: 600px;
    border-radius:2px;
    border:none;
    background-color: #edeef6;
  }
  span{
    color: #9a9ba5;
    font-size: 12px;
  }
  .way{
    margin-left: 260px;
    font-size:15px;
  }
  .btn_sign{
    width: 400px;
    height: 30px;
    margin:0 auto;
  }
  .btn_sign_in{
    height: 30px;
    width: 300px;
    border-radius:4px;
    border:none;
    color:#fff;
    background-color: #0176ff;
  }
  .img11{
    margin-top: 28px;
    position: absolute;
    left: 540px;
  }
  .img12{
    margin-top: 28px;
    position: absolute;
    left: 640px;
  }
  .img13{
    margin-top: 28px;
    position: absolute;
    left: 740px;
  }
  #form2{
    display:none;
  }
</style>
