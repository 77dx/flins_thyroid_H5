<template>
	<view class="content">
		<view class="tab_content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">{{ item.text }}</view>
			</view>
			<view class="no_data" v-if="mybuyList.length == 0">暂无数据...</view>
			<!-- 视频 -->
			<view class="tab_list" v-if="mybuyList.length > 0">
				<view v-for="(item,index) in mybuyList" :key="index" @tap="toDetail(item.id)">
					<!-- 有图 -->
					<view class="tab_list_2" v-if="item.images">
						<image class="tab_list_2_img" :src="item.images[0]"></image>
						<view class="tab_list_2_right">
							<view class="article_title">{{item.title}}</view>
							<view class="tab_list2_label">{{item.tag_title}}</view>
							<view class="tab_list_botton">
								<view class="watch_people">{{item.view_num}}人看过</view>
							</view>
						</view>
					</view>
					<!-- 无图 -->
					<view class="tab_list_1" v-if="!item.images">
						<view class="tab_list_1_inner">
							<view class="article_title">{{item.title}}</view>
							<view class="time_style">{{item.tag_title}}</view>
							<view class="time_style read_num">{{item.view_num}}人看过</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { user_buyfiles } from '../../api/api.js'
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				access_token: '',
				member_id: '',
				navList: [
					{
						state: 0,
						text: '视频'
					},
					{
						state: 1,
						text: '文档'
					}
				],
				mybuyList: [],
				type: 1
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
			that.getmybuyList()
		},
		methods: {
			// tab切换
			tabClick(index){
				let that = this
				that.tabCurrentIndex = index
				if(index == 0){
					that.type = 1
				}else if(index == 1){
					that.type = 2
				}
				that.getmybuyList()
			},
			getmybuyList(){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					type: that.type,//1-视频，2-文档
					page: 1,
					limit: 10
				}
				user_buyfiles(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.mybuyList = res.data.data.list
					}
				})
			},
			//跳转详情
			toDetail(id){
				let that = this
				if(type == 1){
					uni.navigateTo({
						url: '../videoDetail/videoDetail?id=' + id
					})
				}else if(type == 2){
					uni.navigateTo({
						url: '../fileDetail/fileDetail?id=' + id
					})
				}
			}
		}
	}
</script>

<style>

</style>
