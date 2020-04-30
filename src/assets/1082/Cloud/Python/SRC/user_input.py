#!/usr/bin/python3
"""
使用者輸入
"""

username = input("請問尊姓大名:")
gender = input("請問您的性別(M=男/F=女):")

if gender == 'M':
    print(username, "先生，您好。")
else:
    print(username, "小姐，您好。")
    