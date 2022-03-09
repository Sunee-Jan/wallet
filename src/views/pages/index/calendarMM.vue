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
  //首页选择的日期（YYYY-MM）
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
  }
},
methods:{
  ...mapMutations('money',{reCount:'reCount'}),
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
  handleCancel () {
   this.dateIsShow = false;
  },
  //开始时间
  handleEndDateConfirm () {
    this.dateIsShow =false;
   this.titleTime=dayjs(this.$store.state.money.currentDate).format('YYYY-MM')
   this.dataAll.forEach(item=>{
      if(item.title===this.titleTime){
       this.showTile=this.dataAll.indexOf(item)
     }
   })
      this.reCount()
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