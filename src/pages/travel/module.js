import axios from 'axios'
export default {
	state: {
		placeInfo:[],
		travelListInfo:[]
	},
	actions: {
		getTravelInfo(context) {
			axios.get('/static/travel.json')
					.then((response)=>{
						if (response.status === 200) {
							const {data}  = response.data;
							context.commit("changeTravelInfo",data);	
						}
					})
		}
	},
	mutations: {
		changeTravelInfo: function(state,data){
			state.placeInfo = data.placeInfo;
			state.travelListInfo = data.travelListInfo;
		},
		refreshInfo: function(state,data){
			state.placeInfo.push(...state.placeInfo)
		}
	},
	getters:{
		shouldGetData1(state) {
			if(!state.placeInfo.length&&!state.travelListInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}