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

# 获取七牛token
def get_qiniuToken():
    header = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json"}
    r = requests.post(base_url+"/business/rb/getQiNiuToken",headers=header)
    d = r.text
    s = json.loads(d)
    log.logger.info(s)
    return s["data"]["qiNiuToken"]

# 图片转base64
def open_image(filename):
    f = open(filename,'rb')
    res = f.read()
    s = base64.b64encode(res)
    return s

# 上传图片数据流
def upload(qiniu_token,base):
    data = base
    header = {"Authorization":"UpToken "+qiniu_token,"Content-Type":"application/octet-stream"}
    r = requests.post('https://upload-z2.qiniup.com/putb64/-1',data=data,headers=header)
    d = r.text
    s = json.loads(d)
    key = s["key"]
    log.logger.info(s)
    return key

# 转json串
def baiduOCR(key):
    header = {"Content-Type": "application/json;charset=UTF-8"}
    url = base_url+'/customer/demo/baiduOCR?url='+key
    r = requests.get(url,headers=header)
    d = r.text
    s = json.loads(d)
    log.logger.info(s["data"]["jSONContent"])
    return s["data"]["jSONContent"]

# 模型接口
def yidiansan(data):
    header = {"Content-Type": "application/json"}
    r = requests.post('http://192.168.5.200:5000/ceshi',data=json.dumps(data),headers = header)
    d = r.text
    s = json.loads(d)
    text = s["BText"].encode("GBK").decode("GBK")
    data_list = [text,s["prediction"]]
    log.logger.info(data_list)
    return data_list



def renbao_sun():
    new_xls('s.xls')
    df = pd.read_excel('results.xlsx')
    keys = df['img_url'].values
    local = 'D:/renbao/'

    for key in keys:
        try:
            xls_image('s.xls',key)
            image_name = local+key+'.jpg'
            qiniu = get_qiniuToken()
            base64 = open_image(image_name)
            key = upload(qiniu,base64)
            data = baiduOCR(key)
            data_list = yidiansan(data)
            xls(data_list,'s.xls')
        except Exception as e:
            log.logger.error(e)



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
    title = ["image","BText","prediction"]
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


#调模型出结果
def get_score(image_url,file):
    new_xls(file)
    df = pd.read_excel('images.xls')
    image = df['image'].values
    list = image.tolist()
    for i in list:
        try:
            image = image_url + "/" + i
            xls_image(file, i)
            log.logger.info("image:" + i)
            qiniutoken = get_qiniuToken()         # 获取七牛token
            base = open_image(image)              # 图片转base64
            key = upload(qiniutoken, base)        # 上传图片
            data = baiduOCR(key)
            data_list = yidiansan(data)
            xls(data_list, file)
        except:
            continue




if __name__ == '__main__':
    #开始时间
    start = datetime.datetime.now()
    #执行人保测评
    renbao_sun()
   # 结束时间
    end = datetime.datetime.now()
    print('运行时长：'+str((end - start).seconds)+'秒')
