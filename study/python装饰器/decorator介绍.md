什么是装饰器？

通过高阶函数返回新函数。
python内置的@语法就是为了简化装饰器调用。

@new_fn                            def f1(x):
def f1(x):         ------>              return x*2
    return x*2                     f1 = new_fn(f1)
    
    
装饰器的作用
. 极大的简化代码，避免每个函数编写重复性代码
    打印log:@log
    检测性能：@performance
    数据库事务：@transaction
    URL路由：@post('/register')
    
    
