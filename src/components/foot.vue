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
                <p>公司荣誉</p>
                <p>执业资质</p>
                <p>经典案例</p>
              </div>
              <div class="fiveRight">
                <p>联系我们</p>
                <p>招贤纳士</p>
              </div>
            </div>
          </div>
          <hr>
          <div class="dontKnow">
            <img class="gzh" src="../image/tu.svg" alt="">
            <p>关注公众号</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
  .footer{
    bottom: 0;
    height:220px;
    width:100%;
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
  }
  .companyInfo hr{
    height:70%;
    margin-left: 30px;
    margin-top: 4.5%;
  }
  .dontKnow{
    height:80%;
    width:30%;
    margin-left: 3%;
    margin-top: 3%;
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
      height:150px;
      width:100%;
      background-color: #2882C6;
      padding-bottom: 0;
      bottom: 0;
    }
    .dontKnow{
      height:80%;
      width:32%;
      margin-left: 10px;
      font-size: 0.5em;
    }
    .companyInfo{
      width:100%;
      margin-left: 0;
    }
    .dontKnowFirst img{
      height:50px;
      width:50px;
      margin-left: -50px;
    }
    .dontKnowFirst span{
      margin-left: -4px;
      margin-top: 4.5%;
    }
    .dontKnowSecond{
      margin-left: -40px;
      margin-top: -8%;
    }
    .companyInfo hr{
      display: none;
    }
    .fiveLeft{
      margin-left:-10px;
    }
    .fiveRight{
      margin-left: 0px;
    }
    .five{
      width:110%;
    }
    .gzh{
      width:50%;
    }
  }

</style>
