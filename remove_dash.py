#! /usr/bin/env python

import os
import os.path as path
import shutil

def remove_dash():
        images_dir = path.abspath("/media/jim/DOS/Windsong-Sale")
        dir_list = (os.listdir(images_dir))
        for orig_name in dir_list:
                if ('-' in orig_name):
                        new_name = orig_name.replace('-', '_')
                        os.rename(os.path.join(images_dir, orig_name),
                                (os.path.join(images_dir, new_name)))

        shutil.rmtree('/home/jim/webprojects/Taswell/src/img3', ignore_errors=True)
        shutil.copytree('/media/jim/DOS/Windsong-Sale', '/home/jim/webprojects/Taswell/src/img3')

if __name__ == "__main__":
    remove_dash()