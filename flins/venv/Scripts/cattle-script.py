#!D:\Users\cathy\PycharmProjects\qiniu\venv\Scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'cattle==0.5.4','console_scripts','cattle'
__requires__ = 'cattle==0.5.4'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('cattle==0.5.4', 'console_scripts', 'cattle')()
    )
