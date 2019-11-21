<template>
	<view class="content" style="background: #efefef;">
		<view class="my_top">
			<image class="my_head_img" :src="peopleInfo.avatar.s"></image>
			<view class="my_info">
				<view class="my_name">{{peopleInfo.nickname}}</view>
				<view class="level_style level_style1">{{peopleInfo.level_name}}</view>
				<view class="my_id">ID:{{peopleInfo.id}}</view>
			</view>
			<view class="my_message">
				<image class="message_img" src="../../static/img/icon_maynews@2x.png" ></image>
				<view class="new_num">2</view>
			</view>
		</view>
		<view class="ask_question">
			<view class="my_ask" @tap="toQuestion">
				<view class="ask_question_title">我的提问</view>
				<view class="ask_question_num">{{peopleInfo.question_num}}</view>
				<image class="my_ask_arrow"  src="../../static/img/btn_in@2x.png"></image>
			</view>
			<view class="my_ask my_answer" @tap="toAnswer">
				<view class="ask_question_title">我的回答</view>
				<view class="ask_question_num">{{peopleInfo.answer_num}}</view>
				<image class="my_ask_arrow" src="../../static/img/btn_in@2x.png"></image>
			</view>
		</view>
		<view class="my_list">
			<view class="my_list_inner">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_wallet@2x.png" mode=""></image>
					<view class="my_list_title">我的钱包</view>
				</view>
				<view class="my_list_right">
					<view class="my_list_new my_list_money">￥{{peopleInfo.balance}}</view>
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>
			<view class="my_list_inner" @tap="toMypay">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_purchase@2x.png" mode=""></image>
					<view class="my_list_title">我购买的资料</view>
				</view>
				<view class="my_list_right">
					<view class="my_list_new">{{peopleInfo.filecount}}</view>
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>
			<view class="my_list_inner">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_collection@2x.png" mode=""></image>
					<view class="my_list_title">我的收藏</view>
				</view>
				<view class="my_list_right">
					<view class="my_list_new">{{peopleInfo.favcount}}</view>
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>	
			<view class="my_list_inner">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_focuson@2x.png" mode=""></image>
					<view class="my_list_title">我关注的达人</view>
				</view>
				<view class="my_list_right">
					<view class="my_list_new">{{peopleInfo.focusnum}}</view>
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>
			<view class="my_list_inner long_bottom">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_fans@2x.png" mode=""></image>
					<view class="my_list_title">我的粉丝</view>
				</view>
				<view class="my_list_right">
					<view class="my_list_new">{{peopleInfo.tofocusnum}}</view>
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>
			<view class="my_list_inner long_bottom">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_invite@2x.png" mode=""></image>
					<view class="my_list_title">好友推荐</view>
				</view>
				<view class="my_list_right">
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>
			<view class="my_list_inner long_bottom">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_interests@2x.png" mode=""></image>
					<view class="my_list_title">设置兴趣板块</view>
				</view>
				<view class="my_list_right">
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>
			<view class="my_list_inner long_bottom">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_feedback@2x.png" mode=""></image>
					<view class="my_list_title">意见反馈</view>
				</view>
				<view class="my_list_right">
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view> 
			<view class="my_list_inner long_bottom_last">
				<view class="my_list_left">
					<image class="my_list_img" src="../../static/img/icon_set@2x.png" mode=""></image>
					<view class="my_list_title">设置</view>
				</view>
				<view class="my_list_right">
					<image class="my_list_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import { home_info } from '../../api/api.js'
	export default {
		data() {
			return {
				access_token: '',
				member_id: '',
				peopleInfo: {}
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
			that.getInfo()
		},
		methods: {
			// 获取用户信息
			getInfo(){
				let that = this
				let params = {
					access_token: that.access_token,
					member_id: that.member_id
				}
				home_info(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.peopleInfo = res.data.data
					}
				})
			},
			// 跳转我的提问
			toQuestion(){
				uni.navigateTo({
				    url: '../myQuestion/myQuestion'
				});
			},
			// 跳转我的回答
			toAnswer(){
				uni.navigateTo({
				    url: '../myAnswer/myAnswer'
				});
			},
			//跳转我购买的资料
			toMypay(){
				uni.navigateTo({
					url: '../myPay/myPay'
				});
			},
		}
	}
</script>
