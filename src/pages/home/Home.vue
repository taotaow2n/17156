<template>
	<div>
 		<home-header/>
 		<swiper-content/>
<<<<<<< HEAD
 		<menu-content/>
 		<hot-recommend></hot-recommend>
=======
 		<activity-content/>
>>>>>>> 7eabf3b377b645f6eeb4703baf6792b55efe748d
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
<<<<<<< HEAD
import MenuComponent from "./Menu";
import HotRecommendComponent from "./HotRecommend";
=======
import ActivityComponent from "./Activity";
>>>>>>> 7eabf3b377b645f6eeb4703baf6792b55efe748d

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
<<<<<<< HEAD
		"menu-content":MenuComponent,
		"hot-recommend":HotRecommendComponent 
=======
		"activity-content": ActivityComponent
>>>>>>> 7eabf3b377b645f6eeb4703baf6792b55efe748d
	}
}
</script>

<style>
</style>
