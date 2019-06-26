#coding:utf-8
import unittest
import requests
import json
from gloVal import gloVal

class ev_count(unittest.TestCase):

    def setUp(self):
        self.url = gloVal.BASE_URL
        self.header = gloVal.HEADER

    ''' 正常传参是甲状腺'''
    def test01(self):
        data = {"type":"thyroid"}
        url = self.url+"/ev/count"
        r = requests.post(url,headers = self.header,data=json.dumps(data))
        body = r.text
        response = json.loads(body)
        print('接口返回：' + body)
        self.assertEqual("0000",response["code"], msg=response['desc'])
        self.assertNotEqual("",response["data"]["count"],msg="测评人数为空了")

    '''正常参数是乳腺'''
    def test02(self):
        data = {"type": "mammaryGland"}
        url = self.url + "/ev/count"
        r = requests.post(url, headers=self.header, data=json.dumps(data))
        body = r.text
        response = json.loads(body)
        print('接口返回：' +body)
        self.assertEqual("0000", response["code"], msg=response['desc'])

    '''参数为空时'''
    def test03(self):
        data = {"type": " "}
        url = self.url + "/ev/count"
        r = requests.post(url, headers=self.header, data=json.dumps(data))
        body = r.text
        response = json.loads(body)
        print('接口返回：' + body)
        self.assertEqual("9999", response["code"], msg=response['desc'])

    '''参数错误'''
    def test04(self):
        data = {"type": "aaa"}
        url = self.url + "/ev/count"
        r = requests.post(url, headers=self.header, data=json.dumps(data))
        body = r.text
        response = json.loads(body)
        print('接口返回：' + body)
        self.assertEqual("9999", response["code"], msg=response['desc'])


    def tearDown(self):
        pass



if __name__ == '__main__':
    unittest.main()