# -*- coding:utf-8 -*-
import pymysql


def executeSql():
    sql = "select `nick_name` from customer_user_wechat where user_id=1"
    conn = pymysql.connect(user='root', passwd='flins123', db='member', port=3306, host='192.168.5.108', charset='utf8')
    cursor = conn.cursor()
    action = cursor.execute(sql)
    result = cursor.fetchmany(action)
    print(result)

    # conn.commit()
    cursor.close()
    conn.close()