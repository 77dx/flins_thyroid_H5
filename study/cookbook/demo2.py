# -*- coding:utf-8 -*-

'''
如果一个可迭代对象的元素个数超过变量个数时，会抛出一个 ValueError 。
那么怎样才能从这个可迭代对象中解压出 N 个元素出来？

Python 的星号表达式可以用来解决这个问题。比如，你在学习一门课程，在学期末的时候，
 你想统计下家庭作业的平均成绩，但是排除掉第一个和最后一个分数。如果只有四个分数，
 你可能就直接去简单的手动赋值， 但如果有 24 个呢？这时候星号表达式就派上用场了：
'''
def drop_first_last(grades):
    first,*middle,last = grades
    return avg(middle)

#第一次avg的参数写的是*args,意思是多个参数，但是middle返回的是一个数组，是一个参数，所以用
#一个变量(可迭代)即可
def avg(list):
    return sum(list)/(len(list)+1)

# grades = [12,56,78,14,55,23,56]
# a = drop_first_last(grades)
# print(a)


'''
另外一种情况，假设你现在有一些用户的记录列表，每条记录包含一个名字、
邮件，接着就是不确定数量的电话号码。 你可以像下面这样分解这些记录：
>>> record = ('Dave', 'dave@example.com', '773-555-1212', '847-555-1212')
>>> name, email, *phone_numbers = record
>>> name
'Dave'
>>> email
'dave@example.com'
>>> phone_numbers
['773-555-1212', '847-555-1212']
>>>
值得注意的是上面解压出的 phone_numbers 变量永远都是列表类型，不管解压的电话号码数量是多少（包括 0 个）。
所以，任何使用到 phone_numbers 变量的代码就不需要做多余的类型检查去确认它是否是列表类型了。
'''

'''
星号表达式也能用在列表的开始部分。比如，你有一个公司前 8 个月销售数据的序列，
但是你想看下最近一个月数据和前面 7 个月的平均值的对比。你可以这样做：
'''
def test(sales_record):
    *trailing_qtrs, current_qtr = sales_record
    trailing_avg = sum(trailing_qtrs) / len(trailing_qtrs)
    #return avg_comparison(trailing_avg, current_qtr)

*trailing, current = [10, 8, 7, 1, 9, 5, 10, 3]
# print(trailing)
# print(current)

'''
扩展的迭代解压语法是专门为解压不确定个数或任意个数元素的可迭代对象而设计的。 
通常，这些可迭代对象的元素结构有确定的规则（比如第 1 个元素后面都是电话号码）， 
星号表达式让开发人员可以很容易的利用这些规则来解压出元素来。
而不是通过一些比较复杂的手段去获取这些关联的元素值。

值得注意的是，星号表达式在迭代元素为可变长元组的序列时是很有用的。 比如，下面是一个带有标签的元组序列：
'''
#example:
records = [
    ('foo',1,2),
    ('bar','hello'),
    ('foo',3,4),
]

def do_foo(x,y):
    print('foo',x,y)

def do_bar(s):
    print('bar',s)

for tag,*args in records:
    if tag == 'foo':
        do_foo(*args)
    elif tag == 'bar':
        do_bar(*args)

'''
总结：在参数长度可变时，运用*args参数，可以实现参数个数可变。
'''