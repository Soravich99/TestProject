this["RulesAPI_Ast"]=(function(m){var i={};function _(a){if(i[a])return i[a].exports;var b=i[a]={exports:{},id:a,loaded:false};m[a].call(b.exports,b,b.exports,_);b.loaded=true;return b.exports;}_.m=m;_.c=i;_.p="";return _(0);})([function(m,e,_){var a=_(1);var b=_(2);var A={};A.astNodes=a;A.astOperations=b;m.exports=A;},function(m,e){(function(){var B={Number:"Number",String:"String",TimeSpan:"TimeSpan",Timestamp:"Timestamp",Boolean:"Boolean",Date:"Date",Time:"Time",NA:"NA",unknown:"unknown"};function d(n,s){var o=JSON.parse(s);var p=o.kind+'Node';var q=new n[p]();q.deserialize(o,n);return q;}function A(n){this.kind=n;this.children=[];this.syntaxBox=[];this.parent=null;}A.prototype.getKind=function getKind(){return this.kind;};A.prototype.setParent=function setParent(p){this.parent=p;};A.prototype.getStartOffset=function getStartOffset(){return this.children[0].getStartOffset();};A.prototype.getEndOffset=function getEndOffset(){return this.children[this.children.length-1].getEndOffset();};A.prototype.addChild=function addChild(n){n.setParent(this);this.children.push(n);};A.prototype.addToSyntaxBox=function addToSyntaxBox(t){this.syntaxBox.push(t);};A.prototype.serializeProps=function serializeProps(p){return"";};A.prototype.accept=function accept(v,n){v.visit(this,n);};A.prototype.equal=function equal(n){var o=0;var p=this.kind===n.kind&&this.children.length===n.children.length;while(p&&o<this.children.length){p=this.children[o].equal(n.children[o]);o++;}return p;};A.prototype.serialize=function serialize(){var s='{ "kind": "'+this.kind.slice(0,-4)+'"';s+=this.serializeProps(",");if(this.children.length>0){s+=', '+this.serializeChildren();}if(this.syntaxBox.length>0){s=s+','+'"syntaxBox": [';var n=0;for(n=0;n<this.syntaxBox.length;n++){if(n>0){s+=',';}s+='{';s=s+'"endColumn": '+this.syntaxBox[n].endColumn;s=s+','+'"endLine": '+this.syntaxBox[n].endLine;s=s+','+'"image": "'+this.syntaxBox[n].image+'"';s=s+','+'"startColumn": '+this.syntaxBox[n].startColumn;s=s+','+'"startLine": '+this.syntaxBox[n].startLine;s=s+','+'"startOffset": '+this.syntaxBox[n].startOffset;s+='}';}s+=']';}s+='}';s=s.replace(/\n/g,"\\n");return s;};A.prototype.serializeChildren=function serializeChildren(){var s='"children": [';var n=0;for(n=0;n<this.children.length;n++){if(n>0){s+=',';}s+=(this.children[n].serialize());}s+=']';return s;};A.prototype.deserializeProps=function deserializeProps(n,o){this.kind=n.kind+'Node';};A.prototype.deserialize=function d(n,o){this.deserializeProps(n);var p=0;if(n.hasOwnProperty('children')){for(p=0;p<n.children.length;p++){var q=n.children[p].kind+'Node';var r=new o[q]();r.deserialize(n.children[p],o);this.addChild(r);}}if(this instanceof b){this.resolveBusinessType();}if(n.hasOwnProperty('syntaxBox')&&n.syntaxBox.length>0){for(p=0;p<n.syntaxBox.length;p++){var t={};t.endColumn=n.syntaxBox[p].endColumn;t.endLine=n.syntaxBox[p].endLine;t.image=n.syntaxBox[p].image;t.startColumn=n.syntaxBox[p].startColumn;t.startLine=n.syntaxBox[p].startLine;t.startOffset=n.syntaxBox[p].startOffset;this.addToSyntaxBox(t);}}};function a(){A.call(this,'AbsenceNode');this.text="Absence";}a.prototype=Object.create(A.prototype);a.prototype.constructor=a;a.prototype.serializeProps=function serializeProps(p){var s=p+'"text": "'+this.text+'"';return s;};a.prototype.deserializeProps=function deserializeProps(n){A.prototype.deserializeProps.call(this,n);this.text=n.text;};a.prototype.equal=function equal(n){return n instanceof a&&A.prototype.equal.call(this,n);};function C(){A.call(this,'ConnectorNode');this.text="Connector";}C.prototype=Object.create(A.prototype);C.prototype.constructor=C;C.prototype.serializeProps=function serializeProps(p){var s=p+'"text": "'+this.text+'"';return s;};C.prototype.deserializeProps=function deserializeProps(n){A.prototype.deserializeProps.call(this,n);this.text=n.text;};C.prototype.equal=function equal(n){return n instanceof C&&A.prototype.equal.call(this,n);};function b(n){A.call(this,n);this.isCollection=false;this.businessType=B.unknown;}b.prototype=Object.create(A.prototype);b.prototype.constructor=b;b.prototype.getBusinessType=function getBusinessType(){var n={};if(this.businessType===B.unknown){this.resolveBusinessType();}n.type=this.businessType;n.isCollection=this.isCollection;return n;};b.prototype.deserializeProps=function deserializeProps(n){A.prototype.deserializeProps.call(this,n);this.isCollection=false;this.businessType=B.unknown;};b.prototype.equal=function equal(n){return A.prototype.equal.call(this,n);};b.prototype.resolveBusinessType=function resolveBusinessType(){};function L(n){b.call(this,'LogicalExprNode');this.operator=n;this.businessType=B.Boolean;}L.prototype=Object.create(b.prototype);L.prototype.constructor=L;L.operator={and:'and',or:'or'};L.prototype.serializeProps=function serializeProps(p){var s=p+'"operator": "'+this.operator+'"';return s;};L.prototype.deserializeProps=function deserializeProps(n){b.prototype.deserializeProps.call(this,n);this.operator=n.operator;};L.prototype.equal=function equal(n){return n instanceof L&&this.operator===n.operator&&b.prototype.equal.call(this,n);};function R(r){b.call(this,'RelationalExprNode');this.operator=r;this.businessType=B.Boolean;}R.prototype=Object.create(b.prototype);R.prototype.constructor=R;R.operator={isLess:'isLess',isGreater:'isGreater',isEqual:'isEqual',isNotEqual:'isNotEqual',isLessEqual:'isLessEqual',isGreaterEqual:'isGreaterEqual'};R.prototype.serializeProps=function serializeProps(p){var s=p+'"operator": "'+this.operator+'"';return s;};R.prototype.deserializeProps=function deserializeProps(n){b.prototype.deserializeProps.call(this,n);this.operator=n.operator;};R.prototype.equal=function equal(n){return n instanceof R&&this.operator===n.operator&&b.prototype.equal.call(this,n);};function c(o){b.call(this,'BinaryExprNode');this.operator=o;}c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.operator={plus:'plus',minus:'minus',mult:'mult',div:'div'};c.prototype.serializeProps=function serializeProps(p){var s=p+'"operator": "'+this.operator+'"';return s;};c.prototype.deserializeProps=function deserializeProps(n){b.prototype.deserializeProps.call(this,n);this.operator=n.operator;};c.prototype.equal=function equal(n){return n instanceof c&&this.operator===n.operator&&b.prototype.equal.call(this,n);};c.prototype.resolveBusinessType=function resolveBusinessType(){if(this.operator===c.operator.minus||this.operator===c.operator.plus||this.operator===c.operator.mult||this.operator===c.operator.div){this.businessType=B.Number;}else if(this.operator===c.operator.Plus&&this.children.lenght>0){if(this.children[0].getBusinessType().type===B.String){this.businessType=B.String;}else if(this.children.lenght>0&&this.children[0].getBusinessType().type===B.Number){this.businessType=B.Number;}}};function U(o){b.call(this,'UnaryExprNode');this.operator=o;}U.prototype=Object.create(b.prototype);U.prototype.constructor=U;U.operator={minus:'minus'};U.prototype.getStartOffset=function getStartOffset(){return this.syntaxBox[0].offset;};U.prototype.serializeProps=function serializeProps(p){var s=p+'"operator": "'+this.operator+'"';return s;};U.prototype.deserializeProps=function deserializeProps(n){b.prototype.deserializeProps.call(this,n);this.operator=n.operator;};U.prototype.equal=function equal(n){return n instanceof U&&this.operator===n.operator&&b.prototype.equal.call(this,n);};U.prototype.resolveBusinessType=function resolveBusinessType(){if(this.operator==='Minus'){this.businessType=B.Number;}};function f(n){b.call(this,n);}f.prototype=Object.create(b.prototype);f.prototype.constructor=f;f.prototype.getStartOffset=function getStartOffset(){return this.syntaxBox[0].offset;};f.prototype.equal=function equal(n){return b.prototype.equal.call(this,n);};function g(v,n){f.call(this,'LiteralNode');this.value=v;this.businessType=n;this.isCollection=false;}g.prototype=Object.create(f.prototype);g.prototype.constructor=g;g.prototype.getEndOffset=function getEndOffset(){return this.syntaxBox[this.syntaxBox.length-1].endColumn-1;};g.prototype.serializeProps=function serializeProps(p){var s=p+'"value": "'+this.value+'", '+'"businessType": "'+this.businessType+'"';return s;};g.prototype.deserializeProps=function deserializeProps(n){f.prototype.deserializeProps.call(this,n);this.value=n.value;this.businessType=n.businessType;this.isCollection=false;};g.prototype.equal=function equal(n){return n instanceof g&&this.value===n.value&&this.businessType===n.businessType&&this.isCollection===n.isCollection&&f.prototype.equal.call(this,n);};function h(v,n,o){g.call(this,v,n);this.kind='UOMLiteralNode';this.UOM=o;}h.prototype=Object.create(g.prototype);h.prototype.constructor=h;h.prototype.serializeProps=function serializeProps(p){var s=g.prototype.serializeProps.call(this,p);s=s+p+'"UOM": "'+this.UOM+'"';return s;};h.prototype.deserializeProps=function deserializeProps(n){g.prototype.deserializeProps.call(this,n);this.UOM=n.UOM;};h.prototype.equal=function equal(n){return n instanceof h&&this.UOM===n.UOM&&g.prototype.equal.call(this,n);};function I(n){f.call(this,'IdentifierNode');if(n){this.businessType=n.businessType;this.isCollection=n.isCollection;this.rootObject=n.rootObject;this.attribute=n.attribute;this.associations=n.associations;this.modifiers={};if(n.modifiers){for(var o in n.modifiers){if(n.modifiers.hasOwnProperty(o)){this.modifiers[o]=n.modifiers[o];}}}}else{this.businessType=null;this.isCollection=null;this.rootObject=null;this.attribute=null;this.associations=[];this.modifiers={};}}I.prototype=Object.create(f.prototype);I.prototype.constructor=I;I.prototype.getEndOffset=function getEndOffset(){return this.syntaxBox[this.syntaxBox.length-1].endColumn-1;};I.prototype.serializeProps=function serializeProps(p){var s=p+'"businessType": "'+this.businessType+'"';s=s+','+'"isCollection": '+this.isCollection;s=s+','+'"rootObject": "'+this.rootObject+'"';s=s+','+'"attribute": "'+this.attribute+'"';s=s+','+'"associations": [';var n=0;for(n=0;n<this.associations.length;n++){if(n>0){s+=',';}s=s+'"'+this.associations[n]+'"';}s+=']';s+=','+'"modifiers": {';var n=0;for(var o in this.modifiers){if(n>0){s+=',';}s+='"'+o+'":'+this.modifiers[o];n++;}s+='}';return s;};I.prototype.deserializeProps=function deserializeProps(n){f.prototype.deserializeProps.call(this,n);this.businessType=n.businessType;this.isCollection=n.isCollection;this.rootObject=n.rootObject;this.attribute=n.attribute;var o=0;for(o=0;o<n.associations.length;o++){this.associations.push(n.associations[o]);}for(var p in n.modifiers){this.modifiers[p]=n.modifiers[p];}};I.prototype.equal=function equal(n){var o=n instanceof I&&this.businessType===n.businessType&&this.isCollection===n.isCollection&&this.rootObject===n.rootObject&&this.attribute===n.attribute&&this.modifiers.length===n.modifiers.length&&this.associations.length===n.associations.length&&f.prototype.equal.call(this,n);if(o&&this.modifiers.length>0){for(var p in this.modifiers){o=this.modifiers[p]===n.modifiers[p];if(!o){break;}}}if(o&&this.associations.length>0){var q=0;while(o&&q<this.associations.length){o=this.associations[q]===n.associations[q];q++;}}return o;};function i(n,o){f.call(this,n);this.functionName=o;}i.prototype=Object.create(f.prototype);i.prototype.constructor=i;i.prototype.serializeProps=function serializeProps(p){var s=p+'"functionName": "'+this.functionName+'"';return s;};i.prototype.deserializeProps=function deserializeProps(n){f.prototype.deserializeProps.call(this,n);this.functionName=n.functionName;};i.prototype.equal=function equal(n){return this.functionName===n.functionName&&f.prototype.equal.call(this,n);};function S(n){f.call(this,'StructNode');this.logicalOp=n;this.businessType=B.Boolean;this.isCollection=false;}S.prototype=Object.create(f.prototype);S.prototype.constructor=S;S.prototype.deserializeProps=function deserializeProps(n){f.prototype.deserializeProps.call(this,n);this.logicalOp=n.logicalOp;this.isCollection=false;};S.prototype.equal=function equal(n){return n instanceof S&&this.logicalOp===n.logicalOp&&this.isCollection===n.isCollection&&f.prototype.equal.call(this,n);};function j(){f.call(this,'BracketsExprNode');}j.prototype=Object.create(f.prototype);j.prototype.constructor=j;j.prototype.getBusinessType=function getBusinessType(){if(this.children.length>0){return this.children[0].getBusinessType();}return undefined;};j.prototype.getEndOffset=function getEndOffset(){return this.syntaxBox[this.syntaxBox.length-1].endColumn-1;};j.prototype.resolveBusinessType=function resolveBusinessType(){if(this.children.length>0){this.businessType=this.children[0].getBusinessType().type;this.isCollection=this.children[0].getBusinessType().isCollection;}};j.prototype.equal=function equal(n){return n instanceof j&&f.prototype.equal.call(this,n);};function k(n){i.call(this,'AggFunctionNode',n);}k.prototype=Object.create(i.prototype);k.prototype.constructor=k;k.aggFunction={avg:'avg',sum:'sum',count:'count',countDistinct:'countDistinct',min:'min',max:'max'};k.prototype.resolveBusinessType=function resolveBusinessType(){this.businessType=B.Number;var n=1;for(n=1;n<this.children.length;n++){if(this.children[n]instanceof G){this.isCollection=false;return;}}};k.prototype.equal=function equal(n){return n instanceof k&&i.prototype.equal.call(this,n);};function F(n){i.call(this,'FunctionNode',n);}F.prototype=Object.create(i.prototype);F.prototype.constructor=F;F.functionName={existsIn:'existsIn',notExistsIn:'notExistsIn',isBetween:'isBetween',isNotBetween:'isNotBetween',contains:'contains',notContains:'notContains',startsWith:'startsWith',notStartsWith:'notStartsWith',endsWith:'endsWith',notEndsWith:'notEndsWith',isInTheLast:'isInTheLast',isNotInTheLast:'isNotInTheLast',isInTheNext:'isInTheNext',isNotInTheNext:'isNotInTheNext',isLike:'isLike',isNotLike:'isNotLike',concatenate:'concatenate'};F.prototype.resolveBusinessType=function resolveBusinessType(){this.businessType=B.String;this.isCollection=false;};F.prototype.equal=function equal(n){return n instanceof F&&i.prototype.equal.call(this,n);};function l(){A.call(this,'FilterClauseNode');}l.prototype=Object.create(A.prototype);l.prototype.constructor=l;l.prototype.getStartOffset=function getStartOffset(){return this.syntaxBox[0].offset;};l.prototype.equal=function equal(n){return n instanceof l&&A.prototype.equal.call(this,n);};function G(){A.call(this,'GroupClauseNode');}G.prototype=Object.create(A.prototype);G.prototype.constructor=G;G.prototype.getStartOffset=function getStartOffset(){return this.syntaxBox[0].offset;};G.prototype.equal=function equal(n){return n instanceof G&&A.prototype.equal.call(this,n);};function O(o){A.call(this,'OrderClauseNode');this.orderOption=o;}O.prototype=Object.create(A.prototype);O.prototype.constructor=O;O.prototype.getStartOffset=function getStartOffset(){return this.syntaxBox[0].offset;};O.prototype.serializeProps=function serializeProps(p){var s=p+'"orderOption": "'+this.orderOption+'"';return s;};O.prototype.deserializeProps=function deserializeProps(n){A.prototype.deserializeProps.call(this,n);this.orderOption=n.orderOption;};O.prototype.equal=function equal(n){return n instanceof O&&this.orderOption===n.orderOption&&A.prototype.equal.call(this,n);};m.exports.ASTNode=A;m.exports.AbsenceNode=a;m.exports.ConnectorNode=C;m.exports.BaseExprNode=b;m.exports.LogicalExprNode=L;m.exports.RelationalExprNode=R;m.exports.BinaryExprNode=c;m.exports.UnaryExprNode=U;m.exports.BaseExprElementNode=f;m.exports.LiteralNode=g;m.exports.UOMLiteralNode=h;m.exports.IdentifierNode=I;m.exports.BaseExprFunctionNode=i;m.exports.StructNode=S;m.exports.BracketsExprNode=j;m.exports.FunctionNode=F;m.exports.FilterClauseNode=l;m.exports.AggFunctionNode=k;m.exports.GroupClauseNode=G;m.exports.BusinessDataType=B;m.exports.deserialize=d;m.exports.deserialize=function(n){return d(m.exports,n);};}());},function(m,e,_){(function(){var a=_(1);function b(t,f){return t!==null&&f!==null&&t.equal(f);}function c(t,f){if(t&&f&&t.getKind()===f.getKind()&&t.hasOwnProperty('operator')&&f.hasOwnProperty('operator')&&t.operator===f.operator)return true;return false;}function g(t,f){var p=-1;if(c(t,f)&&t.children.length>1&&t.children.length>f.children.length){for(var i=0;i<f.children.length;i++){if(t[i].equal(f[i])){p=i;}}}return p;}function s(l,f,o){var h;var i;var A=null;var j=a.deserialize(f.serialize());function k(f){if(f.children.length===0){return f;}return k(f.children[0]);}function n(r,t){var u=null;if(b(r,t)){u=t;}else{if(t.parent){u=n(r,t.parent);}}return u;}function p(r,o,t){var u;var v={};var w=r.parent;r.parent=null;if(o){v.left=r;u=new a.ConnectorNode();if(w){if(w.children.length>0){for(var x=1;x<w.children.length;x++){u.addChild(w.children[x]);}w.children=[];}if(w.parent){u.parent=w.parent;w.parent.children[0]=u;}w.parent=null;}v.operator=w;v.rest=(t===v.operator)?u:t;}else{v.left=r;v.operator=null;u=new a.ConnectorNode();u.parent=w;w.children[0]=u;v.rest=t;}return v;}if(j&&l){h=k(j);i=n(l,h);if(i){A=p(i,o,j);}else{var q=g(j,l);if(q>=0){}}}return A;}function d(o){switch(o){case a.BinaryExprNode.operator.plus:case a.BinaryExprNode.operator.minus:case a.BinaryExprNode.operator.mult:case a.BinaryExprNode.operator.div:return new a.BinaryExprNode(o);case a.LogicalExprNode.operator.and:case a.LogicalExprNode.operator.or:return new a.LogicalExprNode(o);case a.RelationalExprNode.operator.isEqual:case a.RelationalExprNode.operator.isNotEqual:case a.RelationalExprNode.operator.isGreater:case a.RelationalExprNode.operator.isGreaterEqual:case a.RelationalExprNode.operator.isLess:case a.RelationalExprNode.operator.isLessEqual:return new a.RelationalExprNode(o);case a.AggFunctionNode.aggFunction.avg:case a.AggFunctionNode.aggFunction.count:case a.AggFunctionNode.aggFunction.countDistinct:case a.AggFunctionNode.aggFunction.max:case a.AggFunctionNode.aggFunction.min:case a.AggFunctionNode.aggFunction.sum:return new a.AggFunctionNode(o);case a.FunctionNode.functionName.contains:case a.FunctionNode.functionName.notContains:case a.FunctionNode.functionName.endsWith:case a.FunctionNode.functionName.notEndsWith:case a.FunctionNode.functionName.existsIn:case a.FunctionNode.functionName.notExistsIn:case a.FunctionNode.functionName.isBetween:case a.FunctionNode.functionName.isNotBetween:case a.FunctionNode.functionName.isInTheLast:case a.FunctionNode.functionName.isNotInTheLast:case a.FunctionNode.functionName.isInTheNext:case a.FunctionNode.functionName.isNotInTheNext:case a.FunctionNode.functionName.isLike:case a.FunctionNode.functionName.isNotLike:case a.FunctionNode.functionName.startsWith:case a.FunctionNode.functionName.notStartsWith:case a.FunctionNode.functionName.concatenate:return new a.FunctionNode(o);default:return null;}}m.exports.equal=b;m.exports.split=s;m.exports.buildOperator=d;}());}]);
