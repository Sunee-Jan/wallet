<template>
  <div class="account">
    <PageHead/>
      <Lists/>
    <Calculator/> 
  </div>
</template>

<script>
import Calculator from '@/views/pages/keepAccounts/calculator.vue'
import PageHead from '@/views/pages/keepAccounts/pageHead.vue'
import Lists from './lists.vue'
export default {
name:'UserAccounts',
components:{Calculator,PageHead, Lists},

}
</script>

<style scoped lang="scss">

</style>