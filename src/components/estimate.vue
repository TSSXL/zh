<template>
    <div class="estimate">
        <Nav-Component class="navComponent" num="2" ></Nav-Component>
      <img src="../image/divider.png" alt="" style="height:40px;width:100%;">
      <div class="bt">
        <ul>
          <li v-for="(item,index) in list"><a @click="changeMain(index)" :style="index===select?colorStyle:''" >{{item}}</a>
          <div :style="index==select?bgStyle:''"  class="redHr"></div>
          </li>
        </ul>
      </div>
      <div class="main"  v-if="index==0">
        <div class="form">
          <el-form ref="form" :model="form" label-width="110px">
            <el-form-item label="贷款类别：">
              <el-input v-model="dk"  style="width: 70%;border-radius: 5px;" disabled></el-input>
            </el-form-item>
            <el-form-item label="计算方式：">
              <el-select v-model="form.jsID" style="width: 70%;border-radius: 5px;">
                <el-option v-for="item in fs" :label="item.label" :value="item.way" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="贷款总额：" :style="dkStyle(form.jsID)">
              <el-input v-model="form.ze" placeholder="请输入贷款总额" style="width: 70%;border-radius: 5px;" >
              </el-input>
            </el-form-item>
            <el-form-item label="房屋单价："  :style="form.jsID===false?{display:'none'}:''">
              <el-input v-model="form.price" placeholder="请输入房屋单价" style="width: 70%;border-radius: 5px;">
                <template slot="append">元/平方米</template>
              </el-input>
            </el-form-item>
            <el-form-item label="房屋面积："  :style="form.jsID===false?{display:'none'}:''">
              <el-input v-model="form.area" placeholder="请输入房屋面积" style="width: 70%;border-radius: 5px;" >
                <template slot="append">平方米</template>
              </el-input>
            </el-form-item>
            <el-form-item label="按揭成数："  :style="form.jsID===false?{display:'none'}:''">
              <el-select v-model="form.csID" style="width: 70%;border-radius: 5px;">
                <el-option v-for="item in cs" :label="item.label" :value="CS(item.label)" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="按揭年数：">
              <el-select v-model="form.nsID" style="width: 70%;border-radius: 5px;">
                <el-option v-for="item in ns" :label="item.label" :value="NS(item.label)" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="贷款利率：">
              <el-select v-model="form.lvID" style="width: 40%;border-radius: 5px;">
                <el-option v-for="item in lv" :label="Txt(item.label)" :value="item.num" :key="item.value"></el-option>
              </el-select>
              <el-input v-model="form.lvID" style="width:25%;margin-left:5%;border-radius: 5px;" >
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item label="还款方式：">
              <el-select v-model="form.hkID" style="width: 70%;border-radius: 5px;">
                <el-option v-for="item in hk" :label="item.label" :value="item.way" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-dialog title="计算结果" :visible.sync="dialogFormVisible" width="90%">
            <el-form :model="formTwo"  >
              <el-form-item label="首付" label-width="70px">
                <el-input v-model="formTwo.sf" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="每月月供" label-width="70px">
                <el-input v-model="formTwo.yg" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="每月递减" label-width="70px" :style="djTwoStyle">
                <el-input v-model="formTwo.dj" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="贷款总额" label-width="70px">
                <el-input v-model="formTwo.ze" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="支付利息" label-width="70px">
                <el-input v-model="formTwo.lx" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="还款总额" label-width="70px">
                <el-input v-model="formTwo.hkze" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="还款月数" label-width="70px">
                <el-input v-model="formTwo.hkys" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <div style="width:60%;margin-left: 30%;">
            <el-button type="danger" class="formBtn" @click="handleJS">开始计算</el-button>
            <el-button type="danger" class="formBtnTwo" @click="DialogShow">开始计算</el-button>
            <el-button class="cle" @click="cle">清空重置</el-button>
          </div>
        </div>
        <hr class="mainHr">
        <div class="content">
          <img  src="../image/icon_calculate.png" v-if="isJS">
          <div class="jg" v-else>
            <span>
                <h1>计算结果</h1>
            </span>
              <span>
                <h1>首付：</h1>
                <h1 class="sf">{{formTwo.sf}}</h1>
                <h1>元</h1>
                </span>
            <span>
                <h1>每月月供：</h1>
                <h1>{{formTwo.yg}}</h1>
                <h1>元</h1>
                </span>
            <span :style="djStyle">
                <h1>每月递减：</h1>
                <h1>{{formTwo.dj}}</h1>
                <h1>元</h1>
                </span>
            <span>
                <h1>贷款总额：</h1>
                <h1>{{formTwo.ze}}</h1>
                <h1>元</h1>
                </span>
            <span>
                <h1>支付利息：</h1>
                <h1>{{formTwo.lx}}</h1>
                <h1>元</h1>
                </span>
            <span>
                <h1>还款总额：</h1>
                <h1>{{formTwo.hkze}}</h1>
                <h1>元</h1>
                </span>
            <span>
                <h1>还款月数：</h1>
                <h1>{{formTwo.hkys}}</h1>
                <h1>月</h1>
                </span>
          </div>
        </div>
      </div>
      <div class="mainOne" v-else-if="index==1">
        <div class="t">
          <div class="input">
            <input class="leftInput" type="text" v-model="adname" placeholder="请输入小区地址或名称" style="background-color: #F5F7F6">
            <!--<el-select class="select" v-model="value" placeholder="选择城市">-->
              <!--<el-option-->
                <!--v-for="item in options"-->
                <!--:key="item.ID"-->
                <!--:label="item.Name"-->
                <!--:value="item.Name">-->
              <!--</el-option>-->
            <!--</el-select>-->
            <div class="mj">
              <span>*</span>
              <input type="text" v-model="mj" placeholder="请输入面积">
            </div>
            <span class="right"><a @click="showLoading">评估</a></span>
          </div>
        </div>
        <div class="part">
          <span>一个小区名称</span>
          <span class="lastSp">单位：元</span>
        </div>
        <div class="table">
          <template>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                label="小区名称"
              >
                <template slot-scope="scope">
                  {{scope.row.VlgName}}
                </template>
              </el-table-column>
              <el-table-column
                label="偏高价"
                >
                <template slot-scope="scope">
                  {{Change(scope.row.MaxPrice)}}
                </template>
              </el-table-column>
              <el-table-column
                label="中间价">
                <template slot-scope="scope">
                  {{Change(scope.row.MidPrice)}}
                </template>
              </el-table-column>
              <el-table-column
                label="偏低价">
                <template slot-scope="scope">
                  {{Change(scope.row.MinPrice)}}
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <p>*此为2019年3月份所得数据</p>
      </div>
      <div class="mainTwo" v-else="index==2">
        <div class="sb">
         <span>
             <p>小区名称:</p>
             <input type="text" placeholder="请输入小区名称进行房源申报"  v-model="sbForm.aname" >
         </span>
          <span>
             <p>面　　积:</p>
             <input type="text" placeholder="请输入房屋面积" v-model="sbForm.area"></span>
          <span>
             <p>单　　价:</p>
             <input type="text" placeholder="请输入房屋单价" v-model="sbForm.price" ></span>
          <span>
             <p>联系方式:</p>
             <input type="text" placeholder="请输入你的联系方式" v-model="sbForm.phone">
          </span>
          <button class="sbBtn" @click="Decalare">确认提交</button>
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
            mj:'',
            adname:'',
            djTwoStyle:{
              display:'none'
            },
            djStyle:{
              display:'none'
            },
            otherStyle:{
              display:'block'
            },
            bgStyle:{
              backgroundColor:'red'
            },
            sbForm:{
              aname:'',
              area:'',
              price:'',
              phone:''
            },
            index:0,
            radio2:1,
            isJS:true,
            formTwo:{},
            dialogFormVisible:false,
            tableData:[{
              VlgName:"某小区",
              MaxPrice:"0",
              MidPrice:"0",
              MinPrice:"0"
            }],
            list:[
              "房贷计算器",
              "在线估价",
              "申报房源"
            ],
            hk:[
              {
                value:'1',
                label:'等额本息',
                way:true,
              },
              {
                value:'2',
                label:'等额本金',
                way:false
              }
            ],
         dk:'商业贷款',
            fs:[
              {
                value:'1',
                label:'根据单价、面积计算',
                way:true,
              },
              {
                value:'2',
                label:'根据贷款总额计算',
                way:false
              }
            ],
            cs:[
              {
                value:'1',
                label:'2成'
              },
              {
                value:'2',
                label:'2.5成'
              },
              {
                value:'3',
                label:'3成'
              },
              {
                value:'4',
                label:'3.5成'
              },
              {
                value:'5',
                label:'4成'
              },
              {
                value:'6',
                label:'4.5成'
              },
              {
                value:'7',
                label:'5成'
              },
              {
                value:'8',
                label:'5.5成'
              },
              {
                value:'9',
                label:'6成'
              },
              {
                value:'10',
                label:'6.5成'
              },
              {
                value:'11',
                label:'7成'
              },
              {
                value:'12',
                label:'7.5成'
              },
              {
                value:'13',
                label:'8成'
              }
            ],
            ns:[{
                value:'1',
                label:'25年(300期)'
              },
              {
                value:'2',
                label:'24年(288期)'
              },
              {
                value:'3',
                label:'23年(276期)'
              },
              {
                value:'4',
                label:'22年(264期)'
              },
              {
                value:'5',
                label:'21年(252期)'
              },
              {
                value:'6',
                label:'20年(240期)'
              },
              {
                value:'7',
                label:'19年(228期)'
              },
              {
                value:'8',
                label:'18年(216期)'
              },
              {
                value:'9',
                label:'17年(204期)'
              },
              {
                value:'10',
                label:'16年(192期)'
              },
              {
                value:'11',
                label:'15年(180期)'
              },
              {
                value:'12',
                label:'14年(168期)'
              },
              {
                value:'13',
                label:'13年(156期)'
              },
              {
                value:'14',
                label:'12年(144期)'
              },
              {
                value:'15',
                label:'11年(132期)'
              },
              {
                value:'16',
                label:'10年(120期)'
              },
              {
                value:'17',
                label:'9年(108期)'
              },
              {
                value:'18',
                label:'8年(96期)'
              },
              {
                value:'19',
                label:'7年(84期)'
              },
              {
                value:'20',
                label:'6年(72期)'
              },
              {
                value:'21',
                label:'5年(60期)'
              },
              {
                value:'22',
                label:'4年(48期)'
              },
              {
                value:'23',
                label:'3年(36期)'
              },
              {
                value:'24',
                label:'2年(24期)'
              },
              {
                value:'25',
                label:'1年(12期)'
              }
            ],
            lv:[
              {
                value:'1',
                label:'基准利率',
                num:'4.9'
              },
              {
                value:'2',
                label:'7折',
                num:'3.4'
              },
              {
                value:'3',
                label:'85折',
                num:'4.1'
              },
              {
                value:'4',
                label:'88折',
                num:'4.3'
              },
              {
                value:'5',
                label:'9折',
                num:'4.4'
              },
              {
                value:'6',
                label:'95折',
                num:'4.6'
              },
              {
                value:'7',
                label:'1.05倍',
                num:'5.1'
              },
              {
                value:'8',
                label:'1.1倍',
                num:'5.3'
              },
              {
                value:'9',
                label:'1.2倍',
                num:'5.8'
              },
              {
                value:'10',
                label:'1.3倍',
                num:'6.3'
              }
            ],
            form:{
               price:'',
              area:'',
              jsID:'',
              csID:'',
              nsID:'',
              lvID:'',
              hkID:'',
              ze:''
            },
            select:0,
            colorStyle:{
              color:"red",
              fontWeight:"bolder"
            },
            value: '',
            options: []
          }
      },
    components:{
      FootComponent,
      NavComponent
    },
      created(){
        if(this.$route.query.id===undefined)
        {
          this.select=0
          this.index=0
        }else{
          this.select=this.$route.query.id
          this.index=this.$route.query.id
        }
        //首页评估跳转
        if(this.$route.query.online!=undefined&&this.$route.query.tableData!=undefined ) {
          this.select=this.$route.query.online
          this.index=this.$route.query.online
          this.tableData=this.$route.query.tableData
        }
        // this.getCity()
      },
      methods:{
        Change(val){
          if(this.mj==='')
          {
            return val*"1"
          }else{
            return val*(this.mj)
          }

        },
        dkStyle(js){
          if(js===true||js==='')
          {
            return {display:'none'}
          }else{
            return {display:'block'}
          }
        },
        Txt(val){
          return "15年10月24日基准利率"+"("+val+")"
        },
        NS(val){
         return val.split("年")[0]
        },
        CS(val){
          return val.split('成')[0]/10
        },
        //清空重置
        cle(){
          this.isJS=true
          this.form={price:'',
            area:'',
            jsID:'',
            csID:'',
            nsID:'',
            lvID:'',
            hkID:'',
            ze:''
          }
        },
        //申报
        Decalare(){
         this.getDecalare()
        },
        //开始计算
        handleJS(){
          this.isJS=false
          this.getOnline();
        },
        //移动端开始计算内容以弹框形式显示
        DialogShow(){
          this.dialogFormVisible=true
          this.$nextTick(function () {
            this.getOnline()
          })
        },
        //根据Index改变内容
        changeMain(index){
            this.select=index
            this.index=index
            this.$router.push({path:'/es',query:{id:index}})
        },
        //计算
        getOnline() {
          let form=this.form
          //根据面积计算
          if(form.jsID===true) {
            this.$http
              .get("/api/Online/OnineCalculate", {
                params: {
                  years:form.nsID,
                  interestRate:form.lvID/100,
                  type:form.hkID,
                  way:form.jsID,
                  unitPrice:form.price,
                  area:form.area,
                  pct:form.csID
                }
              })
              .then(
                function (response) {
                  //为后台返回的数据添加属性名
                 if(form.hkID===true)
                 {
                   this.djStyle={display:'none'}
                   this.djTwoStyle={display:'none'}
                   let name=["sf","yg","ze","lx","hkze","hkys"]
                   this.formTwo=_.object(name,response.data.Result)
                 }else{
                   this.djStyle={display:'flex'}
                   this.djTwoStyle={display:'block'}
                   let name=["sf","yg","dj","ze","lx","hkze","hkys"]
                   this.formTwo=_.object(name,response.data.Result)
                 }
                }.bind(this)
              )
              .catch(
                function (error) {
                  this.$notify.error({
                    title: "出错啦",
                    message: "请输入完整的信息"
                  });
                }.bind(this)
              )}
          //根据总额计算
          else if(form.jsID===false){
            this.$http
              .get("/api/Online/OnineCalculate", {
                params: {
                  years:form.nsID,
                  interestRate:form.lvID/100,
                  type:form.hkID,
                  way:form.jsID,
                  ze:form.ze
                }
              })
              .then(
                function (response) {
                  if(form.hkID===true)
                  {
                    this.djStyle={display:'none'}
                    this.djTwoStyle={display:'none'}
                    let name=["sf","yg","ze","lx","hkze","hkys"]
                    response.data.Result.unshift("无")
                    this.formTwo=_.object(name,response.data.Result)
                  }else{
                    this.djStyle={display:'flex'}
                    this.djTwoStyle={display:'block'}
                    let name=["sf","yg","dj","ze","lx","hkze","hkys"]
                    response.data.Result.unshift("无")
                    this.formTwo=_.object(name,response.data.Result)
                  }
                }.bind(this)
              )
              .catch(
                function (error) {
                  this.$notify.error({
                    title: "出错啦",
                    message: "请输入完整的信息"
                  });
                }.bind(this)
              )
          }else{
            this.$notify.error({
              title: "请选择",
              message: "计算方式"
            });
          }
        },
        //申报
        getDecalare() {
          let sbForm=this.sbForm
          let re= /^1\d{10}$/
          if (re.test(sbForm.phone))
          {
            this.$http
              .get("/api/Online/OnlineDecalare", {
                params: {
                  aname:sbForm.aname,
                  area: parseInt(sbForm.area),
                  price:parseFloat(sbForm.price).toFixed(2),
                  phone:sbForm.phone
                }
              })
              .then(
                function (response) {
                    this.$message(response.data.Result)
                   this.sbForm={}
                }.bind(this)
              )
              .catch(
                function (error) {
                  this.$notify.error({
                    title: "出错啦",
                    message: "错误：请检查网络"
                  });
                }.bind(this)
              )
          }else{
            this.$message("请填写正确的手机号")
          }
        },
        //评估
        showLoading(){
          this.$http
            .get("/api/Online/OnlineService", {
              params: {
                adname:this.adname
              }
            })
            .then(
              function (response) {
               this.tableData=response.data.Result
              }.bind(this)
            )
            // 请求error
            .catch(
              function (error) {
                this.$notify.error({
                  title: "出错啦",
                  message: "错误：请输入正确的小区地址或名称"
                });
              }.bind(this)
            )
        },
        //获取城市
  //     getCity(){
  //   this.$http
  //     .get("/api/Online/GetCity")
  //     .then(
  //       function (response) {
  //         this.options=response.data.Result.slice(0,20)
  //       }.bind(this)
  //     )
  //     .catch(
  //       function (error) {
  //         this.$notify.error({
  //           title: "出错啦",
  //           message: "错误：请检查网络"
  //         });
  //       }.bind(this)
  //     )
  // }
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
      width:75%;
      margin: 0 auto;
      list-style: none;
      li{
        float: left;
        line-height: 100px;
        font-size: 16px;
        font-weight: bolder;
        width:33.3%;
      a{
        text-decoration: none;
        color:rgba(178,177,177,1);
      }
        a:hover{
          cursor: pointer;
        }
        .redHr{
          height:3px;
           width:100%;
          background-color: rgba(232,235,233,1);
        }
      }
    }
  }
  .main{
    padding-bottom: 120px;
    position: relative;
    width:100%;
    .form{
      width:40%;
      margin-left: 10%;
      margin-top: 60px;
      .formBtnTwo{
        display: none;
      }
    }
    .mainHr{
      height: 78%;
      position: absolute;
      display: inline-block;
      top:-0.5rem;
    }
    .content{
      height:450px;
      width: 40%;
      position: relative;
      padding-bottom: 60px;
      margin-top: -22%;
      margin-left:55%;
      .jg{
        height:400px;
        width:50%;
        display: flex;
        position: absolute;
        flex-direction: column;
        margin-top: 3%;
        margin-left: 10%;
        span{
          display: flex;
          flex-direction: row;
          h1:first-child{
            width:140px;
            text-align: left;
          }
       h1:nth-child(2){
         width:50%;
       }
          h1:nth-child(3){
            margin-left: 10%;
          }
        }
      }
      img{
        height: 250px;
        width:250px;
        position: absolute;
        margin-left: -28%;
        margin-top: 10%;
      }
    }
  }
  .mainOne{
    margin-top: 60px;
    width:72%;
    margin-left: 13%;
    display: flex;
    flex-direction: column;
      .t{
      width:100%;
      height:260px;
      border: 1px solid white;
      background: url("../image/valuation_bg.png");
      background-size: 100% 100%;
      .input{
        height: 50px;
        width: 40%;
        margin-left: 30%;
        margin-top: 8%;
        color: #606060;
        display: flex;
        flex-direction: row;
        .leftInput{
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        input{
          width: 50%;
          height: 80%;
          padding: 5px 5px;
          border: none;
          float: left;
          text-indent: 7%;
          font-size: 1.9em;
        }
        .mj{
          width:50%;
          height:50px;
          display: flex;
          flex-direction: row;
          span{
            display: inline-block;
            width:20%;
            height:50px;
            background-color: rgb(245, 247, 246);
            font-size: 3em;
            line-height: 48px;
          }
          input{
            width:85%;
            background-color: rgb(245, 247, 246);
          }
        }
        .select{
          margin-top: 0.3%;
          float: left;
          width:7%;
          position: absolute;
          z-index: 1000;
          margin-left: -28%;
        }
        .right{
          display: inline-block;
          height: 50px;
          padding-right: 20px;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 40px;
          font-size: 2em;
          width:80px;
          float: right;
          background-color:  #009645;
          line-height: 50px;
          margin-right: -5%;
          a{
            color:#ffffff;
          }
        }
        .right:hover{
          cursor: pointer;
        }
      }
    }
     .part{
       margin-top: 30px;
       font-size: 2em;
       span:first-child{
         float: left;
         color:rgba(51,51,51,1);
       }
       .lastSp{
         float: right;
         padding-bottom: 20px;
         color:rgba(179,179,179,1);
       }
     }
    .table{
      padding-bottom: 10px;
    }
    p{
      text-align: left;
      padding-bottom: 60px;
      color:red;
      letter-spacing: 2px;
    }
  }
  .mainTwo{
    width:72%;
    margin-left: 13%;
    margin-top: 60px;
    .sb{
      width:60%;
      margin-left: 25%;
      margin-top: 2%;
      display: flex;
      flex-direction: column;
      span{
        display: flex;
        flex-direction: row;
        margin-top: 2%;
        p{
          color:black;
          font-weight: bolder;
          font-size: 15px;
          width:15%;
        }
        input{
          height: 40px;
          border-radius: 5px;
          width:70%;
          margin-left: 2%;
          border:1px solid white;
          background-color: rgba(245,247,246,1);
          font-size: 14px;
          text-indent: 20px;
        }
      }
      .sbBtn{
        width:20%;
        height:50px;
        background:rgba(231,50,49,1);
        border-radius:5px;
        margin-left: 40%;
        font-size: 16px;
        margin-top: 2%;
        color:rgba(255,255,255,1);
        line-height:47px;
      }
    }
    .mainT{
      background-color: white;
      height:120px;
    }
  }
  @media only screen and (max-width: 1440px){
    .mainOne{
      .t{
        .input{
          input{
            font-size: 1.5em;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1366px){
 .main{
   .content{
     margin-top: -32%;
   }
 }
    .mainOne{
     .t{
       .input{
         margin-top: 10%;
         input{
           width:60%;
         }
       }
     }
    }
  }
  @media only screen and (max-width: 1288px){
 .main{
   .content{
     margin-top: -40%;
     .jg{
       width:57%;
     }
   }
 }
  }
  @media only screen and (max-width:1024px){
    .mainOne{
      .t{
        .input{
          width:50%;
          margin-left: 25%;
          margin-top: 13%;
        }
      }
    }
    .mainTwo{
      width:75%;
    }
  }
  @media only screen and (max-width: 768px) {
    .navComponent{
      margin-top: 0;
    }
    .bt ul{
      width:100%;
      margin-left: -5%;
      height:60%;
      li{
        line-height: 60px;
      }
    }
    .main{
      padding-bottom: 60px;
      margin-top: -60px;
      .form{
        width:100%;
        margin-left: 30px;
        margin-top: 75px;
        .formBtn{
          display: none;
        }
        .formBtnTwo{
          display: block;
          margin-left: 10%;
          position: absolute;
        }
      }
      .mainHr{
        display: none;
      }
      .content{
        display: none;
      }
    }
    .mainOne{
      margin-top: 30px;
      .t{
        .input{
          width:80%;
          margin-left: 10%;
          margin-top: 18%;
        }
      }
    }
    .mainTwo{
      margin-top: 30px;
      .sb{
         width:80%;
         margin-left: 15%;
       }
    }
  }
  @media only screen and (max-width: 650px){
    .bt ul{
      width:100%;
      margin-left: -6.5%;
    }
    .main{
      .form{
        .formBtnTwo{
          margin-left: 4%;
        }
      }
    }
    .mainOne{
      .t{
        .input{
          /*input{*/
            /*text-indent: 38%;*/
          /*}*/
          input{
            width:64%;
          }
          .select{
            width:17%;
          }
          .right{
            width:60px;
          }
        }
      }
    }
    .mainTwo{
      width:100%;
      margin-left: 0%;
    }
  }
  @media only screen and (max-width: 435px) {
    .navComponent{
      margin-top: 60px;
    }
    .bt ul{
        margin-left: -9.5%;
      }
    .main{
      padding-bottom: 60px;
      margin-top: -50px;
      .form{
        width:100%;
        margin-left: -10px;
        .formBtnTwo{
          margin-left: 9%;
        }
        .cle{
          margin-left: 45%;
        }
      }
    }
    .mainOne{
     margin-top: 0;
      width:98%;
      margin-left: 1%;
      .t{
        .input{
          width:80%;
          margin-left: 10%;
          margin-top: 20%;
          input{
            height:70%;
            /*font-size: 1.3em;*/
            /*text-indent: 36%;*/
            font-size: 1.3em;
          }
          .mj{
            span{
              height:45px;
              line-height: 45px;
            }
          }
          .select{
            margin-left: -73%;
            width:23%;
          }
          .right{
            height:45px;
            width:50px;
            font-size: 16px;
            line-height: 45px;
            margin-right: 1%;
            padding-left: 10px;
          }
        }
      }
      .part{
        span{
          margin-left: 0;
          font-size: 0.8em;
        }
      }
    }
    .mainTwo{
        .sb{
          margin-left: 8%;
          span{
            p{
              width:30%;
          }
            input{
              font-size: 12px;
            }
        }
          .sbBtn{
            width:30%;
          }
      }
    }
  }
  @media only screen and (max-width: 415px) {
    .main{
      .form{
        .formBtnTwo{
          margin-left: 9%;
        }
        .cle{
          margin-left: 50%;
        }
      }
    }
    .mainOne{
      .t{
        .input{
          width:85%;
          margin-left: 7.5%;
          margin-top: 21%;

          .right{
            margin-right: -4%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 384px){
    .bt ul{
      margin-left: -10.2%;
    }
    .main{
      .form{
        .formBtnTwo{
          margin-left: -8%;
        }
        .cle{
          margin-left: 35%;
        }
      }
    }
    .mainOne{
      margin-top: 0;
      width:98%;
      margin-left: 1%;
      .t{
        .input{
          width:90%;
          margin-left: 3%;
          margin-top: 24%;
          /*input{*/
            /*text-indent: 38%;*/
          /*}*/
          .select{
            margin-left: -85%;
            width:28%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 360px){
    .bt ul{
      margin-left: -10.6%;
    }
    .mainOne{
      .t{
        .input{
          input{
         font-size: 1.3em;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 320px){
    .bt ul{
      margin-left: -12.5%;
    }
    .mainOne{
      .t{
        .input{
         width:95%;
          margin-left:0%;
          input{
            font-size: 1.2em;
          }
          .select{
            margin-left: -92%;
            width:31%;
          }
          .right{
            padding-left: 5px;
          }
        }
      }
    }
    .mainTwo{
      .sb{
        width:90%;
        margin-left: 3%;
      }
    }
  }
}
</style>
