# -*- coding:utf-8 -*-

import requests
import json
import xlrd
from xlutils.copy import copy
import pandas as pd
import os
import xlwt
import ast
from modelTest.logger import Loggers


log = Loggers(level='info')

#把测评结果保存excel
def xls(data_list,file):
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
    title = ["BText","state","prediction"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save(file)

#提取json参数
def get_param(source_file):
    df = pd.read_excel(source_file)
    json_data = df['param'].values
    print(type(json_data))
    list = json_data.tolist()
    return list

#请求模型接口
def yidiansan(params):
    header = {"Content-Type":"application/json;charset=UTF-8"}
    r = requests.post('http://192.168.5.200:5676/yidiansan',data=json.dumps(params),headers=header)
    d = r.text
    try:
        if d:
            s = json.loads(d)
            text = s["BText"].encode("utf-8").decode("utf-8")
            data_list = [text,s["state"],s["prediction"]]
            return data_list
    except:
        log.logger.error(d + "提交失败")

if __name__ == '__main__':
    new_xls('results.xls')
    json_data = xlrd.open_workbook("json_data.xls")
    sheet = json_data.sheets()[0]
    params = {}
    for row in sheet.get_rows():
        params = row[1].value
        print(type(params))












