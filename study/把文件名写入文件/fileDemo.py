# -*- coding:utf-8 -*-

import os

def fileDemo(file,url):
    imageList = os.listdir(url)
    try:
        if os.path.exists(file):
            os.remove(file)
    except:
        print("文件已存在")

    for image in imageList:
        image_url = url+'/'+image
        with open(file,'a') as f:
            f.write(image_url+'\n')




if __name__ == '__main__':
    fileDemo('image.txt','D:/image')
