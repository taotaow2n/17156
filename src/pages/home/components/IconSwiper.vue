<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
	    		<div class="swiper-img-con" v-for="item in iconSwiperInfo" :key="item.id">
	    			<router-link :to="item.link" >
		    			<div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="景点门票" data-click-from-index="0" data-click-dist-city="北京">
		    				<a href="//touch.piao.qunar.com/touch/list_北京_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" title="景点门票" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=0&amp;from_value=景点门票&amp;dist_city=北京">
		    					<div class="mp-category-img-container">
		    						<div class="box">
		    						<img :src="item.imgUrl" alt="景点门票" style="opacity: 1;"></div>
		    					</div>
		    					<div class="keywords">{{item.title}}</div>
		    				</a>
		    			</div>
		    			</router-link>
		    		</div>
	    	</swiper-slide>
	   		<swiper-slide>
	    		
		    		<div class="swiper-img-con" v-for="item in iconSwiperInfo" :key="item.id">
		    			<router-link :to="item.link" >
		    			<div class="mp-category-item" data-click="ts_type_nav" data-click-from-value="景点门票" data-click-from-index="0" data-click-dist-city="北京">
		    				<a href="//touch.piao.qunar.com/touch/list_北京_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" title="景点门票" mp-role="analytics" data-params="from_area=ts_type_nav&amp;from_index=0&amp;from_value=景点门票&amp;dist_city=北京">
		    					<div class="mp-category-img-container">
		    						<img :src="item.imgUrl" alt="景点门票" style="opacity: 1;">
		    					</div>
		    					<div class="keywords">{{item.title}}</div>
		    				</a>
		    			</div>
	    			</router-link>
	    		</div>
	    	
    	</swiper-slide>
   		
    	<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

  	export default {
  		props: ["iconSwiperInfo"],
    	data() {
			return {
				swiperOption: {
          			direction: 'horizontal',
         			autoHeight: true,
          			pagination: '.swiper-pagination',
        			observeParents: true,
        		}
      		} 
    	},

    	components: {
      		swiper,
    		swiperSlide
		}
	}
</script>

<style>
	.swiper-pagination-bullet {
		background: #00bcd4;	
	}	
</style>
<style scoped>
	.swiper-img {
		width: 100%;
	}
	.swiper-img-con{
		float: left;
	    width: 25%;
	    height: 1.3rem;
	    padding-top: .3rem;
	    text-align: center
	}
	.keywords{
		color: #333;
		font-size: .28rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		
	}
	.swiper-img-con img{
		width:0.68rem;
		height:0.68rem;
		margin-bottom: 0.2rem;
		
	}
	.swiper-slide{
		height: 3.7rem;
	}
	.mp-category-img-container{
		height:0.68rem;
		margin-bottom: .2rem;	
	}
	.box{
		display: inline-block;
		width:0.68rem;
		height:0.68rem;
	}
</style>