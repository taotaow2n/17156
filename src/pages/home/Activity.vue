<template>
	<div class="activity">
		<ul class="activity-top">
			<li class="activity-top-left">
				<p class="activity-position iconfont icon-dizhiguanli">
					<span>定位失败</span>
				</p>
			</li>
			<li class="activity-top-right">
				<p class="activity-spring iconfont icon-faxian">
					<span>五折泡温泉</span>
				</p>
			</li>
		</ul>
		
		<ul class="activity-bottom">
			<li class="activity-choice">
				<a href="#"></a>
			</li>
			<li class="activity-fall">
				<a href="#"></a>
			</li>
		</ul>
	</div>
	

</template>
<script>
	
</script>
<style>
	.activity{
		width: 100%;
		background: #fff;
	}
	.activity-top{
		border-top: 0.01rem solid #f1f1f1;
		height: 0.98rem;
		
	}
	.activity-top-left{
		width: 50%;
		height: 0.98rem;
		text-align: center;
		line-height: 0.98rem;
		float: left;
		border-right: 0.01rem solid #f1f1f1;
	}
	.activity-top-left span{
		margin-left: .02rem;
		font-size: 0.28rem;
	}
	.activity-top-right{
		width: 49%;
		height: 0.98rem;
		text-align: center;
		line-height: 0.98rem;
		float: right;
	}
	.activity-top-right span{
		margin-left: .02rem;
		font-size: 0.28rem;
	}
	.activity-bottom{
		border-top: 0.01rem solid #f1f1f1;
		height: 1.4rem;
		margin-top: .2rem;
	}
	.activity-bottom li{
		float: left;
		height: 1.4rem;
		text-align: center;
	}
	.activity-choice{
		width: 50%;
		background: url("http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png") no-repeat center center;
		background-size:auto 100%;
		border-right: .01rem solid #f1f1f1;
		
	}
	.activity-fall{
		width: 49%;
		background: url("http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png") no-repeat center center;
		background-size:auto 100%;
		
	}
</style>