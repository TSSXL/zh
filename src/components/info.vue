<template>
  <div class="components-container">
    <NavComponent class="navComponent"></NavComponent>
    <img src="../image/divider.png" alt="" style="height:60px;width:100%;">
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/news' }">新闻资讯</el-breadcrumb-item>
        <el-breadcrumb-item><a @click="back" >{{msg}}</a></el-breadcrumb-item>
        <el-breadcrumb-item>正文</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
      <UE class="editor-container" :defaultMsg=defaultMsg :config=config ref="ue"></UE>
    <Foot-Component></Foot-Component>
  </div>
</template>
<script>
  import UE from './ue';
  import NavComponent from './nav'
  import FootComponent from  './foot'
  export default {
    components: {UE,NavComponent,FootComponent},
    data() {
      return {
        msg:"",
        defaultMsg: '',
        config: {
          initialFrameWidth:null,
          initialFrameHeight: 600
        }
      }
    },
    created(){
      this.defaultMsg=decodeURIComponent(this.$route.query.a)
      this.msg=this.$route.query.b
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
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
    width:79%;
    margin-left: 21%;
    margin-top: 30px;
  }
  .editor-container{
    width:52%;
    margin-left: 21%;
    margin-top: 50px;
    padding-bottom: 60px;
  }
  @media only screen and (max-width: 1366px){
    .editor-container{
      width:60%;
      margin-left: 21%;
    }
  }
  @media only screen and (max-width: 1024px){
    .bread{
      margin-left: 10%;
    }
    .editor-container{
      width:80%;
      margin-left: 10%;
    }
  }
  @media only screen and (max-width: 768px){
    .navComponent{
     margin-top: 0%;
    }
    .bread{
      margin-left: 10%;
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
    .editor-container{
      width:80%;
      margin-left: 10%;
      padding-bottom: 30px;
    }
  }
  @media only screen and (max-width: 384px){
    .navComponent{
      margin-top: 16%;
    }
  }
  @media only screen and (max-width: 360px){
    .navComponent{
      margin-top: 18%;
    }
  }
  @media only screen and (max-width: 320px){
    .navComponent{
      margin-top: 20%;
    }
  }
}

</style>
