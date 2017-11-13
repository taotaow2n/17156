<template>
	<div id="domestic-list">
		<div class="domestic-list">
			<div class="domestic-position">
				<div class="position-title">
					您的位置
				</div>
				<div class="city-now">
					<div class="city-border">
						<a href="javascript:void(0)" class="city-name">北京</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {

		
	}
</script>

<style scoped>
	.position-title {
		line-height: .54rem;
		padding-left: .3rem;
		color: #616161;
		font-size: .26rem;
		background: #eee;
	}
	.city-now {
		padding-top: .04rem;
		padding-bottom: .26rem;
		overflow: hidden;
		padding-right: .5rem;
		padding-left: .2rem;
		background: #fff;
	}
	.city-border {
		float: left;
		width: 30%;
		padding: .2rem .14rem 0 .1rem;
	}
	.city-name {
		color: #00afc7;
		display: block;
		text-align: center;
		border: .02rem solid #00afc7;
		border-radius: .06rem;
		width: 100%;
		height: 0;
		padding-bottom: 26%;
		line-height: .5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>