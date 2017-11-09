import axios from 'axios'
export default {
	state: {
		listInfo:[],
		touristInfo:[]
	},
	
	actions:{
		
		getInfo(context) {
			axios.get('./static/listTourist.json')
			.then((response) =>{
				if( response.status === 200) {
				const {data} = response.data;
				context.commit("changeListInfo", data.listInfo);
				context.commit("changeTouristInfo", data.touristInfo);
				
			}
		  })
			
		}
	},
	
	mutations:{
		
		changeListInfo(state,data) {
			state.listInfo = data
		},
		
		changeTouristInfo(state,data) {
			state.touristInfo = data
		}
	},
	getters:{
		
		shouldGetListData(state) {
			
			if(!state.listInfo.length && !state.touristInfo.length) {
				return true
			}else{
				return false;
			}
		}
	}
}