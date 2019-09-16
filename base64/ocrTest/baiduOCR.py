# -*- coding:utf-8 -*-
import base64
import os
import requests
import json
import xlwt
import xlrd
from xlutils.copy import copy
from renbao.logger import Loggers
import datetime

'''
接口请求
'''
log = Loggers(level='info')

#获取access_token
def access_token():
    url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=KRzrMERjwvDqy1REF2ARzVfs&client_secret=lISmqGgWeot9WjhQSAmVrIrQOfYTXmAe'
    header = {'Content-Type':'application/json;charset=UTF-8'}
    r = requests.post(url,headers=header)
    d = r.text
    response = json.loads(d)
    return response["access_token"]

#请求百度ocr
def ocrApi(token,filename):
    url = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token='+token
    header = {"Content-Type":"application/x-www-form-urlencoded"}
    data = {"image":open_image(filename)}
    r = requests.post(url,headers=header,data=data)
    d = r.text
    response = json.loads(d)
    return response["words_result"]

#图片转base64
def open_image(filename):
    f = open(filename,'rb')
    res = f.read()
    s = base64.b64encode(res)
    return s

#上传图片数据流
def upload(token,base):
    data = base
    header = {"Authorization":"UpToken "+token,"Content-Type":"application/octet-stream"}
    r = requests.post('https://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
    d = r.text
    s = json.loads(d)
    key = s["key"]
    return key

'''
结果保存到excel
'''
#把图片地址保存excel
def xls_imageUrl(url,filename):
    workbook = xlrd.open_workbook(filename, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum, 0, url)
    newbook.save(filename)

#把content保存excel
def xls_content(content,xls_name):
    workbook = xlrd.open_workbook(xls_name, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum-1, 1, content)
    newbook.save(xls_name)

#新建excel文件
def new_xls(xls_name):
    try:
        if os.path.exists(xls_name):
            os.remove(xls_name)
    except :
        log.logger.warning(xls_name+"不存在")
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["image","content",]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save(xls_name)


#ocr测试
def ocrTest(image_url,xls_name):
    #创建xls文件
    new_xls(xls_name)
    # 遍历图片文件
    image_url = image_url
    imageList = os.listdir(image_url)
    for i in imageList:
        image = image_url + '/' + i
        print(image)
        token = access_token()
        s = ocrApi(token, image)
        words = []
        for i in s:
            r = dict(i)
            value = r.get('words')
            words.append(value)
        content = ''.join(words)
        xls_imageUrl(image, xls_name)
        xls_content(content, xls_name)


if __name__ == '__main__':

    #开始时间
    start = datetime.datetime.now()
    #执行测评
    ocrTest('D:/ThyroidBarImage', "baidu_2.xls")
    #结束时间
    end = datetime.datetime.now()
    print('运行时长：'+str((end - start).seconds)+'秒')











