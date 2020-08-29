import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {req} from "./API"
Vue.config.productionTip = false
const result = req()
console.log(result)
new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
