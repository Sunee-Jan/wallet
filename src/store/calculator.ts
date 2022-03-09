export default{
    namespaced: true,
    state: {
        counterIsShow:false,
        calendarIsShow:false,
        currentDate: new Date(),
        createData:[{title:'YYYY-MM',items:[
            {day:'DD',week:'',payAll:0,incomeAll:0,list:[
                {id:'',icon:'',kind:'',amount:0}]
            }]
        }]
    },
    getters:{
     
    },
    mutations: {

    },
    actions: {
    }
} 