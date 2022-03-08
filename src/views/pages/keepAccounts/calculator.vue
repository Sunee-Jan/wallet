<template>
      <div class="calculator" v-show='counterIsShow'>
      <header class="info">
          <div class="note">
            <Icon name="#note" svg='noteIcon'/>
            <label>备注：<input v-model="note" type="text" placeholder="点击写备注..."></label>         
          </div>
          <div class="result">{{number}}</div>
      </header>
      <main class="calculate">
        <button @click='inputContent'>7</button>
        <button @click='inputContent'>8</button>
        <button @click='inputContent'>9</button>
        <button><span class="calendar"><Icon name="#日历" svg='menology'/>今天</span></button>
        <button @click='inputContent'>4</button>
        <button @click='inputContent'>5</button>
        <button @click='inputContent'>6</button>
        <button @click='empty'><Icon name="#清空" svg='delete'/></button>
        <button @click='inputContent'>1</button>
        <button @click='inputContent'>2</button>
        <button @click='inputContent'>3</button>
        <button @click='inputContent'>00</button>
        <button @click='inputContent'>.</button>
        <button @click='inputContent'>0</button>
        <button @click="back" class="deBack"><Icon name="#删除" svg='delete'/></button>
        <button @click="done" class="OK">完成</button>
      </main>
  </div>

</template>

<script>
import { mapState, mapGetters, mapMutations} from 'vuex';
export default {
    name:'UerCalculator',
    data() {
      return {
        note:'',
        number:'0.00'
      }
    },
    computed:{
  ...mapState('calculator',['counterIsShow']),
},
methods:{
  done(){
  this.$store.state.calculator.counterIsShow=false
  },
  inputContent(e){
    if(this.number.length===8){return}
    if(this.number==='0.00'||this.number==='0'){
      if(e.target.textContent==='.'){ return this.number = '0.'}
      else if(e.target.textContent==='00'){return}
      else{
        this.number=''
         return this.number +=e.target.textContent
      }
    }else{
      if(this.number.indexOf('.')>0){
        if(e.target.textContent==='.'){return}
        else{
         return this.number +=e.target.textContent
        }
      }
     return this.number +=e.target.textContent
    }
  },
  back(){
    if(this.number.length===1){
      if('0123456789'.indexOf(this.number)>=0){
        this.number='0'
      }
    }else{
      let lastIndex=this.number.length-1
      this.number=this.number.slice(0,lastIndex)
    }
  },
  empty(){
   return this.number='0'
  }
}
}
</script>

<style lang='scss' scoped>
.calculator{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 37vh;
  font-size: 1.5rem;
    background-color: #f3f3f3;
    >.info{
      height: 16%;
      border: transparent;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      >.note>label>input{
        width: 50vw;
        border: none;
        outline: none;
        font-size: 1.5rem;
      }
      >.result{
        font-size: 2.2rem;
      }
    }
    .noteIcon{
      float: left;
      margin-top:.2rem;
      margin-right:.4rem;
      width: 1.6rem;
      height: 1.6rem;
      line-height: 2rem;
      color:pink;
    }
    >.calculate{
      display: flex;
      flex-wrap: wrap;
      height: 84%;
      >button{
        border:1px solid #f3f3f3;
        border:transparent;
        outline: none;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
        width: 25vw;
        height: 25%;
        font-size: 2rem;
        background-color: #f3f3f3;
        text-align: center;
      }
      >button:last-child{
          background-color: pink;
      }
    }
}
input::placeholder{
  color: #cccc;
  background-color: #f3f3f3;
}
.delete{
  margin-top:1rem;
  width:5rem;
  height: 2.5rem;
  }
  .calendar{
        display: flex;
        justify-content:center;
        font-size: 1.6rem;
        line-height: 2.8rem;
        >.menology{
          width: 2.5rem;
          height: 2.5rem;
        }
      }
</style>