<template>
<div id="all">
  <div id="menu_block">
    <img id="img1"  alt="登出" src="../../static/img1.png" height="65" width="62" @click="skip_access"/>
    <img id="img19"  alt="创建群聊" src="../../static/img19.jpg" height="35" width="35" @click="skip_create"/>
    <img id="img4" alt="聊天"  src="../../static/img4.png" height="50" width="30" @click="skip_chat"/>
    <img id="img3"  alt="个人资料" src="../../static/img3.png" height="30" width="30" @click="skip_profile"/>
    <img id="img2" src="../../static/img2.png" height="30" width="40"/>
  </div>
  <div id="top">
    <h1>Create group</h1>
    <input  placeholder="Search for messages or users..." v-model="search_id">
    <span>
        <img id="img17" src="../../static/img17.jpg" height="34" width="28" @click="search"/>
    </span>
    <a href="room_url">{{searched_id}}</a>
  </div>
  <div id="sign_in" >
    <form class="sign_in" >
      <div id="photo">
        <label for="img18.png">
          <div id="img18">
            <img src="../../static/img18.png" height="72" width="86"/>
          </div>
        </label>
        <input type="file" id="img18.png" style="display: none" @change="add_img">
        <span class="photo1" >You can upload jpg,gif or png files.</span><br>
        <span class="photo2">
            Max files size 3mb.
        </span>
      </div>
      <div class="input">
        <span>Name:</span>
        <input type="text" placeholder="Group Name" required="required" v-model="roomname">
      </div>
      <div class="input">
        <span>Topic(optional):</span>
        <input type="text" placeholder="Group Topic" required="required" v-model="topic">
      </div>
      <div class="input">
        <span>Description:</span>
        <input type="text" placeholder="Group Description" v-model="description">
      </div>
      <div id="btn_sign">
        <button id="btn_sign_in" @click="create_group">Create group</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
  export default {
    name: "creategroup",
    data(){
      return{
        search_id:'',
        searched_id:'',
        roomname:'',
        topic:'',
        description:'',
        room_url:''
      }
    },
    methods:{
      //搜索框
      search:function () {
        const that=this;
        let search_id=this.search_id;
        this.axios.get('http://127.0.0.1:5000/auth/search',{
          params:{
            search_id,
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
      submit_img:function () {
        const that=this;
        //接口部分
        let params = new FormData;
        params.append('file',file)
        params.append('roomname',this.roomname)
        params.append('description',this.description)
        params.append('topic',this.topic)
        console.log(params);
        this.axios.post("http://127.0.0.1:5000/auth/createroom",params)
          .then(res => {
            console.log(res);
            this.imgSave = res.data.image;
            if(res.data[0].AAB==='true') {
              console.log('创建成功');
              that.$router.push({ path: '/chat' });
            }
            else{
              console.log('创建失败');
              // alert("群头像设置成功！");
            }
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
      create_group:function(){
        let qs = require('qs');
        const that=this;
        this.axios.post('http://127.0.0.1:5000/auth/createroom',
          qs.stringify({
            roomname: this.roomname,
            topic:this.topic,
            description:this.description,
          }))
          .then(function (response) {
            console.log(response);
            //获取分享链接
            let share_url=response.data.room_url;
            if(response.data[0].AAB==="true"){
              console.log("success");
              let info="创建成功！您的房间地址为"+share_url;
              alert(info);
              that.$router.push({ path: '/chat' });
            }else{
              console.log("fail");
              alert("创建失败！");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
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
        this.$router.push('/chat')
      },
    },
    mounted() {

    }
  }
</script>

<style scoped>
  #all{
    min-width: 1000px;
  }
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
    height: 250px;
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
