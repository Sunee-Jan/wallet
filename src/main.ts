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
import { Calendar } from 'vant';
import { Card } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Dialog } from 'vant';

import 'vant/lib/index.less';
import axios from "axios"
import { Divider } from 'element-ui'


const ECharts =require('echarts')



Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(DatetimePicker);
Vue.use( SwipeCell);
Vue.use( Button);
Vue.use( Cell );
Vue.use(Calendar);
Vue.use(Card);
Vue.use(Dialog);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.component('Nav',Nav);
Vue.component('Lay',Lay);
Vue.component('Icon', Icon);
Vue.prototype.$echarts = ECharts;
Vue.prototype.$axios = axios


const vm=new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
console.log(vm);
