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
      <div class="leftCon" v-if="num">
        <ul>
          <li>首页</li>
          <li>在线评估</li>
          <li>新闻资讯</li>
          <li>关于我们</li>
        </ul>
      </div>
      <img src="../image/navWhite.svg" class="navImg" @click="showLeft">
    </div>
</template>

<script>
    export default {
     data(){
          return{
            num:false
          }
     },
      methods:{
        gotoIndex(){
          this.$router.push({path:'/home'})
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
       showLeft(){
          this.num=!this.num
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
  .navImg{
    height:40px;
    width:40px;
    margin-top: 30px;
    margin-left: 5rem;
  }
  .navImg{
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
      margin-left: 50%;
      margin-top: 4%;
    }
    .leftCon{
      width:160px;
      position: absolute;
      margin-left: -300px;
      background-color: gray;
      border: 1px solid white;
      border-radius: 5%;
    }
    .leftCon ul {
      list-style: none;
    }
    .leftCon ul li{
      width:90px;
      height:69px;
      font-size: 16px;
      line-height: 60px;
      color:white;
    }
    .nav {
     display: none;
    }
    .navImg{
      display: inline-block;
    }
  }
  @media only screen and (max-width: 414px){
    .leftCon{
      margin-left: -286px;
    }
  }
  @media only screen and (max-width: 380px){
    .leftCon{
      margin-left: -268px;
    }
    .navImg{
      margin-left: 3rem;
    }
  }
  @media only screen and (max-width: 360px){
    .leftCon{
      margin-left: -260px;
    }
  }
  @media only screen and (max-width: 320px){
    .navImg{
      margin-left: 1rem;
    }
    .leftCon{
      margin-left: -240px;
    }
  }
</style>
