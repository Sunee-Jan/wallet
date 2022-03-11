<template>
      <div class="calculator" v-show='counterIsShow'>
      <header class="info">
          <div class="note">
            <Icon name="#note" svg='noteIcon'/>
            <label>备注：<input v-model="note" type="text" placeholder="点击写备注..."></label>         
          </div>
          <div class="result">{{number}}</div>
      </header>
      <main class="calculate">
        <button @click='inputContent'>7</button>
        <button @click='inputContent'>8</button>
        <button @click='inputContent'>9</button>
        <button @click="datePick">
          <span class="calendar" v-show="isToday"><Icon name="#日历" svg='menology'/>今天</span>
          <span v-show="!isToday" class="pickedDay">{{currentDate}}</span>
        </button>
        <button @click='inputContent'>4</button>
        <button @click='inputContent'>5</button>
        <button @click='inputContent'>6</button>
        <button @click='empty'><Icon name="#清空" svg='delete'/></button>
        <button @click='inputContent'>1</button>
        <button @click='inputContent'>2</button>
        <button @click='inputContent'>3</button>
        <button @click='inputContent'>00</button>
        <button @click='inputContent'>.</button>
        <button @click='inputContent'>0</button>
        <button @click="back" class="deBack"><Icon name="#删除" svg='delete'/></button>
        <button @click="done" class="OK">完成</button>
      </main>
  </div>

</template>

<script>
import {nanoid} from 'nanoid'
import dayjs from 'dayjs'
import { mapState, mapGetters, mapMutations} from 'vuex';
export default {
    name:'UerCalculator',
    data() {
      return {
        note:'',
        number:'0.00',
        // isToday:true,//选择的日期是否为今天
       }
    },
    computed:{
    ...mapState('money',['isShowPayList']),
    //当前选择的时间
    isToday:{
      get(){
        return this.$store.state.calculator.isToday
      },
      set(val){
        this.$store.state.calculator.isToday=val
      }
    },
    currentDate(){
      if(dayjs(new Date()).format('YYYY/MM/DD')===dayjs(this.$store.state.calculator.currentDate).format('YYYY/MM/DD')){
        this.isToday=true
        return dayjs(new Date()).format('YYYY/MM/DD')
      }else{
        this.isToday=false
        return dayjs(this.$store.state.calculator.currentDate).format('YYYY/MM/DD')
      }
    },
    //计算器是否显示
    counterIsShow:{
    get(){
     return this.$store.state.calculator.counterIsShow
    },
    set(val){
    return this.$store.state.calculator.counterIsShow=val
    }
  },
    //日历是否显示
    calendarIsShow:{
    get(){
     return this.$store.state.calculator.calendarIsShow
    },
    set(val){
    return this.$store.state.calculator.calendarIsShow=val
    }
  },
   //读写kind数据
   kind:{
     get(){
      return this.$store.state.calculator.createData[0].items[0].list[0].kind
     },
     set(val){
      return this.$store.state.calculator.createData[0].items[0].list[0].kind=val
     }
   },
   //读写amount数据
   amount:{
     get(){
       return this.$store.state.calculator.createData[0].items[0].list[0].amount
     },
     set(val){
       if(this.isShowPayList){
         return this.$store.state.calculator.createData[0].items[0].list[0].amount=-parseFloat(val)
       }else{
        return this.$store.state.calculator.createData[0].items[0].list[0].amount=parseFloat(val)
       }
     }
   },
   //读写新增的数据
   createData:{
     get(){
       return this.$store.state.calculator.createData[0]
     },
     set(val){
       this.$store.state.calculator.createData[0]=val
     }
   },
   //读写每个日期的Id
   createId:{
     get(){
       return this.createData.items[0].list[0].id
     },
     set(val){
       this.createData.items[0].list[0].id=val
     }
   },
   //读写新增数据的年和月
   createYM:{
     get(){
       return this.createData.title
     },
     set(val){
       this.createData.title=val
     }
   },
   //读写新增数据的该年月下的信息
   createYMInfo:{
     get(){
       return this.createData.items[0]
     },
     set(val){
       this.createData.items[0]=val
     }
   },
   //读写新增数据的日期
  createDD:{
    get(){
      return this.createYMInfo.day
    },
    set(val){
      this.createYMInfo.day = val
    }
  },
  //读写新增数据该日期下的其他数据list
  createList:{
    get(){
      return this.createYMInfo.list[0]
    },
    set(val){
      this.createYMInfo.list[0]=val
    }
  },
  //读写数据库里的所有数据
  dataAll:{
    get(){
      return this.$store.state.money.dataAll
    },
    set(val){
      this.$store.state.money.dataAll=val
    }
  },
  titleTime:{
    get(){
      return this.$store.state.money.titleTime
    },
    set(val){
       return this.$store.state.money.titleTime=val
    }
  },
},
methods:{
  ...mapMutations('money',{reCount:'reCount',sortDataAll:'sortDataAll',putLocalStorage:'putLocalStorage'}),
  //计算结果
  inputContent(e){
    if(this.number.length===8){return}
    if(this.number==='0.00'||this.number==='0'){
      if(e.target.textContent==='.'){ return this.number = '0.'}
      else if(e.target.textContent==='00'){return}
      else{
        this.number=''
         return this.number +=e.target.textContent
      }
    }else{
      if(this.number.indexOf('.')>0){
        if(e.target.textContent==='.'){return}
        else{
         return this.number +=e.target.textContent
        }
      }
     return this.number +=e.target.textContent
    }
  },
  //计算数字内容回退
  back(){
    if(this.number.length===1){
      if('0123456789'.indexOf(this.number)>=0){
        this.number='0'
      }
    }else{
      let lastIndex=this.number.length-1
      this.number=this.number.slice(0,lastIndex)
    }
  },
  //清空数据
  empty(){
   return this.number='0'
  },
  //显示日历
  datePick(){
    this.calendarIsShow=true
  },
  //清空数据库
  toEmptyDataAll(){
    if(!this.$store.state.money.dataAll[0].title){
    this.dataAll=[]
  }
  },
  //push数据库新数据
  updateDataAll(){
  let flagPushDay=true
  let flagPushYM =true
  let indexPushDate=-1
     this.dataAll.forEach(everyMOnth=>{
     if(everyMOnth.title===this.createYM){
        everyMOnth.items.forEach(everyDay=>{
        if(everyDay.day===this.createDD){
           everyDay.list.push(this.createList)//新增同日数据
           flagPushDay = false
          }
        })
        flagPushYM =false
        indexPushDate=this.dataAll.indexOf(everyMOnth)
       }
     })
  if(!flagPushYM && flagPushDay){
    this.dataAll[indexPushDate].items.push(this.createYMInfo)//新增不同日数据
    flagPushYM =true
  }else if(flagPushYM){
     this.dataAll.push(this.createData) //新增不同年月数据
  }
  this.sortDataAll()
  },
  //将最新数据库存入localStorage中
  // putLocalStorage(){
  //   localStorage.setItem('m',JSON.stringify(this.dataAll))
  // },
  //断开calculator中crateData地址，以免影响dataAll
  changeCreateDataAddress(){
    this.$store.state.calculator.createData=[{title:'YYYY-MM',items:[
            {day:'DD',week:'',payAll:0,incomeAll:0,list:[
                {id:'',icon:'',kind:'',amount:0}]
            }]
      }]
  },
  //完成 提交数据
  done(){
  this.amount=this.number
  this.number='0.00'
  this.createId=nanoid()
  this.counterIsShow=false
  if(this.note){
    this.kind=this.note
  }
  this.toEmptyDataAll()
  this.updateDataAll()
  this.putLocalStorage()
  this.changeCreateDataAddress()
  //返回首页
  this.$router.replace({
        name:'index',
      })
  this.isToday=true
  //首页月份跳转为数据库最后一条数据页面
  this.$store.state.money.showTile=0
  this.titleTime=this.dataAll[0].title
  //完成后list默认回到pay页面
  this.$store.state.money.isShowPayList=true
}
}
}
</script>

<style lang='scss' scoped>
.calculator{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 37vh;
  font-size: 1.5rem;
    background-color: #f3f3f3;
    >.info{
      height: 16%;
      border: transparent;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      >.note>label>input{
        width: 50vw;
        border: none;
        outline: none;
        font-size: 1.5rem;
      }
      >.result{
        font-size: 2.2rem;
      }
    }
    .noteIcon{
      float: left;
      margin-top:.2rem;
      margin-right:.4rem;
      width: 1.6rem;
      height: 1.6rem;
      line-height: 2rem;
      color:pink;
    }
    >.calculate{
      display: flex;
      flex-wrap: wrap;
      height: 84%;
      >button{
        border:1px solid #f3f3f3;
        border:transparent;
        outline: none;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
        width: 25vw;
        height: 25%;
        font-size: 2rem;
        background-color: #f3f3f3;
        text-align: center;
      }
      >button:last-child{
          background-color: pink;
      }
    }
}
input::placeholder{
  color: #cccc;
  background-color: #f3f3f3;
}
.delete{
  margin-top:1rem;
  width:5rem;
  height: 2.5rem;
  }
  .calendar{
        display: flex;
        justify-content:center;
        font-size: 1.6rem;
        line-height: 2.8rem;
        >.menology{
          width: 2.5rem;
          height: 2.5rem;
        }
      }
  .pickedDay{
    font-size: 1.6rem;
  }
</style>