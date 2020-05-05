ace.define("ace/mode/ruby_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text_highlight_rules").TextHighlightRules;var c=e.constantOtherSymbol={token:"constant.other.symbol.ruby",regex:"[:](?:[A-Za-z_]|[@$](?=[a-zA-Z0-9_]))[a-zA-Z0-9_]*[!=?]?"};var q=e.qString={token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"};var a=e.qqString={token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'};var t=e.tString={token:"string",regex:"[`](?:(?:\\\\.)|(?:[^'\\\\]))*?[`]"};var b=e.constantNumericHex={token:"constant.numeric",regex:"0[xX][0-9a-fA-F](?:[0-9a-fA-F]|_(?=[0-9a-fA-F]))*\\b"};var d=e.constantNumericFloat={token:"constant.numeric",regex:"[+-]?\\d(?:\\d|_(?=\\d))*(?:(?:\\.\\d(?:\\d|_(?=\\d))*)?(?:[eE][+-]?\\d+)?)?\\b"};var i=e.instanceVariable={token:"variable.instance",regex:"@{1,2}[a-zA-Z_\\d]+"};var R=function(){var f=("abort|Array|assert|assert_equal|assert_not_equal|assert_same|assert_not_same|"+"assert_nil|assert_not_nil|assert_match|assert_no_match|assert_in_delta|assert_throws|"+"assert_raise|assert_nothing_raised|assert_instance_of|assert_kind_of|assert_respond_to|"+"assert_operator|assert_send|assert_difference|assert_no_difference|assert_recognizes|"+"assert_generates|assert_response|assert_redirected_to|assert_template|assert_select|"+"assert_select_email|assert_select_rjs|assert_select_encoded|css_select|at_exit|"+"attr|attr_writer|attr_reader|attr_accessor|attr_accessible|autoload|binding|block_given?|callcc|"+"caller|catch|chomp|chomp!|chop|chop!|defined?|delete_via_redirect|eval|exec|exit|"+"exit!|fail|Float|flunk|follow_redirect!|fork|form_for|form_tag|format|gets|global_variables|gsub|"+"gsub!|get_via_redirect|host!|https?|https!|include|Integer|lambda|link_to|"+"link_to_unless_current|link_to_function|link_to_remote|load|local_variables|loop|open|open_session|"+"p|print|printf|proc|putc|puts|post_via_redirect|put_via_redirect|raise|rand|"+"raw|readline|readlines|redirect?|request_via_redirect|require|scan|select|"+"set_trace_func|sleep|split|sprintf|srand|String|stylesheet_link_tag|syscall|system|sub|sub!|test|"+"throw|trace_var|trap|untrace_var|atan2|cos|exp|frexp|ldexp|log|log10|sin|sqrt|tan|"+"render|javascript_include_tag|csrf_meta_tag|label_tag|text_field_tag|submit_tag|check_box_tag|"+"content_tag|radio_button_tag|text_area_tag|password_field_tag|hidden_field_tag|"+"fields_for|select_tag|options_for_select|options_from_collection_for_select|collection_select|"+"time_zone_select|select_date|select_time|select_datetime|date_select|time_select|datetime_select|"+"select_year|select_month|select_day|select_hour|select_minute|select_second|file_field_tag|"+"file_field|respond_to|skip_before_filter|around_filter|after_filter|verify|"+"protect_from_forgery|rescue_from|helper_method|redirect_to|before_filter|"+"send_data|send_file|validates_presence_of|validates_uniqueness_of|validates_length_of|"+"validates_format_of|validates_acceptance_of|validates_associated|validates_exclusion_of|"+"validates_inclusion_of|validates_numericality_of|validates_with|validates_each|"+"authenticate_or_request_with_http_basic|authenticate_or_request_with_http_digest|"+"filter_parameter_logging|match|get|post|resources|redirect|scope|assert_routing|"+"translate|localize|extract_locale_from_tld|caches_page|expire_page|caches_action|expire_action|"+"cache|expire_fragment|expire_cache_for|observe|cache_sweeper|"+"has_many|has_one|belongs_to|has_and_belongs_to_many");var k=("alias|and|BEGIN|begin|break|case|class|def|defined|do|else|elsif|END|end|ensure|"+"__FILE__|finally|for|gem|if|in|__LINE__|module|next|not|or|private|protected|public|"+"redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield");var g=("true|TRUE|false|FALSE|nil|NIL|ARGF|ARGV|DATA|ENV|RUBY_PLATFORM|RUBY_RELEASE_DATE|"+"RUBY_VERSION|STDERR|STDIN|STDOUT|TOPLEVEL_BINDING");var h=("$DEBUG|$defout|$FILENAME|$LOAD_PATH|$SAFE|$stdin|$stdout|$stderr|$VERBOSE|"+"$!|root_url|flash|session|cookies|params|request|response|logger|self");var j=this.$keywords=this.createKeywordMapper({"keyword":k,"constant.language":g,"variable.language":h,"support.function":f,"invalid.deprecated":"debugger"},"identifier");this.$rules={"start":[{token:"comment",regex:"#.*$"},{token:"comment",regex:"^=begin(?:$|\\s.*$)",next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},[{regex:"[{}]",onMatch:function(v,s,l){this.next=v=="{"?this.nextState:"";if(v=="{"&&l.length){l.unshift("start",s);return"paren.lparen";}if(v=="}"&&l.length){l.shift();this.next=l.shift();if(this.next.indexOf("string")!=-1)return"paren.end";}return v=="{"?"paren.lparen":"paren.rparen";},nextState:"start"},{token:"string.start",regex:/"/,push:[{token:"constant.language.escape",regex:/\\(?:[nsrtvfbae'"\\]|c.|C-.|M-.(?:\\C-.)?|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4})/},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/"/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/`/,push:[{token:"constant.language.escape",regex:/\\(?:[nsrtvfbae'"\\]|c.|C-.|M-.(?:\\C-.)?|[0-7]{3}|x[\da-fA-F]{2}|u[\da-fA-F]{4})/},{token:"paren.start",regex:/#{/,push:"start"},{token:"string.end",regex:/`/,next:"pop"},{defaultToken:"string"}]},{token:"string.start",regex:/'/,push:[{token:"constant.language.escape",regex:/\\['\\]/},{token:"string.end",regex:/'/,next:"pop"},{defaultToken:"string"}]}],{token:"text",regex:"::"},{token:"variable.instance",regex:"@{1,2}[a-zA-Z_\\d]+"},{token:"support.class",regex:"[A-Z][a-zA-Z_\\d]+"},c,b,d,{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:j,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"punctuation.separator.key-value",regex:"=>"},{stateName:"heredoc",onMatch:function(v,l,s){var n=v[2]=='-'?"indentedHeredoc":"heredoc";var p=v.split(this.splitRegex);s.push(n,p[3]);return[{type:"constant",value:p[1]},{type:"string",value:p[2]},{type:"support.class",value:p[3]},{type:"string",value:p[4]}];},regex:"(<<-?)(['\"`]?)([\\w]+)(['\"`]?)",rules:{heredoc:[{onMatch:function(v,l,s){if(v===s[1]){s.shift();s.shift();this.next=s[0]||"start";return"support.class";}this.next="";return"string";},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^ +"},{onMatch:function(v,l,s){if(v===s[1]){s.shift();s.shift();this.next=s[0]||"start";return"support.class";}this.next="";return"string";},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(l,s){if(s[0]==="heredoc"||s[0]==="indentedHeredoc")return s[0];return l;}},{token:"string.character",regex:"\\B\\?."},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],"comment":[{token:"comment",regex:"^=end(?:$|\\s.*$)",next:"start"},{token:"comment",regex:".+"}]};this.normalizeRules();};o.inherits(R,T);e.RubyHighlightRules=R;});ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,e,m){"use strict";var R=r("../range").Range;var M=function(){};(function(){this.checkOutdent=function(l,i){if(!/^\s+$/.test(l))return false;return/^\s*\}/.test(i);};this.autoOutdent=function(d,a){var l=d.getLine(a);var b=l.match(/^(\s*\})/);if(!b)return 0;var c=b[1].length;var o=d.findMatchingBracket({row:a,column:c});if(!o||o.row==a)return 0;var i=this.$getIndent(d.getLine(o.row));d.replace(new R(a,0,a,c-1),i);};this.$getIndent=function(l){return l.match(/^\s*/)[0];};}).call(M.prototype);e.MatchingBraceOutdent=M;});ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(r,e,m){"use strict";var o=r("../../lib/oop");var B=r("./fold_mode").FoldMode;var R=r("../../range").Range;var F=e.FoldMode=function(){};o.inherits(F,B);(function(){this.getFoldWidgetRange=function(s,f,a){var b=this.indentationBlock(s,a);if(b)return b;var c=/\S/;var l=s.getLine(a);var d=l.search(c);if(d==-1||l[d]!="#")return;var g=l.length;var h=s.getLength();var i=a;var j=a;while(++a<h){l=s.getLine(a);var k=l.search(c);if(k==-1)continue;if(l[k]!="#")break;j=a;}if(j>i){var n=s.getLine(j).length;return new R(i,g,j,n);}};this.getFoldWidget=function(s,f,a){var l=s.getLine(a);var i=l.search(/\S/);var n=s.getLine(a+1);var p=s.getLine(a-1);var b=p.search(/\S/);var c=n.search(/\S/);if(i==-1){s.foldWidgets[a-1]=b!=-1&&b<c?"start":"";return"";}if(b==-1){if(i==c&&l[i]=="#"&&n[i]=="#"){s.foldWidgets[a-1]="";s.foldWidgets[a+1]="";return"start";}}else if(b==i&&l[i]=="#"&&p[i]=="#"){if(s.getLine(a-2).search(/\S/)==-1){s.foldWidgets[a-1]="start";s.foldWidgets[a+1]="";return"";}}if(b!=-1&&b<i)s.foldWidgets[a-1]="start";else s.foldWidgets[a-1]="";if(i<c)return"start";else return"";};}).call(F.prototype);});ace.define("ace/mode/ruby",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ruby_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/coffee"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text").Mode;var R=r("./ruby_highlight_rules").RubyHighlightRules;var M=r("./matching_brace_outdent").MatchingBraceOutdent;var a=r("../range").Range;var C=r("./behaviour/cstyle").CstyleBehaviour;var F=r("./folding/coffee").FoldMode;var b=function(){this.HighlightRules=R;this.$outdent=new M();this.$behaviour=new C();this.foldingRules=new F();};o.inherits(b,T);(function(){this.lineCommentStart="#";this.getNextLineIndent=function(s,l,t){var i=this.$getIndent(l);var c=this.getTokenizer().getLineTokens(l,s);var d=c.tokens;if(d.length&&d[d.length-1].type=="comment"){return i;}if(s=="start"){var f=l.match(/^.*[\{\(\[]\s*$/);var g=l.match(/^\s*(class|def|module)\s.*$/);var h=l.match(/.*do(\s*|\s+\|.*\|\s*)$/);var j=l.match(/^\s*(if|else|when)\s*/);if(f||g||h||j){i+=t;}}return i;};this.checkOutdent=function(s,l,i){return/^\s+(end|else)$/.test(l+i)||this.$outdent.checkOutdent(l,i);};this.autoOutdent=function(s,c,d){var l=c.getLine(d);if(/}/.test(l))return this.$outdent.autoOutdent(c,d);var i=this.$getIndent(l);var p=c.getLine(d-1);var f=this.$getIndent(p);var t=c.getTabString();if(f.length<=i.length){if(i.slice(-t.length)==t)c.remove(new a(d,i.length-t.length,d,i.length));}};this.$id="ace/mode/ruby";}).call(b.prototype);e.Mode=b;});
