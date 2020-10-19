#!/usr/bin/python3

import sys
import argparse

"""
以暴力法破解密碼，需要多少時間？
"""
def brute_force(pwd_len, num_key, speed):
    n = num_key**pwd_len # 每一個字都有 num_key 種變化
    return n / (speed * 2**30)
    

def decompose_time(tsec):
    if tsec < 1:
        return "{} 秒".format(tsec)
    elif tsec < 60:
        return "{:.3f} 秒".format(tsec)
        
    tmin, sec = divmod(tsec, 60)
    thrs, min = divmod(tmin, 60)
    tday, hrs = divmod(thrs, 24)
    year, day = divmod(tday, 365)
    if year >= 100:
        return "約 {:,.1f} 年".format(year)
    elif year > 0:
        return "約 {} 年又 {:.1f} 天".format(int(year), day)
    elif tday > 0:
        return "{} 天 {} 小時 {} 分鐘 {:.1f} 秒".format(int(tday), int(hrs), int(min), sec)

    return "{} 小時 {} 分鐘 {:.1f} 秒".format(int(hrs), int(min), sec)        


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog='password_crack', description='計算以暴力法破解密碼需要多少時間')
    parser.add_argument('--password-length', '-w', dest="pwd_len", type=int, default=8, help='密碼長度')
    parser.add_argument('--num-character', '-n', dest="num_key", type=int, default=92, help='可以作為密碼的字元數量')
    parser.add_argument('--crack-speed', '-s', dest="speed", type=int, default=3, help='破解速度（GHz/s）')
    
    args  = parser.parse_args()

    t = brute_force(args.pwd_len, args.num_key, args.speed)
    
    print("密碼長度 {} 個字，攻擊速度 {} GHz，需時 {}".format(args.pwd_len, args.speed, decompose_time(t)))
    