# -*- coding:utf-8 -*-
import pymysql


def operatedb(db,type,sql):
    conn = pymysql.connect(user='root', passwd='flins123', db=db, port=3306, host='192.168.5.108',charset='utf8')
    cursor = conn.cursor()
    cursor.execute(sql)
    result = cursor.fetchone()
    try:
        if type != 'select':
            conn.commit()
        else:
            return result[0]
    finally:
        cursor.close()
        conn.close()




if __name__ == '__main__':
    id = 1478
    sql = 'select nick_name from customer_user_wechat where user_id = %s' %id
    sql2 = 'UPDATE customer_user_wechat SET city = "上海" WHERE nick_name like "鱼小七%"'
    r = operatedb('member','select',sql)
    print r