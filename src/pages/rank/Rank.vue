<template>
	<div>
 		<rank-header />
 		<rank-list />
 	</div>
</template>

<script>

	import Header from "./Header";
	import RankList from "./RankList";

	export default {
		components: {
			"rank-header": Header,
			"rank-list": RankList
		},

		mounted() {
			if (this.$store.getters.shouldGetRankData) {
				this.$store.dispatch("getRankInfo");
			}		
		}
	}
</script>

<style>
</style>
