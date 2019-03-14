<template>
    <div class="mine">
      <Head-Component></Head-Component>
      <div class="img">
       <div class="info">
         <p>公司概况</p>
         <p>宁波仲恒房地产估价有限公司成立于2001年，原味为房管处转制企业，是具有国家房地产二级评估资质和土地评估资质的双资质房地产评估专业机构</p>
       </div>
      </div>
      <div class="mineInfo">
        <div class="leftBtn">
          <ul>
            <li v-for="(item,index) in leftList">
             <button @click="changeColor(index)"  :style="Color(index)">{{item}}</button>
            </li>
          </ul>
        </div>
        <div class="rightCon" :style="rightConStyle">
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
        <div class="zy" :style="zyStyle">
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
        <div class="example" :style="exStyle">
         <div class="exampleItem">
           <p>银行抵押</p>
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
          <div class="exampleItem">
            <p>征收评估</p>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
            <div class="exampleImage">
              <img src="../image/first.jpg" alt="">
              <p>诚投大厦办公房地产抵押项目</p>
            </div>
          </div>
        </div>
        <div class="callMe" :style="callStyle">
        <div class="callMeTitle">
          <p>联系我们</p>
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
        <div class="callMe need" :style="needStyle">
          <div class="callMeTitle">
            <p>招贤纳士</p>
            <p>公司常年诚招房地产估价师,土地估价师，测绘工程师，仲恒估价公司欢迎您的加入</p>
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
  import HeadComponent from './mayBe'
  import FootComponent from './foot'
    export default {
      data(){
        return{
          leftList:[
            "公司荣誉",
            "执业资质",
            "经典案例",
            "联系我们",
            "招贤纳士"
          ],
          select:0,
          colorStyle:{
            backgroundColor:"#4982ff",
            color:"white"
          },
          colorTwoStyle:{
            backgroundColor:"#4982ff",
            color:"white"
          },
          rightConStyle:{
            display:"block"
          },
          zyStyle:{
            display:""
          },
          callStyle:{
            display:""
        },
          needStyle:{
            display:""
          },
          exStyle:{
            display:""
          }
        }
      },
      components:{
        HeadComponent,
        FootComponent
      },
      created(){
        let idx=this.$route.query.idx
        this.changeColor(idx)

        let arr=[1,2,3,4,5]
        console.log(_.first(arr))
      },
      methods:{
        Color(index){
          if(index===0)
          {
            return this.colorTwoStyle
          }
          return index===this.select? this.colorStyle:''
        },
        changeColor(index){
          this.select=index
          if (index===0)
          {
            this.needStyle.display="none"
            this.callStyle.display="none"
            this.zyStyle.display="none"
            this.exStyle.display="none"
            this.rightConStyle.display="block"
            this.colorTwoStyle={
              backgroundColor:"#4982ff",
              color:"white"}
          }else if (index===1)
          {
            this.needStyle.display="none"
            this.callStyle.display="none"
            this.rightConStyle.display="none"
            this.exStyle.display="none"
            this.zyStyle.display="flex"
            this.colorTwoStyle={}
          }
          else if(index===2){
            this.needStyle.display="none"
            this.callStyle.display="none"
            this.rightConStyle.display="none"
            this.zyStyle.display="none"
            this.exStyle.display="flex"
            this.colorTwoStyle={}
          }else if (index===3)
          {
            this.exStyle.display="none"
            this.needStyle.display="none"
            this.rightConStyle.display="none"
            this.zyStyle.display="none"
            this.callStyle.display="block"
            this.colorTwoStyle={}
          }else if (index===4) {
            this.exStyle.display="none"
            this.rightConStyle.display="none"
            this.callStyle.display="none"
            this.zyStyle.display="none"
            this.needStyle.display="block"
            this.colorTwoStyle={}
          }else{
            this.exStyle.display="none"
            this.needStyle.display="none"
            this.callStyle.display="none"
            this.zyStyle.display="none"
            this.rightConStyle.display="block"
          }
        },
      }
    }
</script>

<style lang="scss" scoped>
.mine{
  width:100%;
  .img{
    width:100%;
    height: 400px;
    background-color: #91C4D5;
    .info{
      height:20%;
      width:80%;
      position: absolute;
      margin-top: 10%;
      font-size: 2em;
      p{
        display: inline-block;
        text-align: left;
        width:70%;
        margin-left: 2%;
        color: white;
        font-weight: bolder;
      }
    }
  }
  .mineInfo{
    width:80%;
    margin-top: 60px;
    margin-left: 10%;
    .leftBtn{
      height:350px;
      width:12%;
      border: 1px solid #4982ff;
      margin-left: 3.5%;
      position: absolute;
      ul{
        height:350px;
        width:100%;
        margin-top: 0;
        list-style: none;
        li{
          width:100%;
          height:70px;
          margin-left: -40px;
          button{
            width:100%;
            height:70px;
            font-size: 1.5em;
          }

        }
      }
    }
    .rightCon{
      width:55%;
      height:500px;
      float: right;
      margin-right: 20%;
      ul{
        margin-top: -80px;
        list-style: none;
        margin-left: -15%;
        li{
          float: left;
          height:100px;
          width:100px;
          margin-left: 150px;
          margin-top: 80px;
          img{
            height:150px;
            width:220px;
          }
        }
      }
    }
    .zy{
      width:50%;
      float: right;
      margin-right: 20%;
      border: 1px solid blueviolet;
      display: none;
      flex-wrap: wrap;
      .licence{
        height:320px;
        width:34%;
        margin-top: 20px;
        margin-left: 10%;
       img{
       height:290px;
       width:90%;
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
        }
      }
    }
    .example{
      width:50%;
      float: right;
      margin-right: 20%;
      display: none;
      height:600px;
      overflow-y: scroll;
      flex-direction: column;
      border: 1px solid blueviolet;
      .exampleItem{
        width:90%;
        margin-left: 5%;
        margin-top: 2%;
        p{
          text-align: left;
          font-size: 2em;
          text-indent: 15px;
          color:blueviolet;
        }
        .exampleImage{
          margin-left: 10px;
          margin-top: 15px;
          display: inline-block;
          img{
            height:120px;
            width:200px;
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
      float: right;
      margin-right: 20%;
      height:350px;
      display: none;
      border: 1px solid blueviolet;
      position: relative;
      .callMeTitle{
        height:100%;
        width:45%;
        margin-left: 2.5%;
        position: absolute;
        p:first-child,p:nth-child(2){
          margin-top: 15%;
          font-size: 2em;
          color:#5EB5FF;
          font-weight: bolder;
        }
        p{
          text-align: left;
          margin-left: 10%;
          font-size: 1.2em;
          color: #797979;
        }
      }
      .map{
        height:100%;
        width:45%;
        margin-left: 50%;
        img{
          height:50%;
          width:100%; 
          margin-top: 25%;
        }
      }
    }
    .need{
     .callMeTitle{
       p:nth-child(2)
       {
         margin-top: 10%;
         font-weight: normal;
       }
       p:not(:first-child)
       {
         color: #797979;
         font-size: 1em;
       }
       p:nth-child(3){
         margin-top: 25%;
       }
     }
    }
  }
  .mineFoot{
   margin-top:750px;
  }

  @media only screen and (max-width: 1366px) {
  .mineInfo{
    .rightCon{
      width:60%;
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
      float: right;
      margin-right: 10%;
      border: 1px solid blueviolet;
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
  }
    .mineFoot{
      margin-top:780px;
    }
  }
  @media only screen and (max-width: 768px){
    .img{
      width:100%;
      height: 200px;
      background-color: #91C4D5;
      .info{
        height:20%;
        width:100%;
        position: absolute;
        margin-top: 10%;
        font-size: 1em;
        p{
          display: inline-block;
          text-align: left;
          width:80%;
          color: white;
          font-weight: bolder;
          line-height: 20px;
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
        margin-left: 0;
        ul{
          height:40px;
          width:87%;
          li:first-child{
            margin-left: 2%;
          }
          li{
            height:40px;
            float: left;
            width: 18%;
            margin-left: 2%;
            button{
              height:40px;
              font-size:1em;
              border: none;
              border-radius: 10%;
            }
          }
        }
      }
      .rightCon{
        width:100%;
        height:300px;
        margin-right:0%;
        margin-top: 60px;
        ul{
          margin-top:10px;
          list-style: none;
          height:270px;
          width:100%;
          margin-left: -5%;
          li{
            float: left;
            height:90px;
            width:32%;
            margin-left: 5px;
            margin-top: 20px;
            img{
              height:100px;
              width:128px;
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
        display: none;
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
          margin-top: 5%;
          padding-bottom: 0;
          margin-left: 20%;
          img{
            height:160px;
            width:100%;
          }
        }
      }
      .example{
        width:100%;
        margin-right: 0;
        margin-top: 60px;
        height:400px;
        border: none;
      }
      .callMe{
        width:100%;
        margin-right: 0;
        margin-top: 60px;
        border: none;
        height:250px;
        .callMeTitle{
          margin-left: 0;
          height:50%;
          width:100%;
          p:first-child,p:nth-child(2){
            font-size: 1em;
            margin-top: 5%;
          }
          p{
            margin-left: 2%;
          }
        }
        .map{
          width:50%;
          height:80%;
          margin-top: 2%;
          margin-left: 45%;
          img{
            margin-top: 0;
            height:100%;
            width:100%;
          }
        }
      }
      .need{
        .callMeTitle{
          p:nth-child(2)
          {
            margin-top: 3%;
            font-weight: normal;
            display: inline-block;
            margin-left: -56%;
            width: 40%;
          }
          p:nth-child(3){
            margin-top: 3%;
          }
        }
      }
    }
    .mineFoot{
      margin-top:510px;
    }
  }
  @media only screen and (max-width: 450px){
    .img{
      width:100%;
      height: 200px;
      background-color: #91C4D5;
      .info{
        height:20%;
        width:100%;
        position: absolute;
        margin-top: 10%;
        font-size: 1em;
        p{
          display: inline-block;
          text-align: left;
          width:80%;
          color: white;
          font-weight: bolder;
          line-height: 20px;
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
        margin-left: 0;
        ul{
          height:40px;
          width:87%;
          li:first-child{
            margin-left: -8%;
          }
          li{
            height:40px;
            float: left;
            width:20%;
            margin-left: 5px;
            button{
              height:40px;
              font-size:1em;
             border: none;
              border-radius: 10%;
            }
          }
        }
      }
      .rightCon{
        width:100%;
        height:300px;
        margin-right:0%;
        margin-top: 60px;
        ul{
          margin-top:10px;
          list-style: none;
          height:270px;
          width:100%;
          margin-left: -10%;
          li{
            float: left;
            height:90px;
            width:32%;
            margin-left: 5px;
            margin-top: 0;
            img{
              height:80px;
              width:108px;
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
        display: none;
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
        margin-right: 0;
        margin-top: 60px;
        height:400px;
        border: none;
      }
      .callMe{
        width:100%;
        margin-right: 0;
        margin-top: 60px;
        border: none;
        height:400px;
        .callMeTitle{
          margin-left: 0;
          height:50%;
          width:100%;
          p:first-child,p:nth-child(2){
            font-size: 1em;
            margin-top: 5%;
          }
          p{
            margin-left: 2%;
          }
        }
        .map{
          width:100%;
          height:50%;
          margin-top: 47%;
          margin-left: 0;
          img{
            margin-top: 35%;
            height:100%;
            width:100%;
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
      margin-top:510px;
    }
  }
  @media only screen and (max-width: 667px) {
    .mineInfo{
      .rightCon{
        width:96%;
        ul{
          margin-left: -45px;
          li{
            margin-left: 2px;
          }
        }
      }
    }
  }
}
</style>
