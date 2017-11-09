import axios from 'axios'
export default {
	state: {
		swiperInfo: [],
		iconSwiperInfo:[]
	},
	actions: {
		getIndexInfo(context) {
			axios.get('/static/index.json')
					.then((response)=>{
						if (response.status === 200) {
							const {data}  = response.data;
							context.commit("changeIndexInfo",data);	
						}
					})
		}
	},
	mutations: {
		changeIndexInfo: function(state,data){
			state.swiperInfo = data.swiperInfo;
			state.iconSwiperInfo = data.iconSwiperInfo
		}
	},
	getters:{
		shouldGetData(state) {
			if(!state.swiperInfo.length&&!state.iconSwiperInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}