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
        <input placeholder="     Search url here">
        <button id="btn">search</button>
      </div>

      <div id="sign_in" >
        <div id="form1">
          <form class="sign_up" action="" method="" name="">
            <div class="input">
              <span>Username:</span>
              <input type="text" required="required">
            </div>
            <div class="input">
              <span>Password:</span>
              <input type="password">
            </div>
            <div class="input">
              <span>Password Again:</span>
              <input type="password">
            </div>
            <div class="input">
              <span>Telephone:</span>
              <input type="tel">
            </div>
            <div class="input">
              <span>E-mail:</span>
              <input type="email">
            </div>
            <div class="input">
              <span>Country:</span>
              <input type="text">
            </div>
            <div class="btn_sign">
              <button class="btn_sign_in">sign up</button>
            </div>
            <span class="way">其他注册方式</span>
            <img class="img11" src="../../static/img11.jpeg" height="54" width="52"/>
            <img class="img12" src="../../static/img12.jpeg" height="50" width="50"/>
            <img class="img13" src="../../static/img13.jpeg" height="52" width="55"/>
          </form>
        </div>

        <div id="form2">
          <form class="sign_in" action="" method="" name="">
            <div class="input">
              <span>Username:</span>
              <input type="text">
            </div>
            <div class="input">
              <span>Password:</span>
              <input type="password">
            </div>
            <div class="btn_sign">
              <button class="btn_sign_in">sign up</button>
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
          msg:'hello'
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
