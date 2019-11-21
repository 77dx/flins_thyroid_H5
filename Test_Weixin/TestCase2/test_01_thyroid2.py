# -*- coding:utf-8 -*-import unittest
import unittest
from fastAutoTest.core.h5.h5Engine import H5Driver
import uiautomator2
import os
import subprocess
from time import sleep
from Util.logger import Logger

logger = Logger(logger="LoginPage").getlog()

class TestThyroid(unittest.TestCase):

    def setUp(self):



