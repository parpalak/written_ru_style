<?php

$a = <<<'df'
<script type="text/javascript">
if (document.forms['post_comment']) {
	document.forms['post_comment'].style.display = 'none';
	$(function() {
		var hidden = true;
		$('h2.comment.form').wrapInner('<span class="js-link"></span>').click(function() {
			var $form = $(document.forms['post_comment']);
			hidden ? $form.slideDown() : $form.slideUp();
			hidden = !hidden;
		})
	});
}
</script>
df;



// Feel free to add your own styles and scripts
// Paths here are relative to the template (this file).
return array(
	// Used to generate content for <!-- s2_styles --> placeholder
	'css' => array(
		'styles.css',
//		'//fonts.googleapis.com/css?family=Roboto:400italic,700italic,700,400&subset=latin,cyrillic,cyrillic-ext',
		'highlight-js/default.min.css',
//		'//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/styles/default.min.css',
//		'social-likes/social-likes_flat.css',
	),
	'css_inline' => array(),

	// Used to generate content for <!-- s2_scripts --> placeholder
	'js' => array(
		'//i.upmath.me/latex.js',
//		'http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
//		'//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/highlight.min.js',
		'script.js',
		'highlight-js/highlight.min.js',
//		'social-likes/social-likes.min.js',
	),
	'js_inline' => array(
//		$a,
//		'<script>alert(\'test\');</script>',
		'<script>hljs.initHighlightingOnLoad();</script>',
	),
	'favicon' => 'favicon.png',
);
