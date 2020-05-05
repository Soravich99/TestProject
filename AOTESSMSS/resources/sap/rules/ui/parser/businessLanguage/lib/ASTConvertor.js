jQuery.sap.declare("sap.rules.ui.parser.businessLanguage.lib.ASTConvertor");jQuery.sap.require("sap.rules.ui.parser.businessLanguage.lib.constants");jQuery.sap.require("sap.rules.ui.parser.AST.lib.bundleAst");sap.rules.ui.parser.businessLanguage.lib.ASTConvertor=sap.rules.ui.parser.businessLanguage.lib.ASTConvertor||{};sap.rules.ui.parser.businessLanguage.lib.ASTConvertor.lib=(function(){var p=sap.rules.ui.parser.businessLanguage.lib.constants.lib;var b=RulesAPI_Ast;var a=b.astNodes;var A="all";var E="exists in";var N="not exists in";var B="between";var c="not between";d.operatorsMap={'+':a.BinaryExprNode.operator.plus,'-':a.BinaryExprNode.operator.minus,'*':a.BinaryExprNode.operator.mult,'/':a.BinaryExprNode.operator.div,'and':a.LogicalExprNode.operator.and,'or':a.LogicalExprNode.operator.or,'=':a.RelationalExprNode.operator.isEqual,'is equal to':a.RelationalExprNode.operator.isEqual,'!=':a.RelationalExprNode.operator.isNotEqual,'is not equal to':a.RelationalExprNode.operator.isNotEqual,'>':a.RelationalExprNode.operator.isGreater,'is greater than':a.RelationalExprNode.operator.isGreater,'>=':a.RelationalExprNode.operator.isGreaterEqual,'is greater equal than':a.RelationalExprNode.operator.isGreaterEqual,'<':a.RelationalExprNode.operator.isLess,'is less than':a.RelationalExprNode.operator.isLess,'<=':a.RelationalExprNode.operator.isLessEqual,'is less equal than':a.RelationalExprNode.operator.isLessEqual,'average':a.AggFunctionNode.aggFunction.avg,'count':a.AggFunctionNode.aggFunction.count,'count distinct':a.AggFunctionNode.aggFunction.countDistinct,'max':a.AggFunctionNode.aggFunction.max,'min':a.AggFunctionNode.aggFunction.min,'sum':a.AggFunctionNode.aggFunction.sum,'contains':a.FunctionNode.functionName.contains,'not contains':a.FunctionNode.functionName.notContains,'ends':a.FunctionNode.functionName.endsWith,'not ends':a.FunctionNode.functionName.notEndsWith,'exists in':a.FunctionNode.functionName.existsIn,'not exists in':a.FunctionNode.functionName.notExistsIn,'between':a.FunctionNode.functionName.isBetween,'not between':a.FunctionNode.functionName.isNotBetween,'is in the last':a.FunctionNode.functionName.isInTheLast,'is not in the last':a.FunctionNode.functionName.isNotInTheLast,'is in the next':a.FunctionNode.functionName.isInTheNext,'is not in the next':a.FunctionNode.functionName.isNotInTheNext,'is like':a.FunctionNode.functionName.isLike,'is not like':a.FunctionNode.functionName.isNotLike,'starts':a.FunctionNode.functionName.startsWith,'not starts':a.FunctionNode.functionName.notStartsWith,'concatenate':a.FunctionNode.functionName.concatenate};function d(o){var h;var e;var f;var g;var j;var k;var l;var m;var n;var q;this.newAST={};this.lastAggrNode=null;function r(i,M,O){if(O){return new a.UOMLiteralNode(O.value,i,O.constant);}return new a.LiteralNode(M,i);}function s(i){var M=null;if(i.hasOwnProperty("getCompoundValue")){M=i.getCompoundValue();}return M;}function t(i){var M=i.getValue();var O=i.getValueType();var P=s(i);return r.call(this,O,M,P);}function u(i){var M={};M.businessType=i.getAttributeType();M.isCollection=i.getIsCollection();M.rootObject=i.getRootObject();M.attribute=i.getAttribute();M.associations=i.getAssociationsArray();M.modifiers=i.getModifiers();return M;}function v(i){var M=null;var O=u(i);M=new a.IdentifierNode(O);return M;}function w(M,O){var i;var P=[];var Q;var R=null;P.push(O);for(i=0;i<M.valuesArray.length;i++){Q=M.valuesArray[i];R=g.call(this,Q);P.push(R);}return P;}function x(i,M,O){var P=null;if(O&&O.value){switch(O.value){case N:case E:case B:case c:P=w.call(this,i,M);break;}}return P;}function y(i,M,O){var P=null;var Q=i.getType();if(Q===p.objectNamesEnum.setOfValues){P=x.call(this,i,M,O);}return P;}function z(i){var M;var O=false;M=i.getType();if(M===p.objectNamesEnum.setOfValues){O=true;}return O;}function C(i){var M=null;if(i.hasOwnProperty("getQuantity")===true&&i.getQuantity()!==null){M=t.call(this,i.getQuantity());}return M;}function D(M){var i;var O=null;var P=[];if(M.hasOwnProperty("getGroupByArray")&&M.getGroupByArray()!==null){O=new a.GroupClauseNode();P=M.getGroupByArray();for(i=0;i<P.length;i++){O.addChild(v.call(this,P[i]));}}return O;}function F(i){var M=null;var O=null;if(i.hasOwnProperty("getOrderBy")===true&&i.getOrderBy()!==null){O=v.call(this,i.getOrderBy());}if(O){if(i.hasOwnProperty("getOperator")&&i.getOperator()!==null){M=new a.OrderClauseNode(i.getOperator().getOriginalValue());}else{M=new a.OrderClauseNode(null);}M.addChild(O);}return M;}function G(i,M){var O=null;var P=null;var Q=null;var R=null;var S=null;O=v.call(this,i.getNavigationPredicateDetails());this.lastAggrNode.addChild(O);if(i.hasOwnProperty("getFilterClause")){P=new a.FilterClauseNode();P.addChild(e.call(this,i.getFilterClause()));O.addChild(P);}if(M!==null){Q=D.call(this,M);if(Q){this.lastAggrNode.addChild(Q);}S=F.call(this,M);if(S){O.addChild(S);}R=C.call(this,M);if(R){O.addChild(R);}}return this.lastAggrNode;}function H(i){var M;var O=null;if(i!==null){M=i.getType();if(i.hasOwnProperty("getOriginalValue")){O=i.getOriginalValue().toLowerCase();}else{if(M===p.objectNamesEnum.collectionOperatorOption){O="collect";}else if(i.getAggregationOperator().getValue()!==A){O=i.getAggregationOperator().getValue().toLowerCase();}}}return O;}k=function(i){var M=null;var O=null;var P=null;var Q=null;var R=null;var S=null;var T=null;var U;if(i.hasOwnProperty("getAggregationOption")){T=i.getAggregationOption();S=H(T);if(S!==null){Q=new a.AggFunctionNode(d.operatorsMap[S]);this.lastAggrNode=Q;}}if((S===null||S==="collect")&&(i.hasOwnProperty("getSelection")&&i.getSelection()!==null)){U=i.getSelection();}else{if(i.hasOwnProperty("getCompoundSelection")&&i.getCompoundSelection()!==null){M=k.call(this,i.getCompoundSelection());if(Q&&!(M instanceof a.AggFunctionNode)){Q.addChild(M);return Q;}return M;}U=i.getSelection();}if(U.hasOwnProperty("getFilterClause")||(T!==null&&T.hasOwnProperty("getGroupByArray")&&T.getGroupByArray()!==null)){return G.call(this,U,T);}R=v.call(this,U.getNavigationPredicateDetails());if(Q){Q.addChild(R);}if(T!==null&&R){P=F.call(this,T);O=C.call(this,T);if(P){R.addChild(P);}if(O){R.addChild(O);}}if(Q){return Q;}return R;};j=function(i){var M=i.getType();var O=null;switch(M){case p.objectNamesEnum.simpleSelection:O=t.call(this,i);break;case p.objectNamesEnum.compoundSelection:O=k.call(this,i,null);break;}return O;};g=function(M){var O=0;var P=null;var Q;var R;var i=0;var S;if(Array.isArray(M.selectionsArray)){O=M.selectionsArray.length;S=M.selectionsArray[i].getType();if(S===p.objectNamesEnum.selectionClause){Q=g.call(this,M.selectionsArray[i]);i++;}else if(S===p.objectNamesEnum.advanceFunction){Q=n.call(this,M.selectionsArray[i]);i++;}else{Q=j.call(this,M.selectionsArray[i]);i++;}while(i<O){P={};P.value=M.selectionsArray[i].getValue().trim();P.type=M.selectionsArray[i].getType();i++;S=M.selectionsArray[i].getType();if(S===p.objectNamesEnum.selectionClause){R=g.call(this,M.selectionsArray[i]);i++;}else{R=j.call(this,M.selectionsArray[i]);i++;}Q=l.call(this,Q,R,P);}return Q;}return null;};var I=function I(i){return(i==='>'||i==='<'||i==='='||i==='!='||i==='>='||i==='<=');};l=function l(M,O,P){var Q;var i;if(P&&P.type&&P.value){if(P.type===p.objectNamesEnum.arithmeticOperator){if(M!==null&&O!==null){Q=new a.BinaryExprNode(d.operatorsMap[P.value]);}else{if(M===null&&O!==null){Q=new a.UnaryExprNode(d.operatorsMap[P.value]);}}}else if(P.type===p.objectNamesEnum.advanceFunction){Q=new a.FunctionNode(d.operatorsMap[P.value]);}else if(P.type===p.objectNamesEnum.operatorOption){if(I(P.value)){Q=new a.RelationalExprNode(d.operatorsMap[P.value]);}else{Q=new a.FunctionNode(d.operatorsMap[P.value]);}}else{Q=new a.LogicalExprNode(d.operatorsMap[P.value]);}}if(M!==null){if(Q){if(Array.isArray(M)){for(i=0;i<M.length;i++){Q.addChild(M[i]);}}else{Q.addChild(M);}}else{return M;}}if(O!==null){if(Q){if(Array.isArray(O)){for(i=0;i<O.length;i++){Q.addChild(O[i]);}}else{Q.addChild(O);}}else{return O;}}return Q;};f=function f(i){var M=null,O=null;var P=null,Q=null;var R=null;if(i.hasOwnProperty("getSelectionOperator")){R={};R.value=i.getSelectionOperator().getValue().trim();R.type=i.getSelectionOperator().getType();}O=i.getLeftSelectionClause();Q=g.call(this,O);if(i.hasOwnProperty("getRightSelectionClause")){M=i.getRightSelectionClause();if(M.getType()===p.objectNamesEnum.complexStatement){P=new a.BracketsExprNode();P.addChild(e.call(this,M.getModel()));}else if(z(M)){Q=y.call(this,M,Q,R);}else{P=g.call(this,M);}}return l.call(this,Q,P,R);};h=function h(i){var M=i.getType();var O=null;var P=null;var Q=null;switch(M){case p.objectNamesEnum.simpleStatement:O=f.call(this,i);break;case p.objectNamesEnum.complexStatement:P=m.call(this,i.getModel().statementsArray,Q);O=new a.BracketsExprNode();O.addChild(P);break;}return O;};var J=function handleLogicalStatements(M,O){var i;var P=[];var Q=null;var R=null;var S=null;var T=[];for(i=1;i<O.length;i=i+2){R=Q?Q.value:null;Q={};Q.value=O[i].getValue().trim();Q.type=O[i].getType();S=h.call(this,O[i+1]);if(Q.value===p.STATEMENT_OPERATOR.OR.string){P.push(M);M=S;}else if(Q.value===p.STATEMENT_OPERATOR.AND.string){if(R===null||Q.value!==R){T=[];T.push(M);T.push(S);M=T;}else{M.push(S);}}}if(P.length===0&&Array.isArray(M)&&M.length>0){P.push(M);}return P;};var K=function K(i){var M=new a.LogicalExprNode(d.operatorsMap[p.STATEMENT_OPERATOR.AND.string]);var O;for(O=0;O<i.length;O++){M.addChild(i[O]);}return M;};var L=function L(i){var M;var O;var P=i.length;var Q=null;if(P>1){Q=new a.LogicalExprNode(d.operatorsMap[p.STATEMENT_OPERATOR.OR.string]);for(M=0;M<P;M++){if(Array.isArray(i[M])){O=K.call(this,i[M]);Q.addChild(O);}else{Q.addChild(i[M]);}}}else{if(Array.isArray(i[0])){O=K.call(this,i[0]);Q=O;}}return Q;};m=function m(i,M){var O=0;var P=null;var Q=[];if(Array.isArray(i)){O=i.length;P=h.call(this,i[0]);if(O>1){Q=J.call(this,P,i);P=L.call(this,Q);}}return P;};q=function q(M){var i;var O=[];var P;var Q=null;for(i=0;i<M.length;i++){P=M[i];Q=g.call(this,P);O.push(Q);}return O;};n=function n(i){var M=i.params;var O=q.call(this,M);var P={};P.value=i.getName();P.type=i.getType();return l.call(this,O,null,P);};e=function e(i){return m.call(this,i.statementsArray,null);};this.newAST=o?e.call(this,o):null;}d.prototype.getSerializeAST=function getSerializeAST(){var s;s=this.newAST?this.newAST.serialize():"";return s;};d.prototype.getAST=function getAST(){return this.newAST;};return{ASTConvertor:d};}());
