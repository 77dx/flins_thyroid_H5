# -*- coding:utf-8 -*-
from scapy.all import *



#  定义一个syn包,其中的格式如下：IP()/TCP(),IP中的src为自己的伪造的ip，dst为目标ip，
#  TCP中的dport为目标端口号，网络中普遍为80，flages=‘S’这里的s代表设置的是syn包
from scapy.layers.inet import IP, TCP

pkt = IP(src="202.121.0.12",dst="192.168.0.100")/TCP(dport=80,flags="S")
#  发送包，直接用send
send(pkt)
