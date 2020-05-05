ace.define("ace/mode/scheme_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text_highlight_rules").TextHighlightRules;var S=function(){var k="case|do|let|loop|if|else|when";var a="eq?|eqv?|equal?|and|or|not|null?";var c="#t|#f";var s="cons|car|cdr|cond|lambda|lambda*|syntax-rules|format|set!|quote|eval|append|list|list?|member?|load";var b=this.createKeywordMapper({"keyword.control":k,"keyword.operator":a,"constant.language":c,"support.function":s},"identifier",true);this.$rules={"start":[{token:"comment",regex:";.*$"},{"token":["storage.type.function-type.scheme","text","entity.name.function.scheme"],"regex":"(?:\\b(?:(define|define-syntax|define-macro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"},{"token":"punctuation.definition.constant.character.scheme","regex":"#:\\S+"},{"token":["punctuation.definition.variable.scheme","variable.other.global.scheme","punctuation.definition.variable.scheme"],"regex":"(\\*)(\\S*)(\\*)"},{"token":"constant.numeric","regex":"#[xXoObB][0-9a-fA-F]+"},{"token":"constant.numeric","regex":"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?"},{"token":b,"regex":"[a-zA-Z_#][a-zA-Z0-9_\\-\\?\\!\\*]*"},{"token":"string","regex":'"(?=.)',"next":"qqstring"}],"qqstring":[{"token":"constant.character.escape.scheme","regex":"\\\\."},{"token":"string","regex":'[^"\\\\]+',"merge":true},{"token":"string","regex":"\\\\$","next":"qqstring","merge":true},{"token":"string","regex":'"|$',"next":"start","merge":true}]}};o.inherits(S,T);e.SchemeHighlightRules=S;});ace.define("ace/mode/matching_parens_outdent",["require","exports","module","ace/range"],function(r,e,m){"use strict";var R=r("../range").Range;var M=function(){};(function(){this.checkOutdent=function(l,i){if(!/^\s+$/.test(l))return false;return/^\s*\)/.test(i);};this.autoOutdent=function(d,a){var l=d.getLine(a);var b=l.match(/^(\s*\))/);if(!b)return 0;var c=b[1].length;var o=d.findMatchingBracket({row:a,column:c});if(!o||o.row==a)return 0;var i=this.$getIndent(d.getLine(o.row));d.replace(new R(a,0,a,c-1),i);};this.$getIndent=function(l){var a=l.match(/^(\s+)/);if(a){return a[1];}return"";};}).call(M.prototype);e.MatchingParensOutdent=M;});ace.define("ace/mode/scheme",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scheme_highlight_rules","ace/mode/matching_parens_outdent"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text").Mode;var S=r("./scheme_highlight_rules").SchemeHighlightRules;var M=r("./matching_parens_outdent").MatchingParensOutdent;var a=function(){this.HighlightRules=S;this.$outdent=new M();this.$behaviour=this.$defaultBehaviour;};o.inherits(a,T);(function(){this.lineCommentStart=";";this.minorIndentFunctions=["define","lambda","define-macro","define-syntax","syntax-rules","define-record-type","define-structure"];this.$toIndent=function(s){return s.split('').map(function(c){if(/\s/.exec(c)){return c;}else{return' ';}}).join('');};this.$calculateIndent=function(l,t){var b=this.$getIndent(l);var d=0;var c,f;for(var i=l.length-1;i>=0;i--){f=l[i];if(f==='('){d--;c=true;}else if(f==='('||f==='['||f==='{'){d--;c=false;}else if(f===')'||f===']'||f==='}'){d++;}if(d<0){break;}}if(d<0&&c){i+=1;var B=i;var g='';while(true){f=l[i];if(f===' '||f==='\t'){if(this.minorIndentFunctions.indexOf(g)!==-1){return this.$toIndent(l.substring(0,B-1)+t);}else{return this.$toIndent(l.substring(0,i+1));}}else if(f===undefined){return this.$toIndent(l.substring(0,B-1)+t);}g+=l[i];i++;}}else if(d<0&&!c){return this.$toIndent(l.substring(0,i+1));}else if(d>0){b=b.substring(0,b.length-t.length);return b;}else{return b;}};this.getNextLineIndent=function(s,l,t){return this.$calculateIndent(l,t);};this.checkOutdent=function(s,l,i){return this.$outdent.checkOutdent(l,i);};this.autoOutdent=function(s,d,b){this.$outdent.autoOutdent(d,b);};this.$id="ace/mode/scheme";}).call(a.prototype);e.Mode=a;});
