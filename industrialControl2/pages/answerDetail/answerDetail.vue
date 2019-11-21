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
		<view class="add_answer">
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
		<view class="author_msg" style="margin-top: 30rpx;margin-bottom: 26rpx;">
			<view class="author_msg_left">
				<image class="author_img" :src="answerDetail.avatar.s" mode=""></image>
				<view class="author_name">{{answerDetail.nickname}}</view>
			</view>
			<view class="author_msg_right">
				<view class="the_best" v-if="answerDetail.status == 1">最佳</view>
				<view class="zan_num">{{answerDetail.like_num}}</view>
				<image class="zan_img" src="../../static/img/btn_zan@2x.png" mode=""></image>
			</view>
		</view>
		<view class="answer_content">{{answerDetail.content}}</view>
		<view class="question_imgs">
			<image class="question_imgs_inner" v-for="(item,index) in answerDetail.images" :key="index" :src="item.s" mode=""></image>
		</view>
		<view class="answer_time">
			<view class="answer_time_inner">{{answerDetail.create_time}}</view>
			<image class="answer_time_img" src="../../static/img/btn_report@2x.png" mode=""></image>
		</view>
		<view style="width: 100%;padding: 0 3%;background: #fafafa;height: 10rpx;margin-left: -3%;"></view>
		<!-- 评论部分 -->
		<view class="comment_content">
			<view class="comment_title">全部评论 10</view>
			<view class="comment_list" v-for="(item,index) in commentList" :key="index" @tap="toMoreComment(item.id,item.nickname)">
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
				<!-- 多级评论 -->
				<view class="comment_inner_comment" style="margin-top: 16rpx;margin-bottom: 16rpx;" v-if="item.children.length > 0" v-for="(childItem,index2) in item.children" :key="index2" @tap.stop="toMoreComment(childItem.id,childItem.nickname)"> 
					<view class="comment_list_first">
						<view class="comment_list_left">
							<image class="author_img" :src="childItem.avatar.s" mode=""></image>
							<view class="author_name">{{childItem.nickname}}</view>
						</view>
						<view class="comment_list_right">
							<view class="zan_num">{{childItem.like_num}}</view>
							<image class="zan_img" src="../../static/img/btn_zan@2x.png" mode=""></image>
						</view>
					</view>
					<view class="comment_inner_comment">
						回复 {{childItem.to_nickname}}: {{childItem.content}}
						<view class="comment_inner_comment_time">{{childItem.create_time}}</view>
					</view>
					<view class="close_more_reply" v-if="isOpen== false">
						—— 展开更多回复内容
						<image class="open_more_reply_img" src="../../static/img/icon_down.png" mode=""></image>
					</view>
					<view class="close_more_reply" v-else>
						—— 收起 	
						<image class="open_more_reply_img" src="../../static/img/icon_up.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view style="width: 100%;padding: 0 3%;background: #fafafa;height: 120rpx;margin-left: -3%;"></view>
		<!-- 点击添加评论 -->
		<view class="add_comment_btn" v-if="!isFirstComment">
			<input class="add_comment_input" type="text" value="" placeholder="留下你的精彩评论吧" disabled="" @tap="toComment"/>
		</view>
		<!-- 添加一级评论弹框 -->
		<view class="add_comment_content" v-if="isFirstComment">
			<view class="add_comment_content_btn">
				<view class="cancel_btn" @click="isFirstComment=false">取消</view>
				<view class="cancel_btn sure_color" @tap="submitComment">发布</view>
			</view>
			<textarea class="comment_textarea_style" v-model="commentText" placeholder="请输入评论" />
		</view>
		<!-- 添加下级评论弹框 -->
		<view class="add_comment_content" v-if="isComment">
			<view class="add_comment_content_btn">
				<view class="cancel_btn" @click="isComment=false">取消</view>
				<view class="cancel_btn sure_color" @tap="submitMoreComment">发布</view>
			</view>
			<textarea class="comment_textarea_style" v-model="commentText1" :placeholder="'回复 @ '+commentNickName" />
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
	import { question_info,user_add_answer,answer_info,user_add_comment,answer_comment } from '../../api/api.js'
	export default {
		data() {
			return {
				question_id: '',
				answer_id: '',
				access_token: '',
				member_id: '',
				isOpen: false,
				isComment: false,
				isFirstComment: false,
				commentId: '',
				commentText: '',
				commentText1: '',
				commentNickName: '',
				isAddAnswer: false,
				answerText: '',
				imgList: [],
				commentList: [],
				videoSrc: '',
				questionDetail: {},
				answerDetail: {},
				tags: [],
				isSeeImg: false,
				iscanPublish: true
			}
		},
		onLoad(option) {
			let that = this
			that.answer_id = option.id
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
			that.getAnswerDetail()
			that.getcommentList()
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
			//发表一级评论
			submitComment(){
				let that = this
				user_add_comment({
					member_id: that.member_id,
					access_token: that.access_token,
					answer_id: that.answer_id,
					content: that.commentText
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						uni.showToast({
							title: '发布评论成功!',
							duration: 2000,
							icon: 'none'
						});
						that.commentText = ''
						that.isFirstComment = false
						that.getcommentList()
					}
				})
			},
			// 发表多级评论
			submitMoreComment(){
				let that = this
				user_add_comment({
					member_id: that.member_id,
					access_token: that.access_token,
					answer_id: that.answer_id,
					to_comment_id: that.commentId,
					content: that.commentText1
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						uni.showToast({
							title: '发布评论成功!',
							duration: 2000,
							icon: 'none'
						});
						that.commentText1 = ''
						that.isComment = false
						that.getcommentList()
					}
				})
			},
			//获取评论列表
			getcommentList(){
				let that = this
				answer_comment({
					answer_id: that.answer_id,
					page: 1,
					limit: 10
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.commentList = res.data.data.list
					}
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
		//弹出一级评论框
		toComment(){
			this.isFirstComment = true
		},
		// 弹出多级评论框
		toMoreComment(id,nickname){
			let that = this
			that.commentId = id
			that.commentNickName = nickname
			that.isComment = true
		},
		// 获取回答详情
		getAnswerDetail(){
			let that = this
			answer_info({
				answer_id: parseInt(that.answer_id)
			}).then(res => {
				console.log(res)
				if(res.data.code == 1){
					that.answerDetail = res.data.data
					that.question_id = res.data.data.question_id
					// 获取问题详情
					question_info({
						member_id: that.member_id,
						access_token: that.access_token,
						question_id: that.question_id
					}).then(res => {
						console.log(res)
						if(res.data.code == 1){
							that.questionDetail = res.data.data
							that.tags = res.data.data.tag_title.split(',')
						}
					})
				}
			})
		}
		}
	}
</script>
