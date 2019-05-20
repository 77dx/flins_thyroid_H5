#coding=utf-8
import  unittest
from BSTestRunner import BSTestRunner
import time
import os
import send_Mail



def run():
    # 定义测试用例的路径
    test_dir = os.path.join(os.getcwd(), 'TestCase')
    discover = unittest.defaultTestLoader.discover(test_dir, pattern='test*.py')
    report_dir = os.path.join(os.getcwd(), 'TestReport')
    now = time.strftime("%y-%m-%d %H_%M_%S")
    report_name = report_dir +'/'+now + 'result.html'
    with open(report_name, 'wb') as f:
        runner = BSTestRunner(stream=f, title='Test Report' + 'Thyroid', description='Thyroid_H5')
        runner.run(discover)
        print runner
    f.close()


if __name__ == '__main__':
   run()
   send_Mail.send_email()
