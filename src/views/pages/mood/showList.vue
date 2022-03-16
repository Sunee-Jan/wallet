<template>
  <div class="listPage">
      <header>
        <p class="diary">我的日记</p>
        <p class="goBack" @click="back"><Icon name="#返回" svg='back'/></p>
      </header>
      <ul class="showLists">
        
        <li  v-for="list in lists" :key="list.id" @touchstart="deleteMO($event,list.id)" @touchend='clearTimeout'>
            <!-- <van-swipe-cell> -->
             <!-- <van-cell :border="false"> -->
               <h3><span class="year">{{list.date.slice(0,4)}}年</span><span class="month">{{list.date.slice(4,6)}}月{{list.date.slice(6)}}日</span></h3>
               <p class="content" v-text="list.text"></p>
             <!-- </van-cell> -->
             <!-- <template #right> -->
            <!-- <van-button square type="danger" text="删除" @click="isDelete(list.id)"/> -->
             <!-- </template> -->
            <!-- </van-swipe-cell>  -->
            <span class="delete" @click="isDelete(list.id)">删除</span>
        </li>
        <!-- <li class="list" v-for="list in lists" :key="list.id">
          <h3>20220年03月04日</h3>
          <p></p> -->
        <!-- </li> -->
      </ul>
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
      }
    },
methods: {
back(){
  this.$router.replace({
    name:'PickDate'
  })
},
deleteMO(e,id){
  let ID = id
  clearTimeout(this.Loop)
  this.Loop=setTimeout(()=>{
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
  })
  },700)
  e.preventDefault();
},
clearTimeout(){
  clearTimeout(this.Loop);
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
        console.log(index);
        this.lists.splice(index,1)
      }
    });
    localStorage.setItem('diary',JSON.stringify(this.lists))
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
header{
  position: relative;
  padding: 1.5rem;
  font-size: 1.6rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  >.goBack{
        >.back{
            width: 2.3rem;
            height: 2.3rem;
            margin-top:2px;
            vertical-align: middle;
        }
  }
  >.diary{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 800;
    font-size: 1.8rem;
    margin-top: 3px;
  }
}
.showLists{
  width: 100vw;
  height: calc(100vh - 53px);
  overflow: scroll;
  >li{
    position: relative;
    // border: 1px solid;
    padding: 1.5rem .5rem 1.5rem 2rem;
    // height: 10vh;
    // max-height: 60px;
    // width: 90vw;
    box-shadow: 0 1px 0 rgba(253, 217, 222, 0.2);
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