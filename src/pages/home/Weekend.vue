<template>
	<div id="weekend-trip">
		<h2 class="weekend-title">周末去哪儿</h2>
		<div>
			<div class="weekend-item">
				<a href="" title="北京温泉排行榜" class="fulllink">
					<div class="weekend-imgcontainer">
						<img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="北京温泉排行榜">
					</div>
					<div class="weekend-info">
						<p class="weekend-name">北京温泉排行榜</p>
						<p class="weekend-desc">细数北京温泉，温暖你的冬天</p>
					</div>
				</a>
			</div>
			<div class="weekend-item">
				<a href="" title="寻找北京的皇城范儿" class="fulllink">
					<div class="weekend-imgcontainer">
						<img src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="寻找北京的皇城范儿">
					</div>
					<div class="weekend-info">
						<p class="weekend-name">寻找北京的皇城范儿</p>
						<p class="weekend-desc">数百年的宫廷庙宇，至今依旧威严霸气</p>
					</div>
				</a>
			</div>
			<div class="weekend-item">
				<a href="" title="北京必游TOP10" class="fulllink">
					<div class="weekend-imgcontainer">
						<img src="http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg" alt="北京必游TOP10">
					</div>
					<div class="weekend-info">
						<p class="weekend-name">北京必游TOP10</p>
						<p class="weekend-desc">细数北京温泉，温暖你的冬天</p>
					</div>
				</a>
			</div>
			<div class="weekend-item">
				<a href="" title="登高望远秋色佳" class="fulllink">
					<div class="weekend-imgcontainer">
						<img src="http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg" alt="登高望远秋色佳">
					</div>
					<div class="weekend-info">
						<p class="weekend-name">登高望远秋色佳</p>
						<p class="weekend-desc">山顶满眼彩色，此情此景醉了</p>
					</div>
				</a>
			</div>
			<div class="weekend-item">
				<a href="" title="秋高气爽去礼佛" class="fulllink">
					<div class="weekend-imgcontainer">
						<img src="http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg" alt="秋高气爽去礼佛">
					</div>
					<div class="weekend-info">
						<p class="weekend-name">秋高气爽去礼佛</p>
						<p class="weekend-desc">秋风伴着美妙经声，品尝秋的另一番滋味</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

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