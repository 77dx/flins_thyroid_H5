<template>
	<view class="content">
		<!-- 搜索 -->
		<view class="searchBox">
			<view class="searchBox_inner">
				<image class="search_img" src="../../static/img/icon_search@2x.png"></image>
				<input class="search_input" type="text" v-model="searchContent" placeholder="点击搜索" />
			</view>
		</view>
		<!-- tab切换 -->
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
				<image class="screening" src="../../static/img/btn_sel@2x.png" @tap="openPopup"></image>
			</view>
			<view class="tab_list">
				<view class="tab_list_1" v-for="(item,index) in questionList" :key="index" @tap="toDetail(item.id)">
					<view class="tab_list_1_inner">
						<view class="article_title">{{item.title}}</view>
						<view class="img_list" v-if="item.images">
							<image v-for="(imgItem,index2) in item.images" :key="index2" class="img_list_style" :src="imgItem.s"></image>
						</view>
						<view class="author_info">
							<image class="author_img" :src="item.avatar.s"></image>
							<view class="author_name">{{item.nickname}}</view>
							<view class="author_name">{{item.create_time}}</view>
						</view>
						<view>
							<view class="time_style">{{item.answer_num}} 回答</view>
							<view class="time_style read_num">{{item.like_num}} 点赞</view>
							<view class="time_style read_num">{{item.view_num}} 浏览</view>
						</view>
						<view class="article_money">
							<image class="money_img" src="../../static/img/icon_shang@2x.png"></image>
							<view class="money_num">{{item.price}}</view>
							<image class="money_img money_img1" src="../../static/img/icon_bu@2x.png"></image>
							<view class="money_num money_num1">{{item.subsidy || 0}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出框 -->
		<uni-popup ref="popup" type="center" class="ask_popup" maskClick="false"> 
			<view class="popup_content">
				<image class="popup_close" @tap="closePopup" src="../../static/img/btn_closed@2x.png" mode=""></image>
				<view class="popup_title">筛 选</view>
				<view class="popup_selected">
					<view class="popup_selected_title">已选:</view>
					<view class="popup_selected_tag" v-for="(item,index) in checkedList" :key="index">
						{{item.tag_title}}
						<image @tap="deleteTag(item,index)" class="tag_close" src="../../static/img/btn_label_close@2x.png"></image>
					</view>
				</view>
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
					<view class="popup_sure"  @tap="sure_tag">确 定</view>
					<view class="popup_sure popup_reset" @tap="reset_tag">重 置</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { question_list,get_tags } from '../../api/api.js'
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components: {
			uniPopup,
			uniCollapse,
			uniCollapseItem
			},
		data() {
			return {
				type: 1,
				searchContent:'',
				tabCurrentIndex:0,
				questionList: [],
				tagList: [],
				tags: '',
				checkedList: [],
				navList: [
					{
						state: 0,
						text: '推荐'
					},
					{
						state: 1,
						text: '最新'
					},
					{
						state: 2,
						text: '热门'
					},
					{
						state: 3,
						text: '冷门'
					}
				],
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
			that.getHotQuestion()
			that.getTags()
		},
		methods: {
			// tab切换
			tabClick(index){
				let that = this
				this.tabCurrentIndex = index
				if(index == 0){ //1-推荐，2-最新，3-热门，4-冷门
					that.type = 1
				}else if(index == 1){
					that.type = 2
				}else if(index == 2) {
					that.type = 3
				}else if(index == 2){
					that.type = 4
				}
				that.tags = ''
				that.getHotQuestion()
			},
			//点击跳转问题
			toDetail(id){
				uni.navigateTo({
					url: '../questionDetail/questionDetail?id=' + id,
				})
			},
			//获取标签列表
			getTags(){
				let that = this
				get_tags({
					member_id: that.member_id,
					access_token: that.access_token
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
				// that.checkedList.push(that.tagList[index].child[tagsIndex])
				that.checkedList = []
				that.tagList[index].child[tagsIndex].is_checked = 1
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						if(items.is_checked == 1){
							that.tags += items.id + ","
							that.checkedList.push(items)
						}
					})
				})
			},
			// 取消选中
			cancelTag(index,tagsIndex){
				let that = this
				that.tagList[index].child[tagsIndex].is_checked = 0
				that.checkedList = []
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						if(items.is_checked == 1){
							that.tags += items.id + ","
							that.checkedList.push(items)
						}
					})
				})
			},
			//删除选中标签
			deleteTag(item,index){
				let that = this
				that.checkedList.splice(index,1)
				that.tagList.forEach((item1,index) =>{
					item1.child.forEach((items,index2) =>{
						if(items.id == item.id){
							items.is_checked = 0
						}
					})
				})
			},
			// 标签选择确定
			sure_tag(){
				let that = this
				that.checkedList = []
				that.tags = ''
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						if(items.is_checked == 1){
							that.tags += items.id + ","
						}
					})
				})
				//去除最后一个逗号
				that.tags = that.tags.substr(0, that.tags.length-1);
				that.$refs.popup.close()
				that.getHotQuestion()
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
			// 获取热门问答列表
			getHotQuestion(){
				let that = this
				that.questionList = []
				question_list({
					member_id: that.member_id,
					access_token: that.access_token,
					type: that.type, //1-推荐，2-最新，3-热门，4-冷门
					seartag: that.tags,//筛选的标签（多个标签 id 用,号隔开）
					reward : 2,//1-升序，2-降序
					page: 1,
					limit: 10
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.questionList = res.data.data.list
						// 把所有标签置为未选中
						that.tagList.forEach((item,index) =>{
							item.child.forEach((childItem,index1) =>{
								childItem.is_checked = 0
							})
						})
					}
				})
			},
			// 打开弹出层
			openPopup(){
				this.$refs.popup.open()
			},
			// 关闭弹出层
			closePopup(){
				this.$refs.popup.close()
			}
		}
	}
</script>
