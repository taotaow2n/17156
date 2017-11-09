<template>
	<div>
		<city-search />
 		<city-list />
 		<city-aside />	
 	</div>
</template>

<script>

import SearchDomestic from "./domestic/CitySearch";
import ListDomestic from "./domestic/CityList";
import AsideDomestic from "./domestic/CityAside";

export default {
	components: {
		"city-search": SearchDomestic,
		"city-list": ListDomestic,
		"city-aside": AsideDomestic
	}
}
</script>

<style>
</style>
