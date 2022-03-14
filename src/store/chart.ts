import axios from 'axios'
import dayjs from 'dayjs' 
import { List } from 'echarts'
import { Option } from 'element-ui'

//获取选中星期的每个日期
function getWeekDay(n: number,state){  
  return dayjs(state.getWTime[0]).add(n,'day').format('YYYYMMDD')
}

export default{
    namespaced: true,
    state: {
      getWTime:[],
      getWChart:[],
      getRank:[],
      isPay:true,
      hasData:false,
      localData:JSON.parse(localStorage.getItem('m') ||`[{"title":"","items":[{"day":"","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]}]}]`) ,
    },
    getters:{
          },
    mutations: { 
      weekChart(state){    
        //获取选中星期的每天收入和支出
        function getWeekAccount(n: number,m:boolean){
          let pay=0
          let earn=0
          state.localData.forEach(element=>{ 
            if(element.title===getWeekDay(n,state).slice(0,6)){
              element.items.forEach(everyDay=>{
               if(everyDay.day===getWeekDay(n,state).slice(6)){
                  if(!m){
                    pay=everyDay.payAll
                  }else if(m){
                    earn=everyDay.incomeAll
                  }
                }
              })
            }
          })
          return m?earn:Math.abs(pay)
        }    
        state.localData=JSON.parse(localStorage.getItem('m') ||`[{"title":"","items":[{"day":"","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]}]}]`) ,
        state.getWChart= [
        {weekDay:'星期一',payTotalD:getWeekAccount(0,false),incomeTotalD:getWeekAccount(0,true)},
        {weekDay:'星期二',payTotalD:getWeekAccount(1,false),incomeTotalD:getWeekAccount(1,true)},
        {weekDay:'星期三',payTotalD:getWeekAccount(2,false),incomeTotalD:getWeekAccount(2,true)},
        {weekDay:'星期四',payTotalD:getWeekAccount(3,false),incomeTotalD:getWeekAccount(3,true)},
        {weekDay:'星期五',payTotalD:getWeekAccount(4,false),incomeTotalD:getWeekAccount(4,true)},
        {weekDay:'星期六',payTotalD:getWeekAccount(5,false),incomeTotalD:getWeekAccount(5,true)},
        {weekDay:'星期日',payTotalD:getWeekAccount(6,false),incomeTotalD:getWeekAccount(6,true)}]
       
      },
      Rank(state){
        state.getRank=[]
        state.hasData=false,
        state.localData.forEach(element=>{
          if(element.title>=getWeekDay(0,state).slice(0,6) && element.title<=getWeekDay(6,state).slice(0,6)){
            element.items.forEach(everyDay=>{
              if(everyDay.day>=getWeekDay(0,state).slice(6) && everyDay.day<=getWeekDay(6,state).slice(6)){
                if(state.isPay===true){
                  everyDay.list.forEach(item=>{
                    let index=-1
                    state.getRank.forEach(list=>{
                      if(list.icon===item.icon){
                        index=state.getRank.indexOf(list)
                      }
                    })
                    if(index===-1 && item.amount<0){
                      state.getRank.push({icon:item.icon,amount:item.amount})
                      state.hasData=true
                    }
                    else if(index>=0 && item.amount<0){
                      state.getRank[index].amount+=item.amount
                      state.hasData=true
                    }
                  })
                }else if(state.isPay===false){
                  everyDay.list.forEach(item=>{
                    let index=-1
                    state.getRank.forEach(list=>{
                      if(list.icon===item.icon){
                        index=state.getRank.indexOf(list)
                      }
                    })
                    if(index===-1 && item.amount>0){
                      state.getRank.push({icon:item.icon,amount:item.amount})
                      state.hasData=true
                    }
                    else if(index>=0 && item.amount>0){
                      state.getRank[index].amount+=item.amount
                      state.hasData=true
                    }
                  })
                }
              }
            })
          }
        })
      },
      SotRank(state){
        state.getRank= state.getRank.sort((a,b)=>{
          return Math.abs(b.amount) - Math.abs(a.amount)
        })
        let payAll=0
        let incomeAll=0
        let per=0
        state.getRank.forEach(item=>{
          if(item.amount<0){
            payAll+=item.amount
          }else if(item.amount>0){
            incomeAll+=item.amount
          }
        })
        state.getRank.forEach(item=>{
          if(item.amount<0){
            per=Math.round(item.amount/payAll* 1000) / 10.00 
            item.percent=per
          }else if(item.amount>0){
            per=Math.round(item.amount/incomeAll* 1000) / 10.00 
            item.percent=per
          }
        })
      }
    },
    actions: {
      
      //   let m=[{"title":"YYYYMM","items":
      //   [{"day":"DD","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]},
      //   {"day":"DD","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]},
      //   {"day":"DD","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]},
      //   {"day":"DD","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]},
      //   {"day":"DD","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]},]
      // },{"title":"YYYYMM","items":
      // [{"day":"DD","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]},
      // {"day":"DD","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]},]}
      //   ]
        
    }
}