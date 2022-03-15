<template> 
<div class="wrap">
 <van-dropdown-menu  >
     <van-dropdown-item v-model="value1" :options="option1"  @change='chooseWeek(value1)'/>
     <van-dropdown-item v-model="value2" :options="option2"  @closed='chooseMonth(value2)'/>
     <!-- <van-dropdown-item v-model="value3" :options="option3" /> -->
    </van-dropdown-menu>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions} from 'vuex';
var dayjs = require('dayjs')
export default {
    name:'PickRange',
     data() {
    return {
      value1: '本周',
      value2: '本月',
      value3: '一',
      option1: [
        { text: '本周', value:'本周'},
        { text: '上周', value: '上周'},
        { text: '前2周', value: '前2周' },
        { text: '前3周', value: '前三周' },
      ],
      option2: [
        { text: '本月', value: '本月' },
        { text: '上个月', value: '上个月' },
        { text: '前2月', value: '前2月' },
        { text: '前3月', value: '前3月' },
      ],
      // option3: [
      //   { text: '本年', value: '一' },
      //   { text: '2021年', value: '二' },
      //   { text: '2020年', value: '三' },
      // ],
    };
  },
methods:{
  ...mapMutations('chart',{getChartData:'getChartData',Rank:'Rank',SotRank:'SotRank'}),
  currentWeek(){
    let dayBefore=dayjs().$W-1
    let thisWeekFrom=''
    let thisWeekTo=''
      if(dayBefore>=0){
        thisWeekFrom=dayjs().subtract(dayBefore, 'day')
        thisWeekTo=dayjs(thisWeekFrom).add(6,'day')
      }else{
        thisWeekFrom=dayjs().subtract(6, 'day')
        thisWeekTo=dayjs()
      }
      return [thisWeekFrom,thisWeekTo]
  },
  getWeekRange(n){
  this.$store.state.chart.TimeRange[0]=dayjs(this. currentWeek()[0]).subtract(n, 'week')
  this.$store.state.chart.TimeRange[1]=dayjs(this. currentWeek()[1]).subtract(n, 'week')
  },
  chooseWeek(val){
    if(val==='本周'){
    this.getWeekRange(0)
    }
    if(val==='上周'){
    this.getWeekRange(1)
    }
    if(val==='前2周'){
    this.getWeekRange(2)
    }
    if(val==='前三周'){
    this.getWeekRange(3)
    }
    this.getChartData()
    this.Rank()
    this.SotRank()
  },
  getMonthRange(n){
    this.$store.state.chart.TimeRange[0]=dayjs().startOf('month').subtract(n, 'month')
    this.$store.state.chart.TimeRange[1]=dayjs().endOf('month').subtract(n, 'month')
  },
  chooseMonth(val){
    if(val==='本月'){
    this.getMonthRange(0)
    }
    if(val==='上个月'){
    this.getMonthRange(1)
    }
    if(val==='前2月'){
    this.getMonthRange(2)
    }
    if(val==='前3月'){
    this.getMonthRange(3)
    }
    this.getChartData()
    this.Rank()
    this.SotRank()
  }
},
mounted(){
  this.chooseWeek('本周')
},
beforeDestroy(){
 this.$store.state.chart.TimeRange[0]=this.currentWeek()[0]
 this.$store.state.chart.TimeRange[1]=this.currentWeek()[1]
}
}
</script>

<style lang="scss" >
.wrap .van-dropdown-menu__item {
    background-color: pink;
     font-size: 14px;
}
.wrap .van-dropdown-menu{
    box-shadow: 0 0px 0 transparent;
}
.wrap .van-dropdown-menu__title::after {
    border-color: transparent transparent black black;
}
</style>