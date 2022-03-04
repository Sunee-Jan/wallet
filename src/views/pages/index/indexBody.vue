<template>
  <ul class="list">
        <li>
          <h6><span>06月02日</span><span>星期三</span><span>支出：34</span></h6>
          <p><Icon name="#list" svg='nav'/><span class="detail"> 早餐</span><span class="pay">-29</span></p>
        </li>
        <li>
          <h6><span>06月01日</span><span>星期二</span><span>支出：34</span></h6>
          <p><Icon name="#mine" svg='nav'/><span class="detail">早餐</span><span class="pay">-2</span></p>
       </li>
    </ul>
</template>

<script>
export default {
name:"IndexBody"
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
    >span:nth-child(1){
      text-align: left;
      flex-grow: 1;
    }
    span:nth-child(2){
      text-align: left;
      flex-grow: 1;
    }
    >span:nth-child(3){
      text-align: right;
      flex-grow: 16;
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