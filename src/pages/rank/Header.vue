<template>
	<div id="rank-header">
 		<div class="rank-header">
 			<a href="#" @click="handleBackBtnClick"  class="header-left iconfont icon-fanhui"></a>
 			<h1 class="header-title">北京温泉排行榜</h1>
 		</div>
 	</div>
</template>

<script>


export default {
	methods: {
		handleBackBtnClick: function() {
			this.$router.go(-1);
		}
	}
}
</script>

<style scoped>
	.rank-header{
		height: .88rem;
		background: #00bcd4;
		overflow: hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		margin: 0 1rem;
		line-height: 0.88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
		overflow: hidden;
	}
	.header-right {
		position: absolute;
		top: 0;
		right: 0;
		height: .88rem;
		line-height: 0.88rem;
		text-align: center;
		width: 1rem;
		font-size:.28rem;
		color:#fff;
	}
</style>
