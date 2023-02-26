<?php

if (!defined('S2_ROOT')) die;
include_once S2_ROOT.'/_styles/'.S2_STYLE.'/templates/common_links.php';

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

<body class="service">
<!--noindex-->
	<div id="header-crumbs">
		<!-- s2_crumbs -->
	</div>
<!--/noindex-->

	<div id="container">
		<div id="content">
			<!-- s2_title -->
			<!-- s2_text -->
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
