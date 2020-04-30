#!/usr/bin/python3
"""
下載網頁內容
"""
import socket
request = b"GET /~ywdeng/files/1082/Cloud/Python/SRC/welcome.html HTTP/1.1\nHost: uscoj2.im.usc.edu.tw\n\n"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("uscoj2.im.usc.edu.tw", 80))
s.send(request)
result = s.recv(10000)
while (len(result) > 0):
    print(result)
    result = s.recv(10000)
    
    