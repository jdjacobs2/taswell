#!/usr/bin/env python3

import csv
import os.path
import os

# subprocess.run('exiftool', '-a')
os.system('exiftool -s -csv -SourceFile -Title -Description /media/jim/DOS/Windsong-Sale/* > photos.csv')

with open('photos.csv') as csvfile, open('import.txt', 'w') as importfile, open('array.txt', 'w') as arrayfile:
  arrayfile.write("const data = [\n")
  infoReader = csv.DictReader(csvfile)
  for row in infoReader:
    basename = os.path.basename(row['SourceFile'])
    basename = basename.replace('-', '_')
    filename = basename.replace('.jpg', '')
    line1 = "import {0} from '../img3/{1}';\n".format(filename, basename)
    line2 = "[{}, '{}', '{}'],\n".format(filename,row['Title'], row['Description'])
    importfile.write(line1)
    arrayfile.write(line2)
  offset = arrayfile.tell()
  arrayfile.seek(offset - 2, 0)
  arrayfile.write("\n]")