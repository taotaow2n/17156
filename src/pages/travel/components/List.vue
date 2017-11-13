<template>
	<div class="play">
		<ul class="play-oneday">
			<li class="play-oneday-today" v-for="item in travelListInfo" :key="item.id">
				<div class="today-list-img">
					<img class="today-list-image" :src="item.imgUrl" title="[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游"/>
					<span class="tomorrow-blue">可订明日</span>		
				</div>
				<div class="today-list-prod">
					<p class="today-list-productinfo">{{item.describe}}</p>
					<p class="today-list-taglist">
						<span class="today-list-tagitemlight">北京出发</span>
						<span class="today-list-tagitem">无自费</span>
						<span class="today-list-tagitem">无购物</span>
					</p>
					<p class="today-list-price">
						<span>￥208</span>起
					</p>
					<p class="today-list-number">已售953</p>
				</div>
			</li>
			
		</ul>
		<div class="pageCon">
			<div class="pagination">
				<a href="#" class="prevPage">上一页</a>
				<span class="page-num" >1 / 15</span>
				<a href="#" class="nextPage">下一页</a>
			</div>
			<div class="page-text">去哪儿门票</div>
		</div>
		<div class="classify" v-if="show">
			<ul class="classify-label1">
				<li class="label1">
					<p class="iconfont icon-leimupinleifenleileibie"></p>
					<p>全部分类</p>
				</li>
				<li class="label1">
					<p class="iconfont icon-shaixuan2"></p>
					<p>筛选</p>
				</li>
				<li class="label1">
					<p class="iconfont icon-paixu1"></p>
					<p>推荐排序</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		
		data:function(){
			return{
				scrollTop1: "",
				scrollTop2: "",
				show: ""
				
			}
		},
		methods:{
			footerScroll:function(){
				this.scrollTop1=this.scrollTop2;
				this.scrollTop2=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(this.scrollTop1<=this.scrollTop2){
					this.show=false;
				}else{
					this.show=true;
				}
			}
		},
		mounted:function(){
			this.scrollTop1=0;
			window.addEventListener("scroll",this.footerScroll);
		},
		computed: {
			travelListInfo() {
				return this.$store.state.travel.travelListInfo
			}
		}	
		
		
	}
</script>
<style scoped="scoped">
	html,body{
		height: 100%;
		background: #f7f7f7;
	}
	.play-oneday-today{
		width: 100%;
		display: flex;
		height:2.0rem ;
		position: relative;
		background: #fff;
	}
	
	.today-list-img{
		float: left;
		height: 2rem;
		position: relative;
	}
	.today-list-image{
		width: 1.6rem;
		height: 1.6rem;
		margin: .2rem;
		display: block;
	}
	.today-list-prod{
		position: relative;
		width: 100%;
		float: left;
		line-height: .36rem;
		height:1.75rem;
		margin-top:.2rem;
		border-bottom: .02rem solid #F1F1F1;
	}
	.today-list-productinfo{
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: .3rem;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		
	}
	.today-list-taglist{
		height: .24rem;
		font-size: .24rem;
	}
	.today-list-tagitemlight{
		padding: .1rem;
		color: #00BCD4;
	}
	.today-list-tagitem{
		padding: .1rem;
	}
	.today-list-price{
		position: absolute;
		right: .2rem;
		bottom: .48rem;
		height: .32rem;
		line-height: .32rem;
		color: #9E9E9E;
		text-align: center;	
		font-size: .24rem;
	}
	.today-list-price span{
		color: #ff8300;
		font-weight: bold;
		padding: 0 .04rem;
		font-size: .3rem;
	}
	.today-list-number{
		position: absolute;
		bottom: .2rem;
		width: 100%;
		font-size: .24rem;
		color: #999;
	}
	.classify{
		display: flex;
		width: 100%;
		height: 0.9rem;
		background: rgba(0,0,0,0.8);
		position: fixed;		
		right: 0;
		bottom: 0;
		right: 0;
	}
	.classify-label1{
		display: flex;
		color: #fff;
		justify-content: space-around;
		width: 100%;
	}
	.classify-label1 .label1{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: .24rem;
		line-height: .4rem;
	}
	.tomorrow-blue{
		display: block;
		width: 1.1rem;
		height: 0.26rem;
		position: absolute;
		border-radius: .01rem;
		background: #00BCD4;
		color: #FFF;
		font-size: .18rem;
		top: 0.16rem;
		left: 0.16rem;	
		line-height: 0.26rem;
		text-align: center;
	}
	.tomorrow-blue::after {
		content: "";
		position: absolute;		
		top: 0;
		right: -.1rem;
		width: 0;
		height: 0;
		border-top: .13rem solid #00BCD4;
		border-bottom: .13rem solid #00BCD4;
		border-right: .1rem solid transparent;
		
	}
	.pageCon{
		display: flex;
		width: 100%;
		flex-direction: column;
	}
	.pagination{
		margin:.2rem ;
		text-align: center;
	}
	.prevPage{
		width: 1.4rem;
		line-height: 0.6rem;
		background: #bddbbd;
		color: #fff;
		border: 0;
		display: inline-block;
		border-radius: 0.06rem;
	}
	.nextPage{
		width: 1.4rem;
		line-height: 0.6rem;
		background: #fff;
		color: #00BCD4;
		border:.02rem solid #00BCD4;
		display: inline-block;
		border-radius: 0.06rem;
		text-align: center;
	}
	.page-num{
		display: inline-block;
		width: 1.4rem;
	}
	.page-text{
		text-align: center;
		color: #00BCD4;
	}
</style>