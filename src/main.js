import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//Import Ant Design
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

// Use Axios
Vue.use(VueAxios, axios)
// Use Ant Design
Vue.use(Antd)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

