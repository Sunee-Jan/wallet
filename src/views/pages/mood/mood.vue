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
  data() {
    return {
      isShow:false,
    }
  },
  hasData:JSON.parse(localStorage.getItem('diary')),
  components: { Greet, Write, ShowList, Title },
  methods: {
    noData(val){
      this.isShow=val
    }
  },
  mounted() {
    console.log(this.isShow);
    this.$bus.$on('noData',this.noData)
    if(JSON.parse(localStorage.getItem('diary')) && localStorage.getItem('diary')!=="[]"){
      this.isShow=true
    }
    console.log(this.isShow);
  },
}
</script>

<style lang='scss' scoped>

</style>