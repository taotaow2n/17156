import axios from 'axios'
export default {
	state:{
		hotsaleInfo:[],
		hotsaleInfohide:[],
		weekendInfo: [],
		swiperInfo:[],
		iconSwiperInfo:[]
	},
	actions: {
		getIndexInfo(context) {
			axios.get('/static/index.json')
					.then((response)=>{
						if (response.status === 200) {
							const {data}  = response.data;
							context.commit("changehotsaleInfo",data.hotsaleInfo);
							context.commit("changehotsaleInfohide",data.hotsaleInfohide);
							context.commit("changeIndexInfo",data);	
						}
					})
			}

	},
	mutations:{
		changehotsaleInfo: function(state,data){
			state.hotsaleInfo = data;
		},
		changehotsaleInfohide: function(state,data){
			state.hotsaleInfohide = data;
							
		},
		changeIndexInfo: function(state,data){
			state.swiperInfo = data.swiperInfo;
			state.weekendInfo = data.weekendInfo;
			state.iconSwiperInfo = data.iconSwiperInfo
		},
		refreshInfo(state,data) {
			state.weekendInfo.push(...state.weekendInfo);
		}
	},

	
	
	getters:{
		shouldGetData(state) {
         if(!state.hotsaleInfo.length && !state.hotsaleInfohide.length  && !state.swiperInfo.length&&!state.iconSwiperInfo.length&&
				!state.weekendInfo.length) {
  
				return true;
			}else{
				return false;
			}
		}
	}
	
}



