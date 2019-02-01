#! /usr/bin/env python

import os
import os.path as path

images_dir = path.abspath("/media/jim/DOS/Windsong-Sale")

dir_list = (os.listdir(images_dir))
for orig_name in dir_list:
    if ('-' in orig_name):
        new_name = orig_name.replace('-', '_')
        os.rename(os.path.join(images_dir, orig_name),
                  (os.path.join(images_dir, new_name)))