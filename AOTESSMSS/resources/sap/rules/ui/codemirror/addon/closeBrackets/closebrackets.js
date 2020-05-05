// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
(function(m){if(typeof exports=="object"&&typeof module=="object")m(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],m);else m(CodeMirror);})(function(C){var D="()[]{}''\"\"";var a="[]{}";var S=/\s/;var P=C.Pos;C.defineOption("autoCloseBrackets",false,function(f,v,o){if(o!=C.Init&&o)f.removeKeyMap("autoCloseBrackets");if(!v)return;var p=D,g=a;if(typeof v=="string")p=v;else if(typeof v=="object"){if(v.pairs!=null)p=v.pairs;if(v.explode!=null)g=v.explode;}var m=b(p);if(g)m.Enter=d(g);f.addKeyMap(m);});function c(f,p){var s=f.getRange(P(p.line,p.ch-1),P(p.line,p.ch+1));return s.length==2?s:null;}function e(f,p,g){var l=f.getLine(p.line);var t=f.getTokenAt(p);if(/\bstring2?\b/.test(t.type))return false;var s=new C.StringStream(l.slice(0,p.ch)+g+l.slice(p.ch),4);s.pos=s.start=t.start;for(;;){var h=f.getMode().token(s,t.state);if(s.pos>=p.ch+1)return/\bstring2?\b/.test(h);s.start=s.pos;}}function b(p){var m={name:"autoCloseBrackets",Backspace:function(g){if(g.getOption("disableInput"))return C.Pass;var r=g.listSelections();for(var i=0;i<r.length;i++){if(!r[i].empty())return C.Pass;var h=c(g,r[i].head);if(!h||p.indexOf(h)%2!=0)return C.Pass;}for(var i=r.length-1;i>=0;i--){var j=r[i].head;g.replaceRange("",P(j.line,j.ch-1),P(j.line,j.ch+1));}}};var f="";for(var i=0;i<p.length;i+=2)(function(l,r){if(l!=r)f+=r;m["'"+l+"'"]=function(g){if(g.getOption("disableInput"))return C.Pass;var h=g.listSelections(),t,n;for(var i=0;i<h.length;i++){var j=h[i],k=j.head,o;var n=g.getRange(k,P(k.line,k.ch+1));if(!j.empty())o="surround";else if(l==r&&n==r){if(g.getRange(k,P(k.line,k.ch+3))==l+l+l)o="skipThree";else o="skip";}else if(l==r&&k.ch>1&&g.getRange(P(k.line,k.ch-2),k)==l+l&&(k.ch<=2||g.getRange(P(k.line,k.ch-3),P(k.line,k.ch-2))!=l))o="addFour";else if(l=='"'||l=="'"){if(!C.isWordChar(n)&&e(g,k,l))o="both";else return C.Pass;}else if(g.getLine(k.line).length==k.ch||f.indexOf(n)>=0||S.test(n))o="both";else return C.Pass;if(!t)t=o;else if(t!=o)return C.Pass;}g.operation(function(){if(t=="skip"){g.execCommand("goCharRight");}else if(t=="skipThree"){for(var i=0;i<3;i++)g.execCommand("goCharRight");}else if(t=="surround"){var s=g.getSelections();for(var i=0;i<s.length;i++)s[i]=l+s[i]+r;g.replaceSelections(s,"around");}else if(t=="both"){g.replaceSelection(l+r,null);g.execCommand("goCharLeft");}else if(t=="addFour"){g.replaceSelection(l+l+l+l,"before");g.execCommand("goCharRight");}});};if(l!=r)m["'"+r+"'"]=function(g){var h=g.listSelections();for(var i=0;i<h.length;i++){var j=h[i];if(!j.empty()||g.getRange(j.head,P(j.head.line,j.head.ch+1))!=r)return C.Pass;}g.execCommand("goCharRight");};})(p.charAt(i),p.charAt(i+1));return m;}function d(p){return function(f){if(f.getOption("disableInput"))return C.Pass;var r=f.listSelections();for(var i=0;i<r.length;i++){if(!r[i].empty())return C.Pass;var g=c(f,r[i].head);if(!g||p.indexOf(g)%2!=0)return C.Pass;}f.operation(function(){f.replaceSelection("\n\n",null);f.execCommand("goCharLeft");r=f.listSelections();for(var i=0;i<r.length;i++){var l=r[i].head.line;f.indentLine(l,null,true);f.indentLine(l+1,null,true);}});};}});
