<template>
	<div id="order-message" >
		<div class="buyNumber">
		  	<div class="mostNumber">
		  	 	<span class="mostNumber-buy">购买数量</span>
		  	 	<span class="mostNumber-five">最多买五张</span>
		  	</div>
		  	<div class="changeNumber" id="changeNumber">
		  	 	<span class="changeNumber-minus iconfont" ref="minus" @click="handleClickMinus">&#xe649;</span>
		  	 	<span class="changeNumber-minus-add">{{counter}}</span>
		  	 	<span class="changeNumber-add iconfont" ref="add" @click="handleClickAdd" >&#xe600;</span>
		  	</div>
		</div>	
 		<!-- <div v-for="(item,index) in userarr">
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
 		</div> -->

 		<ul  class='personMsg' v-for='item in (counter) '>
    		<li>
    			<label :for='"vistorName"+item'>游客{{item}}</label><input type="text" placeholder ="游客姓名" :id='"vistorName"+item' ref='inp1'  @blur='handleNameblur' @focus='handleNamefouce'>
    		</li>
    		<li v-if="item==1">
    			<label for="vistorTel">手机号</label><span class="countryNumber">+86></span><input type="text" placeholder="请填写手机号" id="vistorTel" :class="{InpWarn:noInp}" @blur='handleTelblur' @focus='handleTelfouce'>
    		</li>
    		<li>
    			<label :for='"vistorId"+item'>身份证</label><input type="text" placeholder="请填写正确的身份证号码" :id='"vistorId"+item' :class="{InpWarn:noInp}" @blur='handleIdblur' @focus='handleIdfouce'>
    		</li>

    	</ul>
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
			noInp:false,
			userarr:[1]
	}
},
	methods: {
		handleClickMinus:function(){
			if(this.counter > 1){
                this.counter = parseInt(this.counter) - 1;
                this.userarr.length-=1;
            }
            this.changeColor();
		},
		handleClickAdd:function(){
			if(this.counter>4){
				this.counter =5
			}else{
				this.counter = parseInt(this.counter) + 1;
				this.userarr.push(this.counter);
			}	
			this.changeColor();
		},
		handleNameblur:function(e){
			if(e.target.value==""){
			e.target.value="游客姓名";
			e.target.style.color="red";
		}},
		handleNamefouce:function(e){
			if(e.target.value=="游客姓名"){
			e.target.value="";
			e.target.style.color="#000";
		}},
		handleTelblur:function(e){
			if(e.target.value==""){
			e.target.value="请填写手机号";
			e.target.style.color="red";
		}},
		handleTelfouce:function(e){
			if(e.target.value=="请填写手机号"){
			e.target.value="";
			e.target.style.color="#000";
		}},
		handleIdblur:function(e){
			if(e.target.value==""){
			e.target.value="请填写正确的身份证号码";
			e.target.style.color="red";
		}},
		handleIdfouce:function(e){
			if(e.target.value=="请填写正确的身份证号码"){
			e.target.value="";
			e.target.style.color="#000";
		}},
		changeColor: function() {
			if(this.counter == 1) {
				this.$refs.minus.style.background = "#ddd";
				this.$refs.minus.style.color = "#ccc";
				this.$refs.add.style.background = "#00afc7";
				this.$refs.add.style.color = "#fff";
			}else if(this.counter > 1 && this.counter < 5) {
				this.$refs.minus.style.background = "#00afc7";
				this.$refs.minus.style.color = "#fff";
				this.$refs.add.style.background = "#00afc7";
			}else {
				this.$refs.add.style.background = "#ddd";
				this.$refs.add.style.color = "#ccc";
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

	.personMsg{
		margin-bottom: 0.2rem;
	}
	.personMsg li{
		overflow: hidden;
	    min-height: .5rem;
	    padding: .24rem;
	    background: #fff;
	    border-bottom: 0.02rem solid #eee;

	}
	.personMsg li label{
		width: 1.6rem;
		display: block;
		float: left;
		line-height: 0.5rem;
	}

	.personMsg li .addressList{
		float: right;
		line-height: 0.5rem;
		color: #00afc7;
	}
	.personMsg li input{
		border: none;
		
	}
	.InpWarn{
		color: red;
	} 
	.personMsg li .countryNumber{
		display: block;
		float: left;
		border:1px solid #ccc;
		color: #ccc;
		padding: 0.1rem 0.1rem;
		margin-right: 0.15rem;
	}
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
