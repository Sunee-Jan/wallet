<template>
<div class="head-wrap">
   <header class="page-head">
      <p><span class="payout active">支出</span></p>
      <p><span class="income">收入</span><span class="cancel" @click="back">取消</span></p>
    </header>
</div>
     
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';
export default {
name:'PageHead',
methods:{
  back(){
     this.$store.state.calculator.counterIsShow=false
      this.$router.back() 
    },
},
computed:{
  ...mapState('calculator',['counterIsShow']),
},
}
</script>

<style lang=scss scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.head-wrap{
    height: $height;
}
.page-head{
  position: fixed;
  height:$height;
  display: flex;
  line-height: 6.5rem;
  text-align: center;
  font-size: 1.8rem;
  color:$font-color;
  background-color: $main-color;
    >p{
      width: 50vw;
      height: inherit;
      padding: 0 1.6rem 0 1.2rem;
      text-align: right;
      >.active{
        display: inline-block;
        border-bottom: 2px solid;
        height: inherit;
        padding:0 0.6rem;
      }
    }
    >p:nth-child(2){
      text-align: left;
      display: flex;
      justify-content: space-between;
      >.cancel{
        font-size: 1.4rem;
        line-height: 7rem;
      }
    }
}
</style>