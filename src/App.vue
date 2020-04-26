<!--vue模板只能有一个根对象，另外要用div或别的元素包裹全部的元素-->
<template>
  <div id="app">
    <a href="#/chat">
      跳转到聊天室
    </a>
    <router-view/>
    <div id="menu_block">
      <a href="#/access">
        <h1>欢迎来到心灵家园，点此至登陆界面</h1>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  h1{
    font-size:5px;
    color:#0176ff;
    float: left;
  }
  a{
    text-decoration: none;
  }
</style>
