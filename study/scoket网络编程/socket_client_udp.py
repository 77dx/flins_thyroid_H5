# -*- coding:utf-8 -*-
import socket

client_udp = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

ip_port = ('127.0.0.1',8888)


while True:
    msg_input = input('请输入要发送的消息：')

    if msg_input == 'exit':
        break
    client_udp.sendto(msg_input.encode(),ip_port)

client_udp.close()
