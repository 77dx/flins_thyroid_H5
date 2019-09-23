# -*- coding:utf-8 -*-
import yaml



file = open("female.yaml","r",encoding="utf-8")
data = yaml.load(file)
print(data["qaQuestList"][0]['createTimeDesc'])

https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd762ee6ca6d255d2&redirect_uri=https://api.flins.com.cn/zypage&response_type=code&scope=SCOPE&state=STATE&connect_redirect=1#wechat_redirect