# -*- coding:utf-8 -*-
from locust import HttpLocust,TaskSet,task
import requests
from requests.packages.urllib3.exceptions import InsecureRequestWarning

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

class UserBehavior(TaskSet):

    @task(1)
    def test_users(self):
        header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"}
        req = self.client.get('/users',headers=header,verify=False)
        if req.status_code == 200:
            print('success')
        else:
            print('fails')


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 3000
    max_wait = 6000

if __name__ == '__main__':
    import os
    os.system('locust -f locust_demo.py --host=http://134.175.9.133:8888')