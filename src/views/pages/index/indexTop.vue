<template>
  <header>
      <h1>小丸子の帳簿</h1>
      <ul class="timeOption">
        <li class='timer' @click.stop="chooseTime" >
         <h4>{{titleTime.slice(0,4)}}</h4>
          <p><span class="x">{{titleTime.slice(4)}}</span><span class="month">月<span class="trig"></span></span></p>
        </li>
        <li class="income">  
          <h4>收入</h4>
          <p>{{monthIncome}}</p>
        </li>
        <li class="spending">
          <h4>支出</h4>
          <p>{{monthPay}}</p>
        </li>
      </ul>
    </header>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions} from 'vuex';
var dayjs = require('dayjs')
// var duration = require('dayjs/plugin/duration')
// dayjs.extend(duration)
export default {
  data() {
      return {
      };
    },
name:'IndexTop',
computed:{
  ...mapState('money',['dataAll','dateShow','currentDate','showTile','monthPay','monthIncome']),
  ...mapGetters('money',['dataShow']),
  titleTime:{
    get(){
      return this.$store.state.money.titleTime
    },
    set(val){
       this.$store.state.money.titleTime=val
    }
  }
},
methods: {
chooseTime(){
          this.$store.state.money.dateShow=true;
        },
  ...mapMutations('money',{reCount:'reCount'}),
   ...mapActions('chart',{ getWeekData:' getWeekData'}),
    ...mapActions('chart',{ getWeekData:'getWeekData'}),
},
mounted(){
  // this.$store.dispatch('chart/getWeekData')
  // this.JIA(null,{ root: true } )
  // console.log('$$$'+dayjs().daysInMonth());
  if(this.dataShow.title){
    this.titleTime=this.dataShow.title
  }
}
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
header {
  font-family: $font-hei;
  color:$font-color;
  background-color: $main-color;
  >h1{
    text-align: center;
    padding:1rem 2rem;
    font-size: 2.1rem;
    font-family: $font-song;
  }
  >.timeOption{
    display: flex;
    justify-content: space-between;
    >li:first-child{
      flex-grow:1;
      padding-left: 0;
      text-align: left;
      >h4{
         margin-left:2rem;
      }
      >p{
        font-size: 2.8rem;
        margin:-.5rem 0 0  1.5rem;
        border-right: 1px solid $grey-color;
      }
    }
    >li:nth-child(2){
      flex-grow:2;
    }
    >li:nth-child(3){
      
      flex-grow:2;
    }
    >li{
      padding-left: 2rem;
      >h4{
    margin-top: .5rem;;
    margin-bottom: .7rem;
     font-size: 1.2rem;
     color:$font-color-min;
     font-family: $font-hei;
        }
    >p{
      font-size: 2.2rem;
      margin:.7rem 0;
      min-width: 70px;
      font-weight: 330;
    }
    }
  }
}
.month{
  position: relative;
  // border: 1px solid;
  font-size: 1.6rem;
}
.trig{
  display: inline-block;
  position: absolute;
  top:12%;
  margin-left: 5px;
  border-top: 9px solid;
  border-left:6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom:0px solid blue;
  width: 0;
  height: 0;
}
</style>