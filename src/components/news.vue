<template>
    <div class="news">
      <NavComponent class="navComponent" num="3"></NavComponent>
      <img src="../image/divider.png" alt="" style="height:40px;width:100%;">
      <div class="title">
        <ul>
          <li>
            <button  @click="allNews" v-if="num">全部</button>
            <button style="background-color: rgba(234,61,63,1);color:#ffffff" @click="allNews" v-else>全部</button>
          </li>
          <li>
            <button  @click="comNews" v-if="numTwo">公司新闻</button>
            <button style="background-color: rgba(234,61,63,1);color:#ffffff" @click="comNews" v-else>公司新闻</button>
          </li>
          <li>
            <button  @click="hyStatus" v-if="numThree">行业状态</button>
            <button style="background-color: rgba(234,61,63,1);color:#ffffff"  @click="hyStatus" v-else>行业状态</button>
          </li>
        </ul>
      </div>
       <div class="a">
       <div class="item" v-for="item in newsList">
         <img :src="item.ImgPath" @click="gotoInfo(item.Contexts,item.Category)" alt="后台无图片">
         <div class="m">
           <p>{{item.Title}}</p>
           <p>{{item.Summary}}</p>
         </div>
       </div>

       </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="totalPage"
          @current-change="changePage"
          :current-page="Page"
          small
          style="margin-top: 20px;">
        </el-pagination>
      <div class="kb"></div>
      <Foot-Component class="footCom" ></Foot-Component>
    </div>
</template>

<script>
  import NavComponent from './nav'
  import FootComponent from './foot'
    export default {
        name: "news",
      data(){
          return{
            Page:1,
            totalPage:10,
            num:true,
            numTwo:true,
            numThree:true,
            newsList:{
              0:{}
            },
            PageIndex:1,
            PageSize:6,
            Category:"全部"
          }
      },
      components:{
        NavComponent,
        FootComponent
      },
      methods:{
          //分页获取数据
        changePage(val){
          this.Page=val
          this.getNews(val,this.PageSize,this.Category)
        },
        //进入新闻详情
        gotoInfo(Contexts,Category){
          this.$router.push({path:'/info',query:{a:Contexts,b:Category}})
        },
        //获取全部新闻
        allNews(){
          this.numTwo=true
          this.numThree=true
          this.num=!this.num
          this.Page=1
          this.Category="全部"
          this.getNews(1,this.PageSize,this.Category)
        },
        //获取公司新闻
        comNews(){
          this.num=true
          this.numThree=true
          this.numTwo=!this.numTwo
          this.Page=1
          this.Category="公司新闻"
          this.getNews(1,this.PageSize,this.Category)
        },
        //获取行业状态
        hyStatus(){
          this.numTwo=true
          this.num=true
          this.numThree=!this.numThree
          this.Page=1
          this.Category="行业状态"
          this.getNews(1,this.PageSize,this.Category)
        },
        //获取新闻接口
        getNews(pageIndex,pageSize,Category) {
          this.$http
            .get("/api/News/GetNews", {
              params: {
                PageIndex:pageIndex,
                PageSize:pageSize,
                Category:Category
              }
            })
            .then(
              function (response) {
                if(JSON.stringify(response.data.Result.data)=="{}")
                {
                  this.newsList={0:[]}
                }else{
                  this.newsList=response.data.Result.data
                }
                this.totalPage=response.data.Result.PageCount
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
      },
      mounted() {
          this.getNews(this.PageIndex,this.PageSize,this.Category)
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
      width:80%;
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
          color:#EA3D3F;
          font-size: 14px;
        }
        button:hover{
          cursor: pointer;
        }
      }
    }
  }
    .a{
      width:70%;
      margin-left: 17.2%;
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
        img{
          display: inline-block;
          height:200px;
          width:50%;
          border-radius: 20px;
        }
        img:hover{
          cursor: pointer;
        }
        .m{
          margin-left: 4%;
          width:55%;
          height:200px;
          p:first-child{
            font-size: 2em;
            font-weight: bolder;
            color:#4C4C4C;
          }
          p:last-child{
            height:150px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            line-height: 25px;
            color:#808080;
            margin-top: -10px;
          }
          p{
            text-align: left;
            margin-top: 0px;
            font-size: 1.5em;
          }
        }
      }
    }
  .kb{
    display: none;
  }
  .footCom{
    margin-top: 100px;
  }

  @media only screen and (max-width: 1366px){
    .title{
     ul{
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
        width:100%;
        margin-left: 0%;
        margin-top: 8%;
        display: flex;
        flex-direction: row;
        padding-bottom: 30px;
        height: 200px;
        img{
          display: inline-block;
          height:100%;
          width:40%;
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
    .kb{
      display: block;
      width:100%;
      height:30px;
      padding-top: 95px;
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
  @media only screen and (max-width: 384px) {
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
