<template>
   <div class="mp-headfigure" >
   	    <div class="mp-header"  ref="replace" >
   	    	<router-link to="/#">
   	    		<a class="mp-header-left  iconfont icon-fanhui"></a>
   	    	</router-link>
   	         <h1 class="mp-header-title" >故宫</h1>
   	    </div>
   	    <div v-for="item in headerInfo" :key="item.id">
	   		<div class="mp-image-show">
	   			<img  class="mp-image-self" :src="item.imgUrl" alt="故宫" />
	   		</div>
	   		<div class="mp-head-infos">
	   			<div class="mp-headinfos-title">{{ item.headertitle}}</div>
	   			<div class="mp-headinfos-icon">
	   				<b class="mp-iconfont iconfont icon-icon-test"></b>
	   				<span class="mp-headinfos-icontext">{{ item.headerimgnumber}}</span>
	   			</div>
	   		</div>
   		</div>
   </div>
</template>

<script>
	import {mapState} from "vuex";
	export default {
         
		data() {

			return {
				scrollTop: 0
			}
		},
		computed:mapState({
  			headerInfo(state) {
  				return state.detail.headerInfo;
  			}
  		}),
		methods: {
			handleScroll() {
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
				if( this.scrollTop <= 206) {
					this.$refs.replace.style.opacity = this.scrollTop / 206;
				}else {
					this.$refs.replace.style.opacity = 1;
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
	
  
</script>

<style scoped>

	.mp-headfigure{
		position:relative;
	}
	.mp-header{
		position: fixed;
		width:100%;
		top:0;
		left: 0;
		opacity: 0;
	}
	.mp-header{
		height:.88rem;
		background:#00bcd4;
	    z-index: 91;
	}
	.mp-header-left{
		position: absolute;
		top:0;
		left:0;
		width: .8rem;
		height:.88rem;
		line-height: .88rem;
	}
	.mp-header-left{
		font-size:.36rem;
		color: #fff;
		text-align: center;
	}
	.mp-header-title{
		overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
	}
	.mp-image-show{
		overflow: hidden;
		height: 0;
		width:100%;
		padding-bottom: 55%;
	}
	.mp-image-self{
		width: 100%;
		vertical-align: top;
	}
	.mp-head-infos{
		position: absolute;
		right: .2rem;
        bottom: .26rem;
	    left: .2rem;
	    min-height: .4rem;
	}
	.mp-headinfos-title{
		position:relative;
		z-index: 1;
		margin-right: 1.4rem;
		line-height: .4rem;
		color: #fff;
		font-size:.32rem;
		text-shadow: 0 1px 2px rgba(0,0,0,.7);
	}
	.mp-headinfos-icon{
		position: absolute;
		top:0;
		right: 0;
	}
	.mp-headinfos-icon{
		width: 1.2rem;
		height: .4rem;
		background: rgba(0,0,0,0.5);
		border-radius: .2rem;
		font-size:.24rem;
		color: #fff;
		line-height: .4rem;
		text-align: center;
	}
	.mp-headinfos-icontext{
		margin-left: .1rem;
	}
	
</style>