# -*- coding:utf-8 -*-
import os
import uiautomator2



def test():
    cmd = ' adb shell dumpsys power | findstr "Display Power:state=" '
    d2 = uiautomator2.connect_usb('9f85839')
    r = os.popen(cmd)
    result = r.readlines()
    for i in result:
        i = i.strip('\r\n')
        if i == 'Display Power: state=OFF':
            d2.press('power')  # 点亮屏幕
        d2.swipe(293, 1994, 29, 619)  # 向上滑动屏幕解锁

if __name__ == '__main__':
    test()