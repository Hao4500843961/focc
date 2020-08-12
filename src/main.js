// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*add by haoxl*/
/*import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/!*是否导入图标插件组建*!/
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'*/
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import './assets/tubiao/iconfont.css'
import jssip from 'jssip/lib-es5/JsSIP'
import $ from 'jquery'
/*add by haoxl*/


Vue.config.productionTip = false
/*add by haoxl bootstrap-vue*/
//Vue.use(BootstrapVue)
/*是否安装bootstrapVue图标插件组建*/
//Vue.use(IconsPlugin)
/*add by haoxl bootstrap-vue*/
Vue.use(Element)
Vue.use(jssip)
Vue.use($)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
