<?php

function common_head() {
    if (defined('S2_ENV_DEVELOP')) {
        return <<<TPL
<meta name="viewport" content="width=device-width, initial-scale=1">

TPL;
    }

    return <<<TPL
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preload" href="//i.upmath.me/latex.js" as="script">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LZD7Q0K8SM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LZD7Q0K8SM', {'dimension1': window.devicePixelRatio || '-'});
</script>

TPL;
}

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
document.write('<a href="http://www.liveinternet.ru/click" '+
'target=_blank><img src="//counter.yadro.ru/hit?t15.14;r'+
escape(document.referrer)+((typeof(screen)=='undefined')?'':
';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+';u'+escape(document.URL)+
';i'+escape(document.title.substring(0,80))+';'+Math.random()+
'" alt="" border=0 width=88 height=31><\/a>')</script>
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
