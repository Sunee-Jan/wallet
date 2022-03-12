<template>
<div class="showPart">
  <ul  v-if="!isSHowListPage">
    <li>暂无数据</li>
  </ul>
<ul class="list" v-if="isSHowListPage">
        <li v-for="data in dataShow.items" :key="data.id">
          <h6>
            <span>{{dataShow.title.slice(5,7)}}月{{data.day}}日</span>
            <span>{{data.week}}</span>
            <p>
              <span>支出：{{data.payAll}}</span>
              <span>收入：{{data.incomeAll}}</span>
            </p>
          </h6>
          <p id="move" class="list" v-for="list in data.list" :key="list.id">
            <Icon :name="list.icon" svg='nav'/>
            <span class="detail">{{list.kind}}</span>
            <span class="pay">{{list.amount}}</span>
            <span class="delete" @click="deleteTag(list.id,data.day)">删除</span>
          </p>   

        </li>
    </ul>

</div>
  
</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';
export default {
name:"PcDevice",
data(){
  return{
  }
},
methods:{
...mapMutations('money',{reCount:'reCount',sortDataAll:'sortDataAll',putLocalStorage:'putLocalStorage'}),
//删除选择标签
deleteTag(id,day){
  this.dataAll.forEach(element => {
    if(element.title){
    if(element.title===this.dataShow.title){
      const indexYM=this.$store.state.money.dataAll.indexOf(element)
      element.items.forEach(item=>{
        if(item.day===day){
          const indexDD=element.items.indexOf(item)
          item.list.forEach(el=>{
            if(el.id===id){
              if(this.dataAll.length===1 && element.items.length===1 && item.list.length===1){
                this.$store.state.money.dataAll=JSON.parse('[{"title":"","items":[{"day":"","week":"","payAll":0,"incomeAll":0,"list":[{"id":"","icon":"","kind":"","amount":0}]}]}]')
                this.isSHowListPage=false
                return
              }
              else if(this.dataAll.length>1 && element.items.length===1 && item.list.length===1){
                // let temp={title:`${this.dataShow.title}`,items:[{day:"",week:"",payAll:0,incomeAll:0,list:[]}]}
                let temp = this.dataShow.title
                this.$store.state.money.dataAll.splice(indexYM,1)
                this.$nextTick(()=>{
                this.$store.state.money.monthIncome=0
                this.$store.state.money.monthPay=0
                this.$store.state.money.titleTime=temp
                })
                this.isSHowListPage=false
                return
              }else  if(this.dataAll.length===1 && element.items.length>1 && item.list.length===1){
                this.$store.state.money.dataAll[0].items.splice(indexDD,1)
              }
              else if(this.dataAll.length>1 && element.items.length>1 && item.list.length===1){
                this.$store.state.money.dataAll[indexYM].items.splice(indexDD,1)
                return
              }else{
                const indexList=item.list.indexOf(el) 
                this.$store.state.money.dataAll[indexYM].items[indexDD].list.splice(indexList,1)
              }
            }
          })
        }
      })
    }
  }});
  this.putLocalStorage()
  this.reCount()
},
},
computed:{
  ...mapState('money',['dataAll','dateShow','currentDate','titleTime','showTile','monthPay','monthIncome']),
  ...mapGetters('money',['dataShow']),
  dataAll:{
    get(){
      return this.$store.state.money.dataAll
    },
    set(val){
      this.$store.state.money.dataAll=val
    }
  },
  isSHowListPage:{
    get(){
      return this.$store.state.money.isSHowListPage
    },
    set(val){
      this.$store.state.money.isSHowListPage=val
    }
  }
},
mounted(){
  this.sortDataAll()
  //判断初始化首页是否可以展示数据
  if(this.$store.state.money.dataAll[0].title){
    this.isSHowListPage=true
  }
  this.reCount()
}
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.list{
  background-color: #fff;
  >li{
    width: 100vw;
    overflow: hidden;
    >h6{
    display: flex;
    justify-content: space-between;
    padding:0 15px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    z-index: 1;
    font-size: 1.2rem;
    color:$grey-color;
    height: 4vh;
    line-height: 4vh;
    font-family: $font-hei;
    font-weight: 400;

    >span:nth-child(1){
      text-align: left;
      flex-grow: 1;
    }
    span:nth-child(2){
      text-align: left;
      flex-grow: 1;
    }
    >p{
      text-align: right;
      flex-grow: 16;
      >span{
        display: block;
        float: right;
        margin-left: 10px;
      }
    }
   }
  >.list{
    display: flex;
    height: 5.3rem;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0.7rem 0 0 1.5rem;
    padding-right: 0;
    margin-top:2px;
       >.detail{
      line-height: 4rem;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    }
    >.pay{
      line-height: 4rem;
      flex-grow: 1;
      text-align: right;
      padding-right: 15px;
      font-size: 1.5rem;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    }
    >.nav{
      margin-right: 1.8rem;
      width: 3.7rem;
      height: 3.7rem;  
      padding: 6px; 
      border-radius: 30%;
      color:$font-color;
      background-color: $main-color;
    }
    >.delete{
      cursor: pointer;
      background-color: #ed736e;
      color: #fff;
      margin-top:-.7rem;
      line-height: 5.3rem;
      font-size: 1.6rem;
      padding: 0 2rem;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    }
  }
  @media screen and (min-width: 800px){

     .list{
      font-weight: 400;
      height: 7rem;
      font-size: 1.5rem;
      >.pay{
      line-height: 9vh;
      padding-right: 30px;
    }
    >.delete{
      display: none;
      line-height: 11vh;
    }
    >.detail{
      line-height: 9vh;
    }
    >.nav{
      line-height: 10vh;
      margin-top:12px;
    }
    }
    >.list:hover .delete{
    display: block;
   }
    h6{
    >p{
      flex-grow: 80;
    }
  }
  }
  
  }
  }
   @media screen and (max-width: 800px){
    li{
    width: 100vw;
    overflow: hidden;
    >.list{
    width: calc(100% + 7.3rem);
    }
  }
   }
  
</style>