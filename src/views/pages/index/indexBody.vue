<template>
<div class="showPart">
  <ul  v-if="!isShow">
    <li>暂无数据</li>
  </ul>
<ul class="list" v-if="isShow">
        <li v-for="data in dataShow.items" :key="data.id">
          <h6>
            <span>{{dataShow.title.slice(5,7)}}月{{data.day}}日</span>
            <span>{{data.week}}</span>
            <p>
              <span>支出：{{data.payAll}}</span>
              <span>收入：{{data.incomeAll}}</span>
            </p>
          </h6>
          <p v-for="list in data.list" :key="list.id">
            <Icon :name="list.icon" svg='nav'/>
            <span class="detail">{{list.kind}}</span>
            <span class="pay">{{list.amount}}</span>
          </p>          
        </li>
    </ul>

</div>
  
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';
export default {
name:"IndexBody",
data(){
  return{
  }
},
methods:{
...mapMutations('money',{reCount:'reCount'}),
},
computed:{
  ...mapState('money',['dataAll','dateShow','currentDate','titleTime','showTile','monthPay','monthIncome']),
  ...mapGetters('money',['dataShow']),
  isShow(){
    return this.$store.state.money.dataAll[0].title
  }
},
mounted(){
  let sum =0
  let negSum=0
  this.dataShow.items.forEach(day=>{
    day.list.forEach(list=>{
      if(list.amount>0){
        sum += list.amount
       }else{
        negSum += list.amount
      }
    })
     day.incomeAll=sum
     sum =0
     day.payAll=negSum
     negSum=0
  })
  let come=0
  let out =0
  this.dataShow.items.forEach(day=>{
    come += day.incomeAll
    out += day.payAll
  })
  this.$store.state.money.monthPay=out
  this.$store.state.money.monthIncome=come
}
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.list{

  >li{
    
    >h6{
    display: flex;
    justify-content: space-between;
    padding:0 15px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    font-size: 1.2rem;
    color:$grey-color;
    height: 4vh;
    line-height: 4vh;
    font-family: $font-hei;
    font-weight: 400;

    >span:nth-child(1){
      text-align: left;
      flex-grow: 1;
    }
    span:nth-child(2){
      text-align: left;
      flex-grow: 1;
    }
    >p{
      text-align: right;
      flex-grow: 16;
      >span{
        display: block;
        float: right;margin-left: 10px;
      }
    }
   }
  >p{
    display: flex;
    height: 6rem;
    font-size: 1.6rem;
    padding: 0.7rem 1.5rem ;
    padding-right: 0;
    >.detail{
      line-height: 5vh;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    }
    >.pay{
      line-height: 5vh;
      flex-grow: 1;
      text-align: right;
      padding-right: 15px;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    }
    >.nav{
      margin-right: 1.8rem;
      width: 3.7rem;
      height: 3.7rem;  
      padding: 6px; 
      border-radius: 30%;
      color:$font-color;
      background-color: $main-color;
    }
  }
  }
  }
</style>