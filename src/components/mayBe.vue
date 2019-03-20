<template>
    <div class="gj">
        <img class="gjImg" src="../image/top_logo.png" alt="">
      <div class="nav">
        <ul>
          <li><a  @click="gotoIndex">首页</a></li>
          <li><a @click="gotoEstimate">在线估价</a></li>
          <li><a @click="gotoNews">新闻资讯</a></li>
          <li><a @click="gotoMine">关于我们</a></li>
        </ul>
      </div>
      <div class="isShow">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title" @click="gotoIndex">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="gotoEstimate">在线估价</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title" @click="gotoNews">新闻资讯</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title" @click="gotoMine">关于我们</span>
        </el-menu-item>
      </el-menu>
      <el-button type="info" style="height:40px;margin-top: 15px;" @click="a">导航</el-button>
    </div>
    </div>
</template>

<script>
    export default {
     data(){
          return{
            isCollapse: true
          }
     },
      methods:{
       a(){
         this.isCollapse=!this.isCollapse
       },
        gotoIndex(){
          this.$router.push({path:'/'})
        },
        gotoEstimate(){
          this.$router.push({path:'/es'})
          },
        gotoNews(){
          this.$router.push({path:'/news'})
        },
        gotoMine(){
          this.$router.push({path:'/mine'})
        },
        handleSelect(key) {
          this.activeIndex2=key;
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style  scoped>
  .gj{
    display: flex;
    padding-bottom: 10px;
  }
  .gjImg{
  margin-left: 18%;
  }
  .nav{
    width:60%;
    margin-top: 2%;
    margin-left: 12%;
  }
  .nav ul{
    list-style: none;
    width:100%;
  }
  .nav ul li{
    float: left;
    margin-left: 10%;
    font-size: 2em;
    color:white;
  }
  .nav ul li a:hover{
    cursor: pointer;
  }
  .nav ul li a:active{
    color:black
  }
  .isShow{
    display: none;
  }
  @media only screen and (max-width: 768px){
    .gjImg{
      margin-top: 0%;
    }
    .nav{
      width:100%;
      height:60px;
      margin-top: 4%;
      margin-left: -10%;
    }
    .nav ul{
      list-style: none;
      width:100%;
    }
    .nav ul li{
      float: left;
      margin-left: 10%;
      font-size: 2em;
      color:white;
    }
  }
  @media only screen and (max-width: 450px){
    .gjImg{
      height:80px;
      width:80px;
      margin-left: 5%;
      margin-top: 4%;
    }
    .nav {
     display: none;
    }
    .isShow{
      display: flex;
      flex-direction: row;
      margin-left: 6%;
      position: absolute;
    }
  }
  @media only screen and (max-width: 414px){
    .isShow{
      margin-left:1%;
    }
  }
  @media only screen and (max-width: 380px){
    .isShow{
      margin-left:-6%;
    }
  }
  @media only screen and (max-width: 360px){
    .isShow{
      margin-left:-9%;
    }
  }
  @media only screen and (max-width: 320px){
    .gjImg{
    margin-top: 60px;
      position: absolute;
      height:60px;
      width:60px;
      margin-left: 14rem;
    }
    .isShow{
      margin-left:0%;
    }
  }
</style>
