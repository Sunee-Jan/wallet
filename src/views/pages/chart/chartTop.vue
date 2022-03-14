<template> 
<div class="wrap">
 <van-dropdown-menu  >
     <van-dropdown-item v-model="value1" :options="option1"  @change='chooseWeek(value1)'/>
     <van-dropdown-item v-model="value2" :options="option2" />
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
      value2: 'a',
      value3: '一',
      option1: [
        { text: '本周', value:'本周'},
        { text: '上周', value: '上周'},
        { text: '前2周', value: '前2周' },
        { text: '前3周', value: '前三周' },
      ],
      option2: [
        { text: '本月', value: 'a' },
        { text: '上个月', value: 'b' },
        { text: '前2月', value: 'c' },
      ],
      // option3: [
      //   { text: '本年', value: '一' },
      //   { text: '2021年', value: '二' },
      //   { text: '2020年', value: '三' },
      // ],
    };
  },
methods:{
  ...mapMutations('chart',{weekChart:'weekChart',Rank:'Rank',SotRank:'SotRank'}),
  currentWeek(){
    let dayBefore=dayjs().$W-1
    let thisWeekFrom=''
      let thisWeekTo=''
      if(dayBefore>=0){
        thisWeekFrom=dayjs().subtract(dayBefore, 'day')
        thisWeekTo=dayjs(thisWeekFrom).add(6,'day')
      }else if(dayBefore<0){
        thisWeekFrom=dayjs().subtract(6, 'day')
        thisWeekTo=dayjs()
      }
      return [thisWeekFrom,thisWeekTo]
  },
  chooseWeek(val){
      let dateFrom=0
      let dateTo=0
    if(val==='本周'){
      dateFrom=this. currentWeek()[0]
      dateTo=this. currentWeek()[1]
    }
    if(val==='上周'){
      dateFrom=dayjs(this. currentWeek()[0]).subtract(1, 'week')
      dateTo=dayjs(this. currentWeek()[1]).subtract(1, 'week')
    }
    if(val==='前2周'){
      dateFrom=dayjs(this. currentWeek()[0]).subtract(2, 'week')
      dateTo=dayjs(this. currentWeek()[1]).subtract(2, 'week')
    }
    if(val==='前三周'){
      dateFrom=dayjs(this. currentWeek()[0]).subtract(3, 'week')
      dateTo=dayjs(this. currentWeek()[1]).subtract(3, 'week')
    }
     this.$store.state.chart.getWTime[0]=dateFrom
    this.$store.state.chart.getWTime[1]=dateTo
    this.weekChart()
    this.Rank()
    this.SotRank()
        return [dateFrom,dateTo]
  },
},
mounted(){
//  console.log('top');
},
beforeDestroy(){
 this.$store.state.chart.getWTime[0]=this.currentWeek()[0]
 this.$store.state.chart.getWTime[1]=this.currentWeek()[1]
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