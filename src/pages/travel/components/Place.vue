<template>
	<div>
		<div >
	 	<div class="travel-placebox" v-show="j">
	 		<div id="wrapper">
		 		<ul id="scroller">
		 			<li v-for = "item in placeInfo" :key="item.id">{{item.title}}</li>
		 		</ul>
	 		</div>
	 		<span class="travel-arrow iconfont" @click="handleClick1">&#xe66e;</span>
	 	</div>
	 	</div>
	 	<div class="travel-placecontain" v-show="i">
	 		<p class="travel-jingdian">游玩景点（可多选）<span class="arrow iconfont"   @click="handleClick2">&#xe601;</span></p>
	 		<div>
		 		<div class="travel-place" id="wrapper1">
			 		<ul id="scroller1">
			 			<li v-for = "item in placeInfo" :key="item.id">{{item.title}}</li>
			 			<li v-for = "item in placeInfo" :key="item.id">{{item.title}}</li>
			 		</ul>
		 		</div>
	 		</div>
	 	</div>
	 	<div class="mask" v-show="i">
	 	</div>
 	</div>
</template>

<script>
	require("../../../utils/iscroll-probe.js") 
	export default {
    	data:function() {
    		return {
    			j:true,
    			i:false
    		}
    	},
    	methods :{
    		handleClick1:function(){
    			this.i = true;
    			this.j = false;
    		},
    		handleClick2:function(){
    			this.i = false;
    			this.j = true;
    		},
    		enter:function(el){
    			console.log(el)
    		}
    	},
		computed: {
			placeInfo() {
				return this.$store.state.travel.placeInfo
			}
		},
		mounted() {
		 	this.myScroll1 = new IScroll('#wrapper1', {probeType: 1,mouseWheel: true });
		 	this.myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
		 	this.myScroll1.on("scroll",()=>{
		 	 	 if(this.myScroll1.y>70){
		 	 	 	this.$store.commit("refreshInfo")
		 	 	 }
		 	 })	
	},
		updated(){
			this.myScroll1.refresh();
			this.myScroll.refresh();
		}
	}
</script>

<style scoped="scoped">
	.scroll-view {
	  touch-action: none;
	  position: fixed;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  overflow: hidden;
	}
	html,body {
		height: 100%;
	}
	.travel-placebox {
		overflow: hidden;
		position: relative;
		background:#eee;
		height: 0.66rem;
		padding-right:.8rem;
	}
	.travel-placebox ul{
		display: flex;
		white-space: nowrap;
		position: absolute;
	}
	.travel-placebox ul li{
		float:left;
		height:0.4rem;
		padding: .04rem .08rem;
		background: #fff;
		line-height: .4rem;
		margin-left: 0.4rem;
		margin-top: 0.08rem ;
	}
	.travel-arrow {
		position: absolute;
		width: 0.66rem;
		height: 0.66rem;
		background:#eee;
		text-align: center;
		line-height: 0.66rem;
		top: 0;
		right: 0;
	}
	.travel-jingdian {
		height: 0.66rem;
		padding-left: 0.2rem;
		line-height: 0.66rem;
	}
	.travel-placecontain {
		//overflow: auto ;
		background: #eee;
	}
	.travel-place {
		overflow: hidden;
		height: 7rem;
		position: absolute;
		z-index: 10;
		background: #eee;
		padding-bottom: .2rem;
	}
	.travel-placecontain ul{
		overflow: hidden;
	}
	.travel-placecontain ul li {
		float:left;
		height:0.4rem;
		padding: .04rem .08rem;
		background: #fff;
		line-height: .4rem;
		margin-left: 0.2rem;
		margin-top: 0.4rem ;
	}
	.arrow {
		float:right;
		width: 0.66rem;
		height: 0.66rem;
		text-align: center;
		line-height: 0.66rem;
	}
	.mask{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		z-index: 5;
	}
</style>
