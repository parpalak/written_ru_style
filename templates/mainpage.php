<?php

if (!defined('S2_ROOT')) die;
include_once S2_ROOT.'/_styles/'.S2_STYLE.'/templates/common_links.php';

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Сайт Романа Парпалака</title>
<!-- s2_meta -->
<meta property="og:image" content="//written.ru/_styles/written_ru/images/me_4.jpg">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/_styles/written_ru/styles.css">
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400italic,700italic,700,400&subset=latin,cyrillic,cyrillic-ext">
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/_styles/written_ru/favicon.png">
<link rel="preconnect" href="//fonts.gstatic.com">
<link rel="preload" href="//tex.s2cms.ru/latex.js" as="script">
<!-- s2_navigation_link -->
<!-- s2_rss_link -->
<link rel="alternate" type="application/rss+xml" title="Последние заметки в блоге" href="<?php echo S2_PATH; ?>/blog/rss.xml" />
</head>

<body class="mainpage">
	<!-- s2_text -->

    <div class="mainpage-container">
        <div class="social-likes-wrap"><?php echo social_stuff(); ?></div>

        <!--noindex-->
        <div id="counters">
            <!-- s2_search_field -->
            <!--  s2_counter_img -->
            <?php echo page_counters();?>
        </div>
        <!--/noindex-->

        <div id="copyright"><!-- s2_copyright --><br /><!-- s2_querytime --></div><!-- s2_debug -->
    </div>
    <link rel="stylesheet" href="/_styles/written_ru/highlight-js/default.min.css">
    <link rel="stylesheet" href="/_extensions/s2_search/style.css">
    <link rel="stylesheet" href="/_extensions/s2_blog/style.css">
    <!-- s2_scripts -->
    <script>
        var img = new Image();
        img.src = '/_styles/written_ru/images/me_4.jpg';

        if (!img.complete) {
            img.onload = function() {
                if (!this.wasLoaded) {
                    document.getElementById('top-info-back').className = 'top-info-back';
                    this.wasLoaded = 1;
                }
            };
        }
        else {
            document.getElementById('top-info-back').className = 'top-info-back';
        }
    </script>
</body>
</html>
