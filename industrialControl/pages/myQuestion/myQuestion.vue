<template>
	<view class="content">
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
			</view>
			<!-- 显示区域 -->
			<!-- 指定回答 -->
			<view class="tab_list" v-if="tabCurrentIndex === 0">
				<view class="tab_list_1">
					<view class="tab_list_1_inner">
						<view class="article_title article_title1"><text style="color: #888888;">[未采纳]</text> 2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="article_title answer">答: 2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="time_style">2019.09.09</view>
						<view class="time_style read_num">@工控达人</view>
						<view class="no_answer">待回答</view>
					</view>
				</view>
				<view class="tab_list_1">
					<view class="tab_list_1_inner">
						<view class="article_title article_title1"><text style="color: #888888;">[已采纳]</text> 2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="article_title answer"><text class="best">最佳</text>答: 2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="time_style">2019.09.09</view>
						<view class="time_style read_num">@工控达人</view>
						<view class="no_answer">已回答</view>
					</view>
				</view>
			</view>
			<!-- 普通回答 -->
			<view class="tab_list" v-if="tabCurrentIndex === 1">
				<view class="tab_list_1">
					<view class="tab_list_1_inner">
						<view class="article_title article_title1"><text style="color: #888888;">[未采纳]</text> 2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="article_title answer">答: 2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="time_style">2019.09.09</view>
						<view class="time_style read_num">2 回答</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				navList: [
					{
						state: 0,
						text: '指定提问'
					},
					{
						state: 1,
						text: '普通提问'
					}
				],
			}
		},
		onLoad() {

		},
		methods: {
			// tab切换
			tabClick(index){
				this.tabCurrentIndex = index
			}
		}
	}
</script>

<style lang="scss">
	.article_title1{
		color: #666666;
		font-size: 24rpx;
	}
	.answer{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 20rpx;
	}
	.best{
		width: 50rpx;
		height: 28rpx;
		background: #E93B2E;
		border-radius: 5px;
		line-height: 28rpx;
		font-size: 20rpx;
		color: #ffffff;
		text-align: center;
		display: inline-block;
		margin-right: 5rpx;
	}
	.no_answer{
		color: #005cb7;
		font-size: 20rpx;
		display: inline-block;
		margin-left: 30rpx;
	}
</style>
