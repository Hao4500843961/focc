<template>
  <div class="bodybg">
    <div class="content">
      <el-container class="card">
        <el-aside width="110px">最左边蓝色区域</el-aside>
        <el-container>
          <el-header height="80px">
            <el-input class="search"
              placeholder="搜索联系人、群组"
              prefix-icon="el-icon-search"
              v-model="search" clearable>
            </el-input>
          </el-header>
          <el-container>
            <el-aside width="330px" class="colorbg">通讯录列表</el-aside>
            <el-container>
              <el-main>聊天窗口</el-main>
              <el-header height="50px">图标栏</el-header>
              <el-footer height="150px">输入框</el-footer>
            </el-container>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .bodybg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: hidden;
    background: url("../assets/home_bg.jpg") no-repeat 100% 100%;
    background-size: 100%;
  }

  .content {
    height: 800px;
    width: 1400px;
    margin: auto;
  }

  .card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    height: 100%;
    width: 100%;
    background-color: white;
  }

  .el-header {
    background-color: gold;
    color: #333;
    border: 1px solid #42b983;
  }

  .el-footer {
    background-color: rosybrown;
    color: #333;
    border: 1px solid #42b983;
  }

  .el-aside {
    background-color: #1183FB;
    color: #333;
  }

  .colorbg {
    background-color: aquamarine;
  }

  .colorbg1 {
    background-color: forestgreen;
  }

  .search{
    height: 30px;
    width: 250px;
    float: left;
    vertical-align: middle;
  }
</style>
