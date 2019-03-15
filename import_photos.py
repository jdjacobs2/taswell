#!/usr/bin/env python3
# used by regenerate-site.py

import csv
import os.path
import os
import shutil
import remove_dash
import re

reObj = re.compile(r"^ *\[('([_\w]*)')", re.M)
match = reObj.match("")

# changes - to _ and copies images to /localhost/src/img
remove_dash.remove_dash()

# subprocess.run('exiftool', '-a') produce a csv file
os.system('exiftool -s -csv -SourceFile -Title -Description /media/jim/DOS/Windsong-Sale/* > photos.csv')

classifications = ('full hull', 'hull', 'guest', 'guest cabin', 'crew cabin',
                    'guest head', 'salon', 'galley', 'nav', 'master',
                    'master cabin', 'master head', 'sails', 'elec', 'mech',
                    'water', 'safety', '')

classifications_numbered = dict( zip(classifications,range(0, len(classifications))))

# print("running make_impor_photos.py")


with open('photos.csv') as csvfile, open('import.txt', 'w') as importfile:
    infoReader = csv.DictReader(csvfile)
    temp_array = []
    for row in infoReader:
        basename = os.path.basename(row['SourceFile'])
        filename = basename.replace('.jpg', '')
        line1 = "import {0} from '../img3/{1}';\n".format(filename, basename)
        importfile.write(line1)
        line2 = "{},{},{}".format(filename, row['Title'], row['Description'])
        line2 = line2.split(',')
        temp_array.append(line2)
    temp_array.sort(key=lambda item: classifications_numbered[item[2].lower()])
    # print('temp_array:  ', temp_array)
    str_array = ''.join([str(x) for x in temp_array])
    str_array = str_array.replace(']', '],\n')
    str_array = str_array.rstrip(',\n') + '\n];'
    str_array = reObj.sub(r'[\2', str_array)
    str_array = "const data = [\n" + str_array
    importfile.write('\n\n')
    importfile.write(str_array)

