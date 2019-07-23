# -*- coding:utf-8 -*-

#给函数加上打印结果
def print_result(f):
    def new_f(*args,**kw):
        result = f(*args,**kw)
        print('函数名是:%s,和是:%s' %(f.__name__,result))
    return new_f


@print_result
def add(a,b):
    return a+b









if __name__ == '__main__':
    import math

    r = isinstance(int(math.sqrt(4)),int)

    print(r)