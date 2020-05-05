/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/commons/library','sap/ui/core/Control'],function(q,l,C){"use strict";var B=C.extend("sap.ui.commons.layout.BorderLayout",{metadata:{library:"sap.ui.commons",properties:{rtl:{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'}},aggregations:{top:{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},begin:{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},center:{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},end:{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},bottom:{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false}}}});B.prototype._getOrCreateArea=function(a,c){var T=sap.ui.commons.layout.BorderLayoutAreaTypes,t=this,A;function b(m){var o;if(c){o=new sap.ui.commons.layout.BorderLayoutArea({id:t.getId()+"--"+a,areaId:a,content:c});t[m](o);}return o;}if(!T.hasOwnProperty(a)){throw new Error("Invalid Area Id '"+a+"'");}switch(a){case T.top:A=this.getTop()||b("setTop");break;case T.begin:A=this.getBegin()||b("setBegin");break;case T.center:A=this.getCenter()||b("setCenter");break;case T.end:A=this.getEnd()||b("setEnd");break;case T.bottom:A=this.getBottom()||b("setBottom");break;default:break;}return A;};B.prototype.getArea=function(a,c){return this._getOrCreateArea(a,c?[]:null);};B.prototype.createArea=function(a,c){return this._getOrCreateArea(a,Array.prototype.slice.call(arguments,1));};B.prototype.getAreaById=function(a){return this._getOrCreateArea(a,[]);};B.prototype.getAreaData=function(a){var A=this.getAreaById(a);return A?{size:A.getSize(),visible:A.getVisible(),overflowX:A.getOverflowX(),overflowY:A.getOverflowY(),contentAlign:A.getContentAlign()}:{};};B.prototype.setAreaData=function(a,d){this.getArea(a,true).applySettings(d);return this;};B.prototype.addContent=function(a){var A=this.getArea(a,true),i;for(var i=1;i<arguments.length;i++){A.addContent(arguments[i]);}return this;};B.prototype.insertContent=function(a,I){var A=this.getArea(a,true),i;for(i=2;i<arguments.length;i++){A.insertContent(arguments[i],I++);}return this;};B.prototype.removeContent=function(a,e){var A=this.getAreaById(a);if(A){A.removeContent(e);}return this;};B.prototype.removeAllContent=function(a){var A=this.getAreaById(a);if(A){A.removeAllContent();}return this;};B.prototype.getContent=function(a){var A=this.getAreaById(a);return A?A.getContent():[];};B.prototype.indexOfContent=function(a,c){var A=this.getAreaById(a);return A?A.indexOfContent(c):-1;};B.prototype.destroyContent=function(a){this.getAreaById(a,true).destroyContent();return this;};return B;},true);
