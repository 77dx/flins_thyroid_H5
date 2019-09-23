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
token = 'cd77f6c43eb04767af5bb65ca19f7d48'

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

#获取七牛token
def get_qiniuToken():
    header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json","token":token}
    r = requests.post("http://192.168.5.111/customer/qiniu/getQiNiuToken",headers=header)
    d = r.text
    s = json.loads(d)
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
    header = {"Authorization":"UpToken "+qiniu_token,"Content-Type":"application/octet-stream","token":token}
    r = requests.post('https://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
    d = r.text
    print(d)
    s = json.loads(d)
    key = s["key"]
    return key

#提交腾讯OCR
def submit_tencent(key):
    url = "http://192.168.5.111/customer/demo/tencentOCR?url="+key
    r = requests.get(url)
    d = r.text
    s = json.loads(d)
    return s["data"]

#提交阿里OCR
def submit_alibaba(key):
    url = "http://192.168.5.111/customer/demo/aliOCR?url="+key
    r = requests.get(url)
    d = r.text
    s = json.loads(d)
    return s["data"]

#提交百度OCR
def submit_baidu(key):
    url = "http://192.168.5.111/customer/demo/baiduOCR?url="+key
    r = requests.get(url)
    d = r.text
    s = json.loads(d)
    return s["data"]

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

#把content1保存excel
def xls_content(content,xls_name):
    workbook = xlrd.open_workbook(xls_name, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum-1, 1, content)
    newbook.save(xls_name)

#把content2保存excel
def xls_content_ali(content,xls_name):
    workbook = xlrd.open_workbook(xls_name, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum-1, 2, content)
    newbook.save(xls_name)


#把content3保存excel
def xls_content_baidu(content,xls_name):
    workbook = xlrd.open_workbook(xls_name, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum-1, 3, content)
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
    title = ["image","tencent","alibaba","baidu"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save(xls_name)


#OCR测试
def tencentTest(image_url,xls_name):
    # 创建xls文件
    new_xls(xls_name)
    # 遍历图片文件
    image_url = image_url
    imageList = os.listdir(image_url)
    for i in imageList:
        image = image_url + '/' + i
        xls_imageUrl(image,xls_name)
        print(image)
        qiniu_token = get_qiniuToken()
        print(qiniu_token)
        base = open_image(image)
        key = upload(qiniu_token,base)
        print(key)
        content = submit_tencent(key)#腾讯结果
        print(content)
        xls_content(content,xls_name)
        content_ali = submit_alibaba(key)  #阿里结果
        xls_content_ali(content_ali,xls_name)
        content_baidu = submit_baidu(key)   #百度结果
        xls_content_baidu(content_baidu,xls_name)

#百度ocr测试
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
    tencentTest('D:/test', "result.xls")
    #结束时间
    end = datetime.datetime.now()
    print('运行时长：'+str((end - start).seconds)+'秒')











