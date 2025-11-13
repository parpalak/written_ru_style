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
<title><!-- s2_head_title --></title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- s2_meta -->
<!-- s2_styles -->
</head>

<body class="error404">

	<div id="header-crumbs">
		<!-- s2_crumbs -->
	</div>

	<div id="container">
		<div id="content">
			<!-- s2_title -->

			<p>На сервере нет документа, соответствующего вашему запросу. Попробуйте перейти
				на&nbsp;<a href="/">главную страницу</a> и&nbsp;найти нужный документ вручную. Конечно, есть
				вероятность, что сервер заглючил, и&nbsp;файл <nobr>куда-то исчез</nobr>. Если вы твердо
			уверены, что какой-то документ тут просто обязан присутствовать,
			напишите мне по адресу roman@parpalak.com, и&nbsp;мы уладим данную
			ситуацию.</p>

			<p>Спасибо за внимание.</p>

			<p align="center"><img border="0" src="<?php echo $this->basePath.'/_styles/'.$this->styleName ?>/images/404.jpg" width="768" height="567" alt="404 - Not Found" /></p>
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
