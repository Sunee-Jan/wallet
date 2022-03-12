<template>
  <div>
  <lay>
    <PickRange/>
     <EChart/>
     <AmountType/>
     <Sort/>
  </lay>
  </div>
</template>

<script>
import AmountType from './amountType.vue';
import PickRange from './chartTop.vue';
import EChart from './Echart.vue';
import Sort from './sort.vue';
export default {
  components: { PickRange, Sort, AmountType, EChart },
  name: 'Graph',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      money:100,
      dataW:[],
      dataM:[],
      dataY:[]
    }
  },
}
</script>

<style lang='scss' scoped>

</style>