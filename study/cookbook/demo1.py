# -*- coding:utf-8 -*-
'''
任何的序列（或者是可迭代对象）可以通过一个简单的赋值语句解压并赋值给多个变量。
唯一的前提就是变量的数量必须跟序列元素的数量是一样的
'''

p = (4,5)
x,y = p

# print(x)
# print(y)

data = ['ACME',50,91.1,(2012,12,12)]
# name,shares,price,(year,month,day) = data
# name,shares,price,date = data
# print(name)
# print(shares)
# print(price)
# print(year)
# print(month)
# print(day)

#如果变量个数和序列元素的个数不匹配，会产生一个异常。

#有时候，你可能只想解压一部分，丢弃其他的值。对于这种情况
# Python 并没有提供特殊的语法。 但是你可以使用任意变量名去占位，到时候丢掉这些变量就行了。
data2 = ['ACME',50,91.1,(2012,12.27)]
_,shares,price,_ = data
print(shares)
print(price)

#你必须保证你选用的那些占位变量名在其他地方没被使用到。


'''
    总结：也就是说，在序列中取出数据时，因为是按照顺序迭代，所以在遇到不想取出的数据时，可用占位符(_),
    只取出需要的变量的即可，占位符的数据不可用。
'''
