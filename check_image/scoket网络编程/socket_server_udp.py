# -*- coding:utf-8 -*-
import socket

server_udp = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

ip_port = ("127.0.0.1",8888)

server_udp.bind(ip_port)

#循环接收数据
while True:
    #接收数据
    data = server_udp.recv(1024)
    print(data.decode())