<template>
	<div>
 		<home-header/>
 		<travel-place></travel-place>
 		<travel-list/>
 	</div>
</template>
<script>
	import HeaderComponent from "./components/Header";
	import PlaceComponent from "./components/Place";
	import TravelListComponent from "./components/List";
	export default {
		components: {
			"home-header": HeaderComponent,
			"travel-place": PlaceComponent,
			"travel-list": TravelListComponent
		},
		mounted() {
			if(this.$store.getters.shouldGetData1){
				this.$store.dispatch("getTravelInfo")
			}
		}
	}
</script>

<style>
</style>
