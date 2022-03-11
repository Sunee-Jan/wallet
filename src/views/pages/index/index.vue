<template>
<div class="timeWrap">
    <lay>
    <IndexTop/>
    <!-- <IndexBody/> -->
    <PcDevice v-if="isWindow"/>
    <MoveDevice  v-if="!isWindow"/>
  </lay>
  <CalendarMM/>
</div>
</template>

<script>
import IndexBody from './indexBody.vue'
import IndexTop from './indexTop.vue'
import CalendarMM from './calendarMM.vue';
import PcDevice from './pcDevice.vue';
import MoveDevice from './moveDevice.vue';
var dayjs = require('dayjs')
export default {
  data() {
    return {
      isWindow:false
    }
  },
  components: { IndexTop, IndexBody, CalendarMM, PcDevice, MoveDevice },
  name:'UserList',
  mounted(){
    var os = function() {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}()
if(os.isAndroid || os.isPhone){
    this.isWindow=false
  }else if(os.isTablet){
    this.isWindow=false
  }else if(os.isPc) {
    this.isWindow=true
} 
  }
}
</script>

<style >
.timeWrap::-webkit-scrollbar {
  display: none;
}
</style>