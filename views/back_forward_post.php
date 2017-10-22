<?php
/**
 * Content of <!-- s2_blog_back_forward --> placeholder
 *
 * @var array $back
 * @var array $forward
 */

?>
<p class="back-forward">
<?php if (!empty($back)) { ?>
	<span class="block back">
		<a href="<?php echo s2_htmlencode($back['link']); ?>"><?php echo s2_htmlencode($back['title']); ?></a>
	</span>
<?php } ?>
	<span class="block arrows">
		<span class="arrow<?php echo empty($back) ? ' empty' : ''; ?>">&larr;</span>
		<span class="ctrl">Ctrl</span>
		<span class="arrow<?php echo empty($forward) ? ' empty' : ''; ?>">&rarr;</span>
	</span>
<?php if (!empty($forward)) { ?>
	<span class="block forward">
		<a href="<?php echo s2_htmlencode($forward['link']); ?>"><?php echo s2_htmlencode($forward['title']); ?></a>
	</span>
<?php } ?>
</p>
