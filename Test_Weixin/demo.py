#coding:utf-8

import os
import uiautomator2
from time import sleep











if __name__ == '__main__':
    d2 = uiautomator2.connect_usb('9b1dee49')

    d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=5).click()
    sleep(4)
    d2.click(681, 1602)
    d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=6).click()
    d2(text=u"安装线上内核").click()
    sleep(35)
    d2(resourceId="android:id/button1").click()
    d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=7).click()


