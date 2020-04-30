#!/usr/bin/python3
"""
以暴力法破解密碼，需要多少時間？
"""
def brute_force(pwd_len, num_key, speed):
    n = num_key**pwd_len # 每一個字都有 num_key 種變化
    return n / (speed * 2^30)

    return n / (speed * 2^30)

def decompose_time(tsec):
    tmin, sec = divmod(tsec, 60)
    thrs, min = divmod(tmin, 60)
    tday, hrs = divmod(thrs, 24)
    year, day = divmod(tday, 365)
    if year >= 100:
        return "約 {:,} 年".format(year)
    elif year > 0:
        return "約 {} 年又 {} 天".format(year, day)
    elif tday > 0:
        return "{} 天 {} 小時 {} 分鐘 {} 秒".format(tday, hrs, min, sec)
    else:
        return "{} 小時 {} 分鐘 {} 秒".format(hrs, min, sec)
        
PWD_LEN = 8             # 假設密碼長度 8 個字
NUM_KEY = 26+26+10+20   # 鍵盤可以輸入的字元種類
SPEED = 3               # 破解速度 3 GHz

t = brute_force(PWD_LEN, NUM_KEY, SPEED)

print("密碼長度 {} 個字，攻擊速度 {} GHz，需時{}".format(PWD_LEN, SPEED, decompose_time(t)))
 