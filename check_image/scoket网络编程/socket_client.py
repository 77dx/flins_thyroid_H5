# -*- coding:utf-8 -*-
import socket



client = socket.socket()

#访问
ip_port = ('127.0.0.1',8888)
client.connect(ip_port)

while True:
    data = client.recv(1024)
    print(data.decode())

    msg_input = input('请输入要发送的消息：')
    client.send(msg_input.encode())
    if msg_input == 'exit':
        break
    data = client.recv(1024)
    print(data.decode())


