<template>
    <div class="estimate">
        <Nav-Component class="navComponent"></Nav-Component>
      <img src="../image/divider.png" alt="" style="height:60px;width:100%;">
      <div class="bt">
        <ul>
          <li v-for="(item,index) in list"><a @click="changeMain(index)" :style="index===select?colorStyle:''" >{{item}}</a>
          <div class="redHr"></div></li>
        </ul>
      </div>
      <div class="main" :style="zeroStyle">
        <div class="form">
          <el-form ref="form" :model="form" label-width="110px">
            <el-form-item label="贷款类别">
              <el-select v-model="form.name" style="width: 70%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="计算方式">
              <el-select v-model="form.name" style="width: 70%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="房屋单价">
              <el-input v-model="form.name" style="width: 70%;border: 1px solid #89d9e2;border-radius: 5px;"></el-input>
            </el-form-item>
            <el-form-item label="房屋面积">
              <el-input v-model="form.name" style="width: 70%;border: 1px solid #89d9e2;border-radius: 5px;" ></el-input>
            </el-form-item>
            <el-form-item label="按揭成数">
              <el-select v-model="form.name" style="width: 70%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="按揭年数">
              <el-select v-model="form.name" style="width: 70%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="贷款利率">
              <el-select v-model="form.name" style="width: 40%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              <el-input v-model="form.name" style="width:25%;margin-left:5%;border: 1px solid #89d9e2;border-radius: 5px;" ></el-input>
            </el-form-item>
            <el-form-item label="还款方式">
              <el-select v-model="form.name" style="width: 70%;border: 1px solid #89d9e2;border-radius: 5px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-button type="danger" class="formBtn">开始计算</el-button>
          <el-button>清空重置</el-button>
        </div>
        <hr class="mainHr">
        <div class="content">
          <img src="../image/icon_calculate.png" alt="">
        </div>
      </div>
      <div class="mainOne" :style="oneStyle">
        <div class="t">
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
        <div class="part">
       <span>一个小区的名字</span>
          <span class="lastSp">单位：元/平方米</span>
        </div>
        <div class="table">
          <template>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="偏高价"
                >
              </el-table-column>
              <el-table-column
                prop="name"
                label="中间价">
              </el-table-column>
              <el-table-column
                prop="address"
                label="偏低价">
              </el-table-column>
            </el-table>
          </template>
        </div>
        <p>*此为2019年3月份所得数据</p>
      </div>
      <div class="mainTwo" :style="twoStyle">
        <div class="t">
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
            <span class="right"><a >申报</a></span>
          </div>
        </div>
        <div class="mainT">

        </div>
      </div>
      <Foot-Component class="footer"></Foot-Component>
    </div>
</template>

<script>
  import FootComponent from './foot'
  import NavComponent from './nav'
    export default {
      data(){
          return{
            tableData:[
              { name:"19500",
                date:"22500",
                address:"21000"}
            ],
            list:[
              "房贷计算器",
              "在线估价",
              "申报房源"
            ],
            form:{
              name:"aa"
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
            select:0,
            colorStyle:{
              color:"red",
              fontWeight:"bolder"
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
      FootComponent,
      NavComponent
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
            this.twoStyle.display="none"
            this.zeroStyle.display="none"
            this.oneStyle.display="block"
          }else{
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
    height:100px;
    ul{
      height:100%;
      width:71%;
      margin: 0 auto;
      margin-left: 12%;
      list-style: none;
      li{
        float: left;
        margin-left: 14%;
        line-height: 100px;
        font-size: 1.5em;
      a{
        text-decoration: none;
        color:black;
      }
        a:hover{
          cursor: pointer;
        }
        .redHr{
          height:3px;
          width:200px;
          background-color: red;
        }
      }
    }
  }
  .main{
    padding-bottom: 120px;
    .form{
      width:40%;
      margin-left: 10%;
      margin-top: 60px;
      .formBtn{
        margin-left: -16%;
      }
    }
    .mainHr{
      height:540px;
      position: absolute;
      display: inline-block;
      top: 0;
      margin-top: 15.1%;
    }
    .content{
      height:200px;
      width:12%;
      position: absolute;
      margin-top: -22%;
      margin-left: 66%;
      img{
        height: 200px;
        width:200px;
      }
    }
  }
  .mainOne,.mainTwo{
    margin-top: 30px;
    width:72%;
    margin-left: 13%;
    display: flex;
    flex-direction: column;
    .t{
      width:100%;
      height:240px;
      border: 1px solid black;
      background: url("../image/valuation_bg.png");
      background-size: 100% 100%;
      .input{
        height: 60px;
        width: 40%;
        margin-left: 30%;
        margin-top: 6%;
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
     .part{
       margin-top: 30px;
       font-size: 2em;
       span:first-child{
         float: left;
       }
       .lastSp{
         float: right;
         padding-bottom: 20px;
       }
     }
    .table{
      padding-bottom: 10px;
    }
    p{
      text-align: left;
      padding-bottom: 60px;
      color:red;
    }
  }
  .mainTwo{
    .mainT{
      background-color: white;
      height:300px;
    }
  }
  @media only screen and (max-width: 1366px){
    .bt{
      ul{
        width:80%;
        margin-left: 5%;
      }
    }
 .main{
   .mainHr{
     margin-top: 21%;
   }
   .form{
     .formBtn{
       margin-left: 6%;
     }
   }
 }
    .mainOne,.mainTwo{
      span{
        margin-left: -78%;
      }
      .t{
        width:100%;
        height:240px;
        .input{
          height: 60px;
          width: 50%;
          margin-left: 30%;
          margin-top: 6%;
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
            margin-top: -9.5%;
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
            background-color: #009645;
            margin-top: -58px;
            line-height: 60px;
            margin-right: 1px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .bt ul{
      width:100%;
      margin-left: 0;
      height:60%;
      li{
        margin-left:3%;
        font-size: 1em;
        line-height: 60px;
      }
    }
    .main{
      padding-bottom: 60px;
      margin-top: -100px;
      .form{
        width:100%;
        margin-left: -10px;
        margin-top: 75px;
      }
      .mainHr{
        display: none;
      }
      .content{
        display: none;
      }
    }
    .mainOne,.mainTwo{
      .t{
        .input{

          width:80%;
          margin-left: 10%;
          margin-top: 15%;
          color: #606060;
          input{
            width: 95%;
            height: 80%;
            padding: 5px 5px;
            border-radius: 30px;
            border: none;
            float: left;
            text-indent: 140px;
            font-size: 1.8em;
          }
          .select{
            margin-top: -11%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 435px) {
    .navComponent{
      margin-top: 60px;
    }
    .bt ul{
      width:100%;
   li{
     margin-left: 4%;
     font-size: 1.3em;
     line-height: 60px;
     .redHr{
       width:100px;
     }
   }
 }
    .main{
      padding-bottom: 60px;
      margin-top: -50px;
      .form{
        width:100%;
        margin-left: -10px;
        .formBtn{
          margin-left: 24%;
        }
      }
    }
    .mainOne,.mainTwo{
     margin-top: 0;
      width:98%;
      margin-left: 1%;
      .t{
        .input{
          width:100%;
          margin-left: 0;
          input{
            text-indent: 130px;
            font-size: 1.5em;
          }
          .select{
            margin-top: -12%;
          }
        }
      }
    }
    .mainTwo{
      .mainT{
        background-color: white;
        height:150px;
      }
    }
  }
  @media only screen and (max-width: 415px) {
    .main{
      .form{
        .formBtn{
          margin-left: 30%;
        }
      }
    }
    .mainOne,.mainTwo{
      .input{
        .select{
          margin-top: -10.8%;
        }
      }
    }
  }
  @media only screen and (max-width: 380px){
    .bt ul{
      width:90%;
      margin-left: -2%;
      li{
        margin-left: 2%;
      }
    }
    .main{
      .form{
        .formBtn{
          margin-left: 5%;
        }
      }
    }
    .mainOne,.mainTwo{
      margin-top: 0;
      width:98%;
      margin-left: 1%;
      .t{
        .input{
          width:100%;
          margin-left: 0;
          input{
            text-indent: 134px;
            font-size: 1em;
          }
          .select{
            margin-top: -13%;
            width:32%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 360px){
    .bt ul{
      width:100%;
      margin-left: -5%;
      li{
        margin-left: 1%;
      }
    }
    .mainOne,.mainTwo{
      .t{
        .input{
          input{
            text-indent: 115px;
            font-size: 1em;
          }
          .select{
            width: 28%;
            margin-top: -13.5%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 320px){
    .bt ul{
      width:100%;
      margin-left: -11%;
      li{
        margin-left: 1%;
      }
    }
    .mainOne,.mainTwo{
      .t{
        .input{
          input{
            text-indent: 100px;
          }
          .select{
            width: 32%;
            margin-top: -15.5%;
          }
        }
      }
    }
  }
}


</style>
