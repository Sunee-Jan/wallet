import Vue from 'vue'
import App from './App.vue'
import { Button } from 'element-ui';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from './components/NavFloor.vue'
import Lay from '@/components/layout.vue'
import Icon from '@/components/Icon.vue';
// import echarts from 'echarts'
const ECharts =require('echarts')




Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
Vue.component('Nav',Nav)
Vue.component('Lay',Lay)
Vue.component('Icon', Icon);
Vue.prototype.$echarts = ECharts;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
