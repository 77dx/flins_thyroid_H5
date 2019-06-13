import requests


#生产环境的接口地址https://weixin.my_demo.com.cn/customer/ev/count

domain_url = "http://weixin.my_demo.com.cn"
headers = {'Content-Type':'application/json','token':'197cfbbedd2e4b28ba9b9cfad829d7c4'}


def getCount():
    playload = {'type':'thyroid'}
    count = '/customer/ev/count'
    r = requests.post(domain_url + count,data=playload)
    print(r.text)


