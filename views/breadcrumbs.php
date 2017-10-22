<?php
/**
 * Content of <!-- breadcrumbs --> placeholder
 *
 * @var array $breadcrumbs
 */

$num = 0;
$count = count($breadcrumbs);
foreach ($breadcrumbs as $item)
{
/*	if ($count > 1 && $count == $num + 1 && empty($item['link']))
		break;*/

	if ($num > 0)
		echo ' &rarr; ';

	if (!empty($item['link']))
		echo '<a class="bread-crumb-item" href="'.s2_htmlencode($item['link']).'">'.s2_htmlencode($item['title']).'</a>';
	else
		echo '<span class="bread-crumb-item">'.s2_htmlencode($item['title']).'</span>';

	$num++;
}
