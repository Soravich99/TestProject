/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./MatrixLayoutCell','./MatrixLayoutRow','sap/ui/commons/library','sap/ui/core/Control','sap/ui/core/EnabledPropagator'],function(q,M,a,l,C,E){"use strict";var b=C.extend("sap.ui.commons.layout.MatrixLayout",{metadata:{library:"sap.ui.commons",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},layoutFixed:{type:"boolean",group:"Appearance",defaultValue:true},columns:{type:"int",group:"Appearance",defaultValue:null},widths:{type:"sap.ui.core.CSSSize[]",group:"Appearance",defaultValue:null}},defaultAggregation:"rows",aggregations:{rows:{type:"sap.ui.commons.layout.MatrixLayoutRow",multiple:true,singularName:"row"}}}});E.call(b.prototype,true,true);b.prototype.createRow=function(){var r=new a();this.addRow(r);for(var i=0;i<arguments.length;i++){var c=arguments[i];var o;if(c instanceof M){o=c;}else if(c instanceof C){o=new M({content:c});}else if(c instanceof Object&&c.height){r.setHeight(c.height);}else{var t=c?c.toString():"";o=new M({content:new sap.ui.commons.TextView({text:t})});}r.addCell(o);}return this;};b.prototype.setWidths=function(w){var s;if(!q.isArray(w)){s=q.makeArray(arguments);}else{s=w;}for(var i=0;i<s.length;i++){if(s[i]==""||!s[i]){s[i]="auto";}}this.setProperty("widths",s);return this;};return b;},true);
