(function(c,u){"use strict";var d={};function r(a,b){var m,e=[];for(var i=0;i<a.length;++i){m=d[a[i]]||h(a[i]);if(!m){throw'module definition dependecy not found: '+a[i];}e.push(m);}b.apply(null,e);}function f(i,a,b){if(typeof i!=='string'){throw'invalid module definition, module id must be defined and be a string';}if(a===u){throw'invalid module definition, dependencies must be specified';}if(b===u){throw'invalid module definition, definition function must be specified';}r(a,function(){d[i]=b.apply(null,arguments);});}function g(i){return!!d[i];}function h(i){var t=c;var a=i.split(/[.\/]/);for(var b=0;b<a.length;++b){if(!t[a[b]]){return;}t=t[a[b]];}return t;}function j(a){var i,t,b,e,p;for(i=0;i<a.length;i++){t=c;b=a[i];e=b.split(/[.\/]/);for(var k=0;k<e.length-1;++k){if(t[e[k]]===u){t[e[k]]={};}t=t[e[k]];}t[e[e.length-1]]=d[b];}if(c.AMDLC_TESTS){p=c.privateModules||{};for(b in d){p[b]=d[b];}for(i=0;i<a.length;i++){delete p[a[i]];}c.privateModules=p;}}f("tinymce/spellcheckerplugin/DomTextMatcher",[],function(){function e(n){return n&&n.nodeType==1&&n.contentEditable==="false";}
// released under UNLICENSE that is compatible with LGPL
return function(n,k){var m,o=[],t,p=k.dom;var q,s,v;q=k.schema.getBlockElements();s=k.schema.getWhiteSpaceElements();v=k.schema.getShortEndedElements();function w(m,a){if(!m[0]){throw'findAndReplaceDOMText cannot handle zero-length matches';}return{start:m.index,end:m.index+m[0].length,text:m[0],data:a};}function x(n){var a;if(n.nodeType===3){return n.data;}if(s[n.nodeName]&&!q[n.nodeName]){return'';}if(e(n)){return'\n';}a='';if(q[n.nodeName]||v[n.nodeName]){a+='\n';}if((n=n.firstChild)){do{a+=x(n);}while((n=n.nextSibling));}return a;}function y(n,o,i){var l,O,P,Q,R=[],S=0,T=n,U,V=0;o=o.slice(0);o.sort(function(a,b){return a.start-b.start;});U=o.shift();out:while(true){if(q[T.nodeName]||v[T.nodeName]||e(T)){S++;}if(T.nodeType===3){if(!O&&T.length+S>=U.end){O=T;Q=U.end-S;}else if(l){R.push(T);}if(!l&&T.length+S>U.start){l=T;P=U.start-S;}S+=T.length;}if(l&&O){T=i({startNode:l,startNodeIndex:P,endNode:O,endNodeIndex:Q,innerNodes:R,match:U.text,matchIndex:V});S-=(O.length-Q);l=null;O=null;R=[];U=o.shift();V++;if(!U){break;}}else if((!s[T.nodeName]||q[T.nodeName])&&T.firstChild){if(!e(T)){T=T.firstChild;continue;}}else if(T.nextSibling){T=T.nextSibling;continue;}while(true){if(T.nextSibling){T=T.nextSibling;break;}else if(T.parentNode!==n){T=T.parentNode;}else{break out;}}}}function z(a){function b(i,l){var O=o[l];if(!O.stencil){O.stencil=a(O);}var P=O.stencil.cloneNode(false);P.setAttribute('data-mce-index',l);if(i){P.appendChild(p.doc.createTextNode(i));}return P;}return function(O){var P,Q,R,S=O.startNode,T=O.endNode,U=O.matchIndex,V=p.doc;if(S===T){var n=S;R=n.parentNode;if(O.startNodeIndex>0){P=V.createTextNode(n.data.substring(0,O.startNodeIndex));R.insertBefore(P,n);}var W=b(O.match,U);R.insertBefore(W,n);if(O.endNodeIndex<n.length){Q=V.createTextNode(n.data.substring(O.endNodeIndex));R.insertBefore(Q,n);}n.parentNode.removeChild(n);return W;}P=V.createTextNode(S.data.substring(0,O.startNodeIndex));Q=V.createTextNode(T.data.substring(O.endNodeIndex));var X=b(S.data.substring(O.startNodeIndex),U);var Y=[];for(var i=0,l=O.innerNodes.length;i<l;++i){var Z=O.innerNodes[i];var $=b(Z.data,U);Z.parentNode.replaceChild($,Z);Y.push($);}var _=b(T.data.substring(0,O.endNodeIndex),U);R=S.parentNode;R.insertBefore(P,S);R.insertBefore(X,S);R.removeChild(S);R=T.parentNode;R.insertBefore(_,T);R.insertBefore(Q,T);R.removeChild(T);return _;};}function A(a){var b=a.parentNode;b.insertBefore(a.firstChild,a);a.parentNode.removeChild(a);}function B(a){var b=n.getElementsByTagName('*'),l=[];a=typeof a=="number"?""+a:null;for(var i=0;i<b.length;i++){var O=b[i],P=O.getAttribute('data-mce-index');if(P!==null&&P.length){if(P===a||a===null){l.push(O);}}}return l;}function C(a){var i=o.length;while(i--){if(o[i]===a){return i;}}return-1;}function D(a){var b=[];E(function(l,i){if(a(l,i)){b.push(l);}});o=b;return this;}function E(a){for(var i=0,l=o.length;i<l;i++){if(a(o[i],i)===false){break;}}return this;}function F(a){if(o.length){y(n,o,z(a));}return this;}function G(a,b){if(t&&a.global){while((m=a.exec(t))){o.push(w(m,b));}}return this;}function H(a){var i,b=B(a?C(a):null);i=b.length;while(i--){A(b[i]);}return this;}function I(a){return o[a.getAttribute('data-mce-index')];}function J(a){return B(C(a))[0];}function K(a,l,b){o.push({start:a,end:a+l,text:t.substr(a,l),data:b});return this;}function L(a){var b=B(C(a));var i=k.dom.createRng();i.setStartBefore(b[0]);i.setEndAfter(b[b.length-1]);return i;}function M(a,t){var b=L(a);b.deleteContents();if(t.length>0){b.insertNode(k.dom.doc.createTextNode(t));}return b;}function N(){o.splice(0,o.length);H();return this;}t=x(n);return{text:t,matches:o,each:E,filter:D,reset:N,matchFromElement:I,elementFromMatch:J,find:G,add:K,wrap:F,unwrap:H,replace:M,rangeFromMatch:L,indexOf:C};};});f("tinymce/spellcheckerplugin/Plugin",["tinymce/spellcheckerplugin/DomTextMatcher","tinymce/PluginManager","tinymce/util/Tools","tinymce/ui/Menu","tinymce/dom/DOMUtils","tinymce/util/XHR","tinymce/util/URI","tinymce/util/JSON"],function(D,P,T,M,a,X,U,J){P.add('spellchecker',function(b,k){var l,s=this,m,n,o,p=b.settings;var q;function t(){if(!s.textMatcher){s.textMatcher=new D(b.getBody(),b);}return s.textMatcher;}function v(e,i){var Q=[];T.each(i,function(R){Q.push({selectable:true,text:R.name,data:R.value});});return Q;}if(/(^|[ ,])tinymcespellchecker([, ]|$)/.test(p.plugins)&&P.get('tinymcespellchecker')){if(typeof console!=="undefined"&&console.log){console.log("Spell Checker Pro is incompatible with Spell Checker plugin! "+"Remove 'spellchecker' from the 'plugins' option.");}return;}var w=p.spellchecker_languages||'English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,'+'German=de,Italian=it,Polish=pl,Portuguese=pt_BR,'+'Spanish=es,Swedish=sv';l=v('Language',T.map(w.split(','),function(e){e=e.split('=');return{name:e[0],value:e[1]};}));function x(e){for(var i in e){return false;}return true;}function y(i,Q){var R=[],S=m[i];T.each(S,function(e){R.push({text:e,onclick:function(){b.insertContent(b.dom.encode(e));b.dom.remove(Q);E();}});});R.push({text:'-'});if(q){R.push({text:'Add to Dictionary',onclick:function(){F(i,Q);}});}R.push.apply(R,[{text:'Ignore',onclick:function(){G(i,Q);}},{text:'Ignore all',onclick:function(){G(i,Q,true);}}]);o=new M({items:R,context:'contextmenu',onautohide:function(e){if(e.target.className.indexOf('spellchecker')!=-1){e.preventDefault();}},onhide:function(){o.remove();o=null;}});o.renderTo(document.body);var V=a.DOM.getPos(b.getContentAreaContainer());var W=b.dom.getPos(Q[0]);var Y=b.dom.getRoot();if(Y.nodeName=='BODY'){W.x-=Y.ownerDocument.documentElement.scrollLeft||Y.scrollLeft;W.y-=Y.ownerDocument.documentElement.scrollTop||Y.scrollTop;}else{W.x-=Y.scrollLeft;W.y-=Y.scrollTop;}V.x+=W.x;V.y+=W.y;o.moveTo(V.x,V.y+Q[0].offsetHeight);}function z(){return b.getParam('spellchecker_wordchar_pattern')||new RegExp("[^"+"\\s!\"#$%&()*+,-./:;<=>?@[\\]^_{|}`"+"\u00a7\u00a9\u00ab\u00ae\u00b1\u00b6\u00b7\u00b8\u00bb"+"\u00bc\u00bd\u00be\u00bf\u00d7\u00f7\u00a4\u201d\u201c\u201e\u00a0\u2002\u2003\u2009"+"]+","g");}function A(e,i,Q,R){var S={method:e,lang:p.spellchecker_language},V='';S[e=="addToDictionary"?"word":"text"]=i;T.each(S,function(W,Y){if(V){V+='&';}V+=Y+'='+encodeURIComponent(W);});X.send({url:new U(k).toAbsolute(p.spellchecker_rpc_url),type:"post",content_type:'application/x-www-form-urlencoded',data:V,success:function(W){W=J.parse(W);if(!W){var Y=b.translate("Server response wasn't proper JSON.");R(Y);}else if(W.error){R(W.error);}else{Q(W);}},error:function(){var W=b.translate("The spelling service was not found: (")+p.spellchecker_rpc_url+b.translate(")");R(W);}});}function B(e,i,Q,R){var S=p.spellchecker_callback||A;S.call(s,e,i,Q,R);}function C(){if(H()){return;}function e(i){b.notificationManager.open({text:i,type:'error'});b.setProgressState(false);H();}b.setProgressState(true);B("spellcheck",t().text,N,e);b.focus();}function E(){if(!b.dom.select('span.mce-spellchecker-word').length){H();}}function F(e,i){b.setProgressState(true);B("addToDictionary",e,function(){b.setProgressState(false);b.dom.remove(i,true);E();},function(Q){b.notificationManager.open({text:Q,type:'error'});b.setProgressState(false);});}function G(e,i,Q){b.selection.collapse();if(Q){T.each(b.dom.select('span.mce-spellchecker-word'),function(R){if(R.getAttribute('data-mce-word')==e){b.dom.remove(R,true);}});}else{b.dom.remove(i,true);}E();}function H(){t().reset();s.textMatcher=null;if(n){n=false;b.fire('SpellcheckEnd');return true;}}function I(e){var i=e.getAttribute('data-mce-index');if(typeof i=="number"){return""+i;}return i;}function K(e){var Q,R=[];Q=T.toArray(b.getBody().getElementsByTagName('span'));if(Q.length){for(var i=0;i<Q.length;i++){var S=I(Q[i]);if(S===null||!S.length){continue;}if(S===e.toString()){R.push(Q[i]);}}}return R;}b.on('click',function(e){var i=e.target;if(i.className=="mce-spellchecker-word"){e.preventDefault();var Q=K(I(i));if(Q.length>0){var R=b.dom.createRng();R.setStartBefore(Q[0]);R.setEndAfter(Q[Q.length-1]);b.selection.setRng(R);y(i.getAttribute('data-mce-word'),Q);}}});b.addMenuItem('spellchecker',{text:'Spellcheck',context:'tools',onclick:C,selectable:true,onPostRender:function(){var s=this;s.active(n);b.on('SpellcheckStart SpellcheckEnd',function(){s.active(n);});}});function L(e){var i=p.spellchecker_language;e.control.items().each(function(Q){Q.active(Q.settings.data===i);});}function N(e){var i;if(e.words){q=!!e.dictionary;i=e.words;}else{i=e;}b.setProgressState(false);if(x(i)){var Q=b.translate('No misspellings found.');b.notificationManager.open({text:Q,type:'info'});n=false;return;}m=i;t().find(z()).filter(function(R){return!!i[R.text];}).wrap(function(R){return b.dom.create('span',{"class":'mce-spellchecker-word',"data-mce-bogus":1,"data-mce-word":R.text});});n=true;b.fire('SpellcheckStart');}var O={tooltip:'Spellcheck',onclick:C,onPostRender:function(){var s=this;b.on('SpellcheckStart SpellcheckEnd',function(){s.active(n);});}};if(l.length>1){O.type='splitbutton';O.menu=l;O.onshow=L;O.onselect=function(e){p.spellchecker_language=e.control.settings.data;};}b.addButton('spellchecker',O);b.addCommand('mceSpellCheck',C);b.on('remove',function(){if(o){o.remove();o=null;}});b.on('change',E);this.getTextMatcher=t;this.getWordCharPattern=z;this.markErrors=N;this.getLanguage=function(){return p.spellchecker_language;};p.spellchecker_language=p.spellchecker_language||p.language||'en';});});j(["tinymce/spellcheckerplugin/DomTextMatcher"]);})(window);
