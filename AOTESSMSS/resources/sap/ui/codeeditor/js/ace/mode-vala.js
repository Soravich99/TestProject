ace.define("ace/mode/vala_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text_highlight_rules").TextHighlightRules;var V=function(){this.$rules={start:[{token:['meta.using.vala','keyword.other.using.vala','meta.using.vala','storage.modifier.using.vala','meta.using.vala','punctuation.terminator.vala'],regex:'^(\\s*)(using)\\b(?:(\\s*)([^ ;$]+)(\\s*)((?:;)?))?'},{include:'#code'}],'#all-types':[{include:'#primitive-arrays'},{include:'#primitive-types'},{include:'#object-types'}],'#annotations':[{token:['storage.type.annotation.vala','punctuation.definition.annotation-arguments.begin.vala'],regex:'(@[^ (]+)(\\()',push:[{token:'punctuation.definition.annotation-arguments.end.vala',regex:'\\)',next:'pop'},{token:['constant.other.key.vala','text','keyword.operator.assignment.vala'],regex:'(\\w*)(\\s*)(=)'},{include:'#code'},{token:'punctuation.seperator.property.vala',regex:','},{defaultToken:'meta.declaration.annotation.vala'}]},{token:'storage.type.annotation.vala',regex:'@\\w*'}],'#anonymous-classes-and-new':[{token:'keyword.control.new.vala',regex:'\\bnew\\b',push_disabled:[{token:'text',regex:'(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)',TODO:'FIXME: regexp doesn\'t have js equivalent',originalRegex:'(?<=\\)|\\])(?!\\s*{)|(?<=})|(?=;)',next:'pop'},{token:['storage.type.vala','text'],regex:'(\\w+)(\\s*)(?=\\[)',push:[{token:'text',regex:'}|(?=;|\\))',next:'pop'},{token:'text',regex:'\\[',push:[{token:'text',regex:'\\]',next:'pop'},{include:'#code'}]},{token:'text',regex:'{',push:[{token:'text',regex:'(?=})',next:'pop'},{include:'#code'}]}]},{token:'text',regex:'(?=\\w.*\\()',push:[{token:'text',regex:'(?<=\\))',TODO:'FIXME: regexp doesn\'t have js equivalent',originalRegex:'(?<=\\))',next:'pop'},{include:'#object-types'},{token:'text',regex:'\\(',push:[{token:'text',regex:'\\)',next:'pop'},{include:'#code'}]}]},{token:'meta.inner-class.vala',regex:'{',push:[{token:'meta.inner-class.vala',regex:'}',next:'pop'},{include:'#class-body'},{defaultToken:'meta.inner-class.vala'}]}]}],'#assertions':[{token:['keyword.control.assert.vala','meta.declaration.assertion.vala'],regex:'\\b(assert|requires|ensures)(\\s)',push:[{token:'meta.declaration.assertion.vala',regex:'$',next:'pop'},{token:'keyword.operator.assert.expression-seperator.vala',regex:':'},{include:'#code'},{defaultToken:'meta.declaration.assertion.vala'}]}],'#class':[{token:'meta.class.vala',regex:'(?=\\w?[\\w\\s]*(?:class|(?:@)?interface|enum|struct|namespace)\\s+\\w+)',push:[{token:'paren.vala',regex:'}',next:'pop'},{include:'#storage-modifiers'},{include:'#comments'},{token:['storage.modifier.vala','meta.class.identifier.vala','entity.name.type.class.vala'],regex:'(class|(?:@)?interface|enum|struct|namespace)(\\s+)([\\w\\.]+)'},{token:'storage.modifier.extends.vala',regex:':',push:[{token:'meta.definition.class.inherited.classes.vala',regex:'(?={|,)',next:'pop'},{include:'#object-types-inherited'},{include:'#comments'},{defaultToken:'meta.definition.class.inherited.classes.vala'}]},{token:['storage.modifier.implements.vala','meta.definition.class.implemented.interfaces.vala'],regex:'(,)(\\s)',push:[{token:'meta.definition.class.implemented.interfaces.vala',regex:'(?=\\{)',next:'pop'},{include:'#object-types-inherited'},{include:'#comments'},{defaultToken:'meta.definition.class.implemented.interfaces.vala'}]},{token:'paren.vala',regex:'{',push:[{token:'paren.vala',regex:'(?=})',next:'pop'},{include:'#class-body'},{defaultToken:'meta.class.body.vala'}]},{defaultToken:'meta.class.vala'}],comment:'attempting to put namespace in here.'}],'#class-body':[{include:'#comments'},{include:'#class'},{include:'#enums'},{include:'#methods'},{include:'#annotations'},{include:'#storage-modifiers'},{include:'#code'}],'#code':[{include:'#comments'},{include:'#class'},{token:'text',regex:'{',push:[{token:'text',regex:'}',next:'pop'},{include:'#code'}]},{include:'#assertions'},{include:'#parens'},{include:'#constants-and-special-vars'},{include:'#anonymous-classes-and-new'},{include:'#keywords'},{include:'#storage-modifiers'},{include:'#strings'},{include:'#all-types'}],'#comments':[{token:'punctuation.definition.comment.vala',regex:'/\\*\\*/'},{include:'text.html.javadoc'},{include:'#comments-inline'}],'#comments-inline':[{token:'punctuation.definition.comment.vala',regex:'/\\*',push:[{token:'punctuation.definition.comment.vala',regex:'\\*/',next:'pop'},{defaultToken:'comment.block.vala'}]},{token:['text','punctuation.definition.comment.vala','comment.line.double-slash.vala'],regex:'(\\s*)(//)(.*$)'}],'#constants-and-special-vars':[{token:'constant.language.vala',regex:'\\b(?:true|false|null)\\b'},{token:'variable.language.vala',regex:'\\b(?:this|base)\\b'},{token:'constant.numeric.vala',regex:'\\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\\.?[0-9]*|\\.[0-9]+)(?:(?:e|E)(?:\\+|-)?[0-9]+)?)(?:[LlFfUuDd]|UL|ul)?\\b'},{token:['keyword.operator.dereference.vala','constant.other.vala'],regex:'((?:\\.)?)\\b([A-Z][A-Z0-9_]+)(?!<|\\.class|\\s*\\w+\\s*=)\\b'}],'#enums':[{token:'text',regex:'^(?=\\s*[A-Z0-9_]+\\s*(?:{|\\(|,))',push:[{token:'text',regex:'(?=;|})',next:'pop'},{token:'constant.other.enum.vala',regex:'\\w+',push:[{token:'meta.enum.vala',regex:'(?=,|;|})',next:'pop'},{include:'#parens'},{token:'text',regex:'{',push:[{token:'text',regex:'}',next:'pop'},{include:'#class-body'}]},{defaultToken:'meta.enum.vala'}]}]}],'#keywords':[{token:'keyword.control.catch-exception.vala',regex:'\\b(?:try|catch|finally|throw)\\b'},{token:'keyword.control.vala',regex:'\\?|:|\\?\\?'},{token:'keyword.control.vala',regex:'\\b(?:return|break|case|continue|default|do|while|for|foreach|switch|if|else|in|yield|get|set|value)\\b'},{token:'keyword.operator.vala',regex:'\\b(?:typeof|is|as)\\b'},{token:'keyword.operator.comparison.vala',regex:'==|!=|<=|>=|<>|<|>'},{token:'keyword.operator.assignment.vala',regex:'='},{token:'keyword.operator.increment-decrement.vala',regex:'\\-\\-|\\+\\+'},{token:'keyword.operator.arithmetic.vala',regex:'\\-|\\+|\\*|\\/|%'},{token:'keyword.operator.logical.vala',regex:'!|&&|\\|\\|'},{token:'keyword.operator.dereference.vala',regex:'\\.(?=\\S)',originalRegex:'(?<=\\S)\\.(?=\\S)'},{token:'punctuation.terminator.vala',regex:';'},{token:'keyword.operator.ownership',regex:'owned|unowned'}],'#methods':[{token:'meta.method.vala',regex:'(?!new)(?=\\w.*\\s+)(?=[^=]+\\()',push:[{token:'paren.vala',regex:'}|(?=;)',next:'pop'},{include:'#storage-modifiers'},{token:['entity.name.function.vala','meta.method.identifier.vala'],regex:'([\\~\\w\\.]+)(\\s*\\()',push:[{token:'meta.method.identifier.vala',regex:'\\)',next:'pop'},{include:'#parameters'},{defaultToken:'meta.method.identifier.vala'}]},{token:'meta.method.return-type.vala',regex:'(?=\\w.*\\s+\\w+\\s*\\()',push:[{token:'meta.method.return-type.vala',regex:'(?=\\w+\\s*\\()',next:'pop'},{include:'#all-types'},{defaultToken:'meta.method.return-type.vala'}]},{include:'#throws'},{token:'paren.vala',regex:'{',push:[{token:'paren.vala',regex:'(?=})',next:'pop'},{include:'#code'},{defaultToken:'meta.method.body.vala'}]},{defaultToken:'meta.method.vala'}]}],'#namespace':[{token:'text',regex:'^(?=\\s*[A-Z0-9_]+\\s*(?:{|\\(|,))',push:[{token:'text',regex:'(?=;|})',next:'pop'},{token:'constant.other.namespace.vala',regex:'\\w+',push:[{token:'meta.namespace.vala',regex:'(?=,|;|})',next:'pop'},{include:'#parens'},{token:'text',regex:'{',push:[{token:'text',regex:'}',next:'pop'},{include:'#code'}]},{defaultToken:'meta.namespace.vala'}]}],comment:'This is not quite right. See the class grammar right now'}],'#object-types':[{token:'storage.type.generic.vala',regex:'\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*<',push:[{token:'storage.type.generic.vala',regex:'>|[^\\w\\s,\\?<\\[()\\]]',TODO:'FIXME: regexp doesn\'t have js equivalent',originalRegex:'>|[^\\w\\s,\\?<\\[(?:[,]+)\\]]',next:'pop'},{include:'#object-types'},{token:'storage.type.generic.vala',regex:'<',push:[{token:'storage.type.generic.vala',regex:'>|[^\\w\\s,\\[\\]<]',next:'pop'},{defaultToken:'storage.type.generic.vala'}],comment:'This is just to support <>\'s with no actual type prefix'},{defaultToken:'storage.type.generic.vala'}]},{token:'storage.type.object.array.vala',regex:'\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*(?=\\[)',push:[{token:'storage.type.object.array.vala',regex:'(?=[^\\]\\s])',next:'pop'},{token:'text',regex:'\\[',push:[{token:'text',regex:'\\]',next:'pop'},{include:'#code'}]},{defaultToken:'storage.type.object.array.vala'}]},{token:['storage.type.vala','keyword.operator.dereference.vala','storage.type.vala'],regex:'\\b(?:([a-z]\\w*)(\\.))*([A-Z]+\\w*\\b)'}],'#object-types-inherited':[{token:'entity.other.inherited-class.vala',regex:'\\b(?:[a-z]\\w*\\.)*[A-Z]+\\w*<',push:[{token:'entity.other.inherited-class.vala',regex:'>|[^\\w\\s,<]',next:'pop'},{include:'#object-types'},{token:'storage.type.generic.vala',regex:'<',push:[{token:'storage.type.generic.vala',regex:'>|[^\\w\\s,<]',next:'pop'},{defaultToken:'storage.type.generic.vala'}],comment:'This is just to support <>\'s with no actual type prefix'},{defaultToken:'entity.other.inherited-class.vala'}]},{token:['entity.other.inherited-class.vala','keyword.operator.dereference.vala','entity.other.inherited-class.vala'],regex:'\\b(?:([a-z]\\w*)(\\.))*([A-Z]+\\w*)'}],'#parameters':[{token:'storage.modifier.vala',regex:'final'},{include:'#primitive-arrays'},{include:'#primitive-types'},{include:'#object-types'},{token:'variable.parameter.vala',regex:'\\w+'}],'#parens':[{token:'text',regex:'\\(',push:[{token:'text',regex:'\\)',next:'pop'},{include:'#code'}]}],'#primitive-arrays':[{token:'storage.type.primitive.array.vala',regex:'\\b(?:bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|int8|int16|int32|int64|uint8|uint16|uint32|uint64)(?:\\[\\])*\\b'}],'#primitive-types':[{token:'storage.type.primitive.vala',regex:'\\b(?:var|bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|signal|int8|int16|int32|int64|uint8|uint16|uint32|uint64)\\b',comment:'var is not really a primitive, but acts like one in most cases'}],'#storage-modifiers':[{token:'storage.modifier.vala',regex:'\\b(?:public|private|protected|internal|static|final|sealed|virtual|override|abstract|readonly|volatile|dynamic|async|unsafe|out|ref|weak|owned|unowned|const)\\b',comment:'Not sure about unsafe and readonly'}],'#strings':[{token:'punctuation.definition.string.begin.vala',regex:'@"',push:[{token:'punctuation.definition.string.end.vala',regex:'"',next:'pop'},{token:'constant.character.escape.vala',regex:'\\\\.|%[\\w\\.\\-]+|\\$(?:\\w+|\\([\\w\\s\\+\\-\\*\\/]+\\))'},{defaultToken:'string.quoted.interpolated.vala'}]},{token:'punctuation.definition.string.begin.vala',regex:'"',push:[{token:'punctuation.definition.string.end.vala',regex:'"',next:'pop'},{token:'constant.character.escape.vala',regex:'\\\\.'},{token:'constant.character.escape.vala',regex:'%[\\w\\.\\-]+'},{defaultToken:'string.quoted.double.vala'}]},{token:'punctuation.definition.string.begin.vala',regex:'\'',push:[{token:'punctuation.definition.string.end.vala',regex:'\'',next:'pop'},{token:'constant.character.escape.vala',regex:'\\\\.'},{defaultToken:'string.quoted.single.vala'}]},{token:'punctuation.definition.string.begin.vala',regex:'"""',push:[{token:'punctuation.definition.string.end.vala',regex:'"""',next:'pop'},{token:'constant.character.escape.vala',regex:'%[\\w\\.\\-]+'},{defaultToken:'string.quoted.triple.vala'}]}],'#throws':[{token:'storage.modifier.vala',regex:'throws',push:[{token:'meta.throwables.vala',regex:'(?={|;)',next:'pop'},{include:'#object-types'},{defaultToken:'meta.throwables.vala'}]}],'#values':[{include:'#strings'},{include:'#object-types'},{include:'#constants-and-special-vars'}]};this.normalizeRules();};V.metaData={comment:'Based heavily on the Java bundle\'s language syntax. TODO:\n* Closures\n* Delegates\n* Properties: Better support for properties.\n* Annotations\n* Error domains\n* Named arguments\n* Array slicing, negative indexes, multidimensional\n* construct blocks\n* lock blocks?\n* regex literals\n* DocBlock syntax highlighting. (Currently importing javadoc)\n* Folding rule for comments.\n',fileTypes:['vala'],foldingStartMarker:'(\\{\\s*(//.*)?$|^\\s*// \\{\\{\\{)',foldingStopMarker:'^\\s*(\\}|// \\}\\}\\}$)',name:'Vala',scopeName:'source.vala'};o.inherits(V,T);e.ValaHighlightRules=V;});ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,e,a){"use strict";var o=r("../../lib/oop");var R=r("../../range").Range;var B=r("./fold_mode").FoldMode;var F=e.FoldMode=function(c){if(c){this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+c.start));this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+c.end));}};o.inherits(F,B);(function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/;this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/;this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/;this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/;this._getFoldWidgetBase=this.getFoldWidget;this.getFoldWidget=function(s,f,b){var l=s.getLine(b);if(this.singleLineBlockCommentRe.test(l)){if(!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";}var c=this._getFoldWidgetBase(s,f,b);if(!c&&this.startRegionRe.test(l))return"start";return c;};this.getFoldWidgetRange=function(s,f,b,c){var l=s.getLine(b);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(s,l,b);var m=l.match(this.foldingStartMarker);if(m){var i=m.index;if(m[1])return this.openingBracketBlock(s,m[1],b,i);var d=s.getCommentFoldRange(b,i+m[0].length,1);if(d&&!d.isMultiLine()){if(c){d=this.getSectionRange(s,b);}else if(f!="all")d=null;}return d;}if(f==="markbegin")return;var m=l.match(this.foldingStopMarker);if(m){var i=m.index+m[0].length;if(m[1])return this.closingBracketBlock(s,m[1],b,i);return s.getCommentFoldRange(b,i,-1);}};this.getSectionRange=function(s,b){var l=s.getLine(b);var c=l.search(/\S/);var d=b;var f=l.length;b=b+1;var g=b;var m=s.getLength();while(++b<m){l=s.getLine(b);var i=l.search(/\S/);if(i===-1)continue;if(c>i)break;var h=this.getFoldWidgetRange(s,"all",b);if(h){if(h.start.row<=d){break;}else if(h.isMultiLine()){b=h.end.row;}else if(c==i){break;}}g=b;}return new R(d,f,g,s.getLine(g).length);};this.getCommentRegionBlock=function(s,l,b){var c=l.search(/\s*$/);var d=s.getLength();var f=b;var g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;var h=1;while(++b<d){l=s.getLine(b);var m=g.exec(l);if(!m)continue;if(m[1])h--;else h++;if(!h)break;}var i=b;if(i>f){return new R(f,c,i,l.length);}};}).call(F.prototype);});ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,e,m){"use strict";var R=r("../range").Range;var M=function(){};(function(){this.checkOutdent=function(l,i){if(!/^\s+$/.test(l))return false;return/^\s*\}/.test(i);};this.autoOutdent=function(d,a){var l=d.getLine(a);var b=l.match(/^(\s*\})/);if(!b)return 0;var c=b[1].length;var o=d.findMatchingBracket({row:a,column:c});if(!o||o.row==a)return 0;var i=this.$getIndent(d.getLine(o.row));d.replace(new R(a,0,a,c-1),i);};this.$getIndent=function(l){return l.match(/^\s*/)[0];};}).call(M.prototype);e.MatchingBraceOutdent=M;});ace.define("ace/mode/vala",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/vala_highlight_rules","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text").Mode;var a=r("../tokenizer").Tokenizer;var V=r("./vala_highlight_rules").ValaHighlightRules;var F=r("./folding/cstyle").FoldMode;var C=r("./behaviour/cstyle").CstyleBehaviour;var b=r("./folding/cstyle").FoldMode;var M=r("./matching_brace_outdent").MatchingBraceOutdent;var c=function(){this.HighlightRules=V;this.$outdent=new M();this.$behaviour=new C();this.foldingRules=new b();};o.inherits(c,T);(function(){this.lineCommentStart="//";this.blockComment={start:"/*",end:"*/"};this.getNextLineIndent=function(s,l,t){var i=this.$getIndent(l);var d=this.getTokenizer().getLineTokens(l,s);var f=d.tokens;var g=d.state;if(f.length&&f[f.length-1].type=="comment"){return i;}if(s=="start"||s=="no_regex"){var h=l.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);if(h){i+=t;}}else if(s=="doc-start"){if(g=="start"||g=="no_regex"){return"";}var h=l.match(/^\s*(\/?)\*/);if(h){if(h[1]){i+=" ";}i+="* ";}}return i;};this.checkOutdent=function(s,l,i){return this.$outdent.checkOutdent(l,i);};this.autoOutdent=function(s,d,f){this.$outdent.autoOutdent(d,f);};this.$id="ace/mode/vala"}).call(c.prototype);e.Mode=c;});
