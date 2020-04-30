#!/usr/bin/python
import sys
import os

message = ""
# collect all the strings into one
if 2 > len(sys.argv):
  # input from stdin
  message = "".join(sys.stdin.readlines())
else:
  # input from files given by command line
  for fn in sys.argv[1:]:
    if os.path.exists(fn):
      with open(fn, "r") as fin:
        try:
          message = message + "".join(fin.readlines())
        except:
          sys.stderr.write("ERROR: can not access file " + fn + "!\n")
          sys.exit()
    else:
      sys.stderr.write("ERROR: file " + fn + " does not exit!\n")

# split the string into sentences and make each string capitalize
ss = message.split(".")

for i in range(len(ss)):
  ss[i] = ss[i].strip().capitalize()
  
# join the setences back 
message = ". ".join(ss)
print(message)
