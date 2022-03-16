<template>
  <div>
  <lay>
    <Greet v-if="!isShow"/>
    <!-- <Write  v-if="isWrite"/> -->
    <ShowList v-if="isShow"/>
    <!-- <Title v-if="isTitle"/> -->
  </lay> 
  </div>
</template>

<script>
import Greet from './greeting.vue'
import ShowList from './showList.vue'
import Title from './Title.vue'
import Write from './write.vue'
export default {
  name:'UserMood',
  components: { Greet, Write, ShowList, Title },
  props:['hasData'],
  computed:{
    isShow(){
      return Boolean(this._props.hasData)
    }
  },
}
</script>

<style lang='scss' scoped>

</style>