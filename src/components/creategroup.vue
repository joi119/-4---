<template>
<div>
  <div id="menu_block">
    <img id="img1" src="../../static/img1.png" height="65" width="62"/>
    <img id="img19" src="../../static/img19.jpg" height="35" width="35"/>
    <img id="img4" src="../../static/img4.png" height="50" width="30"/>
    <img id="img3" src="../../static/img3.png" height="30" width="30"/>
    <img id="img2" src="../../static/img2.png" height="30" width="40"/>
  </div>
  <div id="top">
    <h1>Create group</h1>
    <input  placeholder="Search for messages or users...">
    <span>
        <img id="img17" src="../../static/img17.jpg" height="34" width="28"/>
    </span>
  </div>
  <div id="sign_in" >
    <form class="sign_in" action="" method="" name="">
      <div id="photo">
        <div id="img18">
          <img src="../../static/img18.png" height="72" width="86"/>
        </div>
        <span class="photo1">You can upload jpg,gif or png files.</span><br>
        <span class="photo2">
            Max files size 3mb.</span>
      </div>
      <div class="input">
        <span>Name:</span>
        <input type="text" placeholder="Group Name">
      </div>
      <div class="input">
        <span>Topic(optional):</span>
        <input type="text" placeholder="Group Topic">
      </div>
      <div class="input">
        <span>Description:</span>
        <input type="text" placeholder="Group Description">
      </div>
      <div id="btn_sign">
        <button id="btn_sign_in">Create group</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
    export default {
        name: "creategroup"
    }
</script>

<style scoped>
  #menu_block{
    background-color: #ffffff;
    width: 80px;
    height: 500px;
    float: left;
  }
  #top{
    background-color:#f5f6fa;
    width: 1252px;
    height: 130px;
    float: left;
    position: relative;
  }
  #top>input{
    height: 34px;
    width: 1100px;
    position: absolute;
    top: 60px;
    right: 80px;
    border-radius:10px;
    background-color: #edeef6;
    border:none;
    color:#9a9ba5;
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
  #img17{
    position: absolute;
    top: 60px;
    right: 90px;
  }
  #sign_in{
    background-color:#f5f6fa;
    height: 500px;
    width: 1252px;
    float: left;
  }
  .sign_in{
    width: 700px;
    height: 550px;
    margin:0 auto;
  }
  #photo{
    height: 200px;
    width: 600px;
    background-color: #edeef6;
    border-radius:2px;
    position: relative;
  }
  #img18{
    position: absolute;
    top: 30px;
    left: 250px;
  }
  .photo1{
    position: absolute;
    top: 120px;
    left: 210px;
  }
  .photo2{
    position: absolute;
    top: 150px;
    left: 245px;
  }
  .input{
    margin-top: 15px;
    height: 50px;
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
  #btn_sign{
    width: 400px;
    height: 30px;
    margin:0 auto;
  }
  #btn_sign_in{
    height: 30px;
    width: 300px;
    border-radius:4px;
    border:none;
    color:#fff;
    background-color: #0176ff;
    margin-top: 30px;
  }
  h1{
    font-size: 20px;
    margin-left: 70px;
  }
</style>
