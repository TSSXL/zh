<template>
  <div id="app">
    <router-view  />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  .el-form-item__label{
    font-weight: bolder;
  }
  .edui-editor-imagescale{
    left: 307px !important;
    top: 399px !important;
  }
  .edui-popup-body{
    width:92px !important;
  }
  .edui-popup-content{
    width:150px !important;
  }
  .el-input-group__append, .el-input-group__prepend{
    padding: 2px;
    font-size: 10px;
    background-color: #F5F7F6;
    border: none;
  }
  .el-menu{
    border: none;
  }
  .el-menu-vertical-demo{
    height:120px;
    display: flex;
    flex-direction: row;
    width:220px;
    flex-wrap: wrap;
    background: transparent;
  }
  .el-input--suffix .el-input__inner{
    background-color: #F5F7F6;
  }
  .el-radio-button{
    margin-top: 10px;
  }
  .el-icon-location:before,.el-icon-menu:before,.el-icon-document:before,.el-icon-setting:before{
    color: #9dacff;
  }
  .el-menu-item, .el-submenu__title{
    width:100px;
    color:#9dacff;
  }
  .el-menu--horizontal>.el-menu-item{
    margin-left: 15%;
  }
  .el-input__inner{
    border: none;
    background-color: #F5F7F6;
  }
  .el-menu--popup{
    min-width:100px;
    background-color: #A9B5BD;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: 0;
  }
#app {
  font-family: FZLTHK--GBK1-0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #EFEFEF;
  width: 100%;
}
</style>
