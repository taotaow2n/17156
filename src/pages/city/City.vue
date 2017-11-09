<template>
	<div>
 		<city-header @change = "handleTypeChange" />	
 		<city-domestic v-if="isDomestic" />
 		<city-foreign v-else />
 	</div>
</template>

<script>

import HeaderComponent from "./components/CityHeader";
import DomesticComponent from "./components/CityDomestic";
import ForeignComponent from "./components/CityForeign";

export default {

	data() {
		return {
			isDomestic: true
		}
	},

	methods: {
		handleTypeChange(isDomestic) {
			this.isDomestic = isDomestic;
		}
	},

	components: {
		"city-header": HeaderComponent,
		"city-domestic": DomesticComponent,
		"city-foreign": ForeignComponent
	}
}
</script>

<style>
</style>
