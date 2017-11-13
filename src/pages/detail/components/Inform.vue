<template>
	<div class="mp-informinfo-con" >
			<p class="mp-informinfo-con-inner" v-for="item in InformInfo" :key="item.id">
				<span class="mp-iconfont iconfont icon-tongzhi"></span>
				<span class="mp-informinfo-text">{{ item.informconnect}}</span>
				<span class="mp-iconfont iconfont icon-xiangyoujiantou"></span>
				<span></span>
			</p>
	</div>
</template>

<script>
	import {mapState} from "vuex";
	export default{
		
		computed:mapState({
  			InformInfo(state) {
  				return state.detail.InformInfo;
  			}
  		})
		
	}
</script>

<style scoped>
	.mp-informinfo-con{
		position:relative;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .2rem;
		background: #fdeede;
		color:#f1441a;
		line-height:.88rem;
	}
	.icon-tongzhi{
		float:left;
		margin-right:.1rem;
		color:#f00;
	}
	.mp-informinfo-con-inner{
		width:100%;
		height:.88rem;
	}
	.mp-informinfo-text{
		display:inline-block;
		overflow: hidden;
	    width:80%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.icon-xiangyoujiantou{
		float:right;
		color:#9e9e9e;
		margin-bottom: .1rem;                                    

	}
</style>