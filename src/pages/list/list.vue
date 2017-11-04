<template>
 	<div>
 		<div class="header">
 	 		<div class="header-left iconfont icon-fanhui"></div>
 	 		<div  class="header-title" @click="changeShow">
 	 			输入城市/景点
 	 		</div>
  	 		<div class="header-right">
  	 			<div class="header-city-wrapper">
  	 				<span class="header-city">搜索</span>
  	 			</div>
   			</div>
   		</div>
   	 	<div class="show-hide" v-if="show">
   			<div class="hot">
   				<div class="hotSearch">热门搜索</div>
   					<div class="change iconfont">
   						&#xe603;
   						换一批
   					</div>
   	 			</div>
  		 	 	<div class="mp-hotsearch-con">
  				<div class="mp-hotsearch-group">
  					<div class="mp-hotsearch-typecon">
  						<div class="mp-hotsearch-typeinner">
  							<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" class="mp-hotsearch-typeicon">
  						</div>
  					</div>
  					<div class="mp-hotsearch-itemcon mp-sight-maxline">
  			  			<div class="mp-hotsearch-iteminner">
  							<a href="#" class="mp-hotsearch-item">宋城千古情</a>
  							<a href="#" class="mp-hotsearch-item">故宫</a>
  							<a href="#" class="mp-hotsearch-item">香山公园</a>
  							<a href="#" class="mp-hotsearch-item door">天门狐仙</a>
  							<a href="#" class="mp-hotsearch-item door">张家界大峡谷</a>
  							<a href="#" class="mp-hotsearch-item door">颐和园</a>
  						  </div>
  						</div>
  					</div>
  					<div class="mp-hotsearch-group">
  						<div class="mp-hotsearch-typecon">
  							<div class="mp-hotsearch-typeinner">
  								<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" class="mp-hotsearch-typeicon">
  							</div>
  						</div>
  						<div class="mp-hotsearch-itemcon mp-region-maxline">
  							<div class="mp-hotsearch-iteminner">
  							  <a href="#" class="mp-hotsearch-cityitem">广州</a>
  							  <a href="#" class="mp-hotsearch-cityitem">三亚</a>
  							  <a href="#" class="mp-hotsearch-cityitem">上海</a>
  							  <a href="#" class="mp-hotsearch-cityitem">苏州</a>
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
  	export default {
  		data:function(){
  			return {
  				show:false
  			}
  		},
  		methods: {
  			changeShow: function() {
  //				if(this._data.show){
  //					this._data.show=false;
  //				}else{
  //					this._data.show=true;
  //				}
  				this._data.show = !this._data.show;
  			}
  		}
  	}
  
  </script>
    
  <style>
    .header{
  		height: .88rem;
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
  		overflow: hidden;
  		display: inline-block;
  		white-space: nowrap;
  		width: 1rem;
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
  		background-color: white;
  	}
  	.hotSearch{
  		float:left;
  		color:#ccc;
  	}
  	.change{
  		float:right;
  		color:#00afc7;
  		margin-right:-0.8rem;
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
  	}
  	.mp-hotsearch-typeinner{
  		/*position:absolute;*/
  		float:left;
  		width:100%;
  		height:70%;
  		top:15%;
  		border-right:1px solid #dce5e7;
  	}
  	.mp-hotsearch-typeicon{
  		width:.3rem;
  		height:.3rem;
  		position:relative;
  		top:50%;
  		margin-top:.1rem;
  		border-right:1px solid #ccc;
  	}
  	.mp-hotsearch-itemcon{
  		height:1.8rem;
  		
  	}
  	
  	
  	.mp-sight-maxline{
  		zoom:1;
  		position:relative;
  	}
  	.mp-hotsearch-iteminner{
  		float:left;
  		zoom:1;
  		overflow: hidden;
  		position:relative;
  		left:0;
  		top:0;
  		
  		
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
  	    margin-top: .25rem;
  	    margin-bottom: .25rem;
  	}
  	.mp-region-maxline{
  		height:1.2rem;
  		border-bottom:1px solid #ddd;
  		padding-bototm:.2rem;
  	}
  	.search-nearby{
  		height:.72rem;
  		line-height: .72rem;
  		text-align: center;
  		font-size: .26rem;
  		border:1px solid #dde1e3;
  		border-radius:2px;
  	}
  	/*.show-hide{
  		display: none;
  	}*/
  </style>