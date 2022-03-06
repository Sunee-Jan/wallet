import Vue from 'vue'
import Vuex from 'vuex'
var dayjs = require('dayjs')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dates:[
      {id:'001',day:'06月01日',week:'三', items:[
        {id:'579',icon:'#list',kind:'早餐',amount:-19},
        {id:'112',icon:'#list',kind:'工资',amount:22000},
        {id:'115',icon:'#list',kind:'午餐',amount:-21},
        {id:'116',icon:'#list',kind:'兼职',amount:350},
        {id:'117',icon:'#list',kind:'必胜客',amount:-300}
        ],payAll:0,incomeAll:0},
      {id:'002',day:'06月01日',week:'四',items:[
        {id:'102',icon:'#list',kind:'早餐',amount:-18},
        {id:'115',icon:'#list',kind:'午餐',amount:-21}
        ],payAll:0,incomeAll:0}
      ],
      // date:{
      //   '2010年':{
      //     '1月':{day:'01',week:'三',items:[{id:'579',icon:'#list',kind:'早餐',amount:-19},]},
      //   }
      // },
      dateShow:false,
      currentDate:new Date(),
      titleTime:dayjs().format('YYYY-MM'),
  },
  mutations: {
    money(content,option){
      let sum =0
      let negSum=0
      content.dates.forEach(lists=>{
        if(lists.id===option.id){        
           lists.items.forEach(list=>{
             if(list.amount>0){
               sum += list.amount
               lists.incomeAll=sum
             }else{
               negSum += list.amount
               lists.payAll=negSum
             }
           })
        }
      })
      return option.flag?sum:negSum
    },
  },
  actions: {
  }
})
