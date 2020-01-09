<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" tag="button">home</router-link>
      <router-link class="active" to="/about" tag="button">about</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
