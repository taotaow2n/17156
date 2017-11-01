<template>
  	<div class="header">
  		这是header
  	</div>
</template>

<script>
	import HeaderComponent from "./Header"
	export default {
	components:{
		"home-header":HeaderComponent
	}
}
</script>

<style>
	.header{
		height:70px;
		background:#00bcd4;
	}
</style>
