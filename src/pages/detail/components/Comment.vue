<template>
	<div class="mp-commentinfo-con">
		<p class="mp-commentinfo-con-inner" v-for="item in CommentInfo" :key="item.id">
				<span class="mp-iconfont-one iconfont icon-xiaolian"></span>
				<span class="mp-iconfont-two iconfont ">&#xe644&#xe644&#xe644&#xe644&#xe644</span>
				<span class="mp-comment-number">{{ item.commentgrade}}</span>
				<span class="mp-iconfont-three iconfont ">147314评论&#xe60c</span>
		</p>
	</div>
</template>

<script>
	import {mapState} from "vuex";
	export default{
		
		computed:mapState({
  			CommentInfo(state) {
  				return state.detail.CommentInfo;
  			}
  		})
		
	}
</script>

<style scoped>
	.mp-commentinfo-con{
		position:relative;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .2rem;
		background: #fff;
	}
	.mp-commentinfo-con-inner{
		height: .8rem;
		line-height: .8rem;
	}
	.mp-iconfont-one{
		font-size: .46rem;
	}
	.mp-iconfont-one,.mp-iconfont-two,.mp-comment-number{
		color:#00bcd4;
	}
	.mp-iconfont-three{
		float: right;
	}
	.mp-iconfont-three{
		display: inline-block;
	    line-height: .8rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    color: #9e9e9e;
	}
</style>