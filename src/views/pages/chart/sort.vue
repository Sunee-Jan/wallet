<template>
  <div id="mySort"></div>
</template>

<script>
export default {
name:'Sort',
  data () {
    return {
          money:100,
      dataW:[],
      dataM:[],
      dataY:[]
    }
  },
  mounted(){
    //根据设备自适应宽高
    window.onresize= function() {
    mySort.resize();
    //
  };
    this.drawLine();
  },
  methods: {
    drawLine(){
        let mySort = this.$echarts.init(document.getElementById('mySort'))

        mySort.setOption({
            // title: { text: '在Vue中使用echarts' },
            tooltip: {},
            legend: {
            // orient: 'vertical',
            right: 10,
            top: 10,
           },
            yAxis: {
                data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'] 
            },
            xAxis: {},
            series: [{
                name: '支出',
                type: 'bar',
                 axisLine: {
                  lineStyle: {
                    type: 'dashed',
                    color:'red',
                    width:20,
                  }
                },
                itemStyle:{
                  color:'pink',
                  width:1,
                },
                data: [`${this.money}`,"600","700","300","200","50",'0']
            }
            ],
        });
    }
  }
}
</script>

<style lang='scss' scoped>
#mySort,
html,
body {
    width: 100%;
  }
#mySort{
 border: 1px solid;
 position: fixed;
 bottom: 10vh   ;
  height: 40vh;
}
</style>