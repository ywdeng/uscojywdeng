#!/usr/bin/python3
"""
倒數計時
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

while n:
    print(s[n % len(s)], n, '\r', end='')
    n = n - 1
    time.sleep(1)
    
    