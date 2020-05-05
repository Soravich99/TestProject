(function(){"use strict";var H="sapMLIB sapMLIBHoverable CodeMirror-hint";var A="sapMLIB sapMLIBHoverable sapMLIBSelected CodeMirror-hint-active";var S='Select value from list...';var a='any of the following conditions is true:';var b='all of the following conditions are true:';var c="<add line>";var N="\n\u2022  \n;";var d="\u2022  ";var E="\n"+d;var f="<'string'>";var g="<number>";var D="<'dd/mm/yyyy'>";var T="<'hh:mi:ss'>";var h="<'dd/mm/yyyy hh:mi:ss'>";var j="constant";var k="Date";var l="Time";var m="Timestamp";var o="Number";var V="valueList";CodeMirror.handleEnter=function(e,i,n){var t=CodeMirror.initComplition(e,i,n);if(t){var u=t.getHints(e,t.options);if(!u){return;}var v=jQuery.map(u.list,function(w,x){if(w.text===c){return x;}});if(v.length>0){t.pick(u,v[0],"enter");}t.close();}};CodeMirror.handleColon=function(e,i,n){var t=CodeMirror.initComplition(e,i,n);if(t){var u=t.getHints(e,t.options);if(u){var v=u.list.indexOf(c);if(v>0){u.list[v]=N;t.pick(u,v);}}}};CodeMirror.closeAutoComplete=function(e,i,n){var t=e.state.completionActive;t&&t.close();};CodeMirror.showHint=function(e,i,n){var t=CodeMirror.initComplition(e,i,n);if(t){CodeMirror.signal(e,"startCompletion",e);if(t.options.async)i(e,function(u){t.showHints(u);},t.options);else return t.showHints(t.getHints(e,t.options));}};CodeMirror.initComplition=function(e,i,n){if(e.somethingSelected())return;if(i==null){if(n&&n.async)return;else i=CodeMirror.hint.auto;}if(e.state.completionActive)e.state.completionActive.close();if(e.state.completionActive&&e.state.completionActive.widget!==null)return;var t=e.state.completionActive=new C(e,i,n||{});return t;};function C(e,i,n){this.cm=e;this.getHints=i;this.options=this.buildOptions(n);this.widget=this.onClose=null;}C.prototype={setNewCursorPosition:function(e,i){var n=i.getCursor();if(e===a+N||e===N||e===b+N){n.line--;n.ch+=i.getOption("indentUnit")+2;i.setCursor(n);}if(e===d||e===E){n.ch+=i.getOption("indentUnit")+2;i.setCursor(n);}if(e==="''"){n.ch-=1;i.setCursor(n);}},handleSimpleTypesPick:function(e,i){switch(e){case f:e="''";break;case g:e="0";break;case D:e="'dd/mm/yyyy'";break;case T:e="'hh:mi:ss'";break;case h:e="'dd/mm/yyyy hh:mi:ss'";break;default:if((e.charAt(0)==="<")&&(e.charAt(e.length-1)===">")&&(i.tokenType===j)&&((i.info.type===k)||(i.info.type===l)||(i.info.type===m)||(i.info.type===o))){e=e.substring(1,e.length-1);}break;}return e;},close:function(){if(!this.active())return;this.cm.state.completionActive=null;if(this.widget)this.widget.close();if(this.onClose)this.onClose();CodeMirror.signal(this.cm,"endCompletion",this.cm);},active:function(){return this.cm.state.completionActive==this;},pick:function(e,i,n){var t=null;var u=e.list[i];var v=u.text;var w=u.completion;var x=v;var y=e.list[i].tokenType===V;if(!y){x=this.handleSimpleTypesPick(v,u);if(x!==v){w=w.replace(v,x);v=v.replace(v,x);}if(x===a||x===b){x=x+N;}if(v.trim()===c){if(n==="enter"){x=d;}else{x=E;}}if(u.hint){u.hint(this.cm,e,u);}else{var z=v.length-w.length;if(z>0){var B=this.cm.getCursor().ch-z;var F={line:this.cm.getCursor().line,ch:B};this.cm.replaceRange(x,F,this.cm.getCursor());}else{var G=x.replace(v,w);this.cm.replaceRange(G,this.cm.getCursor());}}CodeMirror.signal(e,"pick",x);}else{CodeMirror.signal(this.cm,"onValueListSelect");}this.setNewCursorPosition(x,this.cm);this.close();},showHints:function(e){if(!e||!e.list.length||!this.active())return this.close();if(this.options.completeSingle!=false&&e.list.length==1)this.pick(e,0);else this.showWidget(e);},showWidget:function(e){this.widget=new W(this,e);CodeMirror.signal(this.cm,"shown");var i=0,n=this,t;var u=this.options.closeCharacters||/[\s()\[\]{};:>,]/;var v=this.cm.getCursor(),w=this.cm.getLine(v.line).length;var x=window.requestAnimationFrame||function(J){return setTimeout(J,1000/60);};var y=window.cancelAnimationFrame||clearTimeout;function z(){if(t)return;t=true;n.close();n.cm.off("cursorActivity",I);if(e)CodeMirror.signal(this.cm,"close");}function B(){if(t)return;CodeMirror.signal(e,"update");if(n.options.async)n.getHints(n.cm,F,n.options);else F(n.getHints(n.cm,n.options));}function F(J){e=J;if(t)return;if(!e||!e.list.length)return z();n.widget=new W(n,e);}function G(){if(i){y(i);i=0;}}function I(){G();var J=n.cm.getCursor(),K=n.cm.getLine(J.line);if(J.line!=v.line||K.length-J.ch!=w-v.ch||J.ch<v.ch||n.cm.somethingSelected()||(J.ch&&u.test(K.charAt(J.ch-1)))){n.close();}else{i=x(B);if(n.widget)n.widget.close();}}this.cm.on("cursorActivity",I);this.onClose=z;},buildOptions:function(e){var i=this.cm.options.hintOptions;var n={};for(var t in s)n[t]=s[t];if(i)for(var t in i)if(i[t]!==undefined)n[t]=i[t];if(e)for(var t in e)if(e[t]!==undefined)n[t]=e[t];return n;}};function p(e){if(typeof e=="string")return e;else return e.text;}function q(e,i){var n={Up:function(){i.moveFocus(-1);},Down:function(){i.moveFocus(1);},PageUp:function(){i.moveFocus(-i.menuSize()+1,true);},PageDown:function(){i.moveFocus(i.menuSize()-1,true);},Home:function(){i.setFocus(0);},End:function(){i.setFocus(i.length-1);},Enter:i.pick,Esc:i.close};var t=e.customKeys?{}:n;function u(v,w){var x;if(typeof w!="string")x=function(y){return w(y,i);};else if(n.hasOwnProperty(w))x=n[w];else x=w;t[v]=x;}if(e.customKeys)for(var v in e.customKeys)if(e.customKeys.hasOwnProperty(v))u(v,e.customKeys[v]);if(e.extraKeys)for(var v in e.extraKeys)if(e.extraKeys.hasOwnProperty(v))u(v,e.extraKeys[v]);return t;}function r(e,i){while(i&&i!=e){if(i.nodeName.toUpperCase()==="LI"&&i.parentNode==e)return i;i=i.parentNode;}}function W(u,v){this.completion=u;this.data=v;var w=this,x=u.cm,y=u.options;var z=this.hints=document.createElement("ul");z.className="CodeMirror-hints";this.selectedHint=y.getDefaultSelection?y.getDefaultSelection(x,y,v):0;var B=v.list;for(var i=0;i<B.length;++i){var F=z.appendChild(document.createElement("li")),G=B[i];var I=H+(i!=this.selectedHint?"":" "+A);if(G.className!=null)I=G.className+" "+I;F.className=I;if(G.render)G.render(F,v,G);else F.appendChild(document.createTextNode(G.displayText||p(G)));F.hintId=i;}var J=x.cursorCoords(y.alignWithWord!==false?v.from:null);var K=J.left,L=J.bottom,M=true;z.style.left=K+"px";z.style.top=L+"px";var O=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth);var P=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(y.container||document.body).appendChild(z);var Q=z.getBoundingClientRect();var R=Q.right-O,U=Q.bottom-P;if(R>0){if(Q.right-Q.left>O){z.style.width=(O-5)+"px";R-=(Q.right-Q.left)-O;}z.style.left=(K=J.left-R)+"px";}if(U>0){var X=Q.bottom-Q.top;if(Q.top-(J.bottom-J.top)-X>0){U=X+(J.bottom-J.top);M=false;}else if(X>P){z.style.height=(P-5)+"px";U-=X-P;}z.style.top=(L=J.bottom-U)+"px";}x.addKeyMap(this.keyMap=q(y,{moveFocus:function(n,e){w.changeActive(w.selectedHint+n,e);},setFocus:function(n){w.changeActive(n);},menuSize:function(){return w.screenAmount();},length:B.length,close:function(){u.close();},pick:function(){w.pick();}}));if(y.closeOnUnfocus!==false){var Y;x.on("blur",this.onBlur=function(){Y=setTimeout(function(){u.close();},100);});x.on("focus",this.onFocus=function(){clearTimeout(Y);});}var Z=x.getScrollInfo();x.on("scroll",this.onScroll=function(){var e=x.getScrollInfo(),n=x.getWrapperElement().getBoundingClientRect();var t=L+Z.top-e.top;var $=t-(window.pageYOffset||(document.documentElement||document.body).scrollTop);if(!M)$+=z.offsetHeight;if($<=n.top||$>=n.bottom)return u.close();z.style.top=t+"px";z.style.left=(K+Z.left-e.left)+"px";});CodeMirror.on(z,"click",function(e){var t=r(z,e.target||e.srcElement);if(t&&t.hintId!=null){w.changeActive(t.hintId);w.pick();}});CodeMirror.on(z,"mousedown",function(){x.options.shouldValidate=false;setTimeout(function(){x.focus();},20);});CodeMirror.signal(v,"select",B[0],z.firstChild);return true;}W.prototype={close:function(){if(this.completion.widget!=this)return;this.completion.widget=null;this.hints.parentNode.removeChild(this.hints);this.completion.cm.removeKeyMap(this.keyMap);var e=this.completion.cm;if(this.completion.options.closeOnUnfocus!==false){e.off("blur",this.onBlur);e.off("focus",this.onFocus);}e.off("scroll",this.onScroll);},pick:function(){this.completion.pick(this.data,this.selectedHint);},changeActive:function(i,e){if(i>=this.data.list.length)i=e?this.data.list.length-1:0;else if(i<0)i=e?0:this.data.list.length-1;if(this.selectedHint==i)return;var n=this.hints.childNodes[this.selectedHint];n.className=n.className.replace(" "+A,"");n=this.hints.childNodes[this.selectedHint=i];n.className+=" "+A;if(n.offsetTop<this.hints.scrollTop)this.hints.scrollTop=n.offsetTop-3;else if(n.offsetTop+n.offsetHeight>this.hints.scrollTop+this.hints.clientHeight)this.hints.scrollTop=n.offsetTop+n.offsetHeight-this.hints.clientHeight+3;CodeMirror.signal(this.data,"select",this.data.list[this.selectedHint],n);},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1;}};CodeMirror.registerHelper("hint","auto",function(e,n){var t=e.getHelpers(e.getCursor(),"hint");if(t.length){for(var i=0;i<t.length;i++){var u=t[i](e,n);if(u&&u.list.length)return u;}}else{var w=e.getHelper(e.getCursor(),"hintWords");if(w)return CodeMirror.hint.fromList(e,{words:w});}});CodeMirror.registerHelper("hint","fromList",function(e,n){var t=e.getCursor(),u=e.getTokenAt(t);var v=[];for(var i=0;i<n.words.length;i++){var w=n.words[i];if(w.slice(0,u.string.length)==u.string)v.push(w);}if(v.length)return{list:v,from:CodeMirror.Pos(t.line,u.start),to:CodeMirror.Pos(t.line,u.end)};});var s={hint:CodeMirror.hint.auto,completeSingle:false,alignWithWord:true,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:true,completeOnSingleClick:false,container:null,customKeys:null,extraKeys:null};CodeMirror.commands.autocomplete=CodeMirror.showHint;CodeMirror.commands.enterAutocomplete=CodeMirror.handleEnter;CodeMirror.commands.colonAutocomplete=CodeMirror.handleColon;CodeMirror.commands.closeAutoComplete=CodeMirror.closeAutoComplete;})();
