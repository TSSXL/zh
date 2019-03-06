<template>
  <div class="container">
    <el-row>
      <el-col  :xs="2" :sm="3"  :lg="3" :xl="3"><div class="aDiv" ></div></el-col>
      <el-col  :xs="2" :sm="3"  :lg="3" :xl="3"><div class="bg aDiv"  ></div></el-col>
      <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" href="" style="color:#6393ff;">首页</a></el-col>
      <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" href="">在线评估</a></el-col>
      <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" href="">新闻资讯</a></el-col>
      <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" href="">关于我们</a></el-col>
      <el-col  :xs="4" :sm="6"  :lg="6" :xl="6"><div class="aDiv"></div></el-col>
    </el-row>
     <div class="image">
       <div class="input">
         <input type="text" placeholder="请输入完整小区的名称">
         <span class="firstSpan"><a href="">选择城市</a>&nbsp;&nbsp;v <hr  class="hrStyle"></span>
         <span class="right"><a href="">评估</a></span>
       </div>
        <div class="dot">
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
     </div>
    <div class="info">
      <el-row>
        <el-col  :xs="2" :sm="3"  :lg="3" :xl="3"><div class="item"></div></el-col>
        <el-col  :xs="2" :sm="3"  :lg="3" :xl="3"><div class="item"></div></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/first.svg" alt=""><div class="itemText">60,000个</div><div class="itemText">评估项目</div></div></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/house.svg" alt=""><div class="itemText">1.2亿平方米</div><div class="itemText">建筑面积</div></div></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/tu.svg" alt=""><div class="itemText">60,000个</div><div class="itemText">土地面积</div></div></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><div class="item"><img src="../image/money.svg" alt=""><div class="itemText">1.9万亿元</div><div class="itemText">评估总值</div></div></el-col>
        <el-col  :xs="4" :sm="6"  :lg="6" :xl="6"><div class="item"></div></el-col>
      </el-row>
    </div>
    <div class="title">
      <span>服务理念</span>
      <div class="serviceImage">
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
     <div class="title">
       <span>业务范围</span>
       <div class="fw">
         <div class="fwItem">
           <span>非法定估价</span>
           <img src="../image/first.svg" alt="">
         </div>
         <div class="fwItem two">
           <span>法定估价</span>
           <img src="../image/first.svg" alt="">
         </div>
       </div>
       <div class="fw" style="margin-top: 0;">
         <div class="fwItem">
           <span>非法定估价</span>
           <img src="../image/first.svg" alt="">
         </div>
         <div class="fwItem two">
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
    <div class="news">
     <span class="newsTitle">新闻资讯</span>
      <div class="newsItem">
        <span class="newsLittleTitle">标题标题标题标题</span>
        <span class="newsContent">新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容</span>
        <img src="../image/first.svg" alt="">
      </div>
      <div class="newsItem" style="margin-top: 1%;">
        <span class="newsLittleTitle">标题标题标题标题</span>
        <span class="newsContent">新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容</span>
        <img src="../image/first.svg" alt="">
      </div>
      <div class="newsItem" style="margin-top: 1%;">
        <span class="newsLittleTitle">标题标题标题标题</span>
        <span class="newsContent">新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容新闻内容新闻内容</span>
        <img src="../image/first.svg" alt="">
      </div>
    </div>
     <span class="more"><a href="">更多 >></a></span>
   <div style="font-size: 2em;">员工风采</div>
    <div class="worker">
      <div class="workerItem">
        <div class="workerImage"></div>
        <div class="workInfo">
          <p>曹亦中</p>
          <p>介绍即使世界顶级撒交代就是第几啊基督教大海生地哈师大uiddiasdjasj的计算机等级啊是</p>
        </div>
      </div>
      <div class="workerItem second"></div>
    </div>
    <div class="mainPeople">重要客户</div>
      <div class="mainImage">
        <div class="spanImage"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .container{
    width:98%;
    margin: 0.5% 1%;
    border: 1px solid black;
  }
  .bg{
    background-color: #91C4D5;
  }
    .aDiv {
      height: 4rem;
      font-size: 1.5em;
      line-height: 4rem;
      display: block;
    }
    a {
      text-decoration: none;
      color: black;
    }
    a:active {
      color: #6393ff;
    }
    .image {
      height: 400px;
      width: 100%;
      background-color: #80b2c3;
    }
    .image .input {
      height: 60px;
      width: 30%;
      margin-top: 15rem;
      position: absolute;
      margin-left: 35%;
      color: #606060;
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
  .firstSpan{
    display: inline-block;
    height:30px;
    font-size: 2em;
    float: left;
    margin-top: -40px;
    letter-spacing: 5px;
    margin-left: 30px;
  }
  .hrStyle{
    height:30px;
    width:1px;
    float: right;
    margin-top: -27px;
    margin-right: -5px;
    background-color: black
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
    .dot{
      height:30px;
      width:50%;
      position: absolute;
      margin-top: 18%;
      margin-left: 32%;
    }
    .dot ul{
      text-decoration: none;
      list-style: none;
      width:50%;
      height:100%;
      display: inline-block;
      margin-top: 0px;
    }
  .dot ul li {
    float: left;
    margin-left: 30px;
  }
  .dot ul li a{
    display: inline-block;
    height:15px;
    width:15px;
    background-color: white;
    border-radius: 50%;

  }
.dot ul li a:active{
  background-color: blueviolet;
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
.two span{
  float: right;
}
.two img{
  float: left;
}
.js{
  width:100%;
}
.msg{
  margin-top: 2%;
  width:100%;
  background-color: #A6A9AA;
  padding-top: 40px;
}
.msgText{
  width:60%;
  margin-left: 20%;
  text-align: left;
  color:white;
  padding-bottom: 20px;
}
.jsTwo{
  width:40%;
}
.news{
  width:80%;
  margin-left: 10%;
  margin-top: 6%;
  padding-bottom: 20px;
}
.newsTitle{
  font-size: 1.5em;
  margin-left: -84%;
}
.newsItem{
  width:88%;
  background-color: #E8E8E8;
  margin-top: 5%;
  margin-left: 6%;
  text-align: left;
  padding-bottom: 50px;
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
  padding-bottom: 10px;
  display: flex;
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
}
.second{
  margin-left: 10.7%;
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
 height:100%;
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
  width:70%;
  margin-left: 15%;
  height:200px;
  border: 1px solid black;
  margin-top: 3%;
}
.spanImage{
  height: 100%;
  width:90%;
  margin-left: 5%;
  background-color: red;
}


  @media only screen and (max-width: 1366px) {
    .image input{
      text-indent: 120px;
      font-size: 1.5em;
    }
    .firstSpan{
      font-size: 1.5em;
      letter-spacing: 2px;
    }
    .right{
      margin-right: -5px;
    }
    .dot{
      margin-top: 25%;
      margin-left: 30%;
    }
    .hrStyle{
      margin-top: -24px;
    }
    .jsTwo{
      width:50%;
    }
    .newsTitle{
      margin-left: -83%;
    }
    .newsContent{
      overflow-y: scroll;
      margin-top: 9%;
    }
    .more{
      margin-left: 66%;
    }
  }
  @media only screen and (max-width: 768px) {
    .aDiv{
      height:40px;
      line-height: 40px;
      font-size: 1em;
    }
    .bg{
      background-color: white;
    }
    .image{
      height:300px;
      width:100%;
      background-color: #80b2c3;
    }
    .image .input{
      height:40px;
      width:90%;
      margin-top:12rem;
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
      font-size: 1.3em;
      text-indent: 90px;
    }
    .firstSpan{
      display: inline-block;
      height:30px;
      font-size: 1.5em;
      float: left;
      letter-spacing: 0.5px;
      margin-left: 20px;
      margin-top: -30px;
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
    .dot{
      margin-top: 260px;
      margin-left: 20%;
    }
    .dot ul{
      text-decoration: none;
      list-style: none;
      width:100%;
      height:100%;
      display: inline-block;
    }
    .dot ul li a{
      display: inline-block;
      height:10px;
      width:10px;
      background-color: white;
      border-radius: 50%;
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
    .hrStyle{
      margin-top: -23px;
    }
    .serviceImage{
      height:100px;
      width:60%;
      margin-left: 20%;
      display: flex;
      margin-top: 0px;
    }
    .serviceItem img{
      height:60%;
      width:80%;
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
     line-height: 45px;
   }
   .msg{
     margin-top: 8%;
   }
   .msgText{
     width:80%;
     margin-left: 10%;
     font-size: 0.7em;
   }
   .newsItem{
     height:120px;
     margin-top: 12%;
   }
    .newsTitle{
      margin-left: -69%;
    }
    .newsLittleTitle{
      height:40px;
      width:55%;
      background-color: white;
      float: left;
      margin-top:7%;
      line-height: 40px;
      font-size: 1.5em;
    }
    .newsContent{
      display: inline-block;
      width:55%;
      float: left;
      margin-top: 25%;
      height:86px;
      margin-left: -55%;
      padding-bottom: 10px;
      font-size: 0.5em;
      overflow-y: scroll;
    }
    .newsItem img{
      height:100px;
      width:100px;
      float: right;
      margin-top: -61%;
    }
    .more{
      margin-left: 55%;
    }
    .workerItem{
      display:block;
    }
    .workerImage{
      height:50px;
      width:50px;
      border-radius: 50%;
      border: 1px solid black;
      margin-left: 30%;
      margin-top: 10px;
    }
    .workInfo{
      width:100%;
      height:120px;
      font-size: 1.3em;
      text-align: left;
      margin-left: 0;
      overflow-y: scroll;
      margin-top: -10px;
    }
    .mainPeople{
      margin-left: -50%;
    }
  }


</style>
