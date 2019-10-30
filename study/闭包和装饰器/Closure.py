# -*- coding:utf-8 -*-
'''
闭包是Python编程一个非常重要的概念。如果一个外函数中定义了一个内函数，且内函数体内引用到了体外的变量，这时外函数通过return返回内函数的引用时，
会把定义时涉及到的外部引用变量和内函数打包成一个整体（闭包）返回。我们在看下之间案例。我们的outer方法返回的只是内函数对象吗?
错。我们的outer函数返回的实际上是一个由inner函数和外部引用变量(a)组成的闭包!

一般一个函数运行结束的时候，临时变量会被销毁。但是闭包是一个特别的情况。当外函数发现，自己的临时变量会在将来的内函数中用到,
自己在结束的时候，返回内函数的同时，会把外函数的临时变量同内函数绑定在一起。这样即使外函数已经结束了，内函数仍然能够使用外函数的临时变量。
这就是闭包的强大之处.


'''
def outer(x):
    a = x
    def inner(y):
        b = y
        print(a+b)
        print('a: %d'%a)
        print('b: %d'%b)
    return inner

# f1 = outer(1)    #返回inner函数对象+局部变量1(闭包)
# print(f1)
#
# f1(10)     #相当于inner(10)

'''
    输入结果：
    <function outer.<locals>.inner at 0x00000215766B42F0>
    11
    a: 1
    b: 10
'''

#占位符   fromat
tpl = "i am {0}, age {1}, really {0}".format("seven", 18)
# print(tpl)


#如何写一个通用的装饰器
from functools import wraps
def hint(func):
    @wraps(func)      #不修改被修饰函数名(name属性)
    def wrapper(*args,**kwargs):
        print('{} will run'.format(func.__name__))
        return func(*args,**kwargs)
    return wrapper


#简便写法
from decorator import decorator
@decorator
def hints(func,*args,**kwargs):
    print('{} will run'.format(func.__name__))
    return func(*args,**kwargs)

@hints
def hello(x,y):
    print(x+y)

hello(2,3)
print(hello.__name__)