<template>
<<<<<<< HEAD
  	<div>
  		<home-header />
  		<weekend-list />
  	</div>
=======
	<div>
 		<home-header/>
 		<swiper-content/>
 		<menu-content/>
 	</div>
>>>>>>> a8deef33c37b22e36606e7362c93f9c2e36ebad6
</template>

<script>

import HeaderComponent from "./Header";
<<<<<<< HEAD
import WeekendList from "./Weekend"; 
=======
import SwiperComponent from "./Swiper";
import MenuComponent from "./Menu";
>>>>>>> a8deef33c37b22e36606e7362c93f9c2e36ebad6

export default {
	components: {
		"home-header": HeaderComponent,
<<<<<<< HEAD
		"weekend-list": WeekendList
=======
		"swiper-content": SwiperComponent,
		"menu-content":MenuComponent
>>>>>>> a8deef33c37b22e36606e7362c93f9c2e36ebad6
	}
}
</script>

<style>
</style>
