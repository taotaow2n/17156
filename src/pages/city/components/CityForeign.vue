<template>
	<div>
		<city-search />
 		<city-list />
 		<city-aside />	
 	</div>
</template>

<script>

import SearchDomestic from "./foreign/CitySearch";
import ListDomestic from "./foreign/CityList";
import AsideDomestic from "./foreign/CityAside";

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
