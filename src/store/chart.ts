import axios from 'axios'
import dayjs from 'dayjs' 
import { List } from 'echarts'
import { Option } from 'element-ui'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

//封装获取选定时间范围内每天的的格式化YYYYMMDD时间
function getDate(n: number,state){  
    return dayjs(state.TimeRange[0]).add(n,'day').format('YYYYMMDD')
}
export default{
    namespaced: true,
    state: {
      TimeRange:[],
      getChat:[],
      getRank:[],
      isPay:true,
      isPaySort:true,
      hasData:false,
    },
    getters:{
          },
    mutations: {  
      //获取图表数据     
      getChartData(state){   
        state.getChat=[]    
        //封装获取选中时间范围内每天总收入和支出函数
        function getDayAccount(n: number,m:boolean){
          let pay=0
          let earn=0
          state.localData.forEach(element=>{ 
            if(element.title===getDate(n,state).slice(0,6)){            
              element.items.forEach(everyDay=>{
               if(everyDay.day===getDate(n,state).slice(6)){
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
        //每次执行函数就获取一次数据库数据
        state.localData=JSON.parse(localStorage.getItem('m') ||`[{"title":"","items":[{"day":"","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]}]}]`)
        let range = dayjs(state.TimeRange[1]).diff(dayjs(state.TimeRange[0]),'day')
        //获取选定星期内每天数据
        if(range===6){
          for(let i= 0;i<=6;i++){        
            let temp={timeType:'',payTotalD:0,incomeTotalD:0}
            let week=['星期一','星期二','星期三','星期四','星期五','星期六','星期日',]
            temp.timeType=week[i]
            temp.payTotalD=getDayAccount(i,false)
            temp.incomeTotalD=getDayAccount(i,true)
            state.getChat.push(temp)
          }
        }
        //获取选定月份内每天数据
        else if(range!==6 && range<32){
          let length =Number(dayjs(state.TimeRange[1]).format('DD'))
          for(let i=0;i<length;i++){
            let temp={timeType:'',payTotalD:0,incomeTotalD:0}
            temp.timeType=`${i+1}`
            temp.payTotalD=getDayAccount(i,false)
            temp.incomeTotalD=getDayAccount(i,true)
            state.getChat.push(temp)            
          }
        }  
      },
      //筛选排行榜数据
      Rank(state){       
        state.getRank=[]
        state.hasData=false,
        state.localData.forEach(element=>{        
            element.items.forEach(everyDay=>{             
              if(dayjs(element.title+everyDay.day).isSame(dayjs(state.TimeRange[0]),'day') || 
              dayjs(element.title+everyDay.day).isSame(dayjs(state.TimeRange[0]),'day') || 
              dayjs(element.title+everyDay.day).isBetween(dayjs(state.TimeRange[0]), dayjs(state.TimeRange[1]),'day')){
                console.log('@@@');
                
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
                }
                else if(state.isPay===false){
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
          })
        },
      //排序排行榜数据，计算百分比
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
    }
}