<template>
  <div id="navbar">
      <router-link to="/" class="'item'">
      <svg>
        <use xlink:href='#list'/>
      </svg>
      明细
      </router-link> 
      <router-link to="/chart">
      <svg>
        <use xlink:href='#analysis'/>
      </svg>
      图表
      </router-link>     
      <router-link to="/keepAccount" class='item'>
      <svg>
        <use xlink:href='#add'/>
      </svg>
      记账
      </router-link>    
      <router-link to="/mood">
      <svg>
        <use xlink:href='#coffee'/>
      </svg>
      心情
      </router-link>    
      <router-link to="/userHome">
      <svg>
        <use xlink:href='#mine'/>
      </svg>
      我的
      </router-link> 
  </div>
</template>

<script>
import '@/assets/icons/list.svg'
import '@/assets/icons/analysis.svg'
import '@/assets/icons/coffee.svg'
import '@/assets/icons/mine.svg'
import '@/assets/icons/add.svg'
// console.log(x);
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
      // width: 5rem;
      // height: 5rem;
      // border-radius: 50%;
      text-align: center;
      line-height: 13rem;
    }
    }
</style>