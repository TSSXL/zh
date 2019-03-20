<template>
    <div class="mine">
        <div class="img">
          <Head-Component class="headComponent"></Head-Component>
          <div class="info">
            <p>公司概况</p>
            <p>宁波仲恒房地产估价有限公司成立于2001年，原为房管处转制企业，是具有国家房地产二级评估资质和土地评估资质的双资质房地产评估专业机构</p>
          </div>
        </div>
        <div class="mineInfo">
          <div class="leftBtn">
            <ul>
              <li>
                <img class="liImg" src="../image/company_honor.png" v-if="one">
                <img class="liImg" src="../image/company_honor_selected.png" v-else>
                <el-button @click="changeColor(0)">公司荣誉</el-button>
              </li>
              <li>
                <img class="liImg" src="../image/professional_qualifications.png" v-if="two">
                <img class="liImg" src="../image/professional_qualifications_selected.png" v-else>
                <el-button @click="changeColor(1)">执业资质</el-button>
              </li>
              <li>
                <img class="liImg" src="../image/classic_case.png" v-if="three">
                <img class="liImg" src="../image/classic_case_selected.png" v-else>
                <el-button @click="changeColor(2)">经典案例</el-button>
              </li>
              <div class="twoUl" :style="isshowStyle(three)">
                <span v-for="item in list" :key="item">{{item}}</span>
              </div>
              <li>
                <img class="liImg" src="../image/contact_us.png" v-if="four">
                <img class="liImg" src="../image/contact_us_selected.png" v-else>
                <el-button @click="changeColor(3)">联系我们</el-button>
              </li>
              <li>
                <img class="liImg" src="../image/hiring.png" v-if="five">
                <img class="liImg" src="../image/hiring_selected.png" v-else>
                <el-button @click="changeColor(4)">招贤纳士</el-button>
              </li>
            </ul>
          </div>
          <div class="rightCon"  v-if="num==0">
            <ul>
              <li><img src="../image/first.jpg" alt=""></li>
              <li><img src="../image/two.jpg" alt=""></li>
              <li><img src="../image/zero.jpg" alt=""></li>
              <li><img src="../image/three.jpg" alt=""></li>
              <li><img src="../image/two.jpg" alt=""></li>
              <li><img src="../image/first.jpg" alt=""></li>
              <li><img src="../image/three.jpg" alt=""></li>
              <li><img src="../image/zero.jpg" alt=""></li>
              <li><img src="../image/two.jpg" alt=""></li>
            </ul>
          </div>
          <div class="zy" v-else-if="num==1" >
            <div class="licence">
              <img src="../image/first.jpg" alt="">
              <p>营业执照</p>
            </div>
            <div class="book">
              <img src="../image/three.jpg" alt="">
              <p>土估备案证书</p>
            </div>
            <div class="house">
              <img src="../image/two.jpg" alt="">
              <p>房地产资质</p>
            </div>
          </div>
          <div class="example"  v-else-if="num==2">
            <div class="exampleItem">
              <div class="exampleImage">
                <img src="../image/three.jpg" alt="">
                <p>诚投大厦办公房地产抵押项目</p>
              </div>
              <div class="exampleImage">
                <img src="../image/three.jpg" alt="">
                <p>诚投大厦办公房地产抵押项目</p>
              </div>
              <div class="exampleImage">
                <img src="../image/three.jpg" alt="">
                <p>诚投大厦办公房地产抵押项目</p>
              </div>
              <div class="exampleImage">
                <img src="../image/three.jpg" alt="">
                <p>诚投大厦办公房地产抵押项目</p>
              </div>
              <div class="exampleImage">
                <img src="../image/three.jpg" alt="">
                <p>诚投大厦办公房地产抵押项目</p>
              </div>
              <div class="exampleImage">
                <img src="../image/three.jpg" alt="">
                <p>诚投大厦办公房地产抵押项目</p>
              </div>
            </div>
          </div>
          <div class="callMe"  v-else-if="num==3">
            <div class="callMeTitle">
              <p>宁波仲恒房地产估价有限公司</p>
              <p>公司地址：宁波市鄞州区彩虹南路16号10楼C区</p>
              <p>邮编：315040</p>
              <p>电话：0574-87621198</p>
              <p>传真：0574-87620828</p>
            </div>
            <div class="map">
              <img src="../image/first.jpg" alt="">
            </div>
          </div>
          <div class="callMe"  v-else="num==4">
            <div class="callMeTitle">
              <p>宁波仲恒房地产估价有限公司</p>
              <p>公司常年诚招房地产估价师,土地估价师、</p>
              <p>测绘工程师，仲恒估价公司欢迎您的加入。</p>
              <p>人事部电话：0574-87620698</p>
              <p>联系人：蔡老师</p>
            </div>
            <div class="map">
              <img src="../image/first.jpg" alt="">
            </div>
          </div>
        </div>
        <Foot-Component class="mineFoot" ></Foot-Component>
    </div>
</template>

<script>
import HeadComponent from  './mayBe'
  import FootComponent from './foot'
    export default {
      data(){
        return{
          num:0,
          one:true,
          two:true,
          three:true,
          four:true,
          five:true,
          list:[
            "银行抵押",
            "征收评估",
            "咨询策划",
            "司法评估",
            "土地评估"
          ]
        }
      },
      components:{
        FootComponent,
        HeadComponent
      },
      created(){
        this.num=this.$route.query.idx
         if(this.num==undefined)
         {
           this.num=0
         }
      },
      methods:{
        isshowStyle(three){
          return three===false?{display: 'block'}:{display:'none'}
        },
        changeColor(index){
          this.num=index
          if(index==0)
          {
            this.two=true
            this.three=true
            this.four=true
            this.five=true
            this.one=false
          }else if(index==1)
          {
            this.one=true
            this.three=true
            this.four=true
            this.five=true
            this.two=false
          }else if(index==2)
          {
            this.one=true
            this.two=true
            this.four=true
            this.five=true
            this.three=false
          }else if(index==3)
          {
            this.one=true
            this.two=true
            this.three=true
            this.five=true
            this.four=false
          }else{
            this.one=true
            this.two=true
            this.three=true
            this.four=true
            this.five=false
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  $bg:#91C4D5;
  $borderColor:#4982ff;
.mine{
  width:100%;
  .img{
    width:100%;
    height: 400px;
    background: url("../image/top_banner.png");
    background-size: 100% 100%;
    .info{
      height:20%;
      width:80%;
      position: absolute;
      margin-top: 5%;
      font-size: 2em;
      p{
        display: inline-block;
        text-align: center;
        width:86%;
        margin-left: 20%;
        color: white;
        font-weight: bolder;
      }
    }
  }
  .mineInfo{
    width:80%;
    margin-top: 60px;
    margin-left: 10%;
    padding-bottom: 30px;
    display: inline-block;
    .leftBtn{
      height:350px;
      width:12%;
      margin-left: 3.5%;
      ul{
        width:100%;
        margin-top: 0;
        list-style: none;
        box-shadow: 5px 5px 5px 5px #e2e2e2;
        .twoUl{
          width:120%;
          margin-left: -40px;
          border-radius: 5%;
          span{
            display: block;
            height:2.5rem;
            line-height: 2.5rem;
          }
          span:hover{
            cursor: pointer;
          }
          span:active{
            color:red
          }
        }
        li{
          width:120%;
          height:70px;
          margin-left: -40px;
          border: 1px solid #e2e2e2;
          margin-top: -2px;
          .liImg{
            margin-top: 1.2%;
            position: absolute;
            margin-left: 1%;
          }
          button{
            width:100%;
            height:70px;
            font-size: 1.5em;
            border: none;
            border-bottom: 1px solid #c6c6c6;
          }
        }
      }
    }
    .rightCon{
      width:55%;
      margin-left: 25%;
      margin-top: -28.5%;
      ul{
        margin-top: -80px;
        list-style: none;
        margin-left: -15%;
        li{
          float: left;
          margin-left: 120px;
          margin-top: 80px;
          img{
            height:200px;
            width:300px;
            border-radius: 5%;
          }
        }
      }
    }
    .zy{
      width:50%;
      margin-left: 25%;
      margin-top: -24%;
      display: flex;
      flex-wrap: wrap;
      .licence{
        height:320px;
        width:34%;
        margin-top: 20px;
        margin-left: 10%;
       img{
       height:290px;
       width:90%;
         border-radius: 5%;
     }
      }
      .book{
        height:320px;
        width:34%;
        margin-top: 20px;
        margin-left: 10%;
        img{
          height:290px;
          width:90%;
          border-radius: 5%;
        }
      }
      .house{
        height:180px;
        width:34%;
        margin-top: 40px;
        padding-bottom: 60px;
        margin-left: 10%;
        img{
          height:150px;
          width:90%;
          border-radius: 5%;
        }
      }
    }
    .example{
      width:50%;
      display: flex;
      margin-left: 25%;
      margin-top: -25.2%;
      flex-direction: column;
      .exampleItem{
        width:90%;
        margin-left: 5%;
        margin-top: 2%;
        .exampleImage{
          margin-left: 50px;
          margin-top: 15px;
          display: inline-block;
          img{
            height:180px;
            width:260px;
            border-radius: 5%;
          }
          p{
            font-size: 1em;
            color:black;
          }
        }
      }
    }
    .callMe{
      width:50%;
      margin-left: 25%;
      margin-top: -23%;
      height:450px;
      border: 2px solid #f0f0f0;
      border-radius: 3%;
      box-shadow: 5px 5px 5px  #e2e2e2;
      position: relative;
      .callMeTitle{
        height:100%;
        width:45%;
        margin-left: 2.5%;
        position: absolute;
        p:first-child{
          margin-top: 20%;
          font-size: 2em;
          font-weight: bolder;
        }
        p:nth-child(2){
          margin-top: 10%;
        }
        p:not(:first-child)
        {
          color: #9a9a9a;
        }
        p{
          text-align: left;
          margin-left: 10%;
          font-size: 1.2em;
          margin-top: 8%;
        }
      }
      .map{
        height:100%;
        width:45%;
        margin-left: 50%;
        img{
          height:50%;
          width:100%; 
          margin-top: 20%;
          border-radius: 4%;
        }
      }
    }
  }
  .mineFoot{
    margin-top: 60px;
  }

  @media only screen and (max-width: 1366px) {
  .mineInfo{
    .leftBtn{
      ul{
        li,.twoUl{
          width:130%;
          .liImg{
         margin-top: 1.5%;
          }
          button{
           text-indent: 10px;
          }
        }
      }
    }
    .rightCon{
      width:60%;
      margin-top: -38.5%;
      ul{
        margin-top: -60px;
        li{
          margin-left: 110px;
          margin-top: 60px;
          img{
            height:140px;
            width:200px;
          }
        }
      }
    }
    .zy{
      width:60%;
      margin-top: -32%;
      flex-wrap: wrap;
      .licence{
        height:320px;
        width:35%;
        margin-top: 20px;
        margin-left: 10%;
        img{
          height:320px;
          width:100%;
        }
      }
      .book{
        height:320px;
        width:35%;
        margin-top: 20px;
        margin-left: 10%;
        img{
          height:320px;
          width:100%;
        }
      }
      .house{
        height:180px;
        width:35%;
        margin-top: 15%;
        margin-left: 10%;
        img{
          height:150px;
          width:100%;
        }
      }
    }
    .example{
      margin-top: -34%;
      width:60%;
      .exampleItem{
        .exampleImage{
          margin-left: 30px;
        }
      }
    }
    .callMe{
      width:60%;
     margin-top: -32%;
    }
  }
  }
  @media only screen and (max-width: 768px){
    .img{
      width:100%;
      height: 300px;
      .info{
        height:8%;
        width:100%;
        position: absolute;
        font-size: 1em;
        margin-top: 30px;
        p{
        margin-left: 0;
        }
      }
    }
    .mineInfo{
      width:100%;
      margin-top:10px;
      margin-left: 0;
      display: inline-block;
      .leftBtn{
        height:40px;
        width:100%;
        border: none;
        margin-left: 2rem;
        ul{
          height:40px;
          width:87%;
          .twoUl{
            width:80%;
            height:40px;
            margin-left: 1%;
            margin-top: 3rem;
            position: absolute;
            span{
              display: inline-block;
              margin-left: 6%;
              border: 1px solid black;
              border-radius: 4%;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            span:active{
              background-color: red;
              color:white;
            }
          }
          li:first-child{
            margin-left: 2%;
          }
          li{
            height:40px;
            float: left;
            width: 18%;
            margin-left: 1%;
            .liImg{
              margin-top: 1%;
            }
            button{
              height:40px;
              font-size:1em;
              border: none;
              border-radius:5%;
            }
          }
        }
      }
      .rightCon{
        width:100%;
        height:300px;
        margin-left: 0%;
        margin-top: 30px;
        ul{
          margin-top:10px;
          list-style: none;
          width:100%;
          margin-left: 8%;
          li{
            float: left;
            margin-left: 20px;
            margin-top: 20px;
            img{
              height:160px;
              width:260px;
            }
          }
        }
      }
      .zy{
        width:100%;
        float: right;
        margin-right: 0;
        margin-top: 30px;
        border: none;
        display: flex;
        flex-wrap: wrap;
        .licence{
          height:200px;
          width:45%;
          margin-top: 20px;
          margin-left: 3%;
          img{
            height:200px;
            width:90%;
          }
        }
        .book{
          height:200px;
          width:45%;
          margin-top: 20px;
          margin-left: 3%;
          img{
            height:200px;
            width:90%;
          }
        }
        .house{
          height:180px;
          width:60%;
          margin-top: 6%;
          padding-bottom: 0;
          margin-left: 20%;
          img{
            height:160px;
            width:60%;
          }
        }
      }
      .example{
        width:100%;
        margin-left: 0;
        margin-top: 30px;
        border: none;
      }
      .callMe{
        width: 95%;
        margin-left: -1.5%;
        margin-top: 42px;
        .callMeTitle{
          margin-left: 0;
          height:50%;
          width:100%;
          p:first-child{
            font-size: 1em;
            margin-top: 3%;
          }
          p:nth-child(2){
            margin-top: 6%;
          }
          p{
            margin-left: 8%;
            margin-top: 4%;
          }
        }
        .map{
          width:47%;
          height:80%;
          margin-top: 2%;
          margin-left: 45%;
          img{
            margin-top: 0;
            height: 61%;
            width: 108%;
            margin-left:3%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 450px){
    .img{
      .info{
        width:100%;
        position: absolute;
        margin-top: 5%;
        font-size: 1em;
        margin-left: -5px;
        letter-spacing: 2px;
        p{
          display: inline-block;
          text-align: left;
          width:80%;
          color: white;
          font-weight: bolder;
          line-height: 18px;
        }
      }
    }
    .mineInfo{
      width:100%;
      margin-top:10px;
      margin-left: 0;
      .leftBtn{
        height:40px;
        width:100%;
        border:none;
        margin-left: 6px;
        ul{
          height:40px;
          width:87%;
          .twoUl{
          width:100%;
            margin-left: -11%;
            span{
              margin-left: 2%;
              width:15%;
              padding-left: 0;
              padding-right: 0;
            }
          }
          li:first-child{
            margin-left: -8%;
          }
          li{
            height:40px;
            float: left;
            width:20%;
            margin-left: 5px;
            .liImg{
            display: none;
            }
            button{
              height:40px;
              font-size:1em;
              border: none;
              border-radius: 10%;
              text-indent: -5px;
            }
          }
        }
      }
      .rightCon{
        width:100%;
        height:300px;
        margin-left: 0%;
        margin-top: 40px;
        ul{
          margin-top:0;
          list-style: none;
          height:270px;
          width:100%;
          margin-left: -2%;
          li{
            float: left;
            margin-left: 20px;
            margin-top: 30px;
            img{
              height:150px;
              width:160px;
            }
          }
        }
      }
      .zy{
        width:100%;
        float: right;
        margin-right: 0;
        margin-top: 50px;
        border: none;
        display: flex;
        flex-wrap: wrap;
        .licence{
          height:200px;
          width:45%;
          margin-top: 20px;
          margin-left: 3%;
          img{
            height:200px;
            width:100%;
          }
        }
        .book{
          height:200px;
          width:45%;
          margin-top: 20px;
          margin-left: 3%;
          img{
            height:200px;
            width:100%;
          }
        }
        .house{
          height:180px;
          width:60%;
          margin-top: 12%;
          padding-bottom: 0;
          margin-left: 20%;
          img{
            height:140px;
            width:100%;
          }
        }
      }
      .example{
        width:100%;
        margin-top: 40px;
        .exampleItem{
          margin-left: 3%;
        }
      }
      .callMe{
        width:100%;
        margin-top: 30px;
        border: 1px solid white;
        .callMeTitle{
          margin-left: 10%;
          width:100%;
          p{
            margin-left: 2%;
          }
        }
        .map{
          width:94%;
          height:60%;
          margin-top: 42%;
          margin-left: 0;
          img{
            height:70%;
            width:80%;
            margin-top: 0;
          }
        }
      }
      .need{
        .callMeTitle{
          p:nth-child(2)
          {
            margin-top: 2%;
            font-weight: normal;
            width:60%;
            margin-left: -35%;
          }
          p:nth-child(3){
            margin-top: 2%;
          }
        }
      }
    }
    .mineFoot{
      margin-top:30px;
    }
  }
  @media only screen and (max-width: 415px){
   .mineInfo{
     .leftBtn{
       ul{
         li{
           margin-left: 2px;
         }
       }
     }
     .rightCon{
       ul{
         margin-left: -5%;
       }
     }
   }
  }
  @media only screen and (max-width:380px) {
    .mineInfo{
      .leftBtn{
        ul{
          margin-left: -0.4rem;
          .twoUl{
            margin-left: -12%;
          }
          li{
            margin-left: 2px;
            button{
              text-indent: -10px;
            }
          }
        }
      }
      .rightCon{
        ul{
          margin-left: -11%;
        }
      }
    }
  }
  @media only screen and (max-width:360px) {
    .mineInfo{
      .leftBtn{
        ul{
        margin-left: -0.5rem;
          .twoUl{
            margin-left: -11%;
          }
          li{
            margin-left: 0.2rem;
          }
        }
      }
      .rightCon{
        ul{
          margin-left: -14%;
        }
      }
    }
  }
  @media only screen and (max-width:320px) {
    .mineInfo{
      .leftBtn{
        ul{
          margin-left: -1rem;
          li{
            margin-left: 0.1rem;
            width:3.5rem;
            .liImg{
            display: none;
            }
            button{
              text-indent: -1rem;
            }
          }
        }
      }
      .rightCon{
        ul{
          margin-left: -10%;
          li{
            float: left;
            margin-left: 20px;
            margin-top: 30px;
            img{
              height:100px;
              width:120px;
            }
          }
        }
      }
      .callMe{
        .map{
          margin-top: 48%;
        }
      }
    }
  }
}
</style>
