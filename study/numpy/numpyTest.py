# -*- coding:utf-8 -*-
import numpy as np


# print(np.random.randn(2,4))



#生成一个等差数列  [1,11)
# print(np.arange(1,11))



def calc_prod(lst):
    def product():
        p = 1
        for i in lst:
           p = p * i
        return p
    return product

f = calc_prod([1, 2, 3, 4])
print (f())