<template>
    <div>
		<detali-head-image-describe></detali-head-image-describe>
		<detali-base-info></detali-base-info>
		<detali-comment-content></detali-comment-content>
		<detali-inform-content></detali-inform-content>
	</div>
</template>

<script>
	import HeadComponent  from "./Head";
	import BaseInfoComponent from "./BaseInfo";
	import CommentComponent from "./Comment";
	import InformComponent from "./Inform"
	export default {
		components:{
			"detali-head-image-describe":HeadComponent,
			"detali-base-info":BaseInfoComponent,
			"detali-comment-content":CommentComponent,
			"detali-inform-content":InformComponent
		}
		
	}
</script>

<style>
</style>