#coding=utf-8
from fastAutoTest.core.h5.h5Engine import H5Driver


class cases():
    # 首页
    def index(device1_h5Driver):
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div/a')
        device1_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div/div[77]')
        # 返回上一页
        device1_h5Driver.returnLastPage()
        # 点击同意协议
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div/label')
        # 点击去测评
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/a[2]')

    # 做测评
    def evaluation(device1_h5Driver):
        # 做问卷题目
        device1_h5Driver.clickElementByXpath('//*[@id="box"]/div/div[3]/div[2]/a[1]')  # 选择男性
        device1_h5Driver.wait(1)  # 等待1s
        device1_h5Driver.textElementByXpath('//*[@id="divHeight"]/div[2]/div[2]/div/div[2]/input', '185')  # 输入身高185
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[2]/div[2]/div/div[2]/label[2]')
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[3]/div[2]/div/a[1]')  # 选择<40岁
        device1_h5Driver.textElementByXpath('//*[@id="divHeight"]/div[4]/div[2]/div/div[2]/input', '45')  # 输入体重70
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[4]/div[2]/div/div[2]/label[2]')
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[5]/div[2]/div/a[1]')  # 选择北上广
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[6]/div[2]/div/a[1]')  # 选择大专、本科
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[7]/div[2]/div/a[3]')
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[7]/div[2]/div/label')  # 没有或者不知道
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[8]/div[2]/div/a[1]')
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[8]/div[2]/div/label')  # 父母子女
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[9]/div[2]/div/a[3]')
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[9]/div[2]/div/label')  # 以上都没有
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[10]/div[2]/div/a[2]')  # 没有或者不知道
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[11]/div[2]/div/a[2]')  # 没有或者不知道
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[12]/div[2]/div/a[2]')  # 有
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[13]/div[2]/div/a[5]')
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[13]/div[2]/div/label')  # 我是乐天派
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[14]/div[2]/div/a[1]')  # 压力山大
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[15]/div[2]/div/a[2]')  # 特立独行
        device1_h5Driver.clickElementByXpath('//*[@id="divHeight"]/div[16]/div[2]/div/a[2]')  # 没兴趣
        # 提交问卷
        device1_h5Driver.clickElementByXpath('//*[@id="box"]/div/div[5]/div/div[2]/a')  # 提交

    # 问卷结果页
    def eva_result(self):
        self.mi9_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div[1]/div[1]/label')  # 滚到页面顶部
        self.mi9_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div[6]/span')  # 滚到页面底部
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/label')  # 点击超声评估

    # 黄金会员会员套餐页面
    def vip_test01(self,device1_h5Driver):
        # 获取会员类型
        gold = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[1]/label')
        # 获取会员价格
        gold_price = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[3]/div/div[1]/span')
        # 判断会员类型和价格是否匹配
        if (gold == '黄金会员') and (gold_price == '39.9'):
            result = 1
        else:
            result = 0
        # 断言黄金会员的价格是否符合预期
        self.assertEqual(1, result, msg='黄金会员类型或者价格不正确')
        print gold + '的价格是' + gold_price

        # 点击立即开通
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/div/a')
        device1_h5Driver.wait(2)
        # 获取支付页面的价格
        pay_price = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[2]/span[1]')
        # 判断会员类型
        pay_gold = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[1]/span')
        # 判断介绍页面的价格和支付页面的价格是否一致
        if (gold_price in pay_price) and (gold == pay_gold):
            result2 = True
        else:
            result2 = False
        # 断言
        self.assertTrue(result2, msg='黄金会员支付页价格不匹配')
        print '支付页与介绍页面会员类型和价格一致'
        # 返回上一页面
        device1_h5Driver.returnLastPage()

    # 铂金会员会员套餐页面
    def vip_test02(self,device1_h5Driver):
        # 提取铂金会员
        platinum = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[2]/label')
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[2]/label')  # 点击铂金会员
        # 获取价格
        platinum_price = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[3]/div/div[1]/span')
        # 判断价格和会员类型是否匹配
        if (platinum == '铂金会员') and (platinum_price == '59.9'):
            result = 1
        else:
            result = 0
        # 断言
        self.assertEqual(1, result, msg='铂金会员类型或者价格不正确')
        print platinum + '的价格是：' + platinum_price
        # 点击立即开通
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/div/a')
        device1_h5Driver.wait(2)
        # 获取支付页的会员类型
        pay_platium = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[1]/span')
        # 获取价格
        pay_price = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[2]/span[1]')
        # 判断价格与介绍页面是否一致
        if (platinum_price in pay_price) and (pay_platium == platinum):
            result2 = True
        else:
            result2 = False
        # 断言
        self.assertTrue(result2, msg='铂金会员支付页价格不正确')
        print '铂金会员支付页价格类型正确'
        # 返回上一页
        device1_h5Driver.returnLastPage()

    # 钻石会员会员套餐页面
    def vip_test03(self,device1_h5Driver):
        # 提取钻石会员
        diamond = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[3]/label')
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[2]/div/div[1]/div[3]/label')
        # 提取价格
        diamond_price = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div[3]/div/div[1]/span')
        # 判断价格和类型是否符合预期
        if (diamond == '钻石会员') and (diamond_price == '89.9'):
            result = 1
        else:
            result = 0
        # 断言
        self.assertEqual(1, result, msg='钻石会员类型或者价格不正确')
        print diamond + '的价格是：' + diamond_price
        # 点击立即开通
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div[3]/div/a')
        device1_h5Driver.wait(2)
        # 获取会员类型和价格
        pay_diamond = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[1]/span')
        pay_price = device1_h5Driver.getElementTextByXpath('//*[@id="app"]/div/div/div[1]/div[2]/span[1]')
        # 判断类型和价格
        if (diamond_price in pay_price) and (diamond == pay_diamond):
            result2 = True
        else:
            result2 = False
        # 断言
        self.assertTrue(result2, msg='钻石会员支付页面价格不正确')
        # 点击用户服务使用协议
        device1_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[3]/div[5]/label')
        # 滚动页面至底部
        device1_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div/div[77]')

    # 上传B超报告
    def B_report(self, d2):
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[2]/div[1]/span')  # 详情示范
        self.mi9_h5Driver.scrollToElementByXpath('//*[@id="app"]/div/div[12]/label')
        self.mi9_h5Driver.returnLastPage()  # 返回上一页
        # 上传图片
        self.mi9_h5Driver.clickElementByXpath('//*[@id="file"]')
        d2(resourceId="android:id/icon", className="android.widget.ImageView", instance=1).click()  # 文件
        d2(resourceId="com.android.documentsui:id/icon_thumb").click()  # mi9选择图片
        # 选择体检时间
        self.mi9_h5Driver.wait(5)  # 等待5s
        self.mi9_h5Driver.clickElementByXpath('//*[@id="checkTimeStr"]')
        self.mi9_h5Driver.clickElementByXpath(
            '/html/body/div[6]/div/div[2]/div[2]/div/div[2]/div[1]/div[3]/span')  # 选择体检时间
        # 提交报告
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[3]/div[2]')
        self.mi9_h5Driver.clickElementByXpath('//*[@id="app"]/div/div/div[4]')  # 点击提交
