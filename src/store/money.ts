import { number } from "echarts";
var dayjs = require('dayjs')

export default{
    namespaced: true,
    state: {
       dataAll:JSON.parse(localStorage.getItem('m') ||`[{"title":"","items":[{"day":"","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]}]}]`) ,
        dateShow:false,
        currentDate:new Date(),
        titleTime:`${dayjs(new Date()).format('YYYY-MM')}`,
        showTile:0,//dataAll的第几项数据，打开应用默认打开最后一次记录的那个月
        monthPay:0,
        monthIncome:0,
        isSHowListPage:false,
        isShowPayList:true
    },
    getters:{
      //默认首次进入页面展示的月份数据，默认为已记录的最新数据
      dataShow(state: { dataAll: { [x: string]: any }; showTile: string | number; titleTime: any }){
        let showMonth=state.dataAll[state.showTile]
       return showMonth
      },
    },
    mutations: { 
      //计算选择月份的总收入和总支出
      reCount(state: { dataAll: { [x: string]: { items: any[] } }; showTile: string | number; monthIncome: number; monthPay: number }){
        console.log('111');
        state.dataAll[state.showTile].items.forEach((day: { incomeAll: number; payAll: number; list: any[] })=>{       
        day.incomeAll=0
        day.payAll=0
        day.list.forEach((list: { amount: number })=>{    
         if(list.amount>0){
           day.incomeAll += list.amount
          }else{
           day.payAll += list.amount
         }
      })
    })
        state.monthIncome=0
        state.monthPay=0
        state.dataAll[state.showTile].items.forEach((day: { incomeAll: any; payAll: any })=>{
          state.monthIncome += day.incomeAll
          state.monthPay += day.payAll
         })
           },
      sortDataAll(state){
        console.log('来了');
        state.dataAll.forEach(lists=>{
        lists.items.sort((a,b)=>{return b.day-a.day})
            })
        state.dataAll.sort((a,b)=>{return b.title-a.title})
          },
         },
    actions: {
    }
}