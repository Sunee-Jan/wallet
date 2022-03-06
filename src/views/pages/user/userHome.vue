<template>
  <lay>
<userTop/>
<userBody/>
<van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
/>
  </lay>
</template>

<script>
import userTop from './userTop.vue'
import UserBody from './userBody.vue'
export default {
name:'UserList',
data() {
  return {
    minDate: new Date(2010, 0, 1),
    maxDate: new Date(2100, 11, 31),
    currentDate: new Date(),
  }
},
components:{
  userTop,
  UserBody,
},
methods:{
  setup() {
    let minDate=this.minDate
    let maxDate=this.maxDate
    let currentDate=this.currentDate
    return {
      minDate,
      maxDate,
      currentDate,
    };
  },
}
}
</script>

<style lang='scss' scoped>

</style>