<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<menu-content />
 		<index-weekend :weekendInfo="this.$store.state.weekendInfo" />
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import MenuComponent from "./Menu";
import WeekendList from "./WeekendList"; 
import SwiperComponent from "./Swiper";


export default {

	components: {
		"home-header": HeaderComponent,
		"index-weekend": WeekendList,
		"swiper-content": SwiperComponent,
		"menu-content":MenuComponent
	},

	mounted() {
		if (!this.$store.state.weekendInfo.length) {
			this.$store.dispatch("getWeekendInfo");
		}		
	}
}
</script>

<style>
</style>
