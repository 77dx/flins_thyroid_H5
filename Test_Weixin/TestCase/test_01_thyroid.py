# coding=utf-8
import unittest
from fastAutoTest.core.h5.h5Engine import H5Driver
import uiautomator2
import os
import subprocess
from time import sleep
import test_02_breast


class TestH5(unittest.TestCase):

    # 运行case的初始化
    @classmethod
    def setUp(self):
        print 'case开始执行了'

    # case01首页-问卷-问卷结果---mi8
    def test_01(self):
        try:
            device = '9f85839'
            # 删除手机中的MP4文件
            os.system('adb -s %s shell rm /sdcard/case01.mp4' % (device))
            print  device + '手机MP4已删除'
            # 删除电脑的MP4文件
            vivo_mp4 = 'd:/MP4/case01.mp4'
            if os.path.exists(vivo_mp4):
                os.remove(vivo_mp4)
                print '电脑MP4已删除'
            else:
                print '电脑没有MP4文件'

            # 初始化uiautomator2
            d2 = self.change_device(device)

            # 解锁手机屏幕--mi8
            cmd = ' adb -s %s shell dumpsys power | findstr "Display Power:state=" ' % (device)
            r = os.popen(cmd)
            result = r.readlines()
            for i in result:
                i = i.strip('\r\n')
                if i == 'Display Power: state=OFF':
                    d2.press('power')  # 点亮屏幕
                    d2.swipe(293, 1994, 29, 619)  # 向上滑动屏幕解锁

            # 启动微信
            self.open_weixin(device)

            # 初始化H5Drvier
            self.vivo_h5Driver = self.vivo_H5(device, d2)

            # 启动手机录屏
            vivo_child = subprocess.Popen(
                'adb -s %s shell screenrecord --bit-rate 4000000 /sdcard/case01.mp4' % (device))
            print device + '录屏启动成功'

            # 执行case
            # self.index(self.vivo_h5Driver)  # 首页
            # self.evaluation()  # 做问卷
            self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/label')
            self.vip_test01()  # 检查黄金会员
            self.vip_test02()  # 检查铂金会员
            self.vip_test03()  # 检查钻石会员
            d2(resourceId="com.tencent.mm:id/kx").click()
        except:
            print 'case01发生异常'
        else:
            self.vivo_h5Driver.close()  # 关闭H5Driver
            print '关闭' + device + '录屏'
            vivo_child.kill()  # 关闭手机录屏
            print '关闭' + device + '手机录屏'

    # case02问卷结果-上传B超-提交----mi9
    def test_02(self):
        try:
            device = '9b1dee49'
            # 删除手机的MP4文件
            os.system('adb -s %s shell rm /sdcard/case02.mp4' % (device))
            print  device + '手机MP4已删除'
            # 删除电脑的MP4文件
            mi9_mp4 = 'd:/mi9_MP4/case02.mp4'
            if os.path.exists(mi9_mp4):
                os.remove(mi9_mp4)
                print '电脑mi9_MP4已删除'
            else:
                print '电脑没有mi9_MP4文件'

            # 启动微信
            self.open_weixin(device)
            # 初始化uiautomator2
            d2 = self.change_device(device)

            # 初始化H5Drvier
            self.mi9_H5(device, d2)

            # 启动手机录屏
            mi9_child = subprocess.Popen('adb -s %s shell screenrecord /sdcard/case02.mp4' % (device))
            print device + '录屏启动成功'

            # 执行case
            self.eva_result()  # 问卷结果页
            self.B_report(d2)  # 上传B超页

            # 判断用例是否执行成功--是否进入最后一页
            submit = self.mi9_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[2]')
            result = self.assertNotEqual("完成", submit, msg='图片没有上传成功')
            if result:
                self.B_report(d2)

        except:
            print '发生异常'
            mi9_child.kill()
            print '关闭录屏'
        else:
            self.mi9_h5Driver.close()  # 关闭H5Drvier
            print '关闭H5Driver'
            mi9_child.kill()  # 关闭录屏
            print '关闭录屏'

    # 所有用例运行完执行一次
    @classmethod
    def tearDown(self):
        print 'case已经执行完毕'

    # 重启微信，需传入手机pid
    def open_weixin(self, device):
        os.system('adb -s %s shell am force-stop com.tencent.mm' % (device))
        os.system('adb -s %s shell am start com.tencent.mm/.ui.LauncherUI' % (device))
        print '微信已重启'

    # 选择设备
    def change_device(self, phone):
        # 初始化uiautomator2
        d2 = uiautomator2.connect_usb(phone)
        print 'uiautomator初始化完成'
        return d2

    # mi9初始化H5
    def mi9_H5(self, device, d2):

        # 打开微信X5调试
        d2(resourceId="com.tencent.mm:id/b6e", text=u"文件传输助手").click()

        # 重置微信调试
        # d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=5).click()
        # sleep(4)
        # d2.click(482, 1394)
        # d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=6).click()
        # d2(text=u"安装线上内核").click()
        # sleep(35)
        # d2(resourceId="android:id/button1").click()

        # 进入H5链接
        d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=7).click()
        sleep(3)

        # 初始化mi9_H5Driver
        self.mi9_h5Driver = H5Driver(device)
        self.mi9_h5Driver.initDriver()
        print 'mi9初始化H5Driver完成'
        self.mi9_h5Driver.wait(2)

    # mi8初始化H5
    def vivo_H5(self, device, d2):

        # 微信X5内核调试打开
        d2(resourceId="com.tencent.mm:id/b6e", text=u"文件传输助手").click()

        # 重置微信调试
        # d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=1).click()
        # sleep(4)
        # d2.click(681, 1602)
        # d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=2).click()
        # d2(text=u"安装线上内核").click()
        # sleep(30)
        # d2(resourceId="android:id/button1").click()

        # 进入H5链接
        d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=3).click()
        sleep(3)

        # 初始化mi8_H5Drvier
        self.vivo_h5Driver = H5Driver(device)
        self.vivo_h5Driver.initDriver()
        print 'vivo初始化H5Driver完成'
        self.vivo_h5Driver.wait(3)
        return self.vivo_h5Driver

    # 首页
    def index(self, vivo_h5Driver):
        self.vivo_h5Driver = vivo_h5Driver
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div/a')
        self.vivo_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div/div[77]')
        # 返回上一页
        self.vivo_h5Driver.returnLastPage()
        # 点击同意协议
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[2]/label')
        # 点击去测评
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/a')

    # 做测评
    def evaluation(self):
        # 做问卷题目
        self.vivo_h5Driver.clickElementByXpath('//*[@id="box"]/div/div[3]/div[2]/a[1]')  # 选择男性
        self.vivo_h5Driver.wait(1)  # 等待1s
        self.vivo_h5Driver.textElementByXpath('//*[@id="divHeight"]/div[2]/div[2]/div/div[2]/input', '185')  # 输入身高185
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[2]/div[2]/div/div[2]/label[2]')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[3]/div[2]/div/a[1]')  # 选择<40岁
        self.vivo_h5Driver.textElementByXpath('//*[@id="divHeight"]/div[4]/div[2]/div/div[2]/input', '45')  # 输入体重70
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[4]/div[2]/div/div[2]/label[2]')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[5]/div[2]/div/a[1]')  # 选择北上广
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[6]/div[2]/div/a[1]')  # 选择大专、本科
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[7]/div[2]/div/a[3]')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[7]/div[2]/div/label')  # 没有或者不知道
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[8]/div[2]/div/a[1]')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[8]/div[2]/div/label')  # 父母子女
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[9]/div[2]/div/a[3]')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[9]/div[2]/div/label')  # 以上都没有
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[10]/div[2]/div/a[2]')  # 没有或者不知道
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[11]/div[2]/div/a[2]')  # 没有或者不知道
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[12]/div[2]/div/a[2]')  # 有
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[13]/div[2]/div/a[5]')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[13]/div[2]/div/label')  # 我是乐天派
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[14]/div[2]/div/a[1]')  # 压力山大
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[15]/div[2]/div/a[2]')  # 特立独行
        self.vivo_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[16]/div[2]/div/a[2]')  # 没兴趣
        # 提交问卷
        self.vivo_h5Driver.clickElementByXpath('//*[@id="box"]/div/div[5]/div/div[2]/a')  # 提交

    # 问卷结果页
    def eva_result(self):
        self.mi9_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div[1]/div[1]/label')  # 滚到页面顶部
        self.mi9_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div[6]/span')  # 滚到页面底部
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/label')  # 点击超声评估

    # 黄金会员会员套餐页面
    def vip_test01(self):
        # 获取会员类型
        gold = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[1]/label')
        # 获取会员价格
        gold_price = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[3]/div/div[1]/span')
        # 判断会员类型和价格是否匹配
        if (gold == '黄金会员') and (gold_price == '39.9'):
            result = 1
        else:
            result = 0
        # 断言黄金会员的价格是否符合预期
        self.assertEqual(1, result, msg='黄金会员类型或者价格不正确')
        print gold + '的价格是' + gold_price

        # 点击立即开通
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/div/a')
        self.vivo_h5Driver.wait(2)
        # 获取支付页面的价格
        pay_price = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[2]/span[1]')
        # 判断会员类型
        pay_gold = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[1]/span')
        # 判断介绍页面的价格和支付页面的价格是否一致
        if (gold_price in pay_price) and (gold == pay_gold):
            result2 = True
        else:
            result2 = False
        # 断言
        self.assertTrue(result2, msg='黄金会员支付页价格不匹配')
        print '支付页与介绍页面会员类型和价格一致'
        # 返回上一页面
        self.vivo_h5Driver.returnLastPage()

    # 铂金会员会员套餐页面
    def vip_test02(self):
        # 提取铂金会员
        platinum = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[2]/label')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[2]/label')  # 点击铂金会员
        # 获取价格
        platinum_price = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[3]/div/div[1]/span')
        # 判断价格和会员类型是否匹配
        if (platinum == '铂金会员') and (platinum_price == '59.9'):
            result = 1
        else:
            result = 0
        # 断言
        self.assertEqual(1, result, msg='铂金会员类型或者价格不正确')
        print platinum + '的价格是：' + platinum_price
        # 点击立即开通
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/div/a')
        self.vivo_h5Driver.wait(2)
        # 获取支付页的会员类型
        pay_platium = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[1]/span')
        # 获取价格
        pay_price = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[2]/span[1]')
        # 判断价格与介绍页面是否一致
        if (platinum_price in pay_price) and (pay_platium == platinum):
            result2 = True
        else:
            result2 = False
        # 断言
        self.assertTrue(result2, msg='铂金会员支付页价格不正确')
        print '铂金会员支付页价格类型正确'
        # 返回上一页
        self.vivo_h5Driver.returnLastPage()

    # 钻石会员会员套餐页面
    def vip_test03(self):
        # 提取钻石会员
        diamond = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[3]/label')
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[3]/label')
        # 提取价格
        diamond_price = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[3]/div/div[1]/span')
        # 判断价格和类型是否符合预期
        if (diamond == '钻石会员') and (diamond_price == '89.9'):
            result = 1
        else:
            result = 0
        # 断言
        self.assertEqual(1, result, msg='钻石会员类型或者价格不正确')
        print diamond + '的价格是：' + diamond_price
        # 点击立即开通
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/div/a')
        self.vivo_h5Driver.wait(2)
        # 获取会员类型和价格
        pay_diamond = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[1]/span')
        pay_price = self.vivo_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[2]/span[1]')
        # 判断类型和价格
        if (diamond_price in pay_price) and (diamond == pay_diamond):
            result2 = True
        else:
            result2 = False
        # 断言
        self.assertTrue(result2, msg='钻石会员支付页面价格不正确')
        # 点击用户服务使用协议
        self.vivo_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[3]/div[5]/label')
        # 滚动页面至底部
        self.vivo_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div/div[77]')

    # 上传B超报告
    def B_report(self, d2):
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[2]/div[1]/span')  # 详情示范
        self.mi9_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div[12]/label')
        self.mi9_h5Driver.returnLastPage()  # 返回上一页
        # 上传图片
        self.mi9_h5Driver.clickElementByXpath('//*[@id="file"]')
        d2(resourceId="android:id/icon", className="android.widget.ImageView", instance=1).click()  # 文件
        sleep(5)
        d2(resourceId="com.android.documentsui:id/icon_thumb").click()  # mi9选择图片
        self.mi9_h5Driver.wait(5)  # 等待5s
        self.mi9_h5Driver.clickElementByXpath('//*[@id="checkTimeStr"]')
        self.mi9_h5Driver.clickElementByXpath(
            '/html/body/div[6]/div/div[2]/div[2]/div/div[2]/div[1]/div[3]/span')  # 选择体检时间
        # 提交报告
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[3]/div[2]')
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[4]')  # 点击提交


if __name__ == '__main__':
    unittest.main()
