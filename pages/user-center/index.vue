<template>
	<view class="content">
		<Developing></Developing>
		<Tabbar :activeTab="3"></Tabbar>
	</view>
</template>

<script>
	import request from '@/api/request.js'
	import Tabbar from '@/components/tabbar/index.vue'
	import Developing from '@/components/developing/index.vue'
	export default {
		data() {
			return {}
		},
		components: {
			Tabbar,
			Developing
		},
		onLoad() {},
	}
</script>

<style lang='scss' scoped>
</style>
