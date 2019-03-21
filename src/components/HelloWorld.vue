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
      <ul>
        <li><img src="../image/evaluation_project.png" alt="">
          <p>评估项目</p>
          <hr>
          <p>600</p>
          <p>(个)</p>
        </li>
        <li><img src="../image/construction_area.png" alt="">
          <p>建筑面积</p>
          <hr>
          <p>4.2亿</p>
          <p>(平方米)</p>
        </li>
        <li><img src="../image/land_area.png" alt="">
          <p>土地面积</p>
          <hr>
          <p>1.1亿</p>
          <p>(平方米)</p>
        </li>
        <li><img src="../image/total_cost_assessment.png" alt="">
          <p>评估总值</p>
          <hr>
          <p>128万亿</p>
          <p>(元)</p>
        </li>
      </ul>
    </div>
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
     <div class="title" >
       <span class="q" style="font-weight: bolder">业务范围</span>
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
      <span class="q" style="font-weight: bolder">技术力量</span>
      <div class="msg">
        <div class="msgText zd">估价师例会制度</div>
        <div class="msgText">大师的坏事回答啊倒萨的哈啥护士都哈刷书的哈四大行速度撒红灯大大师的坏事回答啊</div>
      </div>
    </div>
    <div class="news" >
     <span class="newsTitle q" style="font-weight: bolder">新闻资讯</span>
      <span class="more"><a href="">更多 >></a></span>
      <div class="newsItem">
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
          </div>
        </div>
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
          </div>
        </div>
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
          </div>
        </div>
        <div class="n">
          <img src="../image/first.jpg" alt="">
          <div class="nc">
            <span>新闻标题</span>
            <span>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</span>
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
    <div class="mainPeople q">重要客户</div>
      <div class="mainImage">
        <el-carousel height="300px" class="x"  trigger="click"  :loop="true">
          <el-carousel-item v-for="item in peopleList" :key="item">
              <img class="xImg" :src="item" alt="" style="width:80%;">
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
      peopleList:[
        require("../image/first.jpg")
      ],
      category:1,
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
    showLoading(){
      console.log("555")
    }
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
  margin-top:0px;
}
    .image .input {
      height: 50px;
      width: 40%;
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
      text-indent: 30%;
      font-size: 1.8em;
    }
    .q{
      font-size: 22px;
    }
    .select{
      margin-top: 0.8%;
      position: absolute;
      width:15%;
     margin-left: -80%;
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
.fwLeft span:first-child{
  font-weight: bolder;
  letter-spacing: 2px;
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
  background-size: 100% 100%;
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
  font-size: 18px;
  color:black
}
.news{
  width:80%;
  margin-left: 10%;
  margin-top: 3%;
}
.newsTitle{
  font-size: 22px;
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
  font-size: 22px;
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
   width:40%;
   margin-left: 4%;
   font-size: 1.5em;
   text-align: left;
   padding-top: 10px;
 }
.tzCon{
  margin-top: -1rem;
  font-size: 0.9em;
  letter-spacing: 2px;
  color:#808080;
}
.tz{
  display: flex;
  flex-direction: row;
  width:50%;
}
.tz p:first-child{
  font-size: 1.2em;
  color:black;
  font-weight: bolder;
}
.tz p:last-child{
  font-size: 10px;
  line-height: 40px;
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
}
  @media only screen and (max-width: 1366px) {
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
    .mainImage{
      width:70%;
      margin-left: 15%;
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
      font-size: 1.1em;
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
      border: 1px solid black;
      margin-top: 25px;
      margin-left: 5%;
    }
    .workInfo{
      width:69%;
      font-size: 1.22px;
      text-align: left;
      margin-left: 10px;
      padding-top: 20px;
      height:90%;
      overflow-y: hidden;
    }
    .tz p:last-child{
      line-height: 30px;
    }
    .tzCon{
      margin-top: -0.5rem;
    }
    .zd{
      font-size: 1.5em;
      font-weight: bolder;
      letter-spacing: 1px;
    }
    .mainImage{
      width:100%;
      margin-left: 0;
      padding-bottom:60px;
    }
  }
  @media only screen and (max-width: 435px){
    .header{
     margin-top: 0%;
    }
    .info ul li{
      float: left;
      width:18%;
      margin-left: 4%;
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
     margin-left: -15%;
    }
    .serviceImage ul li img{
      height:180px;
      width:150px;
    }
    .serviceImage ul li{
      margin-left: 20%;
    }
    .input input {
     text-indent: 35%;
    }
    .fwItem{
      margin-top: 0;
    }
    .fwItem img{
      height:120px;
      margin-top: 20px;
    }
    .q{
      font-size: 2em;
    }
    .title{
      font-size: 1em;
    }
    .js span{
      margin-top: 20px;
    }
    .newsTitle{
      font-size:2em;
      margin-left: 16%;
    }
    .w span{
      font-size: 2em;
    }
    .mainPeople{
      font-size: 2em;
    }
    .nc span:last-child{
      line-height: 15px;
      height: 105px;
    }
.newsItem{
  flex-direction: column;
}
.n{
  width:100%;
}
    .tz p:last-child{
      line-height: 23px;
    }
    .workInfo{
      width:50%;
      padding-top: 15px;
    }
    .tzCon{
      letter-spacing: 2px;
    }
  }
  @media only screen and (max-width: 415px){
    .select{
      width:30%;
    }
    .serviceImage ul{
      margin-left: -17%;
    }
    .newsTitle{
      margin-left: 18%;
    }
  }
  @media only screen and (max-width: 380px){
    .serviceImage ul{
      margin-left: -20%;
    }
    .info ul li{
      float: left;
      width:20%;
      margin-left: 2.5%;
    }
    .newsTitle{
      margin-left: 19%;
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
    .input input{
      text-indent: 36%;
    }
    .serviceImage ul{
         margin-left: -21%;
       }
    .nc span:last-child{
      width:82%;
      height:120px;
      -webkit-line-clamp: 8;
    }
    .fwItem img{
      margin-top: 15px;
    }
  }
  @media only screen and (max-width: 320px){
    .input input{
      text-indent: 39%;
    }
    .info ul{
      margin-left: -8%;
    }
    .info ul li{
      float: left;
      width:24%;
      margin-left:0%;
    }
    .select{
      width:35%;
    }
    .serviceImage ul{
      margin-left: -26%;
    }
    .serviceImage ul li{
      margin-left: 22%;
    }
    .workInfo{
      width:55%;
    }
    .newsTitle{
      margin-left:22%;
    }
  }
</style>
