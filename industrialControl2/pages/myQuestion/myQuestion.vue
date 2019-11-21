<template>
	<view class="content">
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
			</view>
			<!-- 显示区域 -->
			<!-- 指定提问 -->
			<view class="tab_list" v-if="tabCurrentIndex === 0">
				<view class="tab_list_1" v-for="(item,index) in questionList" :key="index">
					<view class="tab_list_1_inner">
						<view class="article_title article_title1">
							<text style="color: #888888;" v-if="item.is_take == 0">[未采纳]</text>
							<text style="color: #888888;" v-if="item.is_take == 1">[已采纳]</text> 
							{{item.title}}</view>
						<view class="article_title answer">答: {{item.content}}</view>
						<view class="time_style">{{item.create_time}}</view>
						<view class="time_style read_num">@{{item.nickname}}</view>
						<view class="no_answer" v-if="item.is_answer == 0">待回答</view>
						<view class="no_answer" v-if="item.is_answer == 1">已回答</view>
					</view>
				</view>
			</view>
			<!-- 普通提问 -->
			<view class="tab_list" v-if="tabCurrentIndex === 1">
				<view class="tab_list_1" v-for="(item,index) in questionList" :key="index">
					<view class="tab_list_1_inner">
						<view class="article_title article_title1">
							<text style="color: #888888;" v-if="item.is_take == 0">[未采纳]</text> 
							<text style="color: #888888;" v-if="item.is_take == 1">[已采纳]</text> 
							{{item.title}}</view>
						<view class="article_title answer">答: {{item.content}}</view>
						<view class="time_style">{{item.create_time}}</view>
						<view class="time_style read_num">{{item.answer_num}} 回答</view>
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
				type: 1,
				navList: [
					{
						state: 0,
						text: '指定提问'
					},
					{
						state: 1,
						text: '普通提问'
					}
				],
				questionList: []
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
			that.getMyQuestion(that.type)
		},
		methods: {
			// tab切换
			tabClick(index){
				let that = this
				that.tabCurrentIndex = index
				if(index == 0){
					that.type = 1 //指定提问
				}else if(index == 1){
					that.type = 2 //普通提问
				}
				that.getMyQuestion(that.type)
			},
			//问题列表
			getMyQuestion(type){
				let that = this
				my_question_list({
					member_id: that.member_id,
					access_token: that.access_token,
					type: type
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.questionList = res.data.data.list
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
	.no_answer{
		color: #005cb7;
		font-size: 20rpx;
		display: inline-block;
		margin-left: 30rpx;
	}
</style>
