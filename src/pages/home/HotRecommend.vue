<template>
	<div class="mp-hot-recommend">
		<h2 class="mp-hot-title">热销推荐</h2>
		<div class="mp-hot-content">
			<ul class="mp-hot-list">
				<li class="mp-hot-product">
					<div class="mp-hot-list-img  image-ready">
						<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4
							ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫">
					</div>
					<div class="mp-hot-list-infos">
						<div class="mp-hot-list-title">故宫</div>
						<div class="mp-hot-list-describe">东方宫殿建筑代表，世界宫殿建筑典范</div>
					</div>
					<div class="mp-hot-list-price mp-price">￥
						<b class="mp-price-number">40</b>
						<span class="mp-price-text">起</span>
					</div>
				</li>
				<li class="mp-hot-product">
					<div class="mp-hot-list-img  image-ready">
						<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img
							.jpg_140x140_97813766.jpg" alt="八达岭长城">
					</div>
					<div class="mp-hot-list-infos">
						<div class="mp-hot-list-title">八达岭长城</div>
						<div class="mp-hot-list-describe">不到长城非好汉</div>
					</div>
					<div class="mp-hot-list-price mp-price">￥
						<b class="mp-price-number">25</b>
						<span class="mp-price-text">起</span>
					</div>
				</li>
				<li class="mp-hot-product">
					<div class="mp-hot-list-img  image-ready">
						<img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_
							140x140_e20be8e0.jpg" alt="颐和园">
					</div>
					<div class="mp-hot-list-infos">
						<div class="mp-hot-list-title">颐和园</div>
						<div class="mp-hot-list-describe">保存完整的一座皇家行宫御苑</div>
					</div>
					<div class="mp-hot-list-price mp-price">￥
						<b class="mp-price-number">22</b>
						<span class="mp-price-text">起</span>
					</div>
				</li>
				<li class="mp-hot-product">
					<div class="mp-hot-list-img  image-ready">
						<img src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg
							_140x140_b05eb1df.jpg" alt="北京欢乐谷">
					</div>
					<div class="mp-hot-list-infos">
						<div class="mp-hot-list-title">北京欢乐谷</div>
						<div class="mp-hot-list-describe">七大主题园区带你畅享北京欢乐谷</div>
					</div>
					<div class="mp-hot-list-price mp-price">￥
						<b class="mp-price-number">11</b>
						<span class="mp-price-text">起</span>
					</div>
				</li>
				<li class="mp-hot-product">
					<div class="mp-hot-list-img  image-ready">
						<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_
							140x140_eae81520.jpg" alt="慕田峪长城">
					</div>
					<div class="mp-hot-list-infos">
						<div class="mp-hot-list-title">慕田峪长城</div>
						<div class="mp-hot-list-describe">秀美长城，关键是人少</div>
					</div>
					<div class="mp-hot-list-price mp-price">￥
						<b class="mp-price-number">19.1</b>
						<span class="mp-price-text">起</span>
					</div>
				</li>
			</ul>
			<div class="mp-watch-more">
				<a hybrid-link="" title="去哪儿门票" >查看所有产品</a>
			</div>
		</div>
	</div>
</template>

<script>
</script>


<style>
	body{
		background:#f7f7f7;
	}
</style>
<style scoped>
	.mp-hot-title{
		height: .8rem;
	    padding-left: .26rem;
	    line-height: .8rem;
	    color: #212121;
	}
	.mp-hot-content{
		background:#fff;
	}
	.mp-hot-product{
	    position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	}
	.mp-hot-list-img{
		position: absolute;
		top:.24rem;
		left: .24rem;
		width:1.4rem;
		height:1.4rem;
		background-size:contain;
	}
	.image-ready{
		background: none !important;
	}
	.image-ready img{
		opacity: 1;
	}
	.mp-hot-list-img img{
	    vertical-align: top;
	    transition: opacity 400ms;
	    width: 1.4rem;
	    height: 1.4rem;
	}
	.mp-hot-list-infos{
		margin-left: 1.6rem;
	}
	.mp-hot-list-title{
		overflow: hidden;
	    margin-top: .04rem;
	    margin-bottom: .1rem;
	    color: #212121;
	    font-size: .3rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-hot-list-describe{
	    overflow: hidden;
	    margin-bottom: .1rem;
	    height: .4rem;
	    line-height: .4rem;
	    color: #9e9e9e;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-hot-list-price{
	    margin-left: 1.6rem;
	    color: #ff8300;
	}
	.mp-price{
		font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
	}
	.mp-price-number{
	    font-size: .36rem;
	    margin-left: -0.1rem;
	}
	.mp-price-text{
		color: #9e9e9e;
   	    font-size: .24rem;
   	    margin-left: -0.03rem;
	}
	.mp-watch-more{
		height: .88rem;
	    color: #00afc7;
	    line-height: .88rem;
	    text-align: center;
	}
	.mp-watch-more{
		display: block;
	}
	.mp-hot-content .mp-watch-more{
		margin-top: -.02rem;
	}
	
	
	
	
</style>