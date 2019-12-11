# -*- coding:utf-8 -*-import unittest
import unittest
from initialize.thyroid_init import *
from thyroidCase import ThyroidCase
from models.models import becomeMember

class TestThyroid(unittest.TestCase):

    @classmethod
    def setUp(self):
        open_weixin()                              # 重启微信
        self.d2 = uiautomator_init()               # 初始化uiautomator2
        self.h5Driver = h5Driver_init(self.d2)     # 初始化H5Driver
        self.t = ThyroidCase(self.h5Driver)
        sleep(2)
        logger.info('Loading Finished')
        logger.info('Test start...')

    def test01(self):
        isResult = self.h5Driver.isElementExist('//*[@id="app"]/div/div[3]/label')  # 判断是否是结果页
        if isResult:
            logger.info('已做过测评，进入结果页')
            self.result()
        else:
            logger.info('未做测评，开始测评')
            self.index()
            self.result()

    def index(self):
        try:
            self.t.index()       # 首页
            self.t.evaluation()  # 做测评
            self.t.eva_result()  # 测评结果页
        except Exception as e:
            logger.error('系统异常')

    def result(self):
        becomeMember().action()   #数据库插入数据，用户是会员，可以直接上传B超
        self.t.B_report(self.d2)  # 上传B超

    def tearDown(self):
        self.h5Driver.close()       #关闭驱动
        logger.info('Test End bye ~ ')

if __name__ == '__main__':
    unittest.main()






