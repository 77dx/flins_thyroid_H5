<template>
	<view class="question_detail_content">
		<view class="question_detail_title">{{questionDetail.title}}</view>
		<view class="question_tags">
			<view class="popup_label" v-for="(item,index) in tags" :key="index">{{item}}</view>
		</view>
		<view class="author_msg">
			<view class="author_msg_left">
				<image class="author_img" src="../../static/img/img_photo@2x.png" mode=""></image>
				<view class="author_name">{{questionDetail.nickname}}</view>
			</view>
			<view class="author_msg_right">
				<image class="money_img" src="../../static/img/icon_money@2x.png"></image>
				<view class="money_num">{{questionDetail.price}}</view>
				<image class="money_img money_img1" src="../../static/img/icon_bu@2x.png"></image>
				<view class="money_num money_num1">{{questionDetail.subsidy || 0}}</view>
			</view>
		</view>
		<view class="question_descript">{{questionDetail.content}}</view>
		<view v-if="isSeeImg">
			<view class="question_imgs">
				<image class="question_imgs_inner" v-for="(item,index) in questionDetail.images" :key="index" :src="item.s" mode=""></image>
			</view>
			<view class="answer_time">
				<view class="answer_time_inner">{{questionDetail.create_time}}</view>
				<image class="answer_time_img" src="../../static/img/btn_report@2x.png" mode=""></image>
			</view>
		</view>
		<view class="question_open" v-if="!isSeeImg && questionDetail.images.length > 0" @tap="seeImg">
			<image class="open_img" src="../../static/img/btn_unfold@2x.png" mode=""></image>
			<view class="open_world">展开</view>
		</view>
		<view class="question_open" v-if="isSeeImg && questionDetail.images.length > 0" @tap="notSeeImg">
			<image class="open_img" src="../../static/img/upper.png" mode=""></image>
			<view class="open_world">收起</view>
		</view>
		<view class="add_answer" v-if="questionDetail.is_answer == 1">
			<view class="add_answer_left" @tap="toAddAnswer">
				<view class="add_answer_title">添加回答</view>
				<image class="add_answer_img" src="../../static/img/icon_answer@2x.png" mode=""></image>
			</view>
			<view class="add_answer_right">
				<image class="answer_img" src="../../static/img/img_photo@2x.png" mode=""></image>
				<image class="answer_img" src="../../static/img/img_photo@2x.png" mode=""></image>
				<view class="see_answer">查看全部4个回答 ></view>
			</view>
		</view>
		<view style="width: 100%;padding: 0 3%;background: #fafafa;height: 10rpx;margin-left: -3%;"></view>
		<!-- 回答列表 -->
		<view style="padding-bottom: 150rpx;">
			<view class="question_answer_list" v-for="(item,index) in answerList" :key="index" @tap.stop="toAnswer(item.id)">
				<view class="author_msg" style="margin-top: 30rpx;margin-bottom: 26rpx;">
					<view class="author_msg_left">
						<image class="author_img" :src="item.avatar.s" mode=""></image>
						<view class="author_name">{{item.nickname}}</view>
					</view>
					<view class="author_msg_right" >
						<view class="the_best" v-if="item.status == 1">最佳</view>
						<view class="the_best" v-if="questionDetail.is_adopt == 1" @tap="adobtAnswer(item.id)">采纳</view>
						
					</view>
				</view>
				<view class="answer_content">{{item.content}}</view>
				<view class="question_imgs" v-if="item.images.length > 0">
					<image class="question_imgs_inner" v-for="(itemImg,index1) in item.images" :key="index1" :src="itemImg.s" mode=""></image>
				</view>
				<view class="answer_time">
					<view class="answer_time_inner">{{item.create_time}}</view>
					<view style="display: flex;align-items: center;">
						<view class="zan_num" style="margin-right: 10rpx;">{{item.comment_num}}</view>
						<image class="answer_time_img" src="../../static/img/btn_comments@2x.png" mode=""></image>
						<view class="zan_num">{{item.like_num}}</view>
						<image class="answer_time_img" src="../../static/img/btn_zan@2x.png" mode=""></image>
					</view>
				</view>
				<view style="width: 100%;padding: 0 3%;background: #fafafa;height: 2rpx;margin-left: -3%;"></view>
			</view>
		</view>
		
		<!-- 点击添加回答 -->
		<view class="add_comment_btn" v-if="!isAddAnswer && questionDetail.is_answer == 1">
			<input class="add_comment_input" type="text" value="" placeholder="我来回答" disabled="" @tap="toAddAnswer"/>
		</view>
		<!-- 添加回答弹框 -->
		<view class="add_answer_content" v-if="isAddAnswer">
			<view class="add_comment_content_btn">
				<view class="cancel_btn" @click="isAddAnswer=false">取消</view>
				<button class="cancel_btn sure_color" @click="submitAnswer" :disabled="!iscanPublish" >发布</button>
			</view>
			<view style="width: 100%;height: 10rpx;background: #fafafa;"></view>
			<textarea class="answer_textarea_style" v-model="answerText" placeholder="在此输入你的回答" />
			<view class="add_attachment">
				<image class="add_btn" @tap="uploadImg" src="../../static/img/btn_add@2x.jpg" ></image>
				<view class="add_tips" v-if="imgList.length == 0">点击添加图片</view>
				<view v-for="(item,index) in imgList" :key="index">
					<image :src="item" mode="" style="display: inline-block;width: 160rpx;height: 160rpx;margin-right: 20rpx;"></image>
				</view>
			</view>
			<view class="add_attachment" style="border-bottom: none;margin-bottom: 50rpx; ">
				<image class="add_btn"  @tap="uploadVideo" src="../../static/img/btn_add@2x.jpg" ></image>
				<view class="add_tips" v-if="!videoSrc">点击添加视频文件</view>
				<video v-if="videoSrc" :src="videoSrc" style="display: inline-block;width: 160rpx;height: 160rpx;" controls></video>
			</view>
		</view>
	</view>
</template>

<script>
	import { question_info,user_add_answer,answer_lists } from '../../api/api.js'
	export default {
		data() {
			return {
				question_id:'',
				access_token:'',
				member_id:'',
				isOpen: false,
				isComment: false,
				commentText:'',
				isAddAnswer: false,
				answerText:'',
				imgList: [],
				videoSrc:'',
				questionDetail:{},
				tags:[],
				isSeeImg:false,
				answerList: [],
				iscanPublish:true
			}
		},
		onLoad(option) {
			let that = this
			that.question_id = option.id
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
			that.getQuestionDetail()
			that.getAnswerList()
		},
		methods: {
			// 展开图片
			seeImg(){
				this.isSeeImg = true
			},
			// 收起图片
			notSeeImg(){
				this.isSeeImg = false
			},
			//问答详情中的回答列表
			getAnswerList(){
				console.log("进入")
				let that = this
				answer_lists({
					question_id: that.question_id,
					page: 1,
					limit: 10
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.answerList = res.data.data.list
					}
				})
			},
			// 采纳回答
			adobtAnswer(id){
				let that = this
				adopt_answer({
					member_id: that.member_id,
					access_token: that.access_token,
					answer_id: id
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						uni.showToast({
							title: '采纳成功!',
							duration: 2000,
							icon: 'none'
						});
						that.getAnswerList()
					}
				})
			},
			// 点击跳转回答页面
			toAnswer(id){
				let that = this
				uni.navigateTo({
					url: '../answerDetail/answerDetail?id='+ id,
				})
			},
			//点击上传图片
		   uploadImg(){
			   let that = this	 
				uni.chooseImage({
					count: 3, //上传文件数量
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success:(res)=> {
					  console.log(res)
					  if (that.imgList.length != 0) {
						  that.imgList = that.imgList.concat(res.tempFilePaths)
					  } else {
						  that.imgList = res.tempFilePaths
					  } 
					  console.log(that.imgList)
				}
			});
		},
		//上传视频
		uploadVideo(){
			let that = this
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera', 'album'],
				success: function (res) {
					console.log(res)
					that.videoSrc = res.tempFilePath;
				}
			})
		},
		//发布回答
		submitAnswer(){
			let that = this
			that.iscanPublish = false
			user_add_answer({
				member_id: that.member_id,
				access_token: that.access_token,
				content: that.answerText,
				question_id: that.question_id
			}).then(res => {
				console.log(res)
				if(res.data.code == 1){
					let post_id = res.data.data
					//若没有图片以及视频
					if(that.imgList.length == 0 && that.videoSrc == ''){
						console.log("没有视频和图片")
						uni.showToast({
							title: '回答成功!',
							duration: 2000,
							icon: 'none'
						});
						//跳转回答详情页
						uni.navigateTo({
							url: '../answerDetail/answerDetail?id='+post_id,
						})
					}
					//如果上传了图片
					if(that.imgList.length > 0 ){
						let imgs = that.imgList.map((value,index)=>{
							return {	
								name:'image'+index,
								uri:value
							}
						});
						console.log(imgs)
						uni.uploadFile({
							url: 'http://test.api.lanchonggk.com/industry/api/add_pics',
							fileType: 'image',
							files: imgs,
							formData:{
								'post_id': post_id,
								'type': '2'
							},
							 success: function(res) {
								 console.log(res)
								 if(res.statusCode == 200){
									 if(that.videoSrc){//如果有视频
										 // 视频接口
										 uni.uploadFile({
										 	url: 'http://test.api.lanchonggk.com/industry/api/add_video',
										 	filePath: that.videoSrc,
										 	fileType: 'video',
										 	name: 'video',
										 	formData: {
										 	  'post_id': post_id,
										 	  'type': '2'
										 	},
										 	success: (res) => {
										 	  console.log(res);
										 	  if(res.statusCode == 200){
										 		 uni.showToast({
										 			title: '回答成功!',
										 			duration: 2000,
										 			icon: 'none'
										 		 });
										 		 //跳转回答详情页
										 		 uni.navigateTo({
										 			url: '../answerDetail/answerDetail?id='+post_id,
										 		 })
										 	  }
										 	},
											fail: (err) => {
												console.log(err)
											}
										 });
									 }else{
										 uni.showToast({
											title: '回答成功!',
											duration: 2000,
											icon: 'none'
										});
										 // 跳转问题详情页
										 uni.navigateTo({
										 	url: '../answerDetail/answerDetail?id=' + post_id,
										 })
									 }
									 
								 }
							},
							fail: (err) => {
								console.log(err)
							}
						})
					}
				}else{
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						icon: 'none'
					});
					return false
				}
				
			})
		},
		//弹出回答框
		toAddAnswer(){
			let that = this
			that.isAddAnswer = true
		},
		// 获取问题详情
		getQuestionDetail(){
			let that = this
			question_info({
				member_id: that.member_id,
				access_token: that.access_token,
				question_id: that.question_id
			}).then(res => {
				console.log(res)
				if(res.data.code == 1){
					that.questionDetail = res.data.data
					that.tags = res.data.data.tag_title.split(',')
					console.log(that.tags)
				}
			})
		}
		}
	}
</script>
