<template>
<div class="timeCheck">
    <van-datetime-picker
    v-show="$store.state.calculator.calendarIsShow"
  v-model="currentDate"
  @cancel="handleCancel"
  @confirm="handleEndDateConfirm"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
/>
</div>
</template>

<script>
import dayjs from 'dayjs'
// var weekday = require('dayjs/plugin/weekday')
export default {
    name:'calendarYDM',
data() {
  return {
    minDate: new Date(2010, 0, 1),
    maxDate: new Date(2100, 11, 31),
    // currentDate: new Date(),
  }
},
computed:{
  calendarIsShow:{
    get(){
      return this.$store.state.calculator.calendarIsShow
    },
    set(val){
      return this.$store.state.calculator.calendarIsShow=val
  },
  },
  getYM:{
    get(){
      return this.$store.state.calculator.createData[0].title
    },
    set(val){
      return this.$store.state.calculator.createData[0].title=val
    }
  },
  getD:{
    get(){
      return this.$store.state.calculator.createData[0].items[0].day
    },
    set(val){
      return this.$store.state.calculator.createData[0].items[0].day=val
    }
  },
  getW:{
    get(){
      return this.$store.state.calculator.createData[0].items[0].week
    },
    set(val){
      const week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
      return this.$store.state.calculator.createData[0].items[0].week=week[val]
    }
  },
  currentDate:{
    get(){
      return this.$store.state.calculator.currentDate
    },
    set(val){
      this.$store.state.calculator.currentDate=val
    }
  }
},
methods:{
  setup() { //配置日历
    let minDate=this.minDate
    let maxDate=this.maxDate
    let currentDate=this.currentDate
    return {
      minDate,
      maxDate,
      currentDate,
    };
  },
   handleCancel () {
   this.calendarIsShow = false;
  },
  //开始时间
  handleEndDateConfirm () {
   this.calendarIsShow =false;//关闭日历
   this.getYM=dayjs(this.currentDate).format('YYYY-MM-DD').slice(0,7)//获取年月
   this.getD=dayjs(this.currentDate).format('YYYY-MM-DD').slice(8)//获取年日
   this.getW=dayjs(this.currentDate).format('YYYY-MM-DD-d').slice(11)//获取星期  
  },
},
mounted(){
   this.getYM=dayjs().format('YYYY-MM-DD').slice(0,7)
   this.getD=dayjs().format('YYYY-MM-DD').slice(8)
   this.getW=dayjs().format('YYYY-MM-DD-d').slice(11)
}
}
</script>

<style lang="scss" scoped>
.timeCheck{
  position: fixed;
  bottom: 0;
  width: 100vw;
}
</style>