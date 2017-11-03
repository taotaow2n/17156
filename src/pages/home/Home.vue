<template>

  	<div>
  		<home-header />
 		<swiper-content/>
 		<menu-content/>
 		<weekend-list />
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import WeekendList from "./Weekend"; 
import SwiperComponent from "./Swiper";
import MenuComponent from "./Menu";
export default {
	components: {
		"home-header": HeaderComponent,
		"weekend-list": WeekendList,
		"swiper-content": SwiperComponent,
		"menu-content":MenuComponent
	}
}
</script>

<style>
</style>
