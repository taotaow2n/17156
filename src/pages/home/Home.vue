<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<menu-content/>
 		<hot-recommend></hot-recommend>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import MenuComponent from "./Menu";
import HotRecommendComponent from "./HotRecommend";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"menu-content":MenuComponent,
		"hot-recommend":HotRecommendComponent 
	}
}
</script>

<style>
</style>
