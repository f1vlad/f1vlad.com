<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf=8">
        <title><?php print $head_title ?></title>
        <link rel="alternate2" type="application/rss+xml" title="f1vlad.com feed" href="http://feeds.feedburner.com/f1vlad" />
        <link rel="stylesheet" type="text/css" href="//f1vlad.com/sites/all/themes/custom/f1vlad-1kbgrid/css/geshifilter.css">

        <!--[if IE]><script src="/misc/html5.js"></script><![endif]-->
        <?php  print $styles; ?>
        <?php  print $scripts; ?>
        <link media="only screen and (max-device-width: 480px)" href="//f1vlad.com/sites/all/themes/custom/f1vladblueprintcsshtml5/css/iPhone.css" type="text/css" rel="stylesheet" />
        <link media="only screen and (max-device-width: 480px)" href="//f1vlad.com/sites/all/themes/custom/f1vlad-1kbgrid/css/1kbgrid-liquid.css" type="text/css" rel="stylesheet" />
        <link rel="openid.server" href="https://api.screenname.aol.com/auth/openidServer" />
        <link rel="openid.delegate" href="http://openid.aol.com/f1vlad" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <script src="/misc/dragtable.js"></script>
        <script src="/misc/sorttable.js"></script>
        <script src="/misc/jquery.js"></script>
        <!--[if IE]>
        <script src="/misc/html5.js"></script>
        <![endif]-->
        <?if($is_front==1){?>
        <link rel="me" href="http://f1vlad.livejournal.com/">
        <link rel="me" href="http://www.facebook.com/f1vlad">
        <link rel="me" href="http://www.myspace.com/f1vlad">
        <link rel="me" href="http://slashdot.org/~f1vlad/">
        <link rel="me" href="http://www.flickr.com/photos/f1vlad/">
        <link rel="me" href="http://twitter.com/f1vlad">
        <link rel="me" href="http://www.last.fm/user/f1vlad">
        <link rel="me" href="http://friendfeed.com/f1vlad">
        <link rel="me" href="http://myshows.ru/f1vlad">
        <link rel="me" href="http://www.goodreads.com/user/show/2003384-vlad">
        <link rel="me" href="http://www.youtube.com/user/f1vlad">
        <link rel="me" href="http://blip.fm/f1vlad">
        <link rel="me" href="http://www.pandora.com/people/kulchitski">
        <link rel="me" href="http://foursquare.com/user/f1vlad">
        <link rel="me" href="http://github.com/f1vlad">
        <link rel="me" href="http://www.linkedin.com/in/f1vlad">
        <link rel="me" href="http://connect.ua/user-772451">
        <link rel="me" href="http://vk.com/f1vlad">
        <link rel="me" href="http://friendfeed.com/f1vlad">
        <link rel="me" href="http:///f1vlad.moikrug.ru">
        <link rel="me" href="http://f1vlad.vkrugudruzei.ru/">
        <link rel="me" href="http://wakoopa.com/f1vlad">
        <link rel="me" href="http://professionali.ru/~472301">
        <link rel="me" href="http://my.mail.ru/mail/f1vlad">
        <link rel="me" href="http://f1vlad.ya.ru">
        <link rel="me" href="https://www.ohloh.net/accounts/f1vlad">
        <link rel="me" href="http://www.tripit.com/people/f1vlad">
        <link rel="me" href="http://f1vlad.flagatrip.ru/">
        <link rel="me" href="http://www.swift.fm/f1vlad/">
        <?}?>
    </head>

    <body class="<?php print phptemplate_body_class_nodetype($variables['node']->nid); if($is_front) echo 'homepage'; elseif (phptemplate_body_class_nodetype($variables['node']->nid)) echo ' '; else echo 'unclassified'; ?> ">
        <div class="container">
            <header>
                <section class="block row">
                    <div class="column grid_3">
                        <hgroup>
                            <h1><a class="hl" href="/">f1vlad.com</a></h1>
                            <h2><a class="ha" href="/"><?php if ($site_slogan=strip_tags(variable_get('site_slogan',''))) {print $site_slogan;}?></a></h3>
                            <h3><a class="hi" href="/">*</a></h3>
                        </hgroup>
                    </div>
                    <div class="column grid_9">
                        <h4><?php if ($title): print $title; endif; ?></h4>
                        <p class="twidg"><?php if($node->field_subtitle[0]['value']): print $node->field_subtitle[0]['value']; else: print $hdrtext;endif;  ?></p>
                    </div>
                </section>
            </header>
                <?php
                    if(phptemplate_body_class_nodetype($variables['node']->nid)=="page_sparow" || phptemplate_body_class_nodetype($variables['node']->nid)=="page_onecol" || phptemplate_body_class_nodetype($variables['node']->nid)=="page_onecol_rssmadness")
                        $onecol=TRUE;
                ?>
                    <section class="block row">
                        <?php if($onecol!=TRUE){?>
                            <div class="column grid_3">
                                <?php if ($left): ?>
                                    <?php print $left ?>
                                <?php endif; ?>
                            </div>
                        <?php }?>
                    <div class="<?php if($onecol==TRUE){ ?>column grid_12<?php }else{ ?>column grid_9<?php }?> content_body">
                        <?php print $breadcrumb; ?>
                        <?php if ($tabs): print '<section id="tabs-wrapper" class="clear-block">'; endif; ?>
                        <?php //if ($title): print '<h2'. ($tabs ? ' class="with-tabs"' : '') .'>'. $title .'</h2>'; endif; ?>
                        <?php if ($tabs): print '<ul class="tabs primary">'. $tabs .'</ul></section>'; endif; ?> 
                        <?php if ($tabs2): print '<ul class="tabs secondary">'. $tabs2 .'</ul>'; endif; ?>
                        <?php if ($show_messages && $messages): print $messages; endif; ?>
                        <?php print $help; ?>
                        <section class="clear-block"> 
                        <?php print $content ?>
                        </section>
                        <?php print $feed_icons ?>
                    </div>
                    </section>  
        </div>

        <?php
        if(phptemplate_body_class_nodetype($variables['node']->nid)=="page_onecol_rssmadness"){
        ?>
            <div class="rmdn">
                <div class="fm">
                    <div id="fm1"><?php print $feedmadness_1; ?></div>
                    <div id="fm2"><?php print $feedmadness_2; ?></div>
                    <div id="fm3"><?php print $feedmadness_3; ?></div>
                    <div id="fm4"><?php print $feedmadness_4; ?></div>
                    <div id="fm5"><?php print $feedmadness_5; ?></div>
                    <div id="fm6"><?php print $feedmadness_6; ?></div>
                    <div id="fm7"><?php print $feedmadness_7; ?></div>
                    <div id="fm8"><?php print $feedmadness_8; ?></div>
                    </div>
                    <?php print $feed_icons ?>
                </div>
            </div>  
        <?}?>

        <footer role="contentinfo">
                <?php print $footercenter ?><?php print $footer_message ?>
        </footer>

<?php print $closure ?>
<!-- Yandex.Metrika -->
            <script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>
            <script type="text/javascript">
            try { var yaCounter576084 = new Ya.Metrika(576084); } catch(e){}
                </script>
<noscript><div style="position: absolute;"><img src="//mc.yandex.ru/watch/576084" alt="" /></div></noscript>
<!-- /Yandex.Metrika -->
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-141548-9";
urchinTracker();
</script>
</body>
</html>	
