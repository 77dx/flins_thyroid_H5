# -*- coding:utf-8 -*-
import re

#返回一个IP数组，并且按IP最后一位排序返回。
s = '192.0.0.1?!289.0.0.1!0.0.0.0!192.163.10.28?192.0.0.1'

list1 = re.split('[?|!]',s)
print(list1)

list2 = []
for i in list1:
    if i.__len__() != 0:
        list2.append(i)

print(list2)

#使用切片 [start:end:step]
print(list2[::-1])

list3 = []
#使用reverse逆序
for i in reversed(list2):
    list3.append(i)

print(list3)
