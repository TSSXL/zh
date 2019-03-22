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
        defaultMsg: '',
        config: {
          initialFrameWidth:null,
          initialFrameHeight: 600
        }
      }
    },
    created(){
      let url="%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191106802846184083.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_01.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191137565741856193.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_02.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191255636684398407.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_03.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191502032867509486.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_04.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191555062246881890.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_05.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191563070364624461.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_06.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191555843526881890.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_07.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191675086382180767.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_08.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cimg%20src%3D%22http%3A%2F%2Fjmjback.kimijia.com%2Fstatic%2FUEtidor%2Fnet%2Fupload%2Fimage%2F20190320%2F6368867191668738482965614.jpg%22%20style%3D%22%22%20title%3D%22%E8%AF%A6%E6%83%85%E9%A1%B5_09.jpg%22%2F%3E%3C%2Fp%3E%3Cp%3E%3Cbr%2F%3E%3C%2Fp%3E"
      this.defaultMsg=decodeURIComponent(url)
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
    margin-top: 50px;
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
  @media only screen and (max-width: 380px){
    .navComponent{
      margin-top: 16%;
    }
  }
  @media only screen and (max-width: 360px){
    .navComponent{
      margin-top: 18%;
    }
    .bread{
      width:60%;
      margin-left: 10%;
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 320px){
    .navComponent{
      margin-top: 20%;
    }
  }
}

</style>
