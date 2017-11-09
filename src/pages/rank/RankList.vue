<template>
	<div id="mainList">
		<div id="wrapper">
			<div id="scroll">
				<p v-if="showLoading">正在加载</p>
				<div class="mianList" v-for="item in rankInfo" :key="item.id">
					<router-link :to="'item.link'">	
						<div class="main-Item" >
							<div class="item-wrapper">
								<img :src="item.imgUrl" alt="春晖园温泉度假村">
							</div>
							<div class="item-info">
								<p class="name">{{item.name}}</p>
								<p class="desc">{{item.desc}}</p>
								<div class="item-price">
									<span class="qunarprice">
										{{item.$}}
										<em>{{item.price}}</em>
										<span>
											<span class="item-pricestart">{{item.start}}</span>
										</span>
									</span>
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import { mapState } from 'vuex'
	require('../../utils/iscroll-probe.js');
	export default {

		data() {
			return {
				showLoading : false
			}
		},

		// computed: mapState({
		// 	rankInfo(state) {
		// 		return state.home.rankInfo;
		// 	}
		// })
		computed: {
            rankInfo() {
                return this.$store.state.rank.rankInfo;
            }
        },

       mounted() {
			this.myScroll = new IScroll('#wrapper', {probeType:2, mouseWheel:true}) 
			this.myScroll.on('scroll', () => {
				// if(this.myScroll.y < (-this.weekendInfo.length * 230) + 860) {
				// 	this.showLoading = true;
				// 	this.$store.commit("refreshInfo");
				// }
				if(this.myScroll.y > 50) {
					this.showLoading = true;
						this.$store.commit("refreshInfo");
				}
			})
		},

		updated() {
			// setTimeout(() => {
				this.showLoading = false;
				this.myScroll.refresh();
			// },500);
		}

	}
</script>

<style scoped>
	body {
		font-family: "微软雅黑";
		color: #212121;
		font-size: .28rem;
		line-height: 1;
	}
	#wrapper {
		height: 860px;
		overflow: hidden;
	}
	.main-Item {
		background: #fff;
		position: relative;
		margin-bottom: .2rem;
	}
	.item-wrapper {
		overflow: hidden;
		height: 0;
		width: 100%;
		padding-bottom: 43.37288%;
	}
	img {
		width: 100%;
	}
	.item-info {
		position: relative;
		padding: .14rem .2rem .24rem .2rem;
	}
	.name {
		overflow: hidden;
		padding-right: 2.2rem;
		color: #212121;
		font-size: .36rem;
		line-height: .54rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.desc {
		overflow: hidden;
		color: #616161;
		font-size: .26rem;
		line-height: .45rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-price {
		position: absolute;
		top: .25rem;
		right: .2rem;
	}
	.qunarprice {
		color: #ff8300;
		font-size: .18rem;
	}
	.qunarprice em {
		font-size: .4rem;
		margin-left: .04rem;
		font-weight: bold;
	}
	.item-pricestart {
		color: #616161;
		font-size: .22rem;
	}
</style>