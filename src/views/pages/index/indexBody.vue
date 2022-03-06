<template>
  <ul class="list">
        <li v-for="date in $store.state.dates" :key="date.id">
          <h6>
            <span>{{date.day}}</span>
            <span>星期{{date.week}}</span>
            <p>
              <span>收入：{{Earn(date.id)}}{{date.payAll}}</span>
              <span>支出：{{spend(date.id)}}{{date.incomeAll}}</span>
            </p>
          </h6>
          <p v-for="item in date.items" :key="item.id">
            <Icon :name="item.icon" svg='nav'/>
            <span class="detail">{{item.kind}}</span>
            <span class="pay">{{item.amount}}</span>
          </p>          
        </li>
    </ul>
</template>

<script>
export default {
name:"IndexBody",
data(){
  return{
  }
},
methods:{
  Earn(id){
    let test =this.$store.commit('money',{id,flag:1})
     return test
  },
  spend(id){
     return  this.$store.commit('money',{id,flag:0})
  },
  mounted() {
    
  },
},
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
      border-radius: 50%;
      color:$dev-color;
      background-color: $main-color;
    }
  }
  }
  }
</style>