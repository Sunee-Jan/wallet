import Vue from 'vue'
import Vuex from 'vuex'
// var dayjs = require('dayjs')
import money from './money';
import calculator from './calculator';
import lock from './lock';

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    money,
    calculator,
    lock
}
})
