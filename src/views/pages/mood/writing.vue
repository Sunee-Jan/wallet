<template>
  <div class="writing">
    <header>
      <p class="goBack" @click="back"><Icon name="#返回" svg='back'/></p>
      <p class="diary">日记</p>
      <button class="showLIst" @click="keepData">保存</button>
    </header>
    <textarea v-model="text">你好</textarea>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
name:'StartWrite',
data() {
  return {
    text:'',
    diaryList:JSON.parse(localStorage.getItem('diary')) || []
  }
},
props:['baseInfo'],
methods:{
back(){
  this.$router.back() 
  },
keepData(){
  let temp={
      id:nanoid(),
      date:this.baseInfo.time,
      icon:this.baseInfo.icon,
      text:this.text
    }
  this.diaryList.push(temp)
  localStorage.setItem('diary',JSON.stringify(this.diaryList))
  this.$bus.$emit('noData',true)
  this.$router.replace({
    name:'mood',
  })

}
},
mounted() {
  $('textarea')[0].focus()
},
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.writing{
    background: rgb(254,216,221);
    background: linear-gradient(0deg, rgba(254,216,221,1) 0%, rgba(255,255,255,0.7674418604651163) 66%);
    background-color: rgba(131, 219, 253, 0.384);
>header{
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  font-size: 1.6rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
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
    font-size: 2rem;
    line-height: 27px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  >.showLIst{
    border: none;
    width: 7rem;
    height: 2.5rem;
    border-radius: 1.3rem;
    color: #fff;
    background-color: pink;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  }
}
>textarea{
    width: 100vw;
    height: calc(100vh - 53px);
    border: none;
    overflow: scroll;
    padding: 1.5rem;
    resize: none;
    font-size: 1.8rem;
    background-color: transparent;
    font-family: $font-kai;
  }
>textarea::-webkit-scrollbar {
  display: none;
}
}
</style>