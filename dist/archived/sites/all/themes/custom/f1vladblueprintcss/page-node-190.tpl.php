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





<style>

.container {overflow:visible;}

h1 span.t {
float:left;
display:block;
width:auto;
font-size:240%;
margin-top:.35em;
margin-left:.25em;
letter-spacing:-5px;
color:#111;
padding-right:.5em;
height:32px;
}

div.whtisit {
color:#777777;
float:left;
font-size:140%;
margin:0.75em 0 0;
padding:0;
text-align:left;
white-space:nowrap;
width:40%;

}

div.whtisit a {
color:#777;
}

div.fm {width:2000px;text-align:left;}


div.fm > div[id] {
padding:.5em;

margin:1em 0em 1em 2em;
list-style-position:inside;

float:left;

width:20em;
font-weight:bold;


border:1px solid transparent;
-moz-border-radius:1em;
-webkit-border-radius:1em;

overflow:hidden;
}


div.fm > div[id] div {
border:none;
}

div.fm > div[id] div.content div.feed ul li {
list-style-position:outside;
list-type:none;
padding:.25em;
margin:.5em 0;
background-image:none;
}

div.fm > div[id] font {
font-size:1em;
font-weight:normal;
}

div.fm > div[id] div.a2 span {
color:#ccc;
font-size:85%;
clear:both;
display:block
}

div.fm > div[id] div.a2 span:hover {
color:#555;
}

div.fm > div[id] div.content div.message {
display:inline;
clear:none;
}

div.fm > div[id] div.content blockquote {

padding:0 .5em;
margin:0;
font-size:.8em;
display:inline;
border:none;
background-color:#eee;
}

div.fm > div[id] div.content div.feed ul li div {
width:100% !important;
}

div.fm > div[id] div.content div.feed ul li table table{
width:auto;
}

table.pandoraStationContainer tr td br {
display:none;
}

table.pandoraStationContainer tr td,
div.fm > div[id] div.content div.feed ul li table td{
display:inline;

}

div.fm > div[id] div.content div.feed ul li table td div{
border:none !important;
}

div.fm ul {
padding-left:0 !important;
}

div.fm > div:hover {
border:1px solid #eee;
}

div.fm > div h2 {
color:#555;
font-weight:bold;
letter-spacing:-.08em;
background:#eee;
-moz-border-radius:.75em;
-webkit-border-radius:.75em;
padding:0 .5em;
}

div.fm > div * {
font-weight:normal;
}

div.fm > div:hover h2 {
background:#f8f8f8;
color:#666666;
}

.breadcrumb {
text-align:left;
opacity:.35;
}

.breadcrumb:hover {
opacity:1;
}


</style>






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
<div class="overlaybg"></div>
<div class="sponsors">
    <a href="" class="jerichoflag">Jericho flag</a>
    <a href="" class="trizubets">Ukraine</a>
    <a href="" class="griffin">Griffin</a>
    <a href="" class="spt">SPT</a>
    <a href="" class="cobbtunning">COBB TUNNING</a>
    <a href="" class="f1">Formula 1</a>
</div>


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
                    <span class="i"><?
                            echo "<a href=\"".check_url($front_page)."\" title=\"".$site_name."\"  >".$site_name."</a> / ".$title."&nbsp;&#8212; automotive&nbsp;journal.";
                    ?>

2008 Subaru WRX Hatch, codename <acronym title="sparkling silver arrow">sparow</acronym>; purchased at <a href="http://www.boardmansubaru.com/">Boardman Subaru</a> on Aug 18, 2008.
</span>
                </div>
            </div>





            <div class="rmdn">


      <?php if ($sparow_header): ?>
        <div id="header" class="header">
          <?php print $sparow_header ?>
        </div>
      <?php endif; ?>


          <div class="clear-block">
            <?php print $content ?>
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
