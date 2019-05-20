#coding=utf-8
import unittest
from fastAutoTest.core.h5.h5Engine import H5Driver
import uiautomator2
import os
import subprocess


class test_main(unittest.TestCase):

    def setUp(self):
        #声明手机型号
        self.device1 = '9f85839'   #执行case01的手机--mi8
        self.device2 = '9b1dee49'  #执行case02的手机--mi9
        #声明H5driver
        self.device1_h5Driver = H5Driver(self.device1)   #mi8
        self.device2_h5Driver = H5Driver(self.device2)   #mi9
        #删除电脑的device1 MP4文件
        device1_mp4 = 'd:/vivo_MP4/case01.mp4'
        device2_mp4 = 'd:/mi9_MP4/case02.mp4'
        if os.path.exists(device1_mp4):
            os.remove(device1_mp4)
            print '电脑device1_mp4已删除'
        else:
            print '电脑没有device1_mp4文件'
        # 删除电脑的device2 MP4文件
        if os.path.exists(device2_mp4):
            os.remove(device2_mp4)
            print '电脑device2_mp4已删除'
        else:
            print '电脑没有device2_mp4文件'
        #声明uiautimator2
        self.device1_d2 = uiautomator2.connect_usb(self.device1)   #--mi8
        self.device2_d2 = uiautomator2.connect_usb(self.device2)   #--mi9

    #device1--首页-问卷-会员
    def test01(self):
        pass

    #device2--问卷结果-上传b超
    def test02(self):
        pass




    def tearDown(self):
        #关闭H5Driver
        self.device1_h5Driver.close()
        self.device2_h5Driver.close()





if __name__ == '__main__':
    unittest.main()