#!/usr/bin/python3
"""
密碼長度8個字，有幾種變化？
"""

pwd_len = 8

# 假設鍵盤可以輸入的字元種類有 26+26+10+30
num_key = 26+26+10+30

# 總共有這麼多種變化：
n = num_key * num_key * num_key * num_key * num_key * num_key * num_key * num_key

print("密碼長度 {} 個字，總共有 {} 種變化。".format(pwd_len, n))
 