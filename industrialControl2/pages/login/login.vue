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
					<view class="resend" v-if="!isCountdown" @click="getCode">发送验证码</view>
					<view class="resend" v-if="isCountdown">倒计时 {{count}} s</view>
				</view>
				<button class="login_button" @tap="toLogin()" type="primary">登 录</button>
			</view>
		</view>
	</view>
	
</template>

<script>
	import { login,send_code } from '../../api/api.js'
	export default {
		data() {
			return {
				phoneNum: '',
				verty: '',
				isCountdown: false,
				count: '',
				timer: null
			}
		},
		onLoad() {

		},
		methods: {
			//获取倒计时
			getCode(){
				console.log("倒计时")
			     const TIME_COUNT = 60;
				 this.sendCode()
			     if (!this.timer) {
			       this.count = TIME_COUNT;
			       this.isCountdown = true;
			       this.timer = setInterval(() => {
			       if (this.count > 0 && this.count <= TIME_COUNT) {
			         this.count--;
			        } else {
			         this.isCountdown = false;
			         clearInterval(this.timer);
			         this.timer = null;
			        }
			       }, 1000)
			      }
			   } ,
			// 登录
			toLogin(){
				if(!this.phoneNum){
					uni.showToast({
						title: '请输入手机号码!',
						duration: 2000,
						icon: 'none'
					});
					return false
				}
				if(!this.verty){
					uni.showToast({
						title: '请输入验证码!',
						duration: 2000,
						icon: 'none'
					});
					return false
				}
				console.log("login")
				login({
					mobile: this.phoneNum,
					sms_code: this.verty
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						console.log(res.data.data.access_token)
						console.log(res.data.data.id)
						uni.setStorage({
						    key: 'access_token',
						    data: res.data.data.access_token,
						    success: function () {
						        // console.log('success');
								uni.setStorage({
								    key: 'member_id',
								    data: res.data.data.id,
								    success: function () {
								        // console.log('success');
										if(res.data.data.tags){ //已设置标签
											uni.switchTab({
											    url: '../index/index'
											});
										}else{
											uni.navigateTo({
												url: '../setTag/setTag'
											})
										}
								    }
								});
						    }
						});
					}
				})
			},
			// 获取验证码
			sendCode(){
				if(!this.phoneNum){
					uni.showToast({
						title: '请先输入手机号码!',
						duration: 2000,
						icon: 'none'
					});
					return false
				}
				console.log("进入接口")
				send_code({
					mobile: this.phoneNum,
					type: 1 //注册/登录
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						uni.showToast({
							title: '短信发送成功!',
							duration: 2000,
							icon: 'none'
						});
					}else{
						uni.showToast({
							title: '短信发送失败，请重试!',
							duration: 2000,
							icon: 'none'
						})
						this.isCountdown = false;
					}
				})
			},
		}
	}
</script>
