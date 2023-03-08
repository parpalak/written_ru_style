<?php

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
