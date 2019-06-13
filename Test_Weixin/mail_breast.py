# -*- coding: UTF-8 -*-

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from email.utils import formataddr
from email.mime.application import MIMEApplication
import os



def mail(file,filename):
    ret = True
    my_sender = '396321556@qq.com'  # 发件人邮箱账号
    my_pass = 'qgtlypdphibpcahj'  # 发件人邮箱密码
    my_user = '396321556@qq.com'  # 收件人邮箱账号，我这边发送给自己

    try:
        msg = MIMEMultipart()
        msg['From'] = formataddr(["cathy", my_sender])  # 括号里的对应发件人邮箱昵称、发件人邮箱账号
        msg['To'] = formataddr(["dx", my_user])  # 括号里的对应收件人邮箱昵称、收件人邮箱账号
        msg['Subject'] = "乳腺问卷测评自动化测试报告"  # 邮件的主题，也可以说是标题

        #邮件文本内容
        msg.attach(MIMEText('请下载附件查看详情', 'plain', 'utf-8'))

        #附件一：html
        html = MIMEApplication(open(file,'rb').read())
        html.add_header('Content-Disposition','attachment',filename=filename)
        msg.attach(html)

        # 附件二：case01视频
        os.system('adb -s %s pull /sdcard/case03.mp4 E:/vivo_MP4' % ('9f85839'))
        vivomp4 = MIMEApplication(open('E:/vivo_MP4/case03.mp4', 'rb').read())
        vivomp4.add_header('Content-Disposition', 'attachment', filename='case03.mp4')
        msg.attach(vivomp4)

        #发送邮件
        server = smtplib.SMTP_SSL("smtp.qq.com", 465)  # 发件人邮箱中的SMTP服务器，端口是25
        server.login(my_sender, my_pass)  # 括号中对应的是发件人邮箱账号、邮箱密码
        server.sendmail(my_sender, [my_user, ], msg.as_string())  # 括号中对应的是发件人邮箱账号、收件人邮箱账号、发送邮件
        server.quit()  # 关闭连接
    except Exception:  # 如果 try 中的语句没有执行，则会执行下面的 ret=False
        ret = False
    return ret

def send_email():

    #选择TestReport最后一个html文件
    reports_list = os.listdir(os.path.join(os.getcwd(), 'TestReport'))
    len = reports_list.__len__()
    basic_path = os.path.join(os.getcwd(), 'TestReport')
    report = reports_list[len - 1]
    ret = mail(os.path.join(basic_path, report), report)

    if ret:
        print '邮件发送成功'
    else:
        print '邮件发送失败'



if __name__ == '__main__':
    send_email()