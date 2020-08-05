<template>
  <div>


    <el-container>
      <el-aside width="330px">通话
        <el-input class="search"
                  placeholder="请输入关键字"
                  prefix-icon="el-icon-search"
                  v-model="search" clearable>
        </el-input>

      </el-aside>
      <el-container>
        <el-header height="109px" >Header</el-header>
        <el-main >Main</el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
    export default {
        name: "Dial"
    }
</script>

<style scoped>
  .el-header {
    background-color: #000000;
    color: #333;
    text-align: center;
    line-height: 35px;
    height: 109px;
    width:931px ;
  }

  .el-aside {
    background-color: #FFFFFF;
    color: #333;
    /*text-align: -webkit-match-parent;*/
    line-height: 24px;
    height: 800px;
  }

  .el-main {
    background-color: #151515;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 683px;
    width:931px ;
  }
  .el-input{
    margin-top: 82px;
    width: 290px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>
