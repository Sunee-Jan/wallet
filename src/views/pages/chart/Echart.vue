<template>
  <div id="myChart"></div>
</template>

<script>
export default {
name:"EChart",
  mounted(){
    //根据设备自适应宽高
    window.onresize = function() {
    myChart.resize();
    //
  };
    this.drawLine();
  },
  methods: {
    drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))

        myChart.setOption({
            // title: { text: '在Vue中使用echarts' },
            tooltip: {},
            legend: {
            // orient: 'vertical',
            right: 10,
            top: 10,
           },
            xAxis: {
                data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'] 
            },
            yAxis: {},
            series: [{
                name: '支出',
                type: 'line',
                lineStyle:{
                  color:'pink',
                  width:1,
                },
                data: [`${this.money}`,"600","700","300","200","50",'0']
            },
            {
                name: '收入',
                type: 'line',
                lineStyle:{
                  width:1,
                  color:'skyblue'
                },
                data: [`${this.money}`,"640","800","300","500","50",'20']
            }
            ],
        });
    }
  }
}
</script>

<style lang='scss' scoped>
#myChart,
html,
body {
    width: 100%;
  }
#myChart{
  border: 1px solid red;
  // margin-top: 10vh;
//   height: 40vh;
}
</style>