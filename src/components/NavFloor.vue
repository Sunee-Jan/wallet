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
export default {
name:'NavFloor',
}
</script>

<style scoped lang="scss">
#navbar{
      border-top: transparent;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
      height: 6.5rem;
      font-size: 1.2rem;
      // line-height: 2rem;
      display: flex;
      justify-content: space-around;
      .aside{
      margin-top:0.5rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      .nav{
      width: 3rem;
      height: 3rem;     
    }
      }
    > .item{
      transform: translateY(-50%);
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      line-height: 2rem;
      text-align: center;
     .navMid{
      width: 4rem;
      height: 4rem;
    }
    }
    .selected{
      color: pink;
    }
    }
</style>