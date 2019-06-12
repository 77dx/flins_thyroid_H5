#coding:utf-8
import unittest
import json
import requests
from gloVal import gloVal
from mg_female_data import mg_female_data
import ty_female_data


#提交测试题
class qa_opersave(unittest.TestCase):

    def setUp(self):
        pass

    #提交乳腺-女
    def test01(self):
        data = mg_female_data.MG_FEMALE_DATA
        r = requests.post(gloVal.BASE_URL+'/qa/opersave',headers=gloVal.HEADER,data=json.dumps(data))
        print(r.text)

    #提交甲状腺
    def test02(self):
        data = ty_female_data.TY_FEMALE_DATA
        r = requests.post(gloVal.BASE_URL + '/qa/opersave', headers=gloVal.HEADER, data=json.dumps(data))
        print(r.text)




if __name__ == '__main__':
    unittest.main()
