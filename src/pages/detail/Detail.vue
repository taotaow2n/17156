<template>
    <div>
		<detail-head-image-describe/>
		<detail-base-info/>
		<detail-comment/>
		<detail-inform/>
		<detail-recommendlist />
		<detail-commentlist />
		<detail-checkmorelist/>
	</div>
</template>

<script>
	import HeadComponent  from "./components/Head";
	import BaseInfoComponent from "./components/BaseInfo";
	import CommentComponent from "./components/Comment";
	import InformComponent from "./components/Inform";
	import RecommendlistComponent from "./components/Recommendlist";
	import CommentListComponent from "./components/CommentList";
	import CheckmoreListComponent from "./components/CheckmoreList";
	export default {
		components:{
			"detail-head-image-describe":HeadComponent,
			"detail-base-info":BaseInfoComponent,
			"detail-comment":CommentComponent,
			"detail-inform":InformComponent,
			"detail-recommendlist":RecommendlistComponent,
			"detail-commentlist":CommentListComponent,
			"detail-checkmorelist":CheckmoreListComponent
		},
		mounted() {
		
			if(this.$store.getters.shouldGetDetailData){
				this.$store.dispatch("getDetailInfo");
			}
		}	
		
	}
</script>

<style>
</style>