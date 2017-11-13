<template>
	<div>
		<div class="cityContent">
			<div v-if="show">
			<h2 class="hotcity">热门城市</h2>
			<ul class="hotCityContain">
				<router-link to="/" v-for="item in domesticInfo" :key="item.id">
					<li @click="handleClick">{{item.city}}</li>
				</router-link>
			</ul>
			<h2 class="hotcity">字母排序</h2>
			<ul class="alphabet">
					<li v-for="item in alphabetInfo" :key="item[0]">{{item[0]}}</li>
			</ul>
			<div v-for="item in alphabetInfo" :key="item.id">
				<h2 class="hotcity" :ref="item[0]">{{item[0]}}</h2>
				<ul class="hotCityContain">
						<li v-for="item0 in item[1]">{{item0.cityarea}}</li>
				</ul>
			</div>
			</div>
			<!--国外-->
			<div v-else>
			<h2 class="hotcity">热门城市</h2>
			<ul class="hotCityContain">
				<router-link to="/" v-for="item in hotcityAbroad" :key="item.id">
					<li @click="handleClick">{{item.city}}</li>
				</router-link>
			</ul>
			<h2 class="hotcity">字母排序</h2>
			<ul class="alphabet">
					<li v-for="item in foreignInfo" :key="item[0]">{{item[0]}}</li>
			</ul>
			<div v-for="item in foreignInfo" :key="item.id">
				<h2 class="hotcity" :ref="item[0]">{{item[0]}}</h2>
				<ul class="hotCityContain">
						<li v-for="item0 in item[1]">{{item0.cityarea}}</li>
				</ul>
			</div>
				
			</div>
		</div>
		<div class="aside" @touchmove.prevent @touchstart = "hai" ref="touch">
			<ul>
				<li v-for="item in alphabetInfo" :key="item[0]">{{item[0]}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
	export default {
		props: ["show","domesticInfo","foreignInfo","alphabetInfo","hotcityAbroad"],
		methods: {
			handleClick:function(e) {
				var place = e.target.innerHTML;
				window.localStorage.city = place;
				
			},
			hai:function(e){
				var al = e.target.innerText;
				var position = this.$refs[al][0].offsetTop;
				document.documentElement.scrollTop = position;
				var arr = [];
				for(var i in this.$refs){
					if(i.charCodeAt()>=65 && i.charCodeAt()<=90){
						var zm = i;
						var position = this.$refs[i][0].offsetTop;
						arr.push({
							a:zm,
							top:position
						})
					}
				};
				this.$refs.touch.addEventListener("touchmove",(e)=>{
					if(e.changedTouches[0].clientY>=301&&e.changedTouches[0].clientY<=730){
						document.documentElement.scrollTop = arr[parseInt((e.changedTouches[0].clientY-301)/20)].top
			
					}
					});	
				this.$refs.touch.addEventListener("touchend",()=>{
					this.$refs.touch.addEventListener(null,()=>{})
				});
			}
		}	
	}
</script>

<style scoped>
	html,body {
		height: 100%;
		
	}
	.cityContent {
		background: #EEEEEE;
		overflow: hidden;
	}
	.hotcity {
		font-size: .24rem;
    	margin: .24rem .3rem;
	}
	.cityContent ul{
		overflow: hidden;
	}
	.cityContent .hotCityContain li {
		box-sizing: border-box;
		float: left;
		width: 33.3%;
		text-align: center;
		background: #fff;
   		height: .9rem;
   		line-height: .9rem;
   		border:1px solid #ddd;
	}
	.cityContent .alphabet li {
		float: left;
		width: 16.6%;
		text-align: center;
		background: #fff;
   		height: .9rem;
   		line-height: .9rem;
	}
	.aside {
		position: fixed;
		width:.8rem;
		bottom:0;
		right: 0;
		z-index: 20;
	}
	.aside ul li {
		line-height: .4rem;
		color:#00AFC7;
	}
</style>