<template>
	<div>
 		<home-header @handleChange = "cityChange"/>
 		<city-list :show="show" :domesticInfo="data" :foreignInfo="data1"/>
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
				data1:"foreign"
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
			axios.get('/static/city.json')
					.then((response)=>{
						if (response.status === 200) {
							const {data}  = response.data;
							this.$data.data = data.domesticInfo;
							this.$data.data1 = data.foreignInfo;
						}
					})
		}
	}
</script>

<style>
</style>
