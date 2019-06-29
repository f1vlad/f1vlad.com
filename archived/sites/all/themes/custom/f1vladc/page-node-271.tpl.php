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

/*
var wrap = $("object"); // your span or other wrapper element
wrap.parent().children().insertBefore(wrap);  // insert children before wrapper
*/



$("div#tr1 p").addClass("hide");
var wrap = $("object");
wrap.parent().removeClass("hide");


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
echo "<span class=\"wht\">This is my personal travel portal where I store travel-related activities, trails, photographs, useful links and information. <span class=\"warning\">Warning: information that follows is <cite title=\"Unanalyzed data; data not yet subjected to analysis. src: wordnetweb.princeton.edu/perl/webwn\">raw data</cite>!</span></span>";
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

.hide {
display:none;
}

div.whtisit a {
color:#777;
}

div.tr {width:2000px;text-align:left;}
div.tr > div[id] {
padding:.5em;

margin:1em 0em 1em 2em;
list-style-position:inside;

float:left;

width:20em;
font-weight:bold;
color:#ccc;

border:1px solid transparent;
-moz-border-radius:1em;
-webkit-border-radius:1em;

overflow:hidden;
}

div.tr > div#tr2 {
width:40em;
}

div.tr > div#tr1 p {
_display:none;
}

div.tr > div#tr1 iframe {
width:100%;
}

div.tr > div#tr1 object {
display:block;
}

div.tr ul {
padding-left:0 !important;
}

div.tr > div:hover {
border:1px solid #eee;
}

div.tr > div h2 {
color:#555;
font-weight:bold;
letter-spacing:-.08em;
background:#eee;
-moz-border-radius:.75em;
-webkit-border-radius:.75em;
padding:0 .5em;
}

div.tr > div * {
font-weight:normal;
}

div.tr > div:hover h2 {
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





<div style="text-align:left;">
http://www.tripit.com/people/f1vlad<br />
http://www.dopplr.com/traveller/f1vlad<br />
http://www.f1vlad.com/category/tags/travel<br />
http://f1vlad.flagatrip.ru/<br />
http://sportypal.com/Workouts?user_id=19747<br />
http://www.umapper.com/users/profile/id/695/<br />
<br />
http://www.roadsideamerica.com<br />
</div>




<div style="width:500px;float:left;">
<h3>World visited countries</h3>
<p>
<img src="http://chart.apis.google.com/chart?cht=t&chs=440x220&chtm=world&chd=t:0,100,50,32,60,40,43,12,14,54,98,17,70,76,29&chld=RU|UA|BY|HU|SK|ME|RS|RO|CY|GB|EE|LT|LV|US&chco=FFFFFF,FF0000,FFFF00,00FF00&chf=bg,s,ffffff" />
</p>
</div>


<div style="width:500px;float:left;">
<h3>USA visited states</h3>
<p>
        <img src="http://chart.apis.google.com/chart?cht=t&chs=440x220&chtm=usa&chd=t:1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1&chld=NH|FL|ME|CT|DE|GA|IL|KS|MD|MA|MI|NJ|NY|NC|OH|OR|PA|RI|SC|VA|DC|WV|ME|WY|IA|NE|NV|UT|AZ|CO|NM|TX|AR|OK|KY|IN|IL|AL|LA|MS|TN|MO|WA|CA&chco=eeeeee,666666,666666&chf=bg,s,ffffff" />
</p>        

<h3>Flagatrip.ru version of visited places</h3>
<p>
</div>



<div align="center" style="width: 100%"><object width="100%" height="340"><param name="wmode" value="window" /><param name="allowScriptAccess" value="always" /><param name="flashVars" value="mcss=http://flagatrip.ru/flashmap/css/mainstyle.swf&amp;language=ru&amp;userid=f1vlad&amp;externalwindowcss=http://flagatrip.ru/flashmap/css/infowindow.css" /><param name="movie" value="http://flagatrip.ru/flashmap/googlemapflash.swf" /><embed src="http://flagatrip.ru/flashmap/googlemapflash.swf" flashvars="mcss=http://flagatrip.ru/flashmap/css/mainstyle.swf&amp;language=ru&amp;userid=f1vlad&amp;externalwindowcss=http://flagatrip.ru/flashmap/css/infowindow.css"  type="application/x-shockwave-flash" allowscriptaccess="always" name="flagatrip" width="100%" height="340" wmode="transparent"></embed></object><br /><br /><a href="http://f1vlad.flagatrip.ru/">Мой профиль на flagatrip.ru</a></div>



<div><embed src="/etc/svg/travel.php" width="600" height="220" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></div>

<div style="width:100px;height:100px;overflow:hidden;overflow:auto">

EUROPE
russia (moscow, st. petersburg) 
ukraine
belorus (brest, minsk) 
hungary (budapest, debrecen, nyiregyhaza, szolnok) 
slovakia (kosice) 
yugoslavia 
romania
cyprus (larnaca, limassol, nicosia, paphos, trodos mountains) 
united kingdom (brighton, london) 
estonia (tallinn) 
lithuania
latvia (yurmala)
serbia and montenegro (becej, senta, subotica, novi sad, backo petrovo selo, bar, beograd)
USA
connecticut
delaware
florida
georgia
illinois
kansas
maine
maryland
massachusetts
missouri
new hampshire
new jersey
new mexico
new york
north carolina 
ohio
oregon (Bend, Portland)
pennsylvania
rhode island
south carolina (Charleston)
virginia
washington,dc
west virginia 







"Senta, Subotica, Novi Sad, Backo Petrovo Selo (Serbia & Montenegro)"
Serbia

[12/27 07:21] f1vlad@hotmail: Bar is Montenegro?
[12/27 07:21] x: yes
[12/27 07:21] f1vlad@hotmail: shit.. didn't know 

[12/27 07:21] x: tha's Serbian
[12/27 07:22] x: Novi Sad is terytory of Serbia it is called Vojvodina
[12/27 07:22] x: but now it's all same Serbia and Montenegro






Serbia and Montenegro: Bar, Beograd, Subotica, Novi Sad, Senta, Backo Petrove Selo

Hungary: Budapest, Debrecen, Niuredhaza,

Cyprus: Nicosia, Larnaca, Limassol, Paphos, Trodos Mountains

Slovakia:

Romania:

United Kingdom: London, Brighton

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
