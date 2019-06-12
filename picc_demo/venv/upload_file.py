#coding:utf-8
import requests
import os
import json

def get_qiniuToken():
    header1 = {"Accept":"application/json, text/javascript, */*; q=0.01","Content-Type":"application/json"}
    s = requests.Session()
    r = s.post('https://mp.flins.com.cn/business/rb/getQiNiuToken',headers=header1)
    d = r.text
    s = json.loads(d)
    return



if __name__ == '__main__':
    header1 = {"Accept": "application/json, text/javascript, */*; q=0.01", "Content-Type": "application/json"}
    ss = requests.Session()
    r = ss.post('https://mp.flins.com.cn/business/rb/getQiNiuToken', headers=header1)
    d = r.text
    s = json.loads(d)
    token = s["data"]["qiNiuToken"]
    file = {'file':open('D:/images/TR1.jpg','rb')}
    header2 = {"Authorization":"UpToken "+token,"Content-Type":"application/octet-stream"}
    r = ss.post('https://upload-z2.qiniup.com/putb64/-1',files=file)
    print r.text