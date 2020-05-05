/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/fl/Utils','sap/ui/fl/changeHandler/Base','sap/ui/fl/changeHandler/JsControlTreeModifier'],function(U,B,J){"use strict";var A={};A.CONTENT_AGGREGATION="content";var f=function(M,s,c){for(var i=0;i<c.length;i++){var t=M.getControlType(c[i]);if(s.indexOf(t)===-1){if(M.getVisible(c[i])){return true;}}else{return false;}}};var m=function(M,s,c,g){var r;var C=-1;if(g===0){return g;}if(f(M,s,c)){C++;}for(var i=0;i<c.length;i++){var t=M.getControlType(c[i]);if(s.indexOf(t)>-1){C++;if(C===g){r=c[i];return c.indexOf(r);}}}return c.length;};A.applyChange=function(c,F,p){var M=p.modifier;var v=p.view;var a=p.appComponent;var C=c.getDefinition();if(C.texts&&C.texts.groupLabel&&C.texts.groupLabel.value&&C.content&&C.content.group&&(C.content.group.selector||C.content.group.id)){var g=C.content.group.selector;var G;if(g){if(g.idIsLocal){G=a.createId(g.id);}else{G=g.id;}}else{G=C.content.group.id;}var l=C.texts.groupLabel.value;var b=M.getAggregation(F,A.CONTENT_AGGREGATION);var i;var r;if(typeof C.content.group.index==="number"){i=C.content.group.index;}else{r=C.content.group.relativeIndex;i=m(M,["sap.ui.core.Title","sap.m.Title","sap.m.Toolbar","sap.m.OverflowToolbar"],b,r);}var t=M.createControl("sap.ui.core.Title",a,v,G);M.setProperty(t,"text",l);M.insertAggregation(F,"content",t,i,v);}else{U.log.error("Change does not contain sufficient information to be applied: ["+C.layer+"]"+C.namespace+"/"+C.fileName+"."+C.fileType);}return true;};A.completeChangeContent=function(c,s,p){var C=c.getDefinition();var a=p.appComponent;if(s.newLabel){B.setTextInChange(C,"groupLabel",s.newLabel,"XFLD");}else{throw new Error("oSpecificChangeInfo.newLabel attribute required");}if(!C.content){C.content={};}if(!C.content.group){C.content.group={};}if(s.newControlId){C.content.group.selector=J.getSelector(s.newControlId,a);}else{throw new Error("oSpecificChangeInfo.newControlId attribute required");}if(s.index===undefined){throw new Error("oSpecificChangeInfo.index attribute required");}else{C.content.group.relativeIndex=s.index;}};A.getControlIdFromChangeContent=function(c){var C;if(c&&c._oDefinition){C=c._oDefinition.content.group.id;}return C;};return A;},true);
