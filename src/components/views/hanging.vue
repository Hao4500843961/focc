<template>
  <div>


    <el-container>
      <el-aside width="330px">
        <el-row class="call"><span class="callSpan">通话</span><span><el-button class="anniu" size="mini"
                                                                              icon="el-icon-plus"></el-button></span>
        </el-row>
        <el-row>
          <el-col :span="4"><span class="imageSpan"> <el-avatar shape="square" :size="50" :src="circleUrl"></el-avatar></span>
          </el-col>
          <el-col :span="20">
            <el-row><span class="name">小红</span><span><el-button type="success" class="status" size="supermini"
                                                                 icon="el-icon-check"></el-button></span></el-row>
            <el-row>95125158522</el-row>
          </el-col>
        </el-row>


        <el-input class="search"
                  placeholder="请输入关键字"
                  prefix-icon="el-icon-search"
                  v-model="currentNumber" clearable>
        </el-input>
        <div class="inputBtnList">
          <el-button @click="traceNumber" v-for="(item, key) in buttons" :key="key">{{item}}</el-button>
          <el-button icon="el-icon-phone" @click="phone"></el-button>
          <el-button type="danger" icon="el-icon-video-camera"></el-button>
          <el-button icon="el-icon-folder-delete" @click="clear"></el-button>
          <!--                    <el-button  icon="el-icon-phone" @click="testStart">初始化</el-button>-->
          <!--          <el-button   @click="captureLocalMedia">本地媒体</el-button>-->
        </div>

      </el-aside>
      <el-container>
        <el-header style="width: 100%;height: 110px;color: #FFFFFF;" >
          <el-container style="height: 100%;width: 100%">
            <div class="demo-image imgStyle" v-for="imgData in imgDatas" :key="imgData"  >
              <div class="block centerStyle">
                <el-image
                  style="width: 26px; height: 26px"
                  :src="imgData.url"
                  :fit="contain"></el-image>
                <span class="demonstration" style="display: block">{{ imgData.name }}</span>
              </div>
            </div>
          </el-container>
        </el-header>
        <el-main style="width: 100%">
          <el-container style="margin-top: 200px">
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 100px; height: 100px;margin-left: 350px;margin-top: 50px"
                  :src="url9"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 30px; height: 30px;margin-left: 30px;margin-top: 0px"
                  :src="url11"
                  :fit="fit"></el-image>
              </div>
            </div>
            <span style="color: #FFFFFF;font-size: 20px;margin-left:-30px;margin-top: 30px" v-model="currentNumber" >{{phone_num}}</span>
            <div class="timer">
              <div ref="startTimer" style="margin-left: -170px;margin-top: 65px;color: yellow" >00:00</div>
            </div>
          </el-container>
          <el-button class="el-icon-phone-icon11" style="border-style:none;margin-top: 100px" @click="hangup"></el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
  import * as SIP from "jssip";

  let outgoingSession = null;
  let incomingSession = null;
  let currentSession = null;
  let audio = document.getElementById('audio');
  let constraints = {
    audio: true,
    video: true,
  }
  let localStream = null;
  let userAgent = null;
  //  URL = window.URL||window.webkitURL;
  export default {
    created() {

    },
    data() {
      return {
        currentNumber: '',
        buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'],
        circleUrl: require("../../assets/head_img.png"),
        imgDatas: [
          {name: '静音', url: require('../../assets/fooc_xiaotu/jingyin.png')},
          {name: '喇叭', url: require('../../assets/fooc_xiaotu/laba.png')},
          {name: '信号', url: require('../../assets/fooc_xiaotu/xinhao5.png')},
          {name: '录音', url: require('../../assets/fooc_xiaotu/luyin.png')},
          {name: '视频', url: require('../../assets/fooc_xiaotu/shipin.png')},
          {name: '暂停', url: require('../../assets/fooc_xiaotu/zantingtingzhi.png')},
          {name: '下一个', url: require('../../assets/fooc_xiaotu/long-arrow-right.png')},
          {name: '添加', url: require('../../assets/fooc_xiaotu/add-sy.png')},
        ],
        fits:[''],
        url9:require('../../assets/fooc_xiaotu/person.png'),
        url11:require('../../assets/fooc_xiaotu/signal.png'),
      }
    },
    name: "Dial",
    "methods": {
      traceNumber: function (event) {
        const btnText = event.target.textContent
        if (btnText === 'Clear') {
          this.currentNumber = ''
        } else if (btnText === 'Undo') {
          this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1)
        } else {
          this.currentNumber += btnText
        }
      },
      clear: function () {
        this.currentNumber = '';
      },



      captureLocalMedia: function () {
        function gotLocalMedia(stream) {
          console.info('Received local media stream');
          localStream = stream;
          audio.src = URL.createObjectURL(stream);
        }

        console.info('Requesting local video & audio');
        navigator.getUserMedia(constraints, gotLocalMedia, function (e) {
          alert('getUserMedia() error: ' + e.name);
        });
        // alert('success');
      },

      hangup(){
        this.$router.push('/dial')
        var to =document.getElementById(this.currentNumber);
        var sipsession = userAgent.invite(to + '@:7443', {
          sessionDescriptionHandlerOptions: {
            constraints: {
              'audio': true,
              'video': false ,
            }
          }
        });
        var eventHandlers = {
          'ended': function(e){
            console.log('call ended : ', e);
          }
        };
      },

      phone: function () {
        var socket = new SIP.WebSocketInterface('wss://sip.112.124.15.33.com');
        //   var socket = new SIP.WebSocketInterface('wss://sip.112.124.15.33:7433.com');
        //socket = new SIP.WebSocketInterface('ws://sip.112.124.15.33:5066');
        let configuration = {
          //  uri: 'sip:1010@112.124.15.33',
          uri: 'sip:1010@192.168.1.1',
          sockets:[socket],
          transportOptions: {
            ws_servers: 'ws://112.124.15.33:7433',
          },
          authorizationUser: '1010',
          password: '1234'
          //register: true,//指示启动时JsSIP用户代理是否应自动注册
          //session_timers: false//启用会话计时器（根据RFC 4028）
        }
        userAgent = new SIP.UA(configuration);
        // 连接到信令服务器，并恢复以前的状态，如果以前停止。重新开始时，如果UA配置中的参数设置为，则向SIP域注册。
        userAgent.start();

        //注册监听事件监听各个连接状态
        let eventHandlers = {
          'progress': function (e) {
            console.log('call is in progress');
          },
          'failed': function (e) {
            console.log('call failed: ', e);
          },
          'ended': function (e) {
            console.log('call ended : ', e);
          },
          'confirmed': function (e) {
            console.log('call confirmed');
          }
        };
        let options = {
          'eventHandlers': eventHandlers,
          'mediaConstraints': {
            'audio': true, 'video': false,
          },
          'mediaStream': null
        };

        outgoingSession = userAgent.call('sip:1005@112.124.15.33', options);
        alert('sucess')
      }


    }

  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .el-header {
    background-color: #000000;
    color: #333;
    text-align: left;
    line-height: 35px;
    height: 109px;
    width: 931px;
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
    width: 931px;
  }

  .el-input {
    margin-top: 30px;
    width: 290px;
    height: 25px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .pinPage {
    background-size: 100% 100%;
    overflow: hidden;
    width: 400px;
    height: 200px
  }

  .imgStyle {
    height: 100%;
    width: 100px;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
  }

  .centerStyle{
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .inputBtnList {
    text-align: initial;
    width: 330px;
    box-sizing: border-box;
    height: auto;
  }

  input {
    width: 100px;
    height: 15px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .el-button {
    width: 70px;
    height: 40px;
    margin-top: 30px;
    border-radius: 20px;
    margin-left: 30px;
    /*padding-left: 31px;*/
    /*border-bottom-left-radius: 31px;*/
    border: 1px solid rgba(153, 153, 153, 1);
    /*background-color: transparent*/
    /*background-color: #FFFFFF;*/

  }

  .el-button--mini {
    width: 30px;
    height: 30px;
    margin-left: 0;
    margin-top: 0;
    margin-right: 30px;
    float: right;
    border-radius: 0px;
  }

  .el-button--supermini {
    width: 15px;
    height: 15px;
    margin-left: 0;
    margin-top: 0;
    margin-right: 20px;
    /*float: right;*/
    /*border-radius:0px;*/

  }

  .callSpan {
    width: 58px;
    height: 28px;
    font-size: 30px;
    font-family: PingFang;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    vertical-align: middle;
  }

  .search {
    margin-outside: 60px;
  }

  .call {
    margin: 25px 0;
  }

  .imageSpan {
    width: 20px;
    height: 20px;
  }

  .name {
    border-radius: 4px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>

