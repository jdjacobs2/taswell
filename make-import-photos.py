#!/usr/bin/env python3

import csv
import os.path
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

    # print(row['SourceFile'], row['Title'], row['Description'])