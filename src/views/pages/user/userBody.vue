<template>
  <main class="body">
  <div class="title">
    <Icon name="#more" svg='moreIcon'/>
    <p class="detail">
      <span class="assets">现有资产</span>
      <span class="debt">现有负债</span>
    </p>
    </div>
  <div class="account">
    <p class="positive">+{{allAsset}}</p>
    <p class="negative">{{allDebt}}</p>
  </div>
</main>
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';
export default {
  computed:{
    ...mapState('money',['dataAll','dateShow','currentDate','titleTime','showTile','monthPay','monthIncome']),
    allAsset(){
      let count=0
      this.dataAll.forEach(element => {
         element.items.forEach(item=>{
           count+=item.incomeAll
         })
      });
      return count
    },
    allDebt(){
       let count=0
      this.dataAll.forEach(element => {
         element.items.forEach(item=>{
           count+=item.payAll
         })
      });
      return count
    }
  }
}
</script>

<style  lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.body{
  position: relative;
  margin-top:1.5rem;
  background-color: #fff;
   height: 10vh;
   max-height: 80px;
   display: flex;
   justify-content: space-between;
   padding: 10px;
   font-size: 1.4rem;
   >div{
     position: absolute;
     top:50%;
     transform: translateY(-50%);
   }
   >.title{
     display: flex;
     >.detail{
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       margin-left: 6px;
       color: $font-color-min;
       >.assets{
         font-size: 1.6rem;
         color: #3d1a18;
       }
     }
     >.moreIcon{
       width: 4rem;
       height: 4rem;
       color: pink;
       background-color: pink;
       border-radius: 50%;
       padding: 2px;
     }
   }
   >.account{
     right: 10px;
     text-align: right;
     font-size: 1.5rem;
     font-family: $font-hei;
     color: $font-color-min;
   }
}

</style>