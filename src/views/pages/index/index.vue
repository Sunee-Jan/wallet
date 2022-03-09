<template>
<div class="timeWrap">
    <lay>
    <IndexTop/>
    <IndexBody/>
  </lay>
  <CalendarMM/>
</div>
</template>

<script>
import IndexBody from './indexBody.vue'
import IndexTop from './indexTop.vue'
import CalendarMM from './calendarMM.vue';
var dayjs = require('dayjs')
export default {
  components: { IndexTop, IndexBody, CalendarMM },
  name:'UserList',

}
</script>

<style >

</style>