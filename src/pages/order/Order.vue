<template>
	<div>
		<order-number/>
		<submit-number/>
	</div>


</template>

<script>
	import NumberComponent from "./Number";
	import SubmitComponent from "./Submit";
	export default {
	components: {
		 "order-number":NumberComponent,
         "submit-number":SubmitComponent
	}
}
</script>

<style>
</style>