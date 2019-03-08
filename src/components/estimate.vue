<template>
    <div class="estimate">
      <Head-Component></Head-Component>
      <div class="bt">
        <ul>
          <li v-for="(item,index) in list"><a @click="changeMain(index)" :style="index===select?colorStyle:''" >{{item}}</a></li>
        </ul>
      </div>
       <div class="noContent" :style="noContentStyle"></div>
      <div class="main" :style="zeroStyle">
        <div class="form">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="贷款类别">
              <el-select v-model="form.name" style="width: 80%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="计算方式">
              <el-select v-model="form.name" style="width: 80%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="房屋单价">
              <el-input v-model="form.name" style="width: 80%;"></el-input>
            </el-form-item>
            <el-form-item label="房屋面积">
              <el-input v-model="form.name" style="width: 80%;" ></el-input>
            </el-form-item>
            <el-form-item label="按揭成数">
              <el-select v-model="form.name" style="width: 80%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="按揭年数">
              <el-select v-model="form.name" style="width: 80%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="贷款利率">
              <el-select v-model="form.name" style="width: 35%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              <el-input v-model="form.name" style="width:35%;margin-left: 10%" ></el-input>
            </el-form-item>
            <el-form-item label="还款方式">
              <el-select v-model="form.name" style="width: 80%;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <hr class="mainHr">
        <span class="btn">></span>
        <div class="content">
          <img src="../image/tu.svg" alt="">
          <p>快速计算你的房贷</p>
        </div>
        <div class="val">
          <p>快速计算你的房贷</p>
          <el-button>点击</el-button>
        </div>
      </div>
      <div class="mainOne" :style="oneStyle">
        <span>请输入小区地址或小区名称进行估值</span>
        <div class="input">
          <input type="text" placeholder="请输入完整小区的名称">
          <span class="firstSpan"><a >选择城市</a>&nbsp;&nbsp;v <hr  class="hrStyle"></span>
          <span class="right"><a >评估</a></span>
        </div>
      </div>
      <div class="mainTwo" :style="twoStyle">
        <span>请输入小区地址或小区名称进行房源申报</span>
        <div class="input">
          <input type="text" placeholder="请输入完整小区的名称">
          <span class="firstSpan"><a >选择城市</a>&nbsp;&nbsp;v <hr  class="hrStyle"></span>
          <span class="right"><a >评估</a></span>
        </div>
      </div>
      <Foot-Component></Foot-Component>
    </div>
</template>

<script>
  import HeadComponent from './mayBe'
  import FootComponent from './foot'
    export default {
      data(){
          return{
            list:[
              "房贷计算器",
              "在线估价",
              "申报房源"
            ],
            form:{
              name:"aa"
            },
            colorStyle:{
              color:"white"
            },
            zeroStyle:{
              display:"block"
            },
            oneStyle:{
              display:"none"
            },
            twoStyle:{
              display:"none"
            },
            noContentStyle:{
              display:"block"
            },
            select:0,
            colorStyle:{
              color:"white"
            }
          }
      },
    components:{
      HeadComponent,
      FootComponent
    },
      methods:{
        changeMain(index){
          this.select=index
          if(index===0)
          {
            this.oneStyle.display="none"
            this.twoStyle.display="none"
            this.zeroStyle.display="block"
          }else if(index===1)
          {
            this.noContentStyle.display="none"
            this.twoStyle.display="none"
            this.zeroStyle.display="none"
            this.oneStyle.display="block"
          }else{
            this.noContentStyle.display="none"
            this.oneStyle.display="none"
            this.zeroStyle.display="none"
            this.twoStyle.display="block"
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
.estimate{
  width:100%;
  .bt{
    width:100%;
    height:60px;
    background-color: #6FB8F5;
    ul{
      height:100%;
      width:50%;
      margin: 0 auto;
      list-style: none;
      li{
        float: left;
        margin-left: 20%;
        line-height: 55px;
        font-size: 1.5em;

      a{
        text-decoration: none;
        color:black;
      }
        a:hover{
          cursor: pointer;
        }
      }
    }
  }
  .noContent{
    height:60px;
    background-color: #E8E8E8;
    width:100%;
  }
  .main{
    padding-bottom: 120px;
    .form{
      width:40%;
      margin-left: 10%;
      margin-top: 60px;
    }
    .mainHr{
      height:580px;
      position: absolute;
      display: inline-block;
      top: 0;
      margin-top: 12%;
    }
    .btn{
      font-size: 4em;
      position: absolute;
      display: inline-block;
      margin-top: -16%;
      margin-left: 20px;
    }
    .content{
      height:200px;
      width:12%;
      position: absolute;
      margin-top: -22%;
      margin-left: 66%;
      img{
        height:120px;
        width:100%;
      }
    }
    .val{
     display: none;
    }
  }
  .mainOne,.mainTwo{
    background-color: #80b2c3;
    width:100%;
    height:625px;
    span{
      display: inline-block;
      height:30px;
      margin-top: 12%;
      font-size: 2em;
    }
    .input{
      height: 60px;
      width: 30%;
      position: absolute;
      margin-left: 35%;
      color: #606060;
      input{
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
        .hrStyle{
          height:30px;
          width:1px;
          float: right;
          margin-top: -27px;
          margin-right: -5px;
          background-color: black
        }
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
    }
  }
  @media only screen and (max-width: 1366px){
 .main{
   .mainHr{
     margin-top: 15%;
   }
   .btn{
     margin-top: -20%;
   }
 }
    .mainOne,.mainTwo{
      .input{
        input{
          text-indent: 120px;
          font-size: 1.5em;
        }
        .firstSpan{
          font-size: 1.7em;
          letter-spacing: 2px;
        }
        .right{
          margin-right: -5px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px)
  {
    .bt ul{
   width:89%;
   li{
     margin-left: 10%;
     font-size: 1em;
   }
 }
    .noContent{
      height:40px;
    }
    .main{
      padding-bottom: 60px;
      margin-top: -50px;
      .form{
        width:100%;
        margin-left: -10px;
      }
      .mainHr,.content,.btn{
        display: none;
      }
      .val{
        display: block;
        font-size: 1em;
      }
    }
    .mainOne,.mainTwo{
      background-color: #80b2c3;
      width:100%;
      height:425px;
      span{
        display: inline-block;
        height:30px;
        margin-top: 30%;
        font-size: 1em;
      }
      .input{
        height:40px;
        width:90%;
        position: absolute;
        margin-left: 5%;
        input{
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
          .hrStyle{
            margin-top: -24px;
          }
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
      }
    }
  }
}


</style>
