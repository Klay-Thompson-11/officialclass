export default {
    namespaced: true,
    state:{
        val:'game over'
    },
    mutations:{
        changeval:(state,val)=>{
            state.val = val;
        }
    }
}