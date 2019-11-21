<template>
	<view class="video_detail">
		<!-- 视频预览 -->
		<view class="video_detail_preview">
			<!-- is_view: 0: 可以看 1: 不可以看 -->
			<video style="width: 100%;height: 100%;" v-if="videoDetail.is_view == 0" objectFit="fill" :src="videoDetail.videourl" controls></video>
			<view class="no_view" v-if="videoDetail.is_view == 1">
				<image class="lock_img" src="../../static/img/icon_lock@2x.png" mode=""></image>
				<view class="to_buy" @tap="toBuy">{{videoDetail.price}}元购买</view>
				<view v-if="videoDetail.is_level == 1" class="to_buy" style="background: transparent;color: #F5BC6E;">Lv.{{videoDetail.level_id}}会员</view>
			</view>
		</view>
		<!-- 简介 -->
		<view class="video_detail_intro">
			<view class="intro_title">{{videoDetail.title}}</view>
			<view class="intro_info">
				<view class="intro_labels">
					<view class="intro_label_1">{{videoDetail.tag_title}}</view>
				</view>
				<view class="intro_auth">
					<view class="intro_auth_left">
						<view class="intro_auth_left_inner">贡献人: {{videoDetail.devote}}</view>
					</view>
					<view class="comment_list_right">
						<view class="zan_num" style="margin-right: 10rpx;">{{videoDetail.comments_num}}</view>
						<image class="answer_time_img" src="../../static/img/btn_comments@2x.png" mode=""></image>
						<view class="zan_num">{{videoDetail.like_num}}</view>
						<image class="answer_time_img" src="../../static/img/btn_zan@2x.png" mode=""></image>
						<view class="zan_num">{{videoDetail.view_num}}</view>
						<image class="answer_time_img" src="../../static/img/btn_scan@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="intro_content">
				<view class="intro_content_detail">
					<text style="color: #333333;font-size: 26rpx;">介绍：</text>
					{{videoDetail.describe}}
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
					<view v-for="(item,index) in recommendList" :key="index">
						<!-- 有图 -->
						<view class="tab_list_2" >
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
						<!-- 无图 -->
						<view class="tab_list_1">
							<view class="tab_list_1_inner">
								<view class="article_title">{{item.title}}</view>
								<view class="tab_list2_label">{{item.tag_title}}</view>
								<view class="tab_list_botton">
									<view class="watch_people" v-if="item.type == 1">视频 {{item.view_num}}人看过</view>
									<view class="watch_people" v-if="item.type == 2">文档 {{item.view_num}}人看过</view>
									<view class="botton_right">
										<view class="level_style">Lv{{item.level_id}}</view>
										<view class="money_style">￥{{item.price}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 评论 -->
				<view class="tab_list" v-if="tabCurrentIndex === 1">
					<view class="comment_content" v-if="commentList.length > 0">
						<view class="comment_list" v-for="(item,index) in commentList" :key="index">
							<view class="comment_list_first">
								<view class="comment_list_left">
									<image class="author_img" :src="item.avatar.s" mode=""></image>
									<view class="author_name">{{item.nickname}}</view>
								</view>
								<view class="comment_list_right">
									<view class="zan_num">{{item.like_num}}</view>
									<image class="zan_img" src="../../static/img/btn_zan@2x.png" mode=""></image>
								</view>
							</view>
							<view class="comment_inner_comment">{{item.content}}<view class="comment_inner_comment_time">{{item.create_time}}</view></view>
						</view>
					</view>
					<view v-else class="no_data">暂无评论...</view>
				</view>	
			</view>
		</view>
		<view class="popup_content" v-if="is_cover"></view>
		<!-- 视频未达到级别弹框 -->
		<view class="popup_shadow" v-if="is_no_level">
			<view class="popup_tips">本视频需要会员级别达到Lv2才能购买观看，还需努力哦~</view>
			<view class="popup_know" @tap="konwBtn">知道了</view>
		</view>
		<!-- 视频购买弹框 -->
		<view class="popup_shadow" style="height: 380rpx;" v-if="is_buy_video">
			<view class="buy_title">观看购买</view>
			<view class="buy_money">￥{{videoDetail.price}}</view>
			<view class="buy_btn">
				<view class="buy_btn_inner" @tap="cancelBuy">取消</view>
				<view class="buy_btn_inner to_pay_btn" @tap="toPay()">支付</view>
			</view>
		</view>
		<!-- 余额不足弹框 -->
		<view class="popup_shadow" style="height: 270rpx;" v-if="is_no_money">
			<view class="popup_tips" style="text-align: center;">您的余额不足，请先充值~</view>
			<view class="buy_btn">
				<view class="buy_btn_inner" @tap="cancelNomoney">取消</view>
				<view class="buy_btn_inner to_pay_btn" style="color: #005cb7;" @tap="toRecharge()">充值</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { video_info,video_recommend,comments_list } from '../../api/api.js'
	export default {
		data() {
			return {
				videoId: '',
				access_token: '',
				member_id: '',
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
				commentList: [],
				videoDetail: {},
				recommendList: [],
				is_cover: false, //是否显示遮罩
				is_no_level: false, //是否显示达到等级弹框
				is_buy_video: false, // 购买视频弹框
				is_no_money: false //余额不足弹框
			}
		},
		onLoad(option) {
			let that = this
			that.videoId = option.id
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
			that.getVideoDetail()
			that.getVideoRecommend()
			that.getCommentsList()
		},
		methods: {
			// tab切换
			tabClick(index){
				this.tabCurrentIndex = index
			},
			// 点击知道了
			konwBtn(){
				this.is_cover = false
				this.is_no_level = false
			},
			// 取消购买弹框
			cancelBuy(){
				this.is_cover = false
				this.is_buy_video = false
			},
			// 去支付
			toPay(){
				this.is_cover = false
				this.is_buy_video = false
			},
			//取消充值
			cancelNomoney(){
				this.is_cover = false
				this.is_no_money = false
			},
			//去充值
			toRecharge(){
				this.is_cover = false
				this.is_no_money = false
			},
			//点击购买
			toBuy(){
				let that = this
				if(that.videoDetail.is_level == 1){//级别不够
					that.is_cover = true
					that.is_no_level = true
				}else{
					that.is_cover = true
					that.is_buy_video = true
				}
			},
			//获取视频详情
			getVideoDetail(){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					video_id: that.videoId
				}
				video_info(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.videoDetail = res.data.data
					}
				})
			},
			//获取推荐列表
			getVideoRecommend(){
				let that = this
				let params = {
					video_id: that.videoId,
					page: 1,
					limit: 10
				}
				video_recommend(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.recommendList = res.data.data.list
					}
				})
			},
			//获取评论列表
			getCommentsList(){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					post_id: that.videoId,
					type: 2, //1-新闻，2-视频，3-文档
					page: 1,
					limit: 10
				}
				comments_list(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.commentList = res.data.data.list
					}
				})
			}
		}
	}
</script>

<style>

</style>
