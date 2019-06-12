#coding:utf-8
import unittest
import json
import requests
from gloVal import gloVal

#查询最新测评结果
class qa_result_current(unittest.TestCase):

    def setUp(self):
        pass

    '''正确参数-乳腺'''
    def test01(self):
        url = gloVal.BASE_URL+'/qa/result/current'
        data={"type":"mammaryGland"}
        r = requests.post(url,headers = gloVal.HEADER,data=json.dumps(data))
        response = json.loads(r.text)
        print(r.text)
        self.assertEqual("0000",response["code"],msg=response["desc"])

    '''正确参数-甲状腺'''
    def test02(self):
        url = gloVal.BASE_URL+'/qa/result/current'
        data={"type":"1"}
        r = requests.post(url,headers = gloVal.HEADER,data=json.dumps(data))
        response = json.loads(r.text)
        print(r.text)
        self.assertEqual("0000",response["code"],msg=response["desc"])

    '''参数为空'''
    def test03(self):
        url = gloVal.BASE_URL + '/qa/result/current'
        data = {"type":1}
        r = requests.post(url, headers=gloVal.HEADER, data=json.dumps(data))
        response = json.loads(r.text)
        print(r.text)
        self.assertEqual("9999", response["code"], msg=response["desc"])

    '''错误参数'''
    def test04(self):
        url = gloVal.BASE_URL + '/qa/result/current'
        data = {"type": "abc"}
        r = requests.post(url, headers=gloVal.HEADER, data=json.dumps(data))
        response = json.loads(r.text)
        print(r.text)
        self.assertEqual("9999", response["code"], msg=response["desc"])



if __name__ == '__main__':
    unittest.main()