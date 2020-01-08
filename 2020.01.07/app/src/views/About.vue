<template>
  <div class="about">
    <router-link to="/">Home</router-link> |
    <router-link to="/about/a/id/1">About1</router-link>
    <router-link to="/about/b/id/2">About2</router-link>
    <router-link to="/public">public</router-link>
    <h1 v-if="$route.params.id == 1">
      这个是About1页面
    </h1>
    <h1 v-if="$route.params.id == 2">
      这个是About2页面
    </h1>
    <div>
      <h2>用户:{{$route.params.uname}}</h2> 
      <h2 v-if="$route.params.id == 1">欢迎a回来</h2>
      <h2 v-if="$route.params.id == 2">欢迎b回来</h2>
    </div>
    <h2>用户id为{{$route.params.id}}</h2>
  </div>
</template>

<script>

export default {
    data(){
      return {
        num:0
      }
    },
    created(){
      this.num = 1;
      console.log('created')
      if(this.$route.params.id === '1'){
        setTimeout(()=>{
          console.log('请求接口1')
        },1000)
      }else if(this.$route.params.id === '2'){
        setTimeout(()=>{
          console.log('请求接口2')
        },1000)
      }
    },
    watch:{
      '$route'(to, from){
        if(to.params.id === '1'){
          setTimeout(()=>{
            console.log('请求接口1')
          },1000)
        }else if(to.params.id === '2'){
          setTimeout(()=>{
            console.log('请求接口2')
          },1000)
        }
      }
    }
}
</script>


