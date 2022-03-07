import Vue from 'vue'
import Vuex from 'vuex'
var dayjs = require('dayjs')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dates:[
    //   {id:'001',day:'06月01日',week:'三', items:[
    //     {id:'579',icon:'#list',kind:'早餐',amount:-19},
    //     {id:'112',icon:'#list',kind:'工资',amount:22000},
    //     {id:'115',icon:'#list',kind:'午餐',amount:-21},
    //     {id:'116',icon:'#list',kind:'兼职',amount:350},
    //     {id:'117',icon:'#list',kind:'必胜客',amount:-300}
    //     ],payAll:0,incomeAll:0},
    //   {id:'002',day:'06月01日',week:'四',items:[
    //     {id:'102',icon:'#list',kind:'早餐',amount:-18},
    //     {id:'115',icon:'#list',kind:'午餐',amount:-21}
    //     ],payAll:0,incomeAll:0}
    //   ],
    /*dataAll按照时间从后往前的顺序排序*/
      dataAll:[ 
        {id:'002',title:'2020-02',items:[
          {id:'3210',day:'10',week:'三',payAll:0,incomeAll:0,lists:[
            {id:'57900',icon:'#list',kind:'早餐',amount:-19},
            {id:'11200',icon:'#list',kind:'工资',amount:22000},
            {id:'11500',icon:'#list',kind:'午餐',amount:-21},
            {id:'11700',icon:'#list',kind:'兼职',amount:350},]},
          {id:'3220',day:'11',week:'四',payAll:0,incomeAll:0,lists:[
            {id:'10200',icon:'#coffee',kind:'早餐',amount:-19},
            {id:'11800',icon:'#coffee',kind:'午餐',amount:-21},
            {id:'11600',icon:'#coffee',kind:'兼职',amount:350}, ]}
        ]}, 
        {id:'001',title:'2020-01',items:[
          {id:'4320',day:'2',week:'一',payAll:0,incomeAll:0,lists:[
            {id:'57900',icon:'#list',kind:'早餐',amount:-19},
            {id:'11500',icon:'#list',kind:'午餐',amount:-21},
            {id:'11700',icon:'#list',kind:'兼职',amount:350},]}]},     
      ],
      dateShow:false,
      currentDate:new Date(),
      titleTime:dayjs().format('YYYY-MM'),
      showTile:0,//dataAll的第几项数据，打开应用默认打开最后一次记录的那个月
      monthPay:0,
      monthIncome:0,
  },
  getters:{
    dataShow(state){
     return state.dataAll[state.showTile]
    }
  },
  mutations: {

  },
  actions: {
  }
})
