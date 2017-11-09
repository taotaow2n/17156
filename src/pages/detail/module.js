import axios from 'axios'
export default {
	state:{
		headerInfo:[],
		BaseInfoone:[],
		BaseInfotwo:[],
		InformInfo:[],
		CommentInfo:[]
	},
	actions:{
		getDetailInfo(context) {
			axios.get('/static/detail.json')
					.then((response)=>{
						if (response.status === 200) {
							const {data}  = response.data;
							context.commit("changeDetailInfo",data);
							
						}
					})
		}

	},
	mutations:{
		changeDetailInfo: function(state,data){
				state.headerInfo = data.headerInfo;
				state.BaseInfoone= data.BaseInfoone;
				state.BaseInfotwo= data.BaseInfotwo;
				state.InformInfo= data.InformInfo;
				state.CommentInfo= data.CommentInfo;
		}
	},
	getters:{
		shouldGetDetailData(state) {
			if(!state.headerInfo.length && !state.BaseInfoone.length  &&  !state.BaseInfotwo.length
			&&  !state.InformInfo.length &&  !state.CommentInfo.length) {
				return true;
			}else{
				return false;
			}
		}
	}
	
}
