<template>
<div class="timeWrap">
    <lay>
    <IndexTop/>
    <IndexBody/>
  </lay>
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
</div>
</template>

<script>
import IndexBody from './indexBody.vue'
import IndexTop from './indexTop.vue'
import { mapState, mapGetters, mapMutations} from 'vuex';
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
computed:{
  ...mapState('money',['dataAll','dateShow','currentDate','titleTime','showTile','monthPay','monthIncome']),
  ...mapGetters('money',['dataShow'])
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
   this.$store.state.money.dateShow = false;
  },
  //开始时间
  handleEndDateConfirm () {
   this.$store.state.money.dateShow =false;
   this.$store.state.money.titleTime=dayjs(this.$store.state.money.currentDate).format('YYYY-MM')
   this.dataAll.forEach(item=>{
     if(item.title===this.titleTime){
       this.$store.state.money.showTile=this.dataAll.indexOf(item)
     }
   })
  //  this.$store.commit('reCount/reCount')
  this.reCount()
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