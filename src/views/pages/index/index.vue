<template>
<div class="timeWrap">
    <lay>
    <IndexTop/>
    <IndexBody/>
  </lay>
  <div class="timeCheck" v-show="$store.state.dateShow">
  <van-datetime-picker class="timePick"
  v-model="$store.state.currentDate"
  type="year-month"
  @cancel="handleCancel"
  @confirm="handleEndDateConfirm"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
/>
  </div>
</div>
</template>

<script>
import IndexBody from './indexBody.vue'
import IndexTop from './indexTop.vue'
var dayjs = require('dayjs')
export default {
  components: { IndexTop, IndexBody },
  name:'UserList',
  data() {
  return {
    minDate: new Date(2010, 0, 1),
    maxDate: new Date(2100, 11, 1),
  }
},
methods:{
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
    let currentDate=this.$store.state.currentDate
    let formatter =this.formatter
    return {
      minDate,
      maxDate,
      formatter,
      currentDate,
    };
  },
  handleCancel () {
   this.$store.state.dateShow = false;
  },
  //开始时间
  handleEndDateConfirm () {
   this.$store.state.dateShow =false;
   this.$store.state.titleTime=dayjs(this.$store.state.currentDate).format('YYYY-MM')
  },
},
}
</script>

<style lang='scss' scoped>
.timeCheck{
  position: fixed;
  bottom: 0;
  width: 100vw;
  // height: 200px;
}
</style>