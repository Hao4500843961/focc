<template>
  <div class="bodybg">
    <div class="login">
      <el-card>测试element UI 是否生效，此页是登录注册页面</el-card>
      <el-button type="warning">警告</el-button>
      <b-card-img></b-card-img>
      <el-calendar></el-calendar>
      <!--<button type="submit" class="btn btn-primary btn-block btn-large">Sign in</button>-->

    </div>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  * { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }

  html { width: 100%; height:100%; overflow:hidden; }

  .bodybg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: hidden;
    background-color: #9198e5; /* 浏览器不支持时显示 */
    background-image: linear-gradient(lightgrey, #9198e5);
  }


</style>
