<template>
  <div>
  <lay>
    <header><div class="classfy"><p>周</p><p>月</p><p>年</p></div></header>
     <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </lay>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      money:100
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))

        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: [1, 5, 10, 15, 20, 25, 31] 
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [`${this.money}`,"600","700","300","200","50"]
            }]
        });
    }
  }
}
</script>

<style>

</style>