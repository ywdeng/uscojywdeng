#!/usr/bin/python
import sys
import os

message = ""
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
      
print(message.strip().title())
