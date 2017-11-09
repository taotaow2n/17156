<template>
 	<header class="header">
 		<div class="header-left iconfont icon-fanhui"></div>
 		<div class="inputbox">
 			<input class="header-input" placeholder="输入城市或景点" @blur="show=false" @focus="show=true" :value="value"/>
 			<span class="iconfont header-delect" v-show="show">&#xe64a;</span>
 		</div>
 		<div class="header-right">
 			<div class="header-city-wrapper">
 				<span class="header-search">搜索</span>
 			</div>
 		</div>
 	</header>
</template>

<script>
	export default {
		data:function(){
			return {
				show:false,
				value:""
			}
		},
		methods:{
			remove:function(){
				this.value = "";
			}
		}
	}
</script>

<style scoped="scoped">
	.header {
		height: .88rem;
		background: #00bcd4;
		overflow: hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0.2rem;
		line-height: .5rem;
		font-size: .4rem;
		color: #fff;
	}
	.inputbox{
		position: absolute;
		left: .8rem;
		right: 1.2rem;
		top: .14rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		color: #ccc;	
	}
	.header-delect{
		position: absolute;
		top:0.04rem;
		right:.2rem;
		font-size: 20px;
		opacity: 0.5;
	}
	.header-input {
		box-sizing: border-box;
		border: none;
		width:100%;
		height: .6rem;
		padding-left:.2rem;
		
	}
	.header-input::placeholder{
		color:#ccc;
	}
	.header-right {
		float: right;
		width: 1rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	.header-city-wrapper {
		position: relative;
		padding-right: .2rem;
	}
	.header-search {
		display: inline-block;
	}
</style>