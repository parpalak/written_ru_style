<?php

use S2\Cms\Template\HtmlTemplateProvider;

if (!isset($this)) {
    die;
}
if (!$this instanceof HtmlTemplateProvider) {
    throw new \LogicException('Template must be included from ' . HtmlTemplateProvider::class);
}
include_once __DIR__ . '/common_links.php';

?>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>Сайт Романа Парпалака</title>
<!-- s2_meta -->
<meta property="og:image" content="<?php echo $this->baseUrl; ?>/_styles/written_ru/images/me_4.jpg">
<!-- s2_styles -->
<!-- s2_navigation_link -->
<!-- s2_rss_link -->
<link rel="alternate" type="application/rss+xml" title="Последние заметки в блоге" href="<?php echo $this->basePath; ?>/blog/rss.xml" />
</head>

<body class="mainpage">
	<!-- s2_text -->

    <div class="mainpage-container">
        <div class="social-likes-wrap"><?php echo social_stuff(); ?></div>

        <!--noindex-->
        <div id="counters">
            <!-- s2_search_field -->
            <!--  s2_counter_img -->
        </div>
        <!--/noindex-->

        <div id="copyright"><!-- s2_copyright --><br /><!-- s2_querytime --></div><!-- s2_debug -->
    </div>
    <!-- s2_scripts -->
</body>
</html>
