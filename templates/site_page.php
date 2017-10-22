<?php

if (!defined('S2_ROOT')) die;
include_once S2_ROOT.'/_styles/'.S2_STYLE.'/templates/common_links.php';

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title><!-- s2_head_title --></title>
<!-- s2_meta -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="//fonts.gstatic.com">
<link rel="preload" href="//tex.s2cms.ru/latex.js" as="script">
<!-- s2_styles -->
<!-- s2_navigation_link -->
<!-- s2_rss_link -->
</head>

<body>
<!--noindex-->
	<div id="header-crumbs">
		<!-- s2_crumbs -->
	</div>
<!--/noindex-->

	<div id="container">
		<div id="content">
			<!-- s2_title -->
			<!-- s2_date -->
			<!-- s2_text -->
		</div>
		<div class="social-likes-wrap"><?php echo social_stuff(); ?></div>
		<div class="aside_column">
			<!-- s2_blog_tags -->
		</div>
		<div class="comments-block">
			<!-- s2_comments -->
			<!-- s2_comment_form -->
		</div>
	</div>

<!--noindex-->
	<div id="counters">
		<!-- s2_search_field -->
		<!--  s2_counter_img -->
		<?php echo page_counters();?>
	</div>
<!--/noindex-->
	<div id="copyright"><!-- s2_copyright --><br /><!-- s2_querytime --></div><!-- s2_debug -->
<!-- s2_scripts -->
</body>
</html>
