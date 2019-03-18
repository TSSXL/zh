<template>
  <div class="hel">
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
         <input type="text" placeholder="请输入完整小区的名称">
         <el-select class="select" v-model="value" placeholder="选择城市">
           <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
         <span class="right"><a href="javascript:void(0)" @click="showLoading" >评估</a></span>
       </div>
     </div>
    <div class="info">
      <el-row>
        <el-col  :xs="0" :sm="3"  :lg="3" :xl="3"><div class="item"></div></el-col>
        <el-col  :xs="0" :sm="3"  :lg="3" :xl="3"><div class="item"></div></el-col>
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/evaluation_project.png" alt=""><div class="itemText">评估项目</div><div class="itemHr"></div><div class="itemText" style="font-weight: bolder">600</div><div class="d" >(个)</div></div></el-col>
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/construction_area.png" alt=""><div class="itemText">建筑面积</div><div class="itemHr"></div><div class="itemText" style="font-weight: bolder">4.2亿</div><div class="d">(平方米)</div></div></el-col>
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/land_area.png" alt=""><div class="itemText">土地面积</div><div class="itemHr"></div><div class="itemText" style="font-weight: bolder">1.1亿</div><div class="d">(平方米)</div></div></el-col>
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/total_cost_assessment.png" alt=""><div class="itemText">评估总值</div><div class="itemHr"></div><div class="itemText" style="font-weight: bolder">128万亿</div><div class="d">(元)</div></div></el-col>
        <el-col  :xs="0" :sm="6"  :lg="6" :xl="6"><div class="item"></div></el-col>
      </el-row>
    </div>
    <div class="title ser">
      <span style="font-weight: bolder;">服务理念</span>
      <div class="serviceImage">
        <ul>
          <li><img src="../image/justice.png" alt=""></li>
          <li><img src="../image/focus.png" alt=""></li>
          <li><img src="../image/rigorous.png" alt=""></li>
          <li><img src="../image/innovation.png" alt=""></li>
        </ul>
      </div>
      </div>
     <div class="title" >
       <span style="font-weight: bolder">业务范围</span>
       <div class="fw">
         <div class="fwItem">
           <div class="fwLeft">
             <span>非法定估价</span>
             <span>·抵押估价·转让租赁估价·投资性房地产公允价值计量估价·移民资产估价</span>
           </div>
           <img src="../image/first.svg" alt="">
         </div>
         <div class="fwItem">
           <img src="../image/first.svg" alt="">
           <div class="fwLeft">
             <span>法定估价</span>
             <span>·司法估价·征收估价·政府委托估价</span>
           </div>
         </div>
         <div class="fwItem">
           <div class="fwLeft">
             <span>咨询顾问估价</span>
             <span>投资、收购估价·纠纷赁估价·资产处置估价·分割、合并估价</span>
           </div>
           <img src="../image/first.svg" alt="">
         </div>
         <div class="fwItem">
           <img src="../image/first.svg" alt="">
           <div class="fwLeft">
             <span>非法定估价</span>
             <span>·抵押估价·转让租赁估价·投资性房地产公允价值计量估价·移民资产估价</span>
           </div>
         </div>
       </div>
     </div>
    <div class="title js">
      <span style="font-weight: bolder">技术力量</span>
      <div class="msg">
        <div class="msgText zd">估价师例会制度</div>
        <div class="msgText">大师的坏事回答啊倒萨的哈啥护士都哈刷书的哈四大行速度撒红灯大大师的坏事回答啊倒萨的哈啥护士都哈刷书的哈四大行速度撒红灯大大师的坏事回答啊倒萨是的哈说的话黑暗神殿回答的哈啥护士都哈刷书的哈四大行速度撒红灯大大师的坏事回答啊倒萨是的哈说的话黑暗神殿回答</div>
      </div>
    </div>
    <div class="news" >
     <span class="newsTitle" style="font-weight: bolder">新闻资讯</span>
      <span class="more"><a href="">更多 >></a></span>
      <div class="newsItem">
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
          </div>
        </div>
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
          </div>
        </div>
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
          </div>
        </div>
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w">
    <span>员工风采</span>
      <div class="worker" >
        <div class="workerItem">
          <div class="workerImage"></div>
          <div class="workInfo">
            <p>曹亦中(同志)</p>
            <p>啊基督教大海生地哈师大uiddiasdjasj的计算机等级啊是</p>
          </div>
        </div>
        <div class="workerItem">
          <div class="workerImage"></div>
          <div class="workInfo">
            <p>曹亦中(同志)</p>
            <p>啊基督教大海生地哈师大uiddiasdjasj的计算机等级啊是</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mainPeople">重要客户</div>

      <div class="mainImage">
        <el-carousel height="200px" class="x"  trigger="click"  :loop="true">
          <el-carousel-item v-for="item in imageList" :key="item">
            <div class="i">
              <img src="../image/first.jpg" alt="">
              <img src="../image/three.jpg" alt="">
              <img src="../image/two.jpg" alt="">
              <img src="../image/first.jpg" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
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
      imageList:[
        require("../image/top_banner.png")
      ],
      options: [{
        value: '选项1',
        label: '宁波'
      }, {
        value: '选项2',
        label: '金华'
      }, {
        value: '选项3',
        label: '温州'
      }, {
        value: '选项4',
        label: '奉化'
      }, {
        value: '选项5',
        label: '衢州'
      }],
      value: ''
    }
  },
  components:{
    HeadComponent,
    FootComponent
  },
  methods:{
    getInfo() {
      this.$http
        .get("/api/APP_Product/GetDayDealPosterList", {
          params: {
            type:1,
            pageIndex: 1,
            pageSize: 20
          }
        })
        .then(
          function (response) {
            var status = response.data;
          }.bind(this)
        )
        // 请求error
        .catch(
          function (error) {
            this.$notify.error({
              title: "错误",
              message: "错误：请检查网络"
            });
          }.bind(this)
        );
    },
    showLoading(){
      console.log("555")
    }
  },
  mounted() {
    this.getInfo()
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
      background-color: #80b2c3;
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
  margin-top:70px;
}
    .image .input {
      height: 60px;
      width: 30%;
      margin-left: 35%;
      margin-top: 15%;
      color: #606060;
      position: absolute;
      z-index: 10;
    }
    .input input {
      width: 95%;
      height: 80%;
      padding: 5px 5px;
      border-radius: 30px;
      padding-left: 20px;
      border: none;
      float: left;
      text-indent: 180px;
      font-size: 1.8em;
    }
    .select{
      margin-top: -9%;
      float: left;
      width:25%;
      margin-left: 5%;
    }
  .right{
    display: inline-block;
    height: 58px;
    padding-right: 20px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    font-size: 2em;
    width:80px;
    float: right;
    background-color: #009645;
    margin-top: -58px;
    line-height: 60px;
    margin-right: 1px;
  }
    .info {
      width: 100%;
    }
.item{
  display: flex;
  height:180px;
  margin-top: 60px;
  flex-direction: column;
}
.item img{
  height:70px;
  width:60px;
  margin-left: 38%;
  margin-top: 5px;
}
.item .itemHr{
  height:2px;
  width:30px;
  background-color: red;
  margin-left: 45%;
}
.item .itemText{
  font-size: 2em;
  margin-top: 5px;
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
  width:60%;
  margin-left: 20%;
  margin-top: 30px;
  display: flex;
}
.serviceImage ul{
  width:100%;
  list-style: none;
}
.serviceImage ul li{
  float: left;
  margin-left: 60px;
}
.serviceImage ul li img{
  height:220px;
  width: 180px;
  border-radius: 4%;
}
.fw{
  width:60%;
  margin-left: 20%;
  margin-top: 6%;
}
.fwItem{
  width:100%;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
}
.fwLeft{
   width:45%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  margin-left: 5%;
  text-align: left;
}
.fwItem img{
  width:45%;
  border: 1px solid black;
  border-radius: 2%;
  margin-left:5%;
}
.js{
  width:100%;
  background-color: wheat;
  background: url("../image/technical_force_bg.png");
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
  letter-spacing: 1px;
  font-size: 0.8em;
}
.zd{
  font-size: 1em;
}
.news{
  width:80%;
  margin-left: 10%;
  margin-top: 3%;
}
.newsTitle{
  font-size: 2em;
  margin-left: 17%;
}
.newsItem{
  width:75%;
  margin-top: 5%;
  margin-left: 13%;
  text-align: left;
  padding-bottom: 50px;
  letter-spacing: 2px;
  display: flex;
  flex-wrap: wrap;
}
.n{
  height:160px;
  width:47%;
  margin-left: 2%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
}
.n img{
  height:100%;
  width:48%;
  margin-left: 2%;
  border-radius: 4%;
}
.nc{
  display: flex;
  flex-direction: column;
  width:48%;
  margin-left: 2%;
}
.nc span:first-child{
  font-size: 1.5em;

}
.nc span:last-child{
  display: inline-block;
  margin-top: 5%;
  height:130px;
}
.more{
  display: inline-block;
  font-size: 1.5em;
  float: right;
  margin-right: 14.5%
}
.more a{
  color:gray;
}
.w{
  width:100%;
  background-color: #F5F7FA;
}
.w span{
  display: inline-block;
  font-size: 2em;
  padding-top: 40px;
  font-weight: bolder;
}
.worker{
  width:63%;
  margin-left: 18%;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
}
.worker span{
  font-size: 2em;
}
.workerItem{
  height:180px;
  width:44%;
  margin-top: 2%;
  box-shadow:3px 3px 3px 3px #aaaaaa;
  border-radius: 5px;
  display: flex;
  margin-left: 5%;
  background-color: #ffffff;
}
.workerImage{
  height:100px;
  width:100px;
  border-radius: 50%;
  border: 1px solid black;
  margin-left: 10%;
  margin-top: 5%;
}
.workInfo{
 height:90%;
  width:50%;
  margin-left: 4%;
  font-size: 1.5em;
  text-align: left;
  padding-top: 15px;
}
.mainPeople{
  font-size: 2em;
  margin-top: 3%;
  font-weight: bolder
}
.mainImage{
  width: 62%;
  margin-left: 19%;
  height:200px;
  margin-top: 5%;
  padding-bottom: 200px;
}
.i{
  height:200px;
  width:100%;
}
.i img{
  height:100%;
  width:18%;
  border: 1px solid red;
  float: left;
  margin-left: 3%;
}
.i img:first-child{
  margin-left: 9%;
}


  @media only screen and (max-width: 1366px) {
    .image input{
      text-indent: 120px;
      font-size: 1.5em;
    }
    .d{
      margin-left: 15px;
    }
    .item .itemText{
      font-size: 2em;
      margin-top: 2px;
      margin-left: 15px;
    }
    .right{
      margin-right: -5px;
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
      margin-top: 4%;
    }
    .serviceImage{
     width:80%;
      margin-left: 10%;
    }
    .more{
      display: inline-block;
      font-size: 1.5em;
      float: right;
      margin-right: 13%
    }
    .nc span:last-child{
      display: inline-block;
      margin-top: 5%;
      height:130px;
      overflow-y: scroll;
    }
    .select{
      margin-top: -12.2%;
      float: left;
      width:25%;
      margin-left: 5%;
    }
    .mainImage{
      width:70%;
      margin-left: 15%;
    }
  .i img{
    margin-left: 3%;
  }
  }
  @media only screen and (max-width: 768px) {
    .image{
      height:300px;
      width:100%;
      background-color: #80b2c3;
    }
    .lb{
      height:300px;
    }
    .select{
      margin-top: -5.8%;
      float: left;
      width:31%;
      margin-left: 5%;
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
      width:70%;
      margin-top:25%;
      position: absolute;
      margin-left: 15%;
    }
    .input input {
      width:90%;
      height:30px;
      padding:5px 5px;
      border-radius:30px;
      border: none;
      padding-left: 20px;
      line-height: 30px;
      font-size: 1.1em;
      text-indent: 40.3%;
    }
    .select{
      margin-top: -7.5%;
    }
    .right{
      display: inline-block;
      height: 100%;
      padding-right: 20px;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      font-size: 2em;
      width:60px;
      float: right;
      background-color: #009645;
      margin-top: -40px;
      line-height: 40px;
      margin-right: 1px;
    }
    .info{
      height:90px;
    }
    .item{
      height:80px;
      margin-top: 0px;
    }
    .item img{
      margin-left: 32%;
    }
    .item .itemText{
      font-size: 1em;
      margin-left: 20px;
    }
    .d{
      margin-left: 20px;
    }
    .serviceImage{
      width:90%;
      margin-left: 5%;
      display: flex;
      margin-top: 0px;
    }
    .serviceItem img{
      height:60%;
      width:80%;
    }
    .serviceImage ul li{
      float: left;
      margin-left: 13%;
      margin-top: 2%;
    }
    .fw{
      width:90%;
      margin-left: 5%;
    }
   .fwItem img{
     width:40%;
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
   }
   .js{
     line-height: 15px;
   }
   .newsItem{
     margin-top:3%;
     width:100%;
     margin-left: 0;
   }
   .newsTitle{
     margin-left: 21%;
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
      border: 1px solid black;
      margin-top: 26px;
      margin-left: 5%;
    }
    .workInfo{
      width:69%;
      font-size: 1.3em;
      text-align: left;
      margin-left: 10px;
      padding-top: 20px;
      height:100%;
      overflow-y: hidden;
    }
    .zd{
      font-size: 0.7em;
    }
    .mainImage{
      width:100%;
      margin-left: 0;
      padding-bottom:60px;
    }
    .x{
      height: 200px;
    }
    .i{
      height:100%;
      margin-left: -3%;
      margin-top: 0%;
    }
    .i img{
      height:40%;
      width:40%;
      margin-left: 9%;
      margin-top: 2%;
    }
  }
  @media only screen and (max-width: 435px){
    .header{
      margin-top: 30px;
      margin-left: 5%;
    }
    .item img{
      margin-left: 26%;
    }
    .item .itemText,.d{
      margin-left: 15px;
    }
    .image .input{
      height:40px;
      width:90%;
      margin-top:40%;
      position: absolute;
      margin-left: 5%;
    }
    .select{
      margin-top: -10.2%;
    }
    .input input {
     text-indent: 35%;
    }
    .serviceImage{
      margin-left: 10%;
    }
    .fwItem{
      margin-top: 0;
    }
    .fwItem img{
      height:20%;
    }
    .title{
      font-size: 1em;
    }
    .newsTitle{
      font-size: 1em;
      margin-left: 21%;
    }
    .w span{
      font-size: 1em;
    }
    .mainPeople{
      font-size: 1em;
    }
.newsItem{
  flex-direction: column;
}
.n{
  width:100%;
}
.more{
  margin-right:6%;
}
  }
  @media only screen and (max-width: 415px){
    .select{
           margin-top: -10.7%;
         }
    .serviceImage{
      margin-left: 8%;
    }
  }
  @media only screen and (max-width: 380px){
    .header{
      margin-left: 0;
    }
    .select{
      margin-top: -11.8%;
    }
    .input input {
      text-indent: 33.4%;
    }
    .serviceImage{
      margin-left: 6%;
    }
  }
  @media only screen and (max-width: 360px){
    .select{
      margin-top: -12.2%;
    }
    .serviceImage{
      margin-left: 4%;
    }
  }
  @media only screen and (max-width: 320px){
    .select{
      margin-top: -13.8%;
    }
    .serviceImage{
      margin-left: 0%;
    }
  }
</style>
