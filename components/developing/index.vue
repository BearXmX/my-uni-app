<template>
	<view class="developing">
		<img :src="developingUrl" mode="" class="developing-img"></image>
		<p class="developing-text">该功能正在开发中...敬请期待</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				developingUrl: 'http://simg01.gaodunwangxiao.com/uploadimgs/tmp/upload/202202/13/8b53d_20220213143320.png'
			}
		}

	}
</script>

<style lang="scss" scoped>
	.developing {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 50%;

		.developing-img {
			width: 400rpx;
			height: 300rpx;
		}

		.developing-text {
			font-size: $my-app-middle-text-size;
			margin-top: 10rpx;
			color: $my-app-text-color;
		}
	}
</style>
