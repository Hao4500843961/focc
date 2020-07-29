<template>
  <div class="bodybg">
    <div class="content">
      <el-container class="card">
        <el-aside width="110px">FOCC
          <div class="block"><el-avatar shape="square" :size="50" :src="headImg"></el-avatar></div>
        </el-aside>
        <el-container>
          <el-header height="80px" class="border-bottom">
            <el-input class="search"
              placeholder="搜索联系人、群组"
              prefix-icon="el-icon-search"
              v-model="search" clearable>
            </el-input>
          </el-header>
          <el-container>
            <el-aside width="330px" class="bg_white border-right">通讯录列表</el-aside>
            <el-container>
              <el-main class="bg_gray">聊天窗口</el-main>
              <el-header height="50px" class="bg_white border-bottom">
                <el-row style="float: left">
                  <el-button  type="text" icon="icon-ali-biaoqing1" ></el-button>
                  <el-button  type="text" icon="icon-ali-wenjian" ></el-button>
                  <el-button  type="text" icon="icon-ali-jietu2" ></el-button>
                  <el-button  type="text" icon="icon-ali-dianhua1" ></el-button>
                  <el-button  type="text" icon="icon-ali-shipin" ></el-button>
                </el-row>
              </el-header>
              <el-footer height="150px">
                文本输入区域
              </el-footer>
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
        search: '',
        headImg:require('../assets/head_img.png')
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
    background-color: white;
    color: #333;
  }
  .border-right{
    border-right: 1px solid #E6E6E6;
  }

  .border-bottom{
    border-bottom: 1px solid #E6E6E6;
  }

  .el-footer {
    color: #333;
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

  .bg_gray{
    background-color: #EEF1F3;
  }
  .bg_white{
    background-color: white;
  }
</style>
