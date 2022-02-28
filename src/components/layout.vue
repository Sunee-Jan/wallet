<template>
  <div class="wrapper">
    <div class="content">
    <slot></slot>
    </div>
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

    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
    overflow: auto;
  }
}
</style>