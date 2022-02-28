<template>
  <svg class="icon"  :class='svg'>
    <use :xlink:href="name" />
  </svg>
</template>

<script lang="ts">
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  export default {
    name:'AllIcon',
    props: ['name','svg'],
  };
</script>

<style lang="scss" scoped>
.icon{
    width: 100px;
}
</style>