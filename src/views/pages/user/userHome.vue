<template>
  <lay>
<userTop/>
<userBody/>
  </lay>
</template>

<script>
import userTop from './userTop.vue'
import UserBody from './userBody.vue'
export default {
name:'UserList',
components:{
  userTop,
  UserBody,
}
}
</script>

<style lang='scss' scoped>
</style>