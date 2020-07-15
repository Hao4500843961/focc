// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*add by haoxl*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/*是否导入图标插件组建*/
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

/*add by haoxl*/

Vue.config.productionTip = false
/*add by haoxl*/
Vue.use(BootstrapVue)
/*是否安装bootstrapVue图标插件组建*/
Vue.use(IconsPlugin)
/*add by haoxl*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
