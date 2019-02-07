#! /urs/bin/env python3
import os.path
import csv

head = '''<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
'''

loc1 = '    <url>\n      <loc> http://taswell49.com/</loc>\n'
      
loc2 = '    <url>\n      <loc>http://taswell49.com/index.html</loc>\n'

loc = [loc1, loc2]

end = '    </url>\n'

end_final = '  </urlset>\n'

with open('photos.csv') as csvfile, open('sitemap.xml', 'w') as map_file:
  infoReader = csv.DictReader(csvfile)
  images = list(infoReader)
  map_file.write(head)
  for col in loc:
    map_file.write(col)
    for row in images:
      basename = os.path.basename(row['SourceFile'])
      path = os.path.join('/img', basename)
      # filename = basename.replace('.jpg', '')
      map_file.write('      <image:image>\n')
      map_file.write('        <image:loc>{}</image:loc>\n'.format(path))
      map_file.write('        <image:title>{}</image:title>\n'.format(row['Title']))
      map_file.write('      </image:image>\n')
    map_file.write(end)
  map_file.write(end_final)