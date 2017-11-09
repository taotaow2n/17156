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
							context.commit("changeheaderInfo",data.headerInfo);
							context.commit("changeBaseInfoone",data.BaseInfoone);
							context.commit("changeBaseInfotwo",data.BaseInfotwo);
							context.commit("changeInformInfo",data.InformInfo);
							context.commit("changeCommentInfo",data.CommentInfo);
						}
					})
		}

	},
	mutations:{
		changeheaderInfo: function(state,data){
			state.headerInfo = data;
		},
		changeBaseInfoone: function(state,data){
			state.BaseInfoone= data;
		},
		changeBaseInfotwo: function(state,data){
			state.BaseInfotwo= data;
		},
		changeInformInfo: function(state,data){
			state.InformInfo= data;
		},
		changeCommentInfo: function(state,data){
			state.CommentInfo= data;
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
