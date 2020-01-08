<template>
  <div>
    <div id="nav">
      <h1>{{$route.params.un}}欢迎你</h1> 
      <router-link tag="button" to="/about/a/id/1">About1</router-link>
      <router-link tag="button" to="/about/b/id/2">About2</router-link>
      <router-link tag="button" to="/public">public</router-link>
         <!-- <router-link tag="button" :to="{path:`/p4/`+n}">p4</router-link> -->
      <router-link tag="button" :to="{name:'p4',params:{n:'aaa'}}">p4</router-link>
      <router-link tag="button" :to="{name:'p5',params:{nn:'bbb'}}">p5</router-link>
   
    </div>
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return {
      n:'aaa'
    }
  }
}
</script>

<style scoped>

</style>