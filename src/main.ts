import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from './components/NavFloor.vue'
import Lay from '@/components/layout.vue'
import Icon from '@/components/Icon.vue';
import Vant from 'vant'
import { DatetimePicker } from 'vant';



const ECharts =require('echarts')



Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(DatetimePicker);
Vue.component('Nav',Nav);
Vue.component('Lay',Lay);
Vue.component('Icon', Icon);
Vue.prototype.$echarts = ECharts;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
