<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<menu-content/>
 		<activity-content/>
 		<hot-recommend></hot-recommend>
		<weekend-list />
 	</div>
</template>

<script>

	import HeaderComponent from "./Header";
	import SwiperComponent from "./Swiper";
	import MenuComponent from "./Menu";
	import ActivityComponent from "./Activity";
	import HotRecommendComponent from "./HotRecommend";
	import WeekendList from "./Weekend"; 
	export default {
		components: {
			"home-header": HeaderComponent,
			"swiper-content": SwiperComponent,
			"menu-content":MenuComponent,
			"hot-recommend":HotRecommendComponent ,
			"activity-content": ActivityComponent,
			"weekend-list": WeekendList
	
		}
	}
</script>

<style>
</style>
