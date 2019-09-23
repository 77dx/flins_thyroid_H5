# -*- coding:utf-8 -*-
from time import sleep,ctime
import threading

class Multithreading():

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
    m= Multithreading()
    threads = []
    t1 = threading.Thread(target=m.talk,args=("Hello World!",2))
    threads.append(t1)

    t2 = threading.Thread(target=m.write, args=("Life is short,You need python!", 2))
    threads.append(t2)

    #执行多线程
    for t in threads:
        t.start()

    for t in threads:
        t.join()

    print("All thread end! %s" %ctime())