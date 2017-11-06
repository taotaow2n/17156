import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		swiperInfo: [],
		iconSwiperInfo:[]
	},
	actions: {
		getSwiperInfo(context) {
			axios.get('/static/index.json')
					.then((response)=>{
						if (response.status === 200) {
							const {data}  = response.data;
							context.commit("changeSwiperInfo",data.swiperInfo);
							context.commit("changeIconSwiperInfo",data.iconSwiperInfo);
						}
					})
		}
	},
	mutations: {
		changeSwiperInfo: function(state,data){
			state.swiperInfo = data
		},
		changeIconSwiperInfo: function(state,data){
			state.iconSwiperInfo = data
		}
	},
	getters:{}
})
