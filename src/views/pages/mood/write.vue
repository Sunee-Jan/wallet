<template>
  <div class="write">
      <p class="goBack" @click="back"><Icon name="#返回" svg='back'/></p>
      <header>
      <p class="title"><em>选择要记录的日期吧</em></p>
      <p class="time" @click="chooseDay">
          <span class="timeTile"><Icon name="#日历" svg='calendar'/>
          <u>{{showDate}}</u>
          <Icon name="#编辑" svg='edit'/>
          </span>
          <span class="weather">“这天天气如何呢”</span>
          </p>
      </header>
      <ul class="lists">
          <li v-for="(icon,index) in icons" :key="index" >
              <Icon :name="icon" svg='icon' ref="weather" @click.native='chooseWeather($event,icon)'/>
          </li>
      </ul>
      <button @click="done">选择好啦</button>
      <MMDD/>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import MMDD from './MMDD.vue'
export default {
name:'UserWrite',
data() {
    return {
     icons:['#晴','#多云','#阴','#雨','#雷','#雪'],
     showDate:dayjs().format('YYYY年MM月DD日'),
     chosenIcon:''
        }
    },
components: { MMDD },
methods:{
back(){
    this.$router.back()
        },
chooseDay(){
    this.$bus.$emit('isShow',true)
    console.log('111');
        },
Date(val){
    this.showDate=dayjs(val).format('YYYY年MM月DD日')
},
chooseWeather(e,icon){
    $('svg').removeClass('active')
    $(e.currentTarget).addClass('active')
    this.chosenIcon=icon.slice(1)
},
done(){
    this.$router.push({
        name:'ToWrite',
        params:{
            icon:this.chosenIcon,
            time:this.showDate
        }
    })
    },
  },
mounted(){
    this.$bus.$on('getDate',this.Date)
}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/reset.scss';
@import '~@/assets/helper.scss';
.write{
    position: relative;
    height: 100vh;
    width:100vw;
    background: rgb(254,216,221);
    background: linear-gradient(0deg, rgba(254,216,221,1) 0%, rgba(255,255,255,0.7674418604651163) 66%);
    overflow: scroll;
    background-color: #a5a5a5;
    >.goBack{
        padding: .8rem;
        >.back{
            width: 2.3rem;
            height: 2.3rem;
            
        }
    }
    >header{
        position: relative;
        width: 100%;
        height: 25vh;
        min-height: 230px;
        max-height: 300px;
        padding:5vh 10vw;
        >.title{
            font-family: $font-kai;
            font-size: 1.8rem;
            font-weight: 800;
        }
        >.time{
            // border: 1px solid;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 1rem 3rem;
            text-align: right;
            right: 0;
            bottom: 0;
            font-weight: 600;
            font-size: 1.6rem;
            >.timeTile{
              >.calendar{
                width: 3rem;
                height: 3rem;
                margin-top: 3px;
                vertical-align: -9px;
              }
              >.edit{
                width: 1.6rem;
                height: 1.6rem;
                vertical-align: -4px;
              }
              >u{
                  text-decoration: none;
                  border-bottom: 2px solid;
                  padding-bottom: 2px;

              }
            }
            >.weather{
                // border: 1px solid red;
                margin-top: 1rem;
                font-family: $font-song;
                font-size: 1.2rem;
                color: #a5a5a5;
            }
        }
    }
    >.lists{
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 3rem 3rem;
        >li{
            position: relative;
            width: 20vw;
            max-width: 210px;
            height: 20vw;
            max-height: 210px;
            >.icon{
                // border: 1px solid;
                background-color: #fff;
                border-radius: 20%;
                box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
                position: absolute;
                top:55%;
                left: 55%;
                transform: translate(-50%,-50%);
                width: 65%;
                height: 65%;
                padding: 1rem;
                color: $font-color;
            }
            .active{
                background-color: pink;
}
        }
    }
    >button{
        position: absolute;
        bottom: 120px;
        transform: translateX(-50%);
        left: 50%;
        width: 24vw;
        min-width: 120px;
        max-width: 200px;
        height: 10vw;
        max-height: 60px;
        border: 0;
        background-color: pink;
        border-radius: 5vw;
        font-weight: 600;
        font-size: 1.6rem;
        color: #fff;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    }
}
.write::-webkit-scrollbar {
  display: none;
}

</style>