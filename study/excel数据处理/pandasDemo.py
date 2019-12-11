# -*- coding:utf-8 -*-
import pandas as pd
import xlwt,xlrd
from xlutils.copy import copy
import os


# 1.取出sheet1的content
def sheet1_content():
    df = pd.read_excel('2.xls',sheet_name='1')
    content1 = df['content'].values
    return content1

# 2.取出sheet2的content
def sheet2_content():
    df = pd.read_excel('2.xls',sheet_name='2')
    content2 = df['content'].values
    return content2

# 3.取出sheet1的id
def sheet1_id(list2):
    a = pd.read_excel('2.xls', sheet_name='1')
    id_list = []
    for i in list2:
        id = a[(a.content == i)].index.tolist()
        id_list.append(id[0])
    return id_list

# 4.根据id查sheet1的img_url
def sheet1_img(id_list,file):
    new_xls(file)
    df = pd.read_excel('2.xls',sheet_name='1')
    re_list = df.index.tolist()
    for i in id_list:
        for j in re_list:
            if i==j:
                image = df.iloc[i]['img_url']
                xls_image(file,image)

# 把image保存excel
def xls_image(file, data_list):
    workbook = xlrd.open_workbook(file, formatting_info=True)
    sheet = workbook.sheets()[0]
    newbook = copy(workbook)
    newsheet = newbook.get_sheet(0)
    rownum = sheet.nrows
    newsheet.write(rownum, 0, data_list)
    newbook.save(file)

# 新建excel文件
def new_xls(file):
    book = xlwt.Workbook()
    sheet = book.add_sheet("sheet1")
    title = ["image", "content"]
    for col in range(len(title)):
        sheet.write(0, col, title[col])
    book.save(file)







if __name__ == '__main__':
    list2 = sheet2_content()
    id_list = sheet1_id(list2)
    # sheet1_img(id_list,'result.xls')

