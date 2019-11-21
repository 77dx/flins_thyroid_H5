<template>
	<view>
		<view class="talent_top">
			<view class="tab_list tab_list_3" style="padding-bottom: 20rpx;border-bottom: none;">
				<image class="tab_list_img" :src="talentDetail.avatar.s"></image>
				<view class="tab_list_msg">
					<text class="tab_list_name">{{talentDetail.nickname}}</text>
					<view class="tab_list_label" style="margin-top: -20rpx;" v-if="talentDetail.tag" v-for="(item,index) in talentDetail.tag" :key="index">{{item}}</view>
					<view style="margin-top: -20rpx;">
						<view class="time_style">回答 {{talentDetail.answer_num}}</view>
						<view class="time_style read_num">粉丝 {{talentDetail.favnum}}</view>
					</view>
				</view>
				<view class="focus_btn" v-if="talentDetail.is_follow == 0" @tap="focusPeople(1)">关 注</view>
				<view class="focus_btn is_focused" v-if="talentDetail.is_follow == 1" @tap="focusPeople(2)">已关注</view>
			</view>
			<view class="talent_descript">{{talentDetail.remark}}</view>
			<view class="to_sak" @tap="toAsk">
				<image class="to_ask_btn" src="../../static/img/icon_answer@2x.png" mode=""></image>
				<view class="to_sak_tip">向Ta提问</view>
			</view>
		</view>
		<view class="talent_down">
			<view class="talent_down_title">
				<view class="talent_down_title_left">Ta的问答</view>
				<view class="talent_down_title_right">
					<view class="time_style">{{talentDetail.best_answer}}个最佳</view>
					<view class="time_style read_num">{{talentDetail.point_answer}}个指定</view>
				</view>
			</view>
			<view class="tab_list_1 talent_answer_list" v-if="answerList.length > 0">
				<view class="tab_list_1_inner talent_answer_list_inner" v-for="(item,index) in answerList" :key="index">
					<view class="article_title" style="color: #666666;">{{item.title}}</view>
					<view class="article_title talent_answer_content">
						<view class="the_best" style="margin-right: 4rpx;" v-if="item.is_best == 1">最佳</view>
						<view class="the_best" style="margin-right: 4rpx;background: #005CB7;" v-if="item.is_point == 1">指定</view>
						答: {{item.content}}
					</view>
					<view class="time_style">{{item.create_time}}</view>
					<view class="time_style" style="margin-left: 30rpx;">{{item.comment_num}} 回复</view>
					<view class="time_style" style="margin-left: 30rpx;">{{item.like_num}} 点赞</view>
				</view>
			</view>
			<view v-else class="no_data">暂无问答...</view>
			
		</view>
	</view>
</template>

<script>
	import { people_infos,people_answer_lists,user_add_follow } from '../../api/api.js'
	export default {
		data() {
			return {
				access_token: '',
				member_id: '',
				talentId: '',
				talentDetail: {},
				answerList: []
			}
		},
		onLoad(option) {
			let that = this
			that.talentId = option.id
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
			that.getTalentDetail()
			that.getAnswerList()
		},
		methods: {
			// 获取达人详情
			getTalentDetail(){
				let that = this
				let params = {
					access_token: that.access_token,
					member_id: that.member_id,
					to_member_id: that.talentId
				}
				people_infos(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.talentDetail = res.data.data
					}
				})
			},
			//回答列表
			getAnswerList(){
				let that = this
				let params = {
					to_member_id: that.talentId,
					page: 1,
					limit: 10
				}
				people_answer_lists(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.answerList = res.data.data.list
					}
				})
			},
			//关注/取消关注达人
			focusPeople(type){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					to_member_id: that.talentId
				}
				user_add_follow(params).then(res => {
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
						that.getTalentDetail()
					}else{
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							icon: 'none'
						});
					}
				})
			},
			// 点击向达人提问
			toAsk(){
				let that = this
				uni.navigateTo({
				    url: '../questionToTalent/questionToTalent?id='+ that.talentId
				});
			},
		}
	}
</script>
