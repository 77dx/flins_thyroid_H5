# -*- coding:utf-8 -*-
"""
读取yaml文件
"""
import yaml
import os


def parse():
    path_ya = str(os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))) + '/config/params'
    pages = {}
    for root, dirs, files in os.walk(path_ya):
        for name in files:
            watch_file_path = os.path.join(root, name)
            with open(watch_file_path, 'r') as f:
                page = yaml.safe_load(f)
                if page == None:
                    break
                pages.update(page)
        return pages


class GetPages:
    @staticmethod
    def get_page_list(param):
        _page_list = {}
        pages = parse()
        for page, value in pages.items():
            parameters = value[param]
            data_list = []
            for parameter in parameters:
                data_list.append(parameter)
            _page_list[page] = data_list

        return _page_list


if __name__ == '__main__':
    lists = GetPages.get_page_list('datasource')
    print(lists)

