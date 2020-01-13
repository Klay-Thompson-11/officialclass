
const state = {
    num:0
}
const mutations = {
    increment(state){
        state.num ++
    },
    changeval(){
    }
}

const actions = {
    asyncincrement(context){
        setTimeout(() => {
            context.commit('increment');
        }, 2000); 
    }
}

export default {
    state,
    mutations,
    actions
};