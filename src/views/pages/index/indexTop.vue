<template>
  <header>
      <h1>小丸子の帳簿</h1>
      <ul class="timeOption">
        <li class='timer'>
         <h4>2021</h4>
          <p>11月</p>
        </li>
        <li class="income">
          <h4>收入</h4>
          <p>23971.50</p>
        </li>
        <li class="spending">
          <h4>支出</h4>
          <p>11186.20</p>
        </li>
      </ul>
    </header>
</template>

<script>
export default {
name:'IndexTop'
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
header {
  font-family: $font-hei;
  color:$font-color;
  background-color: $main-color;
  >h1{
    text-align: center;
    padding:1rem 2rem;
    font-size: 2.1rem;
    font-family: $font-song;
  }
  >.timeOption{
    display: flex;
    justify-content: space-between;
    >li:first-child{
      flex-grow:1;
      padding-left: 0;
      text-align: center;
      >p{
    border-right: 1px solid $grey-color;
      }
    }
    >li:nth-child(2){
      flex-grow:2;
    }
    >li:nth-child(3){
      
      flex-grow:2;
    }
    >li{
      // border: 1px solid red;
      padding-left: 3rem;
      >h4{
    margin-top: 1rem;;
     font-size: 1.2rem;
     color:$font-color-min;
     font-family: $font-hei;
    }
    >p{
      font-size: 2.2rem;
      margin:.7rem 0;
      font-weight: 330;
    }
    }
  }
}
</style>