<template>
  <lay>
    <IndexTop/>
    <IndexBody/>
  </lay>
</template>

<script>
import IndexBody from './indexBody.vue'
import IndexTop from './indexTop.vue'
export default {
  components: { IndexTop, IndexBody },
name:'UserList'
}
</script>

<style lang='scss' scoped>

</style>