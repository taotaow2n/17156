import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		weekendInfo: []
	},
	actions: {
		getWeekendInfo(context) {
			axios.get('/static/index.json')
				.then( (response) => {
					if (response.status === 200) {
						const {data}  = response.data;
						//想办法让mutations里的changeWeekendInfo方法执行
						context.commit("changeWeekendInfo",data.weekendInfo);
						// this.weekendInfo = data.weekendInfo;
					}
				})
		}
	},
	mutations: {
		changeWeekendInfo(state,data) {
			state.weekendInfo = data;
		}
	},
	getters: {}
})