<?php
// $Id: comment.tpl.php,v 1.10 2008/01/04 19:24:24 goba Exp $
?>
<article class="comment<?php print ($comment->new) ? ' comment-new' : ''; print ' '. $status; print ' '. $zebra; ?>">
    <header>

        <?php if ($comment->new) : ?>
            <span class="new"><?php print drupal_ucfirst($new) ?></span>
        <?php endif; ?>

        <?php print $picture ?>

        <h3><?php print $title ?></h3>
        <?php if ($submitted): ?>
            <time datetime="<?php print format_date($comment->timestamp, 'custom', 'Y-m-d'); ?>" pubdate><?php print format_date($comment->timestamp, 'custom', 'D, F d Y'); ?></time> &mdash; <a rel="author" href="<?php if($comment->uid): print "/users/".$comment->name;  elseif ($comment->homepage):print $comment->homepage;else:print '#';endif;?>"><?php print $comment->name; ?></a>
        <?php endif; ?>
    </header>
    <div class="content">
      <?php print $content ?>
      <?php if ($signature): ?>
      <div class="clear-block">
        <div>—</div>
        <?php print $signature ?>
      </div>
      <?php endif; ?>
    </div>

  <?php if ($links): ?>
    <nav class="links"><?php print $links ?></nav>
  <?php endif; ?>
</article>
