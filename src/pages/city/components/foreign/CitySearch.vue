<template>
	<div id="domestic-search">
		<div class="domestic-search">
			<input type="text" placeholder="输入城市名或拼音" class="search-keyword">
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {

		
	}
</script>

<style scoped>
	.domestic-search {
		padding: 0 .2rem .1rem .2rem;
		background: #00afc7;
		font-size: .26rem;
		color: #9e9e9e;
		margin-top: .88rem;
	}
	.search-keyword {
		display: block;
		width: 100%;
		height: .3rem;
		line-height: .3rem;
		padding: .16rem 0 .16rem .1rem;
		background: #fff;
		border: 0;
		text-align: center;
		border-radius: .1rem;
	}
</style>