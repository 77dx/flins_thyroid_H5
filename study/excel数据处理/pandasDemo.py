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

def id():
    df = pd.read_excel('id.xls')
    id_list = df['id'].values
    df2 = pd.read_excel('ss.xls')
    key_list = df2['id'].values
    keys = []
    for i in id_list:
        for j in key_list:
            if i == j:
                key = df2[df2['img_url']]
                keys.append(key)
                print(key)
    # return keys



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


#获取本地图片的名称
def image_name():
    list = os.listdir('D:/qiniu')
    images = []
    for i in list:
        image = i.split('.')
        images.append(image[0])
    return images


#获取excel中的key
def get_keys():
    df = pd.read_excel('newkey.xls')
    keys = df['转义url'].values
    return keys


#拼接要删除图片的本地地址
def local_url_image():
    local = image_name()
    keys = get_keys()
    s = set(local) - set(keys)
    url = 'D:/qiniu/'
    local_url = []
    for i in s:
        local_url.append(url + i + '.jpg')
    return local_url


if __name__ == '__main__':
    # delete_image = local_url_image()
    # try:
    #     for d in delete_image:
    #         os.remove(d)
    # except Exception as e:
    #     print(e)

    id()







