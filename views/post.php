<?php

/** @var $author string */
/** @var $title string */
/** @var $title_link string */
/** @var $time string */
/** @var $text string */
/** @var $tags array */
/** @var $link string */
/** @var $commented bool */
/** @var $comment_num int */
/** @var $favorite bool */

?>
<div class="post author"><?php if (!empty($author)) echo s2_htmlencode($author); ?></div>
<h2 class="post head">
    <?php if (!empty($title_link)) {?>
        <a href="<?php echo s2_htmlencode($title_link); ?>"><?php echo s2_htmlencode($title); ?></a>
    <?php } else {?>
        <?php echo s2_htmlencode($title); ?>
    <?php } ?>
    <?php if (!empty($favorite) && $favorite != 2) {?>
        <a href="<?php echo S2_BLOG_PATH.urlencode(S2_FAVORITE_URL); ?>/" class="favorite-star" title="<?php echo Lang::get('Favorite', 's2_blog'); ?>">★</a>
    <?php } elseif (!empty($favorite)) {?>
        <span class="favorite-star" title="<?php echo Lang::get('Favorite', 's2_blog'); ?>">★</span>
    <?php } ?>
</h2>
<div class="post time"><?php echo $time; ?></div>
<?php
echo $text;
?>
<div class="post foot">
    <?php
    $footer = [];

    if (!empty($tags)) {
        $footer['tags'] = implode('&nbsp;&middot; ', array_map(static function (array $tag) {
            return '<a href="'.$tag['link'].'">'.$tag['title'].'</a>';
        }, $tags));
    }

    if ($commented && S2_SHOW_COMMENTS) {
        if ($comment_num) {
            if (substr(S2_LANGUAGE, 0, 7) === 'Russian') {
                $footer['comments'] = '<a href="' . $link . '#comment">' . sprintf(s2_russian_plural((int)$comment_num, '%d комментариев', '%d комментарий', '%d комментария'), $comment_num) . '</a>';
            } else {
                $footer['comments'] = '<a href="' . $link . '#comment">' . sprintf(Lang::get('Comments', 's2_blog'), $comment_num) . '</a>';
            }
        } else {
            $footer['comments'] = '<a href="' . $link . '#add-comment">' . (S2_ENABLED_COMMENTS ? Lang::get('Post comment', 's2_blog') : '') . '</a>';
        }
    }

    echo implode(' &nbsp; &nbsp; ', $footer);

    if (!empty($see_also)) {
        include 'see_also.php';
    }
    ?>
</div>
