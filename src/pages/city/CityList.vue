<template>
	<div>
		<div class="cityContent">
			<h2 class="hotcity">热门城市</h2>
			<ul v-if="show">
				<router-link to="/" v-for="item in domesticInfo" :key="item.id">
					<li @click="handleClick">{{item.place}}</li>
				</router-link>
			</ul>
			<ul v-else>
				<router-link to="/" v-for="item in foreignInfo" :key="item.id">
					<li @click="handleClick">{{item.place}}</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["show","domesticInfo","foreignInfo"],
		methods: {
			handleClick:function(e) {
				var place = e.target.innerHTML;
				window.localStorage.city = place;
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
	.cityContent ul li {
		box-sizing: border-box;
		float: left;
		width: 33.3%;
		text-align: center;
		background: #fff;
   		height: .9rem;
   		line-height: .9rem;
   		border:1px solid #ddd;
	}
</style>