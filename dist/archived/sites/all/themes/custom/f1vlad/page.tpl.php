<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<title><?php print $head_title ?></title>
	<!-- Source File -->
	<link rel="alternate" type="application/rss+xml" title="f1vlad.com" href="http://f1vlad.com/rss.xml" />
	<link rel="alternate2" type="application/rss+xml" title="f1vlad.com" href="http://feeds.feedburner.com/f1vlad" />
	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.1/build/reset-fonts-grids/reset-fonts-grids.css">	
	<link rel="stylesheet" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vlad/geshifilter.css">	

	<meta name="viewport" content="width=600" />

    <?php  #print $head; ?>
    <?php  print $styles; ?>
    <?php  print $scripts; ?>
    

<link rel="alternate stylesheet" title="text_small" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vlad/text_small.css" media="screen" />
<link rel="stylesheet" title="text_normal" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vlad/text_normal.css" media="screen" />
<link rel="alternate stylesheet" title="text_big" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vlad/text_big.css" media="screen" />

<link media="only screen and (max-device-width: 480px)" href="//f1vlad.com/sites/all/themes/custom/f1vlad/iPhone.css" type="text/css" rel="stylesheet" />
	
<link rel="openid.server" href="https://api.screenname.aol.com/auth/openidServer" />	
<link rel="openid.delegate" href="http://openid.aol.com/f1vlad" />
<script src="/misc/dragtable.js"></script>
<script src="/misc/sorttable.js"></script>


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














$(document).ready(function(){

	$('div.content p img').each(function(){
		var aText=$(this).attr("alt");
		if(aText.length>=1){ /* only do this for <img which have alt="" tags */
			$(this).wrap("<span class=\"media\"><\/span>")
					.after("<em>" + aText + "<\/em>");
		}
	});

	var c = readCookie('f1vlad_style');
	if (c) styleSwitch(c);

	//styleswitcher	   
	$(".style_toggle").click(function() {
			styleSwitch($(this).attr('rel'));
			return false;
	});
});
</script>


</head>

<body class="<?php print phptemplate_body_class_nodetype($variables['node']->nid); if($is_front) echo 'homepage'; elseif (phptemplate_body_class_nodetype($variables['node']->nid)) echo ' '; else echo 'unclassified'; ?> " id="mainbody">

<div class="text_size_switcher">
<a class="style_toggle" rel="text_small" href="#">-</a>
<a class="style_toggle" rel="text_normal" href="#">#</a>
<a class="style_toggle" rel="text_big" href="#">+</a>
</div>



<div id="doc3" class="yui-t4"> 

   <div id="hd">
     	<div class="yui-gf">
   			<div class="yui-u first">

	        <?php
				  if ($site_name=strip_tags(variable_get('site_name',''))) {
			          if ($logo) {
			              print '<img src="'. check_url($logo) .'" alt="'. $site_name .'" id="logo" />';
			          }
					print "<h1><a href=\"".check_url($front_page)."\" title=\"".$site_name."\"  >".$site_name."</a></h1>";
				  }
/*
				  if ($site_slogan=strip_tags(variable_get('site_slogan',''))) {
					print "<h2>".$site_slogan."</h2>";
				  }

				  if ($site_mission=strip_tags(variable_get('site_mission',''))) {
					print "<h3>".$site_mission."</h3>";
				  }
*/
		        ?>      			
   			</div>
   			<div class="yui-u">
				<div class="adsenseheader" style="">
				<script type="text/javascript"><!--
				google_ad_client = "pub-1221828368307550";
				/* 728x90, created 1/28/09 */
				google_ad_slot = "2674578634";
				google_ad_width = 728;
				google_ad_height = 90;
				//-->
				</script>
				<script type="text/javascript"
				src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
				</script>
				</div>
   			</div>
   		</div> 
   </div>

   <div id="bd">
      <div id="yui-main">
         <div class="yui-b">

          <?php print $breadcrumb; ?>
          <?php if ($tabs): print '<div id="tabs-wrapper" class="clear-block">'; endif; ?>
          <?php if ($title): print '<h2'. ($tabs ? ' class="with-tabs"' : '') .'>'. $title .'</h2>'; endif; ?>
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
      
      <div class="yui-b">
          <?php //if (isset($primary_links)) : ?>
          <?php //print theme('links', $primary_links, array('class' => 'links primary-links')) ?>
	      <?php //endif; ?>
		  <!--<hr />-->
          <?php //if (isset($secondary_links)) : ?>
          <?php //print theme('links', $secondary_links, array('class' => 'links secondary-links')) ?>
          <?php //endif; ?>
		  <!--<hr />-->
        
      <?php if ($left): ?>
        <div id="sidebar-left" class="sidebar">
          <?php print $left ?>
        </div>
      <?php endif; ?>


      </div>
   </div>

   <div id="ft">
   		<div class="yui-gb">
   			<div class="yui-u first"><?php print $footerleft ?></div>
   			<div class="yui-u"><?php print $footercenter ?><?php print $footer_message ?></div>
   			<div class="yui-u"><?php print $footerright ?></div>   			
   		</div>
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
