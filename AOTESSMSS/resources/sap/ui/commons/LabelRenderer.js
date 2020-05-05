/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";var L={};L.render=function(o,l){var a=o;var r=L;a.write("<label");a.writeControlData(l);sap.ui.core.LabelEnablement.writeLabelForAttribute(o,l);var f=l._getLabeledControl();var t=l.getTooltip_AsString();if((!t||t=="")&&f&&f.getTooltip_AsString()&&f.getTooltip_AsString()!=""){t=f.getTooltip_AsString();}if(l.isRequired()){a.addClass('sapUiLblReq');if(l.getRequiredAtBegin()){a.addClass('sapUiLblReqBeg');}else{a.addClass('sapUiLblReqEnd');}}if(t){a.writeAttributeEscaped('title',t);}a.addClass("sapUiLbl");if(l.getDesign()==sap.ui.commons.LabelDesign.Bold){a.addClass("sapUiLblEmph");}var T=l.getTextDirection();if(T){a.addStyle("direction",T.toLowerCase());}var s=r.getTextAlign(l.getTextAlign(),T);if(s){a.addStyle("text-align",s);}var w=l.getWidth();if(w){a.addStyle("width",w);}if(!l.getWrapping()){a.addClass("sapUiLblNowrap");}a.writeStyles();a.writeClasses();a.write(">");if(l.getIcon()){this.writeImgHtml(a,l);}if(l.getText()){a.writeEscaped(l.getText());}a.write("</label>");};L.writeImgHtml=function(r,l){var a=r;var i=l.getIcon();var c=r.getConfiguration();var C=[];var A={"title":null};C.push("sapUiLblIco");if((l.getTextDirection()==sap.ui.core.TextDirection.RTL&&!c.getRTL())||(l.getTextDirection()==sap.ui.core.TextDirection.LTR&&c.getRTL())){C.push("sapUiLblIcoR");}else{C.push("sapUiLblIcoL");}a.writeIcon(i,C,A);};L.getTextAlign=R.getTextAlign;return L;},true);
