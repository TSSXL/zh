<template>
    <div class="gj">
      <el-row>
        <el-col  :xs="2" :sm="3"  :lg="3" :xl="3"><div class="aDiv" ></div></el-col>
        <el-col  :xs="2" :sm="3"  :lg="3" :xl="3"><div class="bg aDiv"  ></div></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" @click="gotoIndex" style="color:#6393ff;">首页</a></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" @click="gotoEstimate">在线评估</a></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" @click="gotoNews">新闻资讯</a></el-col>
        <el-col  :xs="4" :sm="3"  :lg="3" :xl="3"><a class="aDiv" @click="gotoMine">关于我们</a></el-col>
        <el-col  :xs="4" :sm="6"  :lg="6" :xl="6"><div class="aDiv"></div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
     data(){
          return{
          }
     },
      methods:{
        gotoIndex(){
          this.$router.push({path:'/'})
        },
        gotoEstimate(){
          this.$router.push({path:'/es'})
          },
        gotoNews(){
          this.$router.push({path:'/news'})
        },
        gotoMine(){
          this.$router.push({path:'/mine'})
        }
      }
    }
</script>

<style scoped>
  .bg{
    background-color: #B6E0EE;
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
  a:hover{
    cursor: pointer;
  }
  a:active {
    color: #6393ff;
  }
  @media only screen and (max-width: 768px){
    .aDiv{
      height:40px;
      line-height: 40px;
      font-size: 1em;
    }
    .bg{
      background-color: white;
    }
  }

</style>
