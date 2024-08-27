#!/usr/bin/env bash

# Description: This script resizes a conference poster to a thumbnail size.
# Usage: ./crop-poster.sh <image_file>
#        <image_file> - The path to the image file you want to resize and crop.

magick $1 -resize 400x $1
magick $1 -crop 400x225+0+54 $1
