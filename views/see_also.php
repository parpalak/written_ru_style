<?php
/** @var callable $trans */
/** @var array $see_also */
?>
<div>
    <?php echo $trans('See also'); ?>&nbsp;
    <?php echo implode('&nbsp;&middot; ', array_map(static function (array $item) {
        return '<a href="' . $item['link'] . '">' . $item['title'] . '</a>';
    }, $see_also)); ?>
</div>
