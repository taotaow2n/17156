<template>
	<div>
	 	<div class="travel-placebox" v-show="j">
	 		<ul>
	 			<li>分界洲岛</li>
	 			<li>南山文化旅游区</li>
	 			<li>槟榔谷黎苗文化区</li>
	 			<li>八达岭长城</li>
	 			<li>狮子林</li>
	 			<li>无锡三国城</li>
	 			<li>分界洲岛</li>
	 			<li>分界洲岛</li>
	 			<li>分界洲岛</li>
	 			<li>南山文化旅游区</li>
	 			<li>槟榔谷黎苗文化区</li>
	 			<li>八达岭长城</li>
	 			<li>狮子林</li>
	 			<li>无锡三国城</li>
	 			<li>分界洲岛</li>
	 			<li>分界洲岛</li>
	 			<li>分界洲岛</li>
	 			<li>南山文化旅游区</li>
	 			<li>槟榔谷黎苗文化区</li>
	 			<li>八达岭长城</li>
	 			<li>狮子林</li>
	 			<li>无锡三国城</li>
	 			<li>分界洲岛</li>
	 			<li>分界洲岛</li>
	 			<li>无锡三国城</li>
	 			<li>分界洲岛</li>
	 			<li>分界洲岛</li>
	 			<li>无锡三国城</li>
	 			<li>分界洲岛</li>
	 			<li>分界洲岛</li>
	 		</ul>
	 		<span class="travel-arrow iconfont" @click="handleClick1">&#xe66e;</span>
	 	</div>
	 	<div class="travel-placecontain" v-show="i">
	 		<p class="travel-jingdian">游玩景点（可多选）<span class="arrow iconfont"   @click="handleClick2">&#xe601;</span></p>
	 		<div class="travel-place">
		 		<ul>
		 			<li>分界洲岛</li>
		 			<li>南山文化旅游区</li>
		 			<li>槟榔谷黎苗文化区</li>
		 			<li>八达岭长城</li>
		 			<li>狮子林</li>
		 			<li>无锡三国城</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>南山文化旅游区</li>
		 			<li>槟榔谷黎苗文化区</li>
		 			<li>八达岭长城</li>
		 			<li>狮子林</li>
		 			<li>无锡三国城</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>南山文化旅游区</li>
		 			<li>槟榔谷黎苗文化区</li>
		 			<li>八达岭长城</li>
		 			<li>狮子林</li>
		 			<li>无锡三国城</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>无锡三国城</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>无锡三国城</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>八达岭长城</li>
		 			<li>狮子林</li>
		 			<li>无锡三国城</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>分界洲岛</li>
		 			<li>南山文化旅游区</li>
		 			<li>槟榔谷黎苗文化区</li>
		 			<li>八达岭长城</li>
		 			<li>狮子林</li>
		 		</ul>
	 		</div>
	 	</div>
	 	<div class="mask" v-show="i">
	 	</div>
 	</div>
</template>

<script>
//	Vue.directive("focus",{
//		inserted: function(el,bindings) {
//			console.log(13)
//		}
//	})
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
    	}	
	}
</script>

<style scoped="scoped">
	html,body {
		height: 100%;
	}
	.travel-placebox {
		position: relative;
		background:#eee;
		overflow: auto;
		height: 0.66rem;
	}
	.travel-placebox ul{
		overflow: auto;
		display: flex;
		white-space: nowrap;
		margin-right: 1rem;
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
		position: fixed;
		width: 0.66rem;
		height: 0.66rem;
		background:#eee;
		text-align: center;
		line-height: 0.66rem;
		top: .88rem;;
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
		overflow: auto;
		height: 7rem;
		position: absolute;
		z-index: 10;
		background: #eee;
		padding-bottom: .2rem;
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
