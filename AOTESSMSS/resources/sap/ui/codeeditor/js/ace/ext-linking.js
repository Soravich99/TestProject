ace.define("ace/ext/linking",["require","exports","module","ace/editor","ace/config"],function(r,a,m){var E=r("ace/editor").Editor;r("../config").defineOptions(E.prototype,"editor",{enableLinking:{set:function(v){if(v){this.on("click",b);this.on("mousemove",o);}else{this.off("click",b);this.off("mousemove",o);}},value:false}});a.previousLinkingHover=false;function o(e){var c=e.editor;var d=e.getAccelKey();if(d){var c=e.editor;var f=e.getDocumentPosition();var s=c.session;var t=s.getTokenAt(f.row,f.column);if(a.previousLinkingHover&&a.previousLinkingHover!=t){c._emit("linkHoverOut");}c._emit("linkHover",{position:f,token:t});a.previousLinkingHover=t;}else if(a.previousLinkingHover){c._emit("linkHoverOut");a.previousLinkingHover=false;}}function b(e){var c=e.getAccelKey();var d=e.getButton();if(d==0&&c){var f=e.editor;var g=e.getDocumentPosition();var s=f.session;var t=s.getTokenAt(g.row,g.column);f._emit("linkClick",{position:g,token:t});}}});(function(){ace.require(["ace/ext/linking"],function(){});})();
