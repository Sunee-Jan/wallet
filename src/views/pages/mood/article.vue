<template>
  <div class="article">
    <header>
      <p class="goBack" @click="back"><Icon name="#返回" svg='back'/></p>
      <p class="diary">{{time}} <Icon :name="weather" svg='weather'/> </p>
      <button class="showLIst" @click="Edit">{{operator}}</button>
    </header>
    <textarea name="" id="" cols="30" rows="10" v-model="text" disabled></textarea>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
name:'Article',
data(){
    return{
        operator:'编辑',
        text:'',
        weather:'',
        time:dayjs().format('YYYY年MM月DD日'),
        dataAll:JSON.parse(localStorage.getItem('diary'))
    }
},
props:['article'],
methods: {
back(){
this.$router.replace({
    name:'mood'
  })
},
Edit(){
    if(this.operator==='编辑'){
    $('textarea').attr("disabled",false)
    $('textarea')[0].focus()
    this.operator='完成'
    }
    else if(this.operator==='完成'){
    this.dataAll.forEach(element => {
       if(element.id===this.article.id){
           $('textarea').attr("disabled",true)
           element.text=this.text
           localStorage.setItem('diary',JSON.stringify(this.dataAll))
           this.operator='编辑'
       }
   });
    }
}
},
mounted() {
   this.dataAll.forEach(element => {
       if(element.id===this.article.id){
           this.text=element.text
           if(element.icon){
               this.weather='#'+element.icon
           }
       }
   });
   console.log(this.weather); 
},
}
</script>

<style lang='scss' scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.article{
    background: rgb(254,216,221);
    background: linear-gradient(0deg, rgba(254,216,221,1) 0%, rgba(255,255,255,0.7674418604651163) 66%);
    background-color: rgba(131, 219, 253, 0.384);
header{
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
    top:1.8rem;
    transform: translateX(-55%);
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
.weather{
    vertical-align: top;
    width: 2.5rem;
    height: 2.5rem;
}
}
</style>