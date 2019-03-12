<template>
    <div class="gj">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item class="menuItem" index="1" @click="gotoIndex">首页</el-menu-item>
        <el-menu-item class="menuItem" index="2" @click="gotoEstimate">在线评估</el-menu-item>
        <el-menu-item class="menuItem" index="3" @click="gotoNews">新闻资讯</el-menu-item>
        <el-menu-item class="menuItem" index="4" @click="gotoMine">关于我们</el-menu-item>
      </el-menu>
      <div class="show">
        <el-radio-group v-model="isCollapse" style="float: right;">
          <el-radio-button :label="false" style="margin-top: 8px;">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <img src="../image/nav.png" alt="" style="height:40px;width:40px;margin-left: -10px;">
              <span slot="title">导航栏</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="gotoIndex">首页</el-menu-item>
              <el-menu-item index="1-2" @click="gotoEstimate">在线评估</el-menu-item>
              <el-menu-item index="1-3" @click="gotoNews">新闻资讯</el-menu-item>
              <el-menu-item index="1-4" @click="gotoMine">关于我们</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
</template>

<script>
    export default {
     data(){
          return{
            elRowStyle:{
              display:"block"
            },
            activeIndex2:'',
            isCollapse: true,
            index:''
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
        },
        handleSelect(key) {
          this.activeIndex2=key;
        },
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style  scoped>
  .menuItem{
    margin-left: 15%;
  }
  .show{
    display: none;
  }

  @media only screen and (max-width: 450px){
    .el-menu-demo{
      display: none;
    }
    .show{
      display: block;
      width:99%;
      background-color: #a9b5bd;
    }
  }

</style>
