#coding:utf-8

import base64
import os
import requests
import json
import xlwt
import xlrd
from xlutils.copy import copy



#获取七牛上传token
def get_qiniuToken():
    header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json"}
    r = requests.post('http://192.168.5.111/business/rb/getQiNiuToken',headers=header)
    d = r.text
    s = json.loads(d)
    return s["data"]["qiNiuToken"]

#将图片保存为base64格式
def open_image(filename):
    f = open(filename,'rb')
    res = f.read()
    s = base64.b64encode(res)
    return s

#上传B超图片
def upload(token,base):
    data = base
    header = {"Authorization":"UpToken "+token,"Content-Type":"application/octet-stream"}
    r = requests.post('http://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
    d = r.text
    s = json.loads(d)
    return s["key"]

#提交B超报告
def submit(key):
    data = {"imgUrl":key}
    header = {"Accept":"application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post("http://192.168.5.111/business/rb/submit",data=json.dumps(data),headers=header)
    d = r.text
    s = json.loads(d)
    return s["data"]["id"]

#查询B超评级结果
def query(id):
    data = {"id":id}
    header = {"Accept": "application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post('http://192.168.5.111/business/rb/query',data=json.dumps(data),headers=header)
    d = r.text
    s = json.loads(d)
    data_list = [s["data"]["id"],s["data"]["imgUrl"],s["data"]["content"],s["data"]["acr"],s["data"]["tiRands"],s["data"]["pointEcho"]]
    xls(data_list)

#给excel写入数据
def xls(data_list):
    workbook = xlrd.open_workbook('data.xls', formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    for col in range(len(data_list)):
        newsheet.write(rownum, col, data_list[col])
    newbook.save('data.xls')

#初始化excel文件
def new_xls():
    #判断是否有data.xls文件
    if(os.path.exists('data.xls')):
        #删除已有的data.xls文件
        os.remove('data.xls')
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["id", u"图片url",u"图片内容", u"ACR分类",u"TI-RADS评级", u"恶性特征"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save('data.xls')

if __name__ == '__main__':
    #初始化exceL
    new_xls()

    #遍历图片文件,提取数据，存入excel
    image_url = 'D:/images'
    imageList = os.listdir(image_url)
    for i in imageList:
        image = image_url+'/'+i  #拼接图片绝对地址
        token = get_qiniuToken() #获取七牛token
        base = open_image(image) #把图片转成base64格式
        key = upload(token,base) #上传图片
        id = submit(key)         #提交
        query(id)                #获取测评结果






