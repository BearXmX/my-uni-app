<template>
	<view class="content">
		<Developing></Developing>
		<Tabbar :activeTab="0"></Tabbar>
	</view>
</template>

<script>
	import request from '@/api/request.js'
	import {
		formatTime
	} from '@/utils/index.js'
	import Tabbar from '@/components/tabbar/index.vue'
	import Developing from '@/components/developing/index.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			Tabbar,
			Developing
		},
		onLoad() {},
		methods: {
			async click() {
				const res = await request({
					url: '/users'
				})
				console.log(res, process.env.NODE_ENV)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.btn {
		width: 200px;
		border: none;
		outline: none;
	}
</style>
