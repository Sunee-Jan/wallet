import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from './components/NavFloor.vue'
import Lay from '@/components/layout.vue'
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false
Vue.component('Nav',Nav)
Vue.component('Lay',Lay)
Vue.component('Icon', Icon);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
