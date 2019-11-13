<template>
	<view class="content">
		<view class="tab_list tab_list_3" style="padding-bottom: 20rpx;">
			<image class="tab_list_img" src="../../static/img/img_photo.png"></image>
			<view class="tab_list_msg">
				<text class="tab_list_name">张三</text>
				<view class="tab_list_label" style="margin-top: -20rpx;" v-for="(item,index) in labels" :key="index">{{item.label}}</view>
				<view style="margin-top: -20rpx;">
					<view class="time_style">回答 12</view>
					<view class="time_style read_num">粉丝 10</view>
				</view>
			</view>
			<view class="focus_btn">关 注</view>
		</view>
		<view style="width: 100%;height: 10rpx;background: #F6F6F6;"></view>
		<view class="question_list">
			<view class="question_title">问题标题：</view>
			<input class="question_input" type="text" v-model="question" value="" placeholder="请简明写下你的问题,以'?'结尾" />
		</view>
		<view class="question_list1">
			<view class="question_list_left">
				<view class="question_title">选择问题标签：</view>
				<view class="question_tags">自动化</view>
			</view>
			<view class="question_list_right">
				<image class="question_arrow" src="../../static/img/btn_in@2x.png" mode=""></image>
			</view>
		</view>
		<view class="question_list1" style="border-bottom: none;">
			<view class="question_list_left">
				<view class="question_title">设置悬赏金额：</view>
				<view class="set_money">￥ 10</view>
			</view>
			<view class="question_list_right">
				<view class="rest_money">账户余额: ￥80</view>
			</view>
		</view>
		<view class="question_list1">
			<view class="miney_list money_selected">￥ 5 </view>
			<view class="miney_list">￥ 10</view>
			<view class="miney_list">￥ 20</view>
			<view class="miney_list">￥ 50</view>
		</view>
		<view class="textarea_list">
			<view class="question_title question_title1">问题描述：</view>
			<textarea class="question_textarea" value="" v-model="question_content" placeholder="填写问题描述,表达越清楚,越容易获得答案" />
		</view>
		<view class="add_attachment">
			<image class="add_btn" src="../../static/img/btn_add@2x.jpg" ></image>
			<view class="add_tips">点击添加图片</view>
		</view>
		<view class="add_attachment" style="border-bottom: none;margin-bottom: 100rpx;">
			<image class="add_btn" src="../../static/img/btn_add@2x.jpg" ></image>
			<view class="add_tips">点击添加视频文件</view>
		</view>
		<button class="publish_btn">发 布</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				question: '',
				question_content: '',
				imgList: [],
				labels: [
					{
						label: "自动化",
					},
					{
						label: "仪器控",
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			//点击上传图片
		   uploadImg(){
			   let that = this	 
			uni.chooseImage({
				count: 3, //上传文件数量
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album','camera'], //从相册选择
				success:(res)=> {
				  console.log(res)
				   that.imgList = that.imgList.concat(res.tempFilePaths)
				  console.log(that.imgList)
					let imgs = that.imgList.map((value,index)=>{
						return {	
							name:'image'+index,
							uri:value
						}
					});
					console.log(imgs)
					var upper = uni.uploadFile({
						url: 'http://test.api.lanchonggk.com/industry/api/add_pics',
						fileType: 'image',
						files: imgs,
						filePath: res.tempFilePaths[0],
						name: 'pic[]',
						formData:{
							'post_id': '1',
							'type': '1'
						},
						 success: function(res) {
							console.log(res)
						},
						fail: function (err) {
							console.log(err)
						}
				})
				 upper.onProgressUpdate(function (res) {
					  // _self.percent = res.progress;
					  // console.log('上传进度' + res.progress);
					  // console.log('已经上传的数据长度' + res.totalBytesSent);
					  // console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
				 });
			
			
			}
		});
	   },
	   
		// 发布
		submitBtn(){
			let that = this
			question_add({
				member_id: '',
				access_token: '',
				to_member_id: '',
				title:'',
				content:'',
				price:'',
				tag_id: this.imageList,
				card_pic:'',
				card_pic2:'',
				card_pic3:'',
				video:''
			}).then(res => {
				console.log(res)
			})
		},
			
	}
}
</script>

<style>
	
</style>
