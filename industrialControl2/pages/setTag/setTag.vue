<template>
	<view class="content" style="width: 92%;margin: 0 auto;">
		<view class="tag_tips">请最少选择一个，最多选择 5 个，已选 {{checkedCount}} 个</view>
		<view class="popup_content" >
			<view v-for="(item,index) in tagList" :key= "index">
				<view class="popup_list">
					<view style="font-size: 30rpx;color: #333333;">{{item.tag_title}}</view>
				</view>
				<view class="popup_tag_list" v-for="(tagsItem,tagsIndex) in item.child" :key="tagsIndex">
					<view class="popup_label" v-if="tagsItem.is_checked == 0" @tap="checkTag(index,tagsIndex)">{{tagsItem.tag_title}}</view>
					<view class="popup_label .popup_label_selected" v-if="tagsItem.is_checked == 1" @tap="cancelTag(index,tagsIndex)">{{tagsItem.tag_title}}<image class="selected_img" src="../../static/img/icon_babel_selected@2x.png"></image></view>
				</view>
			</view>
		</view>
		<button class="sure_btn" @tap="submitTag"> 确 定</button>
	</view>
</template>

<script>
	import { get_tags,tag_add } from '../../api/api.js'
	export default {
		data() {
			return {
				member_id: '',
				access_token: '',
				tagList: [],
				checkedCount: 0
			}
		},
		onLoad() {
			console.log(this)
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
			that.getTags()
		},
		methods: {
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
					}
				})
			},
			// 选中标签
			checkTag(index,tagsIndex){
				let that = this
				that.tagList[index].child[tagsIndex].is_checked = 1
				that.checkedCount = 0
				let count = 0
				// 遍历出选中的有几个
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						if(items.is_checked == 1){
							count ++
						}
					})
				})
				that.checkedCount = count
			},
			// 取消选中
			cancelTag(index,tagsIndex){
				let that = this
				that.tagList[index].child[tagsIndex].is_checked = 0
				that.checkedCount = 0
				let count = 0
				// 遍历出选中的有几个
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						if(items.is_checked == 1){
							count ++
						}
					})
				})
				that.checkedCount = count
			},
			// 标签提交
			submitTag(){
				let that = this
				let tags = ''
				that.tagList.forEach((item,index1) =>{
					item.child.forEach((items,index2) =>{
						if(items.is_checked == 1){
							tags += items.id + ","
						}
					})
				})
				//去除最后一个逗号
				tags = tags.substr(0, tags.length-1);
				console.log(tags)
				tag_add({
					member_id: this.member_id,
					access_token: this.access_token,
					tagids: tags
				}).then(res => {
					console.log(res)
					if(res.data.code == 1){
						uni.showToast({
							title: '标签设置成功!',
							duration: 2000,
							icon: 'none'
						});
						uni.switchTab({
						    url: '../index/index'
						});
					}
				})
			}
		}
	}
</script>

