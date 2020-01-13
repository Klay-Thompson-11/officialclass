import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        val:'game over'
    },
    mutations:{
        changeval(state,val){
            state.val = val;
        }
    }
});;