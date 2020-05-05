ace.define("ace/mode/gcode_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text_highlight_rules").TextHighlightRules;var G=function(){var k=("IF|DO|WHILE|ENDWHILE|CALL|ENDIF|SUB|ENDSUB|GOTO|REPEAT|ENDREPEAT|CALL");var b=("PI");var a=("ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN");var c=this.createKeywordMapper({"support.function":a,"keyword":k,"constant.language":b},"identifier",true);this.$rules={"start":[{token:"comment",regex:"\\(.*\\)"},{token:"comment",regex:"([N])([0-9]+)"},{token:"string",regex:"([G])([0-9]+\\.?[0-9]?)"},{token:"string",regex:"([M])([0-9]+\\.?[0-9]?)"},{token:"constant.numeric",regex:"([-+]?([0-9]*\\.?[0-9]+\\.?))|(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"},{token:c,regex:"[A-Z]"},{token:"keyword.operator",regex:"EQ|LT|GT|NE|GE|LE|OR|XOR"},{token:"paren.lparen",regex:"[\\[]"},{token:"paren.rparen",regex:"[\\]]"},{token:"text",regex:"\\s+"}]};};o.inherits(G,T);e.GcodeHighlightRules=G;});ace.define("ace/mode/gcode",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gcode_highlight_rules","ace/range"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text").Mode;var G=r("./gcode_highlight_rules").GcodeHighlightRules;var R=r("../range").Range;var M=function(){this.HighlightRules=G;this.$behaviour=this.$defaultBehaviour;};o.inherits(M,T);(function(){this.$id="ace/mode/gcode";}).call(M.prototype);e.Mode=M;});
