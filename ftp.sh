#!/bin/bash
HOST=ftp.jacobshome.com
USER=jacob10
PASSWORD=GESlun8!++
 
ftp -inv $HOST <<EOF
user $USER $PASSWORD
lcd dist/img
cd public_html/taswell49.com/img
mput *.*
lcd ../fonts
cd ../fonts
mput *.*
lcd ..
cd ..
mput *.*
lcd ..
bye
EOF