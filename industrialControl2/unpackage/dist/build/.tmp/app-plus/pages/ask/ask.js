(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ask/ask"],{"312d":function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return a})},"41ac":function(t,e,n){"use strict";(function(t,c){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("6b26"),i=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"6282"))},s=function(){return n.e("components/uni-collapse/uni-collapse").then(n.bind(null,"4f7e"))},o=function(){return n.e("components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"a78b"))},u={components:{uniPopup:i,uniCollapse:s,uniCollapseItem:o},data:function(){return{type:1,searchContent:"",tabCurrentIndex:0,questionList:[],tagList:[],tags:"",checkedList:[],navList:[{state:0,text:"推荐"},{state:1,text:"最新"},{state:2,text:"热门"},{state:3,text:"冷门"}]}},onLoad:function(){var e=this;t.getStorage({key:"access_token",success:function(t){e.access_token=t.data}}),t.getStorage({key:"member_id",success:function(t){e.member_id=t.data}}),console.log(c(e.member_id," at pages\\ask\\ask.vue:128")),console.log(c(e.access_token," at pages\\ask\\ask.vue:129")),e.getHotQuestion(),e.getTags()},methods:{tabClick:function(t){var e=this;this.tabCurrentIndex=t,0==t?e.type=1:1==t?e.type=2:2==t?e.type=3:2==t&&(e.type=4),e.tags="",e.getHotQuestion()},toDetail:function(e){t.navigateTo({url:"../questionDetail/questionDetail?id="+e})},getTags:function(){var t=this;(0,a.get_tags)({member_id:t.member_id,access_token:t.access_token}).then(function(e){console.log(c(e," at pages\\ask\\ask.vue:163")),1==e.data.code&&(t.tagList=e.data.data.list,console.log(c(t.tagList," at pages\\ask\\ask.vue:166")),t.tagList.forEach(function(t,e){t.child.forEach(function(t,e){t.is_checked=0})}))})},checkTag:function(t,e){var n=this;n.checkedList=[],n.tagList[t].child[e].is_checked=1,n.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&(n.tags+=t.id+",",n.checkedList.push(t))})})},cancelTag:function(t,e){var n=this;n.tagList[t].child[e].is_checked=0,n.checkedList=[],n.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&(n.tags+=t.id+",",n.checkedList.push(t))})})},deleteTag:function(t,e){var n=this;n.checkedList.splice(e,1),n.tagList.forEach(function(e,n){e.child.forEach(function(e,n){e.id==t.id&&(e.is_checked=0)})})},sure_tag:function(){var t=this;t.checkedList=[],t.tags="",t.tagList.forEach(function(e,n){e.child.forEach(function(e,n){1==e.is_checked&&(t.tags+=e.id+",")})}),t.tags=t.tags.substr(0,t.tags.length-1),t.$refs.popup.close(),t.getHotQuestion()},reset_tag:function(){var t=this;t.checkedList=[],t.tagList.forEach(function(t,e){t.child.forEach(function(t,e){t.is_checked=0})})},getHotQuestion:function(){var t=this;t.questionList=[],(0,a.question_list)({member_id:t.member_id,access_token:t.access_token,type:t.type,seartag:t.tags,reward:2,page:1,limit:10}).then(function(e){console.log(c(e," at pages\\ask\\ask.vue:257")),1==e.data.code&&(t.questionList=e.data.data.list,t.tagList.forEach(function(t,e){t.child.forEach(function(t,e){t.is_checked=0})}))})},openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"627e":function(t,e,n){"use strict";(function(t){n("91f7"),n("921b");c(n("66fd"));var e=c(n("f326"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6ff5":function(t,e,n){"use strict";n.r(e);var c=n("41ac"),a=n.n(c);for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);e["default"]=a.a},f326:function(t,e,n){"use strict";n.r(e);var c=n("312d"),a=n("6ff5");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var s=n("2877"),o=Object(s["a"])(a["default"],c["a"],c["b"],!1,null,null,null);e["default"]=o.exports}},[["627e","common/runtime","common/vendor"]]]);