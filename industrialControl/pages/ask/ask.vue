<template>
	<view class="content">
		<!-- 搜索 -->
		<view class="searchBox">
			<view class="searchBox_inner">
				<image class="search_img" src="../../static/img/icon_search@2x.png"></image>
				<input class="search_input" type="text" v-model="searchContent" placeholder="点击搜索" />
			</view>
		</view>
		<!-- tab切换 -->
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
				<image class="screening" src="../../static/img/btn_sel@2x.png"  @tap="openPopup"></image>
			</view>
			<!-- 推荐 -->
			<view class="tab_list" v-if="tabCurrentIndex == 0">
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
							<image class="money_img" src="../../static/img/icon_money@2x.png"></image>
							<view class="money_num">20</view>
							<image class="money_img money_img1" src="../../static/img/icon_bu@2x.png"></image>
							<view class="money_num money_num1">20</view>
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
							<image class="money_img" src="../../static/img/icon_money@2x.png"></image>
							<view class="money_num">20</view>
							<image class="money_img money_img1" src="../../static/img/icon_bu@2x.png"></image>
							<view class="money_num money_num1">20</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 最新 -->
			<view class="tab_list" v-if="tabCurrentIndex == 1">
				最新
			</view>
			<!-- 热门 -->
			<view class="tab_list" v-if="tabCurrentIndex == 2">
				热门
			</view>
			<!-- 冷门 -->
			<view class="tab_list" v-if="tabCurrentIndex == 3">
				冷门
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
				searchContent:'',
				tabCurrentIndex:0,
				navList: [
					{
						state: 0,
						text: '推荐'
					},
					{
						state: 1,
						text: '最新'
					},
					{
						state: 2,
						text: '热门'
					},
					{
						state: 3,
						text: '冷门'
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

<style lang="scss">
	
</style>
