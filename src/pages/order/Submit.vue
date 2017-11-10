<template>
	<div>
		<div class="order-Page">
			<div class="product-price">
				<em class="product-price-sale">产品价格</em>
				<span class="product-price-change">￥
					<em class="product-price-buy">40</em>
				</span>
				<span class="changeColor iconfont">&#xe601;</span>
			</div>
			<div class="submit-order">
				<a href="#" class="submit-order-btn">
					提交订单
				</a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.order-Page{
		position:fixed;
		z-index:92;
		right:0;
		bottom:0;
		left:0;
		width:100%;
		height:1rem;
		border:1px solid #ddd;
		
	}
	.product-price{
		float:left;
		font-size: .24rem;
		line-height: 1rem;
		text-indent:.2rem;
		
	}
	.product-price-sale{
		font-style: normal;
		color:#ff8300;
	}
	.product-price-change{
		font-style: normal;
		color:#ff8300;
	}
	.product-price-buy{
		font-size: .48rem;
	}
	.changeColor{
		color:#c1c1c1;
		
	}
	.submit-order{
		float:right;
		background:#ff9800;
		height:1rem;
		width:50%;
	}
	.submit-order-btn{
		display: block;
		font-size: .36rem;
		text-align: center;
		color:#fff;
		line-height: 1rem;
	}
</style>