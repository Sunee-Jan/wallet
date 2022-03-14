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
      value1: 0,
      value2: 'a',
      option: [
        { text: '支出排行', value: 0 },
        { text: '收入排行', value: 1 },
      ],
    };
  },
methods:{
    ...mapMutations('chart',{weekChart:'weekChart',Rank:'Rank',SotRank:'SotRank'}),
  isPay(){
    this.$store.state.chart.isPay=!this.$store.state.chart.isPay
    this.Rank()
    this.SotRank()
  }
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