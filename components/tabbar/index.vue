<template>
	<view class="bottom-tabbar">
		<view class="tabbar-content">
			<view class="tabbar-item" :class="{'active-tabbar-item': activeTab === item.key}"
				v-for="(item,index) in tabbar" :Key='item.key' @click="toggleTab(item.url)">
				<i class="iconfont" v-if='item.key === 0'>&#xe600;</i>
				<i class="iconfont" v-if='item.key === 1'>&#xe62f;</i>
				<i class="iconfont" v-if='item.key === 2'>&#xe61b;</i>
				<i class="iconfont" v-if='item.key === 3'>&#xe72a;</i>
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			activeTab: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				tabbar: [{
					key: 0,
					title: '店铺',
					url: '/pages/index/index'
				}, {
					key: 1,
					title: '分类',
					url: '/pages/category/index'
				}, {
					key: 2,
					title: '购物车',
					url: '/pages/shopping-cart/index'
				}, {
					key: 3,
					title: '个人中心',
					url: '/pages/user-center/index'
				}]
			}
		},
		methods: {
			toggleTab(url) {
				uni.reLaunch({
					url,
					animationType: 'fade-in',
					fail: (err => {
						console.log(err)
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottom-tabbar {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 130rpx;
		background-color: #fff;
		box-shadow: 0 0 10rpx 6rpx $my-app-shadow;
		border-top-left-radius: 28rpx;
		border-top-right-radius: 28rpx;
		padding-bottom: 20rpx;
		z-index: 999;

		.tabbar-content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 40rpx;
			height: 100%;

			.tabbar-item {
				padding: 0 32rpx;
				font-size: $my-app-base-text-size;
				text-align: center;
				color: $my-app-text-color;

				.iconfont {
					display: block;
				}
			}

			.active-tabbar-item {
				font-size: $my-app-large-text-size;
				color: $my-app-text-highlight;
				font-weight: 600;
			}
		}
	}
</style>
