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
			<!-- 视频列表 -->
			<view class="tab_list" v-if="tabCurrentIndex === 0">
				<view v-for="(item,index) in videoList" :key="index" @tap="toVideoDetail(item.id)">
					<!--有图 -->
					<view class="tab_list_2" v-if="item.images">
						<image class="tab_list_2_img" :src="item.images[0]"></image>
						<view class="tab_list_2_right">
							<view class="article_title">{{item.title}}</view>
							<view class="tab_list2_label">活动</view>
							<view class="tab_list_botton">
								<view class="watch_people">{{item.view_num}}人看过</view>
								<view class="botton_right">
									<view class="level_style">{{item.level_name}}</view>
									<view class="money_style">￥{{item.price}}</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 无图 -->
					<view class="tab_list_4" v-if="!item.images">
						<view class="tab_list_4_inner">
							<view class="article_title">{{item.title}}</view>
							<view class="tab_list2_label">活动</view>
							<view class="watch_people">{{item.view_num}}人看过</view>
							<view class="botton_right">
								<view class="level_style">{{item.level_name}}</view>
								<view class="money_style">￥{{item.price}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 文档 -->
			<view class="tab_list" v-if="tabCurrentIndex === 1">
				<view v-for="(item,index) in filesList" :key="index" @tap="toFileDetail(item.id)">
					<!-- 无图 -->
					<view class="tab_list_4" v-if="!item.images">
						<view class="tab_list_4_inner">
							<view class="article_title">{{item.title}}</view>
							<view class="tab_list2_label">活动</view>
							<view class="watch_people">{{item.view_num}}人看过</view>
							<view class="botton_right">
								<view class="level_style">{{item.level_name}}</view>
								<view class="money_style">￥{{item.price}}</view>
							</view>
						</view>
					</view>
					<!-- 有图  -->
					<view class="tab_list_2" v-if="item.images">
						<image class="tab_list_2_img" :src="item.images[0]"></image>
						<view class="tab_list_2_right">
							<view class="article_title">{{item.title}}</view>
							<view class="tab_list2_label">活动</view>
							<view class="tab_list_botton">
								<view class="watch_people">{{item.view_num}}人看过</view>
								<view class="botton_right">
									<view class="level_style">{{item.level_name}}</view>
									<view class="money_style">￥{{item.price}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 分享资料 -->
			<view class="info_share" v-if="tabCurrentIndex === 2">
				<view class="info_share_tab">
					<view class="info_share_title">资料分享说明:</view>
					<view class="info_share_content">如果你有好的资料，可以通过以下方式在平台上给大家分享如果你有好的资料，可以通过以下方式在平台上给大家分享</view>
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
	import { video_list,files_list} from '../../api/api.js'
	export default {
		components: {
			uniPopup
			},
		data() {
			return {
				access_token:'',
				member_id:'',
				searchContent: '',
				tabCurrentIndex: 0,
				videoList: [],
				filesList: [],
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
			let that = this
			uni.getStorage({
			    key: 'access_token',
			    success: function (res) {
			        that.access_token = res.data
			    }
			});
			uni.getStorage({
			    key: 'member_id',
			    success: function (res) {
			        that.member_id = res.data
			    }
			});
			console.log(that.member_id)
			console.log(that.access_token)
			that.getVideoList()
			that.getFilesList()
		},
		methods: {
			// tab切换
			tabClick(index){
				let that = this
				that.tabCurrentIndex = index
				if(index == 0){//视频
					that.getVideoList()
				}
			},
			// 打开弹出层
			openPopup(){
				this.$refs.popup.open()
			},
			// 关闭弹出层
			closePopup(){
				this.$refs.popup.close()
			},
			// 获取视频列表
			getVideoList(){
				let that = this
				let params = {
					page: 1,
					limit: 10,
					cateid: ''
				}
				video_list(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.videoList = res.data.data.list
					}
				})
			},
			//获取文档列表
			getFilesList(){
				let that = this
				let params = {
					page: 1,
					limit: 10,
					cateid: ''
				}
				files_list(params).then(res =>{
					console.log(res)
					if(res.data.code == 1){
						that.filesList = res.data.data.list
					}
				})
			},
			// 跳转视频详情
			toVideoDetail(id){
				uni.navigateTo({
				    url: '../videoDetail/videoDetail?id=' + id
				});
			},
			// 跳转文档详情
			toFileDetail(id){
				uni.navigateTo({
					url: '../fileDetail/fileDetail?id=' + id
				});
			}
		}
	}
</script>

<style>
	
</style>
