# -*- coding:utf-8 -*-

import requests
import json
import xlrd
from xlutils.copy import copy
import pandas as pd
import os
from renbao.logger import Loggers
import xlwt
import ast
import pymysql


log = Loggers(level='info')

#把测评结果保存excel
def xls(data_list,file):
    workbook = xlrd.open_workbook(file, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    for col in range(len(data_list)):
        newsheet.write(rownum-1, col+2, data_list[col])
    newbook.save(file)

#把测评结果保存excel
def xls_path(data_list,file):
    workbook = xlrd.open_workbook(file, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    for col in range(len(data_list)):
        newsheet.write(rownum, col, data_list[col])
    newbook.save(file)

#新建excel文件
def new_xls(file):
    try:
        if os.path.exists(file):
            os.remove(file)
    except :
        log.logger.warning(file+"不存在")
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["id","path","BText","state","prediction"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save(file)

#提取json参数
def get_param(source_file):
    df = pd.read_excel(source_file,'utf-8')
    json_data = df['param'].values
    list = json_data.tolist()
    return list

def readSQL():
    sql = "SELECT `id`,`path`,`bTxt` from `thyroid_ocr` WHERE id>=2000"
    conn = pymysql.connect(user='root',passwd='flins123',db='evaluation',port=3306,host='192.168.5.108',charset='utf8')
    cursor = conn.cursor()
    cursor.execute(sql)
    result = cursor.fetchall()
    lists = list(result)
    cursor.close()
    conn.close()

    return lists



#请求模型接口
def yidiansan(params,file):
    params = ast.literal_eval(params)
    header = {"Content-Type":"application/json;charset=UTF-8"}
    r = requests.post('http://192.168.5.90:5676/yidiansan',data=json.dumps(params),headers=header)
    d = r.text
    try:
        if d:
            s = json.loads(d)
            text = s["BText"].encode("GBK").decode("GBK")
            data_list = [text,s["state"],s["prediction"]]
            xls(data_list,file)
            log.logger.info(data_list)
            return data_list
    except:
        log.logger.error(d + "提交失败")



#执行请求
def run(result_file):
    new_xls(result_file)
    list = readSQL()
    for i in list:
        id = str(i[0])
        image = str(i[1])
        data_list = [id,image]
        xls_path(data_list,result_file)
        s = str(i[2])
        yidiansan(s, result_file)


if __name__ == '__main__':
    run('results.xls')







