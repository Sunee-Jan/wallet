<template>
  <lay>
    <indexTop/>
    <IndexBody/>
  </lay>
</template>

<script>
import IndexBody from './indexBody.vue'
import indexTop from './indexTop.vue'
export default {
  components: { indexTop, IndexBody },
name:'UserList'
}
</script>

<style lang='scss' scoped>

</style>