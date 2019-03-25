<template>
  <div class="gj">
    <img class="gjImg" src="../image/top_logo_color.png" alt="">
    <div class="nav">
      <ul>
        <li><a  @click="gotoIndex">首页</a></li>
        <li><a @click="gotoEstimate">在线估价</a></li>
        <li><a @click="gotoNews">新闻资讯</a></li>
        <li><a @click="gotoMine">关于我们</a></li>
      </ul>
    </div>
    <div id="leftCon" class="leftCon">
      <ul>
        <li @click="gotoIndex">首页</li>
        <li @click="gotoEstimate">在线评估</li>
        <li @click="gotoNews">新闻资讯</li>
        <li @click="gotoMine">关于我们</li>
      </ul>
    </div>
    <img id="img" src="../image/nav.svg" class="navImg" @click="showLeft">
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
      showLeft(){
        $("#leftCon").fadeToggle("slow")
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
    margin-left: 20%;
    margin-top: 1rem;
  }
  .nav{
    width:60%;
    height:60px;
    margin-top: 2%;
    margin-left: 13%;
  }
  .nav ul{
    list-style: none;
    width:100%;
  }
  .nav ul li{
    float: left;
    margin-left: 10%;
    font-size: 2em;
    color:black;
    font-weight: bolder;
  }
  .nav ul li a:hover{
    cursor: pointer;
  }
  .nav ul li a:active{
    color:red
  }
  .navImg{
    height:40px;
    width:40px;
    margin-top: -9%;
    margin-left: 16rem;
    display: none;
  }
  .leftCon{
    display: none;
  }
  @media only screen and (max-width: 1366px)
  {
    .nav{
      margin-top: 3%;
    }
  }
  @media only screen and (max-width: 768px){
    .gjImg{
      height:80px;
      width:80px;
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
      color:black;
    }
  }
  @media only screen and (max-width: 600px){
    .gjImg{
      margin-left: 6%;
      margin-top: 0;
    }
    .leftCon{
      width:160px;
      position: absolute;
      margin-left:-7.5rem;
      background-color: gray;
      border: 1px solid white;
      margin-top:-0.2%;
    }
    .leftCon ul {
      list-style: none;
    }
    .leftCon ul li{
      width:90px;
      height:60px;
      font-size: 16px;
      line-height: 60px;
      color:white;
    }
    .nav {
      display: none;
    }
    .navImg{
      display: inline-block;
      margin-top:4%;
      margin-left: 65%;
    }
  }
    @media only screen and (max-width: 450px){
      .gjImg{
        margin-left: 6%;
        margin-top: -55px;
      }
      .leftCon{
        width:160px;
        position: absolute;
        margin-left:-7rem;
        background-color: gray;
        border: 1px solid white;
        margin-top: -15%;
      }
      .leftCon ul {
        list-style: none;
      }
      .leftCon ul li{
        width:90px;
        height:60px;
        font-size: 16px;
        line-height: 60px;
        color:white;
      }
      .nav {
        display: none;
      }
      .navImg{
        display: inline-block;
        margin-top: -8%;
        margin-left: 60%;
      }
    }
  @media only screen and (max-width: 414px){
    .navImg{
      margin-left: 14rem;
    }
  }
    @media only screen and (max-width: 384px){
      .leftCon{
        margin-top: -16%;
      }
      .navImg{
        margin-left: 13rem;
        margin-top: -9%;
      }
    }
  @media only screen and (max-width: 360px){
    .leftCon{
      margin-top: -17%;
    }
    .navImg{
      margin-left: 12rem;
    }
  }
    @media only screen and (max-width: 320px){
      .leftCon{
        margin-top: -19%;
      }
      .navImg{
        margin-left: 10rem;
        margin-top: -10%;
      }
    }

</style>
