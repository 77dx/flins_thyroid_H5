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
				<view v-for="(item,index) in newsList" :key="index">
					<!-- 无图 -->
					<view class="tab_list_1" v-if="!item.images">
						<view class="tab_list_1_inner">
							<view class="article_title">{{item.title}}</view>
							<view class="time_style">{{item.create_time}}</view>
							<view class="time_style read_num">{{item.view_num}} 阅读</view>
						</view>
					</view>
					<!-- 有图片 -->
					<view class="tab_list_2" v-if="item.images">
						<view class="tab_list_2_right" style="margin-left: 32rpx;">
							<view class="article_title">{{item.title}}</view>
							<view>
								<view class="time_style">{{item.create_time}}</view>
								<view class="time_style read_num">{{item.view_num}} 阅读</view>
							</view>
						</view>
						<image class="tab_list_2_img" style="margin-right: 32rpx;" :src="item.images"></image>
					</view>
				</view>
			</view>
			<!-- 热门回答 -->
			<view class="tab_list" v-if="tabCurrentIndex === 1">
				<view class="tab_list_1" v-for="(item,index) in questionList" :key="index" @click="toQuestionDetail(item.id)"> 
					<view class="tab_list_1_inner">
						<view class="article_title">{{item.title}}</view>
						<view class="img_list" v-if="item.images">
							<image v-for="(imgItem,index2) in item.images" :key="index2" class="img_list_style" :src="imgItem.s"></image>
						</view>
						<view class="author_info">
							<image class="author_img" :src="item.avatar.s"></image>
							<view class="author_name">{{item.nickname}}</view>
							<view class="author_name">{{item.create_time}}</view>
						</view>
						<view>
							<view class="time_style">{{item.answer_num}} 回答</view>
							<view class="time_style read_num">{{item.like_num}} 点赞</view>
							<view class="time_style read_num">{{item.view_num}} 浏览</view>
						</view>
						<view class="article_money">
							<image class="money_img" src="../../static/img/icon_shang@2x.png"></image>
							<view class="money_num">{{item.price}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 热门资料 -->
			<view class="tab_list" v-if="tabCurrentIndex === 2">
				<view v-for="(item,index) in fileDataList" :key="index">
					<!-- 有图片文档 -->
					<view class="tab_list_2" v-if="item.type == 2 && item.images"  @tap="toFileData(item.id,item.type)">
						<image class="tab_list_2_img" :src="item.images[0]"></image>
						<view class="tab_list_2_right">
							<view class="article_title">{{item.title}}</view>
							<view class="tab_list2_label">{{item.tag_title}}</view>
							<view class="tab_list_botton">
								<view class="watch_people">{{item.view_num}}人看过</view>
								<view class="botton_right">
									<view class="level_style">Lv{{item.level_id}}</view>
									<view class="money_style">￥{{item.price}}</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 视频或无图片文档 -->
					<view class="tab_list_1" v-if="item.type == 1 || item.type == 2 || !item.images" @tap="toFileData(item.id,item.type)">
						<view class="tab_list_1_inner">
							<view class="article_title">{{item.title}}</view>
							<view class="tab_list2_label">{{item.tag_title}}</view>
							<view class="tab_list_botton">
								<view class="watch_people" v-if="item.type == 1">视频. {{item.view_num}}人看过</view>
								<view class="watch_people" v-if="item.type == 2">文档. {{item.view_num}}人看过</view>
								<view class="botton_right">
									<view class="level_style">Lv{{item.level_id}}</view>
									<view class="money_style">￥{{item.price}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 达人 -->
			<view class="tab_list" v-if="tabCurrentIndex === 3">
				<view class="tab_list_3" v-for="(item,index) in peopleList" :key="index" @tap="toTalent(item.id)">
					<image class="tab_list_img" :src="item.avatar.s"></image>
					<view class="tab_list_msg">
						<text class="tab_list_name">{{item.nickname}}</text>
						<view class="tab_list_label" v-if="item.tag" v-for="(items,index2) in item.tag" :key="index2">{{items}}</view>
					</view>
					<view class="focus_btn" v-if="item.is_follow == 0" @tap.stop="focusPeople(item.id,1)">关 注</view>
					<view class="focus_btn is_focused" v-if="item.is_follow == 1" @tap.stop="focusPeople(item.id,2)">已关注</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { people_list,user_add_follow,question_list,files_data_list,news_list } from '../../api/api.js'
	export default {
		data() {
			return {
				access_token:'',
				member_id:'',
				searchContent: '',
				tabCurrentIndex: 0,
				questionList: [],
				peopleList: [],
				fileDataList: [],
				newsList: [],
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
			that.getNews()
		},
		methods: {
			// tab切换
			tabClick(index){
				let that = this
				that.tabCurrentIndex = index
				if(index == 3){//达人
					that.getPeopleList()
				}else if(index == 1){//热门回答
					that.getHotQuestion()
				}else if(index == 2){//热门资料
					that.getHotFileData()
				}else if(index == 0){//新闻
					that.getNews()
				}
			},
			// 点击去资料详情
			toFileData(id,type){
				let that = this
				if(type == 1){ //视频
					uni.navigateTo({
						url: '../videoDetail/videoDetail?id=' + id
					})
				}else if(type == 2){ //文档
					uni.navigateTo({
						url: '../fileDetail/fileDetail?id=' + id
					})
				}
			},
			//点击跳转问题
			toQuestionDetail(id){
				uni.navigateTo({
					url: '../questionDetail/questionDetail?id=' + id,
				})
			},
			//获取新闻
			getNews(){
				let that = this
				let params = {
					page: 1,
					limit: 10
				}
				news_list(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.newsList = res.data.data.list
					}
				})
			},
			// 获取热门问答列表
			getHotQuestion(){
				let that = this
				question_list({
					member_id: that.member_id,
					access_token: that.access_token,
					type: 3, //1-推荐，2-最新，3-热门，4-冷门
					seartag: '',//筛选的标签（多个标签 id 用,号隔开）
					reward : 2,//1-升序，2-降序
					page: 1,
					limit: 10
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.questionList = res.data.data.list
					}
				})
			},
			//获取热门资料
			getHotFileData(){
				let that = this
				let params = {
					page: 1,
					limit: 10
				}
				files_data_list(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.fileDataList = res.data.data.list
					}
				})
			},
			// 获取达人列表
			getPeopleList(){
				let that = this
				people_list({
					member_id: that.member_id,
					access_token: that.access_token,
					page: 1,
					limit : 10
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.peopleList = res.data.data.list
					}
				})
			},
			// 跳转达人主页
			toTalent(id){
				uni.navigateTo({
				    url: '../talentDetail/talentDetail?id=' + id 
				});
			},
			// 关注达人
			focusPeople(id,type){
				let that = this
				user_add_follow({
					member_id: that.member_id,
					access_token: that.access_token,
					to_member_id: id,
				}).then(res => {
					console.log(res)
					let msg
					if(res.data.code == 1){
						if(type == 1){
							 msg = "关注达人成功!"
						}else if(type == 2){
							msg = "取消成功!"
						}
						uni.showToast({
							title: msg,
							duration: 2000,
							icon: 'none'
						});
						that.getPeopleList()
					}else{
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							icon: 'none'
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
