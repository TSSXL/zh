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
       <p class="title">{{title}}</p>
     <p class="time">{{time}}</p>
      <div class="a" v-html="defaultMsg"></div>
    <div class="kbContent"></div>
    <Foot-Component></Foot-Component>
  </div>
</template>
<script>
  import NavComponent from './nav'
  import FootComponent from  './foot'
  export default {
    components: {NavComponent,FootComponent},
    data() {
      return {
        msg:"",
        defaultMsg: '',
        title:'',
        time:''
      }
    },
    created(){
      this.defaultMsg=decodeURIComponent(this.$route.query.a.Contexts)
      this.msg=this.$route.query.a.Category
      this.title=this.$route.query.a.Title
      this.time=this.$route.query.a.CreateTime
    },
    methods: {
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
  .a{
    width:100%;
    margin-top: 40px;
  }
  .title{
    font-size: 18px;
    font-weight: bolder;
    color:#4C4C4C
  }
  .time{
    font-size: 14px;
    color:#B2B2B2;
  }
.kbContent{
  height:450px;
}
  @media only screen and (max-width: 1680px){
    .kbContent{
      height:550px;
    }
  }
  @media only screen and (max-width: 1366px){
    .kbContent{
      height:400px;
    }
  }
  @media only screen and (max-width: 1024px){
    .bread{
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
  }
  @media only screen and (max-width: 600px){
    .kbContent{
      height:350px;
    }
  }
  @media only screen and (max-width: 450px){
    .navComponent{
      margin-top: 14%;
    }
    .kbContent{
      height:310px;
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
<!--因为是对v-html样式进行处理-->
<style>
  @media only screen and (max-width: 450px){
    .a p{
      width:100%;
    }
    .a p img{
     width:100%;
    }
  }
</style>
