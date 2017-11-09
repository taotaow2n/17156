import axios from 'axios';

export default {
	state: {
		weekendInfo: [],
		swiperInfo: []
	},
	actions: {
		getIndexInfo(context) {
			axios.get('/static/index.json')
				.then( (response) => {
					if (response.status === 200) {
						const { data } = response;
						//想办法让mutations里的changeWeekendInfo方法执行
						context.commit("changeIndexInfo",data.data);
						// this.weekendInfo = data.weekendInfo;
					}
				})
		}
	},
	mutations: {
		changeIndexInfo(state,data) {
			state.weekendInfo = data.weekendInfo;
			state.swiperInfo = data.swiperInfo;
		},
		refreshInfo(state,data) {
			state.weekendInfo.push(...state.weekendInfo);
		}
	},
	getters: {
		shouldGetData(state) {
			if (!state.swiperInfo.length &&
				!state.weekendInfo.length) {
				return true
			}else {
				return false;
			}
		}
	}
}
