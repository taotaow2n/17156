<template>
 	<div>
 		<div class="header">
 	 		<div class="header-left iconfont icon-fanhui" @click="handleReturnClick"></div>
 	 		<input  class="header-title" @focus="show = true" @blur="show = false" ref="searchValue" placeholder="输入城市/景点">
 	 		</input>
  	 		<div class="header-right">
  	 			<div class="header-city-wrapper">
  	 				<span class="header-city" @click="handleSearchClick">搜索</span>
  	 			</div>
   			</div>
   		</div>
   	 	<div class="show-hide" v-if="show" @click="show = true">
   			<div class="hot">
   				<div class="hotSearch">热门搜索</div>
   					<div class="change iconfont" @click="handleChangeBtn" >
						&#xe614;
						换一批
   					</div>
   	 			</div>
  		 	 	<div class="mp-hotsearch-con">
	  				<div class="mp-hotsearch-group">
	  					<div class="mp-hotsearch-typecon">
	  						<div class="mp-hotsearch-typeinner">
	  							<div class="hotsearch-typeinner-img">
	  								<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" class="mp-hotsearch-typeicon">
	  							</div>
	
	  						</div>
	  					</div>
	  					<div class="mp-hotsearch-itemcon mp-sight-maxline">
	  						<div ref="movement" class="mp-sight-icon">
		  			  			<div class="mp-hotsearch-iteminner" v-for="item in listInfo" :key ="item.id">
		  							<a  class="mp-hotsearch-item">{{item.tourist}}</a>
		  						  </div>
		  					</div>
	  					</div>
	  				</div>
	  				<div class="mp-hotsearch-group">
	  						<div class="mp-hotsearch-typecon">
	  							<div class="mp-hotsearch-typeinner">
	  							  <div class="hotsearch-typeinner-img">
	  								<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" class="mp-hotsearch-typeicon">
	  							  </div>
	  							</div>
	  						</div>
	  						<div class="mp-hotsearch-itemcon mp-region-maxline" ref="address">
	  						   <div ref="movementChange" class="mp-sight-icon">
	  							<div class="mp-hotsearch-iteminner" v-for="item in touristInfo">
	  							  <a href="#" class="mp-hotsearch-cityitem">{{item.places}}</a>
	  							</div>
	  						   </div>
	  						</div>
	  				</div>
	  	  		</div>
	  	  		<div class="search-nearby">搜索身边的景点</div>
	      	</div>
    	</div>
   </div>
  </template>
  
  <script src="vue.js"></script>
  <script>
	var x = 88, i = 1;
	import {mapState} from "vuex"
	
  	export default {
  		
  		data() {
  			return {
				show: false
  			}
  		},
  		
  		computed:mapState({
  			listInfo(state) {
  				return state.list.listInfo
  			},
  			touristInfo(state) {
  				return state.list.touristInfo
  			}
  		}),
  		
  		methods: {
  			handleReturnClick:function() {
  				this.$router.go(-1);
  			},
  			
  			handleSearchClick:function(){
  				
				var a = this.$refs.searchValue.value;
				this.$refs.searchValue.value="";
				console.log(a);

  			},
  			
  			handleChangeBtn:function(){
  				if( i < 3) {
					this.$refs.movement.style.top = -x * i + "px";
					this.$refs.movementChange.style.top = - (x - 35.5) * i + "px";
					i++;
				}else {
					i = 1;
					this.$refs.movement.style.top = 0 + "px";
					this.$refs.movementChange.style.top = 0 + "px";
					
				}
			
			}

  		}
  	}
  
  </script>
    
  <style>
  	.mp-sight-icon{
  		
  		z-index: 10;
  		position: absolute;
  		top: 0;
  		height:5rem;
  		margin-top: 0;
  		overflow: hidden;
  	}
    .header{
    	
  		height:.88rem;
  		background:#00bcd4;
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
  		
  		position: absolute;
  		left: .8rem;
  		right: 1.36rem;
  		top: .14rem;
  		line-height: .6rem;
  		background: #fff;
  		border-radius: .06rem;
  		text-indent: .2rem;
  		color: #ccc;
  		width:5.2rem;
  		border:none;
  		overflow: hidden;
  		white-space: nowrap;
  		text-overflow: ellipsis;
  	}
  	.header-right {
  		
  		float: right;
  		width: 1.28rem;
  		line-height: .88rem;
  		text-align: center;
  		color: #fff;
  	}
  	.header-city-wrapper {
  		
  		position: relative;
  		padding-right: .3rem;
  	}
  	.header-city {
  		
  		width: 1rem;
  		overflow: hidden;
  		display: inline-block;
  		white-space: nowrap;
  		text-overflow: ellipsis;
  	}
  	.hot{
  		
  		height:.64rem;
  		line-height:.74rem;
  		padding:0 .2rem;
  		background-color: #f0f5f6;
  		font-size: .26rem;
  	}
  	.hot-journal{
  		
  		height:1.0rem;
  		background-color: #fff;
  	}
  	.hotSearch{
  		
  		overflow: hidden;
  		width:1.5rem;
  		float:left;
  		color:#ccc;
  		white-space: nowrap;
  		text-overflow: ellipsis;
  	}
  	.change{
  		
  		width:1.5rem;
  		float:right;
  		color:#00afc7;
  		margin-right:-0.8rem;
  		font-size:14px;
  		overflow: hidden;
  		white-space: nowrap;
  		text-overflow: ellipsis;
  	}
  	.mp-hotsearch-group{
  		
  		position:relative;
  		padding-left:.74rem;
  		background-color: #fff;
  		border-top:1px solid #dce5e7;
  	}
  	.mp-hotsearch-typecon{
  		
  		position:absolute;
  		left:0;
  		top:0;
  		width:.74rem;
  		height:100%;
  		line-height: 100%;
  		text-align: center;
  		border-right:1px solid #dce5e7;
   	}
   	.hotsearch-typeinner-img{
   		
   		z-index: 2;
   		position: absolute;
   		top: 40%;
  		left: 30%;
   		width:.3rem;
  		height:.3rem;
   	}
  	.mp-hotsearch-typeicon{
  		
  		width:.3rem;
  		height:.3rem;
  		display: inline-block;
  		background: url(http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png);
  		background-size: contain;
  	}
  	.mp-hotsearch-itemcon{
  		
  		zoom:1;
  		position:relative;
  		width: 100%;
  		height: 8rem;
  		overflow:hidden;
  	}
  	.mp-sight-maxline{
  		
  		max-height:1.8rem;
  	}
  	.mp-hotsearch-iteminner{
  		
  		zoom:1;
  		position:relative;
  		left:0;
  		top:0;
  		float:left;
  		overflow: hidden;
  	}
  	.mp-hotsearch-item {
  		
  	    display: block;
  	    float: left;
  	    height: .36rem;
  	    max-width: 2.89rem;
  	    line-height: .36rem;
  	    text-align: center;
  	    display: block;
  	    padding-left: .3rem;
  	    padding-right: .3rem;
  	    border-right: 1px dashed #c9cccd;
  	    color: #333;
  	    white-space: nowrap;
  	    overflow: hidden;
  	    text-overflow: ellipsis;
  	    margin-top: .25rem;
  	    margin-bottom: .25rem;
  	}
  	.mp-hotsearch-group{
  		
  		position:relative;
  	    padding-left:.74rem;
  	    background-color: #fff;
  	}
  	.mp-hotsearch-cityitem {
  		
  	    display: block;
  	    float: left;
  	    height: .36rem;
  	    max-width: 2.89rem;
  	    line-height: .36rem;
  	    text-align: center;
  	    display: block;
  	    padding-left: .3rem;
  	    padding-right: .3rem;
  	    border-right: 1px dashed #c9cccd;
  	    color: #333;
  	    padding-top:.12rem;
  	    white-space: nowrap;
  	    overflow: hidden;
  	    text-overflow: ellipsis;
  	    margin-top: .32rem;
  	    margin-bottom: .25rem;
  	}
  	.mp-region-maxline{
  		
  		height:1.2rem;
  		width:5.2rem;
  	}
  	.mp-sight-maxline{
  		
  		width:6.2rem;
  		
  	}
  	.search-nearby{
  		
  		height:.72rem;
  		line-height: .72rem;
  		text-align: center;
  		font-size: .26rem;
  		border:1px solid #dde1e3;
  		border-radius:2px;
  		width:8rem;
  		white-space: nowrap;
  	    overflow: hidden;
  	    text-overflow: ellipsis;
  	    border-left:0px;
  	    margin-left:-0.2rem;
  		
  	}
  </style>