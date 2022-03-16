<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name:'App',

}
</script>

<style lang="scss">
@import '~@/assets/helper.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  color: #3a3a3a;
  text-decoration: none;
}
html{
  font-size: 10px;
}
@media screen and (min-width: 800px){
  html{
  font-size: 15px;
}
}

</style>
