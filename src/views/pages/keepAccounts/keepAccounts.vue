<template>
  <div class="account">
    <PageHead/>
      <listsPay v-if="isShowPayList"/>
      <ListEarn v-if="!isShowPayList"/>
    <Calculator/> 
    <CalendarMD/>
  </div>
</template>

<script>
import Calculator from '@/views/pages/keepAccounts/calculator.vue'
import PageHead from '@/views/pages/keepAccounts/pageHead.vue'
import listsPay from './listsPay.vue'
import CalendarMD from './calendarMD.vue'
import ListEarn from './listEarn.vue'
export default {
name:'UserAccounts',
components:{Calculator,PageHead, listsPay, CalendarMD, ListEarn},
computed:{
  isShowPayList(){
    return this.$store.state.money.isShowPayList
  }
}
}
</script>

<style scoped lang="scss">

</style>