import axios from 'axios'
export default {
	state:{
		hotsaleInfo:[],
		hotsaleInfohide:[],
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
			state.iconSwiperInfo = data.iconSwiperInfo
		}
	},

	
	
	getters:{
		shouldGetData(state) {
         if(!state.hotsaleInfo.length && !state.hotsaleInfohide.length  && !state.swiperInfo.length&&!state.iconSwiperInfo.length) {
  
				return true;
			}else{
				return false;
			}
		}
	}
	
}



