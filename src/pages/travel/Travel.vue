<template>
	<div>
 		<home-header/>
 		<travel-place></travel-place>
 	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import PlaceComponent from "./Place"
	export default {
		components: {
			"home-header": HeaderComponent,
			"travel-place": PlaceComponent
		}
	}
</script>

<style>
</style>
