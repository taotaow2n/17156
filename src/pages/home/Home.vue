<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<menu-content />
 		<index-weekend :weekendInfo="weekendInfo" />
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import MenuComponent from "./Menu";
import WeekendList from "./WeekendList"; 
import SwiperComponent from "./Swiper";
import axios from 'axios';

export default {

	data() {
		return {
			weekendInfo: []
		}
	},

	components: {
		"home-header": HeaderComponent,
		"index-weekend": WeekendList,
		"swiper-content": SwiperComponent,
		"menu-content":MenuComponent
	},

	methods: {

		getHomeData() {
			axios.get('/static/index.json')
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handleGetDataErr.bind(this))
		},

		handleGetDataSucc(response) {
			if (response.status === 200) {
				const {data}  = response.data;
				this.weekendInfo = data.weekendInfo;
			}
		},

		handleGetDataErr(err) {
			console.log(err);
		}
	},

	mounted() {
		this.getHomeData();
	}
}
</script>

<style>
</style>
