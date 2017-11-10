<template>
	<div class="mp-hot-recommend">
		<h2 class="mp-hot-title">热销推荐</h2>
		<div class="mp-hot-content">
			<ul class="mp-hot-list">
				<li class="mp-hot-product" v-for="item in hotsaleInfo" :key="item.id">
					<div class="mp-hot-list-img  image-ready" >
						<router-link :to="item.link">
						<img :src="item.imgUrl" alt="">
						</router-link>
					</div>
					<div class="mp-hot-list-infos">
						<div class="mp-hot-list-title" >{{ item.hotListtitle }}</div>
						<div class="mp-hot-list-describe">{{ item.hotListdescribe }}</div>
					</div>
					<div class="mp-hot-list-price mp-price">￥{{ item.hosListprice }}
						<b class="mp-price-number">{{ item.hotListpricenumber}}</b>
						<span class="mp-price-text">{{ item.hotListpricetext }}</span>
					</div>
				</li>
			</ul>
			<ul class="mp-hot-list-hide" v-show="show">
				<li class="mp-hot-product" v-for="item in hotsaleInfohide" :key="item.id">
					<div class="mp-hot-list-img  image-ready" >
						<router-link :to="item.link">
						<img :src="item.imgUrl" alt="">
						</router-link>
					</div>
					<div class="mp-hot-list-infos">
						<div class="mp-hot-list-title" >{{ item.hotListtitle }}</div>
						<div class="mp-hot-list-describe">{{ item.hotListdescribe }}</div>
					</div>
					<div class="mp-hot-list-price mp-price">￥{{ item.hosListprice }}
						<b class="mp-price-number">{{ item.hotListpricenumber}}</b>
						<span class="mp-price-text">{{ item.hotListpricetext }}</span>
					</div>
				</li>
			</ul>
			<div class="mp-watch-more">
				<a hybrid-link="" title="去哪儿门票" v-on:click="moreClick">查看所有产品</a>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from "vuex"
    export default {
     	data() {
     		return{
     			show:false
     		}
     	},
     	computed:mapState({
  			hotsaleInfo(state) {
  				return state.home.hotsaleInfo;
  			},
  			hotsaleInfohide(state) {
  				return state.home.hotsaleInfohide;
  			}
  		}),
     	methods: {
     		moreClick:function() {
     			if(this.$data.show == false){
     			  	this.$data.show=true;
     			}else{
     				this.$data.show=false;
     			}
     		}
     	}
    }
</script>


<style>
	body{
		background:#f7f7f7;
	}
</style>
<style scoped>
	.mp-hot-title{
		height: .8rem;
	    padding-left: .26rem;
	    line-height: .8rem;
	    color: #212121;
	    overflow: hidden;
	    width:1.4rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-hot-content{
		background:#fff;
	}
	.mp-hot-product{
	    position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	}
	.mp-hot-list-img{
		position: absolute;
		top:.24rem;
		left: .24rem;
		width:1.4rem;
		height:1.4rem;
		background-size:contain;
	}
	.image-ready{
		background:url(http://img2.imgtn.bdimg.com/it/u=1625774398,2803856731&fm=214&gp=0.jpg) no-repeat center;
		background-size:contain;
	}
	.image-ready img{
		opacity: 1;

	}
	.mp-hot-list-img img{
	    vertical-align: top;
	    transition: opacity 400ms;
	    width: 1.4rem;
	    height: 1.4rem;    
	}
	.mp-hot-list-infos{
		margin-left: 1.6rem;
		height:.7rem;
	}
	.mp-hot-list-title{
		overflow: hidden;
	    margin-top: .04rem;
	    margin-bottom: .1rem;
	    height:.3rem;
	    color: #212121;
	    font-size: .3rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-hot-list-describe{
	    overflow: hidden;
	    margin-bottom: .1rem;
	    height: .4rem;
	    line-height: .4rem;
	    color: #9e9e9e;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-hot-list-price{
		position:relative;
	    margin-left: 1.6rem;
	    color: #ff8300;
	    margin-top:.2rem;
	    height:.5rem;
	    padding-top:.2rem;
	}
	.mp-price{
		font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
	}
	.mp-price-number{
	    display:inline-block;
	    position:absolute;
	    top:.1rem;
	    left:.15rem;
	    font-size: .36rem;
	    margin-left: .1rem;
	    overflow: hidden;
	    width:.8rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-price-text{
	    position:absolute;
	    display:inline-block;
	    top:.2rem;
	    left:.7rem;
		color: #9e9e9e;
   	    font-size:.24rem;
   	    overflow: hidden;
	    width:.8rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-watch-more{
		height: .88rem;
	    color: #00afc7;
	    line-height: .88rem;
	    text-align: center;
	}
	.mp-watch-more{
		display: block;
	}
	.mp-hot-content .mp-watch-more{
		margin-top: -.02rem;
	}
	
	
</style>