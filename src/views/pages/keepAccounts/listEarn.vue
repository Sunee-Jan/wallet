<template>
      <main class="page-body">
      <div class="item-wrap wrap" v-for='(icon,index) in icons' :key="index">
            <Icon :name="icon" svg='item' @click.native="pickIcon($event,icon)"/>
            <p>{{icon.slice(1)}}</p>
      </div>
      <!-- <div class="set-wrap wrap"><Icon name="#set" svg='set'/><p>设置</p></div>    -->
    </main>
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';
import $ from 'jquery'
export default {
name:'ListIcon',
data(){
      return{
       icons:['#工资','#兼职','#礼金','#理财','#其他收入']
      }
},
computed:{
  ...mapState('calculator',['counterIsShow']),
},
methods:{
      pickIcon(e,icon){
      $('svg').removeClass('backPink')
      $(e.target).addClass('backPink')
      this.$store.state.calculator.counterIsShow=true
      this.$store.state.calculator.currentDate=new Date()
      this.$store.state.calculator.isToday=true
      this.$store.state.calculator.createData[0].items[0].list[0].icon=icon    
      this.$store.state.calculator.createData[0].items[0].list[0].kind=icon.slice(1)
      }
}
}
</script>

<style scoped lang="scss">
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';

.page-body{
  padding: 3vh 6vw;
  display: flex;
  flex-wrap: wrap;
//   background-color: #eeee;
  >.wrap{
    width: 22vw;
    height: 22vw;
    text-align: center;
    font-size: 1.4rem;
    >.set,.item{
  width:5rem;
  height:5rem;
  border-radius: 25%;
  padding: .7rem;
  background-color: $icon-back-color;
  color: $font-color;
    }
    .backPink{
      background-color: pink;
}
  }
}
@media screen and (min-width: 800px){
     .page-body{
      padding: 10vh 6vw;
     >.wrap{  
    width: 21.5vw;
    height: 22vw;
    font-size: 1.6rem;
    >.item{
    width:7rem;
    height:7rem;
    }
    }
    
  }
}
</style>