<?php declare(strict_types=1);

use S2\Cms\Asset\AssetPack;

return (new AssetPack(__DIR__))
    ->addMeta('<meta name="viewport" content="width=device-width, initial-scale=1">')
    ->addCss('styles.css', [AssetPack::OPTION_MERGE])
    ->addCss('highlight-js/default.min.css')
    ->addHeadJs('https://www.googletagmanager.com/gtag/js?id=G-LZD7Q0K8SM', [AssetPack::OPTION_ASYNC])
    ->addHeadInlineJs("<script>  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'G-LZD7Q0K8SM', {'dimension1': window.devicePixelRatio || '-'});</script>")
    ->addJs('script.js', [AssetPack::OPTION_MERGE, AssetPack::OPTION_DEFER])
    ->addJs('likely/likely.min.js', [AssetPack::OPTION_MERGE])
    ->addCss('likely/likely.css', [AssetPack::OPTION_MERGE])
    ->addJs('highlight-js/highlight.min.js', [AssetPack::OPTION_DEFER])
    ->addInlineJs('<script>document.addEventListener(\'DOMContentLoaded\', function () { hljs.initHighlightingOnLoad(); });</script>')
    ->setFavIcon('favicon.png')
;
