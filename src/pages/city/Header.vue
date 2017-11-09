<template>
	<div>
		<div class="city-header-box">
	 			<span class="city-header-left iconfont icon-fanhui" @click="changeBackBtn" ></span>
	 		<div class="city-header-title">
	 			城市选择
	 		</div>
 		</div>
 		<div class="city-header-box">
	 		<span class="country" :class = "{ active: isActive1 }" @click="handleClick1">国内</span><span class="country" :class = "{ active: isActive2 }" @click="handleClick2">国际</span>
 		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isActive1: true,
				isActive2: false
			}
		},
		methods: {
			handleClick1 :function(){
				this.$data.isActive1 = true;
				this.$data.isActive2 = false;
				this.show = true;
				var show = this.show;
    			this.$emit('handleChange',{
    				show
    			})
			},
			handleClick2 :function(){
				this.$data.isActive1 = false;
				this.$data.isActive2 = true;
				this.show = false;
				var show = this.show;
				this.$emit('handleChange',{
    				show
    			})
			},
			changeBackBtn:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="scoped">
	.city-header-box {
	    height: .68rem;
	    line-height: .68rem;
	    border-bottom: 0;
	    position: relative;
	    background: #00bcd4;
	    z-index: 91;
	    text-align: center;
	    color:#fff;
	    font-size: .32rem;
	    border-bottom: ;
	}
	.city-header-title{
		height: .68rem;
		line-height: .68rem;
		padding-right: .2rem;
	}
	.city-header-left {
		float: left;
		box-sizing: border-box;
		padding-left: .2rem;
	}
	.country{
		display: inline-block;
	    width: 25%;
	    text-align: center;
	   
	    font-size: .28rem;
	    border: 1px solid #fff;
	    line-height: .4rem;
	    height: .4rem;
	}
	.active {
		background: #fff;
		color:#00bcd4;
	}
</style>