<template>
  <div class="hel">
   <Head-Component></Head-Component>
     <div class="image">
       <div class="lb">
         <el-carousel height="400px" class="carousel"  trigger="click"  :loop="true">
           <el-carousel-item v-for="item in imageList" :key="item">
             <img :src="item" alt="背景图" style="height:400px;width:100%;">
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
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/first.svg" alt=""><div class="itemText">60,000个</div><div class="itemText">评估项目</div></div></el-col>
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/house.svg" alt=""><div class="itemText">1.2亿平方米</div><div class="itemText">建筑面积</div></div></el-col>
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/tu.svg" alt=""><div class="itemText">60,000个</div><div class="itemText">土地面积</div></div></el-col>
        <el-col  :xs="6" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/money.svg" alt=""><div class="itemText">1.9万亿元</div><div class="itemText">评估总值</div></div></el-col>
        <el-col  :xs="0" :sm="6"  :lg="6" :xl="6"><div class="item"></div></el-col>
      </el-row>
    </div>
    <div class="title">
      <span>服务理念</span>
      <div class="serviceImage" style="background-color: #e8e8e8;">
       <div class="serviceItem">
         <img src="../image/first.svg" alt="">
         <div class="serviceText">公正</div>
       </div>
        <div class="serviceItem">
          <img src="../image/tu.svg" alt="">
        <div class="serviceText">严谨</div>
        </div>
        <div class="serviceItem">
          <img src="../image/house.svg" alt="">
          <div class="serviceText">专注</div>
        </div>
        <div class="serviceItem">
          <img src="../image/money.svg" alt="">
          <div class="serviceText">创新</div>
        </div>
      </div>
      </div>
     <div class="title" >
       <span>业务范围</span>
       <div class="fw" style="background-color: #e8e8e8;">
         <div class="fwItem">
           <span>非法定估价</span>
           <img src="../image/first.svg" alt="">
         </div>
         <div class="fwItem">
           <span>法定估价</span>
           <img src="../image/first.svg" alt="">
         </div>
         <div class="fwItem">
           <span>法定估价</span>
           <img src="../image/first.svg" alt="">
         </div>
         <div class="fwItem">
           <span>法定估价</span>
           <img src="../image/first.svg" alt="">
         </div>
       </div>
     </div>
    <div class="title js">
      <span>技术力量</span>
      <div class="msg">
        <div class="msgText">估价师例会制度</div>
        <div class="msgText jsTwo">大师的坏事回答啊倒萨的哈啥护士都哈刷书的哈四大行速度撒红灯大大师的坏事回答啊倒萨的哈啥护士都哈刷书的哈四大行速度撒红灯大大师的坏事回答啊倒萨是的哈说的话黑暗神殿回答的哈啥护士都哈刷书的哈四大行速度撒红灯大大师的坏事回答啊倒萨是的哈说的话黑暗神殿回答</div>
      </div>
    </div>
    <div class="news" >
     <span class="newsTitle">新闻资讯</span>
      <div class="newsItem">
        <span class="newsLittleTitle">标题标题标题标题</span>
        <span class="newsContent">闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容</span>
        <img src="../image/first.svg" alt="">
      </div>
      <div class="newsItem" style="margin-top: 1%;">
        <span class="newsLittleTitle">标题标题标题标题</span>
        <span class="newsContent">新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容</span>
        <img src="../image/first.svg" alt="">
      </div>
      <div class="newsItem" style="margin-top: 1%;">
        <span class="newsLittleTitle">标题标题标题标题</span>
        <span class="newsContent">内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容</span>
        <img src="../image/first.svg" alt="">
      </div>
    </div>
     <span class="more"><a href="">更多 >></a></span>
   <div style="font-size: 2em;">员工风采</div>
    <div class="worker" style="background-color: #e8e8e8;" >
      <div class="workerItem">
        <div class="workerImage"></div>
        <div class="workInfo">
          <p>曹亦中</p>
          <p>啊基督教大海生地哈师大uiddiasdjasj的计算机等级啊是</p>
        </div>
      </div>
      <div class="workerItem"></div>
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
        require("../image/zero.jpg"),
        require("../image/first.jpg"),
        require("../image/two.jpg"),
        require("../image/three.jpg"),
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
    height:400px;
    width:100%;
  }
    a {
      text-decoration: none;
      color: black;
    }
    .image {
      height: 400px;
      width: 100%;
        background-color: #80b2c3;
      position: relative;
    }
    .lb{
      height:400px;
      width:100%;
      position: absolute;
      z-index: 0;
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
    background-color: #2199FF;
    margin-top: -58px;
    line-height: 60px;
    margin-right: 1px;
  }
    .info {
      height: 120px;
      width: 100%;
      background-color: #60b2fd;
    }
.item{
  display: flex;
  height:120px;
  flex-direction: column;
}
.item img{
  height:60px;
  width:60px;
  margin-left: 37%;
  margin-top: 5px;
}
.item .itemText{
  font-size: 1.5em;
  margin-top: 5px;
  color:white;
}
.title{
  width:100%;
  margin-top: 6%;
  line-height: 30px;
  font-size: 2em;
}
.serviceImage{
  height:160px;
  width:60%;
  margin-left: 20%;
  margin-top: 30px;
  display: flex;

}
.serviceItem{
  height:100%;
  width:20%;
  margin-left: 4%;
}
.serviceItem img{
  height:80%;
  width:80%;
}
.serviceText{
  line-height: 10px;
}
.fw{
  width:60%;
  margin-left: 20%;
  margin-top: 6%;
}
.fwItem{
  width:100%;
  height:200px;
}
.fwItem span{
  display: inline-block;
   width:45%;
  height:100%;
  float: left;
  line-height: 100px;
}
.fwItem img{
  width:45%;
  height:100%;
  float: right;
}
.js{
  width:100%;
}
.msg{
  margin-top: 2%;
  width:100%;
  background-color: #A6A9AA;
  padding-top: 40px;
  color:white;
}
.msgText{
  width:60%;
  margin-left: 20%;
  text-align: left;
  color:white;
  padding-bottom: 20px;
  letter-spacing: 1px;
}
.jsTwo{
  width:40%;
}
.news{
  width:80%;
  margin-left: 10%;
  margin-top: 6%;
  padding-bottom: 10px;
}
.newsTitle{
  font-size: 2em;
  margin-left: -83%;
}
.newsItem{
  width:88%;
  background-color: #E8E8E8;
  margin-top: 5%;
  margin-left: 6%;
  text-align: left;
  padding-bottom: 50px;
  letter-spacing: 3px;
}
.newsLittleTitle{
  display: inline-block;
  height:40px;
  width:40%;
  background-color: white;
  float: left;
  margin-top:3%;
  line-height: 40px;
  font-size: 1.5em;
  margin-left: 5px;
}
.newsContent{
  display: inline-block;
  width:60%;
  float: left;
  margin-top: 7%;
  height:120px;
  margin-left: -40%;
  padding-bottom: 10px;
  font-size: 1.3em;
}
.newsItem img{
  margin-left: 15%;
  margin-top: 2%;
  background-color: wheat;
}
.more{
  display: inline-block;
  margin-left: 67%;
  font-size: 1.5em;
}
.more a{
  color:blue;
}
.worker{
  width:71%;
  margin-top: 5%;
  margin-left: 14.6%;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}
.worker span{
  font-size: 2em;
}
.workerItem{
  height:180px;
  width:42%;
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
  margin-left: -67%;
  margin-top: 6%;
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
    .right{
      margin-right: -5px;
    }
    .select{
      margin-top: -12.2%;
      float: left;
      width:25%;
      margin-left: 5%;
    }
    .jsTwo{
      width:50%;
    }
    .newsTitle{
      margin-left: -83%;
    }
    .newsContent{
      margin-top: 9%;
    }
    .more{
      margin-left: 66%;
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
      width:90%;
      margin-top:30%;
      position: absolute;
      margin-left: 5%;
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
    .right{
      display: inline-block;
      height: 100%;
      padding-right: 20px;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      font-size: 2em;
      width:60px;
      float: right;
      background-color: #2199FF;
      margin-top: -40px;
      line-height: 40px;
      margin-right: 1px;
    }
    .info{
      height:90px;
    }
    .item{
      height:80px;
    }
    .item img{
      height:30px;
      width:30px;
      margin-left: 36%;
    }
    .item .itemText{
        font-size: 1em;
      margin-top: 0;
      height:30px;
      width:100px;
      margin-left: -10px;
    }
    .serviceImage{
      height:100px;
      width:90%;
      margin-left: 5%;
      display: flex;
      margin-top: 0px;
    }
    .serviceItem img{
      height:60%;
      width:80%;
    }
    .fw{
      width:90%;
      margin-left: 5%;
    }
   .fwItem{
     height:120px;
   }
   .fwItem img{
     height:60%;
   }
   .fwItem span{
     width:50%;
     font-size: 0.8em;
     line-height: 68px;
   }
   .msg{
     margin-top: 8%;
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
     height:120px;
     margin-top: 12%;
   }
   .news{
     width:90%;
     margin-left: 5%;
   }
    .newsTitle{
      margin-left: -69%;
    }
    .newsItem{
      margin-top: 3%;
    }
    .newsLittleTitle{
      height:40px;
      width:55%;
      background-color: white;
      float: left;
      margin-top:2%;
      line-height: 40px;
      font-size: 1.5em;
    }
    .newsContent{
      display: inline-block;
      width:48%;
      height:75px;
      padding-bottom: 10px;
      font-size: 0.5em;
      overflow-y: hidden;
      border: 1px solid black;
      position: absolute;
      margin-left: -43.5%;
      margin-top: 8%;
      float: left;
    }
    .newsItem img{
      height:100px;
      width:30%;
      float: right;
      margin-top: 5%;
      border: 1px solid black;
      margin-left: 0%;
      margin-right: 2%;
    }
    .more{
      margin-left: 66%;
    }
    .worker{
      display: flex;
      flex-direction: column;
      width:80%;
      margin-left: 10%;
    }
    .workerItem{
      display: flex;
      height:100px;
      width:96%;
      margin-top: 10px;
      margin-left: 2%;
    }
    .workerImage{
      height:80px;
      width:80px;
      border-radius: 50%;
      border: 1px solid black;
      margin-top: 10px;
      margin-left: 5%;
    }
    .workInfo{
      width:69%;
      font-size: 1.3em;
      text-align: left;
      margin-left: 10px;
      padding-top: 0;
      height:100%;
      overflow-y: hidden;
    }
    .mainPeople{
      margin-left: -55%;
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
    .select{
      margin-top: -10.2%;
    }
    .input input {
     text-indent: 35%;
    }
    .newsLittleTitle{
      height:40px;
      width:55%;
      background-color: white;
      float: left;
      margin-top:3%;
      line-height: 40px;
      font-size: 1.5em;
    }
    .newsContent{
      display: inline-block;
      width:48%;
      height:75px;
      padding-bottom: 10px;
      font-size: 0.5em;
      overflow-y: hidden;
      border: 1px solid black;
      position: absolute;
      margin-left: -43.5%;
      margin-top: 15%;
      float: left;
    }
    .newsItem img{
      height:100px;
      width:30%;
      float: right;
      margin-top: 5%;
      border: 1px solid black;
      margin-left: 0%;
      margin-right: 2%;
    }
  }
  @media only screen and (max-width: 415px){
    .select{
      margin-top: -10.8%;
    }
  }
  @media only screen and (max-width: 380px){
    .select{
      margin-top: -11.8%;
    }
    .input input {
      text-indent: 33.4%;
    }
    .newsLittleTitle{
      height:40px;
      width:55%;
      background-color: white;
      float: left;
      margin-top:6%;
      line-height: 40px;
      font-size: 1.5em;
    }
    .newsContent{
      display: inline-block;
      width:48%;
      height:75px;
      padding-bottom: 10px;
      font-size: 0.5em;
      overflow-y: hidden;
      border: 1px solid black;
      position: absolute;
      margin-left: -43.5%;
      margin-top: 18%;
      float: left;
    }
    .newsItem img{
      height:100px;
      width:35%;
      float: right;
      margin-top: 5%;
      border: 1px solid black;
      margin-left: 0%;
      margin-right: 2%;
    }
  }
  @media only screen and (max-width: 360px){
    .select{
      margin-top: -12.2%;
    }
  }
  @media only screen and (max-width: 320px){
    .select{
      margin-top: -13.8%;
    }
  }
</style>
