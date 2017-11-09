<template>
	<home-list/>
</template>

<script>
	import List from "./List";
	export default {
		components: {
			"home-list":List
		},
		mounted() {
			if(this.$store.getters.shouldGetData){
				this.$store.dispatch("getInfo");
			}
			
		}
}
</script>
<style>
</style>