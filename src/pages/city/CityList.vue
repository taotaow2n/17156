<template>
	<div>
		<div class="cityContent">
			<div v-if="show">
			<h2 class="hotcity">热门城市</h2>
			<ul class="hotCityContain">
				<router-link to="/" v-for="item in domesticInfo" :key="item.id">
					<li @click="handleClick">{{item.place}}</li>
				</router-link>
			</ul>
			<h2 class="hotcity">字母排序</h2>
			<ul class="alphabet">
					<li @click="handleClick" v-for="item in alphabetInfo" :key="item.id">{{item.type}}</li>
			</ul>
			<h2 class="hotcity">A</h2>
			<ul class="hotCityContain">
					<li @click="handleClick" v-for="item in domesticInfo" :key="item.id">{{item.place}}</li>
			</ul>
			</div>
			<div v-else>
			<h2 class="hotcity">热门城市</h2>
			<ul class="hotCityContain">
				<router-link to="/" v-for="item in foreignInfo" :key="item.id">
					<li @click="handleClick">{{item.place}}</li>
				</router-link>
			</ul>
			<h2 class="hotcity">字母排序</h2>
			<ul class="alphabet">
					<li @click="handleClick" v-for="item in alphabetInfo" :key="item.id">{{item.type}}</li>
			</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		props: ["show","domesticInfo","foreignInfo","alphabetInfo"],
		methods: {
			handleClick:function(e) {
				var place = e.target.innerHTML;
				window.localStorage.city = place;
				document.documentElement.scrollTop ="20"
				
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
</style>