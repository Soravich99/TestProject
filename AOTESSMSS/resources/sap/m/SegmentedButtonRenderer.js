/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library"],function(c){"use strict";var T=c.TextDirection;var S={};S.render=function(r,C){var b=C.getButtons(),s=C.getSelectedButton(),B,t,a,d;if(C._bInOverflow){r.write("<div");r.writeControlData(C);r.writeClasses();r.write(">");r.renderControl(C.getAggregation("_select"));r.write("</div>");return;}r.write("<ul");if(S._addAllIconsClass(b)){r.addClass("sapMSegBIcons");}r.addClass("sapMSegB");r.writeClasses();if(C.getWidth()&&C.getWidth()!==''){r.addStyle('width',C.getWidth());}r.writeStyles();r.writeControlData(C);t=C.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.writeAccessibilityState(C,{role:"radiogroup"});r.write(">");for(var i=0;i<b.length;i++){B=b[i];r.write("<li");if(B.getVisible()){var e=B.getText(),o=B.getIcon(),I="",f;if(o){f=B._getImage((B.getId()+"-img"),o);if(f instanceof sap.m.Image){C._overwriteImageOnload(f);}else if(!B.getTooltip()){I=C._getIconAriaLabel(f);}}r.writeControlData(B);r.writeAttribute("aria-posinset",i+1);r.writeAttribute("aria-setsize",b.length);r.addClass("sapMSegBBtn");if(B.aCustomStyleClasses!==undefined&&B.aCustomStyleClasses instanceof Array){for(var j=0;j<B.aCustomStyleClasses.length;j++){r.addClass(B.aCustomStyleClasses[j]);}}if(B.getEnabled()){r.addClass("sapMSegBBtnFocusable");}else{r.addClass("sapMSegBBtnDis");}if(s===B.getId()){r.addClass("sapMSegBBtnSel");}if(o&&e!==''){r.addClass("sapMSegBBtnMixed");}r.writeClasses();a=B.getWidth();if(a){r.addStyle('width',a);r.writeStyles();}t=B.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.writeAttribute("tabindex",B.getEnabled()?"0":"-1");d=B.getTextDirection();if(d!==T.Inherit){r.writeAttribute("dir",d.toLowerCase());}r.writeAccessibilityState(B,{role:"radio",checked:s===B.getId()});if(f&&I!==""){if(e!==""){I+=" "+e;}else{r.writeAttributeEscaped("title",I);}r.writeAttributeEscaped("aria-label",I);}r.write('>');if(o&&f){r.renderControl(f);}if(e!==''){r.writeEscaped(e,false);}}else{r.writeInvisiblePlaceholderData(B);r.write('>');}r.write("</li>");}r.write("</ul>");};S._addAllIconsClass=function(b){for(var i=0;i<b.length;i++){if(!b[i].getIcon()){return false;}}return true;};return S;},true);
