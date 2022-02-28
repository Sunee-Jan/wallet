<template>
  <div id="navbar">
      <router-link to="/" class="'item'">明细</router-link> 
      <router-link to="/chart">图表</router-link>     
      <router-link to="/keepAccount" class='item'>记账</router-link>    
      <router-link to="/mood">心情</router-link>    
      <router-link to="/userHome">我的</router-link> 
  </div>
</template>

<script>
export default {
name:'NavFloor'
}
</script>

<style scoped lang="scss">
#navbar{
      border: 1px solid green;
      height: 6.5rem;
      font-size: 1.4rem;
      line-height: 9rem;
      display: flex;
      justify-content: space-around;
     > a {
          border: 1px solid pink;
      }
    > .item{
      transform: translateY(-50%);
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      text-align: center;
      line-height: 13rem;
    }
    }
</style>