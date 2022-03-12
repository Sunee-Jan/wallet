<template>
<div class="wrap">
 <van-dropdown-menu  >
     <van-dropdown-item v-model="value1" :options="option1" title='按周' />
     <van-dropdown-item v-model="value2" :options="option2" title='按月'/>
     <van-dropdown-item v-model="value3" :options="option3" title='按年'/>
    </van-dropdown-menu>
</div>
</template>

<script>
export default {
    name:'PickRange',
     data() {
    return {
      value1: 0,
      value2: 'a',
      value3: '一',
      option1: [
        { text: '本周', value: 0 },
        { text: '上周', value: 1 },
        { text: '前2周', value: 2 },
        { text: '前3周', value: 3 },
        { text: '前4周', value: 4 },
      ],
      option2: [
        { text: '本月', value: 'a' },
        { text: '上个月', value: 'b' },
        { text: '前2月', value: 'c' },
      ],
      option3: [
        { text: '本年', value: '一' },
        { text: '好评排序', value: '二' },
        { text: '销量排序', value: '三' },
      ],
    };
  },

}
</script>

<style lang="scss" >
.wrap .van-dropdown-menu__item {
    // height: 7vh;
    background-color: pink;
    font-size: 14px;
}
.wrap .van-dropdown-menu{
    box-shadow: 0 0px 0 transparent;
}
.wrap .van-dropdown-menu__title::after {
    border-color: transparent transparent black black;
}
</style>