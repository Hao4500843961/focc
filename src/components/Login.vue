<template>
  <div class="bodybg">
    <div class="login">
      <el-col class="ziti">FOCC系统平台</el-col>

      <el-card class="card" >
        <el-input
          class="mg-top-52"
          placeholder="请输入帐号"
          prefix-icon="icon-ali-account"
          v-model="account"
          clearable
        ></el-input>
        <el-input
          class="mg-top-20"
          placeholder="请输入密码"
          prefix-icon="icon-ali-mima"
          v-model="password"
          show-password
          clearable
        ></el-input>
        <el-input
          class="mg-top-20"
          placeholder="请输入IP"
          prefix-icon="icon-ali-ip1"
          v-model="proxy"
          clearable
        ></el-input>
        <el-button type="primary" class="mg-top-20 login_btn" round v-on:click="tin">注册</el-button>
        <el-button type="primary" class="mg-top-20 login_btn" round v-on:click="toHomePage">登录</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>

  import * as SIP from "jssip";
  export default {
    name: "Login",
    data() {
      return {
        account: 'sip:1009@192.168.1.7',
        password: '1234',
     //   proxy: 'ws://192.168.27.135:5066'
        // account: Jssip.account,
        // password: Jssip.password,
        // proxy: Jssip.proxy,
      };
    },
    methods: {
      toHomePage() {
        this.$router.push("/contactsList");
      },
      //注册
      tin() {
        SIP.C.SESSION_EXPIRES=120,SIP.C.MIN_SESSION_EXPIRES=120;
 //        var acc_uri =this.account;
 //       // var ws_uri ='112.124.15.33';
 //        var pass_uri = this.password
 //    //    console.info(acc_uri,ws_uri,pass_uri);
 //      //  var socket = new SIP.WebSocketInterface(ws_uri);
 //        var socket = new SIP.WebSocketInterface('ws://112.124.15.33:5066');
 //        var configuration = {
 //          sockets: [socket],
 // //         outbound_proxy_set: ws_uri,
 //          uri: acc_uri,
 //          password: pass_uri,
 //          authorizationUser: '1017',
 //          register: true,
 //          session_timers: false,
 //          contact_uri: 'sip:1017@192.168.1.7'+';transport=ws',
 //        };
 //        var userAgent = new SIP.UA(configuration);
 //        var ans = userAgent.isRegistered()
 //        console.info(ans);



        let socket = new SIP.WebSocketInterface('ws://112.124.15.33:5066');

        let configuration = {
          uri: 'sip:1017@112.124.15.33',
          // uri: 'sip:1010@192.168.1.1',
          sockets:[socket],
          authorization_user: '1017',
          password: '1234',
          display_name:'1017',
        //  register: true,//指示启动时JsSIP用户代理是否应自动注册
          //session_timers: false//启用会话计时器（根据RFC 4028）

         contact_uri: 'sip:1017@112.124.15.33'+';transport=ws',
        }
        let userAgent = new SIP.UA(configuration);
        var ans = userAgent.isRegistered();
          console.info(ans);


      },
    },
  };
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
  }

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
  .ziti{
    width:406px;
    height:45px;
    font-size:45px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .login {
    height: 480px;
    width: 480px;
    /*position: absolute;
      top: 30%;
      left: 40%;*/
    margin: 0 auto;
    position: relative;
    transform:translateY(-50%);
    top: 50%;
  }
  .card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    height: 400px;
    width: 480px;
    margin-top: 303px;
    background: rgba(255, 255, 255, 0.3);

  }
  .mg-top-52 {
    margin-top: 52px;
  }
  .mg-top-20 {
    margin-top: 20px;
  }
  .mg-top-92 {
    margin-top: 92px;
  }
  .login_btn {
    width: 360px;
  }
  .height-55 {
    height: 55px;
  }
</style>
