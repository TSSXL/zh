<template>
  <div class="hel">
    <!--头部导航栏-->
     <div class="image">
       <div class="header"><Head-Component></Head-Component></div>
       <div class="lb">
         <el-carousel height="600px" class="carousel"  trigger="click"  :loop="true">
           <el-carousel-item v-for="item in imageList" :key="item">
             <img :src="item" alt="背景图">
           </el-carousel-item>
         </el-carousel>
       </div>
       <div class="input">
         <input v-model="adname" type="text" placeholder="请输入小区地址或名称" style="background-color: #F5F7F6">
         <!--<el-select class="select" v-model="value" placeholder="选择城市" @change="changeSelect(value)">-->
           <!--<el-option-->
             <!--v-for="item in options"-->
             <!--:key="item.ID"-->
             <!--:label="item.Name"-->
             <!--:value="item.Name"-->
           <!--&gt;-->
           <!--</el-option>-->
         <!--</el-select>-->
         <span class="right"><a @click="showLoading"  id="a">评估</a></span>
       </div>
     </div>
    <!--四张图-->
    <div class="info">
      <ul>
        <li><img src="../image/evaluation_project.png" alt="">
          <p>评估项目</p>
          <hr>
          <p>6万</p>
          <p>(个)</p>
        </li>
        <li><img src="../image/construction_area.png" alt="">
          <p>建筑面积</p>
          <hr>
          <p>1.2亿</p>
          <p>(平方米)</p>
        </li>
        <li><img src="../image/land_area.png" alt="">
          <p>土地面积</p>
          <hr>
          <p>1亿</p>
          <p>(平方米)</p>
        </li>
        <li><img src="../image/total_cost_assessment.png" alt="">
          <p>评估总值</p>
          <hr>
          <p>1.9万亿</p>
          <p>(元)</p>
        </li>
      </ul>
    </div>
    <!--服务理念-->
    <div class="title ser">
      <span class="q" style="font-weight: bolder;">服务理念</span>
      <div class="serviceImage">
        <ul>
          <li><img src="../image/justice.png" alt=""></li>
          <li><img src="../image/focus.png" alt=""></li>
          <li><img src="../image/rigorous.png" alt=""></li>
          <li><img src="../image/innovation.png" alt=""></li>
        </ul>
      </div>
      </div>
    <!--业务范围-->
     <div class="title" >
       <span class="q yw" style="font-weight: bolder">业务范围</span>
       <div class="fw">
         <div class="fwItem">
           <div class="fwLeft">
             <span>非法定估价</span>
             <span>·抵押估价·转让租赁估价·投资性房地产公允价值计量估价·移民资产估价</span>
           </div>
           <img src="../image/technical_force_bg.png"  alt="">
         </div>
         <div class="fwItem">
           <img src="../image/technical_force_bg.png"  alt="">
           <div class="fwLeft">
             <span>法定估价</span>
             <span>·司法估价·征收估价·政府委托估价</span>
           </div>
         </div>
         <div class="fwItem">
           <div class="fwLeft">
             <span>咨询顾问估价</span>
             <span>投资、收购估价·纠纷估价·资产处置估价·分割、合并估价·保险估价·拍卖估价·房地产损害赔偿价值估价·房屋质量缺陷损失估价·城市更新可行性研究报告、开发方案</span>
           </div>
           <img src="../image/technical_force_bg.png"  alt="">
         </div>
         <div class="fwItem">
           <img src="../image/technical_force_bg.png"  alt="">
           <div class="fwLeft">
             <span>土地估价</span>
             <span>·土地使用权出让底价估价、规划变更调整地价款评估、协议出让价格评估
·涉税估价：涉及土地增值税、契税、房产税、所得税等的估价·用地策划方案及咨询·建设模式策划、成本估算、建设融资及项目评估</span>
           </div>
         </div>
       </div>
       <div class="fw fwTwo">
         <div class="fwItem">
           <img src="../image/technical_force_bg.png"  alt="">
           <div class="fwLeft">
             <span>非法定估价</span>
             <span>·抵押估价·转让租赁估价·投资性房地产公允价值计量估价·移民资产估价</span>
           </div>
         </div>
         <div class="fwItem">
           <img src="../image/technical_force_bg.png"  alt="">
           <div class="fwLeft">
             <span>法定估价</span>
             <span>·司法估价·征收估价·政府委托估价</span>
           </div>
         </div>
         <div class="fwItem">
           <img src="../image/technical_force_bg.png"  alt="">
           <div class="fwLeft">
             <span>咨询顾问估价</span>
             <span>投资、收购估价·纠纷估价·资产处置估价·分割、合并估价·保险估价·拍卖估价·房地产损害赔偿价值估价·房屋质量缺陷损失估价·城市更新可行性研究报告、开发方案</span>
           </div>
         </div>
         <div class="fwItem">
           <img src="../image/technical_force_bg.png"  alt="">
           <div class="fwLeft">
             <span>土地估价</span>
             <span>·土地使用权出让底价估价、规划变更调整地价款评估、协议出让价格评估<br>
·涉税估价：涉及土地增值税、契税、房产税、所得税等的估价·用地策划方案及咨询·建设模式策划、成本估算、建设融资及项目评估
</span>
           </div>
         </div>
       </div>
     </div>
    <!--技术力量-->
    <div class="title js">
      <span class="q" style="font-weight: bolder;">技术力量</span>
      <div class="msg">
        <div class="msgText zd">估价师例会制度</div>
        <div class="msgText">公司设立估价师例会制度，每月至少举行一次估价师技术例会，针对大型疑难估价项目的估价技术路线、技术参数的选取、估价技术报告的核心的把控，全体注册房地产估价师、土地估价师等专业技术人员集中谈论，确定路线和方法，解决疑难问题，整理经验数据，建立公司内部技术档案</div>
      </div>
    </div>
    <!--新闻资讯-->
    <div class="news" >
     <span class="newsTitle q" style="font-weight: bolder">新闻资讯</span>
      <span class="more"><a @click="gotoNews">查看更多 </a><img src="../image/more.png" alt=""></span>
      <div class="newsItem">
        <div class="n" v-for="item in newsList">
          <img @click="gotoInfo(item.Contexts,item.Category)" src="../image/jb.jpg"  alt="后台无图片">
          <div class="nc">
            <span>{{item.Title}}</span>
            <span>{{item.Summary}}</span>
          </div>
        </div>
        <span class="more moreTwo" style="display: none"><a @click="getMore">查看更多 </a><img src="../image/more.png" alt="" style="transform: rotate(90deg);"></span>
      </div>

    </div>
    <!--员工风采-->
    <div class="w">
    <span>员工风采</span>
      <div class="worker" >
        <div class="workerItem">
          <div class="workerImage"></div>
          <div class="workInfo">
            <div class="tz">
              <p>方纪伟</p>
              <p>同志</p>
            </div>
            <p class="tzCon">在百丈街道宁舟港二期地块拆迁工作中，被评为"拆迁工作先进个人",为公司赢得了荣誉</p>
          </div>
        </div>
        <div class="workerItem">
          <div class="workerImage"></div>
          <div class="workInfo">
            <div class="tz">
              <p>方纪伟</p>
              <p>同志</p>
            </div>
            <p class="tzCon">在百丈街道宁舟港二期地块拆迁工作中，被评为"拆迁工作先进个人",为公司赢得了荣誉</p>
          </div>
        </div>
      </div>
    </div>
    <!--重要客户-->
    <div class="mainPeople q">重要客户</div>
      <div class="mainImage">
        <img class="jt" src="../image/left.png" alt="" @click="gotoLeft">
            <ul>
              <li><img :src="peopleList[0]" alt=""></li>
              <li><img :src="peopleList[1]" alt=""></li>
              <li><img :src="peopleList[2]" alt=""></li>
              <li><img :src="peopleList[3]" alt=""></li>
              <li><img :src="peopleList[4]" alt=""></li>
              <li><img :src="peopleList[5]" alt=""></li>
              <li><img :src="peopleList[6]" alt=""></li>
              <li><img :src="peopleList[7]" alt=""></li>
              <li><img :src="peopleList[8]" alt=""></li>
            </ul>
        <img class="jt" src="../image/right.png" alt="" @click="gotoLeft">
      </div>
    <!--底部导航栏-->
    <Foot-Component></Foot-Component>
  </div>
</template>

<script>
import HeadComponent from './mayBe'
import FootComponent from './foot'
export default {
  name: 'HelloWorld',
  data () {
    return {
      adname:'',
      imageList:[
        require("../image/top_banner.png")
      ],
      peopleList:[
        require("../image/gs.png"),
        require("../image/ny.png"),
        require("../image/ms.png"),
        require("../image/jt.png"),
        require("../image/zs.png"),
        require("../image/pa.png"),
        require("../image/dh.png"),
        require("../image/gf.png"),
        require("../image/yz.png")
      ],
      category:1,
      options: [],
      value: '',
      newsList:{},
      pageIndex:1
    }
  },
  components:{
    HeadComponent,
    FootComponent
  },
  created(){
    let _this=this
    _this.setCookie('token',"aa")
    _this.getNews(_this.pageIndex)
    document.onkeydown=function (e) {
      let _key=window.event.keyCode
      if(_key==13)
      {
        _this.showLoading()
      }
    }
  // this.getCity()
  },
  methods:{
    gotoLeft(){
      this.peopleList=this.peopleList.reverse()
    },
    getMore(){
      this.getNews(++this.pageIndex)
    },
    gotoInfo(Contexts,Category){
      this.$router.push({path:'/info',query:{a:Contexts,b:Category}})
    },
    gotoNews(){
      this.$router.push({path:'/news'})
    },
    changeSelect(val){
      this.value=val
    },
    showLoading(){
      this.$http
        .get("/api/Online/OnlineService", {
          params: {
            adname:this.adname
          }
        })
        .then(
          function (response) {
            this.$router.push({path:'/es',query:{online:1,tableData:response.data.Result}})
          }.bind(this)
        )
        // 请求error
        .catch(
          function (error) {
            this.$notify.error({
              title: "出错啦",
              message: "错误：请输入正确的小区地址或名称",
            });
          }.bind(this)
        )
    },
    getNews(pageIndex) {
      this.$http
        .get("/api/News/GetNews", {
          params: {
            PageIndex:pageIndex,
            PageSize:4,
            Category:"全部"
          }
        })
        .then(
          function (response) {
            if(JSON.stringify(response.data.Result.data)=="{}")
            {
              this.newsList={0:[]}
            }else{
              if(response.data.Result.PageIndex==1)
              {
                this.newsList=response.data.Result.data
              }else{
                this.newsList=this.newsList.concat(response.data.Result.data)
              }
            }
          }.bind(this)
        )
        // 请求error
        .catch(
          function (error) {
            this.$notify.error({
              title: "出错啦",
              message: "错误：请检查网络"
            });
          }.bind(this)
        );
    },
    // getCity(){
    //   this.$http
    //     .get("/api/Online/GetCity")
    //     .then(
    //       function (response) {
    //        this.options=response.data.Result.slice(0,20)
    //       }.bind(this)
    //     )
    //     .catch(
    //       function (error) {
    //         this.$notify.error({
    //           title: "出错啦",
    //           message: "错误：请检查网络"
    //         });
    //       }.bind(this)
    //     )
    // }
  }
}
</script>

<style scoped>
  .hel{
    width:100%;
  }
  .el-carousel__item img{
    height:100%;
    width:100%;
  }
    a {
      text-decoration: none;
      color: black;
    }
    .image {
      height: 600px;
      width: 100%;
      position: relative;
    }
    .lb{
      height:600px;
      width:100%;
      position: absolute;
      z-index: 0;
    }
.header{
  width:100%;
  position: absolute;
  z-index: 9999;
  margin-top:0px;
}
    .image .input {
      height: 50px;
      width: 45%;
      margin-left: 35%;
      margin-top: 20%;
      color: #606060;
      position: absolute;
      z-index: 10;
    }
    .input input {
      width: 65%;
      height: 80%;
      padding: 5px 5px;
      border-radius: 30px;
      padding-left: 20px;
      border: none;
      float: left;
      text-indent: 5%;
      font-size: 1.8em;
    }
    .q{
      font-size: 22px;
    }
    .select{
      margin-top: 0.6%;
      position: absolute;
      width:18%;
     margin-left: -81%;
    }
  .right{
    display: inline-block;
    height: 50px;
    padding-right: 20px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    font-size: 2em;
    width:80px;
    position: absolute;
    background-color: #009645;
    margin-top: 0px;
    line-height: 50px;
    margin-left: -27%;
  }
  .right a{
    color:#ffffff;
  }
  .right:hover{
    cursor: pointer;
  }
    .info {
      width:100%;
      display: flex;
    }
    .info ul{
      width:80%;
      list-style: none;
      margin-left: 17%;
      margin-top: 2%;
    }
    .info ul li{
      float: left;
      width:12%;
      margin-left: 5%;
    }
 .info ul li hr{
   width: 15%;
   margin-top: -10px;
 }
  .info ul li p:nth-child(2){
    font-size: 17px;
    font-weight: bolder;
    margin-top: -5px;
  }
 .info ul li p:nth-child(4){
   font-size: 24px;
   font-weight: bolder;
   margin-top: -5px;
 }
  .info ul li p:last-child{
    margin-top: -25px;
  }
.title{
  width:100%;
  margin-top:3%;
  line-height: 30px;
  font-size: 2em;
}
.title span{
  display: inline-block;
  margin-top: 2%;
}
.ser{
  background-color: #F5F7FA;
  margin-top: 30px;
}
.serviceImage{
  width: 100%;
  margin-top: 30px;
  display: flex;
}
.serviceImage ul{
  width:70%;
  list-style: none;
  margin-left: 15%;
}
.serviceImage ul li{
   float: left;
  margin-left: 4%;
  width:18%;
 }
.serviceImage ul li img{
  height:280px;
  width:240px;
  border-radius: 20px;
}
.fw{
  width:60%;
  margin-left: 20%;
  margin-top: 6%;
}
.fwTwo{
  display: none;
}
.fwItem{
  width:100%;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
}
.fwLeft{
   width:40%;
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  text-align: left;
}
.fwLeft span:first-child{
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 18px;
}
.fwLeft span:last-child{
  font-size: 16px;
  color:rgba(76,76,76,1);
}
.fwItem img{
  width:40%;
  height:250px;
  border-radius: 20px;
  margin-left:5%;
  background-color: rgba(237,235,247,1);
}
.js{
  width:100%;
   height:400px;
  background: url("../image/technical_force_bg.png");
  background-size: 100% 100%;
}
.js span{
  margin-top: 60px;
}
.msg{
  margin-top: 2%;
  width:100%;
  padding-bottom: 60px;
}
.msgText{
  width:59%;
  margin-left: 21%;
  text-align: center;
  padding-bottom: 20px;
  font-size:16px;
  color:rgba(51,51,51,1);
  line-height:34px;
  font-weight: bold;
}
.zd{
  font-size:18px;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:24px;
}
.news{
  width:80%;
  margin-left: 10%;
  margin-top: 3%;
}
.newsTitle{
  font-size: 22px;
  margin-left: 19%;
}
.newsItem{
  width:75%;
  margin-top: 2%;
  margin-left: 13%;
  text-align: left;
  padding-bottom: 50px;
  letter-spacing: 2px;
  display: flex;
  flex-wrap: wrap;
}
.n{
  height:200px;
  width:47%;
  margin-left: 2.5%;
  margin-top: 4%;
  display: flex;
  flex-direction: row;
}
.n img{
  height:100%;
  width:48%;
  margin-left: 2%;
  border-radius: 20px;
}
.n img:hover{
  cursor: pointer;
}
.nc{
  display: flex;
  flex-direction: column;
  width:48%;
  margin-left: 2%;
}
.nc span:first-child{
  font-size: 2em;
  font-weight: bolder;

}
.nc span:last-child{
  margin-top: 5%;
  height:95px;
  line-height: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  color:#808080;
}
.more{
  display: inline-block;
  font-size: 1.5em;
  float: right;
  margin-right: 14%
}
.more a{
  color:gray;
}
.more a:hover{
  cursor: pointer;
}
.w{
  width:100%;
  background-color: #F5F7FA;
}
.w span{
  display: inline-block;
  font-size: 22px;
  padding-top: 40px;
  font-weight: bolder;
}
.worker{
  width:63%;
  margin-left: 17%;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
}
.worker span{
  font-size: 2em;
}
.workerItem{
  height:180px;
  width:40%;
  margin-top: 2%;
  box-shadow:3px 3px 3px 3px #aaaaaa;
  border-radius: 20px;
  display: flex;
  margin-left: 8%;
  background-color: #ffffff;
}
.workerImage{
  height:100px;
  width:100px;
  border-radius: 50%;
  margin-left: 10%;
  margin-top: 8%;
  background-color: rgba(180,112,112,1);
}
.workInfo{
   height:90%;
   width:50%;
   margin-left: 4%;
   text-align: left;
   padding-top: 10px;
 }
.tzCon{
  margin-top: -0.5rem;
  font-size: 16px;
  letter-spacing: 2px;
  color:#808080;
  height:70%;
  line-height: 1.3em;
  overflow: hidden;
}
.tz{
  display: flex;
  flex-direction: row;
  width:50%;
}
.tz p:first-child{
  font-size: 18px;
  color:black;
  font-weight: bolder;
}
.tz p:last-child{
  font-size: 12px;
 margin-top: 23%;
  color:#808080;
}
.mainPeople{
  font-size: 22px;
  margin-top: 3%;
  font-weight: bolder
}
.mainImage{
  width: 62%;
  margin-left: 19%;
  height:300px;
  margin-top: 2%;
  padding-bottom: 200px;
  display: flex;
  flex-direction: row;
}
.jt{
  height:50px;
  width:50px;
  margin-top: 12%;
}
.jt:hover{
  cursor: pointer;
}
.mainImage ul{
  width:100%;
  height:100%;
  list-style: none;
}
.mainImage ul li{
  float: left;
  width:33%;
  height:33%;
}
.mainImage ul li img{
  height:60%;
  width:50%;
  margin-top: 5%;
}
  @media only screen and (max-width: 1366px) {
    .select{
      width:16%;
    }
    .image .input{
      margin-top: 30%;
      width:50%;
    }
    .image input{
      font-size: 1.5em;
    }
    .right{
      margin-right: -5px;
    }
    .fwLeft{
      width:45%;
    }
    .fwItem img{
      width:50%;
      height:200px;
    }
    .msg{
      margin-top: 2%;
      width:100%;
      padding-bottom: 60px;
    }
    .newsItem{
      width:78%;
      margin-left: 12%;
    }
    .n{
      margin-top: 6%;
    }
    .workerImage {
      margin-top: 10%;
    }
    .workInfo{
      padding-top: 20px;
      width:50%;
    }

    .serviceImage{
     width:100%;
      margin-left: 0%;
    }
    .serviceImage ul{
      width: 90%;
      margin-left: 5%;
    }
    .newsTitle{
      margin-left: 20%;
    }
    .more{
      display: inline-block;
      font-size: 1.5em;
      float: right;
      margin-right: 15%
    }
    .nc span:last-child{
      width:90%;
      height:110px;
      -webkit-line-clamp: 7;
    }
    .tz p:last-child{
      margin-top: 30%;
    }
    .tzCon{
      margin-top: -1rem;
      line-height: 1.2rem;
    }
    .mainImage{
      width:70%;
      margin-left: 15%;
    }
  }
  @media only screen and (max-width: 1266px){
    .serviceImage ul li img{
      height:240px;
      width:200px;
    }
    .fwItem img{
      width:45%;
      height:180px;
    }
    .workerImage{
      height:80px;
      width:80px;
      margin-top: 18%;
    }
    .tz p:first-child{
      font-size: 13px;
    }
    .tz p:last-child{
      margin-top: 25%;
    }
    .tzCon{
      font-size: 12px;
      margin-top: -6%;
    }
    .mainImage{
      margin-left: 11%;
    }
    .mainImage ul li img{
      width:60%;
    }
    .jt{
      margin-top: 18%;
    }
  }
  @media only screen and (max-width: 900px){
    .image .input{
      width:70%;
      margin-left: 25%;
      margin-top: 50%;
    }
    .select{
      width:18%;
    }
    .serviceImage ul li img{
      width:200px;
    }
    .serviceImage ul{
      width:90%;
      margin-left: -7%;
    }
    .serviceImage ul li{
      margin-left: 7%;
    }
  }
  @media only screen and (max-width: 768px) {
    .image{
      height:300px;
      width:100%;
      background-color: #80b2c3;
    }
    .info ul{
      width:100%;
      list-style: none;
      margin-left:0%;
    }
    .info ul li{
      float: left;
      width:12%;
      margin-left: 10%;
    }
    .info ul li hr{
      width: 40%;
      margin-top: -10px;
    }
    .info ul li p:nth-child(2){
      font-size: 12px;
      font-weight: bolder;
      margin-top: 0px;
    }
    .info ul li p:nth-child(4){
      font-size: 18px;
      font-weight: bolder;
      margin-top: -3px;
    }
    .info ul li p:last-child{
      margin-top: -20px;
    }
    .lb{
      height:300px;
    }
    .el-carousel{
      overflow: hidden;
    }
    .carousel{
      height:300px;
    }
    .el-carousel__item img{
      height:300px;
      width:100%;
    }
    .image .input{
      height:40px;
      width:50%;
      margin-top:25%;
      position: absolute;
      margin-left: 28%;
    }
    .input input {
      width:90%;
      height:30px;
      padding:5px 5px;
      border-radius:30px;
      border: none;
      padding-left: 20px;
      line-height: 30px;
      font-size: 2em;
    }
    .select{
      margin-top: 0%;
      margin-left: -93%;
      width:26%;
    }
    .right{
      display: inline-block;
      height: 100%;
      padding-right: 20px;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      font-size: 2em;
      width:60px;
      background-color: #009645;
      margin-top: 0px;
      line-height: 40px;
      margin-left: -20%;
    }
    .serviceImage ul{
      width:100%;
      margin-left: -7%;
    }
    .serviceImage ul li img{
      height:250px;
      width:200px;
    }
    .serviceImage ul li{
      float: left;
      margin-left: 5%;
      width:18%;
    }
    .fw{
      width:90%;
      margin-left: 5%;
    }
   .fwItem img{
     width:44%;
   }
   .msg{
     margin-top: 4%;
     padding-bottom: 20px;
   }
   .msg{
     padding-top: 10px;
   }
   .msgText{
     width:90%;
     margin-left: 5%;
     font-size: 0.5em;
     letter-spacing: 3px;
   }
   .js{
     line-height: 15px;
     margin-top: 40px;
     height:350px;
   }
   .newsItem{
     margin-top:3%;
     width:100%;
     margin-left: 0;
   }
   .more{
     margin-right: 5%;
   }
   .newsTitle{
     margin-left: 13%;
   }
   .news{
     width:90%;
     margin-left: 5%;
   }

    .worker{
      display: flex;
      flex-direction: column;
      width:90%;
      margin-left: 5%;
    }
    .workerItem{
      display: flex;
      height:140px;
      width:96%;
      margin-top: 30px;
      margin-left: 2%;
    }
    .workerImage{
      height:80px;
      width:80px;
      border-radius: 50%;
      margin-top: 30px;
      margin-left: 5%;
    }
    .workInfo{
      width:69%;
      text-align: left;
      margin-left: 10px;
      height:90%;
    }
    .tzCon{
      line-height: 1rem;
     margin-top: -0.7rem;
      font-size: 14px;
    }
    .tz p:last-child{
      margin-top: 8%;
    }
    .mainImage{
      width: 95%;
      margin-left: 2.5%;
      padding-bottom:60px;
    }
  }
  @media only screen and (max-width: 600px){
    .image .input{
      width:60%;
      margin-left: 20%;
    }
    /*.input input{*/
      /*text-indent: 35%;*/
    /*}*/
    .select{
      width:28%;
  }
    .n{
      width:100%;
    }
    .serviceImage ul li img{
      height:220px;
      width:160px;
    }
    .serviceImage ul li{
      margin-left: 5%;
    }
    .tz p:last-child{
      margin-top: 10%;
    }
    .tzCon{
      margin-top: -0.5rem;
    }
    .mainImage ul li img{
      height:60%;
      width:80%;
    }
    .jt{
      margin-top: 21%;
    }
  }
  @media only screen and (max-width: 435px){
    .header{
     margin-top: 0%;
    }
    .info ul{
      margin-left: -6%;
    }
    .info ul li{
      float: left;
      width:18%;
      margin-left: 5%;
    }
    .info ul li p:nth-child(4){
      font-size: 20px;
    }
    .info ul li p:nth-child(2){
      font-size: 14px;
    }
    .info ul li p:last-child{
     color:#B1BFC7
    }
    .info ul li img{
      height:40px;
      width:40px;
    }
    .image .input{
      height:40px;
      width:90%;
      margin-top:40%;
      position: absolute;
      margin-left: 5%;
    }
    .serviceImage ul{
     margin-left: -18%;
    }
    .serviceImage ul li img{
      height:220px;
      width:180px;
    }
    .serviceImage ul li{
      margin-left: 20%;
    }
    /*.input input {*/
     /*text-indent: 35%;*/
    /*}*/
    .fwLeft{
      width:90%;
      margin-top: 5%;
      letter-spacing: 0px;
      line-height: 20px;
    }
    .fwLeft span:first-child{
      font-size: 18px;
      color:black
    }
    .fwLeft span:last-child{
      font-size: 14px;
      letter-spacing: 2px;
      color: #808080;
    }
    .fwItem{
      margin-top: 0;
      flex-direction: column;
    }
    .fw{
      display: none;
    }
    .fwTwo{
      display: block;
    }
    .fwItem img{
      height:180px;
      width:90%;
      margin-top: 20px;
    }
    .title span{
      color:rgba(251,95,107,1);
    }
    .msgText{
      font-size: 14px;
      letter-spacing: 0;
    }
    .q{
      font-size: 24px;
    }
    .title{
      font-size: 1em;
    }
    .yw:after{
      content: "";
      display: block;
      height:2px;
      width:5rem;
      background:rgba(251,96,108,1);
      border-radius:1px;
      margin-left: 10%;
      margin-top: 1%;
    }
    .newsTitle{
        margin-left: 0%;
      color:rgba(251,95,107,1);
    }
    .newsTitle:after{
      content: "";
      display: block;
      height:2px;
      width:6rem;
      background:rgba(251,96,108,1);
      border-radius:1px;
      margin-left: 38%;
      margin-top: 1%;
    }
    .w span:after{
      content: "";
      display: block;
      height:2px;
      width:5rem;
      background:rgba(251,96,108,1);
      border-radius:1px;
      margin-left:8%;
      margin-top: 1%;
    }
    .mainPeople{
      font-size: 22px;
      color:rgba(251,95,107,1);
    }
    .ser span:after{
      content: "";
      display: block;
      height:2px;
      width:5rem;
      background:rgba(251,96,108,1);
      border-radius:1px;
      margin-left: 10%;
      margin-top: 1%;
    }
    .js span:after{
      content: "";
      display: block;
      height:2px;
      width:5rem;
      background:rgba(251,96,108,1);
      border-radius:1px;
      margin-left: 10%;
      margin-top: 8%;
    }
    .mainPeople:after{
      content: "";
      display: block;
      height:2px;
      width:5rem;
      background:rgba(251,96,108,1);
      border-radius:1px;
      margin-left: 40.5%;
      margin-top: 1%;
    }
    .nc span:last-child{
      line-height: 15px;
      height: 105px;
    }
.newsItem{
  flex-direction: column;
}
.nc span:first-child{
  font-size: 24px;
}
.nc span:last-child{
  font-size: 18px;
}
.n{
  width:100%;
  height:120px;
}
.n img{
  width:40%;
}
.w span{
  color:rgba(251,95,107,1);
}
    .tz p:last-child{
      margin-top: 20%;
      margin-left: 0.2rem;
    }
    .tz p:first-child{
      font-size: 15px;
    }
    .workInfo{
      width:50%;
      padding-top: 5px;
    }
    .tzCon{
      letter-spacing: 3px;
      height:90px;
      font-size: 12px;
      line-height: 20px;
    }
    .js span{
      margin-top: 40px;
    }
    .more{
      display: none;
    }
    .moreTwo{
      display: inline-block !important;
      margin-top: 10%;
      margin-left: 40%;
    }
    .mainImage ul li img{
      height:49%;
    }
    .mainImage ul{
    margin-left: -30px;
    }
    .jt{
      width:25px;
      height:25px;
      margin-top: 32%;
    }
  }
  @media only screen and (max-width: 415px){
    .select{
      width:30%;
    }
    .serviceImage ul{
      margin-left: -19%;
    }
    .js span{
      margin-top: 25px;
    }
  }
  @media only screen and (max-width: 384px){
    .serviceImage ul{
      margin-left: -30%;
    }
    .serviceImage ul li{
      margin-left: 25%;
    }
    .info ul li{
      float: left;
      width:20%;
      margin-left: 2.5%;
    }
    .tz p:last-child{
      margin-top: 23%;
      letter-spacing: 2px;
    }
    .newsTitle:after{
      margin-left: 36%;
    }
    .mainPeople:after{
      margin-left: 39.5%;
    }
    .jt{
      margin-top: 38%;
    }
  }
  @media only screen and (max-width: 360px){
    .select{
      width:32%;
    }
    .info ul li{
      float: left;
      width:22%;
      margin-left: 0.5%;
    }
    /*.input input{*/
      /*text-indent: 36%;*/
    /*}*/
    .serviceImage ul{
      margin-left: -32%;
    }
    .nc span:last-child{
      width:82%;
      height:120px;
      -webkit-line-clamp: 8;
    }
    .fwItem img{
      margin-top: 15px;
    }
    .tz p:last-child{
      margin-top: 26%;
    }
    .jt{
      margin-top: 42%;
    }
  }
  @media only screen and (max-width: 320px){
    .image .input{
      margin-left: 1%;
    }
    /*.input input{*/
      /*text-indent: 39%;*/
    /*}*/
    .right{
      width:40px;
      margin-left: -15%;
      padding-left: 8px;
    }
    .info ul{
      margin-left: -8%;
    }
    .info ul li{
      float: left;
      width:24%;
      margin-left:0%;
    }
    .serviceImage ul{
      margin-left: -44%;
    }
    .serviceImage ul li{
      margin-left: 30%;
    }
    .select{
      width: 35%;
    }
    .workInfo{
      width:55%;
    }
    .msgText{
      letter-spacing: 0px;
    }
    .tz p:first-child{
      font-size: 14px;
    }
    .jt{
      margin-top: 46%;
    }
  }
</style>
