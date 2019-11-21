# -*- coding:utf-8 -*-
import uiautomator2
import os
import subprocess
from Util.logger import Logger

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
    logger.info('uiautomator初始化完成')
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