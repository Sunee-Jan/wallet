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
import { SwipeCell } from 'vant';
import { Button } from 'vant';
import { Cell } from 'vant';
// import { ConfigProvider } from 'vant';


const ECharts =require('echarts')



Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(DatetimePicker);
Vue.use( SwipeCell);
Vue.use( Button);
Vue.use( Cell);
// Vue.use( ConfigProvider);
Vue.component('Nav',Nav);
Vue.component('Lay',Lay);
Vue.component('Icon', Icon);
Vue.prototype.$echarts = ECharts;


const vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(vm);
