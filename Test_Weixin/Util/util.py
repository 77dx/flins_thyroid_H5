#coding=utf-8
import os


def pull_vivomp4():
    os.system('adb -s %s pull /sdcard/thyroid_%s.mp4 D:/vivo_MP4' %('9f85839','9f85839'))
    print 'pull vivo'


def pull_mi9mp4():
    os.system('adb -s %s pull /sdcard/thyroid_%s.mp4 D:/mi9_MP4' %('9b1dee49','9b1dee49'))
    print 'pull mi9'



if __name__ == '__main__':
    pass