<template>
  <header class="userInfo">
  <div class="admin">
    <div class="user"><p class="logo">Hi</p><p class="username">小丸子</p></div>
    <div class="clock"><Icon name="#clock" svg='clockIcon'/>打卡</div>
  </div>
    <div class="statical">
      <p class="continuous"><span>0</span>已连续打卡</p>
      <p class="days"><span>0</span>记账总天数</p>
      <p class="count"><span>0</span>记账总笔数</p>
    </div>
 </header>
</template>

<script>
export default {
name:'UserTop'
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.userInfo {
  position: relative;
  width: 100vw;
  background-color: pink;
  padding: 3rem;
  height: 25vh;
  min-height: 200px;
  max-height: 220px;
}
.admin{
    position:absolute ;
    width:calc(100% - 6rem);
    display: flex; 
    justify-content: space-between;
    text-align: center;
    line-height: 6rem;
    >.user{
      >.logo{
    float: left;
    border: 1px solid pink;
    background-color: white;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    font-size: 3.5rem;   
    color: pink;
      }
    >.username{
    float: left;
    margin-left: 10px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #3d1a18;
      }
    }
    
  >.clock{
  width: 7rem;
  height: 2.5rem;
  margin-top: 1.5rem;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  background-color: #fff;
  line-height: 2.6rem;
  >.clockIcon{
    float: left;
    margin: .2rem .3rem 0 .5rem;
    width: 2rem;
    height: 2rem;
  }
}
}
.statical{
  position: absolute;
  bottom: 20px;
  width:calc(100% - 6rem);
  height: 10vh;
  min-height :80px; 
  max-height: 90px;
  >p{
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 1.6rem;
    height: 5rem;
    >span{
      font-size: 2.3rem;
      font-family: $font-hei;
    }
  }
  >.days{
      left: 50%;
      transform: translateX(-50%);
    }
  >.count{
      right: 0;
  }
}
</style>