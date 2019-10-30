# -*- coding:utf-8 -*-
from __future__ import unicode_literals
import requests
import xlrd
from xlutils.copy import copy
import os
from util.logger import Loggers
import xlwt
import json
import base64

'''
    获取B端七牛人保图片的key
'''
class GetKey():

    def __init__(self):
        self.log = Loggers(level='info')
        self.base_url = "http://192.168.5.111"

    #获取七牛token
    def get_qiniuToken(self):
        header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json"}
        r = requests.post(self.base_url+"/business/rb/getQiNiuToken",headers=header)
        d = r.text
        s = json.loads(d)
        self.log.logger.info(s)
        return s["data"]["qiNiuToken"]

    #图片转base64
    def open_image(self,filename):
        f = open(filename,'rb')
        res = f.read()
        s = base64.b64encode(res)
        return s

    #上传图片数据流
    def upload(self,qiniu_token,base):
        data = base
        header = {"Authorization":"UpToken "+qiniu_token,"Content-Type":"application/octet-stream"}
        r = requests.post('https://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
        d = r.text
        s = json.loads(d)
        key = s["key"]
        self.log.logger.info(s)
        return key

    #新建excel文件
    def new_xls(self,file):
        try:
            if os.path.exists(file):
                os.remove(file)
        except :
            self.log.logger.warning(file+"不存在")
        book = xlwt.Workbook()
        sheet = book.add_sheet("sheet1")
        title = ["image","key"]
        for col in range(len(title)):
            sheet.write(0, col, title[col])
        book.save(file)

    # 把image保存excel
    def xls_image(self,file, image):
        workbook = xlrd.open_workbook(file, formatting_info=True)
        sheet = workbook.sheets()[0]
        newbook = copy(workbook)
        newsheet = newbook.get_sheet(0)
        rownum = sheet.nrows
        newsheet.write(rownum, 0, image)
        newbook.save(file)

    # 把key保存excel
    def xls_key(self,file, key):
        workbook = xlrd.open_workbook(file, formatting_info=True)
        sheet = workbook.sheets()[0]
        newbook = copy(workbook)
        newsheet = newbook.get_sheet(0)
        rownum = sheet.nrows
        newsheet.write(rownum-1, 1, key)
        newbook.save(file)

    def run(self):
        # 初始化exceL
        g = GetKey()
        g.new_xls('keys.xls')

        # 遍历图片文件,提取数据，存入excel
        image_url = 'D:/test'
        imageList = os.listdir(image_url)
        for i in imageList:
            try:
                print(i)
                image = image_url + '/' + i  # 拼接图片绝对地址
                g.xls_image('keys.xls', i)
                token = g.get_qiniuToken()  # 获取七牛token
                base = g.open_image(image)  # 把图片转成base64格式
                key = g.upload(token, base)  # 上传图片
                print(key)
                g.xls_key('keys.xls', key)
            except Exception as e:
                self.log.logger.info(e)

if __name__ == '__main__':
    g = GetKey()
    g.run()
