# -*- coding:utf-8 -*-

import base64
import json
import requests


def open_image(filename):
    f = open(filename,'rb')
    res = f.read()
    s = base64.b64encode(res)
    return s

def submit():
    base64 = open_image("D:/images/TR6.jpg")
    data = {"appId":"czvlVxrYmroNb6efCqiVMuPpj9bSebaq","appKey":"key1","apiCode":"thyroidEval","version":"1.0","data":{"images": base64,"type":"2"},"sign":"PSsi9I1uBmQtVYTig+zfF/YH3EsWq/bv0FuDFMymzcHjPuD5kv54cFDrN9v/MBuEEJPMa0OIDPcbCvfGB7zpNg=="}
    header = {"Content-Type": "application/json;charset=UTF-8"}
    r = requests.post("https://192.168.5.111/business/api/dispatch",data=json.dumps(data),headers=header)
    print(r.status_code)




if __name__ == '__main__':
    submit()