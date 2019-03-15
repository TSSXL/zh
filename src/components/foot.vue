<template>
    <div>
      <div class="footer">
        <div class="companyInfo">
          <div class="dontKnow">
            <div class="dontKnowFirst">
              <img src="../image/first.svg" alt="">
              <span>仲恒天下</span>
            </div>
            <div class="dontKnowSecond"><p>备案号</p><p>版权所有</p></div>
          </div>
          <hr>
          <div class="dontKnow">
            <div class="five">
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
            <img class="gzh" src="../image/tu.svg" alt="">
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
    background-color: #2882C6;
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
    height:120px;
    width:120px;
    margin-left: -30px;
  }
  .dontKnowFirst span{
    display: inline-block;
    height:30px;
    position: absolute;
    margin-top: 2.5%;
    margin-left: -10px;
    font-size: 2em;
  }
  .dontKnowSecond{
    height:60px;
    font-size: 1.5em;
    margin-left: -50px;
    margin-top: 8%;
  }
  .five{
    height:100%;
    width:90%;
    display: flex;
    font-size: 1.9em;
  }
  .fiveLeft{
    margin-left: 10%;
    margin-top: 5%;
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
  .fiveRight{
    margin-left: 10%;
    margin-top: 5%;
  }
  .gzh{
    height: 50%;
    width:30%;
    border: 1px solid blue;
    margin-top: 10%;
  }
  @media only screen and (max-width: 1366px){
    .dontKnowFirst img{
      height:100px;
      width:100px;
      margin-left: -50px;
    }
    .dontKnowSecond{
      margin-left: -65px;
      margin-top: 0;
    }
    .five{
      width:100%;
      margin-left: -5%;
      font-size: 1.6em;
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
      width:40%;
    }
  }
  @media only screen and (max-width: 768px){
    .footer{
      height:300px;
      width:100%;
      background-color: #2882C6;
      padding-bottom: 0;
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
      width:60%;
      margin-left: 22%;
      display:flex;
      flex-direction: column;
    }
    .companyInfo hr{
      height:0;
      width:80%;
      margin-top: 10px;
      margin-left: 1%;
    }
    .dontKnowFirst img{
      height:80px;
      width:80px;
      margin-left: -40%;
      margin-top: 5px;
    }
    .dontKnowFirst span{
      margin-left: 0%;
      margin-top: 8%;
    }
    .dontKnowSecond{
      margin-left: 10%;
      margin-top: 0%;
    }
    .fiveLeft{
      display: flex;
      flex-direction: column;
      margin-top: 1%;
      margin-left: 25%;
    }
    .five p{
      display: inline-block;
      margin-top:5px;
      margin-left: 0;
    }
    .fiveRight{
      display: flex;
      flex-direction: column;
      margin-left: 19%;
      margin-top: 1%;
    }
    .five{
      width:100%;
    }
    .gzh{
      width:20%;
      height:50px;
      float: left;
      margin-left: 15%;
      margin-top: 0%;
    }
    .gzNum{
      margin-top: 25px;
      display: inline-block;
      margin-left: -25%;
    }
  }
  @media only screen and (max-width: 680px){
    .footer{
      height:300px;
      width:100%;
      background-color: #2882C6;
      padding-bottom: 0;
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
      width:60%;
      margin-left: 20%;
      display:flex;
      flex-direction: column;
    }
    .companyInfo hr{
      height:0;
      width:80%;
      margin-top: 10px;
      margin-left: 1%;
    }
    .dontKnowFirst img{
      height:80px;
      width:80px;
      margin-left: -60%;
      margin-top: 5px;
    }
    .dontKnowFirst span{
      margin-left:-2%;
      margin-top: 12%;
    }
    .dontKnowSecond{
      margin-left: 50px;
      margin-top: -4%;
    }
    .fiveLeft{
      margin-left:32px;
      display: flex;
      flex-direction: column;
    }
    .five p{
      display: inline-block;
      margin-top:5px;
      margin-left: -4%;
    }
    .fiveRight{
      display: flex;
      flex-direction: column;
      margin-left: 19%;
    }
    .five{
      width:100%;
    }
    .gzh{
      width:30%;
      float: left;
        margin-left: 5px;
      margin-top: 5%;
    }
    .gzNum{
      margin-top: 25px;
      display: inline-block;
      margin-left: -15%;
    }
  }
  @media only screen and (max-width: 450px){
    .dontKnowSecond{
      margin-left: 18%;
      margin-top: -4%;
    }
    .fiveLeft{
      margin-left:16%;
      display: flex;
      flex-direction: column;
    }
    .five p{
      display: inline-block;
      margin-top:5px;
      margin-left: -4%;
    }
    .fiveRight{
      display: flex;
      flex-direction: column;
      margin-left: 19%;
    }
    .gzh{
      width:30%;
      float: left;
      margin-left:5%;
      margin-top: 5%;
    }
  }
  @media only screen and (max-width: 380px){
    .dontKnowSecond{
      margin-left: 25%;
      margin-top: -4%;
    }
    .fiveLeft{
      margin-left:15%;
      display: flex;
      flex-direction: column;
    }
    .gzNum{
      margin-top: 25px;
      display: inline-block;
      margin-left: -10%;
    }
  }
  @media only screen and (max-width: 320px){
    .dontKnowFirst span{
      margin-left: 4%;
      margin-top: 6%;
    }
    .dontKnowSecond{
      margin-left: 20%;
      margin-top: -4%;
    }
    .fiveLeft{
      margin-left:10%;
      display: flex;
      flex-direction: column;
    }
    .gzNum{
      margin-top: 25px;
      display: inline-block;
      margin-left: -10%;
    }
  }
</style>
