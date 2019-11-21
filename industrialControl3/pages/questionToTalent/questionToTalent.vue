<template>
	<view class="content">
		<view class="tab_list tab_list_3" style="padding-bottom: 20rpx;">
			<image class="tab_list_img" :src="peopleDetail.avatar.s"></image>
			<view class="tab_list_msg">
				<text class="tab_list_name">{{peopleDetail.nickname}}</text>
				<view class="tab_list_label" style="margin-top: -20rpx;" v-if="peopleDetail.tag" v-for="(item,index) in peopleDetail.tag" :key="index">{{item}}</view>
				<view style="margin-top: -20rpx;">
					<view class="time_style">回答 {{peopleDetail.answer_num}}</view>
					<view class="time_style read_num">粉丝 {{peopleDetail.favnum}}</view>
				</view>
			</view>
			<view class="focus_btn" v-if="peopleDetail.is_follow == 0" @tap="focusPeople(1)">关 注</view>
			<view class="focus_btn is_focused" v-if="peopleDetail.is_follow == 1" @tap="focusPeople(2)">已关注</view>
		</view>
		<view style="width: 100%;height: 10rpx;background: #F6F6F6;"></view>
		<view class="question_list">
			<view class="question_title">问题标题：</view>
			<input class="question_input" type="text" v-model="question" value="" placeholder="请简明写下你的问题,以'?'结尾" />
		</view>
		<view class="question_list1" @tap="openPopup">
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
		<button class="publish_btn" @tap="submitBtn">发 布</button>
		
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
	import { people_infos,user_add_follow,get_tags,home_info,question_add } from '../../api/api.js'
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				question: '',
				to_member_id: '',//达人id
				question_content: '',
				imgList: [],
				peopleDetail: {},
				checkedList: [],//已选中标签列表
				tagList: [],
				tags: '',
				moneyTab: 0,
				moneyNum: 5,
				totalMoeny: 0,
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
				videoSrc:''
			}
		},
		onLoad(option) {
			let that = this
			that.to_member_id = option.id
			// that.to_member_id = 24
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
			that.getPeopleDetail()
			that.getMoney()
		},
		methods: {
			//获取达人详情
			getPeopleDetail(){
				let that = this
				people_infos({
					member_id: this.member_id,
					access_token: this.access_token,
					to_member_id: that.to_member_id
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.peopleDetail = res.data.data
					}
				})
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
			//关注，取消关注达人
			focusPeople(type){
				let that = this
				user_add_follow({
					member_id: that.member_id,
					access_token: that.access_token,
					to_member_id: that.to_member_id
				}).then(res => {
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
						that.getPeopleDetail()
					}else{
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							icon: 'none'
						});
					}
				})
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
			// 打开弹出层
			openPopup(){
				console.log("ffffff")
				console.log(this.$refs.popup)
				this.$refs.popup.open()
				this.getTags()
			},
			// 关闭弹出层
			closePopup(){
				this.$refs.popup.close()
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
			// 选中标签-
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
			question_add({
				member_id: that.member_id,
				access_token: that.access_token,
				to_member_id: that.to_member_id,
				title: that.question,
				content: that.question_content,
				price: that.moneyNum,
				tag_id: that.tags
			}).then(res => {
				console.log(res)
				console.log(res.data.data)
				let post_id = res.data.data
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
						filePath: res.tempFilePaths[0],
						name: 'pic[]',
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
