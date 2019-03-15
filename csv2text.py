#! /usr/bin/env python3

import csv

category = ''
with open('equipment-list.csv', 'r') as fcvs, open('equipment.txt', 'w') as fout:
  equipReader = csv.DictReader(fcvs)
  for line in equipReader:
    if (line['Category'] != category):
      category = line['Category']
      fout.write('-- ' + line['Category'] + ' --\n')
    new_line = (line['Number'] + ' ' + line['Equipment'])
    if (line['Show Location']):
      new_line += ' (' + line['Category'] + ')'
    if (line['Install Date']):
      new_line += ' --Installed: ' + line['Install Date']
    new_line += '\n'
    fout.write(new_line)
