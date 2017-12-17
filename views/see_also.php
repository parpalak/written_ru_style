<?php
/**
 * @var $see_also array
 */
?>
<div>
    <?php echo Lang::get('See also', 's2_blog'); ?>&nbsp;
    <?php echo implode('&nbsp;&middot; ', array_map(function (array $item) {
        return '<a href="' . $item['link'] . '">' . $item['title'] . '</a>';
    }, $see_also)); ?>
</div>
