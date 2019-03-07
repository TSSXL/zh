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
             <button @click="changeColor(index)" :style="index===select?colorStyle:''">{{item}}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import HeadComponent from './mayBe'
    export default {
      data(){
        return{
          leftList:[
            "公司荣誉",
            "职业资质",
            "经典案例",
            "联系我们",
            "招贤纳士"
          ],
          select:0,
          colorStyle:{
            backgroundColor:"#4982ff",
            color:"white"
          }
        }
      },
      components:{
        HeadComponent
      },
      methods:{
        changeColor(index){
          this.select=index

        }
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
  }

  @media only screen and (max-width: 1366px)
  {

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
          height:60px;
          width:100%;
          li:first-child{
            margin-left: -30px;
          }
          li{
            height:40px;
            float: left;
            width:70px;
            margin-left: 0px;
            button{
              height:40px;
              font-size:1em;
            }
          }
        }
      }
    }
  }
}
</style>
