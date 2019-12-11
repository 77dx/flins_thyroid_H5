# -*- coding:utf-8 -*-
import datetime
import requests
import json
import xlrd
from xlutils.copy import copy
import pandas as pd
import os
from util.logger import Loggers
import xlwt
import base64

log = Loggers(level='info')
base_url = "http://192.168.5.111"
token = "16d1304164174ee9b851b7f6d37c9ead"


#新建excel文件
def new_xls(file):
    try:
        if os.path.exists(file):
            os.remove(file)
    except :
        log.logger.warning(file+"不存在")
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["image","BText","state","prediction"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save(file)

#把image保存excel
def xls_image(file,image):
    workbook = xlrd.open_workbook(file, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum, 0, image)
    newbook.save(file)

#把测评结果保存excel
def xls(data_list,file):
    workbook = xlrd.open_workbook(file, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    for col in range(len(data_list)):
        newsheet.write(rownum-1, col+1, data_list[col])
    newbook.save(file)


#获取七牛token
def get_qiniuToken():
    header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","token":token}
    r = requests.post(base_url+"/customer/qiniu/getQiNiuToken",headers=header)
    d = r.text
    s = json.loads(d)
    log.logger.info(s)
    return s["data"]["qiNiuToken"]

#图片转base64
def open_image(filename):
    f = open(filename,'rb')
    res = f.read()
    s = base64.b64encode(res)
    return s

#上传图片数据流
def upload(qiniu_token,base):
    data = base
    header = {"Authorization":"UpToken "+qiniu_token,"Content-Type":"application/octet-stream"}
    r = requests.post('https://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
    d = r.text
    s = json.loads(d)
    key = s["key"]
    log.logger.info(s)
    return key

def baiduOCR(key):
    header = {"Content-Type": "application/json"}
    r = requests.get(base_url+'/customer/demo/baiduOCR?url='+key,headers=header)
    d = r.text
    s = json.loads(d)
    log.logger.info(s["data"])
    return s["data"]


def yidiansan(data):
    header = {"Content-Type": "application/json"}
    r = requests.get(base_url + '/thyroid/yidiansan',data=json.dumps(data),headers = header)
    d = r.text

    s = json.loads(d)
    text = s["BText"].encode("GBK").decode("GBK")
    data_list = [text,s["state"],s["prediction"]]
    log.logger.info(data_list)
    return data_list


def run(image_url,file):
    new_xls(file)
    df = pd.read_excel('labels2.xls')
    image = df['image'].values
    list = image.tolist()
    for i in list:
        try:
            image = image_url + "/" + i
            xls_image(file, i)
            log.logger.info("image:" + i)
            qiniutoken = get_qiniuToken()  # 获取七牛token
            base = open_image(image)  # 图片转base64
            key = upload(qiniutoken, base)  # 上传图片
            data = baiduOCR(key)
            data_list = yidiansan(data)
            xls(data_list, file)
        except:
            continue


if __name__ == '__main__':
    # 开始时间
    start = datetime.datetime.now()
    # 执行人保测评
    run('D:/samples2', 'results_2.xls')
    # 结束时间
    end = datetime.datetime.now()
    print('运行时长：' + str((end - start).seconds) + '秒')






