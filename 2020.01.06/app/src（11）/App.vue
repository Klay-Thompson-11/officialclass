<template>
	<div id="ppa">
		<router-link to="/" tag="button">go to home</router-link>
		<router-link to="/about" tag="button">go to about</router-link>
		<router-link to="/public" tag="button">go to public</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	/*
		单页SPA优点
			不刷新页面，在当前页切换多页的操作方式，能提高用户体验
			一些后端逻辑就可以交由前端来做，减少后端的压力，提高前端开发的业务能力
			能够共用一些公共静态资源，减少http请求
			实现真正的前后端分离		

	*/
	export default {
		
	}
</script>

<style scoped>

</style>