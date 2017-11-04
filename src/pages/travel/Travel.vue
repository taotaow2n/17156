<<<<<<< HEAD
<template>
	<div>
 		<travel-list/>
 	</div>
</template>

<script>
import TravelListComponent from "./List"; 
export default {
	components: {
		"travel-list": TravelListComponent
	}
}
</script>

<style>
</style>
=======
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
>>>>>>> 4f46fc1989ffaa58d40706e1fa0ffa88ba2a07ff
