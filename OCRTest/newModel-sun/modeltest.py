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
    header = {"Content-Type": "application/json"}
    r = requests.get(base_url+'/customer/demo/baiduOCR?url='+key,headers=header)
    d = r.text
    s = json.loads(d)
    log.logger.info(s["data"])
    return s["data"]

# 模型接口
def yidiansan(data):
    header = {"Content-Type": "application/json"}
    r = requests.post('http://192.168.5.200:5000/ceshi',data=json.dumps(data),headers = header)
    d = r.text
    # s = json.loads(d)
    # text = s["BText"].encode("GBK").decode("GBK")
    # data_list = [text,s["prediction"]]
    # log.logger.info(data_list)
    # return data_list
    print(d)

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
   #  #开始时间
   #  start = datetime.datetime.now()
   #  #执行人保测评
   #
   # # 结束时间
   #  end = datetime.datetime.now()
   #  print('运行时长：'+str((end - start).seconds)+'秒')
   data = {
    "log_id": 8171610164232396000,
    "words_result": [
        {
            "probability": {
                "average": 0.988567,
                "min": 0.888672,
                "variance": 0.001109
            },
            "words": "中山大學附属肿瘤医院",
            "location": {
                "top": 145,
                "left": 209,
                "width": 217,
                "height": 25
            },
            "chars": [
                {
                    "char": "中",
                    "location": {
                        "top": 145,
                        "left": 209,
                        "width": 16,
                        "height": 25
                    }
                },
                {
                    "char": "山",
                    "location": {
                        "top": 145,
                        "left": 231,
                        "width": 16,
                        "height": 25
                    }
                },
                {
                    "char": "大",
                    "location": {
                        "top": 145,
                        "left": 262,
                        "width": 15,
                        "height": 25
                    }
                },
                {
                    "char": "學",
                    "location": {
                        "top": 145,
                        "left": 277,
                        "width": 15,
                        "height": 25
                    }
                },
                {
                    "char": "附",
                    "location": {
                        "top": 145,
                        "left": 308,
                        "width": 15,
                        "height": 25
                    }
                },
                {
                    "char": "属",
                    "location": {
                        "top": 145,
                        "left": 323,
                        "width": 15,
                        "height": 25
                    }
                },
                {
                    "char": "肿",
                    "location": {
                        "top": 145,
                        "left": 345,
                        "width": 16,
                        "height": 25
                    }
                },
                {
                    "char": "瘤",
                    "location": {
                        "top": 145,
                        "left": 368,
                        "width": 16,
                        "height": 25
                    }
                },
                {
                    "char": "医",
                    "location": {
                        "top": 145,
                        "left": 391,
                        "width": 16,
                        "height": 25
                    }
                },
                {
                    "char": "院",
                    "location": {
                        "top": 145,
                        "left": 406,
                        "width": 16,
                        "height": 25
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.951196,
                "min": 0.707178,
                "variance": 0.011909
            },
            "words": " SYSU SUN YAT-SEN UNIVERSITY CANCER CENTER",
            "location": {
                "top": 168,
                "left": 164,
                "width": 262,
                "height": 16
            },
            "chars": [
                {
                    "char": "S",
                    "location": {
                        "top": 168,
                        "left": 165,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "Y",
                    "location": {
                        "top": 168,
                        "left": 169,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "S",
                    "location": {
                        "top": 168,
                        "left": 174,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "U",
                    "location": {
                        "top": 168,
                        "left": 179,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "S",
                    "location": {
                        "top": 168,
                        "left": 209,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "U",
                    "location": {
                        "top": 168,
                        "left": 214,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "N",
                    "location": {
                        "top": 168,
                        "left": 221,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "Y",
                    "location": {
                        "top": 168,
                        "left": 233,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "A",
                    "location": {
                        "top": 168,
                        "left": 238,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "T",
                    "location": {
                        "top": 168,
                        "left": 244,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "-",
                    "location": {
                        "top": 168,
                        "left": 249,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "S",
                    "location": {
                        "top": 168,
                        "left": 254,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "E",
                    "location": {
                        "top": 168,
                        "left": 259,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "N",
                    "location": {
                        "top": 168,
                        "left": 265,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "U",
                    "location": {
                        "top": 168,
                        "left": 277,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "N",
                    "location": {
                        "top": 168,
                        "left": 282,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 168,
                        "left": 289,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "V",
                    "location": {
                        "top": 168,
                        "left": 295,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "E",
                    "location": {
                        "top": 168,
                        "left": 300,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "R",
                    "location": {
                        "top": 168,
                        "left": 306,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "S",
                    "location": {
                        "top": 168,
                        "left": 313,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 168,
                        "left": 318,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "T",
                    "location": {
                        "top": 168,
                        "left": 323,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "Y",
                    "location": {
                        "top": 168,
                        "left": 329,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "C",
                    "location": {
                        "top": 168,
                        "left": 340,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "A",
                    "location": {
                        "top": 168,
                        "left": 344,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "N",
                    "location": {
                        "top": 168,
                        "left": 352,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "C",
                    "location": {
                        "top": 168,
                        "left": 359,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "E",
                    "location": {
                        "top": 168,
                        "left": 365,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "R",
                    "location": {
                        "top": 168,
                        "left": 371,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "C",
                    "location": {
                        "top": 168,
                        "left": 383,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "E",
                    "location": {
                        "top": 168,
                        "left": 388,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "N",
                    "location": {
                        "top": 168,
                        "left": 394,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "T",
                    "location": {
                        "top": 168,
                        "left": 401,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "E",
                    "location": {
                        "top": 168,
                        "left": 409,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "R",
                    "location": {
                        "top": 168,
                        "left": 415,
                        "width": 10,
                        "height": 15
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.999924,
                "min": 0.999768,
                "variance": 0
            },
            "words": "超声检查报告",
            "location": {
                "top": 188,
                "left": 238,
                "width": 105,
                "height": 22
            },
            "chars": [
                {
                    "char": "超",
                    "location": {
                        "top": 188,
                        "left": 238,
                        "width": 14,
                        "height": 22
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 188,
                        "left": 257,
                        "width": 14,
                        "height": 22
                    }
                },
                {
                    "char": "检",
                    "location": {
                        "top": 188,
                        "left": 277,
                        "width": 13,
                        "height": 22
                    }
                },
                {
                    "char": "查",
                    "location": {
                        "top": 188,
                        "left": 296,
                        "width": 13,
                        "height": 22
                    }
                },
                {
                    "char": "报",
                    "location": {
                        "top": 188,
                        "left": 308,
                        "width": 14,
                        "height": 22
                    }
                },
                {
                    "char": "告",
                    "location": {
                        "top": 188,
                        "left": 328,
                        "width": 13,
                        "height": 22
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.906711,
                "min": 0.512152,
                "variance": 0.029127
            },
            "words": "机型:GE logiq S8",
            "location": {
                "top": 212,
                "left": 66,
                "width": 84,
                "height": 17
            },
            "chars": [
                {
                    "char": "机",
                    "location": {
                        "top": 212,
                        "left": 70,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "型",
                    "location": {
                        "top": 212,
                        "left": 80,
                        "width": 6,
                        "height": 17
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 212,
                        "left": 83,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "G",
                    "location": {
                        "top": 213,
                        "left": 93,
                        "width": 6,
                        "height": 15
                    }
                },
                {
                    "char": "E",
                    "location": {
                        "top": 213,
                        "left": 97,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "l",
                    "location": {
                        "top": 213,
                        "left": 108,
                        "width": 6,
                        "height": 15
                    }
                },
                {
                    "char": "o",
                    "location": {
                        "top": 213,
                        "left": 111,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "g",
                    "location": {
                        "top": 213,
                        "left": 116,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "i",
                    "location": {
                        "top": 213,
                        "left": 121,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "q",
                    "location": {
                        "top": 213,
                        "left": 126,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "S",
                    "location": {
                        "top": 213,
                        "left": 136,
                        "width": 6,
                        "height": 15
                    }
                },
                {
                    "char": "8",
                    "location": {
                        "top": 213,
                        "left": 140,
                        "width": 9,
                        "height": 15
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.998821,
                "min": 0.996536,
                "variance": 0.000003
            },
            "words": "姓名:",
            "location": {
                "top": 235,
                "left": 72,
                "width": 38,
                "height": 18
            },
            "chars": [
                {
                    "char": "姓",
                    "location": {
                        "top": 235,
                        "left": 72,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "名",
                    "location": {
                        "top": 235,
                        "left": 88,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 235,
                        "left": 96,
                        "width": 10,
                        "height": 18
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.975548,
                "min": 0.654669,
                "variance": 0.005293
            },
            "words": "性别:女年龄:23岁超声号:201903200435",
            "location": {
                "top": 235,
                "left": 194,
                "width": 316,
                "height": 18
            },
            "chars": [
                {
                    "char": "性",
                    "location": {
                        "top": 235,
                        "left": 194,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "别",
                    "location": {
                        "top": 235,
                        "left": 209,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 235,
                        "left": 224,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "女",
                    "location": {
                        "top": 235,
                        "left": 241,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "年",
                    "location": {
                        "top": 235,
                        "left": 278,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "龄",
                    "location": {
                        "top": 235,
                        "left": 289,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 235,
                        "left": 303,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 235,
                        "left": 319,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 235,
                        "left": 324,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "岁",
                    "location": {
                        "top": 235,
                        "left": 337,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "超",
                    "location": {
                        "top": 235,
                        "left": 390,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 235,
                        "left": 401,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "号",
                    "location": {
                        "top": 235,
                        "left": 417,
                        "width": 6,
                        "height": 18
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 235,
                        "left": 422,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 235,
                        "left": 431,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 235,
                        "left": 436,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 235,
                        "left": 441,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "9",
                    "location": {
                        "top": 235,
                        "left": 449,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 235,
                        "left": 457,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 235,
                        "left": 463,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 235,
                        "left": 468,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 235,
                        "left": 473,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 235,
                        "left": 484,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "4",
                    "location": {
                        "top": 235,
                        "left": 491,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 235,
                        "left": 500,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "5",
                    "location": {
                        "top": 235,
                        "left": 505,
                        "width": 5,
                        "height": 18
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.985561,
                "min": 0.871725,
                "variance": 0.000889
            },
            "words": "科别:头颈门诊床号:病历号:00M2188585",
            "location": {
                "top": 256,
                "left": 72,
                "width": 318,
                "height": 19
            },
            "chars": [
                {
                    "char": "科",
                    "location": {
                        "top": 256,
                        "left": 72,
                        "width": 12,
                        "height": 19
                    }
                },
                {
                    "char": "别",
                    "location": {
                        "top": 256,
                        "left": 89,
                        "width": 11,
                        "height": 19
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 256,
                        "left": 98,
                        "width": 9,
                        "height": 19
                    }
                },
                {
                    "char": "头",
                    "location": {
                        "top": 256,
                        "left": 127,
                        "width": 12,
                        "height": 19
                    }
                },
                {
                    "char": "颈",
                    "location": {
                        "top": 256,
                        "left": 138,
                        "width": 12,
                        "height": 19
                    }
                },
                {
                    "char": "门",
                    "location": {
                        "top": 256,
                        "left": 149,
                        "width": 12,
                        "height": 19
                    }
                },
                {
                    "char": "诊",
                    "location": {
                        "top": 256,
                        "left": 160,
                        "width": 12,
                        "height": 19
                    }
                },
                {
                    "char": "床",
                    "location": {
                        "top": 256,
                        "left": 193,
                        "width": 12,
                        "height": 19
                    }
                },
                {
                    "char": "号",
                    "location": {
                        "top": 256,
                        "left": 210,
                        "width": 11,
                        "height": 19
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 256,
                        "left": 219,
                        "width": 9,
                        "height": 19
                    }
                },
                {
                    "char": "病",
                    "location": {
                        "top": 256,
                        "left": 276,
                        "width": 17,
                        "height": 19
                    }
                },
                {
                    "char": "历",
                    "location": {
                        "top": 256,
                        "left": 292,
                        "width": 12,
                        "height": 19
                    }
                },
                {
                    "char": "号",
                    "location": {
                        "top": 256,
                        "left": 303,
                        "width": 7,
                        "height": 19
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 256,
                        "left": 309,
                        "width": 11,
                        "height": 19
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 256,
                        "left": 318,
                        "width": 10,
                        "height": 19
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 256,
                        "left": 329,
                        "width": 10,
                        "height": 19
                    }
                },
                {
                    "char": "M",
                    "location": {
                        "top": 256,
                        "left": 335,
                        "width": 9,
                        "height": 19
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 256,
                        "left": 340,
                        "width": 10,
                        "height": 19
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 256,
                        "left": 346,
                        "width": 9,
                        "height": 19
                    }
                },
                {
                    "char": "8",
                    "location": {
                        "top": 256,
                        "left": 353,
                        "width": 11,
                        "height": 19
                    }
                },
                {
                    "char": "8",
                    "location": {
                        "top": 256,
                        "left": 367,
                        "width": 10,
                        "height": 19
                    }
                },
                {
                    "char": "5",
                    "location": {
                        "top": 256,
                        "left": 373,
                        "width": 9,
                        "height": 19
                    }
                },
                {
                    "char": "8",
                    "location": {
                        "top": 256,
                        "left": 378,
                        "width": 10,
                        "height": 19
                    }
                },
                {
                    "char": "5",
                    "location": {
                        "top": 256,
                        "left": 384,
                        "width": 6,
                        "height": 19
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.998766,
                "min": 0.9948,
                "variance": 0.000004
            },
            "words": "超声所见:",
            "location": {
                "top": 394,
                "left": 58,
                "width": 63,
                "height": 20
            },
            "chars": [
                {
                    "char": "超",
                    "location": {
                        "top": 394,
                        "left": 58,
                        "width": 13,
                        "height": 20
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 394,
                        "left": 76,
                        "width": 13,
                        "height": 20
                    }
                },
                {
                    "char": "所",
                    "location": {
                        "top": 394,
                        "left": 88,
                        "width": 13,
                        "height": 20
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 394,
                        "left": 101,
                        "width": 12,
                        "height": 20
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 394,
                        "left": 111,
                        "width": 10,
                        "height": 20
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.998067,
                "min": 0.983674,
                "variance": 0.000014
            },
            "words": "甲状腺Ca术后,双侧叶及峡部缺如,原甲状腺区未见明确肿块回声。",
            "location": {
                "top": 421,
                "left": 59,
                "width": 326,
                "height": 16
            },
            "chars": [
                {
                    "char": "甲",
                    "location": {
                        "top": 421,
                        "left": 59,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "状",
                    "location": {
                        "top": 421,
                        "left": 72,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "腺",
                    "location": {
                        "top": 421,
                        "left": 82,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "C",
                    "location": {
                        "top": 421,
                        "left": 89,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "a",
                    "location": {
                        "top": 421,
                        "left": 94,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "术",
                    "location": {
                        "top": 421,
                        "left": 105,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "后",
                    "location": {
                        "top": 421,
                        "left": 115,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 421,
                        "left": 122,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "双",
                    "location": {
                        "top": 421,
                        "left": 138,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "侧",
                    "location": {
                        "top": 421,
                        "left": 147,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "叶",
                    "location": {
                        "top": 421,
                        "left": 157,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "及",
                    "location": {
                        "top": 421,
                        "left": 171,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "峡",
                    "location": {
                        "top": 421,
                        "left": 180,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "部",
                    "location": {
                        "top": 421,
                        "left": 190,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "缺",
                    "location": {
                        "top": 421,
                        "left": 203,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "如",
                    "location": {
                        "top": 421,
                        "left": 213,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 421,
                        "left": 221,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "原",
                    "location": {
                        "top": 421,
                        "left": 236,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "甲",
                    "location": {
                        "top": 421,
                        "left": 246,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "状",
                    "location": {
                        "top": 421,
                        "left": 260,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "腺",
                    "location": {
                        "top": 421,
                        "left": 269,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 421,
                        "left": 278,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "未",
                    "location": {
                        "top": 421,
                        "left": 293,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 421,
                        "left": 302,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "明",
                    "location": {
                        "top": 421,
                        "left": 311,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "确",
                    "location": {
                        "top": 421,
                        "left": 321,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "肿",
                    "location": {
                        "top": 421,
                        "left": 335,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "块",
                    "location": {
                        "top": 421,
                        "left": 344,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "回",
                    "location": {
                        "top": 421,
                        "left": 358,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 421,
                        "left": 368,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "。",
                    "location": {
                        "top": 421,
                        "left": 375,
                        "width": 9,
                        "height": 16
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.986958,
                "min": 0.874572,
                "variance": 0.000845
            },
            "words": "CDFI:残余腺体内见少量细小点状彩色血流信号",
            "location": {
                "top": 435,
                "left": 48,
                "width": 238,
                "height": 15
            },
            "chars": [
                {
                    "char": "C",
                    "location": {
                        "top": 435,
                        "left": 55,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "D",
                    "location": {
                        "top": 435,
                        "left": 64,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "F",
                    "location": {
                        "top": 435,
                        "left": 68,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 435,
                        "left": 76,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 435,
                        "left": 81,
                        "width": 7,
                        "height": 15
                    }
                },
                {
                    "char": "残",
                    "location": {
                        "top": 435,
                        "left": 91,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "余",
                    "location": {
                        "top": 435,
                        "left": 99,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "腺",
                    "location": {
                        "top": 435,
                        "left": 112,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "体",
                    "location": {
                        "top": 435,
                        "left": 120,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "内",
                    "location": {
                        "top": 435,
                        "left": 133,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 435,
                        "left": 146,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "少",
                    "location": {
                        "top": 435,
                        "left": 154,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "量",
                    "location": {
                        "top": 435,
                        "left": 167,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "细",
                    "location": {
                        "top": 435,
                        "left": 175,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "小",
                    "location": {
                        "top": 435,
                        "left": 188,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "点",
                    "location": {
                        "top": 435,
                        "left": 201,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "状",
                    "location": {
                        "top": 435,
                        "left": 209,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "彩",
                    "location": {
                        "top": 435,
                        "left": 222,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "色",
                    "location": {
                        "top": 435,
                        "left": 231,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "血",
                    "location": {
                        "top": 435,
                        "left": 243,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "流",
                    "location": {
                        "top": 435,
                        "left": 252,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "信",
                    "location": {
                        "top": 435,
                        "left": 264,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "号",
                    "location": {
                        "top": 435,
                        "left": 277,
                        "width": 9,
                        "height": 15
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.949175,
                "min": 0.442576,
                "variance": 0.011527
            },
            "words": "左侧颈部II、IV区可见数个淋巴结,较大约13×5m,边界清,椭圆形,皮髓质分界不清,内",
            "location": {
                "top": 448,
                "left": 59,
                "width": 454,
                "height": 17
            },
            "chars": [
                {
                    "char": "左",
                    "location": {
                        "top": 448,
                        "left": 59,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "侧",
                    "location": {
                        "top": 448,
                        "left": 68,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "颈",
                    "location": {
                        "top": 448,
                        "left": 83,
                        "width": 6,
                        "height": 17
                    }
                },
                {
                    "char": "部",
                    "location": {
                        "top": 448,
                        "left": 88,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 448,
                        "left": 96,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 448,
                        "left": 106,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "、",
                    "location": {
                        "top": 448,
                        "left": 121,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 448,
                        "left": 131,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "V",
                    "location": {
                        "top": 448,
                        "left": 136,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 448,
                        "left": 143,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "可",
                    "location": {
                        "top": 448,
                        "left": 153,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 448,
                        "left": 167,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "数",
                    "location": {
                        "top": 448,
                        "left": 178,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "个",
                    "location": {
                        "top": 448,
                        "left": 187,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "淋",
                    "location": {
                        "top": 448,
                        "left": 197,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "巴",
                    "location": {
                        "top": 448,
                        "left": 207,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 448,
                        "left": 222,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 448,
                        "left": 230,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "较",
                    "location": {
                        "top": 448,
                        "left": 242,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "大",
                    "location": {
                        "top": 448,
                        "left": 252,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "约",
                    "location": {
                        "top": 448,
                        "left": 262,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 448,
                        "left": 270,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 448,
                        "left": 280,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "×",
                    "location": {
                        "top": 448,
                        "left": 285,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "5",
                    "location": {
                        "top": 448,
                        "left": 291,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "m",
                    "location": {
                        "top": 448,
                        "left": 310,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 448,
                        "left": 315,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "边",
                    "location": {
                        "top": 448,
                        "left": 327,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "界",
                    "location": {
                        "top": 448,
                        "left": 337,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "清",
                    "location": {
                        "top": 448,
                        "left": 347,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 448,
                        "left": 355,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "椭",
                    "location": {
                        "top": 448,
                        "left": 366,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "圆",
                    "location": {
                        "top": 448,
                        "left": 381,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "形",
                    "location": {
                        "top": 448,
                        "left": 391,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 448,
                        "left": 399,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "皮",
                    "location": {
                        "top": 448,
                        "left": 411,
                        "width": 16,
                        "height": 17
                    }
                },
                {
                    "char": "髓",
                    "location": {
                        "top": 448,
                        "left": 426,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "质",
                    "location": {
                        "top": 448,
                        "left": 436,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "分",
                    "location": {
                        "top": 448,
                        "left": 446,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "界",
                    "location": {
                        "top": 448,
                        "left": 456,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "不",
                    "location": {
                        "top": 448,
                        "left": 471,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "清",
                    "location": {
                        "top": 448,
                        "left": 481,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 448,
                        "left": 489,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "内",
                    "location": {
                        "top": 448,
                        "left": 500,
                        "width": 11,
                        "height": 17
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.995141,
                "min": 0.972438,
                "variance": 0.000062
            },
            "words": "可见点状强回声,未探及淋巴门",
            "location": {
                "top": 459,
                "left": 47,
                "width": 178,
                "height": 26
            },
            "chars": [
                {
                    "char": "可",
                    "location": {
                        "top": 459,
                        "left": 59,
                        "width": 14,
                        "height": 21
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 459,
                        "left": 72,
                        "width": 13,
                        "height": 22
                    }
                },
                {
                    "char": "点",
                    "location": {
                        "top": 460,
                        "left": 84,
                        "width": 8,
                        "height": 21
                    }
                },
                {
                    "char": "状",
                    "location": {
                        "top": 460,
                        "left": 90,
                        "width": 14,
                        "height": 21
                    }
                },
                {
                    "char": "强",
                    "location": {
                        "top": 460,
                        "left": 102,
                        "width": 14,
                        "height": 22
                    }
                },
                {
                    "char": "回",
                    "location": {
                        "top": 461,
                        "left": 115,
                        "width": 13,
                        "height": 21
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 461,
                        "left": 128,
                        "width": 7,
                        "height": 22
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 461,
                        "left": 131,
                        "width": 12,
                        "height": 22
                    }
                },
                {
                    "char": "未",
                    "location": {
                        "top": 462,
                        "left": 146,
                        "width": 13,
                        "height": 21
                    }
                },
                {
                    "char": "探",
                    "location": {
                        "top": 462,
                        "left": 158,
                        "width": 14,
                        "height": 22
                    }
                },
                {
                    "char": "及",
                    "location": {
                        "top": 463,
                        "left": 171,
                        "width": 8,
                        "height": 21
                    }
                },
                {
                    "char": "淋",
                    "location": {
                        "top": 463,
                        "left": 177,
                        "width": 14,
                        "height": 21
                    }
                },
                {
                    "char": "巴",
                    "location": {
                        "top": 463,
                        "left": 189,
                        "width": 14,
                        "height": 22
                    }
                },
                {
                    "char": "门",
                    "location": {
                        "top": 464,
                        "left": 202,
                        "width": 13,
                        "height": 21
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.997462,
                "min": 0.996278,
                "variance": 0.000002
            },
            "words": "淋巴结内",
            "location": {
                "top": 478,
                "left": 115,
                "width": 44,
                "height": 13
            },
            "chars": [
                {
                    "char": "淋",
                    "location": {
                        "top": 478,
                        "left": 115,
                        "width": 8,
                        "height": 13
                    }
                },
                {
                    "char": "巴",
                    "location": {
                        "top": 478,
                        "left": 126,
                        "width": 8,
                        "height": 13
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 478,
                        "left": 138,
                        "width": 8,
                        "height": 13
                    }
                },
                {
                    "char": "内",
                    "location": {
                        "top": 478,
                        "left": 149,
                        "width": 8,
                        "height": 13
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.990867,
                "min": 0.816979,
                "variance": 0.000885
            },
            "words": "右侧颈部VI区上组可见1个低回声结节,大小约12×7m,边界清,椭圆形,实质回声不均匀,",
            "location": {
                "top": 491,
                "left": 59,
                "width": 449,
                "height": 18
            },
            "chars": [
                {
                    "char": "右",
                    "location": {
                        "top": 491,
                        "left": 59,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "侧",
                    "location": {
                        "top": 491,
                        "left": 70,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "颈",
                    "location": {
                        "top": 491,
                        "left": 80,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "部",
                    "location": {
                        "top": 491,
                        "left": 91,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "V",
                    "location": {
                        "top": 491,
                        "left": 100,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 491,
                        "left": 105,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 491,
                        "left": 118,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "上",
                    "location": {
                        "top": 491,
                        "left": 129,
                        "width": 6,
                        "height": 18
                    }
                },
                {
                    "char": "组",
                    "location": {
                        "top": 491,
                        "left": 134,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "可",
                    "location": {
                        "top": 491,
                        "left": 150,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 491,
                        "left": 161,
                        "width": 6,
                        "height": 18
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 491,
                        "left": 164,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "个",
                    "location": {
                        "top": 491,
                        "left": 177,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "低",
                    "location": {
                        "top": 491,
                        "left": 188,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "回",
                    "location": {
                        "top": 491,
                        "left": 199,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 491,
                        "left": 210,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 491,
                        "left": 220,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "节",
                    "location": {
                        "top": 491,
                        "left": 231,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 491,
                        "left": 240,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "大",
                    "location": {
                        "top": 491,
                        "left": 253,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "小",
                    "location": {
                        "top": 491,
                        "left": 263,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "约",
                    "location": {
                        "top": 491,
                        "left": 274,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 491,
                        "left": 283,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 491,
                        "left": 289,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "×",
                    "location": {
                        "top": 491,
                        "left": 294,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "7",
                    "location": {
                        "top": 491,
                        "left": 305,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "m",
                    "location": {
                        "top": 491,
                        "left": 310,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 491,
                        "left": 321,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "边",
                    "location": {
                        "top": 491,
                        "left": 334,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "界",
                    "location": {
                        "top": 491,
                        "left": 350,
                        "width": 7,
                        "height": 18
                    }
                },
                {
                    "char": "清",
                    "location": {
                        "top": 491,
                        "left": 356,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 491,
                        "left": 364,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "椭",
                    "location": {
                        "top": 491,
                        "left": 377,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "圆",
                    "location": {
                        "top": 491,
                        "left": 393,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "形",
                    "location": {
                        "top": 491,
                        "left": 404,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 491,
                        "left": 413,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "实",
                    "location": {
                        "top": 491,
                        "left": 426,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "质",
                    "location": {
                        "top": 491,
                        "left": 436,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "回",
                    "location": {
                        "top": 491,
                        "left": 447,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 491,
                        "left": 458,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": "不",
                    "location": {
                        "top": 491,
                        "left": 469,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "均",
                    "location": {
                        "top": 491,
                        "left": 480,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "匀",
                    "location": {
                        "top": 491,
                        "left": 490,
                        "width": 12,
                        "height": 18
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 491,
                        "left": 499,
                        "width": 9,
                        "height": 18
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.905907,
                "min": 0.409787,
                "variance": 0.036361
            },
            "words": "内可见强回声斑",
            "location": {
                "top": 506,
                "left": 59,
                "width": 110,
                "height": 21
            },
            "chars": [
                {
                    "char": "内",
                    "location": {
                        "top": 506,
                        "left": 59,
                        "width": 13,
                        "height": 21
                    }
                },
                {
                    "char": "可",
                    "location": {
                        "top": 506,
                        "left": 71,
                        "width": 13,
                        "height": 21
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 506,
                        "left": 83,
                        "width": 7,
                        "height": 21
                    }
                },
                {
                    "char": "强",
                    "location": {
                        "top": 506,
                        "left": 89,
                        "width": 13,
                        "height": 21
                    }
                },
                {
                    "char": "回",
                    "location": {
                        "top": 506,
                        "left": 102,
                        "width": 13,
                        "height": 21
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 506,
                        "left": 114,
                        "width": 13,
                        "height": 21
                    }
                },
                {
                    "char": "斑",
                    "location": {
                        "top": 506,
                        "left": 126,
                        "width": 13,
                        "height": 21
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.944301,
                "min": 0.470775,
                "variance": 0.017391
            },
            "words": "CDF:上述结节内未见明确血流信号。",
            "location": {
                "top": 517,
                "left": 47,
                "width": 194,
                "height": 18
            },
            "chars": [
                {
                    "char": "C",
                    "location": {
                        "top": 517,
                        "left": 56,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "D",
                    "location": {
                        "top": 517,
                        "left": 61,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": "F",
                    "location": {
                        "top": 517,
                        "left": 66,
                        "width": 9,
                        "height": 18
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 517,
                        "left": 81,
                        "width": 10,
                        "height": 18
                    }
                },
                {
                    "char": "上",
                    "location": {
                        "top": 517,
                        "left": 94,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "述",
                    "location": {
                        "top": 517,
                        "left": 104,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 517,
                        "left": 115,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "节",
                    "location": {
                        "top": 517,
                        "left": 125,
                        "width": 16,
                        "height": 18
                    }
                },
                {
                    "char": "内",
                    "location": {
                        "top": 517,
                        "left": 140,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "未",
                    "location": {
                        "top": 517,
                        "left": 150,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 517,
                        "left": 161,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "明",
                    "location": {
                        "top": 517,
                        "left": 171,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "确",
                    "location": {
                        "top": 517,
                        "left": 182,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "血",
                    "location": {
                        "top": 517,
                        "left": 192,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "流",
                    "location": {
                        "top": 517,
                        "left": 202,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "信",
                    "location": {
                        "top": 517,
                        "left": 213,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "号",
                    "location": {
                        "top": 517,
                        "left": 223,
                        "width": 11,
                        "height": 18
                    }
                },
                {
                    "char": "。",
                    "location": {
                        "top": 517,
                        "left": 232,
                        "width": 9,
                        "height": 18
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.970692,
                "min": 0.62182,
                "variance": 0.007324
            },
            "words": "左侧颈部VI区上组可见数个小结节,较大约4×4mm边界清,椭圆形,内回声不均匀,后方回",
            "location": {
                "top": 530,
                "left": 59,
                "width": 454,
                "height": 17
            },
            "chars": [
                {
                    "char": "左",
                    "location": {
                        "top": 530,
                        "left": 59,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "侧",
                    "location": {
                        "top": 530,
                        "left": 69,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "颈",
                    "location": {
                        "top": 530,
                        "left": 79,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "部",
                    "location": {
                        "top": 530,
                        "left": 94,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "V",
                    "location": {
                        "top": 530,
                        "left": 102,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 530,
                        "left": 107,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 530,
                        "left": 113,
                        "width": 17,
                        "height": 17
                    }
                },
                {
                    "char": "上",
                    "location": {
                        "top": 530,
                        "left": 129,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "组",
                    "location": {
                        "top": 530,
                        "left": 138,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "可",
                    "location": {
                        "top": 530,
                        "left": 148,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 530,
                        "left": 158,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "数",
                    "location": {
                        "top": 530,
                        "left": 168,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "个",
                    "location": {
                        "top": 530,
                        "left": 183,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "小",
                    "location": {
                        "top": 530,
                        "left": 193,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 530,
                        "left": 203,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "节",
                    "location": {
                        "top": 530,
                        "left": 213,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 530,
                        "left": 221,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "较",
                    "location": {
                        "top": 530,
                        "left": 233,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "大",
                    "location": {
                        "top": 530,
                        "left": 248,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "约",
                    "location": {
                        "top": 530,
                        "left": 258,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "4",
                    "location": {
                        "top": 530,
                        "left": 266,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "×",
                    "location": {
                        "top": 530,
                        "left": 272,
                        "width": 8,
                        "height": 17
                    }
                },
                {
                    "char": "4",
                    "location": {
                        "top": 530,
                        "left": 278,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "m",
                    "location": {
                        "top": 530,
                        "left": 287,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "m",
                    "location": {
                        "top": 530,
                        "left": 297,
                        "width": 8,
                        "height": 17
                    }
                },
                {
                    "char": "边",
                    "location": {
                        "top": 530,
                        "left": 314,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "界",
                    "location": {
                        "top": 530,
                        "left": 324,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "清",
                    "location": {
                        "top": 530,
                        "left": 334,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 530,
                        "left": 342,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "椭",
                    "location": {
                        "top": 530,
                        "left": 359,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "圆",
                    "location": {
                        "top": 530,
                        "left": 369,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "形",
                    "location": {
                        "top": 530,
                        "left": 379,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 530,
                        "left": 387,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "内",
                    "location": {
                        "top": 530,
                        "left": 404,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "回",
                    "location": {
                        "top": 530,
                        "left": 414,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 530,
                        "left": 424,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "不",
                    "location": {
                        "top": 530,
                        "left": 433,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "均",
                    "location": {
                        "top": 530,
                        "left": 443,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "匀",
                    "location": {
                        "top": 530,
                        "left": 459,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 530,
                        "left": 467,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "后",
                    "location": {
                        "top": 530,
                        "left": 478,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "方",
                    "location": {
                        "top": 530,
                        "left": 488,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "回",
                    "location": {
                        "top": 530,
                        "left": 498,
                        "width": 11,
                        "height": 17
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.998651,
                "min": 0.992449,
                "variance": 0.000006
            },
            "words": "声无明显改变。",
            "location": {
                "top": 547,
                "left": 59,
                "width": 75,
                "height": 15
            },
            "chars": [
                {
                    "char": "声",
                    "location": {
                        "top": 547,
                        "left": 59,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "无",
                    "location": {
                        "top": 547,
                        "left": 71,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "明",
                    "location": {
                        "top": 547,
                        "left": 80,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "显",
                    "location": {
                        "top": 547,
                        "left": 92,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "改",
                    "location": {
                        "top": 547,
                        "left": 101,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "变",
                    "location": {
                        "top": 547,
                        "left": 114,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "。",
                    "location": {
                        "top": 547,
                        "left": 125,
                        "width": 7,
                        "height": 15
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.98015,
                "min": 0.890871,
                "variance": 0.001096
            },
            "words": "CDF:上述淋巴结内未探及明确血流信号。",
            "location": {
                "top": 561,
                "left": 48,
                "width": 216,
                "height": 14
            },
            "chars": [
                {
                    "char": "C",
                    "location": {
                        "top": 561,
                        "left": 55,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "D",
                    "location": {
                        "top": 561,
                        "left": 63,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "F",
                    "location": {
                        "top": 561,
                        "left": 67,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 561,
                        "left": 80,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "上",
                    "location": {
                        "top": 561,
                        "left": 93,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "述",
                    "location": {
                        "top": 561,
                        "left": 106,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "淋",
                    "location": {
                        "top": 561,
                        "left": 114,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "巴",
                    "location": {
                        "top": 561,
                        "left": 127,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 561,
                        "left": 139,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "内",
                    "location": {
                        "top": 561,
                        "left": 147,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "未",
                    "location": {
                        "top": 561,
                        "left": 160,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "探",
                    "location": {
                        "top": 561,
                        "left": 172,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "及",
                    "location": {
                        "top": 561,
                        "left": 180,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "明",
                    "location": {
                        "top": 561,
                        "left": 193,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "确",
                    "location": {
                        "top": 561,
                        "left": 201,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "血",
                    "location": {
                        "top": 561,
                        "left": 213,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "流",
                    "location": {
                        "top": 561,
                        "left": 226,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "信",
                    "location": {
                        "top": 561,
                        "left": 234,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "号",
                    "location": {
                        "top": 561,
                        "left": 247,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "。",
                    "location": {
                        "top": 561,
                        "left": 257,
                        "width": 7,
                        "height": 14
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.998408,
                "min": 0.992956,
                "variance": 0.000008
            },
            "words": "超声提示:",
            "location": {
                "top": 709,
                "left": 61,
                "width": 62,
                "height": 16
            },
            "chars": [
                {
                    "char": "超",
                    "location": {
                        "top": 709,
                        "left": 61,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "声",
                    "location": {
                        "top": 709,
                        "left": 75,
                        "width": 15,
                        "height": 16
                    }
                },
                {
                    "char": "提",
                    "location": {
                        "top": 709,
                        "left": 89,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "示",
                    "location": {
                        "top": 709,
                        "left": 103,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 709,
                        "left": 115,
                        "width": 8,
                        "height": 16
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.993138,
                "min": 0.895369,
                "variance": 0.000475
            },
            "words": "甲状腺Ca术后,原甲状腺区未见明显占位性病变。",
            "location": {
                "top": 745,
                "left": 56,
                "width": 240,
                "height": 15
            },
            "chars": [
                {
                    "char": "甲",
                    "location": {
                        "top": 745,
                        "left": 56,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "状",
                    "location": {
                        "top": 745,
                        "left": 68,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "腺",
                    "location": {
                        "top": 745,
                        "left": 77,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "C",
                    "location": {
                        "top": 745,
                        "left": 89,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "a",
                    "location": {
                        "top": 745,
                        "left": 93,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "术",
                    "location": {
                        "top": 745,
                        "left": 103,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "后",
                    "location": {
                        "top": 745,
                        "left": 112,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 745,
                        "left": 123,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "原",
                    "location": {
                        "top": 745,
                        "left": 134,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "甲",
                    "location": {
                        "top": 745,
                        "left": 147,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "状",
                    "location": {
                        "top": 745,
                        "left": 155,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "腺",
                    "location": {
                        "top": 745,
                        "left": 169,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 745,
                        "left": 177,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "未",
                    "location": {
                        "top": 745,
                        "left": 190,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "见",
                    "location": {
                        "top": 745,
                        "left": 199,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "明",
                    "location": {
                        "top": 745,
                        "left": 212,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "显",
                    "location": {
                        "top": 745,
                        "left": 221,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "占",
                    "location": {
                        "top": 745,
                        "left": 234,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "位",
                    "location": {
                        "top": 745,
                        "left": 242,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "性",
                    "location": {
                        "top": 745,
                        "left": 256,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "病",
                    "location": {
                        "top": 745,
                        "left": 264,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "变",
                    "location": {
                        "top": 745,
                        "left": 277,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "。",
                    "location": {
                        "top": 745,
                        "left": 284,
                        "width": 8,
                        "height": 15
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.982191,
                "min": 0.810577,
                "variance": 0.002102
            },
            "words": "右侧颈部V区上组小结节,考虑恶性",
            "location": {
                "top": 759,
                "left": 56,
                "width": 183,
                "height": 17
            },
            "chars": [
                {
                    "char": "右",
                    "location": {
                        "top": 759,
                        "left": 56,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "侧",
                    "location": {
                        "top": 759,
                        "left": 70,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "颈",
                    "location": {
                        "top": 759,
                        "left": 79,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "部",
                    "location": {
                        "top": 759,
                        "left": 89,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "V",
                    "location": {
                        "top": 759,
                        "left": 97,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 759,
                        "left": 113,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "上",
                    "location": {
                        "top": 759,
                        "left": 128,
                        "width": 5,
                        "height": 17
                    }
                },
                {
                    "char": "组",
                    "location": {
                        "top": 759,
                        "left": 132,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "小",
                    "location": {
                        "top": 759,
                        "left": 147,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 759,
                        "left": 157,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "节",
                    "location": {
                        "top": 759,
                        "left": 166,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 759,
                        "left": 174,
                        "width": 9,
                        "height": 17
                    }
                },
                {
                    "char": "考",
                    "location": {
                        "top": 759,
                        "left": 190,
                        "width": 11,
                        "height": 17
                    }
                },
                {
                    "char": "虑",
                    "location": {
                        "top": 759,
                        "left": 200,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "恶",
                    "location": {
                        "top": 759,
                        "left": 210,
                        "width": 10,
                        "height": 17
                    }
                },
                {
                    "char": "性",
                    "location": {
                        "top": 759,
                        "left": 224,
                        "width": 10,
                        "height": 17
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.942773,
                "min": 0.673172,
                "variance": 0.010345
            },
            "words": "左侧颈部III、IV区多发淋巴结,考虑恶性",
            "location": {
                "top": 773,
                "left": 48,
                "width": 222,
                "height": 16
            },
            "chars": [
                {
                    "char": "左",
                    "location": {
                        "top": 773,
                        "left": 57,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "侧",
                    "location": {
                        "top": 773,
                        "left": 66,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "颈",
                    "location": {
                        "top": 773,
                        "left": 80,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "部",
                    "location": {
                        "top": 773,
                        "left": 89,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 773,
                        "left": 97,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 773,
                        "left": 106,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 773,
                        "left": 115,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "、",
                    "location": {
                        "top": 773,
                        "left": 120,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "I",
                    "location": {
                        "top": 773,
                        "left": 129,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "V",
                    "location": {
                        "top": 773,
                        "left": 133,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 773,
                        "left": 144,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "多",
                    "location": {
                        "top": 773,
                        "left": 153,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "发",
                    "location": {
                        "top": 773,
                        "left": 162,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "淋",
                    "location": {
                        "top": 773,
                        "left": 172,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "巴",
                    "location": {
                        "top": 773,
                        "left": 185,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 773,
                        "left": 195,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 773,
                        "left": 207,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "考",
                    "location": {
                        "top": 773,
                        "left": 218,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "虑",
                    "location": {
                        "top": 773,
                        "left": 227,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "恶",
                    "location": {
                        "top": 773,
                        "left": 240,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "性",
                    "location": {
                        "top": 773,
                        "left": 249,
                        "width": 10,
                        "height": 16
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.978094,
                "min": 0.706575,
                "variance": 0.004948
            },
            "words": "左侧颈部V区上组小结节,恶性待排",
            "location": {
                "top": 787,
                "left": 57,
                "width": 184,
                "height": 15
            },
            "chars": [
                {
                    "char": "左",
                    "location": {
                        "top": 787,
                        "left": 57,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "侧",
                    "location": {
                        "top": 787,
                        "left": 69,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "颈",
                    "location": {
                        "top": 787,
                        "left": 78,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "部",
                    "location": {
                        "top": 787,
                        "left": 91,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "V",
                    "location": {
                        "top": 787,
                        "left": 98,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "区",
                    "location": {
                        "top": 787,
                        "left": 113,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "上",
                    "location": {
                        "top": 787,
                        "left": 126,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "组",
                    "location": {
                        "top": 787,
                        "left": 134,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "小",
                    "location": {
                        "top": 787,
                        "left": 147,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "结",
                    "location": {
                        "top": 787,
                        "left": 156,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": "节",
                    "location": {
                        "top": 787,
                        "left": 169,
                        "width": 9,
                        "height": 15
                    }
                },
                {
                    "char": ",",
                    "location": {
                        "top": 787,
                        "left": 176,
                        "width": 8,
                        "height": 15
                    }
                },
                {
                    "char": "恶",
                    "location": {
                        "top": 787,
                        "left": 190,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "性",
                    "location": {
                        "top": 787,
                        "left": 199,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "待",
                    "location": {
                        "top": 787,
                        "left": 212,
                        "width": 10,
                        "height": 15
                    }
                },
                {
                    "char": "排",
                    "location": {
                        "top": 787,
                        "left": 221,
                        "width": 9,
                        "height": 15
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.99482,
                "min": 0.946523,
                "variance": 0.000182
            },
            "words": "检查日期:2019-03-20记录员:黄慧龙",
            "location": {
                "top": 871,
                "left": 70,
                "width": 195,
                "height": 16
            },
            "chars": [
                {
                    "char": "检",
                    "location": {
                        "top": 871,
                        "left": 70,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "查",
                    "location": {
                        "top": 871,
                        "left": 79,
                        "width": 11,
                        "height": 16
                    }
                },
                {
                    "char": "日",
                    "location": {
                        "top": 871,
                        "left": 89,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "期",
                    "location": {
                        "top": 871,
                        "left": 99,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 871,
                        "left": 107,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 871,
                        "left": 111,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 871,
                        "left": 116,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 871,
                        "left": 121,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "9",
                    "location": {
                        "top": 871,
                        "left": 126,
                        "width": 8,
                        "height": 16
                    }
                },
                {
                    "char": "-",
                    "location": {
                        "top": 871,
                        "left": 135,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 871,
                        "left": 140,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 871,
                        "left": 145,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "-",
                    "location": {
                        "top": 871,
                        "left": 150,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 871,
                        "left": 156,
                        "width": 11,
                        "height": 16
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 871,
                        "left": 164,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "记",
                    "location": {
                        "top": 871,
                        "left": 200,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "录",
                    "location": {
                        "top": 871,
                        "left": 210,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "员",
                    "location": {
                        "top": 871,
                        "left": 219,
                        "width": 11,
                        "height": 16
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 871,
                        "left": 227,
                        "width": 9,
                        "height": 16
                    }
                },
                {
                    "char": "黄",
                    "location": {
                        "top": 871,
                        "left": 234,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "慧",
                    "location": {
                        "top": 871,
                        "left": 244,
                        "width": 10,
                        "height": 16
                    }
                },
                {
                    "char": "龙",
                    "location": {
                        "top": 871,
                        "left": 253,
                        "width": 11,
                        "height": 16
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.998004,
                "min": 0.987252,
                "variance": 0.000013
            },
            "words": "报告医师:韩峰1293",
            "location": {
                "top": 871,
                "left": 318,
                "width": 113,
                "height": 20
            },
            "chars": [
                {
                    "char": "报",
                    "location": {
                        "top": 871,
                        "left": 318,
                        "width": 13,
                        "height": 20
                    }
                },
                {
                    "char": "告",
                    "location": {
                        "top": 871,
                        "left": 336,
                        "width": 13,
                        "height": 20
                    }
                },
                {
                    "char": "医",
                    "location": {
                        "top": 871,
                        "left": 348,
                        "width": 13,
                        "height": 20
                    }
                },
                {
                    "char": "师",
                    "location": {
                        "top": 871,
                        "left": 360,
                        "width": 13,
                        "height": 20
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 871,
                        "left": 370,
                        "width": 11,
                        "height": 20
                    }
                },
                {
                    "char": "韩",
                    "location": {
                        "top": 871,
                        "left": 385,
                        "width": 12,
                        "height": 20
                    }
                },
                {
                    "char": "峰",
                    "location": {
                        "top": 871,
                        "left": 397,
                        "width": 12,
                        "height": 20
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 871,
                        "left": 407,
                        "width": 10,
                        "height": 20
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 871,
                        "left": 412,
                        "width": 11,
                        "height": 20
                    }
                },
                {
                    "char": "9",
                    "location": {
                        "top": 871,
                        "left": 419,
                        "width": 10,
                        "height": 20
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 871,
                        "left": 424,
                        "width": 7,
                        "height": 20
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.685972,
                "min": 0.394993,
                "variance": 0.084669
            },
            "words": "峰",
            "location": {
                "top": 848,
                "left": 466,
                "width": 67,
                "height": 42
            },
            "chars": [
                {
                    "char": "峰",
                    "location": {
                        "top": 848,
                        "left": 504,
                        "width": 26,
                        "height": 42
                    }
                }
            ]
        },
        {
            "probability": {
                "average": 0.997567,
                "min": 0.974503,
                "variance": 0.00004
            },
            "words": "报告时间:2019-03-2010:19:34",
            "location": {
                "top": 894,
                "left": 69,
                "width": 150,
                "height": 14
            },
            "chars": [
                {
                    "char": "报",
                    "location": {
                        "top": 894,
                        "left": 69,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "告",
                    "location": {
                        "top": 894,
                        "left": 81,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "时",
                    "location": {
                        "top": 894,
                        "left": 89,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "间",
                    "location": {
                        "top": 894,
                        "left": 97,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 894,
                        "left": 104,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 894,
                        "left": 113,
                        "width": 9,
                        "height": 14
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 894,
                        "left": 120,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 894,
                        "left": 124,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "9",
                    "location": {
                        "top": 894,
                        "left": 128,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "-",
                    "location": {
                        "top": 894,
                        "left": 136,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 894,
                        "left": 140,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 894,
                        "left": 144,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "-",
                    "location": {
                        "top": 894,
                        "left": 152,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "2",
                    "location": {
                        "top": 894,
                        "left": 156,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 894,
                        "left": 160,
                        "width": 7,
                        "height": 14
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 894,
                        "left": 172,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "0",
                    "location": {
                        "top": 894,
                        "left": 178,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 894,
                        "left": 184,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "1",
                    "location": {
                        "top": 894,
                        "left": 188,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "9",
                    "location": {
                        "top": 894,
                        "left": 192,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": ":",
                    "location": {
                        "top": 894,
                        "left": 200,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "3",
                    "location": {
                        "top": 894,
                        "left": 204,
                        "width": 8,
                        "height": 14
                    }
                },
                {
                    "char": "4",
                    "location": {
                        "top": 894,
                        "left": 210,
                        "width": 9,
                        "height": 14
                    }
                }
            ]
        }
    ],
    "words_result_num": 28,
    "direction": 0
}
   yidiansan(data)







