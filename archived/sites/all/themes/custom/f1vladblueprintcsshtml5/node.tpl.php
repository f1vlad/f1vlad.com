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
        <div class="meta">
            <?php if ($submitted): ?>
                <p><time datetime="<?php print format_date($node->created, 'custom', 'Y-m-d'); ?>" pubdate><?php print format_date($node->created, 'custom', 'D, F d Y'); ?></time><!-- &mdash; <?php print theme('username', $node); ?>-->
            <?php endif; ?>
            <?php if ($taxonomy): ?>
                <div class="terms"><?php print $terms ?></div>
            <?php endif;?>
        </div>
        <?php print $content ?>
    </div>

    <div class="clear-block">
        <?php if ($links): ?>
            <div class="links"><?php print $links; ?></div>
        <?php endif; ?>
    </div>

</article>
