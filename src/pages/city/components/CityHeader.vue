<template>
	<div id="city-header">
 		<div class="city-header">
 			<a href="#"  class="header-left iconfont icon-fanhui"></a>
			<div class="header-title" @click="handleTypeClick">
				<span class="city-active" :class="{ 'header-city-active': isActive}" domestic="true">国内</span>
				<span class="city-active" :class="{ 'header-city-active': !isActive}" >海外</span>
			</div>
 		</div>
 	</div>
</template>

<script>


export default {

	data() {
		return {
			isActive: true
		}
	},

	methods: {
		handleTypeClick(e) {
			const isDomestic = e.target.getAttribute("domestic");
			this.isActive = isDomestic ? true :false;
			this.$emit('change',this.isActive);
		}
	}
}
</script>

<style>
	/*.city-header{
		height: .88rem;
		background: #00bcd4;
		overflow: hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		position: relative;
		display: inline-block;
		margin-left: -.42rem;
		font-size: 0;
		text-align: center;
	}
	.header-city-active {
		background: #fff;
		color: #00afc7;
	}
	.header-city {
		display: inline-block;
		width: 2rem;
		height: .56rem;
		line-height: .56rem;
		margin-top: .15rem;
		font-size: .28rem;
		border: .02rem solid #fff;
	}
	.header-city-active:first-of-type {
		border-radius: .06rem 0 0 .06rem;
	}
	.header-city-active:last-of-type {
		border-radius:  0 .06rem .06rem 0;
	}*/
	.city-header {
		z-index: 10;
		position: fixed;
		left: 0;
		top: 0;
		overflow: hidden;
		height: .88rem;
		width: 100%;
		background: #00afc7;
		color: #fff;
	}
	.header-left {
		float: left;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .22rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		display: inline-block;
		margin-left: 1rem;
	}
	.city-active {
		display: block;
	    float: left;
	    width: 2rem;
	    height: .56rem;
	    margin-top: .15rem;
	    text-align: center;
	    line-height: .56rem;
	    font-size: .28rem;
	    border: .02rem solid #fff;
	    background: #00afc7;
	}
	.city-active:fist-of-type {
		border-radius: 2px 0 0 2px;
	}
	.city-active:last-of-type{
		border-radius: 0 2px 2px 0;
	}
	.header-title .header-city-active{
		color: #00afc7;
		background: #fff;
	}
</style>
