#coding:utf-8

import base64
import os
import requests
import json
import xlwt
import xlrd
from xlutils.copy import copy
from util.logger import Loggers
import pandas as pd
import datetime

'''
接口请求
'''
# base_url = "http://api.flins.com.cn"
base_url = "http://mp.flins.com.cn"
log = Loggers(level='info')

#获取七牛token
def get_qiniuToken():
    header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json"}
    r = requests.post(base_url+"/business/rb/getQiNiuToken",headers=header)
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

#提交图片
def submit(key,file):
    data = {"imgUrl": key}
    header = {"Accept": "application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post(base_url + "/business/rb/submit", data=json.dumps(data), headers=header)
    d = r.text
    s = json.loads(d)
    try:
        log.logger.info(s)
        return s["data"]["id"]
    except:
        data_list = [s["code"],s["desc"]]
        xls(data_list,file)
        log.logger.error(s + "提交失败")

#获取测评结果
def query(id,file):
    data = {"id":id}
    header = {"Accept": "application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post(base_url+'/business/rb/query',data=json.dumps(data),headers=header)
    d = r.text
    s = json.loads(d)
    response_time = r.elapsed.total_seconds()*1000
    data_list = [s["data"]["imgUrl"],s["data"]["content"],s["data"]["score"],s["data"]["tiRands"],s["data"]["acr"],s["data"]["modelAcr"],s["data"]["pointEcho"],s["data"]["otherEcho"],s["data"]["lowEcho"],s["data"]["highEqualEcho"],s["data"]["extend"],s["data"]["form"],s["data"]["layeringCystic"],s["data"]["verticalBig"],response_time]
    log.logger.info(s)
    xls(data_list,file)

'''
结果保存到excel
'''

#新建excel文件
def new_xls(file):
    try:
        if os.path.exists(file):
            os.remove(file)
    except :
        log.logger.warning(file+"不存在")
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["image","imgUrl","content","score","tiRands","acr","modelAcr","pointEcho","otherEcho","lowEcho","highEqualEcho","extend","form","layeringCystic","verticalBig","response_time(ms)"]
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


#人保B超测评
def renbao(image_url,file):
    #创建xls文件
    new_xls(file)
    # 遍历图片文件
    imageList = os.listdir(image_url)
    for i in imageList:
        image = image_url + '/' + i
        try:
            token = get_qiniuToken()  # 获取七牛token
            base = open_image(image)  # 图片转base64
            key = upload(token, base)  # 上传图片
            id = submit(key,file)  # 提交测评#
            query(id,file)  # 获取测评结果
        except:
            continue

'''
    人保B超测评-samples图片验证2019-9-16
    先把label.xls image列的图片名称取出来
    存进列表，再循环取出拼接图片本地地址，
    再请求接口并保存接口返回内容。
'''
def renbao_sample(image_url,file):
    new_xls(file)
    df = pd.read_excel('labels2.xls')
    image = df['image'].values
    list = image.tolist()
    for i in list:
        try:
            image = image_url + "/" + i
            xls_image(file,i)
            log.logger.info("image:"+i)
            qiniutoken = get_qiniuToken()  # 获取七牛token
            base = open_image(image)  # 图片转base64
            key = upload(qiniutoken, base)  # 上传图片
            id = submit(key,file)  # 提交测评#
            query(id,file)  # 获取测评结果
        except:
            continue

def renbao_sample2(file):
    new_xls(file)
    df = pd.read_excel('labels_key.xls')
    image = df['image'].values
    list = image.tolist()
    keys = df["key"].values.tolist()
    for i,key in zip(list,keys):
        try:
            xls_image(file,i)
            log.logger.info("image:"+i)
            id = submit(key,file)  # 提交测评#
            query(id,file)  # 获取测评结果
        except:
            continue



if __name__ == '__main__':
    #开始时间
    start = datetime.datetime.now()
    #执行人保测评
    renbao_sample2('data_9-26.xls')
   # 结束时间
    end = datetime.datetime.now()
    print('运行时长：'+str((end - start).seconds)+'秒')







