<template>
<view>
		<view class="customizeTabBar">
			<view class="tab">
				<view :class="massageTab=='0'?'item active':'item'" @click="navigationTo(0)">
					<view class="itemMenu">
						<view class="badge-red tabbar_badge">3</view>
						<faicon type="comment-o" size="18"></faicon>
					</view>
					<view>消息</view>
				</view>
				<view :class="massageTab=='1'?'item active':'item'" @click="navigationTo(1)">
					<faicon type="group"  size="18"></faicon>
					<view>好友</view>
				</view>
				<view class="item" @click="navigationTo(2)">
					<faicon type="lemon-o"  size="18"></faicon>
					<view>谷米</view>
				</view>
				<view :class="massageTab=='3'?'item active':'item'" @click="navigationTo(3)">
					<view class="itemMenu">
						<view class="badge-red tabbar_badge">8</view>
						<faicon type="group" size="18"></faicon>
					</view>
					<view>谷粒圈</view>
				</view>
				<view class="item" @click="navigationTo(4)">
					<faicon type="pagelines"  size="18"></faicon>
					<view>推荐</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import { mapState,mapMutations } from 'vuex';
    export default {
        data: function () {
            return {}
        }
        , computed: {
            ...mapState(['massageTab']),
        }
        , methods: {
            ...mapMutations(['massageView']),
            navigationTo: function (i) {
                let vm = this;
                switch (i) {
                    case 0:
                        uni.setNavigationBarTitle({
                            'title': '消息中心'
                            , success() {
                                vm.massageView(i);
                            }
                        })
                        break;
                    case 1:
                        uni.setNavigationBarTitle({
                            'title': '通讯录'
                            , success() {
                                vm.massageView(i);
                            }
                        })
                        break;
                    case 2:
                        uni.switchTab({
                            url: '/pages/guli/index'
                            , success() {
                                vm.massageView(0);
                            }
                        });
                        break;
                    case 3:
                        uni.setNavigationBarTitle({
                            'title': '谷米圈'
                            , success() {
                                vm.massageView(i);
                            }
                        })
                        break;
                    case 4:
                        uni.switchTab({
                            url: '/pages/index/index'
                            , success() {
                                vm.massageView(0);
                            }
                        });
                        break;
                }
            },
        },
    }
</script>
<style>
		/* 自定义tabbar */
		.customizeTabBar { overflow-y: scroll!important;}
		.customizeTabBar .swiper-item {
			display: flex;
			width: 100%;
			height: 100%;
		}
		.customizeTabBar .uni-icon {
			margin-top: 0;
			color: #ccc;
		}
		.customizeTabBar .tab {
			position: fixed;
			z-index: 999;
			height: 100upx;
			width: 100%;
			bottom: 0;
			background-color: #fff;
			display: flex;
			border-top: #e2e2e2 1px solid;
		}
		.customizeTabBar .tab .item {
			width: 20%;
			color: #ccc;
			font-size: 24px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
		}
		.customizeTabBar .active {
			color: #F23030 !important;
		}
		.customizeTabBar .active .uni-icon {
			color: #F23030;
		}
		.item faicon{width: 18px;}
		.itemMenu{ position: relative; text-align: center;}
		.tabbar_badge{
			background-color: #F23030; color: #fff;
			position: absolute;
			border-radius: 50%;
			text-align: center;
			font-size: 10px;
			min-width: 1em;
			min-height: 1em;
			padding: 1px;
			line-height: 100%;
			white-space: nowrap;
			right: -0.5em;
			top: -0.3em;
		}
		/* 自定义tabbar    end*/
</style>
