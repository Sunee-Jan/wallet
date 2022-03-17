<template>
  <div id="mySort">
    <p v-show="!hasData"><Icon name="#无数据" svg='noData'/></p>
    <p id="move" class="list" v-for="(list,index) in getRank" :key="index" v-show="hasData">
            <Icon :name="list.icon" svg='nav'/>
            <span class="right">
            <span class="detail">{{list.icon.slice(1)}} &nbsp;{{list.percent}}%</span>
            <span class="amount">{{list.amount}}</span>
            <span class="bar" :style="barWith(list.percent)"></span>
            </span>
    </p> 
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions} from 'vuex';
export default {
name:'Sort',
  data() {
    return {
      // lists:[1,2,3,4,5,6,7,8,11,1,1,1,1,1,1,1,,1,1,1],
      // barWith:'width:50%'
    }
  },
  computed:{
   ...mapState('chart',['getRank','hasData']),
  },
  methods:{
    ...mapMutations('chart',{Rank:'Rank',SotRank:'SotRank'}),
    barWith(item){
     return `width:${item}%`
   },
  },
  mounted(){
    this.Rank()
    this.SotRank()

  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
#mySort,
html,
body {
    width: 100%;
  }
#mySort{
  position: relative;
  height: calc(100vh - 38vh - 96px);
  overflow: scroll;
  >p .noData{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-70%);
  }
}
#mySort::-webkit-scrollbar {
  display: none;
}
.list{
    display: flex;
    height: 6rem;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1.2rem 0 0 1.5rem;
    padding-right: 0;
    margin-top:2px;
    >.nav{
      margin-right: 1.8rem;
      width: 3.7rem;
      height: 3.7rem;  
      padding: 6px; 
      border-radius: 30%;
      color:$font-color;
      background-color: $main-color;
      // background-color: #eeee;
      // color: pink;
    }
    >.right{
       position:relative;
      width: calc(100vw - 5.9rem);
      margin-right: 1.5rem;
      // height: 3.7rem;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
      >.detail{
      float: left;    
    }
    >.amount{
      float: right;
      line-height: 2rem;
      flex-grow: 1;
      text-align: right;
      font-size: 1.5rem;
    }
    >.bar{
      display: block;
      content: "";
      position:absolute;
      bottom: 2rem;
      // width: 80%;
      height: .6rem;
      background-color: pink;
      border-radius: .3rem;
    }
    }
  }
</style>