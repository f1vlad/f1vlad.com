<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<title><?php print $head_title ?></title>
<!-- Source File -->
<link rel="alternate" type="application/rss+xml" title="f1vlad.com" href="http://f1vlad.com/rss.xml" />
<link rel="alternate2" type="application/rss+xml" title="f1vlad.com" href="http://feeds.feedburner.com/f1vlad" />
<link rel="stylesheet" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/geshifilter.css">
<meta name="viewport" content="width=600" />

    

<link rel="alternate stylesheet" title="text_small" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/text_small.css" media="screen" />
<link rel="stylesheet" title="text_normal" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/text_normal.css" media="screen" />
<link rel="alternate stylesheet" title="text_big" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/text_big.css" media="screen" />



<link rel="stylesheet" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/css/blueprint/screen.css" type="text/css" media="screen, projection">
<link rel="stylesheet" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/css/blueprint/print.css" type="text/css" media="print">    
<!--[if lt IE 8]><link rel="stylesheet" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/css/blueprint/ie.css" type="text/css" media="screen, projection"><![endif]-->
<link rel="stylesheet" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/css/blueprint/liquid.css" type="text/css" media="screen, projection">


    <?php  print $styles; ?>
    <?php  print $scripts; ?>

<link media="only screen and (max-device-width: 480px)" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcss/iPhone.css" type="text/css" rel="stylesheet" />
	
<link rel="openid.server" href="https://api.screenname.aol.com/auth/openidServer" />	
<link rel="openid.delegate" href="http://openid.aol.com/f1vlad" />

<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon">

<script src="/misc/dragtable.js"></script>
<script src="/misc/sorttable.js"></script>
<script src="/misc/jquery.js"></script>



<script type="text/javascript">




// cookie functions http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}

function styleSwitch(name) {
$("head link[title]").each(function(i) {
this.disabled = true;
if (this.getAttribute('title') == name) this.disabled = false;
});
createCookie('f1vlad_style', name, 365);
}


var navDuration = 150; //time in miliseconds
      var navJumpHeight = "0.45em";











$(document).ready(function(){



      var navDuration = 120; //time in miliseconds
      var navJumpHeight = "0.1em";

      $('h2.ico').hover(function() {
          $(this).animate({ top : "-="+navJumpHeight }, navDuration);            
      }, function() {
          $(this).animate({ top : "-.5em" }, navDuration);
      });

/*
$('div.content p img').each(function(){
var aText=$(this).attr("alt");
if(aText.length>=1){ /* only do this for <img which have alt="" tags */
$(this).wrap("<span class=\"media\"><\/span>")
.after("<em>" + aText + "<\/em>");
}
});
*/
var c = readCookie('f1vlad_style');
if (c) styleSwitch(c);

//styleswitcher
$(".style_toggle").click(function() {
styleSwitch($(this).attr('rel'));
return false;
});

$("div.h2eader_info a.info").click(function() {
$("body").animate({ 
marginTop: "0pt"
}, 700 );
return false;
});



    $("div.header_info a.info").toggle(
      function () {
        $("body").animate({marginTop:"0pt"},600);
      },
      function () {
        $("body").animate({marginTop:"-150px"},400);
      }
    );


});
</script>


</head>

<body class="<?php print phptemplate_body_class_nodetype($variables['node']->nid); if($is_front) echo 'homepage'; elseif (phptemplate_body_class_nodetype($variables['node']->nid)) echo ' '; else echo 'unclassified'; ?> " id="mainbody">



        <div class="container">

            <div class="block" id="hd">
                <div class="span-6">





                   <h1>
                        <a href="/" title="f1vlad.com" class="logo">f1vlad.com</a>
                    </h1>
                    <span class="ico">*</span>
                    <span class="author"><?php if ($site_slogan=strip_tags(variable_get('site_slogan',''))) {print $site_slogan;}?></span>
                </div>


                <div class="span-17">
                    <h2><?php if ($title): print $title; endif; ?></h2>
                    <span class="i">
                            <?php if ($hdrtext) print $hdrtext;  ?>
                    </span>
                </div>
            </div>



            <div class="block">
                <div class="span-6">
                        <?php if ($left): ?>
                        <div id="sidebar-left" class="sidebar">
                        <?php print $left ?>
                        </div>
                        <?php endif; ?>
                </div>

                <div class="span-17">
                    <?php print $breadcrumb; ?>
                    <?php if ($tabs): print '<div id="tabs-wrapper" class="clear-block">'; endif; ?>
                    <?php //if ($title): print '<h2'. ($tabs ? ' class="with-tabs"' : '') .'>'. $title .'</h2>'; endif; ?>
                    <?php if ($tabs): print '<ul class="tabs primary">'. $tabs .'</ul></div>'; endif; ?> 
                    <?php if ($tabs2): print '<ul class="tabs secondary">'. $tabs2 .'</ul>'; endif; ?>
                    <?php if ($show_messages && $messages): print $messages; endif; ?>
                    <?php print $help; ?>
                    <div class="clear-block"> 
                    <?php print $content ?>
                    </div>
                    <?php print $feed_icons ?>
                </div>
            </div>  

        </div>









<?php print $footercenter ?><?php print $footer_message ?>
<div class="text_size_switcher">
<a class="style_toggle" rel="text_small" title="Small text" href="#">-</a>
<a class="style_toggle" rel="text_normal" title="Normal text" href="#">#</a>
<a class="style_toggle" rel="text_big" title="Large text" href="#">+</a>
</div>
<?php print $closure ?>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-141548-9";
urchinTracker();
</script>

</body>
</html>	
