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
	
<link rel="openid.server" href="https://api.screenname.aol.com/auth/openidServer" />	
<link rel="openid.delegate" href="http://openid.aol.com/f1vlad" />
<script src="/misc/dragtable.js"></script>
<script src="/misc/sorttable.js"></script>





<script type="text/javascript">
$(document).ready(function(){
	$('div.content p img').each(function(){
		var aText=$(this).attr("alt");
		if(aText.length>=1){ /* only do this for <img which have alt="" tags */
			$(this).wrap("<span class=\"media\"><\/span>")
					.after("<em>" + aText + "<\/em>");
		}
	});
});
</script>





</head>
<body <?php print phptemplate_body_class($left, $right); ?> id="mainbody">


   
   

<div id="doc3" class="yui-t4"> 

   <div id="hd">
     	<div class="yui-gc">
   			<div class="yui-u first">

	        <?php
				  if ($site_name=strip_tags(variable_get('site_name',''))) {
			          if ($logo) {
			              //print '<img src="'. check_url($logo) .'" alt="'. $site_name .'" id="logo" />';
			          }
					print "<h1><a href=\"".check_url($front_page)."\" title=\"".$site_name."\"  >".$site_name."</a></h1>";
				  }

				  if ($site_slogan=strip_tags(variable_get('site_slogan',''))) {
					print "<h2>".$site_slogan."</h2>";
				  }

				  if ($site_mission=strip_tags(variable_get('site_mission',''))) {
					print "<h3>".$site_mission."</h3>";
				  }

		        ?>      			
   			</div>
   			<div class="yui-u"></div>
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