<template>
	<div>
 		<order-header/>
 		<order-main />
 		<order-message />
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import MainComponent from "./Main";
import MessageComponent from "./Message";


export default {
	components: {
		"order-header": HeaderComponent,
		"order-main": MainComponent,
		"order-message": MessageComponent

	}
}
</script>

<style>
</style>
