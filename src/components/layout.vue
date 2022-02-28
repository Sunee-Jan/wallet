<template>
  <div class="wrapper">
    <slot></slot>
    <Nav/>
  </div>
</template>

<script>
export default {
name:'Lay'
}
</script>

<style scoped lang="scss">
.wrapper {
    border:1px solid;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>