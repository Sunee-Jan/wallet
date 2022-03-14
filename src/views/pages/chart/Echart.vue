<template> 
  <div id="myChart"></div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions} from 'vuex';
export default {
name:"EChart",
data(){
  return{
    pay:[],
    income:[],
    day:[]
  }
},
computed:{
  ...mapState('chart',['getWChart']),
},
watch:{
  getWChart:{
    deep: true,
    handler(){
      this.payAll()
      this.incomeAll()
      this.dayType()
      this.drawLine()
    }
  }
},
  methods: {
    ...mapMutations('chart',{weekChart:'weekChart'}),
    payAll(){
    let arr=[]
    this.getWChart.forEach(element => {
      arr.push(element.payTotalD)
    });
     this.pay=arr.slice(0)   
  },
  incomeAll(){
    let arr=[]
    this.getWChart.forEach(element => {
      arr.push(element.incomeTotalD)
    });
    return this.income=arr.slice(0)
  },
  dayType(){
    let arr=[]
    this.getWChart.forEach(element => {
      arr.push(element.weekDay)
    return this.day=arr.slice(0)
    });
  },
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
                data: this.day
            },
            yAxis: {},
            series: [{
                name: '支出',
                type: 'line',
                lineStyle:{
                  color:'skyblue',
                  width:1,
                },
                itemStyle:{
                  color:'skyblue',
                },
                data: this.pay
            },
            {
                name: '收入',
                type: 'line',
                lineStyle:{
                  width:1,
                  color:'pink'
                },
                itemStyle:{
                  color:'pink',
                },
                data: this.income
            }
            ],
        });
    },
  },
      mounted(){
      this.weekChart()
    //根据设备自适应宽高
    window.onresize = function() {
    myChart.resize();
  };
    // this.drawLine();
  },
}
</script>

<style lang='scss' scoped>
#myChart,
html,
body {
    width: 100%;
  }
#myChart{
  top:0;
  width: 100vw;
  height: 30vh;
}
</style>