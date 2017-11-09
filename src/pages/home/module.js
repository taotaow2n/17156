import axios from 'axios'
export default {
	state:{
		hotsaleInfo:[],
		hotsaleInfohide:[]
	},
	actions:{
		getIndexInfo(context) {
			console.log(10);
			axios.get('/static/index.json')
					.then((response)=>{
						if (response.status === 200) {
							const {data}  = response.data;
							context.commit("changehotsaleInfo",data.hotsaleInfo);
							context.commit("changehotsaleInfohide",data.hotsaleInfohide);
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
		}
	},
	getters:{
		shouldGetData(state) {
			if(!state.hotsaleInfo.length && !state.hotsaleInfohide.length) {
				return true;
			}else{
				return false;
			}
		}
	}
	
}
