import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        num:0
    },
    mutations:{
        //methods:{increment}
        // asyncincrement (state) {
        //     setTimeout(() => {
        //         state.num ++
        //     }, 2000);
        // },
        increment(state){
            state.num ++
        }
    },
    getters:{
        toDou(state){
            return state.num<10?'0'+state.num:''+state.num
        }
    },
    //放异步请求
    actions:{
        asyncincrement(context){
            setTimeout(() => {
                context.commit('increment');
            }, 2000); 
        }
    }
});
export default store;