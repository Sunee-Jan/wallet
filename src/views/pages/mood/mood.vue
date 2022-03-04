<template>
  <div>
  <lay>
    <div class="welcome">
      <h2 class="username">Hi,小丸子</h2> 
      <p>很高兴认识你</p>
      <p>你可以把这里当做树洞</p> 
      <p>来讲一讲你今天的心情吧</p>
      <p>...</p>
      <el-row>
      <el-button type="danger" round size="medium">记录一下吧</el-button>
      </el-row>
      </div>
  </lay>
  </div>
</template>

<script>
export default {
name:'UserMood'
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
  .welcome{
    text-align: center;
    color:$font-color;
    font-size: 1.8rem;
    padding: 5rem;
    font-weight: bold;
    >p{
      line-height: 5rem;
    }
  }
  .el-button--danger{
    background: pink;
    border-color:pink;
    color: #FFF;margin: 4rem;
    width: 14rem;
    height: 4rem;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 50px 0;
}
.username{
  color: pink;
  font-size: 2.5rem;
  margin:3rem 0 5rem;
}

</style>