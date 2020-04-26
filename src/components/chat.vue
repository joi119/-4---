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

    <div id="vue-app">
      <div id="right">
        <div id="chat_name_block">
          <div id="chat_name">
            <div>这里是群名称和群头像</div>
            <img @click="search=!search" id="img8" src="../../static/img8.png" height="37" width="39"/>
            <img @click="share" id="img9" src="../../static/img9.png" height="27" width="36"/>
            <label for="checkbox">
              <img id="img10" src="../../static/img10.png" height="34" width="26"/>
            </label>
            <input id="checkbox" type="checkbox">
            <div id="checked_menu">
              <p>Mute</p>
              <label for="Mute_button">
                <img @click="mute" id="img15" src="../../static/img15.png" height="35" width="35"/>
              </label>
              <input type="button" id="Mute_button">
              <p>Delete</p>
              <label for="Delete_button">
                <img id="img14" src="../../static/img14.png" height="38" width="32"/>
              </label>
              <input type="button" id="Delete_button">
            </div>
          </div>
        </div>
        <div id="search_block" v-show="search">
          <div id="search">
            <input placeholder="Search this chat">
            <span>
                <img id="img17" src="../../static/img17.jpg" height="34" width="28"/>
            </span>
          </div>
        </div>

        <div id="chat_box">
          <li v-for="item in messageList" :key="index">
            <img :src="item.icon_url" alt="头像" id="icon">
            <span id="msg">{{item.thing}}</span>
          </li>
          <div id="input_box_block">
            <div id="input_box">
              <input placeholder="Type your message..." v-model="socketData" @keyup.enter="clickButton">
              <img id="img5" src="../../static/img5.png" height="40" width="42"/>
              <img id="img7" src="../../static/img7.png" height="36" width="39"/>
              <img id="img6" src="../../static/img6.png" height="55" width="55"/>
            </div>
          </div>
        </div>
      </div>

      <div id="share_page_block">
        <div id="share_page">
          <div class="top_menu_block">
            <div class="top_menu">
              <img @click="retract" class="img16" src="../../static/img16.png" height="44" width="40"/>
            </div>
          </div>
          <div class="name_icon">
            <h2>这是群名和群头像</h2>
          </div>
          <div id="introduction">
            <p>introduction</p>
          </div>
          <div id="list">
            <ul id="share_menu">
              <li>QQ<img id="img12" src="../../static/img12.jpeg" height="20" width="20"/></li>
              <li>微信<img id="img13" src="../../static/img13.jpeg" height="20" width="22"/></li>
              <li>Github<img id="img11" src="../../static/img11.jpeg" height="22" width="20"/></li>
            </ul>
          </div>
        </div>
      </div>

      <div id="mute_page_block">
        <div id="mute_page">
          <div class="top_menu_block">
            <div class="top_menu">
              <img @click="pack" class="img16" src="../../static/img16.png" height="44" width="40"/>
            </div>
          </div>
          <div id="name_icon">
            <h2>这是群名和群头像</h2>
          </div>
          <form class="list">
            <span>Photo</span>
            <div id="photo">
              <div id="img18">
                <img src="../../static/img18.png" height="38" width="46"/>
              </div>
              <span class="photo1">You can upload jpg,gif or png files.</span><br>
              <span class="photo2">
            Max files size 3mb.</span>
            </div>
            <span>Name</span>
            <div id="name">
              <input placeholder="Group Name">
            </div>
            <span>Topic(optional)</span>
            <div id="topic">
              <input placeholder="Group Topic">
            </div>
            <span>Description</span>
            <div id="description">
              <input placeholder="Group Description">
            </div><br>
            <button id="btn">OK</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "chat",
      data(){
        return{
          search: false,
          username: '',
          socketId:'',
          socketData:'',
          messageList:[],
          icon_url:'',
        }
      },
      sockets:{
        //这里是监听connect事件
        connect(){
          // 获取每台客服端生成的id
          this.socketId = this.$socket.id;
          console.log('---链接服务器');
          this.$socket.emit('join',{bool : true })
        },
        // 监听断开连接，函数
        disconnect(){
          console.log('断开服务器连接');
          this.$socket.emit('leave',{bool : true })
        },
        // reconnect(){
        //   console.log("重新链接");
        //   this.$socket.emit('connect', { bool : true });
        // },
        //拿用户名
        get_username(val){
          console.log('val');
          this.username = val;
        },
        //接收消息、头像
        send_message(data1,data2){     // getVal 名字自定义 与服务端的保持一致
          console.log('data1');
          let msg = data1;
          let icon_path=data2;
          //let msg = JSON.parse(val);
          this.messageList.push({
            thing:msg,
            icon_url: icon_path
          });
        },

      },
      methods: {
        share:function(){
          let right=document.getElementById("right");
          right.style.width="876px";
          let share_page_block=document.getElementById("share_page_block");
          share_page_block.style.display="block";
        },
        mute:function () {
          right.style.width="876px";
          let mute_page_block=document.getElementById("mute_page_block");
          mute_page_block.style.display="block";
        },
        pack:function () {
          right.style.width="1252px";
          mute_page_block.style.display="none";
        },
        retract:function () {
          right.style.width="1252px";
          share_page_block.style.display="none";
        },
        //向服务端发消息
        clickButton () {
          let data = this.socketData;
          console.log(data);
          this.$socket.emit('emit_method', data);
          this.socketData='';
        },
      },
      mounted() {
        console.log('加载中---');
        //subscribe为真则后端调用connect
        this.$socket.emit('connect', { subscribe: true });
      }

    }

</script>

<style scoped>
  #msg{
    background-color: pink;
  }
  #icon{
    height: 40px;
    width: 40px;
    border-radius: 25px;
  }
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
  #chat_name_block{
    background-color:#f5f6fa;
    /*width: 1252px;*/
    /*margin-top: -35px;*/
    width: 100%;
    height: 60px;
    /*height: 60px;*/
    float: left;
    /*z-index:-11;*/
  }
  #chat_name{
    background-color:#ffffff;
    /*width: 1252px;*/
    width: 100%;
    height: 58px;
    float: left;
    position: relative;
  }
  #img8{
    position: absolute;
    right: 100px;
    top:13px;
  }
  #img9{
    position: absolute;
    right: 50px;
    top:17px;
  }
  #img10{
    position: absolute;
    right: 5px;
    top:13px;
  }
  #chat_box{
    background-color:#ffffff;
    /*width: 1252px;*/
    width: 100%;
    height: 550px;
    float: left;
    position: relative;
  }
  #input_box_block{
    background-color:#f5f6fa;
    /*width: 1252px;*/
    width: 100%;
    height: 60px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  #input_box{
    background-color:#ffffff;
    /*width: 1252px;*/
    width: 100%;
    height: 57px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  #input_box>input{
    /*width: 1020px;*/
    width: 80%;
    height: 37px;
    border:none;
    position: absolute;
    left: 75px;
    top: 15px;
  }
  #img5{
    position: absolute;
    right: 100px;
    top: 17px;
  }
  #img6{
    position: absolute;
    right: 2px;
    top:6px;
  }
  #img7{
    position: absolute;
    right: 60px;
    top:15px;
  }
  #checkbox{
    display:none;
  }
  #checked_menu{
    z-index:10;
    position: absolute;
    top: 50px;
    right: 10px;
    height: 94px;
    width: 150px;
    display:none;
    border:1px solid #f5f6fa;
    border-radius:20px;
    color: #7f7980;
    background-color: #fff;
  }
  p{
    padding-left: 20px;
    font-size:17px;
  }
  #checkbox:checked~#checked_menu{
    display:block;
  }
  #img15{
    z-index:100;
    position: absolute;
    top: 9px;
    right: 17px;
  }
  #img14{
    z-index:100;
    position: absolute;
    top: 47px;
    right: 17px;
  }
  #right{
    width: 1252px;
    float: left;
  }
  #Mute_button{
    display:none;
  }
  #Delete_button{
    display:none;
  }
  #img16{
    position: relative;
  }
  #share_page_block{
    width: 310px;
    height: 610px;
    float: left;
    background-color: #f5f6fa;
    display:none;
  }
  #share_page{
    width: 308px;
    height: 610px;
    float: right;
    background-color: #fff;
  }
  .top_menu_block{
    height: 60px;
    background-color: #f5f6fa;
  }
  .top_menu{
    height: 58px;
    background-color: #fff;
  }
  .name_icon{
    height: 90px;
  }
  #list{
    height: 400px;
    background-color: #f5f6fa;
    position: relative;
  }
  #share_menu{
    position: relative;
    top: 10px;
    margin-left: 10px;
    width: 245px;
    border:1px solid #fff;
    border-radius:8px ;
    background-color: #fff;
  }
  #share_menu>li{
    list-style:none;
    border-bottom:2px solid #f5f6fa;
    height: 30px;
    margin-top: 30px;
    margin-left: -20px;
    color: #aeb4ba;
    font-size: 15px;
  }
  #img12,#img13,#img11{
    float: right;
    margin-right: 13px;
  }
  .img16{
    margin-top: 6px;
    margin-left: 10px;
  }
  #search_block{
    height: 125px;
    width: 100%;
    background-color: #f5f6fa;
  }
  #search{
    height: 123px;
    width: 100%;
    background-color: #fff;
  }
  #search>input{
    border:none;
    border-radius: 5px;
    width: 92%;
    height: 40px;
    background-color: #edeef6;
    margin-left: 50px;
    margin-top: 10px;
  }
  #img17{
    z-index:111;
    position: absolute;
    top: 83px;
    right: 65px;
  }
  #mute_page_block{
    width: 310px;
    height: 610px;
    float: left;
    background-color: #f5f6fa;
    display:none;
  }
  #mute_page{
    width: 308px;
    height: 610px;
    float: right;
    background-color: #fff;
  }
  #name_icon{
    height: 130px;
    width: 308px;
    border: 1px solid red;
  }
  .list{
    color: #afb5bb;
    font-size: 13px;
    background-color: #f5f6fa;
    width: 308px;
    height: 360px;
  }
  .list span{
    margin-left: 14px;
  }
  .list input{
    border:none;
    padding-top: 12px;
    padding-left: 6px;
    width: 90%;
    background-color: #edeef6;
  }
  #img18{
    position: relative;
    top: 10px;
    left: 110px;
  }
  .photo1{
    position: relative;
    top: 13px;
    left: 30px;
  }
  .photo2{
    position: relative;
    top: 18px;
    left: 65px;
  }
  #photo{
    width: 90%;
    height: 100px;
    background-color: #edeef6;
    margin-top: 5px;
    border-radius: 5px;
    margin-left: 14px;
  }
  #name{
    width: 90%;
    height: 40px;
    background-color: #edeef6;
    margin-top: 5px;
    border-radius: 5px;
    margin-left: 14px;
  }
  #topic{
    width: 90%;
    height: 40px;
    background-color: #edeef6;
    margin-top: 5px;
    border-radius: 5px;
    margin-left: 14px;
  }
  #description{
    width: 90%;
    height: 90px;
    background-color: #edeef6;
    margin-top: 5px;
    border-radius: 5px;
    margin-left: 14px;
  }
  #btn{
    width: 90%;
    height: 30px;
    background-color: #0176ff;
    color:#fff;
    border:none;
    margin-top: 5px;
    border-radius: 5px;
    margin-left: 14px;
  }
</style>
