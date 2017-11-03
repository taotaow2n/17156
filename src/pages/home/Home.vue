<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<activity-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ActivityComponent from "./Activity";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"activity-content": ActivityComponent
	}
}
</script>

<style>
</style>
