<template>
	<view class="content">
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
			</view>
			<!-- 视频 -->
			<view class="tab_list" v-if="tabCurrentIndex === 0">
				<view class="tab_list_2">
					<image class="tab_list_2_img" src="../../static/img/test.jpeg"></image>
					<view class="tab_list_2_right">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式</view>
						<view class="tab_list2_label">活动</view>
						<view class="tab_list_botton">
							<view class="watch_people">100人看过</view>
						</view>
					</view>
				</view>
				<view class="tab_list_2">
					<image class="tab_list_2_img" src="../../static/img/test.jpeg"></image>
					<view class="tab_list_2_right">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式</view>
						<view class="tab_list2_label">活动</view>
						<view class="tab_list_botton">
							<view class="watch_people">100人看过</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 文档 -->
			<view class="tab_list" v-if="tabCurrentIndex === 1">
				<!-- 有图 -->
				<view class="tab_list_2">
					<image class="tab_list_2_img" src="../../static/img/test.jpeg"></image>
					<view class="tab_list_2_right">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式</view>
						<view class="tab_list2_label">活动</view>
						<view class="tab_list_botton">
							<view class="watch_people">100人看过</view>
						</view>
					</view>
				</view>
				<!-- 无图 -->
				<view class="tab_list_1">
					<view class="tab_list_1_inner">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="time_style">活动</view>
						<view class="time_style read_num">100人看过</view>
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
				tabCurrentIndex: 0,
				navList: [
					{
						state: 0,
						text: '视频'
					},
					{
						state: 1,
						text: '文档'
					}
				],
			}
		},
		methods: {
			// tab切换
			tabClick(index){
				this.tabCurrentIndex = index
			}
		}
	}
</script>

<style>

</style>
