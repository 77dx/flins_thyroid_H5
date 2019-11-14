<template>
	<view class="content">
		<!-- 搜索 -->
		<view class="searchBox">
			<view class="searchBox_inner">
				<image class="search_img" src="../../static/img/icon_search@2x.png"></image>
				<input class="search_input" type="text" v-model="searchContent" placeholder="点击搜索" />
			</view>
		</view>
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
				<image class="screening" src="../../static/img/btn_sel@2x.png"  @tap="openPopup"></image>
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
				<!-- 无图 -->
				<view class="tab_list_4">
					<view class="tab_list_4_inner">
						<view class="article_title">2019年全国"安全生产月"和"安全生产万里行"活动开幕式活动开幕式活动开幕式</view>
						<view class="tab_list2_label">活动</view>
						<view class="watch_people">100人看过</view>
						<view class="botton_right">
							<view class="level_style">Lv1</view>
							<view class="money_style">￥10.00</view>
						</view>
					</view>
				</view>
				<!-- 有图  -->
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
			
		</view>
		
		<!-- 弹出框 -->
		<uni-popup ref="popup" type="center"> 
			<view class="popup_content">
				<view class="popup_title">筛 选</view>
				<view class="popup_selected">
					<view>已选</view>
					<view class="自动化">仪器控</view>
				</view>
				<view class="popup_list">
					<view>自控仪表</view>
					<view class="popup_label">仪器控</view>
				</view>
				<view class="popup_list">
					<view>可编程控制器</view>
					<view class="popup_label">仪器控</view>
				</view>
				<view class="popup_button">
					<view class="popup_sure">确 定</view>
					<view class="popup_sure popup_reset">重 置</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components: {
			uniPopup,
			uniCollapse,
			uniCollapseItem
			},
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
					},
					{
						state: 2,
						text: '分享资料'
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
			},
			// 打开弹出层
			openPopup(){
				this.$refs.popup.open()
			},
			// 关闭弹出层
			closePopup(){
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>
	
</style>
