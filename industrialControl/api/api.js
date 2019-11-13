import {
	http
} from '../util/request/index.js'

// 用户登录
export const login = data => {
	return http.post('/industry/api/login', data)
}
// 发送验证码
export const send_code = data => {
	return http.post('/industry/api/send_code', data)
}
// 标签列表
export const get_tags = data => {
	return http.post('/industry/api/get_tags', data)
}
// 4. 添加、修改标签
export const tag_add = data => {
	return http.post('/industry/api/tag_add', data)
}
// 问答列表
export const question_list = data => {
	return http.post('/industry/api/question_list', data)
}
// 问答详情
export const question_info = data => {
	return http.post('/industry/api/question_info', data)
}
// 添加回答
export const user_add_answer = data => {
	return http.post('/industry/api/user_add_answer', data)
}
// 添加回答评论
export const user_add_comment = data => {
	return http.post('/industry/api/user_add_comment', data)
}
// 问答详情中的回答列表
export const answer_lists = data => {
	return http.post('/industry/api/answer_lists', data)
}
// 回答详情
export const answer_info = data => {
	return http.post('/industry/api/answer_info', data)
}
// 回答详情中评论列表
export const answer_comment = data => {
	return http.post('/industry/api/answer_comment', data)
}
// 采纳回答
export const adopt_answer = data => {
	return http.post('/industry/api/adopt_answer', data)
}
// 添加问题
export const question_add = data => {
	return http.post('/industry/api/question_add', data)
}
//  收藏内容
export const user_addfav = data => {
	return http.post('/industry/api/user_addfav', data)
}
//   达人列表
export const people_list = data => {
	return http.post('/industry/api/people_list', data)
}
//   关注达人
export const user_add_follow = data => {
	return http.post('/industry/api/user_add_follow', data)
}
// 我的关注、我的粉丝
export const user_people_list = data => {
	return http.post('/industry/api/user_people_list', data)
}
//  达人详情
export const people_infos = data => {
	return http.post('/industry/api/people_infos', data)
}
//  达人详情中回答列表
export const people_answer_lists = data => {
	return http.post('/industry/api/people_answer_lists', data)
}
//  我的页面的问答列表
export const my_question_list = data => {
	return http.post('/industry/api/my_question_list', data)
}
//  个人中心信息
export const home_info = data => {
	return http.post('/industry/api/home_info', data)
}
// 多图上传
export const add_pics = data => {
	return http.post('/industry/api/add_pics', data)
}
// 视频上传
export const add_video = data => {
	return http.post('/industry/api/add_video', data)
}