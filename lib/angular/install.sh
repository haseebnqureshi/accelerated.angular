#!/bin/bash

# Copying necessary bower files into our specified angular directory
rsync -avPI $1/www/ $2

# Going to our angular dir, bower install, and then going back up
cd $2
bower install
cd $1
