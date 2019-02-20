#! /usr/bin/env python3

import csv

with open('equipment-list.csv', 'r') as fcvs, open('equipment.txt', 'w') as fout:
  equipReader = csv.DictReader(fcvs)
  for line in equipReader:
    new_line = (line['Number'] + ' ' + line['Equipment'])
    if (line['Install Date']):
      new_line += ' --Installed: ' + line['Install Date']
    new_line += '\n'
    fout.write(new_line)
