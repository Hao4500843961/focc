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
          <!--          <el-button  icon="el-icon-phone" @click="testStart">初始化</el-button>-->
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
          <span style="color: #FFFFFF;font-size: 30px">正在呼叫...</span>
          <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit">
              <span class="demonstration">{{ fit }}</span>
              <el-image
                style="width: 300px; height: 150px"
                :src="url10"
                :fit="fit"></el-image>
            </div>
          </div>
          <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit">
              <span class="demonstration">{{ fit }}</span>
              <el-image
                style="width: 71px; height: 33px"
                :src="url9"
                :fit="fit"></el-image>
            </div>
          </div>
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
      let data = JSON.parse(this.$route.query.item)
      this.shuxing = data
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
        url9: require('../../assets/fooc_xiaotu/calling.png'),
        url10: require('../../assets/fooc_xiaotu/10.png')
      }
    },
    name: "Dial",
    methods: {
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
      testStart: function () {
        //   socket = new SIP.WebSocketInterface('wss://sip.112.124.15.33:7433');
        socket = new SIP.WebSocketInterface('ws://sip.112.124.15.33:5066');
        const configuration = {
          sockets: [socket],
          uri: 'sip:1010@112.124.15.33',
          authorizationUser: '1010',
          password: '1234'
          //register: true,//指示启动时JsSIP用户代理是否应自动注册
          //session_timers: false//启用会话计时器（根据RFC 4028）
        }
        userAgent = new SIP.UA(configuration);


        alert('success');
        //成功注册成功,data:Response JsSIP.IncomingResponse收到的SIP 2XX响应的实例
        userAgent.on('registered', function (data) {
          console.info("registered: ", data.response.status_code, ",", data.response.reason_phrase);
        });
        //由于注册失败而被解雇,data:Response JsSIP.IncomingResponse接收到的SIP否定响应的实例，如果失败是由这样的响应的接收产生的，否则为空
        userAgent.on('registrationFailed', function (data) {
          console.log("registrationFailed, ", data);
        });
        userAgent.on('newRTCSession', function (data) {
          console.info('onNewRTCSession: ', data);
          if (data.originator === 'remote') { //incoming call
            console.info("incomingSession, answer the call");
            incomingSession = data.session;
            //回答传入会话。此方法仅适用于传入会话。
            data.session.answer({
              'mediaConstraints': {'audio': true, 'video': true},
              // 'mediaStream': localStream
            });
          } else {
            console.info("outgoingSession");
            outgoingSession = data.session;
            outgoingSession.on('connecting', function (data) {
              console.info('onConnecting - ', data.request);
              currentSession = outgoingSession;
              outgoingSession = null;
            });
          }
          //接受呼叫时激发
          data.session.on('accepted', function (data) {
            console.info('onAccepted - ', data);
            if (data.originator === 'remote' && currentSession == null) {
              currentSession = incomingSession;
              incomingSession = null;
              console.info("setCurrentSession - ", currentSession);
            }
          });
          //确认呼叫后激发
          data.session.on('confirmed', function (data) {
            console.info('onConfirmed - ', data);
            if (data.originator === 'remote' && currentSession == null) {
              currentSession = incomingSession;
              incomingSession = null;
              console.info("setCurrentSession - ", currentSession);
            }
          });
          //在将远程SDP传递到RTC引擎之前以及在发送本地SDP之前激发。此事件提供了修改传入和传出SDP的机制。
          data.session.on('sdp', function (data) {
            console.info('onSDP, type - ', data.type, ' sdp - ', data.sdp);
          });
          //接收或生成对邀请请求的1XX SIP类响应（>100）时激发。该事件在SDP处理之前触发（如果存在），以便在需要时对其进行微调，甚至通过删除数据对象中响应参数的主体来删除它
          data.session.on('progress', function (data) {
            console.info('onProgress - ', data.originator);
            if (data.originator === 'remote') {
              console.info('onProgress, response - ', data.response);
            }
          });
          //创建基础RTCPeerConnection后激发。应用程序有机会通过在peerconnection上添加RTCDataChannel或设置相应的事件侦听器来更改peerconnection。
          data.session.on('peerconnection', function (data) {
            console.info('onPeerconnection - ', data.peerconnection);
            data.peerconnection.onaddstream = function (ev) {
              audio.src = URL.createObjectURL(ev.stream);
              audio.onloadstart = () => {
                audio.play();
              };
              audio.onerror = () => {
                alert('录音加载失败...');
              };
            };
          });
        });
        //为传入或传出消息请求激发。data:
        //     originator：'remote',新消息由远程对等方生成；'local',新消息由本地用户生成。
        //      message:JsSIP.Message 实例。
        //      request:JsSIP.IncomingRequest收到的MESSAGE请求的实例；JsSIP.OutgoingRequest传出MESSAGE请求的实例
        userAgent.on('newMessage', function (data) {
          if (data.originator === 'local') {
            console.info('onNewMessage , OutgoingRequest - ', data.request);
          } else {
            console.info('onNewMessage , IncomingRequest - ', data.request);
          }
        });

        console.info("call register");
        //连接到信令服务器，并恢复以前的状态，如果以前停止。重新开始时，如果UA配置中的参数设置为register:true，则向SIP域注册。
        userAgent.start();
        alert('success');
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


      phone: function () {
        alert(this.currentNumber.toString());
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
        };
        outgoingSession = userAgent.call('sip:1005@112.124.15.33', options);
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
