from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth import authenticate
from django.contrib import auth




def test(request):
    return HttpResponse("hello test")


#登录
def login(request):
    if request.method == "POST":
        username = request.POST.get("username","")
        password = request.POST.get("password","")
        user = authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            request.session["user"] = username
            response = HttpResponseRedirect("/home/")
            return response
        else:
            return render(request,'login.html',{'error':'用户名或密码不正确'})

    return render(request,'login.html')

#主页
def home(request):
    return render(request,'home.html')

#登出
def logout(request):
    auth.logout(request)
    return render(request,'login.html')