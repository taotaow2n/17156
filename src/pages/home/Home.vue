<template>
  	<div>
  		<home-header />
  		<weekend-list />
  	</div>
</template>

<script>

import HeaderComponent from "./Header";
import WeekendList from "./Weekend"; 

export default {
	components: {
		"home-header": HeaderComponent,
		"weekend-list": WeekendList
	}
}
</script>

<style>
	
</style>
