#!/bin/bash
if [ $dir_img ]; then
    sed -i -e "s/:)/<img src=\"$dir_img\/regular_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:(/<img src=\"$dir_img\/sad_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:P/<img src=\"$dir_img\/tounge_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:p/<img src=\"$dir_img\/devil_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/B)/<img src=\"$dir_img\/shades_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:D/<img src=\"$dir_img\/angel_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:~((/<img src=\"$dir_img\/angry_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/<3/<img src=\"$dir_img\/heart.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:-(((/<img src=\"$dir_img\/thumbs_down.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:'(/<img src=\"$dir_img\/whatchutalkingabout_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:|/<img src=\"$dir_img\/01.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:o/<img src=\"$dir_img\/wink_smile.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/O_o/<img src=\"$dir_img\/kiss.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/ZZzzz/<img src=\"$dir_img\/28a.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:-#/<img src=\"$dir_img\/03a.gif\" alt=\"\"\/>/g" $dir_static/$this_line
    sed -i -e "s/:-]/<img src=\"$dir_img\/thumbs_up.gif\" alt=\"\"\/>/g" $dir_static/$this_line
else
    echo "Invalid operaton: you're not supposed to invoke this script by standalone!"
fi
