<template>
	<div class="mp-baseInfo">
		<div class="mp-baseInfo-address">
			<p class="mp-baseInfo-address-text">
				<span class="mp-iconfont iconfont icon-dingwei"></span>
				<span class="mp-baseInfo-addresstext-middle">北京市东城区景山前街4号</span>
				<span class="mp-baseInfo-addresstext-right iconfont icon-xiangyoujiantou"></span>
			</p>
		</div>
		<div class="mp-baseInfo-intro">
			<p class="mp-baseInfo-intro-text">
				<span class="mp-iconfont iconfont icon-tupian"></span>
				<span class="mp-baseInfo-intro-text-middle">查看景点简介及开放时间</span>
				<span class="mp-baseInfo-intro-text-right iconfont icon-xiangyoujiantou"></span>
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	body{
		background: #F7F7F7;
	}
</style>
<style scoped>
	.mp-baseInfo{
		position:relative;
		top:-.1rem;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .1rem;
		background: #fff;
		border-radius: .1rem .1rem 0  0;
	}
	.mp-baseInfo-address,.mp-baseInfo-intro{
		position:relative;
		height: .88rem;
		line-height: .88rem;
		color: #212121;
	}
	.mp-baseInfo-address-text,.mp-baseInfo-intro-text{
		overflow: hidden;
	    padding-right: .56rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-baseInfo-address-text{
		border-bottom: .005rem solid #f7f7f7;
	}
	.mp-iconfont{
		color:#9e9e9e;
		margin-right: .2rem;
	}
	.mp-baseInfo-addresstext-right,.mp-baseInfo-intro-text-right{
		position: absolute;
	    right: 0;
	    color: #b9b9b9;
	}

</style>