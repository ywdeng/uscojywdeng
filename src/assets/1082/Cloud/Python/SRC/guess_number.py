#!/usr/bin/python3
"""
猜數字, 1~100
"""
import random

magic = random.randrange(1, 101)
count = 0
guess = input("請猜：")
n = magic - int(guess)
while n != 0:
    count += 1
    if n > 0:
        print("{}: {} 太小".format(count, guess))
    else:
        print("{}: {} 太大".format(count, guess))
        
    guess = input("請再猜：")
    n = magic - int(guess)
    
    
print("猜對了！總共猜了", count, "次。")
