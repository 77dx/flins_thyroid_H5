<template>
	<view class="content">
		<view class="question_list">
			<view class="question_title">问题标题：</view>
			<input class="question_input" type="text" v-model="question" value="" placeholder="请简明写下你的问题,以'?'结尾" />
		</view>
		<view class="question_list1"  @tap="openPopup">
			<view class="question_list_left">
				<view class="question_title">选择问题标签：</view>
				<view class="question_tags" v-for="(item,index) in checkedList" :key="index">{{item}}</view>
			</view>
			<view class="question_list_right">
				<image class="question_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
			</view>
		</view>
		<view class="question_list1" style="border-bottom: none;">
			<view class="question_list_left">
				<view class="question_title">设置悬赏金额：</view>
				<view class="set_money">
					<view class="money_icon">￥</view> 
					<input type="text" v-model="moneyNum" @input="inputMoney" class="money_input" />
				</view>
			</view>
			<view class="question_list_right">
				<view class="rest_money">账户余额: ￥{{totalMoeny}}</view>
			</view>
		</view>
		<view class="question_list1">
			<view class="miney_list" v-for="(item,index) in moneyList" :key="index" :class="{money_selected: moneyTab == index}" @tap="selectMoney(index)">￥ {{item.label}} </view>
		</view>
		<view class="textarea_list">
			<view class="question_title question_title1">问题描述：</view>
			<textarea class="question_textarea" value="" v-model="question_content" placeholder="填写问题描述,表达越清楚,越容易获得答案" />
		</view>
		<view class="add_attachment">
			<image class="add_btn" @tap="uploadImg" src="../../static/img/btn_add@2x.jpg" ></image>
			<view class="add_tips" v-if="imgList.length == 0">点击添加图片</view>
			<view v-for="(item,index) in imgList" :key="index">
				<image :src="item" mode="" style="display: inline-block;width: 160rpx;height: 160rpx;margin-right: 20rpx;"></image>
				<!-- <image src="" mode=""></image> 删除图片按钮 -->
			</view>
		</view>
		<view class="add_attachment" style="border-bottom: none;margin-bottom: 50rpx;">
			<image class="add_btn"  @tap="uploadVideo" src="../../static/img/btn_add@2x.jpg" ></image>
			<view class="add_tips" v-if="!videoSrc">点击添加视频文件</view>
			<video v-if="videoSrc" :src="videoSrc" style="display: inline-block;width: 160rpx;height: 160rpx;" controls></video>
		</view>
		<button class="publish_btn" @tap="submitBtn" :disabled="!iscanPublish">发 布</button>
		
		<!-- 弹出框 -->
		<uni-popup ref="popup" type="center" class="ask_popup" maskClick="false"> 
			<view class="popup_content">
				<image class="popup_close" @tap="closePopup" src="../../static/img/btn_closed@2x.png" mode=""></image>
				<view class="popup_title">选择标签</view>
				<view v-for="(item,index) in tagList" :key= "index">
					<view class="popup_list">
						<view style="font-size: 30rpx;color: #333333;">{{item.tag_title}}</view>
					</view>
					<view class="popup_tag_list" v-for="(tagsItem,tagsIndex) in item.child" :key="tagsIndex">
						<view class="popup_label" v-if="tagsItem.is_checked == 0" @tap="checkTag(index,tagsIndex)">{{tagsItem.tag_title}}</view>
						<view class="popup_label .popup_label_selected" v-if="tagsItem.is_checked == 1" @tap="cancelTag(index,tagsIndex)">{{tagsItem.tag_title}}<image class="selected_img" src="../../static/img/icon_babel_selected@2x.png"></image></view>
					</view>
				</view>
				<view class="popup_button">
					<view class="popup_sure" @tap="sure_tag">确 定</view>
					<view class="popup_sure popup_reset" @tap="reset_tag">重 置</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { get_tags,home_info,question_add } from '../../api/api.js'
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	import uniTag from "../../components/uni-tag/uni-tag.vue"
	export default {
		components: {
			uniPopup,
			uniTag
		},
		data() {
			return {
				access_token:'',
				member_id:'',
				tagList: [],
				question: '',
				question_content: '',
				imgList: [],
				checkedList: [],//已选中标签列表
				tags: '',
				moneyList: [
					{
						label: '5',
						value: 5
					},
					{
						label: '10',
						value: 10
					},
					{
						label: '20',
						value: 20
					},
					{
						label: '50',
						value: 50
					},
				],
				moneyTab: 0,
				moneyNum: 5,
				videoSrc: '',
				totalMoeny: 0,
				iscanPublish: true
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
			console.log(that.access_token)
			console.log(that.member_id)
			if(that.access_token && that.member_id){
				that.getMoney()
			}
		},
		methods: {
			// 打开弹出层
			openPopup(){
				this.$refs.popup.open()
				this.getTags()
			},
			// 关闭弹出层
			closePopup(){
				this.$refs.popup.close()
			},
			// 选择金额
			selectMoney(index){
				this.moneyTab = index
				this.moneyNum = this.moneyList[index].value
			},
			// 填写金额
			inputMoney(){
				this.moneyTab = -1
			},
			// 获取余额
			getMoney(){
				let that = this
				home_info({
					member_id: that.member_id,
					access_token: that.access_token
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.totalMoeny = res.data.data.balance
					}
				})
			},
			//获取标签列表
			getTags(){
				let that = this
				get_tags({
					member_id: this.member_id,
					access_token: this.access_token
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.tagList = res.data.data.list
						console.log(that.tagList)
						// 把所有标签置为未选中
						that.tagList.forEach((item,index) =>{
							item.child.forEach((childItem,index1) =>{
								childItem.is_checked = 0
							})
						})
					}
				})
			},
			// 选中标签
			checkTag(index,tagsIndex){
				let that = this
				that.tagList[index].child[tagsIndex].is_checked = 1
			},
			// 取消选中
			cancelTag(index,tagsIndex){
				let that = this
				that.tagList[index].child[tagsIndex].is_checked = 0
			},
			// 标签选择确定
			sure_tag(){
				let that = this
				that.checkedList = []
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						if(items.is_checked == 1){
							that.tags += items.id + ","
							that.checkedList.push(items.tag_title)
						}
					})
				})
				//去除最后一个逗号
				that.tags = that.tags.substr(0, that.tags.length-1);
				that.$refs.popup.close()
			},
			// 重置标签
			reset_tag(){
				let that = this
				that.checkedList = []
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						items.is_checked = 0
					})
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
		// 发布
		submitBtn(){
			let that = this
			that.iscanPublish = false
			question_add({
				member_id: that.member_id,
				access_token: that.access_token,
				to_member_id: '',
				title: that.question,
				content: that.question_content,
				price: that.moneyNum,
				tag_id: that.tags
			}).then(res => {
				console.log(res)
				console.log(res.data.data)
				let post_id = res.data.data
				//若没有图片以及视频
				if(that.imgList.length == 0 && that.videoSrc == ''){
					console.log("没有视频和图片")
					uni.showToast({
						title: '发布成功!',
						duration: 2000,
						icon: 'none'
					});
					//跳转回答详情页
					uni.navigateTo({
						url: '../questionDetail/questionDetail?id='+post_id,
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
							'type': '1'
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
									 	  'type': '1'
									 	},
									 	success: (res) => {
									 	  console.log(res);
									 	  if(res.statusCode == 200){
									 		 uni.showToast({
									 			title: '问题发布成功!',
									 			duration: 2000,
									 			icon: 'none'
									 		 });
									 		 //跳转问题详情页
									 		 uni.navigateTo({
									 			url: '../questionDetail/questionDetail?id='+post_id,
									 		 })
									 	  }
									 	}
									 });
								 }else{
									 uni.showToast({
										title: '问题发布成功!',
										duration: 2000,
										icon: 'none'
									});
									 // 跳转问题详情页
									 uni.navigateTo({
									 	url: '../questionDetail/questionDetail?id=' + post_id,
									 })
								 }
								 
							 }
						},
						fail: function (err) {
							console.log(err)
						}
					})
				}
			})
		}
	}
}
</script>