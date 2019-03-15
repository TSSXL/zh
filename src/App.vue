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
  .el-radio-button{
    margin-top: 10px;
  }
  .el-menu--horizontal>.el-menu-item{
    margin-left: 15%;
  }
  .el-input__inner{
    border: none;
  }
  .el-menu--popup{
    min-width:100px;
    background-color: #A9B5BD;
  }
  .el-menu{
    background-color: #c2ced6;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-submenu .el-menu-item{
    color:gray;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #EFEFEF;
  width: 100%;
}
</style>
