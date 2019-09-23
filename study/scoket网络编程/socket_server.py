# -*- coding:utf-8 -*-
import socket
import random

#实例化
sk = socket.socket()

#定义绑定的ip和端口
ip_port = ('127.0.0.1',8888)

#绑定监听
sk.bind(ip_port)

#设置最大连接数
sk.listen(5)

while True:

    print('正在等待接收数据...')

    #接收数据
    conn,address = sk.accept()

    msg = '连接成功'

    #发送信息
    #python 3.x以上，网络数据的发送接收都是byte类型，如果发送的数据是str型则需要进行编码。
    conn.send(msg.encode())

    while True:
        #接收客户端消息
        data = conn.recv(1024)
        print(data.decode())
        if data == b'exit':
            break
        conn.send(data)
        conn.send(str(random.randint(1,1000)).encode())


    #主动关闭连接
    conn.close()