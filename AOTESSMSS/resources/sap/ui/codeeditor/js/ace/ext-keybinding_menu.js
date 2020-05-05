ace.define("ace/ext/menu_tools/overlay_page",["require","exports","module","ace/lib/dom"],function(r,a,m){'use strict';var d=r("../../lib/dom");var c="#ace_settingsmenu, #kbshortcutmenu {background-color: #F7F7F7;color: black;box-shadow: -5px 4px 5px rgba(126, 126, 126, 0.55);padding: 1em 0.5em 2em 1em;overflow: auto;position: absolute;margin: 0;bottom: 0;right: 0;top: 0;z-index: 9991;cursor: default;}.ace_dark #ace_settingsmenu, .ace_dark #kbshortcutmenu {box-shadow: -20px 10px 25px rgba(126, 126, 126, 0.25);background-color: rgba(255, 255, 255, 0.6);color: black;}.ace_optionsMenuEntry:hover {background-color: rgba(100, 100, 100, 0.1);-webkit-transition: all 0.5s;transition: all 0.3s}.ace_closeButton {background: rgba(245, 146, 146, 0.5);border: 1px solid #F48A8A;border-radius: 50%;padding: 7px;position: absolute;right: -8px;top: -8px;z-index: 1000;}.ace_closeButton{background: rgba(245, 146, 146, 0.9);}.ace_optionsMenuKey {color: darkslateblue;font-weight: bold;}.ace_optionsMenuCommand {color: darkcyan;font-weight: normal;}";d.importCssString(c);m.exports.overlayPage=function overlayPage(b,f,t,g,h,l){t=t?'top: '+t+';':'';h=h?'bottom: '+h+';':'';g=g?'right: '+g+';':'';l=l?'left: '+l+';':'';var i=document.createElement('div');var j=document.createElement('div');function k(e){if(e.keyCode===27){i.click();}}i.style.cssText='margin: 0; padding: 0; '+'position: fixed; top:0; bottom:0; left:0; right:0;'+'z-index: 9990; '+'background-color: rgba(0, 0, 0, 0.3);';i.addEventListener('click',function(){document.removeEventListener('keydown',k);i.parentNode.removeChild(i);b.focus();i=null;});document.addEventListener('keydown',k);j.style.cssText=t+g+h+l;j.addEventListener('click',function(e){e.stopPropagation();});var w=d.createElement("div");w.style.position="relative";var n=d.createElement("div");n.className="ace_closeButton";n.addEventListener('click',function(){i.click();});w.appendChild(n);j.appendChild(w);j.appendChild(f);i.appendChild(j);document.body.appendChild(i);b.blur();};});ace.define("ace/ext/menu_tools/get_editor_keyboard_shortcuts",["require","exports","module","ace/lib/keys"],function(r,e,m){"use strict";var k=r("../../lib/keys");m.exports.getEditorKeybordShortcuts=function(a){var K=k.KEY_MODS;var b=[];var c={};a.keyBinding.$handlers.forEach(function(h){var d=h.commandKeyBinding;for(var i in d){var f=i.replace(/(^|-)\w/g,function(x){return x.toUpperCase();});var g=d[i];if(!Array.isArray(g))g=[g];g.forEach(function(j){if(typeof j!="string")j=j.name;if(c[j]){c[j].key+="|"+f;}else{c[j]={key:f,command:j};b.push(c[j]);}});}});return b;};});ace.define("ace/ext/keybinding_menu",["require","exports","module","ace/editor","ace/ext/menu_tools/overlay_page","ace/ext/menu_tools/get_editor_keyboard_shortcuts"],function(r,e,m){"use strict";var E=r("ace/editor").Editor;function s(a){if(!document.getElementById('kbshortcutmenu')){var o=r('./menu_tools/overlay_page').overlayPage;var g=r('./menu_tools/get_editor_keyboard_shortcuts').getEditorKeybordShortcuts;var k=g(a);var b=document.createElement('div');var c=k.reduce(function(p,d){return p+'<div class="ace_optionsMenuEntry"><span class="ace_optionsMenuCommand">'+d.command+'</span> : '+'<span class="ace_optionsMenuKey">'+d.key+'</span></div>';},'');b.id='kbshortcutmenu';b.innerHTML='<h1>Keyboard Shortcuts</h1>'+c+'</div>';o(a,b,'0','0','0',null);}}m.exports.init=function(a){E.prototype.showKeyboardShortcuts=function(){s(this);};a.commands.addCommands([{name:"showKeyboardShortcuts",bindKey:{win:"Ctrl-Alt-h",mac:"Command-Alt-h"},exec:function(a,l){a.showKeyboardShortcuts();}}]);};});(function(){ace.require(["ace/ext/keybinding_menu"],function(){});})();
