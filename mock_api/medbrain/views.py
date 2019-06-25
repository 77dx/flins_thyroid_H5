from django.shortcuts import render
import json
from django.http import HttpResponse



#获取验证码
def auth_captcha(request):
    data_json = {
        "code": "0000",
        "desc": "请求成功",
        "data": {
            "img": "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",
            "captchaToken": "7c77edad75904a2f81c413dd702e4209"
        }
    }
    return HttpResponse(json.dumps(data_json,ensure_ascii=False),content_type="application/json,charset=utf-8")

#用户登录
def auth_login(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        account = json_data.get('account')
        pwd = json_data.get('pwd')
        success = {
          "code": "0000",
          "desc": "请求成功",
          "data": None
        }
        fail = {
            "code":"9999",
            "desc":"用户名或者密码错误"
        }
        if(account == 'cathy' and pwd == '0c8abdb962f042d1857c66dd26b0c87b'):
            return HttpResponse(json.dumps(success,ensure_ascii='Falese'),content_type='application/json,charset=utf-8')
        else:
            return HttpResponse(json.dumps(fail,ensure_ascii='False'),content_type='application/json,charset=utf-8')
    else:
        return HttpResponse(json.dumps({"code":"0001","data":"请求错误"}, ensure_ascii='False'), content_type='application/json,charset=utf-8')