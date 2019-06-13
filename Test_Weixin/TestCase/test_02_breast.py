#coding=utf-8

from fastAutoTest.core.h5.h5Engine import H5Driver
import unittest
import uiautomator2
import os
import subprocess
from time import sleep


class breast_H5(unittest.TestCase):

    def setUp(self):
        device = '9f85839'
        # 删除手机中的MP4文件
        os.system('adb -s %s shell rm /sdcard/case03.mp4' % (device))
        print  device + '手机MP4已删除'
        # 删除电脑的MP4文件
        vivo_mp4 = 'E:/vivo_MP4/case03.mp4'
        if os.path.exists(vivo_mp4):
            os.remove(vivo_mp4)
            print '电脑vivo_MP4已删除'
        else:
            print '电脑没有vivo_MP4文件'


        # 初始化uiautomator2
        d2 = uiautomator2.connect_usb(device)
        print 'uiautomator初始化完成'

        # 启动微信
        # os.system('adb -s %s shell am force-stop com.tencent.mm' % (device))
        # os.system('adb -s %s shell am start com.tencent.mm/.ui.LauncherUI' % (device))
        # print '微信已重启'

        # 初始化H5Drvier
        # d2(resourceId="com.tencent.mm:id/b6e", text=u"文件传输助手").click()
        d2(resourceId="com.tencent.mm:id/apn").click()
        sleep(3)
        self.h5Driver = H5Driver(device)
        self.h5Driver.initDriver()

        # 启动手机录屏
        self.vivo_child = subprocess.Popen('adb -s %s shell screenrecord --bit-rate 4000000 /sdcard/case03.mp4' % (device))
        print device + '录屏启动成功'

    #执行用例
    def test01(self):
        breast_index(self.h5Driver)
        breast_evaluation(self.h5Driver)
        breast_result(self.h5Driver)

    def tearDown(self):
        self.vivo_child.kill()
        self.h5Driver.close()


def breast_index(h5Driver):
    h5Driver.clickElementByXpath('//*[@id="app"]/div/div/a')#点我测评
    #判断是否进入问卷页
    text = h5Driver.getElementTextByXpath('//*[@id="box"]/div/div[1]/label')
    if text != '测评进度':
        sleep(1)
        h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[3]/label')
        h5Driver.clickElementByXpath('//*[@id="app"]/div/div/a')


def breast_evaluation(h5Driver):
    h5Driver.clickElementByXpath('//*[@id="box"]/div/div[3]/div[2]/a[2]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[2]/div[2]/div/a[2]')
    h5Driver.textElementByXpath('//*[@id="divHeight"]/div[3]/div[2]/div/div[2]/input','156')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[3]/div[2]/div/div[2]/label[2]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[4]/div[2]/div/a[3]')
    h5Driver.textElementByXpath('//*[@id="divHeight"]/div[5]/div[2]/div/div[2]/input','70')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[5]/div[2]/div/div[2]/label[2]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[6]/div[2]/div/a[3]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[7]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[7]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[8]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[8]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[9]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[10]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[11]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[11]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[12]/div[2]/div/a[2]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[13]/div[2]/div/a[4]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[14]/div[2]/div/a[2]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[15]/div[2]/div/a[3]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[16]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[16]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[17]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[17]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[18]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[18]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[19]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[20]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[21]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[22]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[22]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[23]/div[2]/div/a[1]')
    h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[23]/div[2]/div/label')
    h5Driver.clickElementByXpath('//*[@id="box"]/div/div[5]/div/div[2]/a')

def breast_result(h5Driver):
    h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div[2]/div[1]')


if __name__ == '__main__':
    unittest.main()
