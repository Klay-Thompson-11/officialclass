<template>
  <div class="home">
      输入框:
      <input 
        type="text" 
        :value="v"
        ref="txt"
      /> 
      store中的: {{$store.state.store2.val}}
      <button @click="changeVal">确定修改</button>
      <hr>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  data(){
    return {
      vv:'123'
    }
  },
  name: 'home',

  methods:{
    ...mapMutations(['increment','store2/changeval']),
    changeVal(){
        this['store2/changeval']();
    }
  },

  computed:{
     ...mapState({
      num(data){
        return data.store1.num;
      },
      v:({store2:{val}})=>val
    }),
    vv2(){
      return this.vv + '0';
    },
  }
}
</script>
