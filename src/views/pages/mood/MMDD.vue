<template>
  <div class="timeCheck">
<van-calendar v-model="show" 
  @confirm="onConfirm" 
  :min-date="minDate"
  :max-date="maxDate"/>
</div>
</template>

<script>
import dayjs from 'dayjs'
export default {
data(){
    return{
     date: '',
     show: false,
     minDate: new Date(2010, 0, 1),
     maxDate: new Date(),
   }
    },
methods:{
formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
onConfirm(date) {
    this.show = false;
    this.date = this.formatDate(date);
    this.$bus.$emit('getDate',this.date)
    },
getShow(val){
    this.show=val
    }
},
 mounted(){
    this.$bus.$on('isShow',this.getShow)
}
}
</script>

<style lang='scss' scoped>
.timeCheck{
 position: absolute;
 width: 100%;
 top:4rem;
 right: 1rem;
 z-index: 1;
 box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
 /* background-color: #fff; */
}
</style>