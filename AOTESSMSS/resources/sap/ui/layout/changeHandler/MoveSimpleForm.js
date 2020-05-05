/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/fl/changeHandler/JsControlTreeModifier"],function(q,J){"use strict";var M={};M.CHANGE_TYPE_MOVE_FIELD="moveSimpleFormField";M.CHANGE_TYPE_MOVE_GROUP="moveSimpleFormGroup";M.sTypeTitle="sap.ui.core.Title";M.sTypeMTitle="sap.m.Title";M.sTypeToolBar="sap.m.Toolbar";M.sTypeOverflowToolBar="sap.m.OverflowToolbar";M.sTypeLabel="sap.m.Label";M.sTypeSmartLabel="sap.ui.comp.smartfield.SmartLabel";M.CONTENT_AGGREGATION="content";var f=function(o,s,C){for(var i=0;i<C.length;i++){var t=o.getControlType(C[i]);if(s.indexOf(t)===-1){if(o.getVisible(C[i])){return true;}}else{return false;}}};var a=function(o,C,s,p,S){if(f(o,S,C)){var v=p.view;var h=p.appComponent;var i=h.createId(q.sap.uid());var t=o.createControl("sap.ui.core.Title",h,v,i);o.setProperty(t,"text","");o.insertAggregation(s,"content",t,0,v);}return o.getAggregation(s,"content");};var m=function(o,s,C,h){var R;var j=-1;if(f(o,s,C)){j++;}for(var i=0;i<C.length;i++){var t=o.getControlType(C[i]);if(s.indexOf(t)>-1){j++;if(j===h){R=C[i];break;}}}return C.indexOf(R);};var I=function(E,i,o){if(i>=E.length||i===-1){return true;}var t=o.getControlType(E[i]);return(M.sTypeTitle===t||M.sTypeToolBar===t||M.sTypeMTitle===t||M.sTypeOverflowToolBar===t);};var b=function(o,h,C,s){var i=0;for(i=h+1;i<C.length;++i){var t=o.getControlType(C[i]);if(s.indexOf(t)>-1){break;}}return i-h;};var g=function(o,E,i){return b(o,i,E,[M.sTypeTitle,M.sTypeMTitle,M.sTypeToolBar,M.sTypeOverflowToolBar,M.sTypeLabel,M.sTypeSmartLabel]);};var c=function(o,C,i,F,u){if(!I(C,i,o)){q.sap.log.error("Illegal argument. iIndex has to point to a Label.");}else{F=u?F+1:F;var h=0;var j=i;var k;while(j<C.length&&h<F){++h;k=g(o,C,j);j+=k;}return j;}};var A=function(s,S,t,T,h){var R=t;for(var i=0;i<h;i++){R.splice(T+i,0,s[S+i]);}return R;};var G=function(h){var R=h.getTitle();if(!R){R=h.getToolbar();}return R;};var d=function(s,h,S,t,p){var o=G(h.element);var i=J.getSelector(s,p.appComponent);var j={elementSelector:J.getSelector(o,p.appComponent),source:{groupIndex:h.sourceIndex},target:{groupIndex:h.targetIndex}};return{changeType:M.CHANGE_TYPE_MOVE_GROUP,targetSelector:i,movedControl:o,movedElements:[j]};};var e=function(s,h,S,t,p){var o=J.getSelector(s,p.appComponent);var l=h.element.getLabel();var L=J.getSelector(l,p.appComponent);var T=G(t.parent);var i=G(S.parent);var j=J.getSelector(T,p.appComponent);var k=J.getSelector(i,p.appComponent);var n={elementSelector:L,source:{groupSelector:k,fieldIndex:h.sourceIndex},target:{groupSelector:j,fieldIndex:h.targetIndex}};return{changeType:M.CHANGE_TYPE_MOVE_FIELD,targetSelector:o,target:T,source:i,movedControl:l,movedElements:[n]};};var r=function(o,s,M,C,v){o.removeAllAggregation(s,M.CONTENT_AGGREGATION);for(var i=0;i<C.length;++i){o.insertAggregation(s,M.CONTENT_AGGREGATION,C[i],i,v);}};M.applyChange=function(C,s,p){var o=p.modifier;var v=p.view;var h=p.appComponent;var t,i;var j=C.getContent();var k=j.movedElements[0];var l=o.getAggregation(s,M.CONTENT_AGGREGATION);if(C.getChangeType()===M.CHANGE_TYPE_MOVE_FIELD){var S=o.bySelector(k.elementSelector||k.element,h,v);var n=l.indexOf(S);var u=g(o,l,n);t=o.bySelector(k.target.groupSelector||k.target.groupId,h,v);var T=l.indexOf(t);var w=o.bySelector(k.source.groupSelector||k.source.groupId,h,v);var x=l.indexOf(w);var y=c(o,l,T,k.target.fieldIndex,(x===T)&&(k.source.fieldIndex<k.target.fieldIndex));var z=g(o,l,y);i=l.slice();var F=i.slice(n,n+u);var B,D,E,H;if(n<y){B=i.slice(0,n);E=i.slice(n+u,y+z);H=i.slice(y+z,i.length);i=B.concat(E.concat(F.concat(H)));}else if(n>y){D=i.slice(0,y+z);E=i.slice(y+z,n);H=i.slice(n+u,i.length);i=D.concat(F.concat(E.concat(H)));}if(n!=y){r(o,s,M,i,v);}}else if(C.getChangeType()===M.CHANGE_TYPE_MOVE_GROUP){var K=[M.sTypeTitle,M.sTypeToolBar,M.sTypeMTitle,M.sTypeOverflowToolBar];var L=o.bySelector(k.elementSelector||k.element,h,v);if(k.target.groupIndex===0||!L){l=a(o,l,s,p,K,j.newControlId);}var N=L?l.indexOf(L):0;var O=m(o,K,l,k.target.groupIndex);t=l[O];var P=b(o,O,l,K);var Q=b(o,N,l,K);i=l.slice();i.splice(N,Q);O=i.indexOf(t);var R=k.source.groupIndex<k.target.groupIndex?P:0;i=A(l,N,i,O+R,Q);r(o,s,M,i,v);}else{q.sap.log.warning("Unknown change type detected. Cannot apply to SimpleForm");}return true;};M.completeChangeContent=function(C,s,p){var S;var o=p.modifier;var v=p.view;var h=p.appComponent;var i=o.bySelector(s.selector,h,v);var j=s.movedElements;if(j.length>1){q.sap.log.warning("Moving more than 1 Formelement is not yet supported.");}var k=j[0];k.element=sap.ui.getCore().byId(k.id);var l=q.extend({},s.source);var t=q.extend({},s.target);if(!t.parent){t.parent=sap.ui.getCore().byId(t.id);}if(!l.parent){l.parent=sap.ui.getCore().byId(l.id);}if(i&&k.element&&t.parent){if(s.changeType==="moveSimpleFormGroup"){S=d(i,k,l,t,p);}else if(s.changeType==="moveSimpleFormField"){S=e(i,k,l,t,p);}}else{q.sap.log.error("Element not found. This may caused by an instable id!");}var n=C.getDefinition();n.content.targetSelector=S.targetSelector;n.content.movedElements=S.movedElements;if(S.source&&S.target){C.addDependentControl(S.source,"sourceParent",p);C.addDependentControl(S.target,"targetParent",p);}C.addDependentControl([S.movedControl],"movedElements",p);};return M;},true);
