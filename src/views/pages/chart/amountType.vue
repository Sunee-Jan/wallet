<template>
<div class="amount">
  <van-dropdown-menu >
  <van-dropdown-item v-model="value1" :options="option" active-color="#3d1a18" @change='isPay'/>
  </van-dropdown-menu>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions} from 'vuex';
export default {
    name:'AmountType',
    data() {
    return {
      value1: true,
      value2: 'a',
      option: [
        { text: '支出排行', value: true },
        { text: '收入排行', value: false },
      ],
    };
  },
computed:{
  ...mapState('chart',['isPaySort']),
  isPaySort:{
    get(){
     return this.$store.state.chart.isPaySort
    },
    set(val){
      this.$store.state.chart.isPaySort=val
    }
  }
},
methods:{
    ...mapMutations('chart',{getChartData:'getChartData',Rank:'Rank',SotRank:'SotRank'}),
  isPay(){
    console.log(this.value1);
    this.$store.state.chart.isPay=!this.$store.state.chart.isPay
    this.isPaySort=!this.isPaySort
    this.Rank()
    this.SotRank()
  }
},
mounted(){
  this.value1=this.isPaySort
},
beforeDestroy(){
  // this.value1=true
  // this.$store.state.chart.isPay=true
}
}
</script>

<style lang='scss'>
.amount .van-dropdown-menu__item {
    padding-left: 1rem;
    justify-content: left;
    background-color: #f5f5f5;
     box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}
.amount .van-ellipsis{
  font-weight: 800;
}
.amount .van-dropdown-menu__title::after {
    border-color: transparent transparent black black;
}

</style>