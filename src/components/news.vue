<template>
    <div class="news">
      <NavComponent class="navComponent"></NavComponent>
      <img src="../image/divider.png" alt="" style="height:60px;width:100%;">
      <div class="title">
        <ul>
          <!--<li><el-button type="danger">全部</el-button></li>-->
          <!--<li><el-button>公司新闻</el-button></li>-->
          <!--<li><el-button>行业状态</el-button></li>-->
          <li>
            <button>全部</button>
          </li>
          <li>
            <button>公司新闻</button>
          </li>
          <li>
            <button>行业状态</button>
          </li>
        </ul>
      </div>
       <div class="a">
       <div class="item">
         <span @click="gotoInfo"></span>
         <div class="m">
           <p>新闻标题</p>
           <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</p>
         </div>
       </div>
         <div class="item">
           <span></span>
           <div class="m">
             <p>新闻标题</p>
             <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</p>
           </div>
         </div>
         <div class="item">
           <span></span>
           <div class="m">
             <p>新闻标题</p>
             <p>新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</p>
           </div>
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
  import NavComponent from './nav'
  import FootComponent from './foot'
    export default {
        name: "news",
      components:{
        NavComponent,
        FootComponent
      },
      methods:{
        gotoInfo(){
          this.$router.push({path:'/info'})
        }
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
        button{
          width:88px;
          height:36px;
          background:white;
          border-radius:10px;
          border: 1px solid red;
          color:red
        }
      }
      li:active{
        button{
          background-color: rgba(234,61,63,1);
          color:white;
        }
      }
    }
  }
    .a{
      width:70%;
      margin-left: 17.2%;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .item{
        width:46%;
        margin-left: 4%;
        margin-top: 4%;
        display: flex;
        flex-direction: row;
        padding-bottom: 30px;
        span{
          display: inline-block;
          height:200px;
          width:40%;
          background-color: blue;
          border-radius: 6%;
        }
        span:hover{
          cursor: pointer;
        }
        .m{
          margin-left: 4%;
          width:55%;
          height:200px;
          p:first-child{
            font-size: 2em;
            font-weight: bolder;
          }
          p:last-child{
            height:150px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            line-height: 25px;
            color:#808080;
          }
          p{
            text-align: left;
            margin-top: 0px;
            font-size: 1.5em;
          }
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
       margin-left: 13%;
     }
    }
  }
  @media only screen and (max-width: 768px) {
    .navComponent{
      margin-top: 0;
    }
    .title{
      height:60px;
      padding-bottom: 20px;
      ul{
        width:95%;
        height:40px;
        margin-top: 8%;
        margin-left: 13%;
        li{
          margin-left: 30px;
        }
      }
    }
    .a{
      width:80%;
      margin-left: 10%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      .item{
        width:70%;
        margin-left: 15%;
        margin-top: 8%;
        display: flex;
        flex-direction: row;
        padding-bottom: 30px;
        height: 200px;
        span{
          display: inline-block;
          height:100%;
          width:40%;
          background-color: blue;
          border-radius: 6%;
        }
        .m{
          margin-left: 4%;
          width:60%;
          height:100%;
          p:first-child{
            font-size: 2em;
            font-weight: bolder;
          }
          p:last-child{
            height:72%;
            line-height: 25px;
          }
          p{
            text-align: left;
            margin-top: 0px;
            font-size: 1.5em;
          }
        }
      }
    }
    .footCom{
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 450px) {
    .navComponent{
      margin-top: 60px;
    }
    .title{
      height:60px;
      ul{
        width:88%;
        height:40px;
        margin-top: 4%;
        margin-left: 0;
        li{
          margin-left: 25px;
        }
      }
    }
    .a{
      width:90%;
      margin-left: 5%;
      margin-top: 0;
      .item{
        width:100%;
        margin-left:0%;
        margin-top: 4%;
        height: 120px;
        .m{
          margin-left: 4%;
          width:60%;
          height:100%;
          p:first-child{
            font-size: 1.5em;
            font-weight: bolder;
          }
          p:last-child{
            height:60%;
            width:92%;
            line-height: 18px;
            -webkit-line-clamp: 4;
          }
          p{
            font-size: 1em;
          }
        }
      }
    }
    .footCom{
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 415px) {
    .title{
      ul{
        width:88%;
        height:40px;
        margin-top: 4%;
        margin-left: -10px;
        li{
          margin-left: 25px;
        }
      }
    }
  }
  @media only screen and (max-width: 380px) {
    .title{
      ul{
        width:88%;
        height:40px;
        margin-top: 4%;
        margin-left: -10px;
        li{
          margin-left: 15px;
        }
      }
    }
    .a{
      .item{
 .m{
   p:last-child{
     width:90%;
   }
 }
      }
    }
  }
  @media only screen and (max-width: 360px) {
    .title{
      ul{
        li{
          margin-left: 10px;
        }
      }
    }
    .a{
      .item{
        .m{
          p:last-child{
            width:93%;
          }
        }
      }
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
    .a{
      .item{
        .m{
          p:last-child{
            width:90%;
          }
        }
      }
    }
  }
}
</style>
