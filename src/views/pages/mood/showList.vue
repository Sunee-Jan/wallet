<template>
<div class="listPage">
    <lay>
      <header>
        <p class="diary">我的日记</p>
        <Icon name="#addto" svg='navMid' class="add" @click.native="Edit"/>
      </header>
      <ul class="showLists">
        
        <li  v-for="list in lists" :key="list.id"
         @touchstart="deleteMO($event,list.id)"  
         @touchmove="isMove" 
         @touchend='clearTimeout(list.id)' 
         @click="toArticle(list.id)"
        >
               <h3><span class="year">{{list.date.slice(0,4)}}年</span><span class="month">{{list.date.slice(4,6)}}月{{list.date.slice(6)}}日</span></h3>
               <p class="content" v-text="list.text"></p>
            <span class="delete" @click="isDelete(list.id)">删除</span>
        </li>
      </ul>
    </lay>
</div>
</template>

<script>
import { Dialog } from 'vant';
import dayjs from 'dayjs'
export default {
name:'WriteLists',
data() {
      return {
        lists:JSON.parse(localStorage.getItem('diary')),
        Loop:0,
        longPress:false
      }
    },
inject:['reload'],
methods: {
Edit(){
  this.$router.replace({
    name:'PickDate'
  })
},
hasDate(){
  if(localStorage.getItem('diary')==="[]"){
      this.$bus.$emit('noData',false)
      this.reload()
    }
},
deleteMO(e,id){
  let ID = id
  this.Loop=setTimeout(()=>{
  this.longPress=true
  Dialog.confirm({
  title: '删除',
  message:'确认删除此条日记？'
}) .then(() => {
    this.lists.forEach(element => {
      if(element.id===ID){
        let index = this.lists.indexOf(element)
        console.log(index);
        this.lists.splice(index,1)
      }
    });
    localStorage.setItem('diary',JSON.stringify(this.lists))
    this.hasDate()
  }).catch(()=>{
  })
  },700)
},
isMove(){
clearTimeout(this.Loop);
this.Loop=0
},
clearTimeout(id){
  clearTimeout(this.Loop);
  if(this.longPress===false){
   this.$router.push({
    name:'Article',
    params:{
       id:id,
    }
  })
}
this.longPress=false
  },
  isDelete(id){
  let ID = id
  Dialog.confirm({
  title: '删除',
  message:'确认删除此条日记？',
}) .then(() => {
    this.lists.forEach(element => {
      if(element.id===ID){
        let index = this.lists.indexOf(element)
        this.lists.splice(index,1)
      }
    });
    localStorage.setItem('diary',JSON.stringify(this.lists))
  }).catch(()=>{
    console.log(ID);
  })
  this.hasDate()  
},
toArticle(id){
     this.$router.push({
    name:'Article',
    params:{
       id:id,
    }
  })
}
},

mounted() {
  this.lists=this.lists.sort((a,b)=>{
    console.log('执行l');
    return Number(dayjs(b.date).format('YYYYMMDD'))-Number(dayjs(a.date).format('YYYYMMDD'))
  })
  
},
}
</script>

<style lang='scss' scoped>
.van-button{
  width: 85px;
  text-align: center;
  border-radius: 15px;
  font-weight: 800;
  font-size: 1.6rem;
}
.goods-card {
    margin: 0;
    background-color: #fff;
  }
.van-cell{
  padding: 0;
  
}
.listPage{
    -webkit-touch-callout:none;
    -webkit-user-select:none; 
    -khtml-user-select:none; 
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
header{
  position: relative;
  height: 6rem;
  padding: 1.5rem;
  font-size: 1.6rem;
  background-color: transparent;
   background: rgb(254,216,221);
   >.diary{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 800;
    font-size: 1.8rem;
    margin-top: 3px;
    
  }
  >.add{
    position: absolute;
    right: 2rem;
    top:50%;
    transform: translateY(-50%);
    width: 3.8rem;
    height: 3.8rem;
    // border-radius: 1.3rem;
    // color: #fff;
    font-weight: 700;
    font-size: 1.6rem;
    background-color: transparent;
  }
}
.showLists{
  width: 100vw;
  height: calc(100vh - 53px);
  overflow: scroll;
  background-color: transparent;
  >li{
    -webkit-touch-callout:none;
    -webkit-user-select:none; 
    -khtml-user-select:none; 
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    position: relative;
    // border: 1px solid;
    padding: 1.5rem .5rem 1.5rem 2rem;
    // height: 10vh;
    // max-height: 60px;
    // width: 90vw;
    box-shadow: 0 1px 1px rgba(253, 217, 222, 0.4);
  }
    h3{
      font-size: 1.8rem;
      color: #3d1a18;
      >.year{
        color:pink
      }
      >.month{
        margin-left: 5px;
        font-size: 1.4rem;
      }
    }
    .content{
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      height: 1.8rem;
      overflow: hidden;
      margin-top: .2rem;
    }
    }
  
.showLists::-webkit-scrollbar {
  display: none;
}
.delete{
      display: none;
      position: absolute;
      right: 0;
      top: 1rem;
      cursor: pointer;
      background-color: #ed736e;
      color: #fff;
      margin-top:-.7rem;
      line-height: 5.3rem;
      font-size: 1.6rem;
      padding: 0 2rem;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    }
@media screen and (min-width: 800px){
  li:hover .delete{
  display: block
}

    }

</style>