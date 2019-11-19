<template>
	<view class="video_detail">
		<!--头部导航 -->
		<view class="navigation_Bar">
			返回
		</view>
		<!-- 视频预览 -->
		<view class="video_detail_preview">
		
		</view>
		<!-- 简介 -->
		<view class="video_detail_intro">
			<view class="intro_title">
				新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
			</view>
			<view class="intro_info">
				<view class="intro_labels">
					<view class="intro_label_1">标签</view>
					<view class="intro_label_1">标签</view>
				</view>
				<view class="intro_auth">
					<view class="intro_auth_left">
						<view>贡献人: 张三</view>
					</view>
					<view class="intro_auth_right">
						<view class="comment_num">
							<view>10(评论)</view>
						</view>
						<view class="like_num">
							<view>10(点赞)</view>
						</view>
						<view class="scan_num">
							<view>10(浏览)</view>
						</view>
					</view>
				</view>
			</view>
			<view class="intro_content">
				<view class="intro_content_detail">
					<text style="color: #333333;">介绍：</text>内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要
				</view>
			</view>
		</view>
		<!--相关视频 -->
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
								<view class="botton_right">
									<view class="level_style">Lv1</view>
									<view class="money_style">￥10.00</view>
								</view>
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
								<view class="botton_right">
									<view class="level_style">Lv1</view>
									<view class="money_style">￥10.00</view>
								</view>
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
		<!-- <view>付费购买后才能评论</view> -->
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
						text: '相关视频'
					},
					{
						state: 1,
						text: '用户评价'
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
