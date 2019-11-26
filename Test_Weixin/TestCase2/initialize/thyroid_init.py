# -*- coding:utf-8 -*-
import uiautomator2
import os
import subprocess
from util.logger import Logger
from time import sleep
from fastAutoTest.core.h5.h5Engine import H5Driver
logger = Logger(logger="LoginPage").getlog()

#视频文件初始化
def mp4_init():
    # 删除手机录屏MP4文件
    os.system('adb shell rm /sdcard/case.mp4')
    # 删除电脑的MP4文件
    mp4 = 'd:/MP4/case.mp4'
    if os.path.exists(mp4):
        os.remove(mp4)
        logger.info('电脑MP4已删除')
    else:
        logger.info('电脑没有MP4文件')

#录屏初始化
def video_init():
    subprocess.Popen(
        'adb shell screenrecord --bit-rate 4000000 /sdcard/case.mp4')
    logger.info('录屏启动成功')

#初始化uiautomator2
def uiautomator_init():
    d2 = uiautomator2.connect_usb()
    logger.info('uiautomator2初始化完成')
    return d2

#解锁mi8测试机屏幕
def unlock_mi8(d2):
    # 解锁手机屏幕--mi8
    cmd = ' adb shell dumpsys power | findstr "Display Power:state=" '
    r = os.popen(cmd)
    result = r.readlines()
    for i in result:
        i = i.strip('\r\n')
        if i == 'Display Power: state=OFF':
            d2.press('power')  # 点亮屏幕
            d2.swipe(293, 1994, 29, 619)  # 向上滑动屏幕解锁

#启动微信
def open_weixin():
    os.system('adb shell am force-stop com.tencent.mm')
    os.system('adb shell am start com.tencent.mm/.ui.LauncherUI')
    print '微信已重启'


#初始化H5Driver
def h5Driver_init(d2):
    d2(resourceId="com.tencent.mm:id/b6e", text=u"文件传输助手").click()
    # 进入H5链接
    d2(resourceId="com.tencent.mm:id/oe", className="android.view.View", instance=3).click()
    sleep(3)
    h5Driver = H5Driver()
    h5Driver.initDriver()
    h5Driver.wait(3)
    return h5Driver