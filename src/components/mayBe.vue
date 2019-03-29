<template>
    <div class="gj">
        <img class="gjImg" src="../image/top_logo.png" alt="">
      <div class="nav">
        <ul>
          <li><a  @click="gotoIndex" :style="colorStyle">首页</a></li>
          <li><a @click="gotoEstimate">在线估价</a></li>
          <li><a @click="gotoNews">新闻资讯</a></li>
          <li><a @click="gotoMine" :style="colorTwoStyle">关于我们</a></li>
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
      <img  src="../image/dhWhite.svg" class="navImg" @click="showLeft" v-if="show">
      <img  src="../image/nav_selected_white.svg" class="navImg" @click="showLeft" v-else>
    </div>
</template>


<script>

    export default {
     data(){
          return{
            show:true,
            colorStyle:{},
            colorTwoStyle:{}
          }
     },
      props:['num'],
      created(){
       if(this.num==="1")
       {
         this.colorStyle={color:'#fb5f6b'}
       }else{
         this.colorTwoStyle={color:'#fb5f6b'}
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
          this.show=!this.show
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
  margin-left: 18%;
    margin-top: 1rem;
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
    font-weight: bolder;
  }
  .nav ul li a:hover{
    cursor: pointer;
  }
  .navImg{
    height:40px;
    width:40px;
    margin-top: 30px;
    margin-left: 16rem;
    display: none;
  }
  .leftCon{
    display: none;
  }

  @media only screen and (max-width: 1366px){
    .nav{
      margin-top: 3%;
    }
  }
  @media only screen and (max-width: 1024px){
   .nav{
     margin-left: 0;
   }
  }
  @media only screen and (max-width: 900px){
    .gjImg{
      height:90px;
      width:90px;
      margin-top: 2%;
      margin-left: 8rem;
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
  @media only screen and (max-width: 768px){
    .gjImg{
      height:80px;
      width:80px;
      margin-top: 2%;
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
  @media only screen and (max-width: 650px){
    .gjImg{
      margin-left: 6%;
    }
    .leftCon{
      width:160px;
      position: absolute;
      margin-left:-7.5rem;
      background-color: gray;
      border: 1px solid white;
      margin-top:0%;
      z-index: 999;
      transform:rotate(9deg);
      -ms-transform:rotate(9deg); /* Internet Explorer */
      -moz-transform:rotate(9deg); /* Firefox */
      -webkit-transform:rotate(9deg); /* Safari 和 Chrome */
      -o-transform:rotate(9deg); /* Opera */
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
      margin-left: 70%;
    }
  }
  @media only screen and (max-width: 450px){
    .gjImg{
      height:80px;
      width:80px;
      margin-top: 4%;
      margin-left: 6%;
    }
    .leftCon{
      width:180px;
      position: absolute;
      background-color: #8E8E8E;
      border: 1px solid white;
      z-index: 1000;
      margin-left: 0rem;
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
  @media only screen and (max-width: 435px){
    .navImg{
      margin-left: 60%;
      margin-top: 7%;
    }
  }
  @media only screen and (max-width: 414px){
    .navImg{
      margin-left: 15rem;
    }
  }
  @media only screen and (max-width: 384px){
    .navImg{
      margin-left: 13rem;
    }
  }
  @media only screen and (max-width: 320px){
    .navImg{
      margin-left: 10rem;
    }
  }
</style>
