# -*- coding:utf-8 -*-
from time import sleep,ctime
import multiprocessing

class Multiprocessing():

    #定义说和写的方法
    def talk(self,content,loop):
        for i in range(loop):
            print("Start talk:%s %s" %(content,ctime()))
            sleep(2)

    def write(self,content,loop):
        for i in range(loop):
            print("Start write:%s %s" % (content, ctime()))
            sleep(3)


if __name__ == '__main__':
    # 定义和加载说和写的线程
    m= Multiprocessing()
    process = []
    t1 = multiprocessing.Process(target=m.talk,args=("Hello World!",2))
    process.append(t1)

    t2 = multiprocessing.Process(target=m.write, args=("Life is short,You need python!", 2))
    process.append(t2)

    #执行多线程
    for t in process:
        t.start()

    for t in process:
        t.join()

    print("All thread end! %s" %ctime())