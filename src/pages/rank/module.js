import axios from 'axios';

export default {
	state: {
		rankInfo: []
	},
	actions: {
		getRankInfo(context) {
			axios.get('/static/rank.json')
				.then( (response) => {
					if (response.status === 200) {
						const { data } = response.data;
						//想办法让mutations里的changeWeekendInfo方法执行
						context.commit("changeRankInfo",data);
						// this.rankInfo = data.rankInfo;
					}
				})
		}
	},
	mutations: {
		changeRankInfo(state,data) {
			state.rankInfo = data.rankInfo;
		},
		refreshInfo(state,data) {
			state.rankInfo.push(...state.rankInfo);
		}
	},
	getters: {
		shouldGetRankData(state) {
			if (!state.rankInfo.length) {
				return true
			}else {
				return false
			}
		}
	}
}
