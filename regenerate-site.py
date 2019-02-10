import subprocess
import re
# import make_impor_photos

reObj = re.compile(r'(// begin insert import\n)(.*)(// end insert import\n*)', re.DOTALL)

subprocess.run(["npm", "run", "build"])
subprocess.run(["python3", "make_impor_photos.py"])

with open('src/js/renderGallery.js', 'r+') as old, open('import.txt') as new:
  old_txt = old.read()
  new_txt = new.read()
  replace = '\\1{}\\n\\3\\n'.format(new_txt)
  new_file = reObj.sub(replace, old_txt)
  old.seek(0)
  old.truncate()
  old.write(new_file)
