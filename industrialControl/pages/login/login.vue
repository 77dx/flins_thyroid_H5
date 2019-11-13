<template>
	<view class="content">
		<view class="login_content">
			<image class="headImg" src="../../static/img/icon_photo@2x.png" mode=""></image>
			<view class="login_buttom">
				<view class="title_text">手机号码:</view>
				<view class="input_content">
					<input class="input_inner" type="text" v-model="phoneNum" placeholder="请输入您的手机号码" />
				</view>
				<view class="title_text" style="margin-top: 20upx;">验证码:</view>
				<view class="input_content">
					<input class="input_inner" type="text" v-model="verty" placeholder="请输入验证码" />
					<view class="resend">重新发送</view>
				</view>
				<button class="login_button" @tap="toLogin()" type="primary">登 录</button>
			</view>
		</view>
	</view>
	
</template>

<script>
	import { login } from '../../api/api.js'
	export default {
		data() {
			return {
				phoneNum: '',
				verty: ''
			}
		},
		onLoad() {

		},
		methods: {
			// 登录
			toLogin(){
				console.log("login")
				let that = this
				login({
					mobile: that.phoneNum,
					sms_code: that.verty
				}).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.login_content{
		width: 100%;
		height: 100%;
		.headImg{
			width: 128rpx;
			height: 128rpx;
			border-radius: 50%;
			display: block;
			margin: 0 auto;
			margin-top: 100rpx;
		}
		.login_buttom{
			width: 64%;
			margin: 0 auto;
			padding-top: 90rpx;
			.title_text{
				font-size: 28rpx;
				color: #9EB1C4;
				line-height: 60rpx;
			}
			.input_content{
				width: 100%;
				position: relative;
				.input_inner{
					width: 100%;
					border-bottom: 1px solid #dfdfdf;
					line-height: 60rpx;
					font-size: 28rpx;
					color: #333333;
					line-height: 60rpx;
					height: 60rpx;
				}
				.resend{
					position: absolute;
					bottom: 0;
					right: 0;
					font-size: 20rpx;
					color: #005cb7;
					line-height: 60rpx;
				}
			}
			.login_button{
				width: 100%;
				line-height: 88rpx;
				height: 88rpx;
				margin-top: 80rpx;
				border-radius: 6px;
				background: #005CB7;
				letter-spacing: 4px;
				font-size: 30rpx;
			}
		}
	}
	input::-webkit-input-placeholder{
		font-size: 56rpx;
		color: #dfdfdf;
	}
	input::-moz-placeholder{ 
		font-size: 56rpx;
		color: #dfdfdf;      
	}
	input:-ms-input-placeholder{  
		font-size: 56rpx;
		color: #dfdfdf;       
	}
</style>
