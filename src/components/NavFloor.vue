<template>
  <div id="navbar">
      <router-link to="/index" active-class='selected' class='aside'>
      <Icon name="#list" svg='nav'/>
      明细
      </router-link> 
      <router-link to="/chart" active-class='selected' class='aside'>
      <Icon name="#analysis" svg='nav'/>
      图表
      </router-link>     
      <router-link to="/keepAccount" class='item'>
      <Icon name="#add" svg='navMid'/>
      记一笔
      </router-link>    
      <router-link to="/mood" active-class='selected' class='aside'>
      <Icon name="#coffee" svg='nav'/>
      心情
      </router-link>    
      <router-link to="/userHome" active-class='selected' class='aside'>
      <Icon name="#mine" svg='nav'/>
      我的 
      </router-link> 
  </div>
</template>

<script>
import { mount } from '@vue/test-utils'
export default {
name:'NavFloor',
data(){
  return{
    
  }
},
methods:{
  // isHasData(){
  // this.hasData=val
  // }
},
mounted() {
  // this.$bus.$on('hasData',this.iaHasData)
},
}
</script>

<style scoped lang="scss">
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
#navbar{
      border-top: transparent;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
      height: 8vh;
      // height: 6rem;
      font-size: 1.2rem;
      display: flex;
      justify-content: space-around;
      .aside{
      margin-top:0.5rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      color:#3d1a18 ;
      .nav{
      width: 2.5rem;
      height: 2.5rem;     
    }
      }
    > .item{
      transform: translateY(-50%);
      background-color: #f5f5f5;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
      line-height: 2rem;
      text-align: center;
     .navMid{
      width: 5rem;
      height: 5rem;
    }
    }
    .selected{
      color: $main-color;
    }
    }
</style>