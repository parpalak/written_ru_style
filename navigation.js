(function()
{var fii=false,ul,nl,pl,st=false,d=document;function nt(event)
{if(window.event)
event=window.event;if(!(event.ctrlKey||event.altKey)||fii)
return;var link=false;switch(event.keyCode?event.keyCode:event.which?event.which:null)
{case 0x27:link=nl;break;case 0x25:link=pl;break;case 0x26:link=ul;break;}
if(link)
{d.location=link;if(window.event)
window.event.returnValue=false;if(event.preventDefault)
event.preventDefault();}}
function Init()
{if(st||!d.getElementsByTagName||!d.getElementById)
return;st=true;var e,i,ae=d.getElementsByTagName('LINK');for(i=ae.length;i--;)
{e=ae[i];if(e.rel=='next')
nl=e.href;if(e.rel=='prev')
pl=e.href;if(e.rel=='up')
ul=e.href;}
if(bIE)
{d.attachEvent('onkeydown',nt);ae=d.getElementsByTagName('INPUT');for(i=ae.length;i--;)
{e=ae[i];if(e.type=='text'||e.type=='search')
{e.attachEvent('onfocus',function(){fii=true});e.attachEvent('onblur',function(){fii=false});}}
ae=d.getElementsByTagName('TEXTAREA');for(i=ae.length;i--;)
{e=ae[i];e.attachEvent('onfocus',function(){fii=true});e.attachEvent('onblur',function(){fii=false});}}
if(bFF)
{d.addEventListener('keydown',nt,true);ae=d.getElementsByTagName('INPUT');for(i=ae.length;i--;)
{e=ae[i];if(e.type=='text'||e.type=='search')
{e.addEventListener('focus',function(){fii=true},true);e.addEventListener('blur',function(){fii=false},true);}}
ae=d.getElementsByTagName('TEXTAREA');for(i=ae.length;i--;)
{e=ae[i];e.addEventListener('focus',function(){fii=true},true);e.addEventListener('blur',function(){fii=false},true);}}}
var bFF=d.addEventListener!=null;var bIE=!bFF&&d.attachEvent!=null;if(bIE)
attachEvent('onload',Init);if(bFF)
{d.addEventListener('DOMContentLoaded',Init,false);addEventListener('load',Init,true);}})();