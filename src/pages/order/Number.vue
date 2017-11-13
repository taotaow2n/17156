<template>
	<div>
	  <div class="buyNumber">
	  	 <div class="mostNumber">
	  	 	<span class="mostNumber-buy">购买数量</span>
	  	 	<span class="mostNumber-five">最多买五张</span>
	  	 </div>
	  	 <div class="changeNumber" id="changeNumber">
	  	 	<span class="changeNumber-minus iconfont" ref="minus" @click="handleClickMinus">&#xe649;</span>
	  	 	<span class="changeNumber-minus-add">{{counter}}</span>
	  	 	<span class="changeNumber-add iconfont" ref="add" @click="handleClickAdd">&#xe600;</span>
	  	 </div>
	  </div>
	</div>
</template>
<script src="./vue.js"></script>

<script>
export default{
	data:function(){
		return{
			counter:1
		}
	},

	methods:{
		handleClickMinus:function(){
			if(this.counter > 1){
                this.counter = parseInt(this.counter) - 1;
            }
			this.changeColor();
		},
		handleClickAdd:function(){
			if(this.counter>4){
				this.counter =5
			}else{
				this.counter = parseInt(this.counter) + 1;
			}
			this.changeColor();
		},
		changeColor: function() {
			if(this.counter == 1) {
				console.log(this);
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

<style>
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
	}
	.exchange-logoMinusOne{
		float:left;
		display: inline;
		border-right:.02rem solid #c7ced4;
		width:.57rem;
		height:.56rem;
		text-align: center;
		line-height: .56rem;
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
	.exchange-logoMinusTwo{
		float:left;
		display: inline;
		border-right:.02rem solid #c7ced4;
		width:.57rem;
		height:.56rem;
		text-align: center;
		line-height: .56rem;
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
	
</style>