<template>
  <div>


    <el-container>
      <el-aside width="330px">
      	<el-row class="call"><span class="callSpan">通话</span><span><el-button class="anniu" size="mini" icon="el-icon-plus"></el-button></span></el-row>
      	<el-row>
      		<el-col :span="4"><span class="imageSpan"> <el-avatar shape="square" :size="50" :src="circleUrl"></el-avatar></span></el-col>
      		<el-col :span="20">
      			<el-row ><span class="name">小红</span><span><el-button   type="success" class="status" size="supermini" icon="el-icon-check"></el-button></span>  </el-row>
      			<el-row>95125158522</el-row>
      		</el-col>
      	</el-row>


        <el-input class="search"
                  placeholder="请输入关键字"
                  prefix-icon="el-icon-search"
                  v-model="currentNumber" clearable>
        </el-input>
        <div class="inputBtnList">
          <el-button @click="traceNumber" v-for="(item, key) in buttons" :key = "key" >{{item}}</el-button>
          <el-button  icon="el-icon-phone" @click="phone"></el-button>
          <el-button type="danger" icon="el-icon-video-camera"></el-button>
          <el-button icon="el-icon-folder-delete" @click="clear"></el-button>
        </div>

      </el-aside>
      <el-container>
        <el-header height="109px" >
          <el-container>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url1"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url2"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url3"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url4"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url5"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url6"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url7"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url8"
                  :fit="fit"></el-image>
              </div>
            </div>
          </el-container>
        </el-header>
        <el-main>
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

// import * as SIP from "jssip";
// import * as JsSIP from 'jssip';
//
//   // const socket = new this.JsSIP.WebSocketInterface(obj.wsUrl);
//
//     const userAgent = new SIP.UA(config);

    export default {
      data () {
        return {
          currentNumber: '',
          buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0,'#'],
          circleUrl: require("../../assets/head_img.png"),
          fits: [''],
          url1:require('../../assets/fooc_xiaotu/1.png'),
          url2:require('../../assets/fooc_xiaotu/2.png'),
          url3:require('../../assets/fooc_xiaotu/3.png'),
          url4:require('../../assets/fooc_xiaotu/4.png'),
          url5:require('../../assets/fooc_xiaotu/5.png'),
          url6:require('../../assets/fooc_xiaotu/6.png'),
          url7:require('../../assets/fooc_xiaotu/7.png'),
          url8:require('../../assets/fooc_xiaotu/8.png'),
          url9:require('../../assets/fooc_xiaotu/calling.png'),
          url10:require('../../assets/fooc_xiaotu/10.png'),
          config:{
            uri:'1010@112.124.15.33',
            transportOptions: {
                  wsServers: ['wss://112.124.15.33:7443']
                 },
            authorizationUser: '1010',
            password: 'test1'
          }
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

        phone:function () {
            alert(this.currentNumber);
          // var to =document.getElementById(this.currentNumber);
          // var sipsession = userAgent.invite(to + '@:7443', {
            //   sessionDescriptionHandlerOptions: {
            //     constraints: {
            //       audio: true,  video: true
            //     }
            //   }
            // });
            //
            // sipsession.on('accepted', function() {
            //   // We need to check the peer connection to determine which track was added
            //
            //   var pc = sipsession.sessionDescriptionHandler.peerConnection;
            //
            //   // Gets remote tracks
            //   var remoteStream = new MediaStream();
            //   pc.getReceivers().forEach(function(receiver) {
            //     remoteStream.addTrack(receiver.track);261074724
            //   });
            //   remoteVideo.srcObject = remoteStream;
            //   remoteVideo.play();
            //
            //   // Gets local tracks
            //   if(pc.getSenders() ){
            //     var localStream = new MediaStream();
            //     pc.getSenders().forEach(function(sender) {
            //       localStream.addTrack(sender.track);
            //     });
            //     localVideo.srcObject = localStream;
            //     localVideo.play();
            //   }
            // });
          }


      }

    }
</script>

<style scoped>
*{
	padding: 0;
	margin: 0;
}
  .el-header {
    background-color: #000000;
    color: #333;
    text-align: left;
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
    margin-top: 30px;
    width: 290px;
    height: 25px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .pinPage{
    background-size: 100% 100%;
    overflow: hidden;
    width: 400px;
    height: 200px
  }
  .inputBtnList{
    margin: 0 auto;
    width: 330px;
    height: 229px;
    box-sizing: border-box;
  }
  input{
    width: 100px;
    height: 15px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .el-button{
    width: 70px;
    height: 40px;
    margin-top: 30px;
    border-radius:20px;
    margin-left: 30px;
    /*padding-left: 31px;*/
    /*border-bottom-left-radius: 31px;*/
    border:1px solid rgba(153,153,153,1);
    /*background-color: transparent*/
    /*background-color: #FFFFFF;*/

  }
  .el-button--mini{
  	width: 30px;
    height: 30px;
    margin-left: 0;
    margin-top: 0;
    margin-right: 30px;
    float: right;
    border-radius:0px;
  }
.el-button--supermini{
  width: 15px;
  height: 15px;
  margin-left: 0;
  margin-top: 0;
  margin-right: 20px;
  /*float: right;*/
  /*border-radius:0px;*/

}
  .callSpan{
  width:58px;
	height:28px;
	font-size:30px;
	font-family:PingFang;
	font-weight:500;
	color:rgba(0,0,0,1);
	vertical-align: middle;
  }
  .search{
    margin-outside: 60px;
  }
  .call {
  	margin: 25px 0;
  }
  .imageSpan{
  	width:20px;
	height:20px;
  }
  .name{
    border-radius: 4px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>
