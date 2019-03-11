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
              <el-select v-model="form.name" style="width: 80%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="计算方式">
              <el-select v-model="form.name" style="width: 80%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="房屋单价">
              <el-input v-model="form.name" style="width: 80%;border: 1px solid #89d9e2;border-radius: 5px;"></el-input>
            </el-form-item>
            <el-form-item label="房屋面积">
              <el-input v-model="form.name" style="width: 80%;border: 1px solid #89d9e2;border-radius: 5px;" ></el-input>
            </el-form-item>
            <el-form-item label="按揭成数">
              <el-select v-model="form.name" style="width: 80%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="按揭年数">
              <el-select v-model="form.name" style="width: 80%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="贷款利率">
              <el-select v-model="form.name" style="width: 35%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              <el-input v-model="form.name" style="width:35%;margin-left: 10%;border: 1px solid #89d9e2;border-radius: 5px;" ></el-input>
            </el-form-item>
            <el-form-item label="还款方式">
              <el-select v-model="form.name" style="width: 80%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <hr class="mainHr">
        <img class="btn" src="../image/right.svg" alt="">
        <div class="content">
          <img src="../image/tu.svg" alt="">
          <p>快速计算你的房贷</p>
        </div>
        <div class="val">
          <p>快速计算你的房贷</p>
          <el-button type="primary">点击</el-button>
        </div>
      </div>
      <div class="mainOne" :style="oneStyle">
        <span>请输入小区地址或小区名称进行估值</span>
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
          <span class="right"><a >评估</a></span>
        </div>
      </div>
      <div class="mainTwo" :style="twoStyle">
        <span>请输入小区地址或小区名称进行房源申报</span>
        <div class="input">
          <input type="text" placeholder="请输入完整小区的名称">
          <el-select class="select" v-model="valueTwo" placeholder="选择城市">
            <el-option
              v-for="item in optionTwo"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
            },
            value: '',
            valueTwo:'',
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
            optionTwo: [{
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
      height:60px;
      width:60px;
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
      margin-left: 35%;
      color: #606060;
      input{
        width: 95%;
        height: 80%;
        padding: 5px 5px;
        border-radius: 30px;
        border: none;
        float: left;
        text-indent: 180px;
        font-size: 1.8em;
      }
      .select{
        margin-top: -8.5%;
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
        .select{
          margin-top: -11.8%;
          float: left;
          width:25%;
          margin-left: 5%;
        }
        .right{
          margin-right: -5px;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .bt ul{
      width:89%;
      li{
        margin-left: 19%;
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
        font-size: 2em;
        .el-button{
          width:200px;
        }
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
        margin-left: 5%;
        input{
          width:90%;
          height:30px;
          border-radius:30px;
          border: none;
          padding-left: 20px;
          line-height: 30px;
          font-size: 1.3em;
          text-indent: 33%;
        }
        .select{
          margin-top: -5.8%;
          width:25%;
          margin-left: 5%;
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
  @media only screen and (max-width: 700px) {
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
        font-size: 2em;
        .el-button{
          width:200px;
        }
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
        margin-left: 5%;
        input{
          width:90%;
          height:30px;
          border-radius:30px;
          border: none;
          padding-left: 20px;
          line-height: 30px;
          font-size: 1.3em;
          text-indent: 33%;
        }
        .select{
          margin-top: -11.8%;
          width:30%;
          margin-left: 5%;
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
  @media only screen and (max-width: 435px) {
    .mainOne,.mainTwo{
      .input{
        .select{
          margin-top: -10.2%;
        }
      }
    }
  }
  @media only screen and (max-width: 415px) {
    .mainOne,.mainTwo{
      .input{
        .select{
          margin-top: -10.8%;
        }
      }
    }
  }
  @media only screen and (max-width: 380px){
    .mainOne,.mainTwo{
      .input{
        .select{
          margin-top: -12%;
        }
      }
    }
  }
  @media only screen and (max-width: 360px){
    .mainOne,.mainTwo{
      .input{
        .select{
          margin-top: -12.5%;
          width:31.2%;
          margin-left: 4%;
        }
        input{
          text-indent: 32%;
        }
      }
    }
  }
  @media only screen and (max-width: 320px){
    .mainOne,.mainTwo{
      .input{
        .select{
          margin-top: -14.5%;
          width:31.2%;
          margin-left: 5%;
        }
        input{
          text-indent: 32%;
        }
      }
    }
  }
}


</style>
