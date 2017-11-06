
<template>
	<div>
 		<home-header/>
 		<travel-place></travel-place>
 		<travel-list/>
 	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import PlaceComponent from "./Place";
	import TravelListComponent from "./List"; 
	export default {
		components: {
			"home-header": HeaderComponent,
			"travel-place": PlaceComponent,
			"travel-list": TravelListComponent
		}
	}
</script>

<style>
</style>
