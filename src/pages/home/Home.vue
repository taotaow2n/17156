<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<menu-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import MenuComponent from "./Menu";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"menu-content":MenuComponent
	}
}
</script>

<style>
</style>
