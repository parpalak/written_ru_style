<?php
/**
 * An item of <!-- s2_subarticles --> content
 *
 * @var string $parent_link
 * @var string $parent_title
 * @var string $link
 * @var string $title
 * @var string $date
 * @var string $excerpt
 */

$prefix = '';
$class = array('subsection');
if (!empty($favorite))
{
	if ($favorite != 2)
		$prefix = '<a href="'.s2_link('/'.S2_FAVORITE_URL.'/').'" class="favorite-star" title="'.Lang::get('Favorite').'">*</a>';
	else
		$prefix = '<span class="favorite-star" title="'.Lang::get('Favorite').'">*</span>';
	$class[] = 'favorite-item';
}

?>
				<h3 class="<?php echo implode(' ', $class)?>">
<?php if ($prefix) { ?>
					<?php echo $prefix; ?>

<?php } ?>
					<a href="<?php echo s2_htmlencode($link); ?>"><?php echo s2_htmlencode($title); ?></a>
				</h3>
				<p class="subsection"><?php echo $excerpt; ?></p>
<?php if ($date) { ?>
				<div class="subsection time"><?php echo $date; ?></div>

<?php } ?>
