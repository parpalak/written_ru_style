<?php

if (!isset($this)) {
    die;
}
include_once __DIR__ . '/common_links.php';

?>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title><!-- s2_head_title --></title>
<!-- s2_meta -->
<!-- s2_styles -->
<!-- s2_navigation_link -->
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
			<!-- s2_subarticles -->
		</div>
        <div class="social-likes-wrap"><?php echo social_stuff(); ?></div>
        <!-- s2_blog_back_forward -->
        <!-- s2_recommendations -->
		<div class="comments-block">
			<!-- s2_comments -->
			<!-- s2_comment_form -->
		</div>
		<div class="aside_column">
			<!-- s2_blog_navigation -->
		</div>
	</div>

<!--noindex-->
	<div id="counters">
		<!-- s2_search_field -->
		<!--  s2_counter_img -->
	</div>
<!--/noindex-->
	<div id="copyright"><!-- s2_copyright --><br /><!-- s2_querytime --></div><!-- s2_debug -->
<!-- s2_scripts -->
</body>
</html>
