<template>
  <div class="timeCheck" v-show="dateShow">
  <van-datetime-picker class="timePick"
  v-model="$store.state.money.currentDate"
  type="year-month"
  @cancel="handleCancel"
  @confirm="handleEndDateConfirm"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';
var dayjs = require('dayjs')
export default {
    name:'calendarYM',
    data() {
  return {
    minDate: new Date(2010, 0, 1),
    maxDate: new Date(2100, 11, 1),
  }
},
computed:{
  ...mapState('money',['dataAll','dateShow','currentDate','titleTime','showTile','monthPay','monthIncome']),
  ...mapGetters('money',['dataShow']),
  //是否展示日历
  dateIsShow:{
    get(){
      return this.$store.state.money.dateShow 
    },
    set(val){
      return this.$store.state.money.dateShow=val
    }
  },
  //首页选择的日期（YYYYMM）
  titleTime:{
    get(){
      return this.$store.state.money.titleTime
    },
    set(val){
       return this.$store.state.money.titleTime=val
    }
  },
  //首页展示的数据为dataAll第showTile条（某年某月）的数据
  showTile:{
    get(){
      return this.$store.state.money.showTile
    },
    set(val){
      this.$store.state.money.showTile=val
    }
  },
  //判断页面是否展示数据页面
  isSHowListPage:{
    get(){
      return this.$store.state.money.isSHowListPage
    },
    set(val){
      this.$store.state.money.isSHowListPage=val
    }
  }
},
methods:{
  ...mapMutations('money',{reCount:'reCount'}),
  //dayjs相关格式操作
  formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      }
      if (type === 'month') {
        return `${val}月`;
      }
      return val;
    },
   setup() {
    let minDate = this.minDate
    let maxDate = this.maxDate
    let currentDate=this.currentDate
    let formatter =this.formatter
    return {
      minDate,
      maxDate,
      formatter,
      currentDate,
    };
  },
  //根据选择的时间执行页面展示相关数据
   showAboutDataPage(){
   let hasData=false
   this.dataAll.forEach(item=>{
      if(item.title===this.titleTime){
       this.showTile=this.dataAll.indexOf(item)
       hasData=true
     }
   })
   if(!hasData){
     this.isSHowListPage=false
     this.$store.state.money.monthPay=0
     this.$store.state.money.monthIncome=0
     return
   }else{
     this.isSHowListPage=true
      this.reCount()
   }
  },
  handleCancel () {
   this.dateIsShow = false;
  },
    //点击确认时间操作
  handleEndDateConfirm () {
   this.dateIsShow =false;
   this.titleTime=dayjs(this.currentDate).format('YYYYMM')
   this.showAboutDataPage()
   this.$store.state.money.currentDate=new Date()
  },
}
}
</script>

<style lang='scss' scoped>
.timeCheck{
  position: fixed;
  bottom: 0;
  width: 100vw;
}
</style>