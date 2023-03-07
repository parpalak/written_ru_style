<?php

function page_counters ()
{
	if (defined('S2_ENV_DEVELOP')) {
        return 'S2_ENV_DEVELOP - counters';
    }

	return '';

	ob_start();

?>
<span class="counter-code">
<script type="text/javascript">
var img = new Image();
img.src = '//counter.yadro.ru/hit?t15.14;r'+
escape(document.referrer)+((typeof(screen)=='undefined')?'':
';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+';u'+escape(document.URL)+
';i'+escape(document.title.substring(0,80))+';'+Math.random();
</script>
</span>
<?php

	return ob_get_clean();
}

function social_stuff ()
{
	if (0 && defined('S2_ENV_DEVELOP')) {
        return 'S2_ENV_DEVELOP - social';
    }

	return <<<TPL
<div class="likely">
	<div class="facebook">Поделиться</div>
	<div class="vkontakte">Поделиться</div>
	<div class="twitter" data-via="r_parpalak">Твитнуть</div>
</div>
TPL;
}
