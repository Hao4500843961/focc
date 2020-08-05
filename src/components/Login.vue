<template>
  <div class="bodybg">
    <div class="login">
      <el-card class="card">
        <el-input class="mg-top-52"
          placeholder="请输入帐号"
          prefix-icon="icon-ali-account"
          v-model="account" clearable>
        </el-input>
        <el-input class="mg-top-20"
          placeholder="请输入密码"
          prefix-icon="icon-ali-mima"
          v-model="password" show-password clearable>
        </el-input>
        <el-input class="mg-top-20"
          placeholder="请输入IP"
          prefix-icon="icon-ali-ip1"
          v-model="proxy" clearable>
        </el-input>
        <el-button type="primary" class="mg-top-92 login_btn" round v-on:click="toHomePage">
          登录
        </el-button>
      </el-card>

    </div>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          account: '',
          password: '',
          proxy: ''
        }
      },
      methods:{
        toHomePage(){
          this.$router.push('/home')
        }
      }
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
    /*background-color: #9198e5; !* 浏览器不支持时显示 *!
    background-image: linear-gradient(lightgrey, #9198e5);*/
    background: url("../assets/bg.png") no-repeat 100% 100%;
    background-size: 100%;
  }
  .login{
    height: 480px;
    width: 480px;
    margin: auto;
    /*position: absolute;
    top: 30%;
    left: 40%;*/
  }
  .card{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    height: 100%;
    width: 100%;
    background:rgba(255,255,255,0.3);
  }
  .mg-top-52{
    margin-top: 52px;
  }
  .mg-top-20{
    margin-top: 20px;
  }
  .mg-top-92{
    margin-top: 92px;
  }
  .login_btn{
    width: 360px;
  }
  .height-55{
    height: 55px;
  }


</style>
