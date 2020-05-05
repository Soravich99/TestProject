(function(a,u){"use strict";var m={};function r(e,g){var h,j=[];for(var i=0;i<e.length;++i){h=m[e[i]]||c(e[i]);if(!h){throw'module definition dependecy not found: '+e[i];}j.push(h);}g.apply(null,j);}function d(i,e,g){if(typeof i!=='string'){throw'invalid module definition, module id must be defined and be a string';}if(e===u){throw'invalid module definition, dependencies must be specified';}if(g===u){throw'invalid module definition, definition function must be specified';}r(e,function(){m[i]=g.apply(null,arguments);});}function b(i){return!!m[i];}function c(i){var t=a;var e=i.split(/[.\/]/);for(var g=0;g<e.length;++g){if(!t[e[g]]){return;}t=t[e[g]];}return t;}function f(e){var i,t,g,h,p;for(i=0;i<e.length;i++){t=a;g=e[i];h=g.split(/[.\/]/);for(var j=0;j<h.length-1;++j){if(t[h[j]]===u){t[h[j]]={};}t=t[h[j]];}t[h[h.length-1]]=m[g];}if(a.AMDLC_TESTS){p=a.privateModules||{};for(g in m){p[g]=m[g];}for(i=0;i<e.length;i++){delete p[e[i]];}a.privateModules=p;}}d("tinymce/codesampleplugin/Prism",[],function(){var w={};var e=(typeof w!=='undefined')?w:((typeof WorkerGlobalScope!=='undefined'&&self instanceof WorkerGlobalScope)?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */
var P=(function(){var l=/\blang(?:uage)?-(?!\*)(\w+)\b/i;var _=e.Prism={util:{encode:function(t){if(t instanceof T){return new T(t.type,_.util.encode(t.content),t.alias);}else if(_.util.type(t)==='Array'){return t.map(_.util.encode);}else{return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\u00a0/g,' ');}},type:function(o){return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];},clone:function(o){var t=_.util.type(o);switch(t){case'Object':var g={};for(var k in o){if(o.hasOwnProperty(k)){g[k]=_.util.clone(o[k]);}}return g;case'Array':return o.map&&o.map(function(v){return _.util.clone(v);});}return o;}},languages:{extend:function(i,g){var l=_.util.clone(_.languages[i]);for(var k in g){l[k]=g[k];}return l;},insertBefore:function(i,g,h,j){j=j||_.languages;var k=j[i];if(arguments.length==2){h=arguments[1];for(var n in h){if(h.hasOwnProperty(n)){k[n]=h[n];}}return k;}var o={};for(var t in k){if(k.hasOwnProperty(t)){if(t==g){for(var n in h){if(h.hasOwnProperty(n)){o[n]=h[n];}}}o[t]=k[t];}}_.languages.DFS(_.languages,function(p,v){if(v===j[i]&&p!=i){this[p]=o;}});return j[i]=o;},DFS:function(o,g,t){for(var i in o){if(o.hasOwnProperty(i)){g.call(o,i,o[i],t||i);if(_.util.type(o[i])==='Object'){_.languages.DFS(o[i],g);}else if(_.util.type(o[i])==='Array'){_.languages.DFS(o[i],g,i);}}}}},plugins:{},highlightAll:function(g,h){var j=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,k;k=j[i++];){_.highlightElement(k,g===true,h);}},highlightElement:function(g,h,i){var j,k,p=g;while(p&&!l.test(p.className)){p=p.parentNode;}if(p){j=(p.className.match(l)||[,''])[1];k=_.languages[j];}g.className=g.className.replace(l,'').replace(/\s+/g,' ')+' language-'+j;p=g.parentNode;if(/pre/i.test(p.nodeName)){p.className=p.className.replace(l,'').replace(/\s+/g,' ')+' language-'+j;}var n=g.textContent;var o={element:g,language:j,grammar:k,code:n};if(!n||!k){_.hooks.run('complete',o);return;}_.hooks.run('before-highlight',o);if(h&&e.Worker){var q=new Worker(_.filename);q.onmessage=function(s){o.highlightedCode=s.data;_.hooks.run('before-insert',o);o.element.innerHTML=o.highlightedCode;i&&i.call(o.element);_.hooks.run('after-highlight',o);_.hooks.run('complete',o);};q.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:true}));}else{o.highlightedCode=_.highlight(o.code,o.grammar,o.language);_.hooks.run('before-insert',o);o.element.innerHTML=o.highlightedCode;i&&i.call(g);_.hooks.run('after-highlight',o);_.hooks.run('complete',o);}},highlight:function(t,g,h){var i=_.tokenize(t,g);return T.stringify(_.util.encode(i),h);},tokenize:function(t,g,h){var T=_.Token;var s=[t];var k=g.rest;if(k){for(var n in k){g[n]=k[n];}delete g.rest;}tokenloop:for(var n in g){if(!g.hasOwnProperty(n)||!g[n]){continue;}var p=g[n];p=(_.util.type(p)==="Array")?p:[p];for(var j=0;j<p.length;++j){var o=p[j],q=o.inside,v=!!o.lookbehind,x=0,y=o.alias;o=o.pattern||o;for(var i=0;i<s.length;i++){var z=s[i];if(s.length>t.length){break tokenloop;}if(z instanceof T){continue;}o.lastIndex=0;var A=o.exec(z);if(A){if(v){x=A[1].length;}var B=A.index-1+x,A=A[0].slice(x),C=A.length,D=B+C,E=z.slice(0,B+1),F=z.slice(D+1);var G=[i,1];if(E){G.push(E);}var H=new T(n,q?_.tokenize(A,q):A,y);G.push(H);if(F){G.push(F);}Array.prototype.splice.apply(s,G);}}}}return s;},hooks:{all:{},add:function(n,g){var h=_.hooks.all;h[n]=h[n]||[];h[n].push(g);},run:function(n,g){var h=_.hooks.all[n];if(!h||!h.length){return;}for(var i=0,j;j=h[i++];){j(g);}}}};var T=_.Token=function(t,g,h){this.type=t;this.content=g;this.alias=h;};T.stringify=function(o,g,p){if(typeof o=='string'){return o;}if(_.util.type(o)==='Array'){return o.map(function(k){return T.stringify(k,g,o);}).join('');}var h={type:o.type,content:T.stringify(o.content,g,p),tag:'span',classes:['token',o.type],attributes:{},language:g,parent:p};if(h.type=='comment'){h.attributes['spellcheck']='true';}if(o.alias){var i=_.util.type(o.alias)==='Array'?o.alias:[o.alias];Array.prototype.push.apply(h.classes,i);}_.hooks.run('wrap',h);var j='';for(var n in h.attributes){j+=(j?' ':'')+n+'="'+(h.attributes[n]||'')+'"';}return'<'+h.tag+' class="'+h.classes.join(' ')+'" '+j+'>'+h.content+'</'+h.tag+'>';};if(!e.document){if(!e.addEventListener){return e.Prism;}e.addEventListener('message',function(g){var h=JSON.parse(g.data),l=h.language,i=h.code,j=h.immediateClose;e.postMessage(_.highlight(i,_.languages[l],l));if(j){e.close();}},false);return e.Prism;}})();if(typeof module!=='undefined'&&module.exports){module.exports=P;}if(typeof global!=='undefined'){global.Prism=P;};P.languages.markup={'comment':/<!--[\w\W]*?-->/,'prolog':/<\?[\w\W]+?\?>/,'doctype':/<!DOCTYPE[\w\W]+?>/,'cdata':/<!\[CDATA\[[\w\W]*?]]>/i,'tag':{pattern:/<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{'tag':{pattern:/^<\/?[^\s>\/]+/i,inside:{'punctuation':/^<\/?/,'namespace':/^[^\s>\/:]+:/}},'attr-value':{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{'punctuation':/[=>"']/}},'punctuation':/\/?>/,'attr-name':{pattern:/[^\s>\/]+/,inside:{'namespace':/^[^\s>\/:]+:/}}}},'entity':/&#?[\da-z]{1,8};/i};P.hooks.add('wrap',function(g){if(g.type==='entity'){g.attributes['title']=g.content.replace(/&amp;/,'&');}});P.languages.xml=P.languages.markup;P.languages.html=P.languages.markup;P.languages.mathml=P.languages.markup;P.languages.svg=P.languages.markup;P.languages.css={'comment':/\/\*[\w\W]*?\*\//,'atrule':{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{'rule':/@[\w-]+/}},'url':/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,'selector':/[^\{\}\s][^\{\};]*?(?=\s*\{)/,'string':/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,'property':/(\b|\B)[\w-]+(?=\s*:)/i,'important':/\B!important\b/i,'function':/[-a-z0-9]+(?=\()/i,'punctuation':/[(){};:]/};P.languages.css['atrule'].inside.rest=P.util.clone(P.languages.css);if(P.languages.markup){P.languages.insertBefore('markup','tag',{'style':{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{'tag':{pattern:/<style[\w\W]*?>|<\/style>/i,inside:P.languages.markup.tag.inside},rest:P.languages.css},alias:'language-css'}});P.languages.insertBefore('inside','attr-value',{'style-attr':{pattern:/\s*style=("|').*?\1/i,inside:{'attr-name':{pattern:/^\s*style/i,inside:P.languages.markup.tag.inside},'punctuation':/^\s*=\s*['"]|['"]\s*$/,'attr-value':{pattern:/.+/i,inside:P.languages.css}},alias:'language-css'}},P.languages.markup.tag);};P.languages.clike={'comment':[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:true}],'string':/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,'class-name':{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:true,inside:{punctuation:/(\.|\\)/}},'keyword':/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,'boolean':/\b(true|false)\b/,'function':/[a-z0-9_]+(?=\()/i,'number':/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,'operator':/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,'punctuation':/[{}[\];(),.:]/};P.languages.javascript=P.languages.extend('clike',{'keyword':/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,'number':/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,'function':/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i});P.languages.insertBefore('javascript','keyword',{'regex':{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:true}});P.languages.insertBefore('javascript','class-name',{'template-string':{pattern:/`(?:\\`|\\?[^`])*`/,inside:{'interpolation':{pattern:/\$\{[^}]+\}/,inside:{'interpolation-punctuation':{pattern:/^\$\{|\}$/,alias:'punctuation'},rest:P.languages.javascript}},'string':/[\s\S]+/}}});if(P.languages.markup){P.languages.insertBefore('markup','tag',{'script':{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{'tag':{pattern:/<script[\w\W]*?>|<\/script>/i,inside:P.languages.markup.tag.inside},rest:P.languages.javascript},alias:'language-javascript'}});}P.languages.js=P.languages.javascript;P.languages.c=P.languages.extend('clike',{'keyword':/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,'operator':/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,'number':/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i});P.languages.insertBefore('c','string',{'macro':{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:true,alias:'property',inside:{'string':{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:true}}}});delete P.languages.c['class-name'];delete P.languages.c['boolean'];P.languages.csharp=P.languages.extend('clike',{'keyword':/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,'string':[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],'number':/\b-?(0x[\da-f]+|\d*\.?\d+)\b/i});P.languages.insertBefore('csharp','keyword',{'preprocessor':{pattern:/(^\s*)#.*/m,lookbehind:true}});P.languages.cpp=P.languages.extend('c',{'keyword':/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,'boolean':/\b(true|false)\b/,'operator':/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/});P.languages.insertBefore('cpp','keyword',{'class-name':{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:true}});P.languages.java=P.languages.extend('clike',{'keyword':/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,'number':/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,'operator':{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:true}});P.languages.php=P.languages.extend('clike',{'keyword':/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,'constant':/\b[A-Z0-9_]{2,}\b/,'comment':{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:true}});P.languages.insertBefore('php','class-name',{'shell-comment':{pattern:/(^|[^\\])#.*/,lookbehind:true,alias:'comment'}});P.languages.insertBefore('php','keyword',{'delimiter':/\?>|<\?(?:php)?/i,'variable':/\$\w+\b/i,'package':{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:true,inside:{punctuation:/\\/}}});P.languages.insertBefore('php','operator',{'property':{pattern:/(->)[\w]+/,lookbehind:true}});if(P.languages.markup){P.hooks.add('before-highlight',function(g){if(g.language!=='php'){return;}g.tokenStack=[];g.backupCode=g.code;g.code=g.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/ig,function(h){g.tokenStack.push(h);return'{{{PHP'+g.tokenStack.length+'}}}';});});P.hooks.add('before-insert',function(g){if(g.language==='php'){g.code=g.backupCode;delete g.backupCode;}});P.hooks.add('after-highlight',function(g){if(g.language!=='php'){return;}for(var i=0,t;t=g.tokenStack[i];i++){g.highlightedCode=g.highlightedCode.replace('{{{PHP'+(i+1)+'}}}',P.highlight(t,g.grammar,'php').replace(/\$/g,'$$$$'));}g.element.innerHTML=g.highlightedCode;});P.hooks.add('wrap',function(g){if(g.language==='php'&&g.type==='markup'){g.content=g.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,"<span class=\"token php\">$1</span>");}});P.languages.insertBefore('php','comment',{'markup':{pattern:/<[^?]\/?(.*?)>/,inside:P.languages.markup},'php':/\{\{\{PHP[0-9]+\}\}\}/});};P.languages.python={'comment':{pattern:/(^|[^\\])#.*/,lookbehind:true},'string':/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/,'function':{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:true},'class-name':{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:true},'keyword':/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,'boolean':/\b(?:True|False)\b/,'number':/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,'operator':/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,'punctuation':/[{}[\];(),.:]/};(function(P){P.languages.ruby=P.languages.extend('clike',{'comment':/#(?!\{[^\r\n]*?\}).*/,'keyword':/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var i={pattern:/#\{[^}]+\}/,inside:{'delimiter':{pattern:/^#\{|\}$/,alias:'tag'},rest:P.util.clone(P.languages.ruby)}};P.languages.insertBefore('ruby','keyword',{'regex':[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{'interpolation':i}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{'interpolation':i}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{'interpolation':i}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{'interpolation':i}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{'interpolation':i}},{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:true}],'variable':/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,'symbol':/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/});P.languages.insertBefore('ruby','number',{'builtin':/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,'constant':/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/});P.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{'interpolation':i}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{'interpolation':i}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{'interpolation':i}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{'interpolation':i}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{'interpolation':i}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{'interpolation':i}}];}(P));return P;});d("tinymce/codesampleplugin/Utils",[],function(){function i(e){return e&&e.nodeName=='PRE'&&e.className.indexOf('language-')!==-1;}function t(p){return function(e,g){return p(g);};}return{isCodeSample:i,trimArg:t};});d("tinymce/codesampleplugin/Dialog",["tinymce/dom/DOMUtils","tinymce/codesampleplugin/Utils","tinymce/codesampleplugin/Prism"],function(D,U,P){var g=D.DOM;function h(e){var n=[{text:'HTML/XML',value:'markup'},{text:'JavaScript',value:'javascript'},{text:'CSS',value:'css'},{text:'PHP',value:'php'},{text:'Ruby',value:'ruby'},{text:'Python',value:'python'},{text:'Java',value:'java'},{text:'C',value:'c'},{text:'C#',value:'csharp'},{text:'C++',value:'cpp'}];var o=e.settings.codesample_languages;return o?o:n;}function i(e,n,o){e.undoManager.transact(function(){var p=j(e);o=g.encode(o);if(p){e.dom.setAttrib(p,'class','language-'+n);p.innerHTML=o;P.highlightElement(p);e.selection.select(p);}else{e.insertContent('<pre id="__new" class="language-'+n+'">'+o+'</pre>');e.selection.select(e.$('#__new').removeAttr('id')[0]);}});}function j(e){var n=e.selection.getNode();if(U.isCodeSample(n)){return n;}return null;}function k(e){var n=j(e);if(n){return n.textContent;}return'';}function l(e){var n,o=j(e);if(o){n=o.className.match(/language-(\w+)/);return n?n[1]:'';}return'';}return{open:function(n){n.windowManager.open({title:"Insert/Edit code sample",minWidth:Math.min(g.getViewPort().w,n.getParam('codesample_dialog_width',800)),minHeight:Math.min(g.getViewPort().h,n.getParam('codesample_dialog_height',650)),layout:'flex',direction:'column',align:'stretch',body:[{type:'listbox',name:'language',label:'Language',maxWidth:200,value:l(n),values:h(n)},{type:'textbox',name:'code',multiline:true,spellcheck:false,ariaLabel:'Code view',flex:1,style:'direction: ltr; text-align: left',classes:'monospace',value:k(n),autofocus:true}],onSubmit:function(e){i(n,e.data.language,e.data.code);}});}};});d("tinymce/codesampleplugin/Plugin",["tinymce/Env","tinymce/PluginManager","tinymce/codesampleplugin/Prism","tinymce/codesampleplugin/Dialog","tinymce/codesampleplugin/Utils"],function(E,P,g,D,U){var h,t=U.trimArg;P.add('codesample',function(i,p){var $=i.$,j;if(!E.ceFalse){return;}function l(){var e,k=i.settings.codesample_content_css;if(i.inline&&h){return;}if(!i.inline&&j){return;}if(i.inline){h=true;}else{j=true;}if(k!==false){e=i.dom.create('link',{rel:'stylesheet',href:k?k:p+'/css/prism.css'});i.getDoc().getElementsByTagName('head')[0].appendChild(e);}}i.on('PreProcess',function(e){$('pre[contenteditable=false]',e.node).filter(t(U.isCodeSample)).each(function(k,n){var o=$(n),q=n.textContent;o.attr('class',$.trim(o.attr('class')));o.removeAttr('contentEditable');o.empty().append($('<code></code>').each(function(){this.textContent=q;}));});});i.on('SetContent',function(){var e=$('pre').filter(t(U.isCodeSample)).filter(function(k,n){return n.contentEditable!=="false";});if(e.length){i.undoManager.transact(function(){e.each(function(k,n){$(n).find('br').each(function(k,n){n.parentNode.replaceChild(i.getDoc().createTextNode('\n'),n);});n.contentEditable=false;n.innerHTML=i.dom.encode(n.textContent);g.highlightElement(n);n.className=$.trim(n.className);});});}});i.addCommand('codesample',function(){var n=i.selection.getNode();if(i.selection.isCollapsed()||U.isCodeSample(n)){D.open(i);}else{i.formatter.toggle('code');}});i.addButton('codesample',{cmd:'codesample',title:'Insert/Edit code sample'});i.on('init',l);});});f(["tinymce/codesampleplugin/Prism","tinymce/codesampleplugin/Utils","tinymce/codesampleplugin/Dialog","tinymce/codesampleplugin/Plugin"]);})(window);
