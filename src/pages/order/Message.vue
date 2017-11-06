<template>
	<div id="order-message" >
		<div class="buyNumber">
		  	<div class="mostNumber">
		  	 	<span class="mostNumber-buy">购买数量</span>
		  	 	<span class="mostNumber-five">最多买五张</span>
		  	</div>
		  	<div class="changeNumber" id="changeNumber">
		  	 	<span class="changeNumber-minus iconfont" @click="handleClickMinus">&#xe649;</span>
		  	 	<span class="changeNumber-minus-add">{{counter}}</span>
		  	 	<span class="changeNumber-add iconfont" @click="handleClickAdd" >&#xe600;</span>
		  	</div>
		</div>	
 		<div v-for="(item,index) in userarr">
 			<div class="message-row">
 				<label class="row-filed" for="username">游客{{index+1}}</label><input class="row-textinput" name="username" type="text" placeholder="游客姓名"/>
 				<span class="iconfont customer">&#xe67a;</span>
 			</div>
 			<div v-if="index==0" class="message-row">
 				<span class="filed-menu">+86></span>
 				<label class="row-filed" for="tel">手机号</label><input class="row-textinput"  name="tel" type="tel" placeholder="请填写手机号"/>
 			</div>
 			<div class="message-row">
 				<label class="row-filed" for="idcard">身份证</label><input class="row-textinput"  name="idcard" type="number" placeholder="请填写正确的身份证号码"/>
 			</div>
 		</div>
 		<div class="consult">咨询电话</div>
 		<div class="order-Page">
			<div class="product-price">
				<em class="product-price-sale">产品价格</em>
				<span class="product-price-change">￥
					<em class="product-price-buy">{{counter * 40}}</em>
				</span>
				<span class="changeColor iconfont">&#xe601;</span>
			</div>
			<div class="submit-order">
				<a href="#" class="submit-order-btn">
					提交订单
				</a>
			</div>
		</div>
 	</div>
</template>
<script src="./vue.js"></script>

<script>
export default {	
	data:function(){
		return	{
			counter:1,
			userarr:[1]
	}
},
	methods: {
		handleClickMinus:function(){
			if(this.counter > 1){
                this.counter = parseInt(this.counter) - 1;
                this.userarr.length-=1;
            }
		},
		handleClickAdd:function(){
			if(this.counter>4){
				this.counter =5
			}else{
				this.counter = parseInt(this.counter) + 1;
				this.userarr.push(this.counter);
			}	
		}
	}
}
</script>

<style scrop>

	.buyNumber{
		padding:.3rem .2rem .3rem .2rem;
		height:.5rem;
		
	}
	.mostNumber{
		float:left;
		padding-top:.1rem;
	}
	.mostNumber-buy{
		top:.12rem;
		
		width:1.6rem;
		color:#616161;
		font-size: .3rem;
		line-height: .5rem;
	}
	.mostNumber-five{
		top:50%;
		left:1.6rem;
		color:#ccc;
		font-size: .28rem;
		padding-top:.1rem;
	}
	.changeNumber{
		float:right;
		border:.02rem solid #c7ced4;
		width:1.8rem;
		height:.56rem;
		background: #ddd;
	}
	.changeNumber-minus{
		float:left;
		display: inline;
		border-right:.02rem solid #c7ced4;
		width:.57rem;
		height:.56rem;
		text-align: center;
		line-height: .56rem;
		color:#ccc;
	}
	
	.changeNumber-add{
		float:left;
		width:.57rem;
		height:.46rem;
		background: #00afc7;
		color:#fff;
		text-align: center;
		padding-top:0.1rem;
		
	}
	.changeNumber-minus-add{
		float:left;
		display: inline;
		width:.63rem;
		height:.56rem;
		text-align: center;
		line-height: .56rem;
		background-color: #fff;
		
	}
	.exchange-logoMinus{
		float:left;
		display: inline;
		border-right:.02rem solid #c7ced4;
		width:.57rem;
		height:.56rem;
		text-align: center;
		line-height: .56rem;
		/*color:#ccc;*/
		background: #00afc7;
		color:#fff;
	}
	.exchange-logoAdd{
		float:left;
		width:.57rem;
		height:.46rem;
		color:#ccc;
		text-align: center;
		padding-top:0.1rem;
		
	}

	
	.message-row {
		position: relative;
		min-height: .5rem;
		padding: .24rem;
		overflow: hidden;
	}
	.row-filed {
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .5rem;		
	}
	.row-value {
		margin-left: 1.7rem;
		line-height: .5rem;
		position: relative;
	}
	.row-textinput {
		position: absolute;
		width: 100%;
		height: .38rem;
		padding: .06rem 0;
		border: 0;
		font: .32rem "微软雅黑";
		color: #212121;
		line-height: .5rem;
	}
	/*.textinput-note {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		color: #f00;
		background: #fff;
	}*/
	.customer {
		position: absolute;
		top: .26rem;
		right: .2rem;
		width: .4rem;
		height: .5rem;
		color: #1ba9ba;
		font-size: .32rem;
		line-height: .5rem;
		text-align: center;
	}
	.index {
		position: relative;
		margin-left: 1rem;
	}
	.filed-menu {
		right: 100%;
		min-width: .4rem;
		max-width: 1rem;
		margin-right: .1rem;
		padding: 0 .24rem 0 .06rem;
		text-align: center;
		text-indent: 0;
		/*position: absolute;*/
		color: #888;
		font-size: .28rem;
		line-height: .5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		border: .02rem solid #ccc; 
	}
	/*.phone-note {
		position: absolute;
		left: 1rem;
	}
	.phone-red {
		left: 1rem;
		z-index: 2;
	}	
	.phone-cancel {
		position: absolute;
		right: 1rem;
		top: .06rem;
		width: .4rem;
		height: .4rem;
		line-height: .36rem;
		border-radius: .2rem;
		background: #ccc;
		text-align: center;
		font-size: .3rem;
		color: #fff;
	}*/
	.consult {
		float: right;
		padding: .3rem;
		margin-bottom: 1rem;
		color: #00bcd4;
	}
	.order-Page {
		position:fixed;
		z-index:92;
		right:0;
		bottom:0;
		left:0;
		width:100%;
		height:1rem;
		border:1px solid #ddd;
		background: #fff;
		
	}
	.product-price {
		float:left;
		font-size: .24rem;
		line-height: 1rem;
		text-indent:.2rem;
		
	}
	.product-price-sale {
		font-style: normal;
		color:#ff8300;
	}
	.product-price-change {
		font-style: normal;
		color:#ff8300;
	}
	.product-price-buy {
		font-size: .48rem;
	}
	.changeColor {
		color:#c1c1c1;
		
	}
	.submit-order {
		float:right;
		background:#ff9800;
		height:1rem;
		width:50%;
	}
	.submit-order-btn {
		display: block;
		font-size: .36rem;
		text-align: center;
		color:#fff;
		line-height: 1rem;
	}
</style>
