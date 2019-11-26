# -*- coding:utf-8 -*-
from util.operatedb import *


#用户成为会员
class becomeMember():
    #1.删除用户
    def del_user(self):
        sql = 'delete c,w from customer_user c ,customer_user_wechat w where c.id = w.user_id AND w.nick_name like "鱼小七%"'
        operatedb('member','delete',sql)
        print('用户删除成功')

    #2.查询用户user_id
    def getUserId(self):
        mem_sql = 'SELECT user_id from member.customer_user_wechat where nick_name like "鱼小七%"'
        user_id = operatedb('member','select',mem_sql)
        print('用户id:'+user_id)
        return user_id

    #3.插入evaluation库
    def eva_insert(self):
        sql = 'INSERT INTO `evaluation`.`user_member`(`user_id`, `order_id`, `member_id`, `status`, `expire_time`, `create_time`, `description`) VALUES (1477, 0, 3, 1, "2019-12-01 10:50:40", "2019-08-23 08:50:42", '')'
        operatedb('evaluation','insert',sql)
        print('evaluation第一次插入成功')


    #4.查询插入的序号
    def eva_product(self):
        sql = 'SELECT project_id FROM evaluation.user_product ORDER BY id DESC LIMIT 1'
        project_id = operatedb('evaluation','select',sql)
        print('project_id:'+project_id)
        return project_id

    #5.插入会员数据
    def eva_insert_product(self,user_id,project_id):
        sql = 'INSERT into evaluation.user_product (user_id,product_id,order_id,type,project_id,`status`,total_num,num,create_time) values(%s,1,0,1,%s,2,100,100,"2018-12-26 15:43:59")' (user_id,project_id)
        operatedb('evaluation','insert',sql)
        print('evaluation第二次插入成功')

    def action(self):
        try:
            # self.del_user()
            user_id = self.getUserId()
            print user_id
            # self.eva_insert()
            # project_id = self.eva_product()
            # self.eva_insert_product(user_id,project_id)
            print '会员操作成功'
        except Exception as e:
            print('数据库操作异常',e)


if __name__ == '__main__':
    a = becomeMember()
    a.action()