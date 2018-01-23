#!/bin/bash

for filename in ./slide_btn/*; do
	echo "Converting $filename..."
	convert "$filename" -resize x128 "${filename%.*}_new.jpg"
	rm "$filename"
	mv "${filename%.*}_new.jpg" "${filename%.*}.jpg"
	echo "Saved as ${filename%.*}.jpg"
done

echo "Compressing with jpegoptim..."

jpegoptim --max=90 ./slide_btn/*