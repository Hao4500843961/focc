<script>
  // const account = "1009";
  // const password = "1234";
  // const proxy = "ws://192.168.27.135:5066";

  export default {
    // account,
    // password,
    // proxy,

    //注册
    zhuce(acc,pass,p) {
      var socket = new jssip.WebSocketInterface(p);
      var configuration = {
        sockets: [socket],
        outbound_proxy_set: acc,
        uri: this.account,
        password: pass,
        register: true,
        session_timers: false,
      };
    },
  };
</script>
