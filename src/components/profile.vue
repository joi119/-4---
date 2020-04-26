<template>
<div>
  <div id="menu_block">
    <div id="menu">
      <img id="img1" src="../../static/img1.png" height="65" width="62"/>
      <img id="img19" src="../../static/img19.jpg" height="35" width="35"/>
      <img id="img4" src="../../static/img4.png" height="50" width="30"/>
      <img id="img3" src="../../static/img3.png" height="30" width="30"/>
      <img id="img2" src="../../static/img2.png" height="30" width="40"/>
    </div>
  </div>
  <div id="profile">
    <h1>Profile</h1>
    <input placeholder="   Search for messages or users...">
    <img id="img17" src="../../static/img17.jpg" height="38" width="34"/>
    <div id="photo_name">
      <div id="photo"></div>
      <div id="name"></div>
    </div>
    <div id="info">
      <div class="info">country</div>
      <div class="info">country</div>
      <div class="info">country</div>
      <div class="info">country</div>
    </div>
  </div>
  <div id="settings">
    <div id="settings_block">
      <div id="settings_top">
        <h2>Settings</h2>
        <p>Update your profile details</p>
      </div>
    </div>
    <div id="form">
      <form id="change">
        <div id="account_block">
          <div id="account">
            <img id="img20" src="../../static/img20.png" height="35" width="41"/>
            <h2>Account</h2>
            <p>Update your profile details</p>
          </div>
        </div>
        <span>Avatar</span>
        <div id="icon">
          <div id="img18">
            <img src="../../static/img18.png" height="45" width="53"/>
          </div>
          <span class="photo1">You can upload jpg,gif or png files.</span><br>
          <span class="photo2">Max files size 3mb.</span>
        </div>
        <span>Name</span><br>
        <input class="name" placeholder="Type your name" type="text"><br>
        <span>Phone</span><br>
        <input id="phone" placeholder="(123)456-7890" type="tel"><br>
        <span>Email</span><br>
        <input id="email" placeholder="you@yoursite.com" type="email"><br>
        <button>Save Preferences</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>
  #menu_block{
    background-color: #f5f6fa;
    width: 80px;
    height: 610px;
    float: left;
  }
  #menu{
    background-color: #ffffff;
    width: 75px;
    height: 610px;
    position: relative;
  }
  #img1{
    position: absolute;
    left: 0;
  }
  #img4{
    position: absolute;
    left: 15px;
    top: 250px;
  }
  #img3{
    position: absolute;
    left: 15px;
    top: 330px;
  }
  #img2{
    position: absolute;
    left: 12px;
    top: 560px;
  }
  #img19{
    position: absolute;
    left: 12px;
    top: 180px;
  }
  #profile{
    background-color: #f5f6fa;
    width: 420px;
    height: 610px;
    float: left;
  }
  h1{
    font-size: 30px;
    margin-left: 20px;
    margin-top: 10px;
  }
  #profile>input{
    border:none;
    border-radius: 5px;
    height: 40px;
    width: 90%;
    margin-left: 20px;
    background-color: #edeef6;
  }
  #img17{
    position: relative;
    top: -40px;
    left: 360px;
  }
  #photo_name{
    height: 170px;
    width: 90%;
    margin-left: 20px;
    background-color: #fff;
    margin-top: -25px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  #info{
    width: 90%;
    height: 280px;
    margin-left: 20px;
    background-color: #fff;
    margin-top: 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .info{
    height: 70px;
    width: 90%;
    border-bottom: 1px solid #f6f7fb;
  }
  #settings{
    width: 801px;
    height: 610px;
    float: left;
  }
  #settings_block{
    width: 100%;
    height: 70px;
    background-color: #f5f6fa;
    margin-top: -12px;
  }
  #settings_top{
    width: 100%;
    height: 68px;
    background-color: #fff;
  }
  h2{
    font-size: 15px;
    margin-left: 20px;
  }
  p{
    font-size: 10px;
    color: #bbbfc5;
    margin-left: 20px;
  }
  #img18{
    margin-left: 200px;
    padding-top: 10px;
  }
  .photo1{
    margin-left: 130px;
  }
  .photo2{
    margin-left: 170px;
  }
  #form{
    width: 700px;
    height: 490px;
  }
  #change{
    margin-top: 50px;
    margin-left: 160px;
    padding-bottom: 10px;
    border: 1px solid #f5f6fa;
  }
  #change input{
    border:none;
    border-radius: 5px;
    background-color: #edeef6;
    height: 35px;
    width: 90%;
    margin-left: 20px;
  }
  #account{
    border-bottom: 1px solid #f5f6fa;
  }
  span{
    color:#bbbfc5;
    font-size: 13px;
    margin-left: 20px;
  }
  #icon{
    width: 90%;
    height: 110px;
    background-color: #edeef6;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-left: 20px;
  }
  #img20{
    float: right;
    margin-right: 25px;
    margin-top: 10px;
  }
  button{
    border:none;
    border-radius: 5px;
    background-color: #0171f5;
    height: 35px;
    width: 70%;
    margin-left: 70px;
    margin-top: 20px;
    color:#fff;
  }
</style>
