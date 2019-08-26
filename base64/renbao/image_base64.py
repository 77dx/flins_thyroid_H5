#coding:utf-8

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
base_url = "http://192.168.5.111"
log = Loggers(level='info')

#获取七牛token
def get_qiniuToken():
    header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json"}
    r = requests.post(base_url+'/business/rb/getQiNiuToken',headers=header)
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
def upload(token,base):
    data = base
    header = {"Authorization":"UpToken "+token,"Content-Type":"application/octet-stream"}
    r = requests.post('https://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
    d = r.text
    s = json.loads(d)
    key = s["key"]
    xls_key(key)
    return key

#提交图片
def submit(key):
    data = {"imgUrl":key}
    header = {"Accept":"application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post(base_url+"/business/rb/submit",data=json.dumps(data),headers=header)
    d = r.text
    try:
        if d:
            s = json.loads(d)
            return s["data"]["id"]
    except:
        log.logger.error(key+"提交失败")

#获取测评结果
def query(id):
    data = {"id":id}
    header = {"Accept": "application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post(base_url+'/business/rb/query',data=json.dumps(data),headers=header)
    d = r.text
    s = json.loads(d)
    data_list = [s["data"]["id"],s["data"]["imgUrl"],s["data"]["content"],s["data"]["tiRands"],s["data"]["acr"],s["data"]["pointEcho"]]
    log.logger.info(data_list)
    xls(data_list)

'''
结果保存到excel
'''
#把七牛key保存excel
def xls_key(key):
    workbook = xlrd.open_workbook('data.xls', formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum, 0, key)
    newbook.save('data.xls')

#把测评结果保存excel
def xls(data_list):
    workbook = xlrd.open_workbook('data.xls', formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    for col in range(len(data_list)):
        newsheet.write(rownum-1, col+1, data_list[col])
    newbook.save('data.xls')

#新建excel文件
def new_xls():
    try:
        if os.path.exists('data.xls'):
            os.remove('data.xls')
    except :
        log.logger.warning("data.xls不存在")
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["key","id", u"imgUrl",u"content", u"tiRands", u"acr", u"pointEcho"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save('data.xls')


#人保B超测评
def renbao():
    #创建xls文件
    new_xls()
    # 遍历图片文件
    image_url = 'D:/image'
    imageList = os.listdir(image_url)
    for i in imageList:
        image = image_url + '/' + i
        try:
            token = get_qiniuToken()  # 获取七牛token
            base = open_image(image)  # 图片转base64
            key = upload(token, base)  # 上传图片
            id = submit(key)  # 提交测评#
            query(id)  # 获取测评结果
        except:
            continue

if __name__ == '__main__':

    #开始时间
    start = datetime.datetime.now()
    #执行人保测评
    renbao()
    #结束时间
    end = datetime.datetime.now()
    print('运行时长：'+str((end - start).seconds)+'秒')




