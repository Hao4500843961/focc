<template>
  <div class="bodybg">
    <div class="content">
      <el-container class="card">
        <el-aside width="110px">
          <div class="block"><el-avatar shape="square" :size="50" :src="headImg" v-on:listenToChildEvent="onclick"></el-avatar></div>
          <!--123-->
          <el-col :span="20">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#1183FB"
              text-color="#fff"
              active-text-color="#ffd04b"
              router>
              <el-menu-item index="/contactsList">
                <i class="el-icon-location"></i>
                <span slot="title">聊天</span>
              </el-menu-item>
              <el-menu-item index="/dial">
                <i class="el-icon-menu"></i>
                <span slot="title">拨号</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">通讯录</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <!--123-->
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  import Dial from '../components/views/dial'
  import ContactsList from '../components/views/contactsList'
  export default {
    name: "Home",
    data() {
      return {
        headImg:require('../assets/head_img.png')
      }
    },
    components:{
      Dial,
      ContactsList
    },
    methods:{
      onclick(data){
        this.$router.push(data)
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
	.el-main{
    padding: 0 !important;
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
