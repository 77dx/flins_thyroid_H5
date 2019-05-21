#coding:utf-8

import base64
import os
import requests
import json
import xlwt
import xlrd
from xlutils.copy import copy




def get_qiniuToken():
    header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json"}
    r = requests.post('https://mp.flins.com.cn/business/rb/getQiNiuToken',headers=header)
    d = r.text
    s = json.loads(d)
    return s["data"]["qiNiuToken"]

def open_image(filename):
    f = open(filename,'rb')
    res = f.read()
    s = base64.b64encode(res)
    return s

def upload(token,base):
    data = base
    header = {"Authorization":"UpToken "+token,"Content-Type":"application/octet-stream"}
    r = requests.post('https://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
    d = r.text
    s = json.loads(d)
    return s["key"]

def submit(key):
    data = {"imgUrl":key}
    header = {"Accept":"application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post("https://mp.flins.com.cn/business/rb/submit",data=json.dumps(data),headers=header)
    d = r.text
    s = json.loads(d)
    return s["data"]["id"]



def query(id):
    data = {"id":id}
    header = {"Accept": "application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"}
    r = requests.post('https://mp.flins.com.cn/business/rb/query',data=json.dumps(data),headers=header)
    d = r.text
    s = json.loads(d)
    data_list = [s["data"]["id"],s["data"]["imgUrl"],s["data"]["content"],s["data"]["tiRands"],s["data"]["acr"],s["data"]["pointEcho"]]
    xls(data_list)


def xls(data_list):
    workbook = xlrd.open_workbook('data.xls', formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    for col in range(len(data_list)):
        newsheet.write(rownum, col, data_list[col])
    newbook.save('data.xls')

#新建excel文件
def new_xls():
    os.remove('data.xls')
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["id", u"图片url",u"图片内容", u"测试评级", u"ACR分类", u"恶性特征"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save('data.xls')

if __name__ == '__main__':
    new_xls()
    #遍历图片文件
    image_url = 'D:/images'
    imageList = os.listdir(image_url)
    for i in imageList:
        image = image_url+'/'+i
        token = get_qiniuToken()
        base = open_image(image)
        key = upload(token,base)
        id = submit(key)
        query(id)






