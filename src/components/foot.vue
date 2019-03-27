<template>
    <div>
      <div class="footer">
        <div class="companyInfo">
          <div class="dontKnow">
            <div class="dontKnowFirst">
              <img src="../image/bottom_logo.png" alt="">
            </div>

          </div>
          <hr>
          <div class="center">
            <div class="five">
              <div class="f">
                <p>备案号</p>
                <p>版权所有</p>
              </div>
              <div class="fiveLeft">
                <p @click="gotoFirst">公司荣誉</p>
                <p @click="gotoSecond">执业资质</p>
                <p @click="gotoThird">经典案例</p>
              </div>
              <div class="fiveRight">
                <p @click="gotoFour">联系我们</p>
                <p @click="gotoFive">招贤纳士</p>
              </div>
            </div>
          </div>
          <hr>
          <div class="dontKnow">
            <img class="gzh" src="../image/qr_code.png" alt="">
            <p class="gzNum">关注公众号</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "foot",
      data(){
          return{
          }
      },
      methods:{
          gotoFirst(){
          this.$router.push({path:'/mine',query:{idx:0}})
        },
        gotoSecond(){
          this.$router.push({path:'/mine',query:{idx:1}})
        },
        gotoThird(){
          this.$router.push({path:'/mine',query:{idx:2}})
        },
        gotoFour(){
          this.$router.push({path:'/mine',query:{idx:3}})
        },
        gotoFive(){
          this.$router.push({path:'/mine',query:{idx:4}})
        }
      }
    }
</script>

<style scoped>
  .footer{
    height:220px;
    width:100%;
    position: relative;
    background-color: #343434;
    color:white;
    font-weight: bold;
  }
  .companyInfo{
    width:60%;
    height:100%;
    margin-left: 20%;
    display: flex;
    flex-direction: row;
    position: absolute;
  }
  .companyInfo hr{
    height:80%;
    margin-left: 30px;
    margin-top: 2.5%;
  }
  .dontKnow{
    height:80%;
    width:30%;
    margin-left: 3%;
    margin-top: 2%;
  }
  .dontKnowFirst{
    height:50%;
    width:100%;
  }
  .dontKnowFirst img{
    margin-left: -30px;
    margin-top: 10px;
  }
  .center{
    width:60%;
  }
  .five{
    height:100%;
    width:90%;
    display: flex;
    font-size: 1.5em;
    color: #e4e4e4;
    margin-top:10px;
  }
  .fiveLeft,.fiveRight,.f{
    margin-left: 5%;
    margin-top: 5%;
  }
  .f{
    width:25%;
    margin-left: 15%;
  }
  .fiveLeft,.fiveRight{
    width:30%;
  }
  .five p{
    display: inline-block;
    margin-top:15px;
  }
  .five p:hover{
    cursor: pointer;
  }
  .five p:active{
    color:black;
  }
  .gzh{
    height: 70%;
    width:45%;
    margin-top: 8%;
  }
  @media only screen and (max-width: 1366px){
    .dontKnowFirst img{
      height:100px;
      width:180px;
      margin-left: -20px;
      margin-top:20px;
    }
    .companyInfo hr{
      height:60%;
      margin-left: 10px;
      margin-top: 5%;
    }
    .five{
      width:100%;
      margin-left: -5%;
      font-size: 1.6em;
      margin-top: 20px;
    }
    .f{
      margin-left: 7%;
      margin-top: 5%;
      width:44%;
    }
    .fiveLeft{
      margin-left: 10%;
      margin-top: 4%;
    }
    .fiveRight{
      margin-left: 10%;
      margin-top: 4%;
    }
    .gzh{
      width:50%;
      height: 50%;
      margin-top: 15%;
    }
  }
  @media only screen and (max-width: 1024px){
    .five{
      font-size: 1em;
    }
    .gzh{
      width:59%;
    }
    .f{
      margin-top: 4%;
    }
  }
  @media only screen and (max-width: 768px){
    .footer{
      height:450px;
      width:100%;
      padding-bottom: 40px;
      bottom: 0;
    }
    .dontKnow{
      height:95px;
      width:100%;
      margin-left: 0;
      margin-top: 0;
      font-size: 0.5em;
    }
    .companyInfo{
      width:75%;
      margin-left: 30%;
      display:flex;
      flex-direction: column;
      padding-top: 10px;
    }
    .companyInfo hr{
      height:0;
      width:50%;
      margin-top: 25px;
      margin-left: 1%;
    }
    .dontKnowFirst img{
      margin-left:-49%;
      margin-top: 10px;
    }
    .dontKnowFirst span{
      margin-left: 0%;
      margin-top: 5%;
      font-size: 1.5em;
    }
    .fiveLeft,.fiveRight{
      display: flex;
      flex-direction: column;
      margin-top: 1%;
      margin-left: 2%;
    }
    .f{
      width:25%;
      margin-left:0%;
      margin-top: 1.5%;
    }
    .five p{
      display: inline-block;
      margin-top:5px;
      margin-left: 0;
    }
    .five{
      width:100%;
      margin-top: 0;
      margin-left: 0;
      display: flex;
      flex-direction: row;
      font-size: 1.6em;
    }
    .gzh{
      width:17%;
      height:100px;
      float: left;
      margin-left: 10%;
      margin-top: 3%;
      padding-bottom: 10px;
    }
    .gzNum{
      margin-top: 55px;
      display: inline-block;
      margin-left: -55%;
      font-size:16px;
    }
  }
  @media only screen and (max-width: 650px){
 .five .f{
   margin-top: 1%;
 }
    .gzh{
      margin-left: 7%;
      width:20%;
    }
    .gzNum{
      margin-top: 49px;
      margin-left: -50%;
    }
  }
  @media only screen and (max-width: 450px){
    .footer{
      padding-bottom: 10px;
      height:150px;
    }
    .companyInfo{
      width:100%;
      margin-left: 0;
    }
    .dontKnow{
      width:10%;
    }
    .center{
      width:100%;
    }
    .dontKnowFirst{
      display: none;
    }
    .companyInfo hr{
      display: none;
    }
    .five{
      width:100%;
      margin-left: 0%;
      margin-top: -10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 14px;
    }
    .five p{
      margin-top: 1rem;
    }
    .five .f{
      width:25%;
      margin-left:0%;
    }
    .dontKnow{
      margin-left: 299px;
      margin-top: -90px;
    }
    .fiveLeft,.fiveRight{
      margin-left: 0%;
      width:25%;
    }
    .five .f p{
      margin-left: 20%;
    }
    .gzh{
      width:87px;
      height:83px;
      float: left;
      margin-top: -2rem;
      margin-left: 1rem;
    }
    .gzNum{
      display: inline-block;
      font-size:14px;
      margin-top: 0;
      width:100px;
      margin-left: 0.5rem;
    }
  }
  @media only screen and (max-width: 415px){
    .gzh{
      margin-left: 0.5rem;
    }
    .gzNum{
      margin-left: 0.1rem;
    }
  }
  @media only screen and (max-width: 384px){
    .gzh{
      margin-left: -1rem;
    }
    .gzNum{
      margin-left: -1.3rem
    }
  }
  @media only screen and (max-width: 375px){
    .gzh{
      margin-left: -1.5rem;
    }
    .gzNum{
      margin-left: -1.8rem
    }
  }
  @media only screen and (max-width: 360px){
    .gzh{
      margin-left: -2.2rem;
    }
    .gzNum{
      margin-left: -2.5rem
    }
  }
  @media only screen and (max-width: 320px){
    .gzh{
      height:70px;
      width:70px;
      margin-left: -3.5rem;
    }
    .gzNum{
     margin-left: -4.8rem;
    }
  }
</style>
