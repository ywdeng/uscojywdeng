#!/usr/bin/python3
"""
解雞兔同籠問題
"""
num_leg = int(input("雞兔同籠，共有幾隻腳："))
num_sol = 0                   # 解的數量
num_chicken = 0               # 雞的數量
max_chicken = num_leg // 2    # 最多有幾隻雞
while num_chicken <= max_chicken:
    num_rabbit = 0            # 兔的數量
    max_rabbit = num_leg // 4 # 最多有幾隻兔
    while num_rabbit <= max_rabbit:
        if (num_chicken * 2 + num_rabbit * 4) == num_leg:
            num_sol += 1
            print("解", num_sol, ": 雞", num_chicken, "隻，兔", num_rabbit, "隻")
            
        num_rabbit += 1
    
    num_chicken += 1

if num_sol == 0:
    print("無解")

