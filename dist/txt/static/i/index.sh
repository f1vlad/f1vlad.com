#!/bin/bash

ls *.gif > filelist.tmp # output in reverse order, eg. when using timestamps for filenames, which are descending

exec 0<filelist.tmp
printf "\nbestatic (https://github.com/f1vlad/bestatic)\n--------\n"
i=0
while read LINE
do
    array[$i]="$LINE"
    index+="<li><img src=\"$LINE\"> ($LINE)-- </li>"
    ((i++))
done

printf "\n[s] Save list of images to index.html\n"
echo $index > index.html
rm ./filelist.tmp
