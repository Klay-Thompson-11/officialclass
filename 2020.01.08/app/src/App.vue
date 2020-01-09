<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="button">home</router-link>
      <router-link to="/public" tag="button">public</router-link>
      <router-link to="/about" tag="button">about</router-link>
      <router-link to="/login" tag="button">login</router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
