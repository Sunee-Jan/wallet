import Vue from 'vue'
import Vuex from 'vuex'
// var dayjs = require('dayjs')
import money from './money';
import calculator from './calculator';
// import lock from './lock';

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    money,
    calculator,
    // lock
}
  // state: {
  //     dataAll:[ 
  //       {id:'002',title:'2020-02',items:[
  //         {id:'3210',day:'10',week:'三',payAll:0,incomeAll:0,lists:[
  //           {id:'57900',icon:'#list',kind:'早餐',amount:-19},
  //           {id:'11200',icon:'#list',kind:'工资',amount:22000},
  //           {id:'11500',icon:'#list',kind:'午餐',amount:-21},
  //           {id:'11700',icon:'#list',kind:'兼职',amount:350},]},
  //         {id:'3220',day:'11',week:'四',payAll:0,incomeAll:0,lists:[
  //           {id:'10200',icon:'#coffee',kind:'早餐',amount:-19},
  //           {id:'11800',icon:'#coffee',kind:'午餐',amount:-21},
  //           {id:'11600',icon:'#coffee',kind:'兼职',amount:350}, ]}
  //       ]}, 
  //       {id:'001',title:'2020-01',items:[
  //         {id:'4320',day:'2',week:'一',payAll:0,incomeAll:0,lists:[
  //           {id:'57900',icon:'#list',kind:'早餐',amount:-19},
  //           {id:'11500',icon:'#list',kind:'午餐',amount:-21},
  //           {id:'11700',icon:'#list',kind:'兼职',amount:350},]}]},     
  //     ],
  //     dateShow:false,
  //     currentDate:new Date(),
  //     titleTime:'',
  //     showTile:0,//dataAll的第几项数据，打开应用默认打开最后一次记录的那个月
  //     monthPay:0,
  //     monthIncome:0,
  // },
  // getters:{
  //   dataShow(state){
  //     let showMonth=state.dataAll[state.showTile]
  //     state.titleTime=showMonth.title
  //    return showMonth
  //   },
  // },
  // mutations: {
  //   reCount(state){
  //   state.dataAll[state.showTile].items.forEach(day=>{
  //    day.incomeAll=0
  //    day.payAll=0
  //    day.lists.forEach(list=>{
  //     if(list.amount>0){
  //       day.incomeAll += list.amount
  //      }else{
  //       day.payAll += list.amount
  //     }
  //   })
  // })
  // state.monthIncome=0
  // state.monthPay=0
  // state.dataAll[state.showTile].items.forEach(day=>{
  //   state.monthIncome += day.incomeAll
  //   state.monthPay += day.payAll
  // })
  //   }
  // },
  // actions: {
  // }

})
