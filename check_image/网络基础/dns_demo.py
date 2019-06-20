# -*- coding:utf-8 -*-

import dns.resolver


def get_A(domain):
    A = dns.resolver.query(domain, 'A')
    for i in A.response.answer:
        for j in i.items:
            print(j.address)

def get_MX(domain):
    MX = dns.resolver.query(domain,'MX')
    for i in MX:
        print('MX ptrference=',i.preference,'mail exchanger=',i.exchange)



if __name__ == '__main__':
    domain = 'flins.com.cn'
    get_A(domain)

