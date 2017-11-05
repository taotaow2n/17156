<template>
    <div>
		<head-image-describe></head-image-describe>
		<base-info></base-info>
		<comment-content></comment-content>
		<inform-content></inform-content>
	</div>
</template>

<script>
	import HeadComponent  from "./Head";
	import BaseInfoComponent from "./BaseInfo";
	import CommentComponent from "./Comment";
	import InformComponent from "./Inform"
	export default {
		components:{
			"head-image-describe":HeadComponent,
			"base-info":BaseInfoComponent,
			"comment-content":CommentComponent,
			"inform-content":InformComponent
		}
		
	}
</script>

<style>
</style>