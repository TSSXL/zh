<template>
    <div class="mine" style="background-color: rgba(245,247,250,1)">
        <div class="img">
          <Head-Component class="headComponent" num="4"></Head-Component>
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
                <el-button   @click="changeColor(0)" v-if="one">公司荣誉</el-button>
                <el-button @click="changeColor(0)" style="color:#EA3D3F;"  v-else>公司荣誉</el-button>
              </li>
              <li>
                <img class="liImg" src="../image/professional_qualifications.png" v-if="two">
                <img class="liImg" src="../image/professional_qualifications_selected.png" v-else>
                <el-button  @click="changeColor(1)" v-if="two">执业资质</el-button>
                <el-button  style="color:#EA3D3F;" @click="changeColor(1)" v-else>执业资质</el-button>
              </li>
              <li>
                <img class="liImg" src="../image/classic_case.png" v-if="three">
                <img class="liImg" src="../image/classic_case_selected.png" v-else>
                <el-button  @click="changeColor(2)" v-if="three">经典案例</el-button>
                <el-button  style="color:#EA3D3F;" @click="aa"   v-else>经典案例</el-button>
              </li>
              <li class="li" :style="isShowStyle">
                <div class="twoUl">
                  <span v-for="(item,index) in list" :style="numTwo==index?txtColor:''"   :key="item" @click="getTwo(index)">{{item}}</span>
                </div>
              </li>
              <li>
                <img class="liImg" src="../image/contact_us.png" v-if="four">
                <img class="liImg" src="../image/contact_us_selected.png" v-else>
                <el-button  @click="changeColor(3)" v-if="four">联系我们</el-button>
                <el-button style="color:#EA3D3F;" @click="changeColor(3)"  v-else>联系我们</el-button>
              </li>
              <li>
                <img class="liImg" src="../image/hiring.png" v-if="five">
                <img class="liImg" src="../image/hiring_selected.png" v-else>
                <el-button  @click="changeColor(4)" v-if="five">招贤纳士</el-button>
                <el-button style="color:#EA3D3F;" @click="changeColor(4)"   v-else>招贤纳士</el-button>
              </li>
            </ul>
          </div>
          <div class="rightCon"  v-if="num==0">
            <ul >
              <li v-for="item in companyList"><img :src="item.BaiEdit" alt="正在加载中"><p style="font-size: 1.5em">{{item.Title}}</p></li>
            </ul>
          </div>
          <div class="zy" v-else-if="num==1" >
            <ul id="images">
              <li  v-for="item in zyInfo"><img @click="big" :src="item.BaiEdit" alt="正在加载中"><p>{{item.Title}}</p></li>
            </ul>
          </div>
          <div class="example"  v-else-if="num==2">
            <div class="exampleItem">
              <div class="exampleImage" v-for="item in exampleList">
                <img :src="item.BaiEdit" alt="">
                <p>{{item.Title}}</p>
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
            <Baidu-Component class="baiduMap"></Baidu-Component>
          </div>
          <div class="callMe"  v-else="num==4">
            <div class="callMeTitle">
              <p>宁波仲恒房地产估价有限公司</p>
             <p v-html="ZH(zpInfo.Contexts)"></p>
            </div>
            <Baidu-Component class="baiduMap"></Baidu-Component>
          </div>
        </div>
        <Foot-Component class="mineFoot" ></Foot-Component>
    </div>
</template>

<script>
import HeadComponent from  './mayBe'
  import FootComponent from './foot'
import BaiduComponent from './BaiduMap'
import Viewer from 'viewerjs'
    export default {
      data(){
        return{
          zyInfo:{},
          zpInfo:{},
          companyList:[],
          category:"银行抵押",
          txtColor:{
            color:'red'
          },
          num:0,
          numTwo:0,
          one:false,
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
          ],
          exampleList:[
          ],
          isShowStyle:{
            display:"none"
          }
        }
      },
      components:{
        FootComponent,
        HeadComponent,
        BaiduComponent
      },
      created(){
        //底部跳转
        let _this=this
        if(_this.$route.query.id===undefined)
        {
          _this.num=0
          _this.getContentTwo("公司荣誉")
        }else{
          _this.num=this.$route.query.id
          //左边按钮颜色
          if(_this.$route.query.id==="0") {
            _this.two=true
            _this.three=true
            _this.four=true
            _this.five=true
            _this.isShowStyle={display:"none"}
            _this.one=false
            _this.getContentTwo("公司荣誉")
          }
          else if(_this.$route.query.id==="1") {
            _this.one=true
            _this.three=true
            _this.four=true
            _this.five=true
            _this.isShowStyle={display:"none"}
            _this.two=!_this.two
            _this.getContentFour("执业资质")
          }else if(_this.$route.query.id==="2") {
            _this.one=true
            _this.two=true
            _this.four=true
            _this.five=true
            _this.three=false
            _this.isShowStyle={display:'block'}
            _this.getContent()
          }else if(_this.$route.query.id==="3") {
            _this.one=true
            _this.two=true
            _this.three=true
            _this.five=true
            _this.isShowStyle={display:"none"}
            _this.four=!_this.four
          }else{
            _this.one=true
            _this.two=true
            _this.three=true
            _this.four=true
            _this.isShowStyle={display:"none"}
            _this.five=!_this.five
            this.getContentThree("招贤纳士")
          }
        }
      },
      methods:{
        //对后台传的进行转译
        ZH(val){
       return decodeURIComponent(val)
        },
        //点击放大缩小
        big(){
          const viewer=new Viewer(document.getElementById("images"), {
            inline: false
          })
        },
        //点击隐藏二级菜单
        aa(){
         this.isShowStyle={display:"none"}
         this.three=true
        },
        //二级菜单点击变色
        getTwo(index){
         this.numTwo=index
          if(index===0){
            this.category="银行抵押"
          }else if(index===1)
          {
            this.category="征收评估"
          }else if(index===2)
          {
            this.category="咨询策划"
          }else if(index===3)
          {
            this.category="司法评估"
          }else{
            this.category="土地评估"
          }
          this.getContent()
        },
        //点击按钮变色
        changeColor(index){
          this.num=index
          this.$router.push({path:'/mine',query:{id:index}})
          if(index===0) {
            this.two=true
            this.three=true
            this.four=true
            this.five=true
            this.isShowStyle={display:"none"}
            this.one=!this.one
            this.getContentTwo("公司荣誉")
          }
          else if(index===1) {
            this.one=true
            this.three=true
            this.four=true
            this.five=true
            this.isShowStyle={display:"none"}
            this.two=!this.two
            this.getContentFour("执业资质")
          }else if(index===2) {
            this.one=true
            this.two=true
            this.four=true
            this.five=true
            this.three=false
           this.isShowStyle={display:'block'}
            this.getContent()
          }else if(index===3) {
            this.one=true
            this.two=true
            this.three=true
            this.five=true
            this.isShowStyle={display:"none"}
            this.four=!this.four
          }else{
            this.one=true
            this.two=true
            this.three=true
            this.four=true
            this.isShowStyle={display:"none"}
            this.five=!this.five
            this.getContentThree("招贤纳士")
          }
        },
        //经典案例分类获取内容
        getContent(){
          this.$http
            .get("/api/Baidu/BaiduE", {
              params: {
                isjd:"1",
                category:this.category
              }
            })
            .then(
              function (response) {
                this.exampleList=response.data.Result.all
              }.bind(this)
            )
            // 请求error
            .catch(
              function (error) {
                this.$notify.error({
                  title: "出错啦",
                  message: "错误：请通知后台"
                });
              }.bind(this)
            )
        },
        //公司荣誉
        getContentTwo(val){
          this.$http
            .get("/api/Baidu/BaiduE", {
              params: {
                category:val
              }
            })
            .then(
              function (response) {
                this.companyList=response.data.Result.all
              }.bind(this)
            )
            // 请求error
            .catch(
              function (error) {
                this.$notify.error({
                  title: "出错啦",
                  message: "错误：请通知后台"
                });
              }.bind(this)
            )
        },
        //招聘信息
        getContentThree(val){
      this.$http
    .get("/api/Baidu/BaiduE", {
      params: {
        category:val
      }
    })
    .then(
      function (response) {
     this.zpInfo=response.data.Result.all[0]
      }.bind(this)
    )
    // 请求error
    .catch(
      function (error) {
        this.$notify.error({
          title: "出错啦",
          message: "错误：请通知后台"
        });
      }.bind(this)
    )
},
        //执业资质
        getContentFour(val){
          this.$http
            .get("/api/Baidu/BaiduE", {
              params: {
                category:val
              }
            })
            .then(
              function (response) {
                this.zyInfo=response.data.Result.all
              }.bind(this)
            )
            // 请求error
            .catch(
              function (error) {
                this.$notify.error({
                  title: "出错啦",
                  message: "错误：请通知后台"
                });
              }.bind(this)
            )
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
      margin-top: 2%;
      font-size: 2em;
      margin-left: 10%;
      p{
        display: inline-block;
        text-align: center;
        width:100%;
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
    position: relative;
    display: flex;
    .leftBtn{
      width:16%;
      margin-left: 15%;
      ul{
        width:10rem;
        margin-top: 0;
        list-style: none;
        .li{
          height:13rem;
          .twoUl{
            width:100%;
            span{
              display: block;
              height:2.5rem;
              line-height: 2.8rem;
              font-size: 13px;
              background-color: #ffffff;
              color:rgba(207,175,177,1);
              font-weight: bolder;
            }
            span:hover{
              cursor: pointer;
            }
            span:active{
              color:red
            }
          }
        }
        li{
          width:12.5rem;
          margin-left: -40px;
          margin-top: -2px;
          border-radius: 20px;
          .liImg{
            margin-top: 2.2%;
            position: absolute;
            margin-left: 2.5%;
          }
          button{
            width:100%;
            height:90px;
            font-size: 1.5em;
            border-bottom: 1px solid #c6c6c6;
            font-weight: bolder;
          }
        }
        li:first-child{
          button{
            border-radius: 20px 20px 0 0;
          }
        }
        li:last-child{
          button{
            border-radius: 0 0 20px 20px ;
          }
        }
      }
    }
    .rightCon{
      width:90%;
      ul{
        margin-top: -80px;
        list-style: none;
        width:100%;
        li{
          float: left;
          margin-left: 8%;
          margin-top: 80px;
          img{
            height:250px;
            width:300px;
            border-radius: 5%;
          }
        }
      }
    }
    .zy{
      width:90%;
      margin-top: -1.3%;
      display: flex;
      flex-wrap: wrap;
      margin-left: 0%;
      ul{
        width:100%;
        li{
          width:30%;
          float: left;
          margin-left: 5%;
          img{
            height:320px;
            width:260px;
            border-radius: 20px;
          }
          img:hover{
            cursor: pointer;
          }
        }
      }
    }
    .example{
      width:90%;
      display: flex;
      margin-top: -2.4%;
      flex-direction: column;
      .exampleItem{
        width:95%;
        margin-top: 2%;
        .exampleImage{
          margin-left: 8%;
          margin-top: 15px;
          display: inline-block;
          img{
            height:260px;
            width:300px;
            border-radius: 5%;
          }
          p{
            font-size: 1.5em;
            color:black;
          }
        }
      }
    }
    .callMe{
      width:57%;
      margin-left: 5%;
      margin-top: 0%;
      height:430px;
      border: 2px solid #f0f0f0;
      border-radius: 3%;
      background-color: #ffffff;
      box-shadow: 5px 5px 5px  #e2e2e2;
      position: relative;
      .callMeTitle{
        height:60%;
        width:46%;
        margin-top: 8%;
        margin-left: 2.5%;
        position: absolute;
        p:first-child{
          font-size: 2em;
          font-weight: bolder;
          margin-top: 0%;
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
          font-size: 1.5em;
          margin-top: 4%;
        }
      }
     .baiduMap{
       width:45%;
       margin-left: 50%;
       height:60%;
       margin-top: 8%;
     border-radius: 20px;
     }
    }
  }
  .mineFoot{
    margin-top: 60px;
  }
  @media only screen and (max-width: 1680px){
    .mineInfo{
      .leftBtn{
        margin-left: 5%;
      }
      .zy{
        margin-left: 5%;
      padding-top: 0;
      }
      .callMe{
        width:72%;
        .baiduMap{
          width:45%;
          margin-left: 50%;
        }
      }
    }
  }
  @media only screen and (max-width: 1440px){
    .mineInfo{
      .zy{
        margin-top: -2%;
        ul{
          li{
            margin-left: 10%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1366px){
    .img{
      .info{
        margin-top: 4%;
      }
    }
     .mineInfo{
       .leftBtn{
         margin-left: 0%;
         ul{
           .li{
             height:12.7rem;
           }
           li{
             .liImg{
               margin-top: 3%;
               margin-left: 3%;
             }
           }
         }
       }
       .rightCon{
         margin-left: 12%;
         ul{
           li{
             img{
               width:220px;
               height:180px;
             }
           }
         }
     }
       .example{
         margin-left: 12%;
         .exampleItem{
           .exampleImage{
             img{
               height:200px;
               width:200px;
             }
           }
         }
       }
       .callMe{
         margin-left: 12%;
         .callMeTitle{
           p:first-child{
             font-size: 16px;
           }
           p{
             font-size: 14px;
           }
         }
       }
   }
  }
  @media only screen and (max-width: 1024px){
    .mineInfo{
      .leftBtn{
        ul{
          li{
            .liImg{
              margin-top: 4%;
              margin-left: 4%;
            }
          }
        }
      }
      .zy{
        margin-left: 10%;
        ul{
          li{
            width:40%;
            img{
              width:200px;
              height:240px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px){
    .img{
      width:100%;
      height: 300px;
      .info{
        height:15%;
        width:100%;
        position: absolute;
        font-size: 1em;
        margin-top: 30px;
        margin-left: 0;
        p{
        margin-left: 0;
          line-height: 25px;
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
        margin-top: 20px;
        ul{
          height:40px;
          width:87%;
          .li{
            margin-top: 2.3rem;
            margin-left: 33%;
            position: absolute;
            .twoUl{
              width:88%;
              span{
                display:block;
              }
           span:last-child{
             border-bottom-right-radius: 4px;
             border-bottom-left-radius: 4px;
           }
            }
          }
          li{
            height:40px;
            float: left;
            width: 17.5%;
            margin-left: 1%;
            .liImg{
              display: none;
            }
            button{
              height:40px;
              font-size:1em;
              border: none;
              border-radius:5%;
            }
          }
          li:first-child{
            button{
              border-radius:0;
            }
          }
          li:last-child{
            button{
              border-radius: 0;
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
          margin-left: -1%;
          li{
            float: left;
            margin-top: 20px;
            img{
              height:200px;
              width:260px;
            }
          }
        }
      }
      .zy{
        width:100%;
        margin-left: 0;
        border: none;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
       ul{
         li{
           margin-left: 5%;
         }
       }
      }
      .example{
        width:100%;
        margin-left: -3%;
        border: none;
      }
      .callMe{
        width: 95%;
        margin-left: 2.5%;
        margin-top: 42px;
        .callMeTitle{
          margin-left: 0;
          height:50%;
          width:50%;
          margin-top: 5%;
          p:first-child{
            font-size: 2em;
            margin-top: 5%;
          }
          p:nth-child(2){
            margin-top: 6%;
          }
          p{
            margin-left: 8%;
            margin-top: 4%;
            font-size: 1.5em;
            width:100%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 650px){
  .mineInfo{
    .leftBtn{
      margin-left: 1rem;
    }
    .rightCon{
    ul{
      margin-left: -4.5%;
      li{
        img{
          width:220px;
        }
      }
    }
    }
    .zy{
      .licence{
        img{
          height:240px;
        }
      }
    }
    .callMe{
      height:300px;
      .callMeTitle{
        height:70%;
        margin-top: 6%;
        width:55%;
        p{
          font-size: 1.4em;
        }
      }
      .baiduMap{
        width:40%;
        margin-left: 55%;
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
        margin-left: 10px;
        margin-top: 30px;
        ul{
          height:40px;
          width:87%;
          .li{
            margin-left: 30%;
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
        margin-top: 20px;
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
       ul{
         margin-left: -8%;
         li{
           width:50%;
           margin-left: 0;
           img{
             width:170px;
           }
         }
       }
      }
      .example{
        width:90%;
        margin-left: 4%;
        margin-top: 40px;
        .exampleItem{
          margin-left: 0%;
          .exampleImage{
            img{
              height:200px;
              width:250px;
            }
          }
        }
      }
      .callMe{
        height:450px;
        width:95%;
        margin-top: 30px;
        border: 1px solid white;
        .callMeTitle{
          margin-left: 5%;
          width:90%;
          height:40%;
          p{
            margin-left: 2%;
            width:93%;
          }
          p:nth-child(2){
            width: 93%;
          }
        }
        .baiduMap{
          width:90%;
          margin-left: 5%;
          margin-top: 52%;
          height:50%;
          background-color:red;
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
    .img{
      .info{
        height:20%;
      }
    }
   .mineInfo{
     .leftBtn{
       margin-left: 5px;
       ul{
         .li{
         margin-left: 31%;
         }
         li{
           margin-left: 6px;
         }
       }
     }
     .rightCon{
       ul{
         margin-left: -5%;
       }
     }
     .callMe{
         .baiduMap{
           height:47%;
           margin-top: 55%;
       }
     }
   }
  }
  @media only screen and (max-width:384px){
    .mineInfo{
      .leftBtn{
        ul{
          margin-left: -5px;
          li{
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
      .callMe{
        height:480px;
        .callMeTitle{
          height:40%;
        }
        .baiduMap{
          margin-top: 65%;
          height:45%;
        }
      }
    }
  }
  @media only screen and (max-width:360px) {
    .mineInfo{
      .leftBtn{
        ul{
          margin-left: -5px;
        }
      }
      .rightCon{
        ul{
          margin-left: -14%;
        }
      }
      .callMe{
        .baiduMap{
          margin-top: 68%;
        }
      }
      .zy{
        ul{
          margin-left: -10%;
          li{
            img{
              height:200px;
              width:140px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width:320px) {
    .img{
      .info{
        margin-top: 10%;
        height:25%;
      }
    }
    .mineInfo{
      .leftBtn{
        ul{
          margin-left:-10px;
          .li{
            .twoUl{
              width:100%;
            }
          }
          li{
            margin-left: 5px;
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
        .callMeTitle{
          p{
            width:100%;
          }
      p:nth-child(2){
        width:100%;
        line-height: 20px;
      }
        }
        .baiduMap{
          margin-top: 75%;
        }
      }
    }
  }
}
</style>
