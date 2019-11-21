<template>
	<view class="content">
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
			</view>
			<view class="no_data" v-if="answerList.length == 0">暂无回答...</view>
			<view class="tab_list" v-if="answerList.length > 0">
				<view class="tab_list_1" v-for="(item,index) in answerList" :key="index">
					<view class="tab_list_1_inner">
						<view class="article_title article_title1">
							<text style="color: #888888;" v-if="item.is_take == 0">[未采纳]</text>
							<text style="color: #888888;" v-if="item.is_take == 1">[已采纳]</text> 
							{{item.title}}</view>
						<view class="article_title answer">答: {{item.content}}</view>
						<view class="time_style">{{item.create_time}}</view>
						<view class="time_style read_num">{{item.comment_num}} 回复</view>
						<view class="time_style read_num">{{item.like_num}} 点赞</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { my_question_list } from '../../api/api.js'
	export default {
		data() {
			return {
				access_token:'',
				member_id:'',
				tabCurrentIndex:0,
				type: 3,
				navList: [
					{
						state: 0,
						text: '指定回答'
					},
					{
						state: 1,
						text: '普通回答'
					}
				],
				answerList: []
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
			that.getMyanswer(that.type)
		},
		methods: {
			// tab切换
			tabClick(index){
				let that = this
				that.tabCurrentIndex = index
				if(index == 0){
					that.type = 3 //指定回答
				}else if(index == 1){
					that.type = 4 //普通回答
				}
				that.getMyanswer(that.type)
			},
			//回答列表
			getMyanswer(type){
				let that = this
				my_question_list({
					member_id: that.member_id,
					access_token: that.access_token,
					type: type
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.answerList = res.data.data.list
					}
				})
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
</style>
