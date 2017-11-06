<template>
	<div id="weekend-trip">
		<h2 class="weekend-title">周末去哪儿</h2>
		<div>
			<div class="weekend-item" v-for="item in weekendInfo" :key="item.id">
				<router-link :to="item.link">
					<a href="" title="北京温泉排行榜" class="fulllink" >
						<div class="weekend-imgcontainer">
							<img :src="item.imgUrl" alt="北京温泉排行榜">
						</div>
						<div class="weekend-info">
							<p class="weekend-name">{{item.name}}</p>
							<p class="weekend-desc">{{item.desc}}</p>
						</div>
					</a>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["weekendInfo"]
	}
</script>

<style scoped>
	.weekend-title {
		width: 100%;
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
		background:#eee;
	}
	.weekend-item {
		margin-bottom: .1rem;
		position: relative;
	}
	.fulllink {
		width: 100%;
		height: 100%;
		display: block;
	}
	.weekend-imgcontainer {
		width: 100%;
		height: 0;
		padding-bottom:37.4375%;
		overflow: hidden;
		background: url(../../app/img/loading.gif) no-repeat center center;
	}
	img{
		width: 100%;
	}
	.weekend-info{
		position: relative;
		padding: .14rem .2rem .2rem .2rem;
	}
	.weekend-name{
		overflow: hidden;
		padding-right: 1.4rem;
		color:#212121;
		font-size: .28rem;
		line-height: .48rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.weekend-desc{
		overflow: hidden;
		padding-right: 1.4rem;
		color:#616161;
		font-size: .24rem;
		line-height: .42rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>