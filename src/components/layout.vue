<template>
  <div class="wrapper">
    <div class="content">
    <slot ></slot>
    </div>
    <Nav/>
  </div>
</template>

<script>
export default {
name:'Lay',
}
</script>

<style scoped lang="scss">
.wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    .content {
    overflow: auto;
    height: inherit;
  }
}
</style>