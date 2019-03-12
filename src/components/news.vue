<template>
    <div class="news">
      <Head-Component></Head-Component>
      <div class="title">
        <ul>
          <li><el-button type="primary">全部</el-button></li>
          <li><el-button>公司新闻</el-button></li>
          <li><el-button>行业状态</el-button></li>
        </ul>
      </div>
      <div class="newsContent">
       <div class="leftNews">
         <div class="leftNewsTitle">我是标题</div>
         <div class="leftNewsCon">我是内容</div>
       </div>
        <div class="rightImage">
          <img src="../image/tu.svg" alt="">
        </div>
      </div>
      <div class="newsContent">
        <div class="leftNews">
          <div class="leftNewsTitle">我是标题</div>
          <div class="leftNewsCon">我是内容</div>
        </div>
        <div class="rightImage">
          <img src="../image/tu.svg" alt="">
        </div>
      </div>
      <div class="newsContent">
        <div class="leftNews">
          <div class="leftNewsTitle">我是标题</div>
          <div class="leftNewsCon">我是内容</div>
        </div>
        <div class="rightImage">
          <img src="../image/tu.svg" alt="">
        </div>
      </div>
      <div class="newsContent">
        <div class="leftNews">
          <div class="leftNewsTitle">我是标题</div>
          <div class="leftNewsCon">我是内容</div>
        </div>
        <div class="rightImage">
          <img src="../image/tu.svg" alt="">
        </div>
      </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          small
        style="margin-top: 20px;">
        </el-pagination>
      <Foot-Component class="footCom" ></Foot-Component>
    </div>
</template>

<script>
  import HeadComponent from './mayBe'
  import FootComponent from './foot'
    export default {
        name: "news",
      components:{
        HeadComponent,
        FootComponent
      }
    }
</script>

<style lang="scss" scoped>
.news{
  width:100%;
  .title{
    width:100%;
    height:150px;
    border-top: 1px solid #EFEFEF;
    ul{
      width:30%;
      height:60px;
      list-style: none;
      margin-top: 5%;
      margin-left: 15%;
      li{
        float: left;
        margin-left: 60px;
      }
    }
  }
  .newsContent{
    width:60%;
    height:200px;
    margin-left: 20%;
    background-color: #E8E8E8;
    margin-top: 10px;
    display:flex;
    .leftNews{
      height:100%;
      width:60%;
      .leftNewsTitle{
        width:60%;
        height:30px;
        background-color: white;
        margin-top: 4%;
        margin-left: 2%;
        line-height: 30px;
        font-size: 2em;
        text-align: left;
        letter-spacing: 1px;
      }
      .leftNewsCon{
        width:90%;
        margin-top: 2%;
        height:120px;
        margin-left: 2%;
        line-height: 30px;
        font-size: 1em;
        text-align: left;
        letter-spacing: 1px;
        background-color: #afd4f6;
      }
    }
    .rightImage{
      width:30%;
      margin-left: 10%;
      img{
        width:100%;
        height:200px;
      }
    }
  }
  .footCom{
    margin-top: 100px;
  }

  @media only screen and (max-width: 1366px){
    .title{
     ul{
       width:40%;
     }
    }
  }
  @media only screen and (max-width: 768px) {
    .title{
      height:60px;
      padding-bottom: 20px;
      ul{
        width:95%;
        height:40px;
        margin-top: 8%;
        margin-left: 0;
        li{
          margin-left: 10px;
        }
      }
    }
    .newsContent{
      width:95%;
      margin-left: 2.5%;
      height:140px;
      margin-top: 30px;
      .leftNews{
        .leftNewsTitle{
          width:60%;
          height:30px;
          background-color: white;
          margin-top: 2%;
          margin-left: 2%;
          line-height: 30px;
          font-size: 1em;
          text-align: left;
        }
        .leftNewsCon{
          width:90%;
          height:80px;
          margin-top: 2%;
          margin-left: 2%;
          line-height: 20px;
          font-size: 1em;
          text-align: left;
        }
      }
      .rightImage{
        width:35%;
        margin-left: 5%;
        img{
          width:100%;
          height:120px;
        }
      }
    }
    .footCom{
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 450px) {
    .title{
      height:60px;
      ul{
        width:88%;
        height:40px;
        margin-top: 8%;
        margin-left: 0;
        li{
          margin-left: 10px;
        }
      }
    }
    .newsContent{
      width:95%;
      margin-left: 2.5%;
      height:120px;
      margin-top: 30px;
      .leftNews{
        .leftNewsTitle{
          width:80%;
          height:30px;
          background-color: white;
          margin-top: 5%;
          margin-left: 2%;
          line-height: 30px;
          font-size: 1em;
          text-align: left;
        }
        .leftNewsCon{
          width:100%;
          margin-top: 3%;
          margin-left: 2%;
          line-height: 50px;
          height:65px;
          font-size: 1em;
          text-align: left;
        }
      }
      .rightImage{
        width:35%;
        margin-left: 5%;
        img{
          width:100%;
          height:120px;
        }
      }
    }
    .footCom{
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 320px) {
    .title{
      height:60px;
      ul{
        width:87%;
        height:40px;
        margin-top: 8%;
        margin-left: 0;
        li:first-child{
          margin-left: -10%;
        }
        li{
          margin-left:15px;
        }
      }
    }
    .newsContent{
      margin-top: 15px;
    }
  }
}
</style>
