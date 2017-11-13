<template>
	<div id="order-main">
 		<div class="main-info">
 			<div class="info-left">
 				<h2 class="main-title">【上午场】故宫成人票凭身份证入园</h2>
 				<ul class="info-taglist">
 					<li class="info-tagitem">
 						<img class="info-img" src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png">
 						2017-11-11
 					</li>
 					<li class="info-tagitem">
 						<img class="info-img" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">
 						条件退
 					</li>
 				</ul>
 			</div>
 			<div class="info-right">
 				<div class="info-price">
 					<span class="price">￥
						<em class="price-num">40</em>
 					</span>
 					<span>起</span>
 					/张
 				</div>
 				<div class="info-note">
 					预定须知
 				</div>
 			</div>
 		</div>
 	</div>
</template>

<script>


export default {
	
}
</script>

<style>
	.main-info {
		position: relative;
		min-height: 1.1rem;
		padding: .2rem .2rem .1rem .2rem;
		overflow: hidden;
	}
	.info-left {
		margin-right: 1.9rem;
		float: left;
		width: 80%;
		height: .5rem;
	}
	.main-title {
		color: #212121;
		font-size: .32rem;
		line-height: .44rem;
		margin-bottom: .04rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.info-taglist {
		margin-left: -.2rem;
		overflow: hidden;
		width: 80%;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.info-tagitem {
		float: left;
		line-height: .44rem;
		margin-left: .2rem;
		color: #616161;
		font-size: .24rem;
		width: 40%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.info-img {
		position: relative;
		top: .08rem;
		width: .24rem;
		height: .24rem;
		margin-right: .08rem;
		vertical-align: top;
	}
	.info-right {
		position: absolute;
		right: .2rem;
		top: .2rem;
		width: 1.8rem;
		text-align: right;
	}
	
	.price,.info-price {
		color: #ff8300;
	}
	.info-price {
		height: .44rem;
		line-height: .44rem;
		color: #9e9e9e;
		font-size: .24rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	 .price-num {
		margin-left: .04rem;
		font-size: .4rem;
	}
	.info-note {
		margin-top: .12rem;
		line-height: .32rem;
		color: #00bcd4;
		font-size: .28rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
