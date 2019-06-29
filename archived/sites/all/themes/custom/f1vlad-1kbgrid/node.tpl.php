<?php
// $Id: node.tpl.php,v 1.5 2007/10/11 09:51:29 goba Exp $
?>
<article id="node-<?php print $node->nid; ?>" class="node<?php if ($sticky) { print ' sticky'; } ?><?php if (!$status) { print ' node-unpublished'; } ?>">
<header>
    <?php print $picture ?>

    <?php if ($page == 0): ?>
        <h1><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h1>
    <?php endif; ?>
</header>

    <div class="content clear-block">
        <?php print $content ?>
    </div>

        <div class="meta">
            <?php if ($submitted): ?>
                <time datetime="<?php print format_date($node->created, 'custom', 'Y-m-d'); ?>" pubdate><?php print format_date($node->created, 'custom', 'D, F d Y'); ?></time><!-- &mdash; <?php print theme('username', $node); ?>-->
            <?php endif; ?>
            <?php if ($taxonomy): ?>
               <span class="terms"></span><?php print $terms ?>
            <?php endif;?>
            <?php if ($links): ?>
                | <span class="links"><?php print $links; ?></span>
            <?php endif; ?>
        </div>

</article>
