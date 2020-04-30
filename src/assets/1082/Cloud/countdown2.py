#!/usr/bin/python3
"""
倒數計時，輸入參數為負值時正向計數
"""
import sys
import random
import time

s = r'\|/-'  # symbols for rotation

# an integer number in [10,100]
n = random.randint(10, 100)

# if there is an argument passed by user
if len(sys.argv) == 2:
    n = int(sys.argv[1])

if n > 0:   # 倒數
    cnt = n
    while cnt > 0:
        print(s[cnt % len(s)], cnt, '\r', end='')
        cnt = cnt - 1
        time.sleep(1)
        
else:       # 正數
    cnt = 1
    n = -n
    while cnt <= n:
        print(s[cnt % len(s)], cnt, '\r', end='')
        cnt = cnt + 1
        time.sleep(1)
        
        
if n > 1:
    print("-=", n, "seconds", "=-")
elif n == 1:
    print("-=", n, "second", "=-")
else:
    print("-= pass =-")
    
    