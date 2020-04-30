#!/usr/bin/python3
"""
以暴力法破解密碼，需要多少時間？
"""
def brute_force(pwd_len, num_key, speed):
    n = num_key**pwd_len # 每一個字都有 num_key 種變化
    return n / (speed * 2^30)
    
PWD_LEN = 8             # 假設密碼長度 8 個字
NUM_KEY = 26+26+10+20   # 鍵盤可以輸入的字元種類
SPEED = 3               # 破解速度 3 GHz

t = brute_force(PWD_LEN, NUM_KEY, SPEED)
    
print("密碼長度", PWD_LEN, "個字，需時 {:,} 秒。".format(t))
 