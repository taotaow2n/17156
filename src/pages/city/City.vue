<template>
	<div>
 		<home-header @handleChange = "cityChange"/>
 		<city-list :show="show" :domesticInfo="data" :foreignInfo="data1" :alphabetInfo="data2" :hotcityAbroad="data3"/>
 	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import CityListComponent from "./CityList";
	import axios from 'axios';
	export default {
		data() {
			return {
				show:true,
				data:"data",
				data1:"foreign",
				data2:"alphabet",
				data3:"hot"
			}
		},
		components: {
			"home-header": HeaderComponent,
			"city-list": CityListComponent,
		},
		methods: {
			cityChange :function(e) {
				this.show = e.show
			}
		},
		mounted:function(){
			axios.get('/static/city_select.json')
					.then((response)=>{
						if (response.status === 200) {
							this.$data.data = response.data.hotcity;
							this.$data.data2 = response.data.china;
							this.$data.data1 = response.data.abroad;
							this.$data.data3 = response.data.hotcityAbroad;
							
						}
					})
		}
	}
</script>

<style>
</style>
