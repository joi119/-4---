<template>
<div id="all">
  <div id="menu_block">
    <div id="menu">
      <img id="img1"  alt="登出" src="../../static/img1.png" height="65" width="62" @click="skip_access"/>
      <img id="img19"  alt="创建群聊" src="../../static/img19.jpg" height="35" width="35" @click="skip_create"/>
      <img id="img4" alt="聊天"  src="../../static/img4.png" height="50" width="30" @click="skip_chat"/>
      <img id="img3"  alt="个人资料" src="../../static/img3.png" height="30" width="30" @click="skip_profile"/>
      <img id="img2" src="../../static/img2.png" height="30" width="40"/>
    </div>
  </div>
  <div id="profile">
    <h1>Profile</h1>
    <input placeholder="   Search for messages or users..." v-model="search_id">
    <img id="img17" src="../../static/img17.jpg" height="38" width="34" @click="search" />
    <a href="room_url">{{searched_id}}</a>
    <div id="photo_name">
      <img id="photo" src="data:image/png;base64,imgfile" alt="头像" @click="great"/>
      <div id="name">{{username}}</div>
    </div>
    <div id="info">
      <div class="info">
        <p>country</p>
        <p>{{country}}</p>
      </div>
      <div class="info">
        <p>phone</p>
        <p>{{telephone}}</p>
      </div>
      <div class="info">
        <p>email</p>
        <p>{{email}}</p>
      </div>
      <div class="info">
        <p>time</p>
        <p>{{time}}</p>
      </div>
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
      <form class="change" action="" method="" name="">
        <div id="account_block">
          <div id="account">
            <img id="img20" src="../../static/img20.png" height="35" width="41"/>
            <h2>Account</h2>
            <p>Update your profile details</p>
          </div>
        </div>
        <span>Avatar</span>
        <div id="icon">
          <label for="img18.png">
            <div id="img18">
              <img src="../../static/img18.png" height="45" width="53" />
            </div>
          </label>
          <input type="file" id="img18.png" style="display: none" @change="add_img">
          <span class="photo1">You can upload jpg,gif or png files.</span><br>
          <span class="photo2">Max files size 3mb.</span>
        </div>
        <span>Name</span><br>
        <input class="name" placeholder="Type your name" type="text" v-model="username"><br>
        <span>Phone</span><br>
        <input id="phone" placeholder="(123)456-7890" type="tel" v-model="telephone"><br>
        <span>Email</span><br>
        <input id="email" placeholder="you@yoursite.com" type="email" v-model="email"><br>
        <button id="btn">Save Preferences</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "profile",
        data(){
          return{
            imgSave:'',
            username:'',
            telephone:'',
            email:'',
            country:'',
            time:'',
            search_id:'',
            searched_id:'',
            imgfile:'',
            room_url:'',
            statu:''
          }
        },
        methods:{
          //搜索框
          search:function () {
            const that=this;
            let room_url_user=this.search_id;
            this.axios.get('http://127.0.0.1:5000/auth/search',{
              params:{
                room_url_user,
              },
            })
              .then(function (response) {
                console.log(response);
                that.room_url=response.data.room_url;
                that.searched_id=response.data.username||response.data.roomname;
                if(that.searched_id===''){
                  alert("你搜索的用户/房间不存在！")
                }
              })
          },

          //修改资料
          submit_img:function () {
            const that=this;
            //接口部分
            window.params = new FormData;
            params.append('file',file)
            params.append('username',that.username)
            params.append('telephone',that.telephone)
            params.append('email',that.email)
            console.log(params);
            this.axios.post("http://127.0.0.1:5000/auth/updates",params)
              .then(res => {
                console.log(res);
                // that.imgSave = res.data.image;
                this.$router.go(0);
                // sessionStorage.setItem('headImg',this.imgSave); //将图片保存，并能够在其他地方加载显示
              }).catch(function(err) {
              console.log(err);
            });
          },
          //上传图片，下载图片
          add_img:function (event) {
            window.file = event.target.files[0];
            console.log(file.name);
            let imgName=file.name;//拿到文件名
            //文件名不可包含中文
            let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
            if(reg.test(imgName)) {alert("文件名不可包含汉字！"); }
            //图片的大小(字节)
            let size = file.size; //文件的大小，判断图片的大小
            if (size > 3145728) {
              alert('请选择3mb以内的图片！');
              // return false;
            }
            //判断文件是否为图片
            // 后缀获取
            let suffix = '';
            // 获取类型结果
            let result = '';
            try {
              let fileArr = imgName.split('.');
              suffix = fileArr[fileArr.length - 1];
            } catch (err) {
              suffix = '';
            }
            // fileName无后缀返回 false
            if (!suffix) {
              result = false;
              return result;
            }
            // 图片格式
            let imgList = ['png', 'jpg', 'gif'];
            // 进行图片匹配
            result = imgList.some(function (item) {
              return item === suffix;
            });
            if (result) {
              this.submit_img();
            }else{
              alert('请选择后缀为jpg,gif或者png的图片上传！');
            }
          },
          //实时显示该图片在页面
          great:function() {
            //document.getElementById('btn').onclick = function () {
            let imgFile = file;
            console.log(imgFile);
            let fr = new FileReader();
            fr.onload = function () {
              document.getElementById('photo').src = fr.result;
            };
            fr.readAsDataURL(imgFile);
            //}
          },
          skip_access(){
            alert("您真的要离开心灵家园吗？")
            this.axios.get("http://114.55.98.156:3000/logout",)
              .then(res => {
                console.log(res);
                if(res.data.AAD===true){
                  alert("退出登录成功！")
                  this.$router.push('/access')
                }else{
                  this.$router.push('/chat')
                }
              }).catch(function(err) {
              console.log(err);
            });
          },
          skip_create(){
            this.$router.push('/creategroup')
          },
          skip_profile(){
            this.$router.push('/profile')
          },
          skip_chat(){
            if(this.statu){
              this.$router.push('/chat')
            }else{
              alert("您还未加入任何群聊！")
            }
          }
          //修改保存资料
          // save:function(){
          //   //let qs = require('qs');
          //   const that=this;
          //   params.append('text',this.username);
          //   params.append('tel',this.telephone);
          //   params.append('email',this.email);
          //   console.log(params);
          //   this.axios.post('http://127.0.0.1:5000/auth/updates',params)
          //     .then(function (response) {
          //       console.log(response);
          //       if(response.data[0].AAB==="true"){
          //         that.great();
          //         console.log("success");
          //         alert("保存成功！");
          //       }else{
          //         console.log("fail");
          //         alert("保存失败！");
          //       }
          //     })
          //     .catch(function (error) {
          //       console.log(error);
          //     });
          // },
        },
      mounted() {
        //请求用户资料
        const that=this;
        this.axios.post('http://127.0.0.1:5000/auth/current_user')
          .then(function (response) {
            console.log(response);
            that.username = response.data.username;
            that.telephone = response.data.telephone;
            that.email = response.data.email_hash;
            that.country = response.data.country;
            that.userid = response.data.id;
            that.imgfile = response.data.userphoto;
            that.statu = response.data.enter_room;
            console.log(that.imgfile);
          })
            let T = new Date();
            this.time=T.toLocaleTimeString();
        },
    }
</script>

<style scoped>
  #all{
    min-width: 1000px;
  }
  .info p{
    font-size:15px;
  }
  #photo{
    width: 80px;
    height: 80px;
    border-radius: 50%;
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
    width: 378px;
    background-color:#fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #info{
    width: 90%;
    height: 250px;
    margin-left: 20px;
    background-color: #fff;
    margin-top: 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .info{
    height: 48px;
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
  .change{
    margin-top: 50px;
    margin-left: 160px;
    padding-bottom: 10px;
    border: 1px solid #f5f6fa;
  }
  .change input{
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
