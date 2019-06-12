#coding:utf-8


class gloVal():

    def _init():  # 初始化
        global _global_dict
        _global_dict = {}

    def set_value(key, value):
        """ 定义一个全局变量 """
        _global_dict[key] = value

    def get_value(key, defValue=None):

        try:
            return _global_dict[key]
        except KeyError:
            return defValue


    BASE_URL = "https://mp.flins.com.cn/customer"
    HEADER = {'content-type': 'application/json', "token": "18f1e5de8a2b4bdeabc26e6d36d14f52"}


if __name__ == '__main__':
    gloVal._init()
    gloVal.set_value("id","1")
    print(gloVal.get_value("id"))

