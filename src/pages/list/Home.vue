<template>
	<home-list/>
</template>

<script>
	import List from "./list";
	export default {
		components: {
			"home-list":List
		},
		mounted() {
			if(this.$store.getters.shouldGetListData){
				this.$store.dispatch("getInfo");
			}
			
		}
}
</script>
<style>
</style>