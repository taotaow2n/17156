<template>
	<div>
 		<home-header/>
 		<swiper-content/>

 		<menu-content/>
 		<hot-recommend></hot-recommend>

 		<activity-content/>

 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";

import MenuComponent from "./Menu";
import HotRecommendComponent from "./HotRecommend";

import ActivityComponent from "./Activity";


export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,

		"menu-content":MenuComponent,
		"hot-recommend":HotRecommendComponent ,

		"activity-content": ActivityComponent

	}
}
</script>

<style>
</style>
