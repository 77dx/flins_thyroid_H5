<template>
	<view class="video_detail">
		<view>{{fileDetail.title}}</view>
		<!-- 评论 -->
		<view class="tab_list">
			<view class="comment_content" v-if="commentList.length > 0">
				<view class="comment_list" v-for="(item,index) in commentList" :key="index">
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
				</view>
			</view>
			<view v-else class="no_data">暂无评论...</view>
		</view>	
	</view>
</template>

<script>
	import { file_info,comments_list } from '../../api/api.js'
	export default {
		data() {
			return {
				fileId: '',
				access_token: '',
				member_id: '',
				commentList: [],
				fileDetail: {}
			}
		},
		onLoad(option) {
			let that = this
			that.fileId = option.id
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
			that.getFileDetail()
		},
		methods: {
			//获取文档详情
			getFileDetail(){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					file_id: that.fileId
				}
				file_info(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.fileDetail = res.data.data
					}
				})
			},
			//获取评论列表
			getCommentsList(){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					post_id: that.fileId,
					type: 3, //1-新闻，2-视频，3-文档
					page: 1,
					limit: 10
				}
				comments_list(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.commentList = res.data.data.list
					}
				})
			}
		}
	}
</script>
