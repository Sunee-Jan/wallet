export default{
    namespaced: true,
    state: {
       lockDays:JSON.parse(localStorage.getItem('lock') || '[]' )
    },
    getters:{
 
    },
    mutations: { 
    },
    actions: {
    }
}