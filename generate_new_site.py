import subprocess
import re
# import make_impor_photos

reObj = re.compile(r"// begin insert import(.*)\n// end insert import")

with open('import.txt') as import:
  txt = import.read()

# subprocess.run(["npm", "run", "build"])
# subprocess.run(["python3", "make_impor_photos.py"])
