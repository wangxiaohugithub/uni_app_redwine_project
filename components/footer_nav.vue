<template>
	<view>
		<view class="tab">
			<view class="tab-box" @click="change_page(index)" :class="now_page_index==index?'tab-box-color':''" v-for="(item,index) in footer_nav" :key="index">
				<image style="width: 32rpx; height: 32rpx;" :src="now_page_index == index?item.select_icon:item.icon"></image>
				<text style="margin-left: 10rpx;" >{{item.name}}</text>
			</view>
		</view>
		<!-- <view v-for="(item.index) in list" :key="index">{{item.name}}</view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data(){
			return{
				list:[]
			}
		},
		computed:mapState(['footer_nav','now_page_index']),
		methods:{
			...mapMutations(['change_page']),
		}
	}
</script>

<style lang="scss">
	.tab {
		position: fixed;
		z-index: 999;
		height: 100rpx;
		width: 750rpx;
		bottom: 0;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		font-size: 21rpx;
		color: #bbbdbf;
		box-shadow: 4rpx 4rpx 10rpx #efefef;
	}
	.tab-box{
		width: 160rpx;
		height: 56rpx;
		background-color: #ebecec;
		border-radius: 28rpx 28rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.tab-box-color{
		color: #f33628;
		background-color: #fee7e5;
	}
</style>
