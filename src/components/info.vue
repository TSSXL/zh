<template>
  <div class="components-container">
    <NavComponent class="navComponent"></NavComponent>
    <img src="../image/divider.png" alt="" style="height:60px;width:100%;">
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/news' }">新闻资讯</el-breadcrumb-item>
        <el-breadcrumb-item><a @click="back">公司新闻</a></el-breadcrumb-item>
        <el-breadcrumb-item>正文</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
    </div>
  </div>
</template>
<script>
  import UE from './ue';
  import NavComponent from './nav'
  export default {
    components: {UE,NavComponent},
    data() {
      return {
        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth:null,
          initialFrameHeight: 600
        }
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        console.log(content)
      },
      back(){
        this.$router.go(-1);
      }
    }
  };
</script>
<style lang="scss" scoped>
.components-container{
  width:100%;
  .bread{
    width:20%;
    margin-left: 21%;
    margin-top: 30px;
  }
  .editor-container{
    width:52%;
    margin-left: 21%;
    margin-top: 30px;
    padding-bottom: 60px;
  }
  @media only screen and (max-width: 1366px){
    .editor-container{
      width:60%;
      margin-left: 21%;
    }
  }
  @media only screen and (max-width: 768px){
    .navComponent{
     margin-top: 0%;
    }
    .bread{
      width:40%;
      margin-left: 10%;
      margin-top: 30px;
    }
    .editor-container{
      width:80%;
      margin-left: 10%;
    }
  }
  @media only screen and (max-width: 450px){
    .navComponent{
      margin-top: 14%;
    }
    .bread{
      width:50%;
      margin-left: 10%;
      margin-top: 30px;
    }
    .editor-container{
      width:80%;
      margin-left: 10%;
      padding-bottom: 30px;
    }
  }
}

</style>
