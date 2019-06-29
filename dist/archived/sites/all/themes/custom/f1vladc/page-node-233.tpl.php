<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<title><?php print $head_title ?></title>
	<!-- Source File -->
	<link rel="alternate" type="application/rss+xml" title="f1vlad.com" href="http://f1vlad.com/rss.xml" />
	<link rel="alternate2" type="application/rss+xml" title="f1vlad.com" href="http://feeds.feedburner.com/f1vlad" />
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.1/build/reset-fonts-grids/reset-fonts-grids.css">	
	<link rel="stylesheet" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vlad/geshifilter.css">	

    <?php  #print $head; ?>
    <?php  print $styles; ?>
    <?php  print $scripts; ?>

	<script src="/misc/dragtable.js"></script>
	<script src="/misc/sorttable.js"></script>
<script src="/misc/jquery.js"></script>


<script type="text/javascript">
$(document).ready(function(){

});
</script>



</head>

<body class="<?php print phptemplate_body_class_nodetype($variables['node']->nid); if($is_front) echo 'homepage'; elseif (phptemplate_body_class_nodetype($variables['node']->nid)) echo ' '; else echo 'unclassified'; ?> " id="mainbody">
          <?php print $breadcrumb; ?>
          <?php // if ($tabs): print '<div id="tabs-wrapper" class="clear-block">'; endif; ?>
          <?php //if ($title): print '<h2'. ($tabs ? ' class="with-tabs"' : '') .'>'. $title .'</h2>'; endif; ?>
          <?php //if ($tabs): print '<ul class="tabs primary">'. $tabs .'</ul></div>'; endif; ?>
          <?php //if ($tabs2): print '<ul class="tabs secondary">'. $tabs2 .'</ul>'; endif; ?>
          <?php if ($show_messages && $messages): print $messages; endif; ?>
          <?php print $help; ?>
    <div class="clear-block">

	        <?php
				  if ($site_name=strip_tags(variable_get('site_name',''))) {
			          if ($logo) {
			              //print '<img src="'. check_url($logo) .'" alt="'. $site_name .'" id="logo" />';
			          }
			          
			          
					print "<h1><a href=\"".check_url($front_page)."\" title=\"".$site_name."\"  >".$site_name."</a><span class=\"t\">".$title."</span>";
echo "<span class=\"wht\"><span class=\"warning\">Warning: information that follows is <cite title=\"Unanalyzed data; data not yet subjected to analysis. src: wordnetweb.princeton.edu/perl/webwn\">raw data</cite>!</span> Below is a my online lifestream thanks to the power of <a href=\"http://en.wikipedia.org/wiki/RSS\">rss</a> and <a href=\"http://pipes.yahoo.com\">yahoo pipes</a>; shows some of the things that I like to do online:</span>";
echo "</h1>";
				  }

				  if ($site_slogan=strip_tags(variable_get('site_slogan',''))) {
					//print "<h2>".$site_slogan."</h2>";
				  }

				  if ($site_mission=strip_tags(variable_get('site_mission',''))) {
					print "<h3>".$site_mission."</h3>";
				  }

		        ?> 

            <?php //print $content ?>
          </div>
          <?php print $feed_icons ?>


<style>

body {
}

h1 a[title] {
background:transparent url(/sites/all/themes/custom/f1vladc/i/newlogo.png) no-repeat scroll center center;
display:block;
height:40px;
width:220px;
text-indent:-999999px;
float:left;
margin: 0.5em 0 0 2em;
}

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

span.wht {
color:#0066CC;
display:block;
font-size:140%;
letter-spacing:-2px;
text-align:right !important;
width:96%;
margin-top:.25em;
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



<div class="fm">
	<div id="fm1"><?php print $feedmadness_1; ?></div>
	<div id="fm2"><?php print $feedmadness_2; ?></div>
	<div id="fm3"><?php print $feedmadness_3; ?></div>
	<div id="fm4"><?php print $feedmadness_4; ?></div>
	<div id="fm5"><?php print $feedmadness_5; ?></div>
	<div id="fm6"><?php print $feedmadness_6; ?></div>
	<div id="fm7"><?php print $feedmadness_7; ?></div>
</div>





		   <div id="ft">
					<?php print $footercenter ?><?php print $footer_message ?>


		   
				<div class="text_size_switcher">
				<a class="style_toggle" rel="text_small" title="Small text" href="#">-</a>
				<a class="style_toggle" rel="text_normal" title="Normal text" href="#">#</a>
				<a class="style_toggle" rel="text_big" title="Large text" href="#">+</a>
				</div>
				
			</div>
   


<?php print $closure ?>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-141548-9";
urchinTracker();
</script></body>
</html>	

