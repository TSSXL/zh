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
    </div>
</template>

<script>
    export default {
     data(){
          return{
          }
     },
      methods:{
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
  @media only screen and (max-width: 768px){
    .nav{
      width:100%;
      height:60px;
      margin-top: 2%;
      margin-left: 0%;
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
  @media only screen and (max-width: 600px){
    .gjImg{
      height:60px;
      width:60px;
      margin-top: -60px;
     margin-left: 10px;
    }
    .nav {
      margin-left: -10%;
      margin-top: -13%;
    }
 .nav ul li{
  font-size: 1.5em;
   margin-left: 5%;
 }
  }
  @media only screen and (max-width: 450px){
    .gjImg{
      height:80px;
      width:80px;
      margin-left: 5%;
      margin-top: 0;
    }
    .nav {
      margin-left: -10%;
      margin-top: 5%;
    }
    .nav ul li{
      font-size: 1.5em;
      margin-left: 5%;
    }
  }
  @media only screen and (max-width: 380px){
    .nav {
      margin-left: -14%;
    }
  }
  @media only screen and (max-width: 360px){
    .nav {
      margin-left: -17%;
    }
  }
  @media only screen and (max-width: 320px){
    .nav {
      margin-left: -10%;
      margin-top: 7%;
    }
    .nav ul li{
      font-size: 1.3em;
      margin-left:2%;
    }
  }
</style>
