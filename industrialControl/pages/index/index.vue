<template>
	<view class="content">
		<!-- 搜索 -->
		<view class="searchBox">
			<view class="searchBox_inner">
				<image class="search_img" src="../../static/img/icon_search@2x.png"></image>
				<input class="search_input" type="text" v-model="searchContent" placeholder="点击搜索" />
			</view>
		   
		</view>
		<!-- 轮播 -->
		<view class="banner">
			<!-- 改变指示点样式https://ext.dcloud.net.cn/plugin?id=284 -->
			<swiper class="swiper" indicator-dots=true autoplay=true interval=5000 >
			    <swiper-item>
			        <image class="banner_img" mode="aspectFill" src="../../static/img/banner.jpg"></image>
			    </swiper-item>
			    <swiper-item>
			        <image class="banner_img" mode="aspectFill" src="../../static/img/banner.jpg"></image>
			    </swiper-item>
			</swiper>
		</view>
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
			</view>
			<!-- 显示区域 -->
			<!-- 新闻 -->
			<view class="tab_list" v-if="tabCurrentIndex === 0">
				<!-- 无图 -->
				<view class="tab_list_1">
					<view class="tab_list_1_inner">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="time_style">2019.09.09</view>
						<view class="time_style read_num">10 阅读</view>
					</view>
				</view>
				<!-- 有图片 -->
				<view class="tab_list_2">
					<view class="tab_list_2_right" style="margin-left: 32rpx;">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式</view>
						<view>
							<view class="time_style">2019.09.09</view>
							<view class="time_style read_num">10 阅读</view>
						</view>
					</view>
					<image class="tab_list_2_img" style="margin-right: 32rpx;" src="../../static/img/test.jpeg"></image>
				</view>
			</view>
			<!-- 热门回答 -->
			<view class="tab_list" v-if="tabCurrentIndex === 1">
				<!-- 无图 -->
				<view class="tab_list_1">
					<view class="tab_list_1_inner">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="author_info">
							<image class="author_img" src="../../static/img/img_photo@2x.png"></image>
							<view class="author_name">张三</view>
							<view class="author_name">2019.09.01</view>
						</view>
						<view>
							<view class="time_style">10 回答</view>
							<view class="time_style read_num">10 点赞</view>
							<view class="time_style read_num">10 浏览</view>
						</view>
						<view class="article_money">
							<image class="money_img" src="../../static/img/icon_shang@2x.png"></image>
							<view class="money_num">20</view>
						</view>
					</view>
				</view>
				<!-- 有图  -->
				<view class="tab_list_1">
					<view class="tab_list_1_inner">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="img_list">
							<image class="img_list_style" src="../../static/img/test.jpeg"></image>
							<image class="img_list_style" src="../../static/img/test.jpeg"></image>
							<image class="img_list_style" src="../../static/img/test.jpeg"></image>
						</view>
						<view class="author_info">
							<image class="author_img" src="../../static/img/img_photo@2x.png"></image>
							<view class="author_name">张三</view>
							<view class="author_name">2019.09.01</view>
						</view>
						<view>
							<view class="time_style">10 回答</view>
							<view class="time_style read_num">10 点赞</view>
							<view class="time_style read_num">10 浏览</view>
						</view>
						<view class="article_money">
							<image class="money_img" src="../../static/img/icon_shang@2x.png"></image>
							<view class="money_num">20</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 热门资料 -->
			<view class="tab_list" v-if="tabCurrentIndex === 2">
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
			<!-- 达人 -->
			<view class="tab_list" v-if="tabCurrentIndex === 3">
				<view class="tab_list_3">
					<image class="tab_list_img" src="../../static/img/img_photo.png"></image>
					<view class="tab_list_msg">
						<text class="tab_list_name">张三</text>
						<view class="tab_list_label" v-for="(item,index) in labels" :key="index">{{item.label}}</view>
					</view>
					<view class="focus_btn">关 注</view>
				</view>
				<view class="tab_list_3">
					<image class="tab_list_img" src="../../static/img/img_photo.png"></image>
					<view class="tab_list_msg">
						<text class="tab_list_name">张三</text>
						<view class="tab_list_label" v-for="(item,index) in labels" :key="index">{{item.label}}</view>
					</view>
					<view class="focus_btn">关 注</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchContent: '',
				tabCurrentIndex: 0,
				navList: [
					{
						state: 0,
						text: '新闻'
					},
					{
						state: 1,
						text: '热门问答'
					},
					{
						state: 2,
						text: '热门资料'
					},
					{
						state: 3,
						text: '达人'
					}
				],
				labels: [
					{
						label: "自动化",
					},
					{
						label: "仪器控",
					}
				]
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
	
</style>
